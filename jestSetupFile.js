jest.mock('@react-native-community/geolocation', () => {
  return {
    addListener: jest.fn(),
    getCurrentPosition: jest.fn(),
    removeListeners: jest.fn(),
    requestAuthorization: jest.fn(),
    setConfiguration: jest.fn(),
    startObserving: jest.fn(),
    stopObserving: jest.fn(),
  };
});

jest.mock('react-native-maps', () => {
  /* Do not remove this -- needed to mock tests using this lib */
  const React = require('react');
  const { View } = require('react-native');
  const MockMapView = (props) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

jest.mock('react-native-permissions', () => {});

jest.mock('react-native-gesture-handler', () => {
  const { FlatList, ScrollView } = require('react-native');
  return {
    FlatList,
    ScrollView,
  };
});

import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-awesome-card-io', () => {
  return {
    DETECTION_MODE: 'IMAGE_AND_NUMBER',
  };
});

jest.mock('react-native-localize', () => {
  return {
    findBestAvailableLanguage: jest.fn(),
  };
});

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  const { FlatList } = require('react-native');
  return {
    ScrollView: View,
    FlatList: FlatList,
  };
});

jest.mock('react-native-modalize', () => {
  const React = require('react');
  const Modalize = (props) => React.createElement('Modalize', props, props.children);
  return {
    Modalize: Modalize,
  };
});

jest.mock('react-native-popover-view', () => {
  const React = require('react');
  const { View } = require('react-native');

  const Popover = (props) => {
    return (
      <View testId={'Popover'}>
        <View>{props.from}</View>
        <View>{props.children}</View>
      </View>
    );
  };
  return {
    __esModule: true,
    default: Popover,
  };
});

jest.mock('@ptomasroos/react-native-multi-slider', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  const MultiSlider = (props) => {
    return (
      <View testId={'MultiSlider'}>
        <Text>{props.min}</Text>
        <Text>{props.max}</Text>
        <Text>{props.values}</Text>
      </View>
    );
  };
  return {
    __esModule: true,
    default: MultiSlider,
  };
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/core', () => {
  return {
    ...jest.requireActual('@react-navigation/core'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

