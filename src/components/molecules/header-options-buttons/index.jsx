import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HeaderOptionsButtons = ({ options, selectedOption, onOptionPress }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedOption === index && styles.selectedButton,
          ]}
          onPress={() => onOptionPress(index)}
        >
          <Text style={styles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: "32%",
    alignItems: "center",
    borderWidth: 3, 
    padding: 10, 
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
    
  },
  selectedButton: {
    borderColor: "#333333",
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default HeaderOptionsButtons;
