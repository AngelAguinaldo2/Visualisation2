var vg_1 = "noise_observations_map.vg.json";
vegaEmbed("#symbol_chart", vg_1).then(function(result) {
// Access the Vega view instance 
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "self_guided_walks.vg.json";
vegaEmbed("#walks", vg_2).then(function(result) {
// Access the Vega view instance 
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
