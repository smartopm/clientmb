import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Icon,
  Button,
} from '@ui-kitten/components';
import { IonIconsPack } from './icons';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => (
  <Layout style={styles.container}>
    <Layout style={styles.layout} level="2">
      <Text>2</Text>
    </Layout>
    <Layout style={styles.layout} level="1">
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </Layout>
  </Layout>
);

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <IconRegistry icons={[IonIconsPack]} />
      {/* <StatusBar /> */}
      <ApplicationProvider {...eva} theme={eva.light}>
        <TabNavigator />
      </ApplicationProvider>
    </NavigationContainer>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  layout: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 200,
    height: 200,
    margin: 20,
  },
});
