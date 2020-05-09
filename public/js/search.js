let FullResults;
let resultIndex = 0;
let totalResult;
const output = document.getElementById('output')
function searchDiagram() {
    var input = document.getElementById("mySearch");
    if (!input){
      output.innerHTML = `No Results`
      return;
    }
    input.focus();
  
    myDiagram.startTransaction("highlight search");
  
    if (input.value) {
      output.style.display = "inline-block";
      var regex = new RegExp(input.value[0].toUpperCase() +  
      input.value.slice(1));
      var results = myDiagram.findNodesByExample({ name: regex });
      myDiagram.highlightCollection(results);
      // try to center the diagram at the first node that was found
      myDiagram.scale = 1;
      if (results.count > 0){ 
        myDiagram.centerRect(results.first().actualBounds);
        FullResults = [];
        resultIndex = 0;
        FullResults.push(results.first())
        while (results.next()) {
          var item = results.value;
          FullResults.push(item)
        }
      }
      else {
        output.innerHTML = 'No Results'
        console.log('NO RESULTS')
      } 
      output.innerHTML = `Viewing ${resultIndex+1} of ${FullResults.length}`
    } else {  // empty string only clears highlighteds collection
      output.innerHTML = `No Results`
      output.style.display = "none";
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
              output.innerHTML = `Viewing ${resultIndex+1} of ${FullResults.length}`
              myDiagram.centerRect(FullResults[resultIndex].actualBounds);
            }
            break;
        case 40:
          if (resultIndex < FullResults.length-1){
            resultIndex ++;
            output.innerHTML = `Viewing ${resultIndex+1} of ${FullResults.length}`
            myDiagram.centerRect(FullResults[resultIndex].actualBounds);
          }
            break;
    }
};