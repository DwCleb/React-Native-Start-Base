import Typography from '../Typography';
import styled from 'styled-components/native';
import { scale, ThemeContextType } from '~/theme';

interface WrapperProps {
  color?: string;
  opacity: string;
  valueWeight: string;
  isCurrency?: boolean;
}

type ThemedProps = ThemeContextType & WrapperProps;

function getTitleColor({ theme, color }: ThemedProps): string {
  return color ? theme.currency.title[color] : theme.monochromatic.white;
}

export const LineTroughContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: ${scale(3)}px;
`;

export const PercentageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Value = styled(Typography)`
  color: ${(props: ThemedProps): string => `${getTitleColor(props)}${props.opacity === 'half' ? '7F' : ''}`};
  ${({ valueWeight }: ThemedProps): string => valueWeight && `font-weight: ${valueWeight}`};
  letter-spacing: ${(props: ThemedProps): string => (props.isCurrency ? `${scale(1.5)}` : `${scale(1)}`)}px;
`;

export const LineThrough = styled.View`
  width: 100%;
  height: ${scale(2)}px;
  background-color: yellow;
  position: absolute;
  bottom: auto;
`;

function padding(prop: number[] = []): string {
  switch (prop.length || 0) {
    case 1:
      return `${scale(prop[0])}px`;
    case 2:
      return `${scale(prop[0])}px ${scale(prop[1])}px`;
    case 3:
      return `${scale(prop[0])}px ${scale(prop[1])}px ${scale(prop[2])}px`;
    case 4:
      return `${scale(prop[0])}px ${scale(prop[1])}px ${scale(prop[2])}px ${scale(prop[3])}px`;
    default:
      return '0px';
  }
}

export const Container = styled.View`
  flex-direction: ${({ row }: { row: string }): string => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: flex-start;
  padding: ${({ distance }: { distance: [] }): string => padding(distance)};
`;
