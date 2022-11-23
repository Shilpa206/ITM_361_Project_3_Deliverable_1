function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 27.857252, lng: 81.958898},
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 27.857252, lng: 81.958898},
    map: map,
	label: "Florida,Miami",
	animation: google.maps.Animation.DROP
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"Florida,Miami"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;