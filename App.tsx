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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export const HomeIcon = (props) => <Icon {...props} name="home" />;

const HomeScreen = ({ navigation }) => (
  <Layout style={styles.container}>
    <Layout style={styles.layout} level="2">
      <Text>2</Text>
    </Layout>
    <Layout style={styles.layout} level="1">
      <Button onPress={() => navigation.navigate('Details')}>Go to Details </Button>
    </Layout>
  </Layout>
);

export default () => (
  <NavigationContainer>
    <IconRegistry icons={[IonIconsPack]} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

      {/* <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <HomeScreen />
        <HomeScreen />
      </Layout> */}
    </ApplicationProvider>
  </NavigationContainer>
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
