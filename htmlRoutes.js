var db = require("../models");
var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index", { 
      title: "Balue", 
      condition: false
    });
  });
  
  app.get("/search", function (req, res) {
    res.render("search", { 
      title: "Balue finds"
    });
    
    //   db.Deals.findAll({
    //   }).then(function (deals) {
    //     res.render("search", {
    //       results: results
    //     });
    //   });
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
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
