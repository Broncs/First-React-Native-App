import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type your goal"
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button onPress={onAddGoal.bind(this, enteredGoal)} title="ADD" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    width: "80%",
  },
});

export default GoalInput;
