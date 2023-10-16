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

function toggle_music_walk(){
    var musicwalk = document.getElementById("music_walk");
    musicwalk.style.display = "block";
    var parkwalk = document.getElementById("park_walk");
    parkwalk.style.display = "none";
}

function toggle_park_walk(){
    var parkwalk = document.getElementById("park_walk");
    parkwalk.style.display = "block";

    var musicwalk = document.getElementById("music_walk");
    musicwalk.style.display = "none";
}
