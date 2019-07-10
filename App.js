import * as React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { HomeScreen } from './HomeScreen';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Layout style={{ flex: 1 }}>
      <HomeScreen />
    </Layout>
  </ApplicationProvider>
);

export default App;
