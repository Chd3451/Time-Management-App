import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderOptionsButtons from '../../molecules/header-options-buttons';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handleOptionPress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View>
      <Text style={styles.text}>Pomodoro</Text>
      <HeaderOptionsButtons
        options={options}
        selectedOption={currentTime}
        onOptionPress={handleOptionPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
