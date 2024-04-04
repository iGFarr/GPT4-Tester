import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import * as Speech from "expo-speech";

const JokesScreen = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?type=single"
      );
      if (response.data.type === "single") {
        setJoke(response.data.joke);
      } else {
        setJoke("Joke not found. Try again!");
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke(
        "Failed to fetch joke. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const speakJoke = () => {
    Speech.speak(joke, {
      language: "en", // You can adjust the language
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fetchJoke}>
        <Text style={styles.buttonText}>Tell Me A Joke</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#663399" />
      ) : (
        <>
          <Text style={styles.jokeText}>{joke}</Text>
          {joke && (
            <TouchableOpacity style={styles.button} onPress={speakJoke}>
              <Text style={styles.buttonText}>Read Joke Aloud</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  button: {
    backgroundColor: "#663399",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  jokeText: {
    color: "#4C3575", // Dark purple text for readability
    fontSize: 20, // Increased font size for better readability
    paddingHorizontal: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default JokesScreen;
