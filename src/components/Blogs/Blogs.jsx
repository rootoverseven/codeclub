import React, { useState } from 'react'
import BlogsPlace from './BlogsPlace'
import BlogPlace from '../../screens/BlogPlace/BlogPlace'

export default function Blogs() {
    let resp = 1;

    const axios = require('axios');
    let [totalBlogs, setTotalBlogs] = useState(JSON.parse(sessionStorage.getItem('blogs')));

    async function getBlogs() {

        const blogLink = "https://tintcodingclub.herokuapp.com/blogs/blog-list/";
        resp = await axios.get(blogLink);
        sessionStorage.setItem("blogs", JSON.stringify(resp));

        setTotalBlogs(JSON.parse(sessionStorage.getItem('blogs')));

    }

    if (!totalBlogs) {
        getBlogs();
        return (
            <div className="sign">
                <h1>Getting blogs</h1>

            </div>
        )
    } else {
        return (
            <div>
                <BlogPlace totalBlogs={totalBlogs} />
            </div>
        )
    }

}


//final