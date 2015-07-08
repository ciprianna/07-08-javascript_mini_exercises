var tabLinks = new Array();
var contentDivs = new Array();

// Function sets up tabs
//
// Create an Array to get each line from the list tabs.
// Iterating through listTabs, if node is list item locate anchor tag
// and get URL link
//
//
function init(){
  var listTabs = document.getElementById("tabs").childNodes;
  for (var i = 0; i < listTabs.length; i++){
    if (listTabs[i].nodeName === "LI"){
      var tabLink = getFirstChildWithTagName(listTabs[i], "A");
      var id = getLink(tabLink.getAttribute("href"));
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById(id);
    }
  }
  
  // Starting with an index of 0, loop through tabLinks, adding
  // showTab function to each tab.
  var i = 0;
  
  for (var id in tabLinks){
    tabLinks[id].onclick = showTab;
    if (i === 0) tabLinks[id].className = "selected";
    i++;
  }
  
  // Starting with an index of 0, loop through contentDivs, adding 
  // hide Class when tab is not selected.
  var i = 0;
  
  for (var id in contentDivs){
    if (i !== 0) contentDivs[id].className = "tabContent hide";
    i++;
  }
}





var aboutTab = document.getElementById("about")

aboutTab.addEventListener("click", showTab)

var contactTab = document.getElementById("contact_us")

contactTab.addEventListener("click", showTab)

var locationTab = document.getElementById("location")

locationTab.addEventListener("click", showTab)