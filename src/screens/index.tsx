import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import GuestListScreen from './guests';
import MessageListScreen from './messages';
import AccountMenuList from './account';
import { EmailIcon, HomeIcon, PersonIcon } from '../icons';

const TabsStack = createBottomTabNavigator();

export const BottomNavigationScreen = ({ navigation, state }) => {
  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Home" icon={HomeIcon} />
      <BottomNavigationTab title="Messages" icon={EmailIcon} />
      <BottomNavigationTab title="Account" icon={PersonIcon} />
    </BottomNavigation>
  );
};

export default function TabNavigator() {
  return (
    <TabsStack.Navigator
      tabBar={(props) => <BottomNavigationScreen {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <TabsStack.Screen
        name="Home"
        component={GuestListScreen}
        options={{ title: 'Home' }}
      />
      <TabsStack.Screen name="Messages" component={MessageListScreen} />
      <TabsStack.Screen name="Account" component={AccountMenuList} />
    </TabsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
