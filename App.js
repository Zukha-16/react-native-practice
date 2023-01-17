import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState, useRef } from "react";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [placehodler, setPlacehodler] = useState("Enter your goal...");
  const [goals, setGoals] = useState([]);
  const inputRef = useRef(null);
  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      setPlacehodler("Please enter your goal...");
      inputRef.current.setNativeProps({
        style: { borderColor: "red" },
      });
      inputRef.current.focus();
      return;
    }
    setPlacehodler("Enter your goal...");
    inputRef.current.setNativeProps({
      style: { borderColor: "#cccccc" },
    });
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };
  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const cancelAddGoalHandler = () => {
    setModalVisible(false);
  };
  const removeGoalHandler = (goalId) => {
    // console.log("goalId: ", goalId);
    setGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        visible={modalVisible}
        placehodler={placehodler}
        inputRef={inputRef}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        {goals.length === 0 && (
          <Text style={styles.noGoalsText}>No goals added yet!</Text>
        )}
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem item={itemData.item} onDeleteGoal={removeGoalHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    paddingTop: 24,
    flex: 6,
  },
  noGoalsText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
