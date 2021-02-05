import React from 'react';

import { SystemProvider } from '~/services/context/reducers/system';

export default function GlobalState({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element {
  return <SystemProvider>{children}</SystemProvider>;
}
