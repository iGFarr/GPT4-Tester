// AnimationsScreen.tsx
import React, { useState, useRef } from "react";
import { ScrollView, Animated, StyleSheet, View } from "react-native";
import StyledButton from "./StyledButton"; // Assuming you have this component created already
import ConfettiCannon from "react-native-confetti-cannon";

// You should create utility hooks similar to the ones provided in previous examples.
// These hooks control the animations for each of the Animated.View components below.
import {
  useFadeAnimation,
  useScaleAnimation,
  useSlideAnimation,
  useRotateAnimation,
  useParallelAnimation,
  useStreamersAnimation,
  // ... other animation hooks you've created
} from "./animationExamples"; // Update the path according to your project structure

const AnimationsScreen = () => {
  // Hooks for animations
  const fade = useFadeAnimation();
  const scale = useScaleAnimation();
  const slide = useSlideAnimation();
  const rotate = useRotateAnimation();
  const parallel = useParallelAnimation();
  const streamers = useStreamersAnimation();

  // State for triggering confetti
  const [confettiShootKey, setConfettiShootKey] = useState(0);

  // Function to trigger confetti animation
  const shootConfetti = () => {
    setConfettiShootKey((prevKey) => prevKey + 1); // Update key to trigger re-render
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Fade Animation */}
      <Animated.View style={fade.animation}>
        <StyledButton title="Fade" onPress={fade.start} />
      </Animated.View>

      {/* Scale Animation */}
      <Animated.View style={scale.animation}>
        <StyledButton title="Scale" onPress={scale.start} />
      </Animated.View>

      {/* Slide Animation */}
      <Animated.View style={slide.animation}>
        <StyledButton title="Slide" onPress={slide.start} />
      </Animated.View>

      {/* Rotate Animation */}
      <Animated.View style={rotate.animation}>
        <StyledButton title="Rotate" onPress={rotate.start} />
      </Animated.View>

      <View style={styles.animationContainer}>
        <Animated.View style={[parallel.animation1, parallel.animation2]}>
          <StyledButton title="Parallel" onPress={parallel.start} />
        </Animated.View>
      </View>

      {/* Streamers Animation */}
      <Animated.View style={streamers.animation}>
        <StyledButton title="Looping Rot & Slide" onPress={streamers.start} />
      </Animated.View>

      {/* Confetti Button */}
      <StyledButton title="Confetti" onPress={shootConfetti} />

      {/* Confetti Cannon */}
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        fadeOut={true}
        autoStart={true}
        key={confettiShootKey}
        explosionSpeed={350}
      />

      {/* Add more buttons for other animations here using the same pattern */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  animationContainer: {
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default AnimationsScreen;
