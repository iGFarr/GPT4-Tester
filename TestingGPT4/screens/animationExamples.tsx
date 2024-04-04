import { useRef } from "react";
import { Animated } from "react-native";

// Fade Animation
export const useFadeAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const start = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => animation.setValue(0));
  };
  return { animation: { opacity: animation }, start };
};

// Scale Animation
export const useScaleAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const start = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start(() => animation.setValue(0));
  };
  return { animation: { transform: [{ scale: animation }] }, start };
};

// Slide Animation
export const useSlideAnimation = () => {
  const animation = useRef(new Animated.Value(-100)).current;
  const start = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => animation.setValue(-100));
  };
  return { animation: { transform: [{ translateY: animation }] }, start };
};

// Rotate Animation
export const useRotateAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const start = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => animation.setValue(0));
  };
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return { animation: { transform: [{ rotate: spin }] }, start };
};

// Sequence Animation (Combining multiple animations)
export const useSequenceAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0);
    });
  };

  return {
    animation: { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
    start,
  };
};

// Continuing from the previous ones...

// Parallel Animation (Run multiple animations at the same time)
// In animationExamples.tsx
export const useParallelAnimation = () => {
  const anim1 = useRef(new Animated.Value(0)).current; // For fade animation
  const anim2 = useRef(new Animated.Value(1)).current; // For scale animation

  const start = () => {
    anim1.setValue(0);
    anim2.setValue(1);

    Animated.parallel([
      Animated.timing(anim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(anim2, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      anim1.setValue(0); // Reset animations to initial values
      anim2.setValue(1);
    });
  };

  return {
    animation1: { opacity: anim1 },
    animation2: { transform: [{ scale: anim2 }] },
    start,
  };
};

// Stagger Animation (Run animations in sequence with a delay between each)
export const useStaggerAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.stagger(500, [
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return { animation: { opacity: animation }, start };
};

// Loop Animation (Repeat an animation)
export const useLoopAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      { iterations: 4 } // Number of times the animation will run
    ).start(() => animation.setValue(0));
  };

  return { animation: { opacity: animation }, start };
};

export const useStreamersAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const start = () => {
    animation.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.delay(1000), // Wait for 1 second before reversing the animation
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // Infinite loop
      }
    ).start();
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -200], // Move up by 200
  });
  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Full rotation
  });

  return {
    animation: { transform: [{ translateY }, { rotate }] },
    start,
  };
};
