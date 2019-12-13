import React, { Fragment } from 'react';
import ListItem from './ListItem/index';
import './styles.css';

/**
 * React component function for List.
 * @type {Function<Object>}
 * @param {Array} commits The Array of the commit items.
 */
const List = ({ commits }) => (
    commits && commits.length ? <div className="listContainer">
        {
            commits.map((item, i) => <Fragment key={i + '-' + item.sha}>
                <ListItem
                    author={item.commit.committer.name}
                    date={item.commit.committer.date}
                    message={item.commit.message}
                    url={item.commit.url}
                />
                <hr style={{ margin: '20px 10px 30px 51px', border: '0.5px solid #DADADA' }}></hr>
            </Fragment>)
        }
    </div> : null
)

export default List;
