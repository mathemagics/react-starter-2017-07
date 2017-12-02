import { createElement } from 'react';
import PropTypes from 'prop-types';

export const MainComponent = props => <div>{props.content}</div>;

MainComponent.propTypes = {
  content: PropTypes.string.isRequired,
};
