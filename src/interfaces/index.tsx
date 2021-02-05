import { RouteProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// FIXME: it should be done case by case. For now we use params as any
export type Navigatable<ParamList extends ParamListBase, RouteName extends keyof ParamList> = {
  route: RouteProp<ParamList, RouteName>;
  navigation: StackNavigationProp<ParamList, RouteName>;
};
