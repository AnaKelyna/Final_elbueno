const url = "http://127.0.0.1:5000/graph/department";
const url2 = "http://127.0.0.1:5000/graph/aisle";

// Fetch the JSON data and console log it

var departments = [];
var total_dep = [];
var aisle2 = [];
var total_ai = [];



// Display the default plot
d3.json(url).then(function(json) {
    json.forEach(function(data) {
        departments.push(data.department);
        total_dep.push(data.Total_department);
    });

});

d3.json(url2).then(function(json) {
    json.forEach(function(data) {
        aisle2.push(data.aisle);
        total_ai.push(data.Total_aisle);
    });

});



function getData() {
    var deps_text = new Array();
    deps_text.push(`Sam uses the app to order, specially, perishables.
    32.6% of all orders come from the produce and dairy eggs departments.`);
    d3.select("#chart-text").html("");
    d3.select("#chart-text")
        .selectAll("h3")
        .data(deps_text)
        .enter()
        .append("h3")
        .text((function(d) { return d }))
        .classed("item", true)
        .attr("id", "text_chart")

    var labels = departments;

    function init2() {
        var data = [{
            values: total_dep,
            labels: labels,
            type: "pie"
        }];

        var layout = {
            height: 500,
            width: 700,
            title: "Top 10 departments"
        };

        Plotly.newPlot("pie1", data, layout);
    }
    init2();
};


function getData2() {
    var deps_text = new Array();
    deps_text.push(`She buys grocery for week meals but sometimes she buys from aisles for party supplies like snacks and drinks
The top 10 aisles account only for the 38.5% of the total orders`);
    d3.select("#chart-text").html("");
    d3.select("#chart-text")
        .selectAll("h3")
        .data(deps_text)
        .enter()
        .append("h3")
        .text((function(d) { return d }))
        .classed("item", true)
        .attr("id", "text_chart")

    var labels = aisle2;

    function init3() {
        var data = [{
            values: total_ai,
            labels: labels,
            type: "pie"
        }];

        var layout = {
            height: 500,
            width: 700,
            title: "Top 10 Aisles"
        };

        Plotly.newPlot("pie1", data, layout);
    }
    init3();
};
d3.selectAll("#selPro").on("click", getData2);
d3.selectAll("#selDep").on("click", getData);
getData()
    // Create an array of music provider labels