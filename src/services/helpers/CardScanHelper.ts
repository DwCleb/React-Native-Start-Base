import { Platform, processColor } from 'react-native';
import { CardIOModuleProps } from 'react-native-awesome-card-io';

export function generateScanCardConfig(color: string, language: string): CardIOModuleProps {
  return {
    suppressConfirmation: true,
    hideCardIOLogo: true,
    useCardIOLogo: false,
    requireCardholderName: false,
    suppressManualEntry: true,
    scanExpiry: true,
    requireCVV: false,
    keepStatusBarStyle: true,
    guideColor: Platform.OS === 'ios' ? processColor(color) : color,
    languageOrLocale: language,
  };
}
