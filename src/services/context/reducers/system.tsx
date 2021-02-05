// Reducer
import React, { createContext, useReducer, useContext } from 'react';
import produce from 'immer';
import { SYSTEM } from '~/services/context/constants';

interface SystemProps {
  loading: boolean;
  accessToken?: string | null | undefined;
  isSignOut: boolean;
}

// Initial state
export const INITIAL_STATE: SystemProps = {
  loading: false,
  accessToken: null,
  isSignOut: false,
};

export const SystemContext = createContext({
  systemState: INITIAL_STATE,
  dispatch: (action: {
    type: string;
    accessToken?: string | null | undefined;
  }): { type: string; accessToken?: string | null | undefined } => action,
});

export function systemReducer(state = INITIAL_STATE, action: { type: string; accessToken: string }): SystemProps {
  return produce(state, (draft) => {
    switch (action.type) {
      case SYSTEM.RESTORE_TOKEN:
        draft.accessToken = action.accessToken;
        draft.loading = false;
        break;

      case SYSTEM.SIGN_IN:
        draft.accessToken = action.accessToken;
        draft.loading = false;
        draft.isSignOut = false;
        break;

      case SYSTEM.SIGN_OUT:
        draft.isSignOut = true;
        draft.accessToken = null;
        break;

      default:
        break;
    }
  });
}

function SystemProvider(props: any): JSX.Element {
  const [systemState, dispatch] = useReducer(systemReducer, INITIAL_STATE);

  const systemData = { systemState, dispatch };

  return <SystemContext.Provider value={systemData} {...props} />;
}

function useSystemContext(): {
  systemState: SystemProps;
  dispatch: (action: { type: string; accessToken?: string | null | undefined }) => void;
} {
  return useContext(SystemContext);
}

export { SystemProvider, useSystemContext };
