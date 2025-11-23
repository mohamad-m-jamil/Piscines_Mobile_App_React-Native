import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, StatusBar, Platform, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function BottomTabs({ activeScreen, setActiveScreen }) {
    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === 'web';
    const isLargeScreen = isWeb && width > 1000;
    return (
        <View style={[styles.container, isLargeScreen && styles.containerWeb]}>
            <TouchableOpacity style={[styles.geoButton, isLargeScreen && styles.geoButtonweb]} onPress={() => setActiveScreen('currently')}>
                <Ionicons name="settings" size={isLargeScreen ? 200 : 24} color={activeScreen === 'currently' ? "#0077ff" : "#add8e6"}  />
                <Text style={[styles.Text, isLargeScreen && styles.TextWeb]}>Currently</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.geoButton, isLargeScreen && styles.geoButtonweb]} onPress={() => setActiveScreen('today')}>
                <FontAwesome5 name="calendar-day" size={isLargeScreen ? 200 : 24} color={activeScreen === 'today' ? "#0077ff" : "#add8e6"}  />
                <Text style={[styles.Text, isLargeScreen && styles.TextWeb]}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.geoButton, isLargeScreen && styles.geoButtonweb]} onPress={() => setActiveScreen('weekly')}>
                <Ionicons name="calendar" size={isLargeScreen ? 200 : 24} color={activeScreen === 'weekly' ? "#0077ff" : "#add8e6"}  />
                <Text style={[styles.Text, isLargeScreen && styles.TextWeb]}>Weekly</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5fffa',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containerWeb: {
    paddingVertical: 150,
  },
  geoButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  geoButtonweb: {
    paddingHorizontal: 200,
  },
  Text: {
    paddingTop: 7,
  },
  TextWeb: {
    fontSize: 70,
  },
});