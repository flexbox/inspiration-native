import React from 'react';
import { Text, Layout } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const Loader = () => (
  <Container>
    <UIText category="h5">⏳{'\n'} Loading…</UIText>
  </Container>
);

export default Loader;

const Container = styled(Layout)`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const UIText = styled(Text)`
  text-align: center;
`;
