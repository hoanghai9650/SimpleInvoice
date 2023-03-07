import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

export default function SortButton({
  title = '',
  onPress = () => {},
  isSelected = false,
  isLoading = false,
}) {
  return (
    <TouchableOpacity
      style={styles.container(isSelected)}
      onPress={onPress}
      disabled={isLoading}>
      <View style={styles.btnContent}>
        {isLoading ? <ActivityIndicator /> : <Text>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: isSelected => ({
    height: 42,
    padding: 12,
    borderWidth: 1,
    borderColor: '#4DD0E1',
    borderRadius: 10,
    marginTop: 12,
    marginRight: 8,
    backgroundColor: isSelected ? '#4DD0E1' : 'transparent',
    justifyContent: 'center',
  }),
  btnContent: {
    alignItems: 'center',
  },
});
