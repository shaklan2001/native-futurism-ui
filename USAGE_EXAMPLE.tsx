// Example usage in a React Native project
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
    AnimatedButton,
    Button,
    UiText,
    Input,
    Card,
    Badge,
    Avatar,
    UiSwitch,
    Checkbox,
    UiModal
} from '@native-futurism/ui';

export default function ExampleApp() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            {/* Text Components */}
            <Card>
                <UiText variant="title">Welcome to Native Futurism UI</UiText>
                <UiText variant="subtitle">A complete UI library</UiText>
                <UiText variant="body">This shows all components working together</UiText>
            </Card>

            {/* Buttons */}
            <Card>
                <UiText variant="subtitle">Buttons</UiText>
                <Button
                    title="Regular Button"
                    onPress={() => console.log('Button pressed')}
                />
                <AnimatedButton
                    title="Animated Button"
                    onPress={() => console.log('Animated button pressed')}
                />
            </Card>

            {/* Input and Controls */}
            <Card>
                <UiText variant="subtitle">Input & Controls</UiText>
                <Input
                    placeholder="Enter text here..."
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <UiSwitch
                        value={switchValue}
                        onValueChange={setSwitchValue}
                    />
                    <UiText style={{ marginLeft: 10 }}>Toggle Switch</UiText>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Checkbox
                        checked={checkboxValue}
                        onPress={() => setCheckboxValue(!checkboxValue)}
                    />
                    <UiText style={{ marginLeft: 10 }}>Checkbox</UiText>
                </View>
            </Card>

            {/* Avatar and Badge */}
            <Card>
                <UiText variant="subtitle">Avatar & Badge</UiText>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar
                        source={{ uri: 'https://via.placeholder.com/100' }}
                        size={60}
                    />
                    <Badge
                        text="New"
                        color="red"
                        style={{ marginLeft: 20 }}
                    />
                </View>
            </Card>

            {/* Modal */}
            <Card>
                <UiText variant="subtitle">Modal</UiText>
                <Button
                    title="Show Modal"
                    onPress={() => setModalVisible(true)}
                />
                <UiModal
                    visible={isModalVisible}
                    onClose={() => setModalVisible(false)}
                >
                    <Card>
                        <UiText variant="title">Modal Content</UiText>
                        <UiText>This is inside a modal!</UiText>
                        <Button
                            title="Close"
                            onPress={() => setModalVisible(false)}
                        />
                    </Card>
                </UiModal>
            </Card>
        </ScrollView>
    );
}
