import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Answer", { question, context });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter your question"
          value={question}
          onChangeText={setQuestion}
          style={styles.input}
        />
        <TextInput
          placeholder="Provide relevant context"
          value={context}
          onChangeText={setContext}
          multiline
          style={[styles.input, styles.contextInput]}
        />
        <Button title="Get Answer" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default HomeScreen;
