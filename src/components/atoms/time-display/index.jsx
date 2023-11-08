import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TimeDisplay = ({ formattedTime }) => {
  return (
    <Text style={styles.time}>{formattedTime}</Text>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
  },
});

export default TimeDisplay;
