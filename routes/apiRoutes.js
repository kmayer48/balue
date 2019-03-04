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
  
    var deal = req.body;

    db.deals.create({
      Manager_name: deal.name,
      Phone_number: deal.phone,
      Restaurant_name: deal.company,
      hours: deal.dealHours,
      drink_deal: deal.drinks,
      food_deal: deal.food,
      
    }).then(function(dbDeals) {
      res.json(dbDeals);
    });
    
  });

  // Create a post for the contacts
  app.post("/api/contacts", function(req, res) {
    db.contacts.create({
      
      Manager_name: deal.name,
      Phone_number: deal.phone,
      Restaurant_name: deal.company,
      hours: deal.dealHours,
      drink_deal: deal.drinks,
      food_deal: deal.food,
      
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
