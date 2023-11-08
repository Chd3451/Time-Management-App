import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OptionButtonsGroup from '../../../../src/components/molecules/OptionButtonsGroup';

export default function Header() {
  const [selectedOption, setSelectedOption] = useState('Pomodoro');

  const options = [
    { label: 'Pomodoro' },
    { label: 'Short Break' },
    { label: 'Long Break' },
  ];

  return (
    <View style={styles.header}>
      <OptionButtonsGroup
        options={options}
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
  },
  headerText: {
    fontWeight: 'bold',
  },
});
