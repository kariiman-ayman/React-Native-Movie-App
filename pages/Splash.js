import { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash.png")} style={styles.image} />
      <Text style={styles.text}>Movie App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 200,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Splash;
