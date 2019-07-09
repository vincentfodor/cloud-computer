import React from 'react';

import './index.css';

const Log = ({ log }) => {
    const renderLog = log.map((entry, index) => (
        <p key={index} className="log-entry">
            <span className="log-entry-reference">
                <span className="log-entry-reference-displayname">{ entry.user }@{ entry.host } > </span>
                { entry.command }
            </span>
            <span className="log-entry-response">{ entry.response }</span>
        </p>
    ));
    
    return (
        <div className="log">
            { renderLog }
        </div>
    )
}

export default Log;