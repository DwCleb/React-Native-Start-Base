```js
<BlankModal
  isVisible={showForgotPassword}
  onClose={(): void => setShowForgotPassword(false)}
  content={
    <Typography color={theme.monochromatic.black} type={TypographyType.H1}>
      Welcome
    </Typography>
  }
  actions={
    <React.Fragment>
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
    </React.Fragment>
  }
/>
```
