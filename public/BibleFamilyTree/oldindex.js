const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open")
    hamburger.classList.toggle("twist")
})

function init() {
  var $ = go.GraphObject.make;  // for conciseness in defining templates
  // create Diagram
  myDiagram =
    $(go.Diagram, "myDiagramDiv",  // must be the ID of the div
    {
      initialAutoScale: go.Diagram.Uniform ,
    //initialContentAlignment: go.Spot.TopCenter,
      allowCopy: false,
      "toolManager.hoverDelay": 80,
      layout:  // create a TreeLayout for the family tree
        $(go.TreeLayout,
        { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform })
    });

  // Colors : male, female
  let male = '#73DBF6';
  let female = '#FFB8DD';
  let kingOfIsrael = "#906BF3";
  let kingOfJudah = "#EFB04A";
  let familyLink = "#E76763";
  let isTribe = "#38ef7d";

  // This appears on hover
  // {ADD OTHER DATA IF APPLICABLE e.g. REIGN FOR KINGS and Length of judges }
  function tooltipTextConverter(person) {
    var str = "";
    str += "Name: " + person.name;
    if (person.mother!== undefined) str += "\nMother: " + person.mother;
    if (person.wife!== undefined) str += "\nWife: " + person.wife;
    if (person.death!== undefined) str += "\nAge at Death: " + person.death;

    return str;
  }

  // define tooltips for nodes -- Hovering element
  var tooltiptemplate =
    $("ToolTip",
      { "Border.fill": "whitesmoke", "Border.stroke": "black" },
      $(go.TextBlock,
        {
          font: "bold 8pt Helvetica, bold Arial, sans-serif",
          wrap: go.TextBlock.WrapFit,
          margin: 5
        },
        new go.Binding("text", "", tooltipTextConverter))
  );

    // define Converters to be used for Bindings
  function genderBrushConverter(gender) {
    if (gender === "M") return male;
    if (gender === "F") return female;
    return "orange";
  }

// replace the default Node template in the nodeTemplateMap
  // This is the node style
  myDiagram.nodeTemplate =
    $(go.Node, "Auto",
    { // when the user clicks on a Node, highlight all Links coming into the node
      click: function(e, node) {
      var diagram = node.diagram;
      diagram.clearHighlighteds();
      getGenealogy(node);
    },
      deletable: false, toolTip: tooltiptemplate },
      new go.Binding("text", "name"),
      $(go.Shape, "RoundedRectangle",
        {
          fill: "lightgray",
          strokeWidth: 6,
          stretch: go.GraphObject.Fill,
          alignment: go.Spot.Center
        },
        new go.Binding("fill", "gender", genderBrushConverter),
        new go.Binding("fill", "tribe", function(v) { return v ? isTribe : "blue"; }),
        new go.Binding("fill", "kingOfIsrael", function(k) { return k ? kingOfIsrael : kingOfJudah; }),
        new go.Binding("stroke", "isHighlighted", function(h) {return h ? "yellow" : "#11998e" }).ofObject(),
      ),
      $(go.TextBlock,
        {
          font: "700 12px Droid Serif, sans-serif",
          textAlign: "center",
          margin: 10, maxSize: new go.Size(80, NaN)
        },
        new go.Binding("text", "name"))
    );

    // define the Link template/ style
    myDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        { routing: go.Link.Orthogonal, corner: 5, selectable: false },
        $(go.Shape,
    {strokeWidth: 3, stroke: '#424242' },
    new go.Binding("stroke", "isHighlighted", function(h) { return h ? familyLink : "black"; }).ofObject(),
    new go.Binding("strokeWidth", "isHighlighted", function(w) { return w ? 6 : 1; }).ofObject()
    ));

    // create the model for the family tree
    myDiagram.model = new go.TreeModel(nodeDataArray);

  // Double click to zoom out
  document.getElementById('toFit').addEventListener('click', function() {
    myDiagram.zoomToFit();
  });
  window.addEventListener('resize',() => {
    let div = myDiagram.div;
    div.style.width = `${screen.availWidth}px`;
    console.log(screen.availWidth ) 
    myDiagram.requestUpdate();
    myDiagram.zoomToFit();
  })

  myDiagram.isReadOnly = true;

  function getGenealogy(node){
    let parent = node.findTreeParentNode();
    node.findLinksInto().each(function(l) { l.isHighlighted = true; });
    node.findNodesInto().each(function(n) { n.isHighlighted = true; });
    if (parent){
      getGenealogy(parent)
    } else {
      return
    }
  }
}// END OF INIT

