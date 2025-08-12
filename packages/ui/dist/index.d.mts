import React from 'react';
export { Avatar, Badge, Button, Card, Checkbox, Input, UiModal, UiSwitch, UiText } from './safe.mjs';
import 'react-native';

interface AnimatedButtonProps {
    title: string;
    onPress: () => void;
}
declare const AnimatedButton: React.FC<AnimatedButtonProps>;

export { AnimatedButton };
