var map, infoWindow, markerArray = [], markerCluster, curCategory, dispData;

var pos={
  lat: 41.8781,
  lng: -87.6298  
};

var zoomLevel=13;


//This is the initialize the map on load
function initMap() {  
    /*user HTML5 geolocation to get browser location if success calls
    the function to get coords and display map, else calls function
    that will display with chicago as marker*/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoLocSucess, geoLocFail);
    
    }
    //this is for old browsers if it does not support geolocation
    else{
          pos.lat = 41.8781;
          pos.lng = -87.6298;
          displayMap();
    }
}


//when location is enabled in browser and user allowed it
function geoLocSucess(position){
          pos.lat = position.coords.latitude;
          pos.lng = position.coords.longitude;
          displayMap();      
}

//when location is not enabled in browser or enabled but user blocked it
function geoLocFail(position){
          pos.lat = 41.8781;
          pos.lng = -87.6298;
          displayMap();    
}


//function to display the map when pos object has lat and lng
function displayMap(){
    map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: zoomLevel,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            minZoom: zoomLevel,
            maxZoom: zoomLevel,
            rotateControl: false,
            streetViewControl: false
      });

    var initMarker = new google.maps.Marker({
      position: new google.maps.LatLng(pos.lat,pos.lng),
      map: map,     
    });   
}