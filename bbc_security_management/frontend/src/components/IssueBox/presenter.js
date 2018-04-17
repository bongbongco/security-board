import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from "react-ionicons";
import styles from './styles.scss';
import CommentBox from 'components/CommentBox';


const IssueBox = props => (
    <div>
        <CommentBox issueId={props.id} />
  </div>
);

IssueBox.propTypes = {
    id: PropTypes.number.isRequired,
    issue: PropTypes.string.isRequired,
    business_status: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired
        })
    )
};

export default IssueBox;