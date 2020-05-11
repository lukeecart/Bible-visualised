/*Colours */
let male = '#73DBF6';
let female = '#FFB8DD';

function init() {
  var myVar;
  function myFunction() {
    myVar = setTimeout(showPage, 200);
  }
  function showPage() {
    document.querySelector(".lds-ellipsis").style.display = "none";
    document.getElementById("myDiagramDiv").style.display = "block";
  }
  myFunction()
  if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make;
  myDiagram =
    $(go.Diagram, "myDiagramDiv",
      {
        initialAutoScale: go.Diagram.Uniform,
        "undoManager.isEnabled": true,
        // The following decides when a node is selected
        nodeSelectionAdornmentTemplate:
          $(go.Adornment, "Auto",
            { layerName: "Grid" },  // the predefined layer that is behind everything else
            $(go.Shape, "Circle", { fill: "red", stroke: null }),
            $(go.Placeholder, { margin: 2 })
          ),
        layout:  // use a custom layout, defined below
          $(GenogramLayout, { direction: 90, layerSpacing: 30, columnSpacing: 10 })
      });

  // two different node templates, one for each sex,
  // named by the category value in the node data object
  myDiagram.nodeTemplateMap.add("Male",  // male
    $(go.Node, "Vertical",
      { locationSpot: go.Spot.Center, locationObjectName: "ICON", selectionObjectName: "ICON" },
      $(go.Panel,
        { name: "ICON" },
        $(go.Shape, "Square",
          { width: 40, height: 40, strokeWidth: 2, fill: male, stroke: "#919191", portId: "" }),
        $(go.Panel,
          { // for each attribute show a Shape at a particular place in the overall square
            itemTemplate:
              $(go.Panel,
                $(go.Shape,
                  { stroke: null, strokeWidth: 0 }
                )
              ),
            margin: 1
          }
        )
      ),
      $(go.TextBlock,
        { textAlign: "center", maxSize: new go.Size(80, NaN) },
        new go.Binding("text", "name"))
    ));

  myDiagram.nodeTemplateMap.add("Female",  // female
    $(go.Node, "Vertical",
      { locationSpot: go.Spot.Center, locationObjectName: "ICON", selectionObjectName: "ICON" },
      $(go.Panel,
        { name: "ICON" },
        $(go.Shape, "Circle",
          { width: 40, height: 40, strokeWidth: 2, fill: female, stroke: "#a1a1a1", portId: "" }),
        $(go.Panel,
          { // for each attribute show a Shape at a particular place in the overall circle
            itemTemplate:
              $(go.Panel,
                $(go.Shape,
                  { stroke: null, strokeWidth: 0 },
                )
              ),
            margin: 1
          },
        )
      ),
      $(go.TextBlock,
        { textAlign: "center", maxSize: new go.Size(80, NaN) },
        new go.Binding("text", "name"))
    ));

  // the representation of each label node -- nothing shows on a Marriage Link
  myDiagram.nodeTemplateMap.add("LinkLabel",
    $(go.Node, { selectable: false, width: 1, height: 1, fromEndSegmentLength: 20 }));


  myDiagram.linkTemplate =  // link for parent-child relationships
    $(go.Link,
      {
        routing: go.Link.Orthogonal, corner: 5,
        layerName: "Background", selectable: false,
        fromSpot: go.Spot.Bottom, toSpot: go.Spot.Top
      },
      $(go.Shape, { stroke: "black", strokeWidth: 2 })
    );

  myDiagram.linkTemplateMap.add("Marriage",  // for marriage relationships
    $(go.Link,
      $(go.Shape, { strokeWidth: 2.5, stroke: "#5d8cc1" /* blue */ })
    ));

  function tooltipTextConverter(person) {
    var str = "";
    str += "Name: " + person.name;
    const partners = person.partners.split(",");
    if (person.mother !== "") str += "\nmother: " + nodeDataArray.find(x => x.key === person.mother).name;
    if (person.partners !== "") {
      str += `\nPartner(s): `;
      partners.forEach(partner => str += `${nodeDataArray.find(x => x.key === partner).name}, `);
    }
    return str
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
  //SETTINGS FOR DIAGRAM
  // myDiagram.isReadOnly = true;

  // name: name, "gender": sex, "mother": "", "father": father, partner: husband/wife
  // NOTE: Remove partner: "" and add multiple partners to an array.
  // NOTE: FOR UNKNOWN PARENTS DO THIS....... 

  setupDiagram(myDiagram,
    // nodeDataArray
    [
    { "key": "Grandad_1", "name": "Grandad", "gender": "Male"},
    { "key": "Mum_1", "name": "Mum", "gender": "Female"},
    { "key": "Dad_1", "name": "Dad", "gender": "Male", "partner": "Mum_1" , "father" : "Grandad_1"}, 
    { "key": "Child_1", "name": "Child", "gender": "Male", "father": "Dad_1", "mother": "Mum_1"},
    { "key": "Child_2", "name": "Child_2", "gender": "Female",  "father": "Dad_1", "mother": "Mum_1"},
    { "key": "Child_3", "name": "Child_3", "gender": "Female", "father": "Dad_1", "mother": "Mum_1"},
  ]
  ,
    4 /* focus on this person */);
  console.log("Complete")

} // END OF INIT





// create and initialize the Diagram.model given an array of node data representing people
function setupDiagram(diagram, array, focusId) {
  diagram.model =
    go.GraphObject.make(go.GraphLinksModel,
      { // declare support for link label nodes
        linkLabelKeysProperty: "labelKeys",
        // this property determines which template is used
        nodeCategoryProperty: "gender",
        // if a node data object is copied, copy its data.a Array
        copiesArrays: true,
        // create all of the nodes for people
        nodeDataArray: array
      });
  setupMarriages(diagram);
  setupParents(diagram);

  var node = diagram.findNodeForKey(focusId);
  if (node !== null) {
    diagram.select(node);
    // remove any spouse for the person under focus:
    //node.linksConnected.each(function(l) {
    //  if (!l.isLabeledLink) return;
    //  l.opacity = 0;
    //  var spouse = l.getOtherNode(node);
    //  spouse.opacity = 0;
    //  spouse.pickable = false;
    //});
  }
}

function findMarriage(diagram, a, b) {  // A and B are node keys
  console.log("marriage= ", diagram, a, b)
  var nodeA = diagram.findNodeForKey(a);
  var nodeB = diagram.findNodeForKey(b);
  if (nodeA !== null && nodeB !== null) {
    var it = nodeA.findLinksBetween(nodeB);
    while (it.next()) {
      var link = it.value;
      // Link.data.category === "Marriage" means it's a marriage relationship
      if (link.data !== null && link.data.category === "Marriage") return link;
    }
  } 
  return null;
}

// now process the node data to determine marriages
function setupMarriages(diagram) {
  var model = diagram.model;
  var nodeDataArray = model.nodeDataArray;
  for (var i = 0; i < nodeDataArray.length; i++) {
    var data = nodeDataArray[i];
    var key = data.key;
    var partners = data.partner;
    if (partners !== undefined) {
      if (typeof partners === "string") partners = [partners];
      console.log(partners)
      for (var j = 0; j < partners.length; j++) {
        var partner = partners[j];
        if (key === partner) {
          // or warn no reflexive marriages
          continue;
        }
        var link = findMarriage(diagram, key, partner);
        if (link === null) {
          // add a label node for the marriage link
          var mlab = { typeofLink: "LinkLabel" };
          model.addNodeData(mlab);
          // add the marriage link itself, also referring to the label node
          var mdata = { from: key, to: partner, labelKeys: [mlab.key], category: "Marriage" };
          console.log("mdata = ", mdata)
          model.addLinkData(mdata);
        }
      }
    }
  }
}

// process parent-child relationships once all marriages are known
function setupParents(diagram) {
  var model = diagram.model;
  var nodeDataArray = model.nodeDataArray;
  for (var i = 0; i < nodeDataArray.length; i++) {
    var data = nodeDataArray[i];
    var key = data.key;
    var mother = data.mother;
    var father = data.father;
    if (mother !== undefined || father !== undefined) {
      var link = findMarriage(diagram, mother, father);
      if (link === null) {
        // or warn no known mother or no known father or no known marriage between them
        if (window.console) window.console.log("unknown marriage: " + mother + " & " + father);
        continue;
      }
      var mdata = link.data;
      var mlabkey = mdata.labelKeys[0];
      var cdata = { from: mlabkey, to: key };
      myDiagram.model.addLinkData(cdata);
    } else {
      // Missing a parent
      console.log(data, "missing a parent");
      var cdata = { from: father, to: key };
      console.log(cdata)
      myDiagram.model.addLinkData(cdata);
    }
  }
}

// A custom layout that shows the two families related to a person's parents
function GenogramLayout() {
  go.LayeredDigraphLayout.call(this);
  this.initializeOption = go.LayeredDigraphLayout.InitDepthFirstIn;
  this.spouseSpacing = 30;  // minimum space between spouses
}
go.Diagram.inherit(GenogramLayout, go.LayeredDigraphLayout);

GenogramLayout.prototype.makeNetwork = function (coll) {
  // generate LayoutEdges for each parent-child Link
  var net = this.createNetwork();
  if (coll instanceof go.Diagram) {
    this.add(net, coll.nodes, true);
    this.add(net, coll.links, true);
  } else if (coll instanceof go.Group) {
    this.add(net, coll.memberParts, false);
  } else if (coll.iterator) {
    this.add(net, coll.iterator, false);
  }
  return net;
};

// internal method for creating LayeredDigraphNetwork where husband/wife pairs are represented
// by a single LayeredDigraphVertex corresponding to the label Node on the marriage Link
GenogramLayout.prototype.add = function (net, coll, nonmemberonly) {
  var multiSpousePeople = new go.Set();
  // consider all Nodes in the given collection
  var it = coll.iterator;
  while (it.next()) {
    var node = it.value;
    if (!(node instanceof go.Node)) continue;
    if (!node.isLayoutPositioned || !node.isVisible()) continue;
    if (nonmemberonly && node.containingGroup !== null) continue;
    // if it's an unmarried Node, or if it's a Link Label Node, create a LayoutVertex for it
    if (node.isLinkLabel) {
      // get marriage Link
      var link = node.labeledLink;
      var spouseA = link.fromNode;
      var spouseB = link.toNode;
      // create vertex representing both husband and wife
      var vertex = net.addNode(node);
      // now define the vertex size to be big enough to hold both spouses
      vertex.width = spouseA.actualBounds.width + this.spouseSpacing + spouseB.actualBounds.width;
      vertex.height = Math.max(spouseA.actualBounds.height, spouseB.actualBounds.height);
      vertex.focus = new go.Point(spouseA.actualBounds.width + this.spouseSpacing / 2, vertex.height / 2);
    } else {
      // don't add a vertex for any married person!
      // instead, code above adds label node for marriage link
      // assume a marriage Link has a label Node
      var marriages = 0;
      node.linksConnected.each(function (l) { if (l.isLabeledLink) marriages++; });
      if (marriages === 0) {
        var vertex = net.addNode(node);
      } else if (marriages > 1) {
        multiSpousePeople.add(node);
      }
    }
  }
  // now do all Links
  it.reset();
  while (it.next()) {
    var link = it.value;
    if (!(link instanceof go.Link)) continue;
    if (!link.isLayoutPositioned || !link.isVisible()) continue;
    if (nonmemberonly && link.containingGroup !== null) continue;
    // if it's a parent-child link, add a LayoutEdge for it
    if (!link.isLabeledLink) {
      var parent = net.findVertex(link.fromNode);  // should be a label node
      var child = net.findVertex(link.toNode);
      if (child !== null) {  // an unmarried child
        net.linkVertexes(parent, child, link);
      } else {  // a married child
        link.toNode.linksConnected.each(function (l) {
          if (!l.isLabeledLink) return;  // if it has no label node, it's a parent-child link
          // found the Marriage Link, now get its label Node
          var mlab = l.labelNodes.first();
          // parent-child link should connect with the label node,
          // so the LayoutEdge should connect with the LayoutVertex representing the label node
          var mlabvert = net.findVertex(mlab);
          if (mlabvert !== null) {
            net.linkVertexes(parent, mlabvert, link);
          }
        });
      }
    }
  }

  while (multiSpousePeople.count > 0) {
    // find all collections of people that are indirectly married to each other
    var node = multiSpousePeople.first();
    var cohort = new go.Set();
    this.extendCohort(cohort, node);
    // then encourage them all to be the same generation by connecting them all with a common vertex
    var dummyvert = net.createVertex();
    net.addVertex(dummyvert);
    var marriages = new go.Set();
    cohort.each(function (n) {
      n.linksConnected.each(function (l) {
        marriages.add(l);
      })
    });
    marriages.each(function (link) {
      // find the vertex for the marriage link (i.e. for the label node)
      var mlab = link.labelNodes.first()
      var v = net.findVertex(mlab);
      if (v !== null) {
        net.linkVertexes(dummyvert, v, null);
      }
    });
    // done with these people, now see if there are any other multiple-married people
    multiSpousePeople.removeAll(cohort);
  }
};

// collect all of the people indirectly married with a person
GenogramLayout.prototype.extendCohort = function (coll, node) {
  if (coll.has(node)) return;
  coll.add(node);
  var lay = this;
  node.linksConnected.each(function (l) {
    if (l.isLabeledLink) {  // if it's a marriage link, continue with both spouses
      lay.extendCohort(coll, l.fromNode);
      lay.extendCohort(coll, l.toNode);
    }
  });
};

GenogramLayout.prototype.assignLayers = function () {
  go.LayeredDigraphLayout.prototype.assignLayers.call(this);
  var horiz = this.direction == 0.0 || this.direction == 180.0;
  // for every vertex, record the maximum vertex width or height for the vertex's layer
  var maxsizes = [];
  this.network.vertexes.each(function (v) {
    var lay = v.layer;
    var max = maxsizes[lay];
    if (max === undefined) max = 0;
    var sz = (horiz ? v.width : v.height);
    if (sz > max) maxsizes[lay] = sz;
  });
  // now make sure every vertex has the maximum width or height according to which layer it is in,
  // and aligned on the left (if horizontal) or the top (if vertical)
  this.network.vertexes.each(function (v) {
    var lay = v.layer;
    var max = maxsizes[lay];
    if (horiz) {
      v.focus = new go.Point(0, v.height / 2);
      v.width = max;
    } else {
      v.focus = new go.Point(v.width / 2, 0);
      v.height = max;
    }
  });
  // from now on, the LayeredDigraphLayout will think that the Node is bigger than it really is
  // (other than the ones that are the widest or tallest in their respective layer).
};

GenogramLayout.prototype.commitNodes = function () {
  go.LayeredDigraphLayout.prototype.commitNodes.call(this);
  // position regular nodes
  this.network.vertexes.each(function (v) {
    if (v.node !== null && !v.node.isLinkLabel) {
      v.node.position = new go.Point(v.x, v.y);
    }
  });
  // position the spouses of each marriage vertex
  var layout = this;
  this.network.vertexes.each(function (v) {
    if (v.node === null) return;
    if (!v.node.isLinkLabel) return;
    var labnode = v.node;
    var lablink = labnode.labeledLink;
    // In case the spouses are not actually moved, we need to have the marriage link
    // position the label node, because LayoutVertex.commit() was called above on these vertexes.
    // Alternatively we could override LayoutVetex.commit to be a no-op for label node vertexes.
    lablink.invalidateRoute();
    var spouseA = lablink.fromNode;
    var spouseB = lablink.toNode;
    // prefer fathers on the left, mothers on the right
    if (spouseA.data.s === "F") {  // sex is female
      var temp = spouseA;
      spouseA = spouseB;
      spouseB = temp;
    }
    // see if the parents are on the desired sides, to avoid a link crossing
    var aParentsNode = layout.findParentsMarriageLabelNode(spouseA);
    var bParentsNode = layout.findParentsMarriageLabelNode(spouseB);
    if (aParentsNode !== null && bParentsNode !== null && aParentsNode.position.x > bParentsNode.position.x) {
      // swap the spouses
      var temp = spouseA;
      spouseA = spouseB;
      spouseB = temp;
    }
    spouseA.position = new go.Point(v.x, v.y);
    spouseB.position = new go.Point(v.x + spouseA.actualBounds.width + layout.spouseSpacing, v.y);
    if (spouseA.opacity === 0) {
      var pos = new go.Point(v.centerX - spouseA.actualBounds.width / 2, v.y);
      spouseA.position = pos;
      spouseB.position = pos;
    } else if (spouseB.opacity === 0) {
      var pos = new go.Point(v.centerX - spouseB.actualBounds.width / 2, v.y);
      spouseA.position = pos;
      spouseB.position = pos;
    }
  });
  // position only-child nodes to be under the marriage label node
  this.network.vertexes.each(function (v) {
    if (v.node === null || v.node.linksConnected.count > 1) return;
    var mnode = layout.findParentsMarriageLabelNode(v.node);
    if (mnode !== null && mnode.linksConnected.count === 1) {  // if only one child
      var mvert = layout.network.findVertex(mnode);
      var newbnds = v.node.actualBounds.copy();
      newbnds.x = mvert.centerX - v.node.actualBounds.width / 2;
      // see if there's any empty space at the horizontal mid-point in that layer
      var overlaps = layout.diagram.findObjectsIn(newbnds, function (x) { return x.part; }, function (p) { return p !== v.node; }, true);
      if (overlaps.count === 0) {
        v.node.move(newbnds.position);
      }
    }
  });
};

GenogramLayout.prototype.findParentsMarriageLabelNode = function (node) {
  var it = node.findNodesInto();
  while (it.next()) {
    var n = it.value;
    if (n.isLinkLabel) return n;
  }
  return null;
};
  // end GenogramLayout class