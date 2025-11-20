import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TextInput } from 'react-native';

export default function BottomTabs({ activeScreen, setActiveScreen }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.geoButton} onPress={() => setActiveScreen('currently')}>
                <Ionicons name="settings" size={24} color={activeScreen === 'currently' ? "#0077ff" : "#add8e6"}  />
                <Text style={styles.Text}>Currently</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.geoButton} onPress={() => setActiveScreen('today')}>
                <FontAwesome5 name="calendar-day" size={24} color={activeScreen === 'today' ? "#0077ff" : "#add8e6"}  />
                <Text style={styles.Text}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.geoButton} onPress={() => setActiveScreen('weekly')}>
                <Ionicons name="calendar" size={24} color={activeScreen === 'weekly' ? "#0077ff" : "#add8e6"}  />
                <Text style={styles.Text}>Weekly</Text>
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
  geoButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    paddingTop: 7,
  },
});