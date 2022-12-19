import React, {useEffect, useState} from 'react';

const About = () => {

    const [arr, setArr] = useState([])
    const [count, setCount] = useState(0)

    function List ({data=[], renderEmpty}) {
        if(!data.length) return renderEmpty
        data.map(p => <div>{p}</div>)
    }
    return (
        <section>
        <List data={arr} renderEmpty={<p>Data list are empty</p>}/>
        </section>
    );
};

export default About;