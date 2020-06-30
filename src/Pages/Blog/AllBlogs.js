import React,{useState,useEffect} from 'react'
import BlogCard from './BlogCard'
import {getBlogs} from '../../Api'


export default function AllBlogs() {

    const [loading, setloading] = useState(true)
    const [data, setdata] = useState([])

    const fetchBlogs=()=>{
        getBlogs()
        .then(res=>{
            if(res.success){
                setdata(res.blogs)
            }
        })
        .catch(error=>console.log(error))
        .finally(()=>setloading(false))
    }

    useEffect(()=>{
        fetchBlogs()
    },[])


    return (
        <div className="pt-5">
            <div className="container">
                <div className="container text-center">
                <h1>All Blogs</h1>
                </div>
                {loading  ? (
                    <div className="row mt-5 text-center align-content-center d-flex justify-content-center">
                                               <div className="spinner-grow text-primary" style={{height:"100px",width:"100px" }} role="status">
                       <span className="sr-only">Loading...</span>
                        </div> 
                    </div>
                ):(
<div className="row">
                    
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>

                </div>
                )}
                
            </div>
        </div>
    )
}
