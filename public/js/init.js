(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap(){
  //Map options
  var options = {
      zoom:8,
      center: {lat: 38.9072,lng:-77.0369}
  };
  //new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
      position: {lat:38.9097,lng:-77.0654},
      map:map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });

  var infoWindow = new google.maps.InfoWindow({
      content: "<h1>Georgetown, DC</h1>"
  });

  marker.addListener("click",function(){
      infoWindow.open(map,marker);
  });
  // var navBar = document.getElementById('navbar');

  // var navbarHeight = navBar.offsetHeight;
  // var mapHeight = map.offsetHeight;
  
  // function initFixedMap() {
  //   if(window.pageXOffset > navbarHeight) {
  //     map.style.position = "fixed";
  //     map.style.top = 0;
  //   }else{
  //     map.style.position = "absolute";
  //     map.style.top = 0;
  //   }
  // }
  // window.addEventListener("scroll", initFixedMap);
}; 

