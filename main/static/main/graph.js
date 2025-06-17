document.addEventListener("DOMContentLoaded", function() {
    fetch('/graph-data/')
        .then(response => response.json())
        .then(data => {
            const nodes = new vis.DataSet(data.nodes);
            const edges = new vis.DataSet(data.edges);

            const container = document.getElementById('network');
            const options = {
                nodes: {
                    shape: 'circle',
                    size: 30,
                    color: {
                        background: '#23272a',
                        border: '#7289da',
                        highlight: {
                            background: '#7289da',
                            border: '#ffffff'
                        }
                    },
                    font: {
                        color: '#fff',
                        size: 16,
                        face: 'monospace'
                    },
                    borderWidth: 2,
                },
                edges: {
                    color: '#444',
                    width: 2,
                    smooth: {
                        type: 'dynamic'
                    }
                },
                physics: {
                    enabled: true,
                    barnesHut: {
                        gravitationalConstant: -2000,
                        centralGravity: 0.3,
                        springLength: 120,
                        springConstant: 0.04,
                        damping: 0.09
                    }
                },
                interaction: {
                    hover: true,
                    tooltipDelay: 100,
                    dragNodes: true,
                    dragView: true,
                    zoomView: true
                },
                groups: {
                    section: {
                        color: { background: '#23272a', border: '#7289da' }
                    },
                    article: {
                        color: { background: '#2c2f33', border: '#43b581' }
                    }
                }
            };

            const network = new vis.Network(container, { nodes, edges }, options);

            // Center node: add a profile icon (SVG or emoji for now)
            network.on("afterDrawing", function(ctx) {
                const centerNode = nodes.get()[0];
                if (centerNode) {
                    const pos = network.getPositions([centerNode.id])[centerNode.id];
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 30, 0, 2 * Math.PI, false);
                    ctx.fillStyle = "#23272a";
                    ctx.fill();
                    ctx.font = "32px monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#fff";
                    ctx.fillText("👤", pos.x, pos.y);
                    ctx.restore();
                }
            });

            // Node hover effect
            network.on("hoverNode", function(params) {
                nodes.update({id: params.node, size: 45});
            });
            network.on("blurNode", function(params) {
                nodes.update({id: params.node, size: 30});
            });

            // Node click to expand (fetch more nodes if needed)
            // For demo, just highlight for now
            network.on("click", function(params) {
                if (params.nodes.length) {
                    nodes.update({id: params.nodes[0], color: {background: '#7289da', border: '#fff'}});
                }
            });
        });
});
