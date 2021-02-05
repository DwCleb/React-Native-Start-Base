```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import HeaderButton, { HeaderButtonEnum } from '.';

<ThemeManager>
  <HeaderButton action={() => {}} type={HeaderButtonEnum.Back} />
</ThemeManager>;
```
