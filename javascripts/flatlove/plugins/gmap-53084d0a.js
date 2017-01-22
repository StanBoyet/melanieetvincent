function initialize() {
  var styles = [
    {
      stylers: [
        { hue: "#B84746" },
        { saturation: -150 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "poi",
      elementType: "all",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
  var myLatLng = new google.maps.LatLng(47.70775,-2.754304);
  var mapOptions = {
    zoom: 14,
    center: myLatLng,
    scrollwheel: false,
     disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('gmap'),
    mapOptions);
  var image = document.getElementById('gmap').getAttribute('data-image-src');
  var myMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initialize);
