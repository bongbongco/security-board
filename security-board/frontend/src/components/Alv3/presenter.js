import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import styles from './styles.scss';

const Alv3 = props => {
    return <Alv3Content />;
};

const Alv3Content = props => (
    <div className={styles.alv3}>
        <div className={styles.dashboard}>
            <Iframe url="http://192.168.72.20:5601/app/kibana#/dashboard/AWRi3P0deIpYi_GYu8La?_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cmode%3Aquick%2Cto%3Anow%2Fw))&embed=true"
                position="relative"
                width="100%"
                height="100%"
                allowFullScreen
            /> 
        </div>
        <div className={styles.info}>
            <Iframe url="http://192.168.72.20:5601/app/kibana#/discover/AWRjez_9eIpYi_GYu8Lx?_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cmode%3Aquick%2Cto%3Anow%2Fw))&embed=true"
                position="relative"
                width="100%"
                height="100%"
                allowFullScreen
            /> 
        </div>
    </div>
);

Alv3.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Alv3;