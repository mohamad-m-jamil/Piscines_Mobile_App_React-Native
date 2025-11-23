import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, StatusBar, Platform, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function AppBarHeader({ searchText, setSearchText, onGeoPress }) {
    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === 'web';
    const isLargeScreen = isWeb && width > 1000;

    return (
        <View style={[styles.container, isLargeScreen && styles.containerWeb]}>
            <View style={[styles.contentWrapper, isLargeScreen && styles.contentWrapperWeb]}>
                <View style={[styles.searchpart, isLargeScreen && styles.searchpartWeb]}>
                  <TouchableOpacity style={[styles.searchicon, isLargeScreen && styles.searchiconweb]}>
                    <Ionicons name="search" size={isLargeScreen ? 200 : 24} />
                  </TouchableOpacity>
                  <TextInput
                      style={[styles.input, isLargeScreen && styles.inputWeb]}
                      placeholder="Search city..."
                      value={searchText}
                      onChangeText={setSearchText}
                  />
                </View>
                <TouchableOpacity style={[styles.geoButton, isLargeScreen && styles.geoButtonWeb]} onPress={onGeoPress}>
                    <Ionicons name="location-outline" size={isLargeScreen ? 200 : 24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerWeb: {
    paddingVertical: 25,
    width: '100%',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  contentWrapperWeb: {
    maxWidth: '100%',
    width: '100%',
  },
  input: {
    flex: 1,
    marginRight: '5%',
    padding: 10,
    borderWidth: 0,
    outlineStyle: 'none',
    fontSize: 16,
  },
  inputWeb: {
    padding: 15,
    fontSize: 100,
  },
  geoButton: {
    padding: 5,
  },
  geoButtonWeb: {
    padding: 10,
    paddingRight: 0,
  },
  searchicon: {
    margin: 4,
    padding: 5,
  },
  searchiconweb: {
    margin: 8,
    padding: 10,
  },
  searchpart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchpartWeb: {
  },
});