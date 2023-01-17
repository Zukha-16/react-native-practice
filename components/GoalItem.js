import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  const { onDeleteGoal, item } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#32056c"' }}
        onPress={() => {
          onDeleteGoal(item.id);
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});
