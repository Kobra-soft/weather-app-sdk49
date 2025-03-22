const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

var weatherReports = {};

const port = 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

app.get("/weather/:city", (request, response) => {
  cityname = request.params.city;
  console.log(`get: City: ${cityname}`);
  response.send({
    city: cityname,
    report: weatherReports[cityname],
  });
});

app.post("/weather/:city", (request, response) => {
  cityname = request.params.city;
  console.log(`post: City: ${cityname}`);
  report = request.body.report;
  console.log(`post: Report: ${report}`);
  weatherReports[cityname] = report;
  response.send({
    city: cityname,
    report: weatherReports[cityname],
  });
});
