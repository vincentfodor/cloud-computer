import React from 'react';

import './index.css';

const UserInput = ({ addEntryToLog }) => {
    const handleSubmitCommand = e => {
        e.preventDefault();

        addEntryToLog(e.target.command.value);
    }

    return (
        <div className="user-input">
            <form action="#" className="user-input-form" onSubmit={handleSubmitCommand}>
                <label className="user-input-displayname">
                    <span className="user-input-displayname-username">root</span>
                    @vfodor.de > 
                </label>
                <input type="text" name="command" className="user-input-inputfield" />
                <button type="submit" hidden={true}></button>
            </form>
        </div>
    )
}

export default UserInput;