import { useState } from 'react';
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

export default function App() {
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [geoLocation, setGeoLocation] = useState(null);
  const [errorgeoLocation, setErrorGeoLocation] = useState(null);

  const routes = [
    { key: 'currently', title: 'Currently' },
    { key: 'today', title: 'Today' },
    { key: 'weekly', title: 'Weekly' }
  ];

  const renderScene = SceneMap({
    currently: () => <CurrentlyScreen errorgeoLocation={errorgeoLocation} searchText={searchText} latitude={geoLocation?.latitude || null} longitude={geoLocation?.longitude || null} />,
    today: () => <TodayScreen errorgeoLocation={errorgeoLocation} searchText={searchText} latitude={geoLocation?.latitude || null} longitude={geoLocation?.longitude || null}  />,
    weekly: () => <WeeklyScreen errorgeoLocation={errorgeoLocation} searchText={searchText} latitude={geoLocation?.latitude || null} longitude={geoLocation?.longitude || null}  />,
  });

    const handleGeoPress = () => {
    setSearchText('');
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



  return (
    <View style={{ flex: 1 }}>
      <AppBarHeader searchText={searchText} setSearchText={setSearchText} onGeoPress={handleGeoPress} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={() => null}
      />

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
});