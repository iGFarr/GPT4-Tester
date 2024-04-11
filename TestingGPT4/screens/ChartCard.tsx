import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import CustomLineChart from "./CustomLineChart";
import CustomCandlestickChart from "./CustomCandlestickChart";
import RNPickerSelect from "react-native-picker-select";
import Ionicons from "react-native-vector-icons/Ionicons";

function ChartCard({ route }) {
  const [cardWidth, setCardWidth] = useState(Dimensions.get("window").width);
  const chartPadding = 0;
  const chartWidth = cardWidth - chartPadding * 2;
  const { initialData } = route.params;
  const [data, setData] = useState(initialData);
  const [chartType, setChartType] = useState("line");
  const [dateRange, setDateRange] = useState("1d");
  const [dateRangeArrow, setDateRangeArrow] = useState("chevron-down-outline");
  const [chartTypeArrow, setChartTypeArrow] = useState("chevron-down-outline");

  // Utility function to generate dates for sample data

  const getCurrentDateString = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // getMonth() is zero-based
    const year = date.getFullYear();

    // Format the date as DD/MM/YYYY
    return `${day}/${month}/${year}`;
  };

  const generateSampleData = (timeframe) => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = today.getTime() - startOfYear.getTime();

    // Convert the difference to days
    const daysSinceStartOfYear = Math.floor(
      differenceInMilliseconds / millisecondsPerDay
    );

    switch (timeframe) {
      case "1d":
        return [
          { value: 0, date: "00:00" },
          { value: 1200, date: "01:00" },
          { value: 1200, date: "02:00" },
          { value: 2300, date: "03:00" },
          { value: 1000, date: "04:00" },
          { value: 1000, date: "05:00" },
          { value: 270, date: "06:00" },
          { value: 500, date: "07:00" },
          { value: 1400, date: "08:00" },
          { value: 900, date: "09:00" },
          { value: 1200, date: "10:00" },
          { value: 1300, date: "11:00" },
          { value: 200, date: "12:00" },
          { value: 700, date: "13:00" },
          { value: 1300, date: "14:00" },
          { value: 2600, date: "15:00" },
          { value: 2100, date: "16:00" },
          { value: 3100, date: "17:00" },
          { value: 3210, date: "18:00" },
          { value: 3120, date: "19:00" },
          { value: 3270, date: "20:00" },
          { value: 3600, date: "21:00" },
          { value: 4100, date: "22:00" },
          { value: 5000, date: "23:00" },
        ];

      case "1m":
        let dataForMonth = [];
        for (let i = 0; i < 30; i++) {
          let value = Math.round(2500 + 1500 * Math.sin((i * Math.PI) / 12));
          let date = new Date();
          date.setDate(date.getDate() - (29 - i)); // Counting back from today
          dataForMonth.push({
            value,
            date: `${date.getMonth() + 1}/${date.getDate()}`,
          });
        }
        return dataForMonth;

      case "6m":
        let dataForSixMonths = [];
        for (let i = 0; i < 6; i++) {
          let value = Math.round(2500 + 1500 * Math.sin((i * Math.PI) / 3));
          let date = new Date();
          date.setMonth(date.getMonth() - (5 - i)); // Counting back from this month
          dataForSixMonths.push({
            value,
            date: `${date.getMonth() + 1}/${date.getFullYear()}`,
          });
        }
        return dataForSixMonths;

      case "ytd":
        let dataForYTD = [];
        for (let i = 0; i <= daysSinceStartOfYear; i++) {
          let value = Math.round(
            2500 + 1500 * Math.sin((i * 2 * Math.PI) / daysSinceStartOfYear)
          );
          let date = new Date(startOfYear.getTime() + i * 1000 * 60 * 60 * 24);
          dataForYTD.push({
            value,
            date: `${date.getMonth() + 1}/${date.getDate()}`,
          });
        }
        return dataForYTD;

      case "1y":
        let dataFor1Y = [];
        for (let i = 0; i < 12; i++) {
          let value = Math.round(2500 + 1500 * Math.sin((i * Math.PI) / 6));
          let date = new Date(new Date().setMonth(today.getMonth() - 11 + i));
          dataFor1Y.push({
            value,
            date: `${date.getMonth() + 1}/${date.getFullYear()}`,
          });
        }
        return dataFor1Y;

      case "sinceinc":
        let dataForSinceInception = [];
        // Assuming "since inception" means the last 5 years for this example
        for (let i = 0; i < 5; i++) {
          let value = Math.round(2500 + 1500 * Math.sin((i * Math.PI) / 2.5));
          let date = new Date(
            new Date().setFullYear(today.getFullYear() - 4 + i)
          );
          dataForSinceInception.push({
            value,
            date: `${date.getFullYear()}`,
          });
        }
        return dataForSinceInception;

      default:
        return [];
    }
  };

  useEffect(() => {
    setData(generateSampleData(dateRange));
  }, [dateRange]);

  return (
    <View style={styles.card}>
      <View
        style={{
          ...styles.pickerContainer,
          borderBottomWidth: 1,
          borderBottomColor: "#DEDEDE",
        }}
      >
        <Text style={styles.pickerLabel}>Chart Type</Text>
        <RNPickerSelect
          placeholder={{}}
          value={chartType}
          onValueChange={(value) => setChartType(value)}
          items={[
            { label: "Line", value: "line" },
            { label: "Candlestick", value: "candlestick" },
          ]}
          style={pickerSelectStyles}
          onOpen={() => setChartTypeArrow("chevron-up-outline")}
          onClose={() => setChartTypeArrow("chevron-down-outline")}
          Icon={() => {
            return <Ionicons name={chartTypeArrow} color="purple" size={20} />;
          }}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Timeframe</Text>
        <RNPickerSelect
          placeholder={{}}
          value={dateRange}
          onValueChange={(value) => setDateRange(value)}
          items={[
            { label: "1 Day", value: "1d" },
            { label: "1 Month", value: "1m" },
            { label: "6 Months", value: "6m" },
            { label: "Year-to-date", value: "ytd" },
            { label: "1 Year", value: "1y" },
            { label: "Since inception", value: "sinceinc" },
          ]}
          style={pickerSelectStyles}
          onOpen={() => setDateRangeArrow("chevron-up-outline")}
          onClose={() => setDateRangeArrow("chevron-down-outline")}
          Icon={() => {
            return <Ionicons name={dateRangeArrow} color="purple" size={20} />;
          }}
        />
      </View>
      <View style={styles.chartContainer}>
        {chartType === "line" ? (
          <CustomLineChart data={data} chartWidth={chartWidth} />
        ) : (
          <CustomCandlestickChart data={data} />
        )}
      </View>
      <Text style={styles.lastUpdatedLabel}>
        Last updated as of {getCurrentDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 16,
  },
  chartContainer: {
    marginBottom: 0,
  },
  pickerContainer: {
    marginBottom: 20,
    marginTop: -8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pickerLabel: {
    fontSize: 16,
    color: "#000",
    flex: 1,
  },
  lastUpdatedLabel: {
    textAlign: "center", // Center the text
    marginTop: 8, // Add some space above the label
    fontSize: 12, // Set font size
    color: "#666", // Set the text color
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "purple",
    fontWeight: "bold",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: Platform.OS === "android" ? 0 : -15, // Only for iOS to negate marginLeft: -15 from inputAndroid
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "purple",
    fontWeight: "bold",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: -15, // to ensure the dropdown icon is aligned with the label
  },
  iconContainer: {
    top: Platform.OS === "ios" ? 10 : 13,
  },
});

export default ChartCard;
