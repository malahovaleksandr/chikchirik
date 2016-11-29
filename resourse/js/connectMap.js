$(document).ready(function(){
    var map;
    var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
    var mapCoordinates = new google.maps.LatLng(50.4504996602356, 30.51102876663208),
        marker1=new google.maps.LatLng(50.461353, 30.510019),
        marker2=new google.maps.LatLng(50.458383, 30.405513),
        marker3=new google.maps.LatLng(50.442039, 30.473879);



    var markers = [];

        var image = new google.maps.MarkerImage(
            '../image/markerHarms.png',
            new google.maps.Size(320,80),
            new google.maps.Point(0,0),
            new google.maps.Point(10,10)
        );
        var image2 = new google.maps.MarkerImage(
            '../image/markerBiblioteka.png',
            new google.maps.Size(320,160),
            new google.maps.Point(0,0),
            new google.maps.Point(10,10)
        );
        var image3 = new google.maps.MarkerImage(
            '../image/markerAntoshka.png',
            new google.maps.Size(320,160),
            new google.maps.Point(0,0),
            new google.maps.Point(10,10)
        );

    function addMarker()
    {
        markers.push(new google.maps.Marker({
            position: marker1,
            raiseOnDrag: false,
            icon: image,
            map: map,
            draggable: false
        }));

    }
    function addMarker2()
    {

        markers.push(new google.maps.Marker({
            position: marker2,
            raiseOnDrag: false,
            icon: image2,
            map: map,
            draggable: false
        }));

    }
    function addMarker3()
    {
        markers.push(new google.maps.Marker({
            position: marker3,
            raiseOnDrag: false,
            icon: image3,
            map: map,
            draggable: false
        }));

    }

    function initialize() {
        var mapOptions = {
            backgroundColor: "#ffffff",
            zoom: 13,
            disableDefaultUI: true,
            center: mapCoordinates,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]

        };
        map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
        addMarker();
        addMarker2();
        addMarker3();

    }
    google.maps.event.addDomListener(window, 'load', initialize);

});

