import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import b from './b.json';

export default function app() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Lottie resizeMode="contain" autoSize source={b} autoPlay loop />
    </SafeAreaView>
  );
}