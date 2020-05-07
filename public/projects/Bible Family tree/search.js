function searchDiagram() {
    var input = document.getElementById("mySearch");
    if (!input){
      return;
    }
    input.focus();
  
    myDiagram.startTransaction("highlight search");
  
    if (input.value) {
      var regex = new RegExp(input.value[0].toUpperCase() +  
      input.value.slice(1));
      var results = myDiagram.findNodesByExample({ name: regex });
      myDiagram.highlightCollection(results);
      // try to center the diagram at the first node that was foundAdam
      myDiagram.scale = 1;
      if (results.count > 0){ 
        myDiagram.centerRect(results.first().actualBounds);
      }
    } else {  // empty string only clears highlighteds collection
      myDiagram.clearHighlighteds();
    }
  
    myDiagram.commitTransaction("highlight search");
  
  }