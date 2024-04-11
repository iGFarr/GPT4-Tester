import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LineChart, yAxisSides } from "react-native-gifted-charts";

const CustomLineChart = ({ data, chartWidth }) => {
  const isPositiveTrend = data[data.length - 1].value > data[0].value;
  const chartColor = isPositiveTrend ? "#14732b" : "#FF3B30";
  const gradientStart = isPositiveTrend ? "#34C759" : "#c90a1a";
  const gradientEnd = isPositiveTrend ? "#c1e0c9" : "#e0afb3";
  const formatYAxisLabel = (value) => {
    // Checking if the maximum value in the dataset is greater than 1000
    const maxValue = Math.max(...data.map((d) => d.value));
    if (maxValue >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`; // Formatting values as $1.2K, etc.
    }
    return `$${value}`; // Keeping the value as is if under 1000
  };

  const customPointerComponent = (chartColor) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer circle (white ring) */}
        <View
          style={{
            width: 16, // Outer circle is larger
            height: 16,
            borderRadius: 8,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Inner circle (chart color) */}
          <View
            style={{
              width: 10, // Inner circle is smaller
              height: 10,
              borderRadius: 5,
              backgroundColor: chartColor,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LineChart
        areaChart
        width={chartWidth - 48}
        adjustToWidth
        color1={chartColor}
        disableScroll
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
        hideDataPoints
        hideRules
        isAnimated
        animationDuration={2500}
        startFillColor={gradientStart}
        startOpacity={0.5}
        endFillColor={gradientEnd}
        endOpacity={0.01}
        hideYAxisText
        curved
        pointerConfig={{
          shiftPointerLabelX: -48,
          shiftPointerLabelY: -52,
          pointerStripUptoDataPoint: true,
          pointerStripWidth: 0,
          pointerComponent: () => customPointerComponent(chartColor),
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 64,
                  width: 116,
                  backgroundColor: "white",
                  opacity: 0.95,
                  shadowColor: "gray",
                  shadowOffset: { width: 0.75, height: -0.25 },
                  shadowOpacity: 0.3,
                  borderRadius: 16,
                  justifyContent: "center",
                  padding: 16,
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  ${items[0].value}.00
                </Text>
                <Text style={{ color: "black", fontSize: 12, paddingTop: 6 }}>
                  {items[0].date}
                </Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -28,
  },
});

export default CustomLineChart;
