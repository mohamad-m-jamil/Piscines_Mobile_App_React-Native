import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AppBarHeader from './components/AppBarHeader'
import BottomTabs from './components/BottomTabs';
import CurrentlyScreen from './screens/CurrentlyScreen';
import TodayScreen from './screens/TodayScreen';
import WeeklyScreen from './screens/WeeklyScreen';

export default function App() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'currently', title: 'Currently' },
    { key: 'today', title: 'Today' },
    { key: 'weekly', title: 'Weekly' }
  ];

  const renderScene = SceneMap({
    currently: CurrentlyScreen,
    today: TodayScreen,
    weekly: WeeklyScreen,
  });

  return (
    <View style={{ flex: 1 }}>
      {/* <AppBarHeader /> */}

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