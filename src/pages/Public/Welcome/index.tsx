import React from 'react';

import Typography, { TypographyType } from '~/components/UI/Typography';
import Shimmer from '~/components/UI/Shimmer';

import Button, { ButtonMode } from '~/components/UI/Buttons/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '~/components/UI/Input';
import { VerticalAnimatedView, View, ViewEnum, ScrollView } from '~/components/Structure';

import { useRequestAuth } from '~/services/api/requests';

import { useTheme } from '~/theme';

import { InfoModal } from '~/components/UI/Modals';

export default function Welcome(): JSX.Element {
  const { theme } = useTheme();
  const { signIn } = useRequestAuth();

  const [loading, setLoading] = React.useState(false);
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);

  async function onSubmit(formValues: { email: string; password: string }): Promise<void> {
    setLoading(true);

    await signIn(formValues.email, formValues.password);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit,
    validationSchema: yup.object().shape({
      email: yup.string().email('E-mail inválido').required('O E-mail é obrigatório'),
      password: yup.string().required('A Senha é obrigatória'),
    }),
  });

  const handleInputFormChange = ({ value, name }: { value: string; name: string }): void => {
    formik.setFieldValue(name, value);
  };

  return (
    <ScrollView flex={1} color={theme.primary.blue} justifyContent={ViewEnum.CENTER} alignItems={ViewEnum.CENTER}>
      <View
        flex={4}
        width="100%"
        color={theme.primary.blue}
        justifyContent={ViewEnum.CENTER}
        alignItems={ViewEnum.CENTER}
      >
        <Shimmer>
          <Typography color={theme.monochromatic.white} type={TypographyType.H1}>
            Welcome
          </Typography>
        </Shimmer>
      </View>
      <VerticalAnimatedView duration={500} flex={1} color={theme.primary.blue} width="100%">
        <View
          color="white"
          flex={1}
          radius={20}
          width="100%"
          justifyContent={ViewEnum.CENTER}
          alignItems={ViewEnum.CENTER}
        >
          <Input
            paddingHorizontal={20}
            label="Login"
            name="email"
            value={formik.values.email}
            onChange={handleInputFormChange}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Input
            label="Senha"
            pass
            name="password"
            value={formik.values.password}
            onChange={handleInputFormChange}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            distance={[30, 0, 5, 0]}
            loading={loading}
            title="Entrar"
            disabled={loading}
            onPress={formik.handleSubmit}
          />

          <Button
            disabled={loading}
            title="Esqueci a senha"
            mode={ButtonMode.TEXT}
            onPress={(): void => setShowForgotPassword(true)}
          />
        </View>
      </VerticalAnimatedView>
      <InfoModal
        isVisible={showForgotPassword}
        title="sucesso"
        message="Cadastro finalizado com sucesso"
        onClose={(): void => setShowForgotPassword(false)}
      />
    </ScrollView>
  );
}
