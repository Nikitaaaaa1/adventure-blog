import React from 'react';
import {useParams} from "react-router-dom";
import  './item-style.css'
import bg from '../pages/Home/images/ItemPhoto.png'
import Error from "../pages/error/Error";
import EditorsPick from "../pages/Home/styles/EditorsPick/EditorsPick";
import Footer from "../components/Footer";

const Item = ({props}) => {
    const {header} = useParams()
    return (
            <>
                <div className="item-header" style={{backgroundImage:`url('${bg}')` }}>
                    <div className='item-header-cont'>

                        <div className='item-header-header'>
                            {props[0].header}
                        </div>
                        <div className='item-header-description'>
                            {props[0].description}
                        </div>
                        <div className="item-header-author">
                            {props[0].author}
                        </div>
                    </div>
                </div>
                <div className="item-main">
                    <div className="information-about">
                        <div className='item-div-date'>
                            {props[0].publicationDate}
                        </div>

                    </div>
                    <div className="main-text">
                        {props[0].data}
                    </div>
                    <div className="empty"></div>
                </div>
                <div style={{padding:'100px 0', backgroundColor:'#E5E5E5'}}>
                    <EditorsPick/>
                </div>
                <Footer/>
            </>
    );
};

export default Item;