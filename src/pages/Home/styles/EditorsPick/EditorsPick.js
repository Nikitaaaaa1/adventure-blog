import React from 'react';
import epPhoto from "../../images/ep-photo.png";
import EPItem from "./EPItem";

const EditorsPick = () => {
    return (
        <div className="editors-picks">
            <div className="ep-header">
                Editor`s Pick
            </div>
            <div className="ep-items">
                <EPItem/>
                <EPItem/>
                <EPItem/>
            </div>

        </div>
    );
};

export default EditorsPick;