import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

const ToDoList = ({ initialValues }) => {
  const [toDos, setToDos] = useState(
    initialValues.map((item) => ({ id: uuidv4(), title: item }))
  );

  const addToDo = (newTitle) => {
    const newItem = { id: uuidv4(), title: newTitle };
    setToDos((prevToDos) => [...prevToDos, newItem]);
  };

  const removeToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <View style={styles.todoListContainer}>
      {toDos.map((toDo) => (
        <View key={toDo.id} style={styles.Event}>
          <Text style={styles.todoItem}>{toDo.title}</Text>
          <View style={styles.ButtonContainer}>
            <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
          </View>
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
  initialValues: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flex: 1,
    marginVertical: 5,
    width: 200,
  },
  Event: {
    flexDirection: "row",
    borderColor: "gray",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  ButtonContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: "center",
  },
});

export default ToDoList;
