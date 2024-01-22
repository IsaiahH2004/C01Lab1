import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList
        initialValues={[
          "Testing1",
          "Do c01 Lab",
          "Have a nap",
          "Learn React Native",
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
