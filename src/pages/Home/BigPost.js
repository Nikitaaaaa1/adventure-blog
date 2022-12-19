import React from 'react';
import imgBp from "./images/Image-bp.png";

const BigPost = () => {
    return (
        <div className="big-post" style={{backgroundImage:`url(${imgBp})`}}>
            <div className="shadow">
                <div className="bp-cont" >
                    <div className="bp-header">
                        Richird Norton photorealistic rendering as real photos
                    </div>
                    <div className="bp-description">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </div>
                    <div className="hr bp"></div>
                    <div className="bp-date">
                        08.08.2021
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigPost;