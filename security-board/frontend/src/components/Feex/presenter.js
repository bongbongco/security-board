import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import styles from './styles.scss';

const Feex = props => {
    return <FeexContent/>
};

const FeexContent = props => (
    <div className={styles.feex}>
        <div className={styles.dashboard}>
            <Iframe url="http://192.168.72.20:5601/app/kibana#/dashboard/AWRj122SeIpYi_GYu8L9?_g=(refreshInterval%3A('%24%24hashKey'%3A'object%3A963'%2Cdisplay%3A'10%20seconds'%2Cpause%3A!f%2Csection%3A1%2Cvalue%3A10000)%2Ctime%3A(from%3Anow-7d%2Cmode%3Aquick%2Cto%3Anow))&embed=true"
                position="relative"
                width="100%"
                height="100%"
                allowFullScreen
            />
        </div>
    </div>
)

export default Feex;