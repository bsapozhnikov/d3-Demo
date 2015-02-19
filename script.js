var graph = {
    "nodes":[
	{},
	{},
	{}
    ],
    "links":[
	{"source":0,"target":2}
    ]
};

var width = 500,
    height = 500;

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);


var force = d3.layout.force()
	.size([width, height])
	.nodes(graph.nodes)
	.links(graph.links)
	.start();

var link = svg.selectAll(".link")
	.data(graph.links)
	.enter().append("line")
	.attr("class", "link");

var node = svg.selectAll(".node")
	.data(graph.nodes)
	.enter().append("circle")
	.attr("class", "node")
	.attr("r", 5);

force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    
    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
});
