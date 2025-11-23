import { StyleSheet, Text, View, TouchableOpacity, Button, StatusBar, Platform, useWindowDimensions } from 'react-native';

export default function CurrentlyScreen({errorgeoLocation, searchText, latitude, longitude }) {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = isWeb && width > 1000;
  return (
    <View style={[styles.container, isLargeScreen && styles.containerWeb]}>
      <Text style={[styles.text, isLargeScreen && styles.textweb]}>
        {errorgeoLocation
        ? (<Text style={[styles.errorText, isLargeScreen && styles.errorTextWeb]}>{errorgeoLocation}</Text>)
        : "Currently" }</Text>
      <Text style={[styles.text, isLargeScreen && styles.textweb]}>
        {latitude && longitude
        ? `Lat: ${latitude}\nLon: ${longitude}`
        : searchText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  containerWeb: {
    marginBottom: 200,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Bold',
    textAlign: 'center',
  },
  textweb: {
    fontSize: 200,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 20,
    paddingRight: 30,
  },
  errorTextWeb: {
    fontSize: 70
  },
});
