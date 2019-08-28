import * as React from 'react';
import { Layout, Text, Button } from 'react-native-ui-kitten';

export const HomeScreen = props => (
  <Layout>
    <Text category="h4">Inspiration</Text>
    <Button>BUTTON</Button>
    <Button onPress={props.toggleTheme}>Switch theme</Button>
  </Layout>
);
