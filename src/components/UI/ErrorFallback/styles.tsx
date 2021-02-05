import styled from 'styled-components/native';
import { scale } from '~/theme';

import { Logo } from '~/assets';

export const ErrorImage = styled.Image.attrs(() => ({
  source: Logo,
  resizeMode: 'contain',
  align: 'center',
  marginTop: scale(30),
  marginBottom: scale(30),
  alignSelf: 'center',
}))`
  width: ${scale(82)}px;
`;
