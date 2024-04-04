import * as React from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TipsForChatGPTScreen from "./screens/TipsForChatGPTScreen";
import JokesScreen from "./screens/JokesScreen";
import AnimationsScreen from "./screens/AnimationsScreen";
import ReanimatedAnimationsScreen from "./screens/ReanimatedAnimations";
import SwitchesScreen from "./screens/SwitchScreen";
import PickersScreen from "./screens/PickersScreen";
import StocksScreen from "./screens/StocksScreen";
import ChartsScreen from "./screens/ChartsScreen";
import MiscellaneousScreen from "./screens/Miscellaneous";
import { enableScreens } from "react-native-screens";
enableScreens();

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          title="GPTips"
          onPress={() => navigation.navigate("GPTips by GPT-4")}
        />
        <Button title="Jokes" onPress={() => navigation.navigate("Jokes")} />
        <Button
          title="Animations"
          onPress={() => navigation.navigate("Animations")}
        />
        <Button
          title="Reanimated"
          onPress={() => navigation.navigate("Reanimated")}
        />
        <Button
          title="Switches"
          onPress={() => navigation.navigate("Switches")}
        />
        <Button
          title="Pickers"
          onPress={() => navigation.navigate("Pickers")}
        />
        <Button title="Stocks" onPress={() => navigation.navigate("Stocks")} />
        <Button title="Charts" onPress={() => navigation.navigate("Charts")} />
        <Button
          title="Miscellaneous"
          onPress={() => navigation.navigate("Miscellaneous")}
        />
      </ScrollView>
    </View>
  );
}

function GPT_Tester() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "GPT4 Tester" }}
        />
        <Stack.Screen name="GPTips by GPT-4" component={TipsForChatGPTScreen} />
        <Stack.Screen name="Jokes" component={JokesScreen} />
        <Stack.Screen name="Animations" component={AnimationsScreen} />
        <Stack.Screen
          name="Reanimated"
          component={ReanimatedAnimationsScreen}
        />
        <Stack.Screen name="Switches" component={SwitchesScreen} />
        <Stack.Screen name="Pickers" component={PickersScreen} />
        <Stack.Screen name="Stocks" component={StocksScreen} />
        <Stack.Screen name="Charts" component={ChartsScreen} />
        <Stack.Screen name="Miscellaneous" component={MiscellaneousScreen} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});

export default GPT_Tester;
