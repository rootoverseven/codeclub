import React from 'react'
import './style.scss'
//import {blogs} from '../../assets/assets'
//import img from '../../assets/abc.jpg'
import img2 from '../../assets/JpgBack.jpg'
import api2 from '../../assets/api2.jpeg'
import flask from '../../assets/flask.png'

export default function Blog(props) {
    let blogIndex = sessionStorage.getItem('blogIndex');
    //let blogIndex = 1;
    let totalBlogs=JSON.parse(sessionStorage.getItem('blogs'))
    let img=null;

    if(parseInt(blogIndex)===1)
    {
        img=flask;
    }else
    {
        img=api2;
    }

    let blog = {
        title: totalBlogs.data.blogs[blogIndex].title,
        date: new Date(totalBlogs.data.blogs[blogIndex].published_on.toString()).toLocaleDateString(),
        publisher: totalBlogs.data.blogs[blogIndex].published_by.first_name,
        content: totalBlogs.data.blogs[blogIndex].blog_content,
        image: totalBlogs.data.blogs[blogIndex].image
    }

    return (
        <div className="blog">
            {/* <img src={img} className="backImage" alt="" /> */}
            <img src={img2} className="backImage" alt="" />
            <div className="blog_head">
                <img src={api2} alt="" />
                <div className="blog_head_content">
                    <div className="blog_title">{blog.title}</div>
                    <div className="blog_creds">
                        <div className="publisher">{blog.publisher}</div>
                        <div className="date">{blog.date}</div>
                    </div>
                    <div className="blog_content">
                    {blog.content}
                    
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
