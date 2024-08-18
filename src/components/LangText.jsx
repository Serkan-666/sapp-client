import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function LangText({ id }) {
   return <FormattedMessage id={id} defaultMessage="Message Not Found" />;
}
