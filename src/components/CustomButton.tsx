import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface CustomButtonProps {
  title: string;

  onPress: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}) => {
  const getBackgroundColor = () => {
    if (disabled) return '#cbd5e1';

    switch (variant) {
      case 'secondary':
        return '#ffffff';
      case 'danger':
        return '#ff5a6f';
      default:
        return '#4753ff';
    }
  };

  const getTextColor = () => {
    if (disabled) return '#7b8794';
    return variant === 'secondary' ? '#4753ff' : '#ffffff';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: variant === 'secondary' ? '#4753ff' : 'transparent',
          borderWidth: variant === 'secondary' ? 1.5 : 0,
        },
      ]}
    >
      <Text style={[styles.text, { color: getTextColor() }]}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#0f172a',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },

  text: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});

export default CustomButton;
