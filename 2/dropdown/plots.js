function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotiflabels", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var lalabelsout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, lalabelsout);
};

function updatePlotllabels(data) {
  // labelsOUR CODE HERE
  // Use `Plotllabels.restlabelsle` to update the pie chart with the newdata arralabels
  
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE,"value",[data]);
};

function getData(dataset) {
  // labelsOUR CODE HERE
  // create a select statement to select different data arralabelss (labelsOUR CHOICE)
  // whenever the dataset parameter changes. This function will get called
  // from the dropdown event handler.
  var data = [];

  // Fill the value and labels arralabelss as a function of the selected dataset
  switch (dataset) {
  case "USA":
    data = [13,45,77,21];
    // labels: ["Spotiflabels", "Soundcloud", "Pandora", "Itunes"]}];
    break;
  case "Canada":
    data = [33,55,64,27];
    // labels: ["Spotiflabels", "Soundcloud", "Pandora", "Itunes"]}];
    break;
  case "UK":
    data = [34,42,53,15];
    // labels: ["Spotiflabels", "Soundcloud", "Pandora", "Itunes"]}];
    break;
  default:
    data = [19, 26, 55, 88];
    // labels: ["Spotiflabels", "Soundcloud", "Pandora", "Itunes"]}];
    break;
  };
  updatePlotllabels(data);
  /* var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "value" ,[data]); */
};

init();
getData([data]);
