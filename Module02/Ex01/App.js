import { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  StatusBar,
  PermissionsAndroid,
  Alert
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AppBarHeader from './components/AppBarHeader'
import BottomTabs from './components/BottomTabs';
import CurrentlyScreen from './screens/CurrentlyScreen';
import TodayScreen from './screens/TodayScreen';
import WeeklyScreen from './screens/WeeklyScreen';
import { Platform, useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native';


export default function App() {
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [geoLocation, setGeoLocation] = useState(null);
  const [errorgeoLocation, setErrorGeoLocation] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [fullInputText, setFullInputText] = useState(null);
  
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = isWeb && width > 1000;
  const routes = [
    { key: 'currently', title: 'Currently' },
    { key: 'today', title: 'Today' },
    { key: 'weekly', title: 'Weekly' }
  ];

  useEffect(() => {
  const timer = setTimeout(() => {

      if (searchText.trim().length < 3) {
        setSuggestions([]);
        return;
      }

      fetchCityWeather(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const fetchCityWeather = async (city) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const data = await response.json();
      setSuggestions(data.results || []);
    } catch (err) {
      console.log(err);
    }
  };

  const renderScene = SceneMap({
    currently: () => <CurrentlyScreen fullInputText={fullInputText} errorgeoLocation={errorgeoLocation} searchText={searchText} latitude={geoLocation?.latitude || null} longitude={geoLocation?.longitude || null} />,
    today: () => <TodayScreen fullInputText={fullInputText} errorgeoLocation={errorgeoLocation} searchText={searchText} latitude={geoLocation?.latitude || null} longitude={geoLocation?.longitude || null}  />,
    weekly: () => <WeeklyScreen fullInputText={fullInputText} errorgeoLocation={errorgeoLocation} searchText={searchText} latitude={geoLocation?.latitude || null} longitude={geoLocation?.longitude || null}  />,
  });

    const handleGeoPress = () => {
    setSearchText('');
    setFullInputText(null);
    setErrorGeoLocation(null);
    setGeoLocation(null);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setGeoLocation({ latitude, longitude });

        },
        (error) => {
          console.log(error);
          setErrorGeoLocation("Geolocation is not available, please enable it in your App settings");
        }
      );
    };

    const handleSelectCity = (city) => {
      setErrorGeoLocation(null);
      setSearchText(city.name);
      setSuggestions([]);
      setGeoLocation({
        latitude: city.latitude,
        longitude: city.longitude,
      });
      setFullInputText(`${city.name}, ${city.admin1 || ""}, ${city.country}`);
      setSearchText(`${city.name}, ${city.admin1 || ""}, ${city.country}`);
    };


  return (
    <View style={{ flex: 1 }}>
      <AppBarHeader suggestions={suggestions} searchText={searchText} setSearchText={setSearchText} onGeoPress={handleGeoPress} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={() => null}
      />

      {suggestions.length > 0 && (
        <View style={[styles.dropdown, isLargeScreen && styles.dropdownWeb]}>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={[styles.dropdownItem, isLargeScreen && styles.dropdownItemWeb]}
                onPress={() => handleSelectCity(item)}
              >
                <Text>{item.name} {item.admin1} {item.country}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <BottomTabs activeScreen={routes[index].key} setActiveScreen={(key) => {
        const newIndex = routes.findIndex(r => r.key === key);
        setIndex(newIndex);
      }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    backgroundColor: 'white',
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    zIndex: 999,
    elevation: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    maxHeight: 300,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});