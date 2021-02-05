```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import Shimmer from '.';

import { View } from 'react-native';

<ThemeManager>
  <Shimmer isLoading={isLoading} style={{ height: 50 }}>
    <View style={{ height: 50 }} />
  </Shimmer>
</ThemeManager>;
```
