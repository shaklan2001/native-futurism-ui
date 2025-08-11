import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1>Native Futurism UI</h1>
      <p>A lightweight React Native UI library with 10 basic components.</p>

      <h2>Install</h2>
      <pre>
        <code>pnpm add @native-futurism/ui react react-native react-native-reanimated</code>
      </pre>

      <h2>Usage</h2>
      <pre>
        <code>{`import { Button, Card, UiText } from '@native-futurism/ui';

export default function Example() {
  return (
    <Card>
      <UiText variant="title">Hello</UiText>
      <Button title="Press" onPress={() => {}} />
    </Card>
  );
}`}</code>
      </pre>

      <h2>Components</h2>
      <ul>
        <li>AnimatedButton</li>
        <li>Button</li>
        <li>UiText</li>
        <li>Input</li>
        <li>Card</li>
        <li>Badge</li>
        <li>Avatar</li>
        <li>UiSwitch</li>
        <li>Checkbox</li>
        <li>UiModal</li>
      </ul>
    </main>
  );
}