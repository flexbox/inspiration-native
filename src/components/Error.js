import React from 'react';
import { Text, Layout } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const Error = ({ reason = '' }) => (
  <Container>
    <UIText status="danger" category="h6">
      🤭 {'\n'}Something wrong happened
    </UIText>
    <Text status="danger" category="p1">
      {reason}
    </Text>
  </Container>
);
export default Error;

const Container = styled(Layout)`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const UIText = styled(Text)`
  text-align: center;
`;
