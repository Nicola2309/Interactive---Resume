
                   
            function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 3,
                    center: {
                        lat: 51.545454,
                        lng: -30.545454
                    }
                });

                var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                
                var locations = [
                    { lat: 40.121212, lng: -73.121212},
                    { lat: 41.121212, lng: -73.232323},
                    { lat: 40.232323, lng: -73.232334}
                ];
                var markers = locations.map(function(location, i){
                    return new google.maps.Marker({
                        position: location,
                        label: labels[i % labels.length]  
                    });
                });
                var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); 
            }

        