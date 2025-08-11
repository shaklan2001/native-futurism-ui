import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

export interface CheckboxProps {
  checked: boolean;
  onChange: (next: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <Pressable onPress={() => onChange(!checked)}>
      <View style={[styles.box, checked && styles.boxChecked]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#111827',
    borderRadius: 6,
  },
  boxChecked: {
    backgroundColor: '#111827',
  },
});