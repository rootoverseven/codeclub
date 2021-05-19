import React from 'react'

export default function SingleBlog() {
    let blogIndex = sessionStorage.getItem('blogIndex');
    //let blogIndex = 1;
    let totalBlogs=JSON.parse(sessionStorage.getItem('blogs'))

    let blog = {
        title: totalBlogs.data.blogs[blogIndex].title,
        date: new Date(totalBlogs.data.blogs[blogIndex].published_on.toString()).toLocaleDateString(),
        publisher: totalBlogs.data.blogs[blogIndex].published_by.first_name,
        content: totalBlogs.data.blogs[blogIndex].blog_content
    }


    return (
        <div className="sign">
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
            <p>{blog.publisher}</p>
            <p>{blog.content}</p>

        </div>
    )
}
