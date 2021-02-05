import React from 'react';
import { View, Text } from 'react-native';

/* Testing Library */
import { create, act, ReactTestRenderer } from 'react-test-renderer';

/* Component to test */
import Input, { InputProps } from '../';
import { TextInput, LabelText, InputLine, InputContainer } from '../styles';
import { InputVariants, InputStatus } from '../../Input/InputType';

/* Theme */
import { ThemeProvider } from 'styled-components/native';
import darkTheme from '~/theme/ThemeContext/dark';

/* Assets */
import { CartIcon, CheckIcon } from '~/assets';

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const onChangeEvent = jest.fn();
const onTouchEventMock = jest.fn();

let props: InputProps = {
  name: 'inputTest',
  onChange: onChangeEvent,
  value: '',
};

const { theme } = darkTheme;

const componentToTest = (componentProps: InputProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Input {...componentProps} />
  </ThemeProvider>
);

describe('<Input />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = create(componentToTest(props));
    root = wrapper.root;
  });

  it('Should render correctly', () => {
    props = { ...props };
    expect(wrapper).toMatchSnapshot();
  });

  it('Should the correct structure', () => {
    expect(root.findAllByType(TextInput)).toHaveLength(1);

    expect(root.findAllByType(InputContainer)).toHaveLength(1);

    //default variant should be outlined
    expect(root.findAllByType(InputContainer)[0].props.variant).toBe(InputVariants.OUTLINED);
  });

  it('Should call onChangeEvent if text is changed', () => {
    const newProps = {
      ...props,
      value: '12',
    };
    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const textInputElement = root.findAllByType(TextInput)[0];

    act(() => {
      textInputElement.props.onChangeText('12');
    });

    expect(onChangeEvent).toHaveBeenCalled();
  });

  it('Should change inputState to default with onFocus and value on input', () => {
    const newProps = {
      ...props,
      value: '12',
    };
    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const textInputElement = root.findAllByType(TextInput)[0];

    act(() => {
      textInputElement.props.onFocus();
    });

    expect(root.findAllByType(InputContainer)[0].props.inputStatus).toBe(InputStatus.Initial);
  });

  it('If prop inputStatus is Complete, the rendered components should also be Complete', () => {
    const newProps = {
      ...props,
      value: '123',
      inputStatus: InputStatus.Complete,
    };
    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(InputContainer)[0].props.inputStatus).toBe(InputStatus.Complete);
  });

  it('Should render a label if prop is received and has a value', () => {
    const newProps = {
      ...props,
      label: 'testInput',
      value: '123',
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(LabelText).length).toBe(1);
  });

  it('Should render as regular variant, if prop received', () => {
    const newProps = {
      ...props,
      variant: InputVariants.REGULAR,
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(InputContainer)[0].props.variant).toBe(InputVariants.REGULAR);
    expect(root.findAllByType(InputLine).length).toBe(1);
  });

  it('Should render as invalid, if isInvalid prop is true', () => {
    const newProps = {
      ...props,
      value: '123',
      inputStatus: InputStatus.Invalid,
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(InputContainer)[0].props.inputStatus).toBe(InputStatus.Invalid);
  });

  it('Should render as valid, if isValid prop is true', () => {
    const newProps = {
      ...props,
      value: '123',
      leftIcon: { source: CartIcon, validSource: CheckIcon },
      inputStatus: InputStatus.Valid,
    };
    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(InputContainer)[0].props.inputStatus).toBe(InputStatus.Valid);
  });

  it('OnBlur event should trigger onTouchEvent prop, if prop is received', () => {
    const newProps = {
      ...props,
      onTouchEvent: onTouchEventMock,
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const textInputElement = root.findAllByType(TextInput)[0];

    act(() => {
      textInputElement.props.onBlur();
    });

    expect(onTouchEventMock).toHaveBeenCalled();
  });

  it('OnFocus event should trigger onTouchEvent prop, if prop is received', () => {
    const newProps = {
      ...props,
      onTouchEvent: onTouchEventMock,
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const textInputElement = root.findAllByType(TextInput)[0];

    act(() => {
      textInputElement.props.onFocus();
    });

    expect(onTouchEventMock).toHaveBeenCalled();
  });

  it('it should not trigger onChange event, if no onChange Prop is Provided', () => {
    const newProps = {
      ...props,
      onChange: undefined,
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const textInputElement = root.findAllByType(TextInput)[0];

    act(() => {
      textInputElement.props.onChangeText('1');
    });

    expect(onChangeEvent).toHaveBeenCalledTimes(0);
  });

  it('it should render right and left elements if provided', () => {
    const newProps = {
      ...props,
      leftElement: (
        <View>
          <Text>LEFT</Text>
        </View>
      ),
      rightElement: (
        <View>
          <Text>RIGHT</Text>
        </View>
      ),
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(InputContainer)[0].props.children[0]).toEqual(newProps.leftElement);
    expect(root.findAllByType(InputContainer)[0].props.children[3]).toEqual(newProps.rightElement);
  });
});
