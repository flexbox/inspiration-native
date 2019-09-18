import React from 'react';
import { Text, Layout } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const Error = ({ reason = '' }) => (
  <Container>
    <Text status="danger" category="h5">
      Something wrong happened ! 🤭
    </Text>
    <Text status="danger" category="h6">
      {reason}
    </Text>
  </Container>
);
export default Error;

const Container = styled(Layout)`
  padding-top: 20;
  align-items: center;
  justify-content: center;
`;
