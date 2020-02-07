var backgroundPageConnection=chrome.runtime.connect({name:"devtools_page"});

chrome.devtools.panels.elements.createSidebarPane("Sixgill",function(sidebar){
    sidebar.setPage("../devtools/assets/js/app.html");
    //sidebar.onShown.addListener(handleShown);
    //sidebar.onHidden.addListener(handleHidden)
});
    
function handleShown(){
    chrome.extension.sendMessage({message:"generate-selector"})
}

function handleHidden(){
    var xpathOrCss='xpath';
    var onChange=!1;
    var xpath=[xpathOrCss,'',onChange];
    backgroundPageConnection.postMessage({name:"highlight-element",tabId:chrome.devtools.inspectedWindow.tabId,xpath:xpath})
}