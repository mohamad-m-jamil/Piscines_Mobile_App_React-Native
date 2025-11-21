import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function AppBarHeader({ searchText, setSearchText, onGeoPress }) {
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.searchicon}>
                    <Ionicons name="search" size={24} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Search city..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity style={styles.geoButton} onPress={onGeoPress}>
                    <Ionicons name="location-outline" size={24} />
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    flexDirection: 'row',
    width:'100%',
    height: '6%',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  input: {
    flex: 1,
    marginRight: '20%',
    padding:10,
    borderWidth: 0,
    outlineStyle: 'none',
  },
  geoButton: {
    
  },
  searchicon: {
    margin: 4,
    padding: 5,
  },
});