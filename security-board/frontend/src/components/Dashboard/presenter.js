import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import Ionicon from "react-ionicons";
import styles from './styles.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Dashboard = props => {
    return <DashboardContent />;
};

const DashboardContent = props => (
    <div className={styles.contents}>
        <div className={styles.summary}>
            <div className={cx('row', 'alert')}>
                <div className={styles.title}>
                    <span>Vulnerability</span>
                    <Ionicon icon="ios-arrow-dropup-circle" fontSize="28px" color="#efefef" />
                </div>
                <div className={styles.value}>
                    400
                </div>
                <div className={styles.stat}><b>13</b>% INCREASE</div>
            </div>
            <div className={cx('row', 'caution')}>
                <div className={styles.title}>
                    <span>Malware</span>
                    <Ionicon icon="ios-arrow-dropdown-circle" fontSize="28px" color="#efefef" />
                </div>
                <div className={styles.value}>50</div>
                <div className={styles.stat}><b>20</b>% DECREASE</div>
            </div>
            <div className={cx('row', 'peacetime')}>
                <div className={styles.title}>
                    <span>Email</span>
                    <Ionicon icon="ios-arrow-dropdown-circle" fontSize="28px" color="#efefef" />
                </div>
                <div className={styles.value}>150</div>
                <div className={styles.stat}><b>5</b>% INCREASE</div>
            </div>
        </div>
        <div className={styles.dashboard}>
            <Iframe url="http://192.168.31.248:5601/app/kibana#/dashboard/5c7cfeb0-41e2-11e8-a116-6dc224b57596?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-2y,mode:quick,to:now))&_a=(description:'UI%20TEST%20Dashboard',filters:!(),fullScreenMode:!t,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((gridData:(h:3,i:'1',w:6,x:0,y:0),id:'9760fbd0-41e2-11e8-a116-6dc224b57596',panelIndex:'1',type:visualization,version:'6.2.3'),(gridData:(h:3,i:'2',w:6,x:6,y:0),id:dc55e070-41e2-11e8-a116-6dc224b57596,panelIndex:'2',type:visualization,version:'6.2.3'),(gridData:(h:2,i:'3',w:12,x:0,y:3),id:'130c6080-41e3-11e8-a116-6dc224b57596',panelIndex:'3',type:visualization,version:'6.2.3')),query:(language:lucene,query:''),timeRestore:!f,title:'TEST%20Dashboard',viewMode:view)"
                position="relative"
                width="100%"
                height="100%"
                allowFullScreen
            /> 
        </div>
        <div className={styles.info}>
            <div>TEST</div>
        </div>
    </div>
)

export default Dashboard;