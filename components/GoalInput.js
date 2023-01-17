import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const { inputRef, onAddGoal, placehodler, onCancelGoal } = props;

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          ref={inputRef}
          value={enteredGoal}
          style={styles.textInput}
          placeholder={placehodler}
          onChangeText={(text) => setEnteredGoal(text)}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancelGoal} color="#F31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD GOAL"
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    borderWidth: 1,
    padding: 16,
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 150,
    marginHorizontal: 8,
    // borderWidth: 1,
    // borderColor: "#cccccc",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});
