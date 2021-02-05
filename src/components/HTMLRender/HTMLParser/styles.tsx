import styled from 'styled-components/native';

import { scale } from '~/theme';

export const ListPrefix = styled.View`
  background-color: white;
  border-radius: ${scale(2)}px;
  width: ${scale(4)}px;
  margin-right: ${scale(2)}px;
  height: ${scale(4)}px;
  align-self: center;
`;
