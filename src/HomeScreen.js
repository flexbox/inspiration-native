import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {
  Layout,
  Text,
  Button,
  List,
  BottomNavigation,
  BottomNavigationTab
} from 'react-native-ui-kitten';
import { FontAwesome } from '@expo/vector-icons';
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
        <Text category="h5">Inspiration</Text>
        <Button type="basic" appearance="ghost" onPress={props.toggleTheme}>
          {' '}
          <FontAwesome name="adjust" size={16} />
        </Button>
      </Header>
      <ContainerList>
        {loading && <Loader />}
        {error && <Error />}
        {data && getQuotes() && (
          <List data={getQuotes()} renderItem={renderItem} />
        )}
      </ContainerList>
      <StyledBottomNavigation>
        <BottomNavigation selectedIndex={index} onSelect={updateScreen}>
          <BottomNavigationTab title="All" />
          <BottomNavigationTab title="Last" />
          <BottomNavigationTab title="Random" />
        </BottomNavigation>
      </StyledBottomNavigation>
    </Container>
  );
};

const Container = styled(View)`
  ${'' /* flex: 1; */}
  ${'' /* flex-direction: column; */}
`;

const Header = styled(View)`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerList = styled(View)`
  ${'' /* flex: 1; */}
`;

console.log('TCL: screenHeight', height);

const StyledBottomNavigation = styled(BottomNavigation)`
  ${'' /* position: absolute;
  top: 350; */}
`;
