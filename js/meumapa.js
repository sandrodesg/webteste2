jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['centro',-22.8993443,-43.2082906],
        ['barra', -23.0120696,-43.30875209999999],
        ['copa cabana', -22.9638779,-43.1761027],
        ['copa cabana', -22.9656288,-43.177414],
        ['braz de pina', -22.8320241,-43.292049099999986],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>centro</h3>' +
        '<p><p><b>endereço- <a href="#" target="_blank">Visita</a></p> loja - <a href="#" target="_blank">Visita</a></p> loja - <a href="#" target="_blank">Visita</a></p></p> - Av Francisco Bicalho, 1, Santo Cristo - Rio de Janeiro, RJ.</p>' + '</div>'],

        ['<div class="info_content">' +
        '<h3>barra</h3>' +
        '<p>endereço </p> loja</p><a href="#" target="_blank">Visita</a>' +
        '</div>'],

         ['<div class="info_content">' +
        '<h3>Copacabana</h3>' +
        '<p>endereço </p> .</p><a href="#" target="_blank">Visita</a>' +
        '</div>'],

         ['<div class="info_content">' +
        '<h3>Copacabana</h3>' +
        '<p>endereço </p> rua</p><a href="#" target="_blank">Visita</a>' +
        '</div>'],

         ['<div class="info_content">' +
        '<h3>braz de pina</h3>' +
        '<p>endereço Bráz De Pina,</p></p><a href="#" target="_blank">Visita</a>' +
        '</div>'],
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}