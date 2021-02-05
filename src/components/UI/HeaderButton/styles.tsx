import styled from 'styled-components/native';

/** Theme */
import { scale, ThemeContextType } from '~/theme';

/** Assets */
import { BackIcon as BackIconAsset, CrossIcon as CrossIconAsset } from '~/assets';

/* Dependecies */
import { I18nManager } from 'react-native';

enum ButtonEnum {
  Back = 'back',
  Close = 'close',
}

interface IconProps {
  type: ButtonEnum;
}

export const ButtonContainer = styled.TouchableOpacity.attrs(() => ({
  hitSlop: { top: 30, left: 30, bottom: 30, right: 30 },
}))`
  margin-top: 0px;
  margin-left: ${(props: IconProps): string => (props.type === ButtonEnum.Back ? `${scale(20)}px` : '0px')};
  padding-right: ${(props: IconProps): string => (props.type === ButtonEnum.Back ? `${scale(30)}px` : '0px')};
`;

export const BackIcon = styled.Image.attrs((props: IconProps) => ({
  source: props.type === ButtonEnum.Back ? BackIconAsset : CrossIconAsset,
  resizeMode: 'contain',
}))`
  transform: scaleX(${I18nManager.isRTL ? -1 : 1});
  tint-color: ${(props: ThemeContextType): string => `${props.theme.navigation.back}`};
  height: ${(props: IconProps): string => (props.type === ButtonEnum.Back ? `${scale(16)}px` : `${scale(26)}px`)}
  width: ${(props: IconProps): string => (props.type === ButtonEnum.Back ? `${scale(9)}px` : `${scale(26)}px`)}
`;
