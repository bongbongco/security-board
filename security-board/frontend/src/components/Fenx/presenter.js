import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import styles from './styles.scss';

const Fenx = props => {
    return <FenxContent />
};

const FenxContent = props => (
    <div className={styles.fenx}>
        <Iframe url=""
            position="relative"
            width="100%"
            height="100%"
            allowFullScreen
        />
    </div>
)

export default Fenx;