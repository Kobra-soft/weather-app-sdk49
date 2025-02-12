/// ACTIVITY 6
///////////////////////////////

/* import { Text, View } from "react-native";
const Weather = (props) => {
  return (
    <View>
      <Text>
        The weather in {props.city}, is {props.weather}.
      </Text>
    </View>
  );
};
export default Weather;
 */

/// ACTIVITY 7
///////////////////////////////

/* import { Text, View, StyleSheet } from "react-native";
const Weather = (props) => {
  return (
    <View>
      <Text style={styles.blue}> Weather Report </Text>
      <Text style={styles.red}>
        The weather in {props.city}, is {props.weather}.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  blue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
export default Weather; */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Weather = ({ city, weather, style }) => {
  return (
    <View style={style}>
      <Text style={styles.blue}>{city}</Text>
      <Text style={styles.red}>{weather}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default Weather;
