import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ContentButton, Button } from './styles';

export default function TabBarButton() {
  return (
    <Container>
      <ContentButton>
        <Icon
          name="insert-invitation"
          size={35}
          color="rgba(255,255,255,0.6)"
        />
      </ContentButton>
    </Container>
  );
}
