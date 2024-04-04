import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";

// Top 50 stock symbols with mock prices
const stockData = [
  { symbol: "AAPL", price: "150.10" },
  { symbol: "MSFT", price: "250.70" },
  { symbol: "AMZN", price: "105.25" },
  { symbol: "GOOGL", price: "98.45" },
  { symbol: "GOOG", price: "95.00" },
  { symbol: "FB", price: "150.50" },
  { symbol: "BRK.A", price: "410500" },
  { symbol: "JNJ", price: "160.30" },
  { symbol: "V", price: "210.85" },
  { symbol: "PG", price: "140.55" },
  { symbol: "UNH", price: "480.55" },
  { symbol: "MA", price: "330.25" },
  { symbol: "NVDA", price: "180.40" },
  { symbol: "VZ", price: "45.75" },
  { symbol: "DIS", price: "105.65" },
  { symbol: "HD", price: "320.50" },
  { symbol: "PYPL", price: "90.00" },
  { symbol: "BAC", price: "35.60" },
  { symbol: "ADBE", price: "430.25" },
  { symbol: "CMCSA", price: "42.75" },
  { symbol: "NFLX", price: "190.65" },
  { symbol: "KO", price: "55.45" },
  { symbol: "NKE", price: "125.30" },
  { symbol: "MRK", price: "84.15" },
  { symbol: "PFE", price: "48.75" },
  { symbol: "T", price: "20.65" },
  { symbol: "PEP", price: "155.35" },
  { symbol: "TMO", price: "560.25" },
  { symbol: "ABBV", price: "140.10" },
  { symbol: "ABT", price: "105.45" },
  { symbol: "CRM", price: "180.25" },
  { symbol: "ACN", price: "290.50" },
  { symbol: "ORCL", price: "75.00" },
  { symbol: "AVGO", price: "490.75" },
  { symbol: "CSCO", price: "45.35" },
  { symbol: "TXN", price: "160.80" },
  { symbol: "QCOM", price: "135.45" },
  { symbol: "COST", price: "470.25" },
  { symbol: "CVX", price: "155.75" },
  { symbol: "LLY", price: "280.40" },
  { symbol: "MCD", price: "240.25" },
  { symbol: "BMY", price: "60.10" },
  { symbol: "DHR", price: "250.50" },
  { symbol: "MDT", price: "85.65" },
  { symbol: "NEE", price: "75.00" },
  { symbol: "LIN", price: "265.50" },
  { symbol: "INTC", price: "45.10" },
  { symbol: "HON", price: "180.75" },
  { symbol: "UNP", price: "210.55" },
  { symbol: "UPS", price: "190.45" },
];

const StocksScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(stockData);

  // Filter the list of stock symbols based on the search term
  const filterSymbols = (text) => {
    setSearchTerm(text);
    if (text) {
      const updatedList = stockData.filter(({ symbol }) => {
        const itemData = symbol.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(updatedList);
    } else {
      setFilteredData(stockData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        style={styles.searchBar}
        placeholder="Search Stocks..."
        onChangeText={filterSymbols}
        value={searchTerm}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <View style={styles.stockItem}>
            <Text style={styles.stockSymbol}>{item.symbol}</Text>
            <Text style={styles.stockPrice}>{`$${item.price}`}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
  },
  searchBar: {
    backgroundColor: "#ffffff",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    fontSize: 18,
  },
  stockItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  stockSymbol: {
    fontSize: 16,
  },
  stockPrice: {
    fontSize: 16,
    color: "#555",
  },
});

export default StocksScreen;
