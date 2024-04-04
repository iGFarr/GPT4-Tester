import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";

const topCities = [
  { name: "Tokyo", population: "37,400,000" },
  { name: "Delhi", population: "31,000,000" },
  { name: "Shanghai", population: "27,058,000" },
  { name: "Sao Paulo", population: "22,043,000" },
  { name: "Mexico City", population: "21,782,000" },
  { name: "Cairo", population: "20,900,000" },
  { name: "Dhaka", population: "20,283,000" },
  { name: "Mumbai", population: "20,185,000" },
  { name: "Beijing", population: "20,035,000" },
  { name: "Osaka", population: "19,281,000" },
  { name: "Karachi", population: "16,093,000" },
  { name: "Chongqing", population: "15,872,000" },
  { name: "Istanbul", population: "15,029,000" },
  { name: "Buenos Aires", population: "15,024,000" },
  { name: "Kolkata", population: "14,850,000" },
];

const topCountries = [
  { name: "China", population: "1,439,323,776" },
  { name: "India", population: "1,380,004,385" },
  { name: "United States", population: "331,002,651" },
  { name: "Indonesia", population: "273,523,615" },
  { name: "Pakistan", population: "220,892,340" },
  { name: "Brazil", population: "212,559,417" },
  { name: "Nigeria", population: "206,139,589" },
  { name: "Bangladesh", population: "164,689,383" },
  { name: "Russia", population: "145,934,462" },
  { name: "Mexico", population: "128,932,753" },
  { name: "Japan", population: "126,476,461" },
  { name: "Ethiopia", population: "114,963,588" },
  { name: "Philippines", population: "109,581,078" },
  { name: "Egypt", population: "102,334,404" },
  { name: "Vietnam", population: "97,338,579" },
];

const PopulationScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={["Cities", "Countries"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
        style={styles.segmentedControl}
      />
      <ScrollView style={styles.scrollView}>
        {selectedIndex === 0
          ? topCities.map((city, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.itemText}>
                  {city.name}: {city.population}
                </Text>
              </View>
            ))
          : topCountries.map((country, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.itemText}>
                  {country.name}: {country.population}
                </Text>
              </View>
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segmentedControl: {
    margin: 10,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default PopulationScreen;
