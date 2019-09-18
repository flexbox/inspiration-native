import * as React from 'react';
import { SafeAreaView } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import { HomeScreen } from './src/HomeScreen';

const apolloClient = new ApolloClient({
  uri: 'https://eu1.prisma.sh/flexbox/inspiration/dev'
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
            <HomeScreen toggleTheme={toggleTheme} />
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    </ApolloProvider>
  );
};

export default App;
