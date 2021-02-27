import React from 'react';

import Typography, { TypographyType } from '~/components/UI/Typography';
import Button from '~/components/UI/Buttons/Button';

import { ScrollView } from '~/components/Structure';
import { useSystemContext } from '~/services/context/reducers/system';
import { signOutSystem } from '~/services/context/actions/system';

import { useTheme } from '~/theme';
export default function Home(): JSX.Element {
  const { theme } = useTheme();
  const { dispatch } = useSystemContext();

  return (
    <ScrollView>
      {[1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
        <Typography key={item} type={TypographyType.H1} distance={[10]}>
          Home
        </Typography>
      ))}

      <Button
        title="Sair"
        color={theme.alerts.red}
        onPress={(): void => dispatch(signOutSystem())}
        distance={[0, 0, 50, 0]}
      />
    </ScrollView>
  );
}
