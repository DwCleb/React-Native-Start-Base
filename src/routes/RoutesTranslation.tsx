import React from 'react';
import Typography, { TypographyType } from '~/components/UI/Typography';
import { useTranslation } from 'react-i18next';

interface Props {
  name: string;
  color?: string;
}

export default function Translate({ name, color }: Props): JSX.Element {
  const { t } = useTranslation();
  return (
    <Typography type={TypographyType.L2} bold uppercase distance={[-20]} size={10} color={color}>
      {t(`common.navigation.${name}`)}
    </Typography>
  );
}
