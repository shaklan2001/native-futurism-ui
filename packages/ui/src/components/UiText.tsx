import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

export interface UiTextProps extends RNTextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
}

export const UiText: React.FC<UiTextProps> = ({ variant = 'body', style, children, ...rest }) => {
  return (
    <RNText style={[styles[variant], style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#374151' },
  body: { fontSize: 16, color: '#111827' },
  caption: { fontSize: 12, color: '#6B7280' },
});