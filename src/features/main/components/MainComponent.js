import React from 'react';
import PropTypes from 'prop-types';

const MainComponent = (props) => {
  return (
    <div>
      {props.content}
    </div>
  );
};

MainComponent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MainComponent;
