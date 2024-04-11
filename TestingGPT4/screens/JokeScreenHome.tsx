import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const JokeScreen = () => {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.jokeContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : (
          <Text style={styles.jokeText}>{joke}</Text>
        )}
      </View>
      <Button
        title="Tell Joke"
        onPress={fetchJoke}
        color="#006E7F"
        style={styles.button}
      />
    </View>
  );
};

// Split complementary color scheme (Teal, Orange, Red-Violet, Blue-Violet)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F9F7F7", // Light background for contrast
  },
  jokeContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#D6E4E5", // Teal-ish for the joke container
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jokeText: {
    fontSize: 18,
    color: "#006E7F", // Darker teal for joke text
  },
  errorText: {
    color: "#D90368", // Red-Violet for errors
  },
  button: {
    borderRadius: 10,
    padding: 10,
  },
});

export default JokeScreen;
