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
    
    var walksInfo = document.getElementById("walks_page");
    walksInfo.style.display = "block";

    var busInfo = document.getElementById("bus_page");
    busInfo.style.display = "none";

    var landmarksInfo = document.getElementById("landmarks_page");
    landmarksInfo.style.display = "none";
}

function bus_toggle(){
    var vg_1 = "bus_stops.vg.json";
    vegaEmbed("#toggle_map", vg_1).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
    var walksInfo = document.getElementById("walks_page");
    walksInfo.style.display = "none";
    var busInfo = document.getElementById("bus_page");
    busInfo.style.display = "block";

    var landmarksInfo = document.getElementById("landmarks_page");
    landmarksInfo.style.display = "none";
}

function landmarks_toggle(){
    var vg_1 = "landmarks.vg.json";
    vegaEmbed("#toggle_map", vg_1).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
    var walksInfo = document.getElementById("walks_page");
    walksInfo.style.display = "none";
    var busInfo = document.getElementById("bus_page");
    busInfo.style.display = "none";

    var landmarksInfo = document.getElementById("landmarks_page");
    landmarksInfo.style.display = "block";

}
