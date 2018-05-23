function buildPlot() {
    /* data route */
    var url = "/api/pals";
    // @TODO: Build your plot here
    Plotly.d3.json(default_url, function(error, response) {
        if (error) return console.warn(error);
        var data = [{
            x : [i for i in my_data],
            y: []
        }];
        var layout = { title: "Pet Pals" }
        Plotly.plot("bar", data, layout)
    })

}

buildPlot();
