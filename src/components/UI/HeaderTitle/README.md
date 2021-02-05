```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import HeaderTitle from '.';

<ThemeManager>
  <HeaderTitle title={'Some Title'} subtitle={'Some subtitle'} />
</ThemeManager>;
```
