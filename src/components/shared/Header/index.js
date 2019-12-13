import React from 'react';
import { Link } from 'react-router-dom';
import github_logo from '../../../assets/icons/github_logo.png';
import './styles.css';

/**
 * React component function for Header.
 * @type {Function<Object>}
 * @param {Object} The react-router the history object.
 */
const Header = props => {
    const {
        location: {
            pathname
        }
    } = props;
    
    // if path is root, display "Github Repos<br></br>Top 100 Stars"
    // else if path is commits, display "[REPO] commits in the last 24 hours"
    const renderTitle = () => {
        if (pathname === '/') {
            return <div className="headerTitle">Github Repos<br></br>Top 100 Stars</div>;
        } else if (pathname.includes('commits')) {
            return <div className="headerTitle"><Link to="_blank" className="headerLink">{pathname.split('/').slice(-1)[0]}</Link> commits in the last 24 hours</div>;
        }
    }

    return (
        <header className="headerContainer">
            <img src={github_logo} className="headerIcon" />
            {renderTitle()}
        </header>
    )
};

export default Header;
