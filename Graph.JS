
function drawGraph() {


    var trace, data, layout;

   
    trace = {
        x: [0, 16000, 52500, 113000, 184500], 
        y: [0, 0, 920, 13330, 30490], 
        type: 'scatter', 
        mode: 'lines+markers',
        name: "trace" 
    };
   
   data = [trace];
   
    layout = {
        title: "Tax Payment Graph ",
        yaxis: {
            title: "Amount of tax Paid ($)",
            zerolinewidth: 1.5 
        },
        xaxis: {
            title: "Income ($)",
            zerolinewidth: 1.5,
           range: [0, 194500]
            
        }
    };
   
    Plotly.newPlot("graph", data, layout);
}

drawGraph();