import React from 'react';
import { Modal, ModalProps, View, StyleSheet } from 'react-native';

export interface UiModalProps extends ModalProps {}

export const UiModal: React.FC<UiModalProps> = ({ children, ...rest }) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.backdrop}>
        <View style={styles.content}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 12,
    minWidth: '80%',
    overflow: 'hidden',
  },
});