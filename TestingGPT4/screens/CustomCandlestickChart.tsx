import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => "green",
  strokeWidth: 2,
  barPercentage: 0.25,
};

const CustomCandlestickChart = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const cardPaddingHorizontal = 32; // Adjust based on your card's horizontal padding
  const chartWidth = screenWidth - cardPaddingHorizontal;

  const chartData = {
    labels: data.map((_, index) => index.toString()),
    datasets: [
      {
        data: data.map((d) => d.value),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={chartData}
        width={chartWidth}
        height={220} // Adjust based on your preference
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={chartConfig}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withInnerLines={false}
        fromZero // Ensures the chart starts from zero, might help with visual fitting
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centers the chart if it's narrower than the card
    paddingVertical: 16, // Adjust based on your card's vertical padding
  },
});

export default CustomCandlestickChart;
