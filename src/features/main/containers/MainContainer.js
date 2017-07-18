import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainComponent from '../components/MainComponent';
import { loadMainContent } from '../redux/MainDuck';

const mapStateToProps = ({ main: { mainContent } }) => ({ mainContent });

class MainContainer extends Component {
  componentWillMount() {
    this.props.loadMainContent();
  }
  render() {
    const { mainContent } = this.props;
    return (
      <MainComponent content={mainContent} />
    );
  }
}

export default connect(mapStateToProps, { loadMainContent })(MainContainer);

MainContainer.propTypes = {
  mainContent: PropTypes.string.isRequired,
  loadMainContent: PropTypes.func.isRequired,
};
