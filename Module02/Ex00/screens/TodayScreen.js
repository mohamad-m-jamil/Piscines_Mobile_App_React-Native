import { StyleSheet, Text, View, TouchableOpacity, Button, StatusBar, Platform, useWindowDimensions } from 'react-native';

export default function TodayScreen({errorgeoLocation, searchText, latitude, longitude}) {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = isWeb && width > 1000;
  return (
    <View style={[styles.container, isLargeScreen && styles.containerWeb]}>
      <Text style={[styles.text, isLargeScreen && styles.textweb]}>
        {errorgeoLocation
        ? (<Text style={[styles.errorText, isLargeScreen && styles.errorTextWeb]}>{errorgeoLocation}</Text>)
        : "Today"}</Text>
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
  },
  textweb: {
    fontSize: 200,
  },
});