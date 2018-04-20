import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import styles from './styles.scss';

const Dlp = props => {
    return <DlpContent />;
};

const DlpContent = props => (
    <div className={styles.dlp}>
        <Iframe url="http://192.168.31.248:5601/app/kibana#/dashboard/5c7cfeb0-41e2-11e8-a116-6dc224b57596?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-2y,mode:quick,to:now))&_a=(description:'UI%20TEST%20Dashboard',filters:!(),fullScreenMode:!t,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((gridData:(h:3,i:'1',w:6,x:0,y:0),id:'9760fbd0-41e2-11e8-a116-6dc224b57596',panelIndex:'1',type:visualization,version:'6.2.3'),(gridData:(h:3,i:'2',w:6,x:6,y:0),id:dc55e070-41e2-11e8-a116-6dc224b57596,panelIndex:'2',type:visualization,version:'6.2.3'),(gridData:(h:2,i:'3',w:12,x:0,y:3),id:'130c6080-41e3-11e8-a116-6dc224b57596',panelIndex:'3',type:visualization,version:'6.2.3')),query:(language:lucene,query:''),timeRestore:!f,title:'TEST%20Dashboard',viewMode:view)"
            position="relative"
            width="100%"
            height="100%"
            allowFullScreen
        /> 
    </div>
);

Dlp.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Dlp;