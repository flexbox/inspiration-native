import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import {
  Layout,
  Text,
  Button,
  List,
  BottomNavigation,
  BottomNavigationTab
} from 'react-native-ui-kitten';
import { Quote } from './components/Quote';
import Loader from './components/Loader';
import Error from './components/Error';
import styled from 'styled-components/native';

export const HomeScreen = props => {
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState(gql`
    {
      quotes {
        id
        title
        author
        twitterName
      }
    }
  `);
  const { loading, error, data } = useQuery(query, {
    fetchPolicy: 'network-only'
  });

  const renderItem = ({ item }) => (
    <Quote title={item.title} author={item.author} />
  );

  useEffect(() => {
    switch (index) {
      case 0:
        setQuery(gql`
          {
            quotes {
              id
              title
              author
              twitterName
            }
          }
        `);
        break;
      case 1:
        setQuery(gql`
          {
            lastQuote {
              id
              title
              author
              twitterName
            }
          }
        `);
        break;
      case 2:
        setQuery(
          gql`
            {
              randomQuote {
                id
                title
                author
                twitterName
              }
            }
          `
        );
        break;
    }
  }, [index]);

  const getQuotes = () => {
    if (data.quotes) {
      return data.quotes;
    } else if (data.lastQuote) {
      return [data.lastQuote];
    } else if (data.randomQuote) {
      return [data.randomQuote];
    }
    return null;
  };

  const updateScreen = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Header>
        <Text category="h4">Inspiration</Text>
        <Button onPress={props.toggleTheme}>Switch theme</Button>
      </Header>
      {loading && <Loader />}
      {error && <Error />}
      {data && getQuotes() && (
        <List data={getQuotes()} renderItem={renderItem} />
      )}
      <StyledBottomNavigation selectedIndex={index} onSelect={updateScreen}>
        <BottomNavigationTab title="All" />
        <BottomNavigationTab title="Last" />
        <BottomNavigationTab title="Random" />
      </StyledBottomNavigation>
    </Container>
  );
};

const Container = styled(Layout)``;

const Header = styled(Layout)`
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;
