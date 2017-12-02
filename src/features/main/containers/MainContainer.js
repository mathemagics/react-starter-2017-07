import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMainContent } from 'Ducks/MainDuck';
import { MainComponent } from '../components/MainComponent';

class MainContainer extends PureComponent {
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

const mapStateToProps = state => ({ mainContent: state.getIn(['main', 'mainContent']) });

export default connect(mapStateToProps, { loadMainContent })(MainContainer);

MainContainer.propTypes = {
  mainContent: PropTypes.string.isRequired,
  loadMainContent: PropTypes.func.isRequired,
};
