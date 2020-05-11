let FullResults;
let resultIndex = 0;
const resultOutput = document.querySelector('.resultOutput');
const numOfResults = document.getElementById('numOfResults');

const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');

function searchDiagram() {
    var input = document.getElementById("mySearch");
    if (!input){
      return;
    }
    input.focus();
  
    myDiagram.startTransaction("highlight search");
  
    if (input.value) {
      var regex = new RegExp(input.value[0].toUpperCase() +  
      input.value.toLowerCase().slice(1));
      var results = myDiagram.findNodesByExample({ name: regex });
      myDiagram.highlightCollection(results);
      // try to center the diagram at the first node that was found
      myDiagram.scale = 1;
      if (results.count >= 1){ 
        myDiagram.centerRect(results.first().actualBounds);
        FullResults = [];
        resultIndex = 0;
        FullResults.push(results.first())
        while (results.next()) {
          var item = results.value;
          FullResults.push(item)
        }
        console.log(FullResults[0].actualBounds)
        resultOutput.classList.add('visible')
        displayArrows(resultIndex, results.count)
        numOfResults.innerHTML = `${resultIndex+1} of ${results.count}`

      }
      else {
        console.log('NO RESULTS');
        resultOutput.classList.remove('visible')
        numOfResults.innerHTML = `No Results`
      } 
      // output.innerHTML = `Viewing ${resultIndex+1} of ${FullResults.length}`
    } else {  // empty string only clears highlighteds collection
      myDiagram.clearHighlighteds();
    }
    myDiagram.commitTransaction("highlight search");
  
  }

 // Arrows switching through people
  document.onkeydown = ChangeItem;
  function ChangeItem(e) {
    if (FullResults === undefined) return;
    switch (e.keyCode ) {
        case 38:
            if (0 < resultIndex){
              resultIndex --;
              displayArrows(resultIndex, FullResults.length)
              numOfResults.innerHTML = `${resultIndex+1} of ${FullResults.length}`
              myDiagram.centerRect(FullResults[resultIndex].actualBounds);
            }
            break;
        case 40:
          if (resultIndex < FullResults.length-1){
            resultIndex ++;
            displayArrows(resultIndex, FullResults.length)
            numOfResults.innerHTML = `${resultIndex+1} of ${FullResults.length}`
            myDiagram.centerRect(FullResults[resultIndex].actualBounds);
          }
            break;
    }
};

//arrow clicking through people 
leftArrow.addEventListener('click', () => {
    resultIndex --;
    displayArrows(resultIndex, FullResults.length)
    numOfResults.innerHTML = `${resultIndex+1} of ${FullResults.length}`
    myDiagram.centerRect(FullResults[resultIndex].actualBounds);
})

rightArrow.addEventListener('click', () => {
  resultIndex ++;
  displayArrows(resultIndex, FullResults.length)
  numOfResults.innerHTML = `${resultIndex+1} of ${FullResults.length}`
  myDiagram.centerRect(FullResults[resultIndex].actualBounds);
})

//0 or 1 = no arrow, index = 0 = one arrow, index < length -1 = two arrows, index = length-1 = one arrow
function displayArrows (index, length)  {
  console.log(index, length)
  if (length < 2){
    leftArrow.style.display = "none"
    rightArrow.style.display = "none"
    return
  }else if (index === 0 ){
    rightArrow.style.display = "flex";
    leftArrow.style.display = "none"
  }else if ( index !=length-1 ) {
    rightArrow.style.display = "flex";
    leftArrow.style.display = "flex"
  }else {
    leftArrow.style.display = "flex"
    rightArrow.style.display = "none"
  }

}