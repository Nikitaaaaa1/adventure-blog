import React from 'react';
import epPhoto from "../../images/ep-photo.png";

const EpItem = () => {
    return (
        <>
        <div className="ep-title" style={{backgroundImage:`url(${epPhoto})`}}>
            <div className="shadow ep">
                <div className="epcont">
                    <div className="ep-date">
                        08.08.2021
                    </div>
                    <div className="ep-headerI">
                        Richird Norton photorealistic rendering as real photos
                    </div>
                    <div className="ep-description">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default EpItem;