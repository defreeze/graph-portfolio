from django.db import models

class Node(models.Model):
    label = models.CharField(max_length=100)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)
    node_type = models.CharField(max_length=50, default='section')

    def __str__(self):
        return self.label

class Article(models.Model):
    node = models.ForeignKey(Node, related_name='articles', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title
