/// ACTIVITY 6
///////////////////////////////

/* import { View, StyleSheet } from "react-native";
import Weather from "./components/Weather";
export default function App() {
  return (
    <View style={styles.container}>
      <Weather city="London" weather="Sunny" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */

/// ACTIVITY 7
///////////////////////////////

/* import { View, StyleSheet } from "react-native";
import Weather from "./components/Weather";

export default function App() {
  return (
    <View style={styles.f}>
      <Weather style={styles.f} city="London" weather="Sunny" />
      <Weather style={styles.f} city="Bristol" weather="Rainy" />
    </View>
  );
}

const styles = StyleSheet.create({
  f: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}); */

/// ACTIVITY 9
///////////////////////////////

/* import { View, StyleSheet } from "react-native";
import Weather from "./components/Weather";
import City from "./components/City";

export default function App() {
  return (
    <View style={styles.f}>
      <Weather style={styles.f} city="London" weather="Sunny" />
      <Weather style={styles.f} city="Bristol" weather="Rainy" />
      <City />
    </View>
  );
}

const styles = StyleSheet.create({
  f: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}); */

/// ACTIVITY 10
///////////////////////////////

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
