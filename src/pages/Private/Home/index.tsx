import React from 'react';

import Typography, { TypographyType } from '~/components/UI/Typography';
import Button from '~/components/UI/Buttons/Button';

import { View, ViewEnum } from '~/components/Structure';
import { useSystemContext } from '~/services/context/reducers/system';
import { signOutSystem } from '~/services/context/actions/system';

import { useTheme } from '~/theme';
export default function Home(): JSX.Element {
  const { theme } = useTheme();
  const { dispatch } = useSystemContext();

  return (
    <View flex={1} justifyContent={ViewEnum.CENTER} alignItems={ViewEnum.CENTER}>
      <Typography type={TypographyType.H1}>Home</Typography>

      <Button title="Sair" color={theme.alerts.red} onPress={(): void => dispatch(signOutSystem())} />
    </View>
  );
}
