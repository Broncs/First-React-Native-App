import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

function GoalInput({ onAddGoal, modalVisible, onCancel }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your goal"
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                onCancel();
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addGoalHandler();
              }}
              disabled={!enteredGoal}
              title="ADD"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
