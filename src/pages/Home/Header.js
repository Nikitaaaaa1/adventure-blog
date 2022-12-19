import React from 'react';
import { useNavigate} from "react-router-dom";

const Header = ({props}) => {

    // let navigateName = props[0].header.replaceAll(' ', '_')
    return (
        <div className="header">
            <div className="header-description">
                <div className="header-text">
                    {props[0].header}
                </div>
                <div className="description">
                    <div className="date">{props[0].publicationDate}</div>
                    <div className="hr"></div>
                    <div className="description-text">
                        {props[0].description}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;