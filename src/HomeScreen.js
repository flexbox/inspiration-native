import * as React from 'react';
import { View } from 'react-native';
import { Layout, Text, Button, List } from 'react-native-ui-kitten';
import { Quote } from './components/Quote.js';
import styled from 'styled-components/native';

import data from './data.json';

export const HomeScreen = props => {
  const renderItem = ({ item }) => (
    <Quote title={item.title} author={item.author} />
  );

  return (
    <Layout>
      <Container>
        <Text category="h4">Inspiration</Text>
        <Button onPress={props.toggleTheme}>Switch theme</Button>
      </Container>
      <List data={data} renderItem={renderItem} />
    </Layout>
  );
};

const Container = styled(View)`
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
