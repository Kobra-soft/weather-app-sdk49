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

import { View, StyleSheet } from "react-native";
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
    gap: 20,
  },
});
