import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const TipsForChatGPTScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tips for Working with ChatGPT</Text>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>1. Be Specific</Text>
        <Text style={styles.tipDescription}>
          Provide clear and detailed information about what you need. The more
          specific you are, the more accurate and helpful my responses can be.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>2. Use Precise Language</Text>
        <Text style={styles.tipDescription}>
          Avoid ambiguity in your requests. Precise language helps in
          understanding your query better and delivering the exact information
          you seek.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>3. Provide Context</Text>
        <Text style={styles.tipDescription}>
          When asking follow-up questions or related queries, providing context
          from previous interactions can be incredibly helpful.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>4. Sequential Questions</Text>
        <Text style={styles.tipDescription}>
          If you have multiple questions, consider asking them in a logical
          sequence. It helps in providing coherent and connected responses.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>5. Patience is Key</Text>
        <Text style={styles.tipDescription}>
          Some queries might take longer to process. A bit of patience ensures
          that you receive comprehensive responses to your requests.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>6. Feedback is Welcome</Text>
        <Text style={styles.tipDescription}>
          Your feedback is invaluable. If something isn't right, let me know! It
          helps me learn and improve.
        </Text>
      </View>

      {/* Add more tips as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  tipContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 32,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tipDescription: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default TipsForChatGPTScreen;
