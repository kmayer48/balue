var db = require("../models");
var path = require("path");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/views/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
  
  app.get("/views/search.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/search.html"));
  });

  app.get("/views/submit.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/submit.html"));
  });

  app.get("/views/submit.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/submit.html"));
  });
  /////////////////////////////////////////////////
  // Load index page
  app.get("/views/search.html", function(req, res) {
    db.deals.findAll({}).then(function(dbDeals) {
      res.render("/views/search.html", dbDeals);
    });
  });

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
