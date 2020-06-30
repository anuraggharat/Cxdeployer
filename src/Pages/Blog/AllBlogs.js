import React from 'react'
import BlogCard from './BlogCard'

export default function AllBlogs() {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="container text-center">
                <h1>All Blogs</h1>
                </div>
                <div className="row">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>

                </div>
            </div>
        </div>
    )
}
