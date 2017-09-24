var locations = [];
var markers = {minLat: 41.8, maxLat: 41.98, minlong: 5.34, maxLong: 20.567};


const getEneryData = () => {
    $.ajax({
        //url: "https://data.cityofchicago.org/resource/tepd-j7h5.json",
        url: "https://data.cityofchicago.org/resource/fpx9-pjqk.json",
        type: "GET",
        data: {
            "$$app_token": "dAZz61L6NCJnpgbtQ7OXpToRI"
        }
    }).done((data) => {
        //console.log(minMax(data));
        onFinish(data);
    })
}


const getCoordinate = (slope, xValue, yInt = 0) => {
    return (slope * xValue + yInt);
}

const getHyp = (xOne, yOne, xTwo, yTwo) => {    
    return Math.sqrt(Math.abs((yTwo - yOne)^2 + (xTwo - xOne)^2));
}

function filterByMarkers(locations, params) {
    var filteredLocations = [];
    var hypCoord = {xValue: 0.0, yValue: 0.0};
    var dist = 0;
    for (var i = locations.length - 1; i >= 0; i--) {
        if (((params.maxLat >= locations[i].latitude) && (locations[i].latitude >= params.minLat)) || ((params.maxLong >= locations[i].longitude) && (locations[i].longitude >= params.minLat))) {
            hypCoord.xValue = locations[i].latitude;
            hypCoord.yValue = getCoordinate(markers.slope, hypCoord.xValue, markers.yInt);
            //console.log("--");
            //console.log(hypCoord);
            //console.log(locations[i]);
            dist = Math.abs(getHyp(hypCoord.xValue, hypCoord.yValue, locations[i].latitude, locations[i].longitude));
            console.log(dist);
            if (dist < 0.2) {
                filteredLocations.push(locations[i]);
            }
        }
    }
    return filteredLocations;
}


function minMax(locations) {
    var obj = {minLat: locations[0].latitude , maxLat: locations[0].latitude, minLong: locations[0].longitude, maxLong: locations[0].longitude};

    for (var i = locations.length - 1; i >= 0; i--) {
        if (locations[i].latitude < obj.minLat) {
            obj.minLat = locations[i].latitude;
        }
        if (locations[i].latitude > obj.maxLat) {
            obj.maxLat = locations[i].latitude;
        }
        if (locations[i].longitude < obj.minlong) {
            obj.minlong = locations[i].latitude;
        }
        if (locations[i].longitude > obj.maxLong) {
            obj.maxLong = locations[i].latitude;
        }
    }
    return obj;
}

function onFinish(data) {
    var locations = filterByMarkers(data, markers);
    console.log(locations);
}

markers.slope = (markers.maxLong - markers.minlong)/(markers.maxLat - markers.minLat);
markers.yInt = markers.maxLong/(markers.slope*markers.maxLat);
console.log(markers);
getEneryData();






