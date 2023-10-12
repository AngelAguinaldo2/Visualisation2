var initialMap = "self_guided_walks.vg.json";
vegaEmbed("#toggle_map", initialMap).then(function(result) {
// Access the Vega view instance 
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


function walk_toggle(){
    var vg_2 = "self_guided_walks.vg.json";
    vegaEmbed("#toggle_map", vg_2).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);    

}

function bus_toggle(){
    var vg_1 = "bus_stops.vg.json";
    vegaEmbed("#toggle_map", vg_1).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

}
