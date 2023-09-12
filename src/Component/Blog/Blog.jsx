import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handelBookMark,handelTime }) => {
    const {title,cover_image,other_images,reading_time_minutes,author,post_date,hashtags,id}=blog ;
    return (
        <div className='bg-gray-200 rounded-lg p-6 my-10'>  
            <img className='rounded-lg w-full' src={cover_image} alt="All Image HEre" />
            <div className='flex justify-between items-center '>
                <div className='flex justify-center items-center gap-4'>
                    <img className='w-[60px]' src={other_images} alt="Hello Pic" />
                    <div className='my-5'>
                        <h2>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h3>{reading_time_minutes} min Read</h3>
                    <button onClick={()=>handelBookMark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <div>
                {
                    hashtags.map((hash,idx) =><span key={idx}><a href="">#{hash }</a></span>)
                }
            </div>
            <button onClick={()=>handelTime(id,blog)} className='text-purple-600 font-semibold underline'>Read Time</button>
        </div>
    );
};
Blog.PropTypes ={
    blogs : PropTypes.object.isRequired
}
export default Blog;