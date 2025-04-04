import { Text, View, StyleSheet } from "react-native";

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

export default Weather;
