import React from 'react';
import img from '../images/blogPhoto/BlogImage.png'
import '../styles/blog.css'


const Blog = ({props}) => {
 // let a = `../images/blogPhoto/${props.photo}`
 //    console.log(a);

    return (
        <div className="blog">
            <div className="blog-photo" style={{backgroundImage: `url(${img})`}}></div>
            <div className="blog-date">{props.publicationDate}</div>
            <div className="blog-header">
                {props.header}
            </div>
            <div className="blog-description">
                {props.description}
            </div>
        </div>
    );
};

export default Blog;