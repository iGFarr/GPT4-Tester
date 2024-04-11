import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const AnswerScreen = () => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();

  useEffect(() => {
    const fetchAnswer = async () => {
      setIsLoading(true);
      const { question, context } = route.params;

      // TODO: Call your Language Processing API here
      const response = await axios.post("YOUR_API_ENDPOINT", {
        question,
        context,
      });
      setAnswer(response.data.answer);
      setIsLoading(false);
    };

    fetchAnswer();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" /> : <Text>{answer}</Text>}
    </View>
  );
};

// Add your styles
export default AnswerScreen;
