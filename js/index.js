function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 41.893516609387966,lng: 87.6297536812628}
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 41.893516609387966, lng: 87.6297536812628 },
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"Tao, Chicago"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;