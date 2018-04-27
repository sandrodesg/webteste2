 <script>
      var map;
      var markers = [];
     // var heatmap;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -22.8993443, lng: -43.2082906},
          zoom: 13
        });
        
       // heatmap = new google.maps.visualization.Heatmaplayer();
        habilitaMarkes();
      }


       //array percorrendo as latitudes e altitudes
      }
      function habilitaMarkes() {
       // clearMarkes();

        $.each(points, function(key, point){
           var position = new google.maps.LatLng(point.lat, point.lng);

           var marker = new google.maps.Marker({
            position: position,
            map: map 
           })

           markers.push(marker);
        })
      }

     // function habilitaHeatmap(){
       // clearMarkers();
        
       // var _points = [];
     //   $.each(points, function(key, point){
       //   var position = new google.maps.LatLng(point.lat, point.lng);

        //  _points.push(position);

     //   })
    //  }
       // funçao para limpar  markes
    //  }
   //   function clearMarkers(){
      //     $.each(markers, function(key, marker){
       //    marker.setMap(null);
       //    })

     //      markers = [];
        
     // }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5H60FcsVwZM6uFCsPcLF-H1lL6BYigv8&callback=initMap"
    async defer></script>