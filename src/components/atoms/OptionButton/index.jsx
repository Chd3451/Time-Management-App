import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, isSelected }) {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "33%",
    alignItems: "center",
    borderWidth: 3, 
    padding: 5, 
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
});
