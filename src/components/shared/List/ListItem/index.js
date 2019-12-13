import React from 'react';
import githubCommits from '../../../../assets/icons/github_commit.jpg';
import { timestampToMomentAgo } from '../../../../utils/Time';

const ListItem = ({ author, date, message }) => {
    // TO DO: ErrorHandler component
    return (
        author && date && message && <div className="listItem">
            <div className="listItemLeft">
                <img src={githubCommits} className="listItemIcon" />
            </div>
            <div className="listItemCenter">
                <div className="listItemAuthor">{author}</div>
                <div className="listItemMessage">{message}</div>
            </div>
            <div className="listItemRight">{timestampToMomentAgo(date)}</div>
        </div>
    )
};

export default ListItem;
