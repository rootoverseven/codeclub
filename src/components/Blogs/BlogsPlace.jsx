import React from 'react'
import { Redirect, useHistory } from 'react-router-dom';

export default function BlogsPlace(props) {
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
            title: props.totalBlogs.data.blogs[i].title,
            date: new Date(props.totalBlogs.data.blogs[i].published_on.toString()).toLocaleDateString(),
            publisher: props.totalBlogs.data.blogs[i].published_by.first_name,
            content: props.totalBlogs.data.blogs[i].blog_content.split(' ').slice(0, 5).join(' ') + "..."
        };

    }

    console.log(bArr);
    return (
        <div className="sign">

            {bArr.map((blog, index) => (
                <div key={index}>
                    <h3>{blog.title}</h3>
                    <p>{blog.date}</p>
                    <p>{blog.publisher}</p>
                    <p>{blog.content}</p>
                    <button id={index} onClick={readMore}>Read More</button>
                </div>
            ))}

        </div>
    )

}

//final