import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

/* Theme */
import { Metrics, scale, ThemeContextType } from '~/theme';
import { ThemeType } from '~/theme/theme';

export enum InputMode {
  OUTLINED = 'outlined',
}

export enum InputMaskType {
  CPF = 'cpf',
  CNPJ = 'cnpj',
  CREDIT_CARD = 'credit-card',
  CEL_PHONE = 'cel-phone',
  DATETIME = 'datetime',
  MONEY = 'money',
  ZIP_CODE = 'zip-code',
  ONLY_NUMBERS = 'only-numbers',
  CUSTOM = 'custom',
}

export enum PassIcon {
  OFF = 'eye-off-outline',
  ON = 'eye-outline',
}

export interface InputProps {
  distance?: number[];
  mode?: InputMode;
  paddingHorizontal?: number;
  height?: number;
  label?: string;
  helperText?: string | boolean;
  value: string;
  name: string;
  pass?: boolean;
  hasError?: boolean;
  onChange({ value, name }: { value: string; name: string }): void;
  options?: {};
  mask?: InputMaskType;
  onBlur?: () => void;
  onFocus?: () => void;
}

export type Props = InputProps & { theme: ThemeType };

function getMargin({ distance }: Props): string {
  if (!distance) {
    return `${10}px ${5}px ${10}px ${5}px`;
  } else {
    switch (distance.length || 0) {
      case 1:
        return `${distance[0]}px`;
      case 2:
        return `${distance[0]}px ${distance[1]}px`;
      case 3:
        return `${distance[0]}px ${distance[1]}px ${distance[2]}px`;
      case 4:
        return `${distance[0]}px ${distance[1]}px ${distance[2]}px ${distance[3]}px`;
      default:
        return '0px';
    }
  }
}

export const InnerInput = styled.View`
  width: ${({ paddingHorizontal }: Props): number => Metrics.screen.width - scale(paddingHorizontal || 20)}px;
  margin: ${(props: Props): string => getMargin(props)};
`;

export const InputBase = styled(TextInput).attrs(({ theme, mode, hasError }: Props) => ({
  theme: { colors: { primary: hasError ? theme.alerts.red : theme.primary.blue } },
  mode,
  autoCorrect: false,
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  multiline: false,
}))`
  flex: 1;
  /* height: ${({ height }: Props): number => height || 45}px; */
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const ShowPass = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
  hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
}))`
  left: -10px;
  align-self: flex-end;
  top: ${({ hasError }: Props): number => (hasError ? -60 : -40)}px;
  border-radius: 20px;
  padding: 5px;
  background-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.white};
`;

export const HelperText = styled.View`
  margin-bottom: 2px;
`;
