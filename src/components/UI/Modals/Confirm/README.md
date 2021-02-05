```js
<ConfirmModal
  isVisible={showForgotPassword}
  title="Remover dados"
  message="Tem certeza que deseja prosseguir com a remoção?"
  onConfirm={(): void => setShowForgotPassword(false)}
  onCancel={(): void => setShowForgotPassword(false)}
/>
```
