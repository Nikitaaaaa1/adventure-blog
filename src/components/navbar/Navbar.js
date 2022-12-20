import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    const btn = [{path: "/", name:"Home", key:'1'},
        {path: "/about", name:"About", key: '2'},
        // {path: "/create", name:"Create", key: '3'}
    ]
    const [select, setSelect] = useState("/")

    return (
        <nav className="navbar">
            <Link to='/'>
                <div className='logo'>
                    PROJ
                </div>
            </Link>
            <div className="menu">
                {btn.map((p) =>

                    <Link to={p.path} className="link" key={p.key}>
                        <div>
                            <div id={p.path}
                                 className={(p.path === select) ? ['btn','active'].join(' ') : 'btn'}
                                 onClick={() => {
                                     setSelect(p.path)
                                     console.log(select)
                                 }}
                            >
                                {p.name}
                            </div>
                        </div>
                    </Link>)}
            </div>
        </nav>
    );
};

export default Navbar;