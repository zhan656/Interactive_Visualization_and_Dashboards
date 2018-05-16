// YOUR CODE HERE
let xval_grk = data.map(x => x.pair);
let yval_grk = data.map(x => x.greekSearchResults);
let xval_rom = data.map(x => x.pair);
let yval_rom = data.map(x => x.romanSearchResults);

let trace1 = {
    x: xval_rom,
    y: yval_rom,
    type: "bar",
    name: "Roman Name"
};

let trace2 = {
    x: xval_grk,
    y: yval_grk,
    type: "bar",
    name: "Greek Name"
};

let data_chart = [trace1,trace2];

let layout = {
    title: 'Roman-Greek God Name',
    barmode: "group"
};

Plotly.newPlot("plot", data_chart,layout);
