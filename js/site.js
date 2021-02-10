
// For the clicked button, set active, then set display: block on panel. 
// Also remove active from other buttons and set display: none on other panels.
function toggleAccordion(button) {
  button.classList.toggle("active");
  var panel = button.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}

// Beautifully ugly little native js show-hide for the tables :)
function toggleViewTable(button, tableClass, showingLabel, hidingLabel) {
  var currentLabel = button.innerHTML
    var table = document.getElementsByClassName(tableClass)[0]
    console.log(currentLabel)
    switch (currentLabel) {
      case hidingLabel:
          console.log("Showing table " + tableClass);
            table.style.cssText = ""
            button.innerHTML = showingLabel;
            break;
        case showingLabel:
          console.log("Hiding table " + tableClass);
            table.style.cssText = "display: none;"
            button.innerHTML = hidingLabel;
            break;
  }

}