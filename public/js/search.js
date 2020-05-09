let FullResults;
let resultIndex = 0;
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
      // try to center the diagram at the first node that was found
      myDiagram.scale = 1;
      if (results.count > 0){ 
        myDiagram.centerRect(results.first().actualBounds);
        FullResults = []
        FullResults.push(results.first())
        while (results.next()) {
          var item = results.value;
          FullResults.push(item)
        }
        console.log(FullResults)
        FullResults.forEach((e)=>console.log(e.actualBounds))
      } 
    } else {  // empty string only clears highlighteds collection
      myDiagram.clearHighlighteds();
    }
    myDiagram.commitTransaction("highlight search");
  
  }

  document.onkeydown = ChangeItem;
  
  function ChangeItem(e) {
    if (FullResults === undefined) return;
    switch (e.keyCode ) {
        case 38:
            if (0 < resultIndex){
              resultIndex --;
              myDiagram.centerRect(FullResults[resultIndex].actualBounds);
            }
            break;
        case 40:
          if (resultIndex < FullResults.length-1){
            resultIndex ++;
            myDiagram.centerRect(FullResults[resultIndex].actualBounds);
          }
            break;
    }
};