/** A template for HTML export of a book. */
export let htmlBookExportTemplate = _.template('\
<!DOCTYPE html>\n\
<html>\n<head><title><%= title %></title>\
    <% var tempNode; %>\
    <% _.each(styleSheets,function(item){ %>\
        \t<link rel="stylesheet" type="text/css" href="<%= item.filename %>" />\
    <% }); %>\
    </head><body>\
    <% if (part && part !="") { %>\
        <h1 class="part"><%= part %></h1>\
    <% } %>\
    <h1 class="title"><%= title %></h1>\
    <% if (settings["metadata-subtitle"] && metadata.subtitle) { %>\
        <% tempNode = obj2Node(metadata.subtitle); %>\
        <% if (tempNode.textContent.length > 0) { %>\
            <h2 class="subtitle"><%= tempNode.textContent %></h2>\
        <% } %>\
    <% } %>\
    <% if (settings["metadata-abstract"] && metadata.abstract) { %>\
        <% tempNode = obj2Node(metadata.abstract); %>\
        <% if (tempNode.textContent.length > 0) { %>\
            <div class="abstract"><%= tempNode.textContent %></div>\
        <% } %>\
    <% } %>\
    <% if (settings["metadata-authors"] && metadata.authors) { %>\
        <% tempNode = obj2Node(metadata.authors); %>\
        <% if (tempNode.textContent.length > 0) { %>\
            <div class="authors"><%= tempNode.textContent %></div>\
        <% } %>\
    <% } %>\
    <% if (settings["metadata-keywords"] && metadata.keywords) { %>\
        <% tempNode = obj2Node(metadata.keywords); %>\
        <% if (tempNode.textContent.length > 0) { %>\
            <div class="keywords"><%= tempNode.textContent %></div>\
        <% } %>\
    <% } %>\
    <%= contents %></body></html>'
)

/** A template to create the book index. */
export let htmlBookIndexTemplate = _.template('\
    <html>\n\
    \t<head>\n\
    \t\t<meta charset="utf-8"></meta>\n\
    \t\t<title><%- aBook.title %></title>\n\
    \t</head>\n\
    \t<body>\n\
    \t\t<h1><%- aBook.title %></h1>\
    <% if (aBook.metadata.subtitle !="") { %>\
        \t\t<h2><%- aBook.metadata.subtitle %></h2>\
    <% } %>\
    <% if (aBook.metadata.author !="") { %>\
        \t\t<h3>'+gettext('by')+' <%- aBook.metadata.author %></h3>\
    <% } %>\
    \t\t<ol>\n\
        <% _.each(contentItems,function(item){ %>\
            <%= templates.htmlBookIndexItemTemplate({"item":item, "templates": templates})%>\
        <% }); %>\
    \t\t</ol>\n\
    <% if (aBook.metadata.publisher && aBook.metadata.publisher !="") { %>\
        \t\t<p>'+gettext('Published by')+': <%- aBook.metadata.publisher %></p>\
    <% } %>\
    \t\t<p>'+gettext('Last Updated')+': <%= aBook.updated %></p>\
    \t\t<p>'+gettext('Created')+': <%= aBook.added %></p>\
    \t\t<p>'+gettext('Language')+': <%= language %></p>\
    \t\t<p>'+gettext('Created by')+': <%= creator %></p>\
    \t</body>\n\
    </html>'
)
/** A template to create the book index item. */
export let htmlBookIndexItemTemplate = _.template('\
\t\t\t\t<li><a href="<% if (item.link) {print(item.link);} else { %>document<% if (item.docNum) {print("-"+item.docNum);}%>.html#<% print(item.id); } %>"><%= item.title %></a>\
    <% if (item.subItems.length > 0) { %>\
        <ol>\
            <% _.each(item.subItems,function(item){ %>\
                <%= templates.htmlBookIndexItemTemplate({"item":item, "templates": templates})%>\
            <% }); %>\
        </ol>\
    <% } %>\
</li>\n');
