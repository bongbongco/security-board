import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import Iframe from "react-iframe";
import BootstrapTable from 'react-bootstrap-table-next';


const Admin = props => {
    //return <LoadingContent />;
    return <AdminContent />;
};

const products = [{
    id: "etas965",
    name: "LSY",
    price: "1000"
}];

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const AdminContent = props => (
    <div className={styles.contents}>
        <div className={styles.sidebar}>
        TEST
        </div>
        <div className={styles.editorBox}>
            <BootstrapTable 
                keyField='id' 
                data={ products } 
                columns={ columns } 
                />
        </div>
    </div>
)

/*
const AdminContent = props => (
    <div className={styles.contents}>
        <div className={styles.notice}>
            <BootstrapTable keyField='id' data={ products } columns={ columns } />
        </div>
        <div className={styles.commentBox}>
        </div>
    </div>
)
*/

const LoadingContent = props => (
    <div className={styles.admin}>
        <Loading />
    </div>
);

Admin.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Admin;