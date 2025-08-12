import React9 from 'react';
import { StyleSheet, Pressable, Text, View, TextInput, Switch, Modal } from 'react-native';

// src/components/Button.tsx
var Button = ({ title, onPress, style, ...rest }) => {
  const composedStyle = (state) => {
    const userStyle = typeof style === "function" ? style(state) : style;
    return [styles.button, userStyle];
  };
  return /* @__PURE__ */ React9.createElement(Pressable, { onPress, style: composedStyle, ...rest }, /* @__PURE__ */ React9.createElement(Text, { style: styles.text }, title));
};
var styles = StyleSheet.create({
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
  return /* @__PURE__ */ React9.createElement(Text, { style: [styles2[variant], style], ...rest }, children);
};
var styles2 = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "700" },
  subtitle: { fontSize: 18, fontWeight: "600", color: "#374151" },
  body: { fontSize: 16, color: "#111827" },
  caption: { fontSize: 12, color: "#6B7280" }
});
var Input = ({ style, ...rest }) => {
  return /* @__PURE__ */ React9.createElement(View, { style: styles3.container }, /* @__PURE__ */ React9.createElement(
    TextInput,
    {
      placeholderTextColor: "#9CA3AF",
      style: [styles3.input, style],
      ...rest
    }
  ));
};
var styles3 = StyleSheet.create({
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
  return /* @__PURE__ */ React9.createElement(View, { style: [styles4.card, style], ...rest }, children);
};
var styles4 = StyleSheet.create({
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
  return /* @__PURE__ */ React9.createElement(View, { style: [styles5.badge, { backgroundColor }, style], ...rest }, /* @__PURE__ */ React9.createElement(Text, { style: [styles5.text, { color }] }, label));
};
var styles5 = StyleSheet.create({
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
  return /* @__PURE__ */ React9.createElement(View, { style: [styles6.container, { width: size, height: size, borderRadius: size / 2 }, style], ...rest }, /* @__PURE__ */ React9.createElement(Text, { style: styles6.label }, label));
};
var styles6 = StyleSheet.create({
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
  return /* @__PURE__ */ React9.createElement(Switch, { ...props });
};
var Checkbox = ({ checked, onChange }) => {
  return /* @__PURE__ */ React9.createElement(Pressable, { onPress: () => onChange(!checked) }, /* @__PURE__ */ React9.createElement(View, { style: [styles7.box, checked && styles7.boxChecked] }));
};
var styles7 = StyleSheet.create({
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
  return /* @__PURE__ */ React9.createElement(Modal, { transparent: true, animationType: "slide", ...rest }, /* @__PURE__ */ React9.createElement(View, { style: styles8.backdrop }, /* @__PURE__ */ React9.createElement(View, { style: styles8.content }, children)));
};
var styles8 = StyleSheet.create({
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

export { Avatar, Badge, Button, Card, Checkbox, Input, UiModal, UiSwitch, UiText };
//# sourceMappingURL=chunk-RQLCCMCK.mjs.map
//# sourceMappingURL=chunk-RQLCCMCK.mjs.map