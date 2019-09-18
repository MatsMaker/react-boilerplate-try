/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  title: {
    id: `${scope}.header`,
    defaultMessage: 'Developer task list',
  },
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Developer name',
  },
});
