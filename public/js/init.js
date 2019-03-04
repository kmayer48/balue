(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap() {
  //Map options
  var options = {
    zoom: 8,
    center: {
      lat: 38.9072,
      lng: -77.0369
    }
  };
  //new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
    position: {
      lat: 38.9097,
      lng: -77.0654
    },
    map: map,
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "<h1>Georgetown, DC</h1>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
};

$("#zip-submit").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var zip = $("#zip").val().trim();
  $("#zip").val('');
  console.log(zip);

  $.get("/api/deals")
  .then(function(data) {
    console.log("Retrieved deals!");
    console.log(data)
    var restaurantName = data[0].Retaurant_name;
    console.log(restaurantName)
    var hours = data.hours;
    console.log(hours)
    var drinks = data.drink_deal;
    console.log(drinks)
    var food = data.food_deal;
    console.log(food)
    var phone = data.Phone_number;
    console.log(phone)

  });  
  // var card = $("<div class='card orange-darken-1>");
  // var cardClass = $("<div class='card-content white-text'>");
  // var cardHeader = $("<span class='card-title'>").html(restaurantName)
  // var cardContent = $("<p></p>")

  // $("#cards").append(card);
  // $("#cards").append(cardClass);
  // $("#cards").append(cardHeader);
  // cardContent.append(hours, drinks, food, phone);
});

$("#zip-resubmit").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var zip = $("#zip").val();
  $("#zip").val('');
  console.log(zip);

  $.get("/api/deals")
  .then(function(data) {
    console.log("Retrieved deals!");
    console.log(JSON.stringify(data))
    console.log(data)
    var restaurantName = data[0].Restaurant_name
    console.log(restaurantName)
    var hours = data[0].hours;
    console.log(hours)
    var drinks = data[0].drink_deal;
    console.log(drinks)
    var food = data[0].food_deal;
    console.log(food)
    var phone = data[0].Phone_number;
    console.log(phone)

  var card = $("<div class='card orange-darken-1>");
  var cardClass = $("<div class='card-content white-text'>");
  var cardHeader = $("<span class='card-title'>").html(restaurantName + hours + drinks + food + phone)
  var cardContent = $("<p>").text(drinks)
  var cardContent =+ $("<p>").text(food)

  $("#cards").append(card);
  $("#cards").append(cardClass);
  $("#cards").append(cardHeader);
  $("#cards").append(cardContent);
  });
});

$("#submit").on("click", function (event) {
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

  $.post("/api/deals", newDeal)
  .then(function() {
    console.log("Added new deal!");
    console.log(newDeal)
  });

  $("#name").val('');
  $("#telephone").val('');
  $("#company").val('');
  $("#hours").val('');
  $("#drink_specials").val('');
  $("#food_specials").val('');
});
