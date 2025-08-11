import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'onPress'> {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style, ...rest }) => {
  const composedStyle = (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const userStyle = typeof style === 'function' ? style(state) : style;
    return [styles.button, userStyle];
  };

  return (
    <Pressable onPress={onPress} style={composedStyle} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#111827',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});