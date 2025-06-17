from django.shortcuts import render
from django.http import JsonResponse
from .models import Node, Article

def index(request):
    return render(request, 'main/index.html')

def graph_data(request):
    nodes = []
    edges = []
    all_nodes = Node.objects.all()
    for node in all_nodes:
        nodes.append({
            'id': node.id,
            'label': node.label,
            'group': node.node_type,
        })
        if node.parent:
            edges.append({'from': node.parent.id, 'to': node.id})
    for article in Article.objects.all():
        nodes.append({
            'id': f'article_{article.id}',
            'label': article.title,
            'group': 'article',
        })
        edges.append({'from': article.node.id, 'to': f'article_{article.id}'})
    return JsonResponse({'nodes': nodes, 'edges': edges})
