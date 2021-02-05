import React from 'react';
import { Platform } from 'react-native';

/* Components */
import { TypographyType } from '~/components/UI/Typography';

/* Styled Components */
import { Value, LineThrough, PercentageContainer, LineTroughContainer, Container } from './styles';

/* Utils */
import { formatterCurrency } from '~/services/helpers/CurrencyHelper';

export interface Props {
  value: number;
  discountPercentage?: number;
  valueWeight?: string;
  color?: string;
  currencySymbolDirection?: string;
  distance?: number[];
  row: boolean;
  disableAnimationIn?: boolean;
  textTypes: { currency: string; value: string };
  lineDistance?: number[];
  currencySize?: number;
}

function CurrencyValue({
  value,
  valueWeight,
  color,
  currencySymbolDirection,
  row,
  textTypes,
  distance,
  lineDistance,
  currencySize,
  discountPercentage,
}: Props): JSX.Element {
  const isStart = currencySymbolDirection === 'start';

  const transformedValue = value.toString().split('.');
  const leftValue = parseInt(transformedValue[0], 10);
  const rightValue = transformedValue[1] && parseInt(transformedValue[1], 10);

  const currencyValueRender = (): JSX.Element => {
    return (
      <React.Fragment>
        {isStart && (
          <Value type={textTypes.currency} color={color} valueWeight={'800'} size={currencySize} isCurrency>
            {!row ? 'R$' : 'R$ '}
          </Value>
        )}
        <Value type={textTypes.value} valueWeight={valueWeight} color={color}>
          {formatterCurrency(leftValue)}
        </Value>
        {rightValue && (
          <Value type={TypographyType.L2} opacity={'half'} valueWeigth={valueWeight} color={color}>
            {` ${rightValue}`}
          </Value>
        )}
        {!isStart && (
          <Value type={textTypes.currency} color={color} valueWeight={'800'} size={currencySize} isCurrency>
            {!row ? 'R$' : ' R$'}
          </Value>
        )}
      </React.Fragment>
    );
  };

  return (
    <Container distance={distance} row={row}>
      {row && !discountPercentage && (
        <Value color={color} distance={lineDistance ? lineDistance : Platform.OS === 'android' && [10, 0, 0, 0]}>
          {currencyValueRender()}
        </Value>
      )}
      {row && discountPercentage && (
        <PercentageContainer>
          <LineTroughContainer>
            {currencyValueRender()}
            <LineThrough />
          </LineTroughContainer>
        </PercentageContainer>
      )}
      {!row && currencyValueRender()}
    </Container>
  );
}

export default CurrencyValue;
