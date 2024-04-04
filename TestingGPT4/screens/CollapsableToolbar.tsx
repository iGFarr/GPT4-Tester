import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";

const CollapsibleToolbarScreen = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Collapsible Toolbar */}
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Collapsible Toolbar</Text>
        </View>
      </Collapsible>

      {/* Content */}
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          if (scrolling > 50) setIsCollapsed(true);
          else setIsCollapsed(false);
        }}
        scrollEventThrottle={16}
      >
        {/* Button to manually toggle the toolbar */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCollapsed(!isCollapsed)}
        >
          <Text style={styles.buttonText}>
            {isCollapsed ? "Expand Toolbar" : "Collapse Toolbar"}
          </Text>
        </TouchableOpacity>

        {/* Placeholder content to demonstrate scrolling */}
        {Array.from({ length: 30 }, (_, i) => (
          <Text key={i} style={styles.contentText}>
            Item {i + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#03A9F4",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#009688",
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  contentText: {
    padding: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
});

export default CollapsibleToolbarScreen;
