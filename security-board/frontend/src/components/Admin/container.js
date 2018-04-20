import React, { Component } from 'react';
import PropTypes from "prop-types";
import Admin from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    render() { 
        return (
            <Admin />
        );
    }
}

export default Container;