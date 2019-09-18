import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

export const Quote = props => (
  <Card>
    <Text category="s1">{props.title}</Text>
    <Text category="c1">— {props.author}</Text>
  </Card>
);

const Card = styled(View)`
  margin: 30px;
`;
