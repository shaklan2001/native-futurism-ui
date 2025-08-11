import React from 'react';
import { PressableProps, TextProps, TextInputProps, ViewProps, SwitchProps, ModalProps } from 'react-native';

interface AnimatedButtonProps {
    title: string;
    onPress: () => void;
}
declare const AnimatedButton: React.FC<AnimatedButtonProps>;

interface ButtonProps extends Omit<PressableProps, 'onPress'> {
    title: string;
    onPress: () => void;
}
declare const Button: React.FC<ButtonProps>;

interface UiTextProps extends TextProps {
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
}
declare const UiText: React.FC<UiTextProps>;

type InputProps = TextInputProps;
declare const Input: React.FC<InputProps>;

interface CardProps extends ViewProps {
}
declare const Card: React.FC<CardProps>;

interface BadgeProps extends ViewProps {
    label: string;
    color?: string;
    backgroundColor?: string;
}
declare const Badge: React.FC<BadgeProps>;

interface AvatarProps extends ViewProps {
    label: string;
    size?: number;
}
declare const Avatar: React.FC<AvatarProps>;

type UiSwitchProps = SwitchProps;
declare const UiSwitch: React.FC<UiSwitchProps>;

interface CheckboxProps {
    checked: boolean;
    onChange: (next: boolean) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;

interface UiModalProps extends ModalProps {
}
declare const UiModal: React.FC<UiModalProps>;

export { AnimatedButton, Avatar, Badge, Button, Card, Checkbox, Input, UiModal, UiSwitch, UiText };
