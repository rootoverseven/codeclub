import React from 'react'
import "./style.scss"

export default function CreateBlog() {
    return (
        <div className="create_blog">
            <form className="form_create">
                <input type="text" placeholder="Title" id="title" name="title" className="blog_element"
                />
                <input type="text" placeholder="Tags" id="tags" name="tags" className="blog_element"
                />
                <div>
                    <label for="imageUpload">Choose cover image for your blog.</label>
                    <br/><br/>
                    <input type="file" name="imageUpload" id="imageUpload" />
                </div>
                <input type="text" placeholder="Category" id="category" name="category" className="blog_element"
                />
                <textarea placeholder="Enter your blog content" id="content" name="content" className="blog_element blog_content" 
                ></textarea>
            </form>
        </div>
    )
}
