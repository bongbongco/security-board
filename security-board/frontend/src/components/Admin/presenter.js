import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';

const Admin = props => {
    return <LoadingContent />;
};

const LoadingContent = props => (
    <div className={styles.admin}>
        <Loading />
    </div>
);

Admin.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Admin;