import React, { useState, useContext } from "react";
import { View, Text, Switch, ScrollView, StyleSheet } from "react-native";

const SwitchesScreen = ({ navigation }) => {
  // State for theme override
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // State for title switch
  const [title, setTitle] = useState("Switches");

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Implement theme logic here. This is just a placeholder.
    // You might want to use a context or a global state management solution
    // to set the theme across the app.
  };

  // Function to toggle title
  const toggleTitle = () => {
    setTitle(title === "Switches" ? "Switched" : "Switches");
    navigation.setOptions({
      title: title === "Switches" ? "Switched" : "Switches",
    });
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#FFF" },
      ]}
    >
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? "#FFF" : "#333" }]}>
          Theme Override
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? "#FFF" : "#333" }]}>
          Title Switcher
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={title === "Switched" ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTitle}
          value={title === "Switched"}
        />
      </View>
      {/* Add more switches here as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  label: {
    fontSize: 18,
  },
});

export default SwitchesScreen;
