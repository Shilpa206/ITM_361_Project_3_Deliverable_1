function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 30.596430000036523, lng: -86.99537276944753},
  });
  
  var nolaMarker = new google.maps.Marker({
    position: { lat: 29.987266644764333, lng: -90.03977676639886},
    map: map,
	animation: google.maps.Animation.DROP
  });
  
  const nolaContentString = '<p style="color:red;"><b>Next Stop:</b> New Orleans,LA</p>'
  
  var nolaInfoWindow = new google.maps.InfoWindow({
    content: nolaContentString
  });
  nolaInfoWindow.open(map, nolaMarker);
  
  
  const miamiSvgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "green",
    fillOpacity: 1.0,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  new google.maps.Marker({
    position: { lat: 25.765077309623816, lng: -80.19306889097936},
    icon: miamiSvgMarker,
    map: map,
  });
  
  
  const flightPlanCoordinates = [
    { lat: 26.362866315213473, lng: -80.55485493106487},
    { lat: 29.367607086709565, lng: -83.14497112820678},
    { lat: 30.448856283415456, lng: -87.23899489935167},
    { lat: 29.987266644764333, lng: -90.03977676639886},
  ];
  
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
  
}
window.initMap = initMap;