import styled from 'styled-components/native';
import { Platform } from 'react-native';

const KeyboardAvoingView = styled.KeyboardAvoidingView.attrs(() => ({
  // enabled: true,
  behavior: 'padding',
  keyboardVerticalOffset: 0,
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
`;

const View = styled.View.attrs(() => ({
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
`;

export default Platform.OS === 'ios' ? KeyboardAvoingView : View;
