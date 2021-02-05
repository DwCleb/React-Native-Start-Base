```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import ErrorFallback from '.';
import { useTranslation } from 'react-i18next';

<ThemeManager>
  <ErrorFallback resetError={(): => resetError}/>
</ThemeManager>;
```
