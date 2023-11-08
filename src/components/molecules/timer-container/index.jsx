import React from 'react';
import { View, StyleSheet } from 'react-native';

const TimerContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
  },
});

export default TimerContainer;
