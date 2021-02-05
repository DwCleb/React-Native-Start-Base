```jsx
// TODO: create a Wrapper to react-styleguidist to provide theme to all components shown
import ThemeManager from '../../../theme/ThemeContext';
import CurrencyValue from '.';

import { View, Text } from 'react-native';

<ThemeManager>
  <View style={{ backgroundColor: 'white' }}>
    <CurrencyValue
      disableAnimationIn
      value={30}
      currencySymbolDirection="start"
      valueWeight={'800'}
      distance={[0, 0, 0, 0]}
      row={false}
      textTypes={{ currency: 'L2', value: 'H3' }}
    />
  </View>
</ThemeManager>;
```
