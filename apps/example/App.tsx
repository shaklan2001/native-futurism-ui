import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { AnimatedButton, Button, UiText, Input, Card, Badge, Avatar, UiSwitch, Checkbox, UiModal } from '@native-futurism/ui';

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <UiText variant="title">Native Futurism UI</UiText>
        <Card>
          <UiText>Welcome to the demo app.</UiText>
          <AnimatedButton title="Press me" onPress={() => {}} />
          <Button title="Open Modal" onPress={() => setOpen(true)} />
          <Input placeholder="Type here" />
          <Badge label="New" />
          <Avatar label="NS" />
          <UiSwitch value={checked} onValueChange={setChecked} />
          <Checkbox checked={checked} onChange={setChecked} />
        </Card>
        <UiModal visible={open} onRequestClose={() => setOpen(false)}>
          <View style={{ padding: 16 }}>
            <UiText>This is a modal from the UI library.</UiText>
            <Button title="Close" onPress={() => setOpen(false)} />
          </View>
        </UiModal>
      </ScrollView>
    </SafeAreaView>
  );
}