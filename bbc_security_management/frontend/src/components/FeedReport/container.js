import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedReport from './presenter';

class Container extends Component {
  static propTypes = {
    issues: PropTypes.array
  };
    render() {
        return(
            <FeedReport 
                {...this.props}
                {...this.state}
            />
        );
    }
}

export default Container;