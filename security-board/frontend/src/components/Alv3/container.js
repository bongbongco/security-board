import React, { Component } from 'react';
import PropTypes from "prop-types";
import Alv3 from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    render() { 
        return (
            <Alv3 />
        );
    }
}

export default Container;