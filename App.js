import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import { HomeScreen } from './src/HomeScreen';

let uri = '';
if (process.env.NODE_ENV === 'development') {
  if (Platform.OS === 'web') {
    uri = 'http://192.168.0.10:19006/graphql';
  } else if (Platform.OS === 'android') {
    // Here is why: https://stackoverflow.com/questions/9808560/why-do-we-use-10-0-2-2-to-connect-to-local-web-server-instead-of-using-computer
    uri = 'http://10.0.2.2:9000/graphql';
  } else {
    uri = 'http://localhost:9000/graphql';
  }
} else {
  uri =
    'https://inspiration-native-staging.netlify.com/.netlify/functions/graphql';
}

const apolloClient = new ApolloClient({
  uri
});

const themes = { light, dark };

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ApplicationProvider mapping={mapping} theme={themes[theme]}>
        <Layout style={{ flex: 1 }}>
          <SafeAreaView>
            <HomeScreen theme={theme} toggleTheme={toggleTheme} />
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    </ApolloProvider>
  );
};

export default App;
