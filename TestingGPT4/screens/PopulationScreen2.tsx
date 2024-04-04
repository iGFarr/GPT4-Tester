import React from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

// Sample data
const DATA = [
  {
    title: "China",
    data: [
      "Shanghai",
      "Beijing",
      "Chongqing",
      "Tianjin",
      "Guangzhou",
      "Shenzhen",
      "Chengdu",
      "Nanjing",
      "Wuhan",
      "Xi'an",
      "Hangzhou",
      "Dongguan",
      "Foshan",
      "Shenyang",
      "Harbin",
    ],
  },
  {
    title: "India",
    data: [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Ahmedabad",
      "Chennai",
      "Kolkata",
      "Surat",
      "Pune",
      "Jaipur",
      "Lucknow",
      "Kanpur",
      "Nagpur",
      "Indore",
      "Thane",
    ],
  },
  {
    title: "United States",
    data: [
      "New York City",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
      "Austin",
      "Jacksonville",
      "Fort Worth",
      "Columbus",
      "San Francisco",
    ],
  },
  // Add more countries and their cities here
];

const PopulationScreen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 24,
    backgroundColor: "#fff",
    padding: 10,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PopulationScreen2;
