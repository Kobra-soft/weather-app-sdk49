// ACTIVITY 9 - City.jsx

import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";

const City = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage(
          "Permission to access location was denied, please check your device settings."
        );
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "waiting...";
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>Your location is: {text}</Text>
    </View>
  );
};

// This makes the component available to other JavaScript modules.
export default City;
