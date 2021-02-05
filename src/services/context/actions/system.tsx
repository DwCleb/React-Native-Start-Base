/** import alias */
import { SYSTEM } from '~/services/context/constants';
import { setToken, logoutApp } from '~/services/deviceStorage';
// ------------

// Action creators
export function signInSystem(
  accessToken: string | null | undefined
): { type: string; accessToken?: string | null | undefined } {
  setToken(accessToken);
  return { type: SYSTEM.SIGN_IN, accessToken };
}

export function signOutSystem(): { type: string } {
  logoutApp();
  return { type: SYSTEM.SIGN_OUT };
}

export function restoreSystemData(
  accessToken: string | null | undefined
): { type: string; accessToken?: string | null | undefined } {
  return { type: SYSTEM.RESTORE_TOKEN, accessToken };
}
