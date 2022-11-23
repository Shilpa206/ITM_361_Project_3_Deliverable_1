function initMap() {
	const myLatLng = { lat:48.8566, lng:2.3522};
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 3,
		center: myLatLng,
	});

	new google.maps.Marker({
    	position: myLatLng,
    	map,
 	 });


	new google.maps.Marker({
        position: new google.maps.LatLng(45.47859954420433, 9.227346521619015),
        map,
        label: "Milan, Italy",
        animation: google.maps.Animation.DROP
	});
	
	new google.maps.Marker({
        position: new google.maps.LatLng(51.5072,0.1276),
        map,
        label: "London, England",
        animation: google.maps.Animation.DROP
	});

}

window.initMap = initMap;