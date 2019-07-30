import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { HomeScreen } from './HomeScreen';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Layout>
  </ApplicationProvider>
);

export default App;
