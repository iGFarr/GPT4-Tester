import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { Card, Button } from "react-native-paper";
import { SwipeListView } from "react-native-swipe-list-view";
import SegmentedControl from "@react-native-community/segmented-control";

const MiscellaneousScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [data, setData] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      key: `${i}`,
      text: `Item ${i + 1}`,
    }))
  );

  const showAlertDialog = () =>
    Alert.alert("Alert Title", "My Alert Msg", [{ text: "OK" }]);

  const renderHiddenItem = (rowData, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn]}
        onPress={() => deleteRow(rowMap, rowData.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteRow = (rowMap, rowKey) => {
    const newData = [...data];
    const prevIndex = data.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlertDialog}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              Hide Modal
            </Button>
          </View>
        </View>
      </Modal>

      <SwipeListView
        data={data}
        renderItem={({ item }) => (
          <View style={styles.rowFront}>
            <Text>{item.text}</Text>
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 44,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "#663399",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  segmentedControl: {
    margin: 10,
    width: "90%",
    alignSelf: "center",
  },
  rowFront: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    margin: 5,
    paddingLeft: 15,
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DD2C00",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 5,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    backgroundColor: "#DD2C00",
    right: 0,
    borderRadius: 5,
  },
  backTextWhite: {
    color: "#FFFFFF",
  },
});

export default MiscellaneousScreen;
