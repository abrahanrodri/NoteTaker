var connection = require("../db/connection");

module.exports = function(app) {


  app.get("/api/notes", function(req, res) {
    connection.query("SELECT * FROM notes", function(err, notesData) {
      res.json(notesData);
    });
  });
  
 
  app.post("/api/notes", function(req, res) {
    
      connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
        if (err) throw err;
  
        res.json(result);
      });
    });
  
  
  
  app.delete("/api/notesDelete", function(req, res) {
    connection.query("DELETE FROM notes WHERE id = ?", req.body.id, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

}

