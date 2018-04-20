import React, { Component } from 'react';
import PropTypes from "prop-types";
import Dlp from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    render() { 
        return (
            <Dlp />
        );
    }
}

export default Container;