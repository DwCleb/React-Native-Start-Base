```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import ErrorComponent from '.';
import { useTranslation } from 'react-i18next';

<ThemeManager>
  <ErrorComponent
    title={'Ups'}
    subtitle={'There was an error getting your account'}
    actionTitle={'Please try again later or return to previous page'}
    illustration={<ErrorImage />}
    actionButtons={[
      {
        title: t('error.action.tryAgain'),
        action: () => buttonAction(),
      },
      {
        title: t('error.action.guest.return'),
        variant: ButtonStyleEnum.Tertiary,
        action: () => buttonAction(),
      },
    ]}
  />
</ThemeManager>;
```
