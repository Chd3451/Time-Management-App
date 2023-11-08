import React from 'react';
import { View, StyleSheet} from 'react-native';
import OptionButton from '../../../../src/components/atoms/OptionButton';

export default function OptionButtonsGroup({ options, selectedOption, onSelectOption }) {
  return (
    <View style={styles.buttongroup}>
      {options.map((option) => (
        <OptionButton
          key={option.label}
          label={option.label}
          isSelected={selectedOption === option.label}
          onPress={() => onSelectOption(option.label)}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  buttongroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
