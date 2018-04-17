import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dashboard from './presenter';

class Container extends Component {
    state = {
        loading: true
    };
    render() {
        return (
            <Dashboard />
        );
    }
}

export default Container;