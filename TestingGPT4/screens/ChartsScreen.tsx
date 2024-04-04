import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-gifted-charts";

const ChartsScreen = () => {
  const lineChartData = [
    { value: 220, label: "Jan", labelTextStyle: { color: "white" } },
    { value: 280, label: "Feb", labelTextStyle: { color: "white" } },
    { value: 300, label: "Mar", labelTextStyle: { color: "white" } },
    { value: 200, label: "Apr", labelTextStyle: { color: "red" } },
    { value: 310, label: "May", labelTextStyle: { color: "white" } },
    { value: 265, label: "Jun", labelTextStyle: { color: "white" } },
    { value: 275, label: "Jul", labelTextStyle: { color: "white" } },
    { value: 290, label: "Aug", labelTextStyle: { color: "white" } },
    { value: 280, label: "Sep", labelTextStyle: { color: "white" } },
    { value: 300, label: "Oct", labelTextStyle: { color: "white" } },
    { value: 310, label: "Nov", labelTextStyle: { color: "white" } },
    { value: 305, label: "Dec", labelTextStyle: { color: "white" } },
    { value: 312, label: "Jan", labelTextStyle: { color: "white" } },
    { value: 343, label: "Feb", labelTextStyle: { color: "white" } },
    { value: 346, label: "Mar", labelTextStyle: { color: "white" } },
    { value: 368, label: "Apr", labelTextStyle: { color: "green" } },
    { value: 358, label: "May", labelTextStyle: { color: "white" } },
    { value: 350, label: "Jun", labelTextStyle: { color: "white" } },
    { value: 343, label: "Jul", labelTextStyle: { color: "white" } },
    { value: 340, label: "Aug", labelTextStyle: { color: "white" } },
    { value: 347, label: "Sep", labelTextStyle: { color: "white" } },
    { value: 350, label: "Oct", labelTextStyle: { color: "white" } },
    { value: 349, label: "Nov", labelTextStyle: { color: "white" } },
    { value: 349, label: "Dec", labelTextStyle: { color: "white" } },
  ];

  const barChartData = [
    { value: 150, label: "Jan", frontColor: "#9575cd" },
    { value: 200, label: "Feb", frontColor: "#b39ddb" },
    { value: 170, label: "Mar", frontColor: "#d1c4e9" },
    { value: 220, label: "Apr", frontColor: "#9575cd" },
    { value: 210, label: "May", frontColor: "#b39ddb" },
    { value: 250, label: "Jun", frontColor: "#d1c4e9" },
    { value: 230, label: "Jul", frontColor: "#9575cd" },
    { value: 240, label: "Aug", frontColor: "#b39ddb" },
    { value: 210, label: "Sep", frontColor: "#d1c4e9" },
    { value: 220, label: "Oct", frontColor: "#9575cd" },
    { value: 200, label: "Nov", frontColor: "#b39ddb" },
    { value: 190, label: "Dec", frontColor: "#d1c4e9" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Stock Price Chart</Text>
        <LineChart
          data={lineChartData}
          width={340}
          height={220}
          verticalLineColor="#8e24aa"
          verticalLineThickness={1}
          lineColor="#6a1b9a"
          lineWidth={3}
          dotColor="#8e24aa"
          yAxisTextStyle={{ color: "white" }}
          xAxisTextStyle={{ color: "white" }}
          yAxisThickness={0}
          xAxisThickness={0}
          initialSpacing={0}
          noOfSections={5}
          areaChart
          startFillColor="rgba(138, 43, 226, 0.8)"
          endFillColor="rgba(138, 43, 226, 0.1)"
          startOpacity={0.9}
          endOpacity={0.1}
          scrollable
        />

        <Text style={styles.header}>Monthly Performance</Text>
        <BarChart
          data={barChartData}
          barWidth={24}
          height={220}
          yAxisTextStyle={{ color: "white" }}
          xAxisTextStyle={{ color: "white" }}
          frontColor="#8e24aa"
          noOfSections={5}
          barBorderRadius={4}
          yAxisThickness={0}
          xAxisThickness={0}
          initialSpacing={10}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C3575",
    paddingTop: 10,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
    marginTop: 24,
  },
});

export default ChartsScreen;
