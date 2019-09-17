import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native';
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
import { Quote } from './components/Quote';
import Loader from './components/Loader';
import Error from './components/Error';

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
        <Text category="h3">Inspiration 🧠</Text>
        <Button status="info" size="small" onPress={props.toggleTheme}>
          {props.theme === 'light' ? '🌙 ' : '🌞 '}
          Switch theme
        </Button>
      </Header>
      {loading && <Loader />}
      {error && <Error />}
      <Layout style={{ flex: 1 }}>
        <ListContainer contentContainerStyle={{ paddingBottom: 50 }}>
          {data && getQuotes() && (
            <List data={getQuotes()} renderItem={renderItem} />
          )}
        </ListContainer>
        <StyledBottomNavigation selectedIndex={index} onSelect={updateScreen}>
          <BottomNavigationTab title="🗂 All" />
          <BottomNavigationTab title="✨ Last" />
          <BottomNavigationTab title="🌪 Random" />
        </StyledBottomNavigation>
      </Layout>
    </Container>
  );
};

const Container = styled(Layout)`
  height: ${Dimensions.get('window').height - 50};
  position: relative;
`;

const Header = styled(Layout)`
  margin: 20px;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListContainer = styled(ScrollView)``;

const StyledBottomNavigation = styled(BottomNavigation)`
  width: ${Dimensions.get('window').width};
  position: absolute;
  bottom: 0px;
  height: 50;
`;
