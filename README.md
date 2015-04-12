# D3 Force Layout #
## https://github.com/mbostock/d3/wiki/Force-Layout ##
## http://bl.ocks.org/mbostock/4062045 ##


# Basics #

+ Concept: organize data by relation
+ Set of nodes & node-node links
+ Force Layout is created as an object with methods to customize/add features

# Outline #

+ Define nodes/links
+ Add SVG to body
+ Create force layout
+ Add nodes/links to force layout and start()
+ Select nodes/links from SVG to add functionality and customization
+ Setup ticks

# Additional Features #

+ Make nodes draggable: `node.call(force.drag)` 
+ Add data to nodes/links
+ Event Listeners: `node.on("click",function)`
  + Data gets passed to function:
  +`node.on("click",function(d){console.log(d.name);})`
+ Link styling
  + `link.style("stroke-width",function(d){return d.width);})`

















