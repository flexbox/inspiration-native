import React from 'react';
import { Text, Layout } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const Error = () => (
  <Container>
    <UIText status="danger" category="h5">
      🤭 {'\n'}Something wrong happened
    </UIText>
  </Container>
);

export default Error;

const Container = styled(Layout)`
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const UIText = styled(Text)`
  text-align: center;
`;
