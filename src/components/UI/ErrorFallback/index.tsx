import React from 'react';
import ErrorComponent from '~/components/UI/Error';
import { useTranslation } from 'react-i18next';

import { ErrorImage } from './styles';

export interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

/**
 * the error param have the javascript error origin
 * @param error: string
 * @param resetError: function to reload app
 */

export default function ErrorFallback({ resetError }: ErrorFallbackProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <ErrorComponent
      title={t('error.title')}
      subtitle={t('error.subtitle')}
      actionTitle={t('error.card.label')}
      illustration={<ErrorImage />}
      actionButtons={[
        {
          title: t('error.action.reload'),
          action: resetError,
        },
      ]}
    />
  );
}
