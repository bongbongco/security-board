import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from "react-ionicons";
import styles from './styles.scss';
import IssueBox from 'components/IssueBox';
import IssueComment from 'components/IssueComment';
import IssueCommentBox from 'components/IssueCommentBox';
import TimeStamp from 'components/TimeStamp';

const FeedReport = props => (
    <div className={styles.feedReport}>
        <header className={styles.header}>
            <Ionicon icon="ios-paper-outline" fontSize="32px" color="black" />
            <div className={styles.headerColumn}>
                <span className={styles.businessCode}>{props.business_code.business_code}</span>
                <span className={styles.projectCount}>누적 프로젝트 수  : {props.business_code.project_count}</span>
            </div>
        </header>
        <div className={styles.meta}>
            <div className={styles.status}>
                <span className={styles.issue}>
                    주요 이슈 : {props.issue}
                </span>
                <span className={styles.businessStatus}>
                    취약점 현황 : {props.business_status}
                </span>
                <img
                    src={require('images/chartImage.jpg')} 
                    alt='test image' 
                />
                <IssueComment 
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments} 
                />
                <TimeStamp time={props.natural_time} />
                <IssueCommentBox issueId={props.id} />
            </div>
        </div>
    </div>
)
/*
const RenderIssue = props => (
  <div className={styles.meta}>
    {props.issues.map(issue => <IssueBox {...issue} key={issue.id} />)}
  </div>
);
*/
FeedReport.propTypes = {
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    creator: PropTypes.shape({
        username: PropTypes.string.isRequired

    }),
    business_code: PropTypes.shape({
        id: PropTypes.number.isRequired,
        business_code: PropTypes.string.isRequired,
        project_count: PropTypes.number.isRequired,
        projects: PropTypes.array,
    }),
    issue: PropTypes.string.isRequired,
    business_status: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    comments: PropTypes.array
}

export default FeedReport;