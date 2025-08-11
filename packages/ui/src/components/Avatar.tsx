import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

export interface AvatarProps extends ViewProps {
  label: string; // initials
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ label, size = 48, style, ...rest }) => {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: '700',
    color: '#111827',
  },
});