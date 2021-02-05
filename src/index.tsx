import React, { Suspense } from 'react';
import GlobalState from '~/services/context';

import Routes from '~/routes';
import { ThemeManager } from '~/theme';
import { Spinner } from '~/components';

import FlashMessage from 'react-native-flash-message';

export default function App(): JSX.Element {
  return (
    <GlobalState>
      <ThemeManager>
        <Suspense fallback={<Spinner />}>
          <Routes />
          <FlashMessage position="top" />
        </Suspense>
      </ThemeManager>
    </GlobalState>
  );
}
