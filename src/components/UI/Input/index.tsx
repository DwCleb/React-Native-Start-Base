import * as React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { Icon } from '~/components';
import { useTheme } from '~/theme';

import Typography, { TypographyType } from '~/components/UI/Typography';
import { InnerInput, ShowPass, InputMode, InputBase, HelperText } from './styles';
// -> import enums and props
import { InputProps, PassIcon } from './styles';

export default function Input({
  label,
  value,
  name,
  onChange,
  pass,
  paddingHorizontal = 20,
  mode = InputMode.OUTLINED,
  height,
  distance,
  helperText,
  options,
  mask,
  onBlur,
  onFocus,
}: InputProps): JSX.Element {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = React.useState(pass);

  function returnMaskedInput(): JSX.Element {
    return (
      <InputBase
        render={(props: any): JSX.Element => <TextInputMask {...props} type={mask} options={options} />}
        label={label}
        height={height}
        mode={mode}
        value={value}
        hasError={helperText}
        secureTextEntry={showPassword}
        onChangeText={(textValue: string): void => onChange({ value: textValue, name })}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  }

  function returnSimpleInput(): JSX.Element {
    return (
      <InputBase
        label={label}
        height={height}
        mode={mode}
        value={value}
        hasError={helperText}
        secureTextEntry={showPassword}
        onChangeText={(textValue: string): void => onChange({ value: textValue, name })}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  }

  return (
    <InnerInput paddingHorizontal={paddingHorizontal} distance={distance} hasError={helperText}>
      {/* render the correct input by user need */}
      {mask ? returnMaskedInput() : returnSimpleInput()}

      {/* component helper text to show warning and error messages */}
      {helperText && (
        <HelperText>
          <Typography type={TypographyType.L1} color={theme.alerts.red} align="left">
            {helperText}
          </Typography>
        </HelperText>
      )}

      {/* component showpass to input entry pass  */}
      {pass && (
        <ShowPass onPress={(): void => setShowPassword(!showPassword)} hasError={helperText}>
          <Icon name={showPassword ? PassIcon.OFF : PassIcon.ON} color={theme.primary.blue} />
        </ShowPass>
      )}
    </InnerInput>
  );
}
