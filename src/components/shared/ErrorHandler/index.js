import React from 'react';
import './styles.css';

/**
 * React component function for displaying errors.
 * @param {string} errorSource The name of the component that threw the error.
 */
const ErrorHandler = ({ data, errorSource, errorProps }) => {
    const error = (data && data.error) || 'NA';
    console.error(
        errorSource,
        'threw the following error:',
        error,
        ' With the following error props:',
        errorProps,
    );

    // Should add a check to show an error component only if in development
    return (
        <div className="container">
            <div>{JSON.stringify(errorSource)} threw the following error:</div>
            <div>{JSON.stringify(error)} With the following error props:</div>
            <div>{JSON.stringify(errorProps)}</div>
        </div>
    );
}

export default ErrorHandler;