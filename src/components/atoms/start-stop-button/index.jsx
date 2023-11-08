import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StartStopButton = ({ isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{isActive ? "STOP" : "START"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default StartStopButton;
