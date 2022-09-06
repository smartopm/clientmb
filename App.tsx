import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Button, Icon
} from '@ui-kitten/components';
import { IonIconsPack } from './icons';

export const HomeIcon = (props) => (
  <Icon {...props} name='home' />
);

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button accessoryLeft={HomeIcon}>Home</Button>
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={[IonIconsPack]} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);
