import { showMessage } from 'react-native-flash-message';

import { API, URL } from '~/services/api/http';
import { setLogged } from '~/services/deviceStorage';
import { SysMessageType, SysMessageDefaultDuration } from '~/services/SysMessage';

import { useSystemContext } from '~/services/context/reducers/system';
import { signInSystem } from '~/services/context/actions/system';

export function useRequestAuth() {
  const { dispatch } = useSystemContext();

  async function signIn(email: string, password: string): Promise<void | boolean> {
    try {
      const response = await API.post(URL.SIGN_IN, { email, password });

      const { status, data } = response;

      if (status === 200) {
        dispatch(signInSystem(data.token));

        setLogged(true);

        // setUserData(data.user);
      }
    } catch (err) {
      const message = err?.response?.data !== undefined ? err.response.data.error : 'Erro inesperado, tente novamente';

      showMessage({
        message: message,
        type: SysMessageType.DANGER,
        duration: SysMessageDefaultDuration,
      });
    }
  }

  interface SignUpRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  async function signUp(data: SignUpRequest): Promise<void> {
    try {
      const response = await API.post(URL.SIGN_UP, data);

      if (response.status === 200) {
        showMessage({
          message: `Bem vindo, ${data.name}!`,
          type: SysMessageType.SUCCESS,
          duration: SysMessageDefaultDuration,
        });

        signIn(data.email, data.password);
      }
    } catch (err) {
      const message = err?.response?.data !== undefined ? err.response.data.error : 'Erro inesperado, tente novamente';

      showMessage({
        message: message,
        type: SysMessageType.DANGER,
        duration: SysMessageDefaultDuration,
      });
    }
  }
  return { signIn, signUp };
}
