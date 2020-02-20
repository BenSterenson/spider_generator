let eval_str = `var getXPath = function getElementXPath(element)
{
    if (element && element.id)
        return '//*[@id="' + element.id + '"]';
    else
        return TreeXPath(element);
};

var TreeXPath = function getElementTreeXPath(element)
{
    var paths = [];  // Use nodeName (instead of localName)
    // so namespace prefix is included (if any).
    for (; element && element.nodeType == Node.ELEMENT_NODE;
           element = element.parentNode)
    {
        var index = 0;
        var hasFollowingSiblings = false;
        for (var sibling = element.previousSibling; sibling;
              sibling = sibling.previousSibling)
        {
            // Ignore document type declaration.
            if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                continue;

            if (sibling.nodeName == element.nodeName)
                ++index;
        }

        for (var sibling = element.nextSibling;
            sibling && !hasFollowingSiblings;
            sibling = sibling.nextSibling)
        {
            if (sibling.nodeName == element.nodeName)
                hasFollowingSiblings = true;
        }

        var tagName = (element.prefix ? element.prefix + ":" : "")
                          + element.localName;
        var pathIndex = (index || hasFollowingSiblings ? "["
                   + (index + 1) + "]" : "");
        paths.splice(0, 0, tagName + pathIndex);
    }

    return paths.length ? "/" + paths.join("/") : null;
};

getXPath($0)`;

export default {
    name: 'app',
    data: () => ({
      fieldName: null,
      xPath: null
    }),
    methods: {
        getXpath() {
            browser.devtools.inspectedWindow.eval(eval_str, result => {
                this.xPath = result;
            });
        }
    }
}
