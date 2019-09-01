import * as React from 'react';
import { View } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Layout, Text, Button, List } from 'react-native-ui-kitten';
import { Quote } from './components/Quote';
import Loader from './components/Loader';
import styled from 'styled-components/native';

export const HomeScreen = props => {
  const {
    loading,
    error,
    data: { quotes }
  } = useQuery(gql`
    {
      quotes {
        id
        title
        author
        twitterName
      }
    }
  `);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Text>Error 😢</Text>;
  }

  const renderItem = ({ item }) => (
    <Quote title={item.title} author={item.author} />
  );

  return (
    <Layout>
      <Container>
        <Text category="h4">Inspiration</Text>
        <Button onPress={props.toggleTheme}>Switch theme</Button>
      </Container>
      <List data={quotes} renderItem={renderItem} />
    </Layout>
  );
};

const Container = styled(View)`
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
