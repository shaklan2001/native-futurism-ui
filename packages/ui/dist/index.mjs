export { Avatar, Badge, Button, Card, Checkbox, Input, UiModal, UiSwitch, UiText } from './chunk-RQLCCMCK.mjs';
import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

var AnimatedButton = ({ title, onPress }) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));
  return /* @__PURE__ */ React.createElement(
    Pressable,
    {
      onPressIn: () => scale.value = withSpring(0.96),
      onPressOut: () => scale.value = withSpring(1),
      onPress
    },
    /* @__PURE__ */ React.createElement(Animated.View, { style: [styles.button, animatedStyle] }, /* @__PURE__ */ React.createElement(Text, { style: styles.text }, title))
  );
};
var styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

export { AnimatedButton };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map