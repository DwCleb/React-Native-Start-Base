import React from 'react';
import { Header, TitleTypography, SubtitleTypography } from './styles';

export interface HeaderTitleProps {
  /** Title to render */
  title: string;
  /** SubTitle to render */
  subtitle?: string;
}

export default function HeaderTitle({ title, subtitle }: HeaderTitleProps): JSX.Element {
  return (
    <Header>
      <TitleTypography>{title}</TitleTypography>
      {subtitle && <SubtitleTypography>{subtitle}</SubtitleTypography>}
    </Header>
  );
}
