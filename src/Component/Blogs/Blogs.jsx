import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelBookMark,handelTime}) => {
    const [blogs ,setBlogs] =useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 ">
            <h1 className=" text-4xl my-10">Blogs:{blogs.length}</h1>
           <div className="my-10 ">
            {
                 blogs.map(blog => <Blog key ={blog.id} blog={blog} handelBookMark={handelBookMark} handelTime ={handelTime}></Blog>)
            }
            
           </div>
          
        </div>
    );
};

export default Blogs;