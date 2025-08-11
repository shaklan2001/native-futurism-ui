import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

export interface BadgeProps extends ViewProps {
  label: string;
  color?: string;
  backgroundColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, color = '#111827', backgroundColor = '#E5E7EB', style, ...rest }) => {
  return (
    <View style={[styles.badge, { backgroundColor }, style]} {...rest}>
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});