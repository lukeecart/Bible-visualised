// Colors
const badColor = "#ff9c9c";
const goodColor = "#acffab";
const mixedColor = "#fffd99";
const highlightColor = "#8fa8b5";
const linkColor = "#424242";


function init() {
    var $ = go.GraphObject.make;  // for conciseness in defining templates

    // some constants that will be reused within templates
    var mt8 = new go.Margin(8, 0, 0, 0);
    var mr8 = new go.Margin(0, 8, 0, 0);
    var ml8 = new go.Margin(0, 0, 0, 8);
    var roundedRectangleParams = {
        parameter1: 2,  // set the rounded corner
        spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // make content go all the way to inside edges of rounded corners
    };

    myDiagram =
        $(go.Diagram, "myDiagramDiv",  // the DIV HTML element
            {
                // Put the diagram contents at the top center of the viewport
                initialDocumentSpot: go.Spot.TopLeft,
                initialViewportSpot: go.Spot.TopCenter,
                // OR: Scroll to show a particular node, once the layout has determined where that node is
                // "InitialLayoutCompleted": function(e) {
                //  var node = e.diagram.findNodeForKey(28);
                //  if (node !== null) e.diagram.commandHandler.scrollToPart(node);
                // },
                layout:
                    $(go.TreeLayout,  // use a TreeLayout to position all of the nodes
                        {
                            isOngoing: false,  // don't relayout when expanding/collapsing panels
                            treeStyle: go.TreeLayout.StyleLastParents,
                            // properties for most of the tree:
                            angle: 90,
                            layerSpacing: 80,
                            // properties for the "last parents":
                            alternateAngle: 0,
                            alternateAlignment: go.TreeLayout.AlignmentStart,
                            alternateNodeIndent: 15,
                            alternateNodeIndentPastParent: 1,
                            alternateNodeSpacing: 15,
                            alternateLayerSpacing: 40,
                            alternateLayerSpacingParentOverlap: 1,
                            alternatePortSpot: new go.Spot(0.001, 1, 20, 0),
                            alternateChildPortSpot: go.Spot.Left
                        })
            });

    // This function provides a common style for most of the TextBlocks.
    // Some of these values may be overridden in a particular TextBlock.
    function textStyle(field) {
        return [
            {
                font: "12px Roboto, sans-serif", stroke: "rgba(0, 0, 0, .60)",
                visible: false  // only show textblocks when there is corresponding data for them
            },
            new go.Binding("visible", field, function (val) { return val !== undefined; })
        ];
    }
    function nationColor(nation) {
        if (nation === "Judah") {
            return '#e54545'
        } else if (nation === 'Israel') {
            return '#679af0'
        } else {
            return '#ee00ea'
        }
    }

    // define Converters to be used for Bindings
    function RatingReign(rating) {
        if (rating === "mixed") return mixedColor
        return rating === "good" ? goodColor : badColor;
    }

    function getCrown(name) {
        return "./res/crown.png";
    }

    // define the Node template
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            {
                locationSpot: go.Spot.TopCenter,
                isShadowed: true, shadowBlur: 1,
                shadowOffset: new go.Point(0, 1),
                shadowColor: "rgba(0, 0, 0, .14)",
                selectionAdornmentTemplate:  // selection adornment to match shape of nodes
                    $(go.Adornment, "Auto",
                        $(go.Shape, "RoundedRectangle", roundedRectangleParams,
                            { fill: null, stroke: "#679af0", strokeWidth: 3 },
                        ),
                        $(go.Placeholder)
                    )  // end Adornment
            },
            $(go.Shape, "RoundedRectangle", roundedRectangleParams,
                { name: "SHAPE", fill: "#ffffff", strokeWidth: 0 },
                new go.Binding("fill", "rating", RatingReign),
                new go.Binding("stroke", "isHighlighted", function (h) { return h ? highlightColor : false; }).ofObject(),
                new go.Binding("strokeWidth", "isHighlighted", function (w) { return w ? 5 : 0 }).ofObject(),
            ),
            $(go.Panel, "Vertical",
                $(go.Panel, "Horizontal",
                    { margin: 8 },
                    $(go.Picture,  // flag image, only visible if a nation is specified
                        { margin: mr8, visible: false, desiredSize: new go.Size(50, 50) },
                        new go.Binding("source", "name", getCrown),
                        new go.Binding("visible", "name", getCrown),
                    ),
                    $(go.Panel, "Table",
                        $(go.TextBlock,
                            {
                                row: 0, alignment: go.Spot.Left,
                                font: "16px Roboto, sans-serif",
                                stroke: "rgba(0, 0, 0, .87)",
                                maxSize: new go.Size(160, NaN)
                            },
                            new go.Binding("text", "name")
                        ),
                        // more info arrow - LUKE Added
                        $("PanelExpanderButton", "INFO",
                            { row: 0, column: 1, rowSpan: 2, margin: ml8 }
                        )
                    ),
                ),
                // Line divider in the box - Luke added 
                $(go.Shape, "LineH",
                    {
                        stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1,
                        height: 1, stretch: go.GraphObject.Horizontal
                    },
                    new go.Binding("visible").ofObject("INFO")  // only visible when info is expanded
                ),
                $(go.Panel, "Vertical",
                    {
                        name: "INFO",  // identify to the PanelExpanderButton
                        stretch: go.GraphObject.Horizontal,  // take up whole available width
                        margin: 8,
                        defaultAlignment: go.Spot.Left,  // thus no need to specify alignment on each element
                    },
                    $(go.TextBlock, textStyle("rulerOf"),
                        new go.Binding("text", "rulerOf", function (head) { return "Ruler of: " + head; })
                    ),
                    $(go.TextBlock, textStyle("rulerOf"),
                        new go.Binding("margin", "rulerOf", function (ruler) { return mt8; }), // some space above if there is also a headOf value
                        new go.Binding("text", "predecessor", function (predecessor) {
                            var predecessor = myDiagram.model.findNodeDataForKey(predecessor);
                            if (predecessor !== null) {
                                return "Successor to: " + predecessor.name;
                            }
                            return "";
                        })
                    ),
                    $(go.TextBlock, textStyle("captivity"),
                        new go.Binding("text", "captivity", function (years) { return "Captivity: " + years })
                    ),
                )
            )
        );


    // define the Link template, a simple orthogonal line
    myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
            { corner: 10, selectable: false },
            $(go.Shape, { strokeWidth: 3, stroke: linkColor }));  // dark gray, rounded corner links

    // create the Model with data for the tree, and assign to the Diagram
    myDiagram.model =
        $(go.TreeModel,
            {
                nodeParentKeyProperty: "predecessor",  // this property refers to the parent node data
                nodeDataArray: nodeDataArray
            });

    // Overview
    myOverview =
        $(go.Overview, "myOverviewDiv",  // the HTML DIV element for the Overview
            { observed: myDiagram, contentAlignment: go.Spot.Center });   // tell it which Diagram to show and pan
}

// the Search functionality highlights all of the nodes that have at least one data property match a RegExp
function searchDiagram() {  // called by button
    var input = document.getElementById("mySearch");
    if (!input) return;
    input.focus();

    myDiagram.startTransaction("highlight search");

    if (input.value) {
        // search four different data properties for the string, any of which may match for success
        // create a case insensitive RegExp from what the user typed
        var regex = new RegExp(input.value, "i");
        var results = myDiagram.findNodesByExample({ name: regex },
            { alternativeName: regex });
        myDiagram.highlightCollection(results);
        // try to center the diagram at the first node that was found
        if (results.count > 0) myDiagram.centerRect(results.first().actualBounds);
    } else {  // empty string only clears highlighteds collection
        myDiagram.clearHighlighteds();
    }

    myDiagram.commitTransaction("highlight search");
}
