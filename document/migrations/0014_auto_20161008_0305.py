# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-08 08:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0013_auto_20161003_1756'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='contents',
            field=models.TextField(default=b'{}'),
        ),
        migrations.AlterField(
            model_name='document',
            name='settings',
            field=models.TextField(default=b'{"doc_version":0}'),
        ),
    ]
