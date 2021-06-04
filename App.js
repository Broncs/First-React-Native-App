import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setModalVisible(false);
  };

  const removeGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.key !== id));
  };

  const cancelGoalAdditionHandler = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        modalVisible={modalVisible}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.key}
            onDelete={removeGoalHandler}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },

  listItem: {
    padding: 11,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
