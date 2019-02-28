


// var mapCenter = businessCoordinates;
var city = "Washington DC" //$(this).attr("data-city");
var venue = $(this).attr("data-venue");
var businessCoordinates;
var blatitude;
var blongitude;
var cityName = $("<h5>").text("City of - "+city).addClass("cityClass").addClass("yelpClass");
var venueName = $("<h5>").text("Attractions around - "+venue).addClass("venueClass").addClass("yelpClass");



  var categories = "wine_bar";
  var catergory = "American";
  var term = "bars, restaurants";
  var key =
    "CCqam6P48aTcR7ZlcouEZvO9ibZrlVcnY73Fkx2eCoEZbyKweGuzQW2RNP5OxHR9Xhdpbi2CAYybGFxuPk1RGniw4fGpRrktdGE-MXJzWI5voJRoMH7L-KriU5sVXHYx";
  queryURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" +
    term +
    "&location=" +
    city +
    "&size="+
    40;

    console.log(city);
  $.ajax({
    url: queryURL,
    headers: {
      Authorization: "Bearer " + key
    },
    method: "GET"
  }).then(function(response) {
    // console.log(response);
    getRestaurants(response);
  });

  function getRestaurants(response){
    console.log(response);
    var results = response.businesses;

    $("tbody").empty();
    $("tbody").append(cityName, venueName);

    for (var i = 0 ; i < results.length; i++){
    //location information
  var businessName = results[i].name;
  console.log(businessName);
    var businessAddress = results[i].location.address1;
    console.log(businessAddress);
  var businessPhone = results[i].phone;
  var businessPrice = results[i].price;
  var businessRating = results[i].rating;
  var businessImage = results[i].image_url;
  blatitude = (results[0].coordinates.latitude);
  console.log(blatitude)
  blongitude = (results[0].coordinates.longitude);
  console.log(typeof blongitude)
  businessCoordinates = (blatitude + "," + blongitude);
  console.log("looking for the coordinates:" + businessCoordinates + "!!!!!!!!!!");
  
//   // Append the new row to the table
//   $("#event-table > tbody").append(newRow);

var newDivrow = $("<div></div>").addClass("row").addClass("mainrowDiv");
var newDiv1 = $("<div></div>").addClass("restaurantOptions").addClass("col-md-5");
var newDiv2 = $("<div></div>").addClass("restaurantImage").addClass("col-md-5");
// var img = $("<img />",{
//    src: "businessImage",

newDiv1.append(
  // $("<img />",{src: "businessImage",
  $("<p></p>").text(businessName).addClass("businessName"),
  $("<p></p>").text("Address: "+businessAddress).addClass("yelpPopulate"),
  $("<p></p>").text("Phone number:"+businessPhone).addClass("yelpPopulate"),
  $("<p></p>").text("Price: "+businessPrice).addClass("yelpPopulate"),
  $("<p></p>").text("Stars: "+businessRating).addClass("yelpPopulate"),
);
newDiv2.append(
  $("<img></img>").attr("src",businessImage).addClass("restaurantImage"),
);

$(newDivrow).append(newDiv1);
$(newDivrow).append(newDiv2);
$("body").append(newDivrow);
}
};

console.log("looking for the coordinates" + businessCoordinates + "!!!!!!");



function initMap(){
  //Map options
  var options = {
      zoom:15,
      center: {lat: 39.9072, lng:-77.0369}
  };
  console.log("looking for this" + options +"!!!!");
  //new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
      position: {lat: 39.9072, lng:-77.0369},
      map:map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      
  });
  console.log("testing marker: " + marker + "!!")

  var infoWindow = new google.maps.InfoWindow({
      content: "<h1>Georgetown, DC</h1>"
  });

  marker.addListener("click",function(){
      infoWindow.open(map,marker);
;
  });
  
}; 

var script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDnzLCmLBrsaRrXUCgiEqaO3HAKf-7zXow&callback=initMap'
script.defer = true
script.async = true
var head = document.querySelector('head')
head.appendChild(script);



// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
