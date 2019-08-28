import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import { HomeScreen } from './HomeScreen';

const themes = { light, dark };

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <Layout style={{ flex: 1 }}>
        <SafeAreaView>
          <HomeScreen toggleTheme={toggleTheme} />
        </SafeAreaView>
      </Layout>
    </ApplicationProvider>
  );
};

export default App;
