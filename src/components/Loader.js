import React from 'react';
import { Text, Layout } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const Loader = () => (
  <Container>
    <Text category="h5">Loading... ⏳</Text>
  </Container>
);
export default Loader;

const Container = styled(Layout)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
