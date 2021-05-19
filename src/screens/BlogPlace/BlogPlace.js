import React from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom';
import './style.scss'
import restapi from '../../assets/restapi.jpg'
import api2 from '../../assets/api2.jpeg'
import flask from '../../assets/flask.png'


export default function Blogs(props) {
    let bArr = [];
    let history = useHistory();


    function readMore(e) {

        console.log(e.target.id);
        sessionStorage.setItem("blogIndex", e.target.id);
        history.push(`/singleblog`);

    }



    console.log(props.totalBlogs.data.blogs[0].blog_content);

    for (let i = 0; i < props.totalBlogs.data.count; i++) {




        bArr[i] = {
            title: props.totalBlogs.data.blogs[i].title.split(' ').slice(0, 4).join(' ') + "...",
            date: new Date(props.totalBlogs.data.blogs[i].published_on.toString()).toLocaleDateString(),
            publisher: props.totalBlogs.data.blogs[i].published_by.first_name,
            content: props.totalBlogs.data.blogs[i].blog_content.split(' ').slice(0, 13).join(' ') + "...",
            image: props.totalBlogs.data.blogs[i].image
        };

    }
    //bArr[0].image=api2;
    //bArr[1].image=flask;


    console.log(bArr[0].image);

    return (
        <div className="blog_page">
            {JSON.parse(localStorage.getItem('auth'))?<Link to="/create" className="add_blog">Create new blog</Link>:<div></div>}
            
            <div className="blog_header">
                <img src={restapi} alt="none" />
                <div className="blog_info">
                    <div className="blog_title">{bArr[0].title}</div>
                    <div className="blog_creds">
                        <div className="publisher">{bArr[0].publisher}</div>
                        <div className="date">{bArr[0].date}</div>
                    </div>
                    <div className="blog_content" >
                        {bArr[0].content}
                    </div>
                    <div className="btn btn-read" id={0} onClick={readMore}>Read More</div>
                </div>
            </div>
            <div className="blog_items">
            {
                bArr.map((blog, index)=>{
                    return (
                        <div className="blog_item" key={index}>
                            <img src={flask} alt="" />
                            <div className="blog_content">
                                <div className="title">{blog.title}</div>
                                <div className="blog_creds">
                                    <div className="publisher">{blog.publisher}</div>
                                    <div className="date">{blog.date}</div>
                                </div>
                                <div className="blog_text">
                                    {blog.content}
                                </div>
                                <div className="btn btn-blog" id={index} onClick={readMore}>Read More</div>
                            </div>
                            
                        </div>
                    );
                })
            }

            </div>

        </div>
    )
}
