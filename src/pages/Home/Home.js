import React, {useState} from 'react';
import '../../components/navbar/navbar.css'
import './styles/last-update.css'
import './styles/header.css'
import './styles/blog.css'
import './styles/big-post.css'
import './styles/EditorsPick/EditorsPicks.css'
import epPhoto from './images/ep-photo.png'


import Header from "./Header";
import Blog from "./blogs/Blog";
import BigPost from "./BigPost";
import EditorsPick from "./styles/EditorsPick/EditorsPick";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer";


const Home = ({items, setItems}) => {
    const arr = items.filter(m => !m.data.length)

    console.log(arr);
    return (
        <section>
            <Link to={`/item/${items[0].header.replaceAll(' ','_')}`} style={{textDecoration:'none'}}>
                <Header props={items} />
            </Link>
            <div className='last-topics'>
                <div className="last-topics-text">
                    Last Topics
                </div>
                <div className="blogs">
                    {arr.map(p => <Blog props={p}/>)}

                </div>
            </div>
            <BigPost/>
            <div style={{margin:' 150px 0'}}>
                <EditorsPick/>
            </div>

            <Footer/>

        </section>


    )
};

export default Home;