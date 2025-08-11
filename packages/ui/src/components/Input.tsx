import React from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';

export type InputProps = TextInputProps;

export const Input: React.FC<InputProps> = ({ style, ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#9CA3AF"
        style={[styles.input, style]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    height: 44,
    fontSize: 16,
  },
});