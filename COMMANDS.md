# Native Futurism UI - Command Reference

## 🏃‍♂️ Development Commands

### Start Everything
```bash
pnpm run dev                    # Start all apps in development mode
```

### Individual Apps
```bash
pnpm run dev --filter=docs      # Documentation website (localhost:3000)
pnpm run dev --filter=example   # React Native example app (Expo)
pnpm run dev --filter=@native-futurism/ui  # Watch mode for UI library
```

### Build Commands
```bash
pnpm run build                  # Build everything
pnpm run build --filter=@native-futurism/ui  # Build just the UI library
pnpm run build --filter=docs    # Build documentation site
```

### Other Commands
```bash
pnpm run clean                  # Clean all build outputs
pnpm run lint                   # Lint all packages
```

## 📦 Package Structure

```
native-futurism-ui/
├── apps/
│   ├── docs/          # Next.js documentation website
│   └── example/       # React Native Expo example app
├── packages/
│   └── ui/           # Main UI library package
└── package.json      # Monorepo root
```

## 🎯 Available Components

1. **AnimatedButton** - Button with animations
2. **Button** - Standard button component
3. **UiText** - Text with variants (title, subtitle, body)
4. **Input** - Text input field
5. **Card** - Container with styling
6. **Badge** - Small label/indicator
7. **Avatar** - Profile picture component
8. **UiSwitch** - Toggle switch
9. **Checkbox** - Checkbox input
10. **UiModal** - Modal overlay

## 🚀 Usage in Other Projects

### Install from local development:
```bash
pnpm add file:../path/to/native-futurism-ui/packages/ui
```

### Install from npm (after publishing):
```bash
pnpm add @native-futurism/ui react react-native react-native-reanimated
```

### Import and use:
```tsx
import { Button, Card, UiText } from '@native-futurism/ui';

export default function MyApp() {
  return (
    <Card>
      <UiText variant="title">Hello World</UiText>
      <Button title="Press me" onPress={() => console.log('Pressed!')} />
    </Card>
  );
}
```
