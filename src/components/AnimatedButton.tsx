import { Pressable, Text, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ title, onPress }: AnimatedButtonProps) => {
  const scale = useSharedValue(1);

  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.9))}
      onPressOut={() => (scale.value = withSpring(1))}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default AnimatedButton;
