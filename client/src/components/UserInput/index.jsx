import React from 'react';

import './index.css';

const UserInput = () => {
    return (
        <div className="user-input">
            <form action="#" className="user-input-form">
                <label className="user-input-displayname">
                    <span className="user-input-displayname-username">root</span>
                    @vfodor.de > 
                </label>
                <input type="text" name="input" className="user-input-inputfield" />
                <button type="submit" hidden="true"></button>
            </form>
        </div>
    )
}

export default UserInput;