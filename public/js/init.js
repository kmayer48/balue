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
}; 

$("#zip-submit").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var zip = $("#zip").val().trim();
  $("#zip").val('');
  console.log(zip);
});

$("#zip-resubmit").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var zip = $("#zip").val().trim();
  $("#zip").val('');
  console.log(zip);
});

$("#submit").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newDeal = {
    name: $("#name").val().trim(),
    phone: $("#telephone").val().trim(),
    company: $("#company").val().trim(),
    dealHours: $("#hours").val().trim(),
    drinks: $("#drink_specials").val().trim(),
    food: $("#food_specials").val().trim()
  };

  $("#name").val('');
  $("#telephone").val('');
  $("#company").val('');
  $("#hours").val('');
  $("#drink_specials").val('');
  $("#food_specials").val('');

    console.log(newDeal)
});



