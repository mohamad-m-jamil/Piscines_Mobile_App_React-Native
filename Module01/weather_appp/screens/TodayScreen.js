import { View, Text, StyleSheet } from 'react-native';

export default function TodayScreen({ searchText, geoLocation }) {
  const displayText = searchText || geoLocation || '';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today</Text>
      <Text style={styles.text}>{displayText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Bold',
  },
});
