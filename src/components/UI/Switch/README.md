```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../../theme/ThemeContext';
import Switch from '.';

<ThemeManager>
  <Switch acessibilityLabel={'label true'} onChange={() => {}} value={true} />
  <Switch acessibilityLabel={'label false'} onChange={() => {}} value={false} />
</ThemeManager>;
```
