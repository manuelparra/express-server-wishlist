var express = require("express");
var app = express();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/url", (req, res, next) => res.json([ "Paris", "Barcelona", "Barranquilla", "Montevideo", "Santiago de Chile", "Caracas", "Nueva York" ]));

var misDestinos = [];
app.get("/my", (req, res, next) => res.json(misDestinos));
app.post("/my", (req, res, next) => {
  console.log(res.body);
  misDestinos = req.body;
  res.json(misDestinos);
});
