import React from 'react';
import { Switch, SwitchProps } from 'react-native';

export type UiSwitchProps = SwitchProps;

export const UiSwitch: React.FC<UiSwitchProps> = (props) => {
  return <Switch {...props} />;
};