var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/deals", function(req, res) {
    db.deals.findAll({}).then(function(dbDeals) {
      res.json(dbDeals);
    });
  });

  // Create a new example
  app.post("/api/deals", function(req, res) {
    db.deals.create({
      
      manager_name: req.body.name,
      phone_number: req.body.phone,
      Restaurant_name: req.body.company,
      hours: req.body.dealHours,
      drink_deal: req.body.drinks,
      food_deal: req.body.food,
      
    }).then(function(dbDeals) {
      res.json(dbDeals);
    });
    
  });

  // Delete an example by id
  /*app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });*/
};
