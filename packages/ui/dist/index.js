'use strict';

var React = require('react');
var reactNative = require('react-native');
var Animated = require('react-native-reanimated');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var Animated__default = /*#__PURE__*/_interopDefault(Animated);

// src/components/AnimatedButton.tsx
var AnimatedButton = ({ title, onPress }) => {
  const scale = Animated.useSharedValue(1);
  const animatedStyle = Animated.useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));
  return /* @__PURE__ */ React__default.default.createElement(
    reactNative.Pressable,
    {
      onPressIn: () => scale.value = Animated.withSpring(0.96),
      onPressOut: () => scale.value = Animated.withSpring(1),
      onPress
    },
    /* @__PURE__ */ React__default.default.createElement(Animated__default.default.View, { style: [styles.button, animatedStyle] }, /* @__PURE__ */ React__default.default.createElement(reactNative.Text, { style: styles.text }, title))
  );
};
var styles = reactNative.StyleSheet.create({
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
var Button = ({ title, onPress, style, ...rest }) => {
  const composedStyle = (state) => {
    const userStyle = typeof style === "function" ? style(state) : style;
    return [styles2.button, userStyle];
  };
  return /* @__PURE__ */ React__default.default.createElement(reactNative.Pressable, { onPress, style: composedStyle, ...rest }, /* @__PURE__ */ React__default.default.createElement(reactNative.Text, { style: styles2.text }, title));
};
var styles2 = reactNative.StyleSheet.create({
  button: {
    backgroundColor: "#111827",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "600"
  }
});
var UiText = ({ variant = "body", style, children, ...rest }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.Text, { style: [styles3[variant], style], ...rest }, children);
};
var styles3 = reactNative.StyleSheet.create({
  title: { fontSize: 24, fontWeight: "700" },
  subtitle: { fontSize: 18, fontWeight: "600", color: "#374151" },
  body: { fontSize: 16, color: "#111827" },
  caption: { fontSize: 12, color: "#6B7280" }
});
var Input = ({ style, ...rest }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: styles4.container }, /* @__PURE__ */ React__default.default.createElement(
    reactNative.TextInput,
    {
      placeholderTextColor: "#9CA3AF",
      style: [styles4.input, style],
      ...rest
    }
  ));
};
var styles4 = reactNative.StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 12
  },
  input: {
    height: 44,
    fontSize: 16
  }
});
var Card = ({ style, children, ...rest }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: [styles5.card, style], ...rest }, children);
};
var styles5 = reactNative.StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2
  }
});
var Badge = ({ label, color = "#111827", backgroundColor = "#E5E7EB", style, ...rest }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: [styles6.badge, { backgroundColor }, style], ...rest }, /* @__PURE__ */ React__default.default.createElement(reactNative.Text, { style: [styles6.text, { color }] }, label));
};
var styles6 = reactNative.StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    alignSelf: "flex-start"
  },
  text: {
    fontSize: 12,
    fontWeight: "600"
  }
});
var Avatar = ({ label, size = 48, style, ...rest }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: [styles7.container, { width: size, height: size, borderRadius: size / 2 }, style], ...rest }, /* @__PURE__ */ React__default.default.createElement(reactNative.Text, { style: styles7.label }, label));
};
var styles7 = reactNative.StyleSheet.create({
  container: {
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontWeight: "700",
    color: "#111827"
  }
});
var UiSwitch = (props) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.Switch, { ...props });
};
var Checkbox = ({ checked, onChange }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.Pressable, { onPress: () => onChange(!checked) }, /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: [styles8.box, checked && styles8.boxChecked] }));
};
var styles8 = reactNative.StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#111827",
    borderRadius: 6
  },
  boxChecked: {
    backgroundColor: "#111827"
  }
});
var UiModal = ({ children, ...rest }) => {
  return /* @__PURE__ */ React__default.default.createElement(reactNative.Modal, { transparent: true, animationType: "slide", ...rest }, /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: styles9.backdrop }, /* @__PURE__ */ React__default.default.createElement(reactNative.View, { style: styles9.content }, children)));
};
var styles9 = reactNative.StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 12,
    minWidth: "80%",
    overflow: "hidden"
  }
});

exports.AnimatedButton = AnimatedButton;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Input = Input;
exports.UiModal = UiModal;
exports.UiSwitch = UiSwitch;
exports.UiText = UiText;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map