var db = require("../models");
var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index", { 
      title: "Balue", 
      condition: false
    });
  });

  app.get("/views/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
  
  app.get("/search", function (req, res) {
    res.render("search", { 
      title: "Balue finds"
    });
    
      // db.deals.findAll().then(function (deals) {
      //   res.render("search", {
      //     results: results
      //   });
      //   console.log(results);
      //   console.log(deals);
      // });
  });

  app.get("/submit", function(req, res) {
    res.render("submit", { title: "Submit your deal!"});
  });


  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/index.html"));
  // });

  // app.get("/search", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/search.html"));

    // db.Example.findAll({}).then(function (dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  // });

  /////////////////////////////////////////////////
  // Load index page
  app.get("/views/search.html", function(req, res) {
    db.deals.findAll({}).then(function(dbDeals) {
      res.render("/views/search.html", dbDeals);
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
