```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../../theme/ThemeContext';
import LottieAnimation, { AnimationsEnum } from '.';

<ThemeManager>
  <LottieAnimation name={AnimationsEnum.LoadingSpinner} loop={true} style={{ width: scale(50) }} />
</ThemeManager>;
```
