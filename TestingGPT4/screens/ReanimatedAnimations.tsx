import React from "react";
import { View, StyleSheet, Button, Text, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import Svg, { Polygon, Path } from "react-native-svg";

const ReanimatedAnimationsScreen = () => {
  const [shape, setShape] = React.useState("square");

  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateX: translateX.value },
        { scale: scale.value },
        { rotate: `${rotation.value}deg` },
      ],
      marginTop: 20, // Ensuring the animated shape does not overlap the picker
    };
  });

  const renderShape = () => {
    switch (shape) {
      case "square":
        return <Animated.View style={[styles.box, animatedStyles]} />;
      case "triangle":
        return (
          <Animated.View
            style={[
              animatedStyles,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Svg height="100" width="100">
              <Polygon points="50,0 100,100 0,100" fill="royalblue" />
            </Svg>
          </Animated.View>
        );
      case "star":
        return (
          <Animated.View
            style={[
              animatedStyles,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Svg height="100" width="100">
              <Path
                d="M50 0 L61.8 35.5 L100 35.5 L69.1 57.5 L80.9 93 L50 71 L19.1 93 L30.9 57.5 L0 35.5 L38.2 35.5 Z"
                fill="royalblue"
              />
            </Svg>
          </Animated.View>
        );
      case "ally":
        return (
          <Animated.Text style={[styles.allyText, animatedStyles]}>
            Ally
          </Animated.Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={shape}
        style={styles.picker}
        onValueChange={(itemValue) => setShape(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Square" value="square" />
        <Picker.Item label="Triangle" value="triangle" />
        <Picker.Item label="Star" value="star" />
        <Picker.Item label="Ally" value="ally" />
      </Picker>
      {renderShape()}
      <View style={styles.buttonContainer}>
        <Button
          title="Toggle Fade"
          onPress={() => {
            opacity.value = withTiming(opacity.value === 1 ? 0 : 1, {
              duration: 1000,
              easing: Easing.linear,
            });
          }}
        />
        <Button
          title="Move Box"
          onPress={() => {
            translateX.value = withTiming(translateX.value === 0 ? 150 : 0, {
              duration: 1000,
              easing: Easing.linear,
            });
          }}
        />
        <Button
          title="Toggle Scale"
          onPress={() => {
            scale.value = withTiming(scale.value === 1 ? 2 : 1, {
              duration: 1000,
              easing: Easing.linear,
            });
          }}
        />
        <Button
          title="Rotate Box"
          onPress={() => {
            rotation.value = withTiming(rotation.value === 0 ? 360 : 0, {
              duration: 1000,
              easing: Easing.linear,
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Changed to flex-start to align items to the top
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 0, // Extra padding for Android to ensure Picker is visible
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "royalblue",
  },
  allyText: {
    fontSize: 32,
    color: "royalblue",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 60,
    justifyContent: "space-around",
    width: "100%",
  },
  picker: {
    width: 200,
    height: 50,
    marginTop: 20,
    marginBottom: 180, // Added margin top for clarity
  },
});

export default ReanimatedAnimationsScreen;
