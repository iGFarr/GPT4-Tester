import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const topStocks = [
  "AAPL",
  "MSFT",
  "AMZN",
  "FB",
  "GOOGL",
  "GOOG",
  "BRK.A",
  "JNJ",
  "V",
  "PG",
  "TSLA",
  "JPM",
  "UNH",
  "MA",
  "NVDA",
  "HD",
  "BAC",
  "VZ",
  "DIS",
  "ADBE",
];

const CustomPicker = ({ data, onValueChange }) => {
  const itemHeight = 50;
  const [selectedValue, setSelectedValue] = useState(data[0]);

  const handlePress = (value) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <View style={styles.customPickerContainer}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.item, { height: itemHeight }]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const PickersScreen = () => {
  const [selectedDay, setSelectedDay] = useState("01");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2020");
  const [selectedStock, setSelectedStock] = useState(topStocks[0]);
  const [selectedNumber, setSelectedNumber] = useState("1");
  const numbers = Array.from({ length: 100 }, (_, i) => `${i + 1}`);

  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const years = Array.from({ length: 21 }, (_, i) => (2020 + i).toString());

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Selected: {selectedDay} {selectedMonth} {selectedYear} -{" "}
          {selectedStock}
        </Text>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Day</Text>
          <Picker
            selectedValue={selectedDay}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedDay(itemValue)}
          >
            {days.map((day) => (
              <Picker.Item key={day} label={day} value={day} />
            ))}
          </Picker>

          <Text style={styles.label}>Month</Text>
          <Picker
            selectedValue={selectedMonth}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <Picker.Item key={index} label={month} value={month} />
            ))}
          </Picker>

          <Text style={styles.label}>Year</Text>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {years.map((year) => (
              <Picker.Item key={year} label={year} value={year} />
            ))}
          </Picker>

          <Text style={styles.label}>Top Stocks</Text>
          <Picker
            selectedValue={selectedStock}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedStock(itemValue)}
          >
            {topStocks.map((stock) => (
              <Picker.Item key={stock} label={stock} value={stock} />
            ))}
          </Picker>
        </View>

        <Text style={styles.danLabel}>
          YOU AIN'T GOT NO SOUNDS LIEUTENANT DAN! (FAKE PICKER)
        </Text>
        <CustomPicker data={numbers} onValueChange={setSelectedNumber} />
        <Text style={styles.danLabel}>Selected Number: {selectedNumber}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#4C3575",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#663399",
    padding: 10,
    borderRadius: 10,
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 4,
  },
  label: {
    fontSize: 18,
    color: "#4C3575",
    padding: 8,
  },
  danLabel: {
    fontSize: 18,
    color: "#FFF",
    padding: 8,
  },
  picker: {
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  customPickerContainer: {
    height: 200,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#f8f8f8", // Match the background with other pickers
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  itemText: {
    fontSize: 20,
  },
  selectedValue: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
});

export default PickersScreen;
