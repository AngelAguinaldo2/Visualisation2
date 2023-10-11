function walk_toggle(){
    var busStops = document.getElementById("bus_stops");
    var walk = document.getElementById("walks");
    if (walk.style.display === "none") {
        busStops.style.display = "none";
        walk.style.display = "block";
    } else{
        walk.style.display = "none";
    }
}

function bus_toggle(){
    var busStops = document.getElementById("bus_stops");
    var walk = document.getElementById("walks");
    if (busStops.style.display === "none") {
        walk.style.display = "none";
        busStops.style.display = "block";
    }
}
