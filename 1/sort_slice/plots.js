// @TODO: Complete the following sections

// Sort the data array using the greekSearchResults value
// let xval_all = data.map(x => x.pair);
// let val_all = data.map(x => {var name = x.pair,var total = (x.greekSearchResults+x.romanSearchResults});
 //var val_all = data.map(function(x)   { return {"name":x.pair, "total": (x.greekSearchResults+x.romanSearchResults) } })  ;
 var val_all = data.map(x =>  ({"name":x.pair, "total": (x.greekSearchResults+x.romanSearchResults) }))  ;

let val_sort = data.sort((first, second ) => second.greekSearchResults - first.greekSearchResults);
let val_top10 = val_sort.slice(0, 10);

let trace1 = {
    x: val_top10.map(x => x.pair),
    y: val_top10.map(x => x.greekSearchResults),
    type: "bar"
};

let data_chart = [trace1];

let layout = {
    title: 'Top 10 Roman-Greek God Name',
};

Plotly.newPlot("plot", data_chart,layout);



// Slice the first 10 objects for plotting

// Trace1 for the Greek Data

// set up the data variable

// set up the layout variable

// Render the plot to the div tag with id "plot"
