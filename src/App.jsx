import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/BookMarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {

const  [bookmarks ,setBookmarks]= useState([])
const [readingTime , setReadingTime] =useState(0);

const handelBookMark =(blog)=>{
  const newBookMarks = [...bookmarks , blog];
  setBookmarks(newBookMarks)
}

const handelTime =(id,time) =>{
  const {reading_time_minutes}=time
  const newTime = readingTime + reading_time_minutes;
  setReadingTime(newTime);
  const removeBookMark =bookmarks.filter(bookmark => bookmark.id !==id);
  setBookmarks(removeBookMark);
}



  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto gap-10'>
        <Blogs handelBookMark={handelBookMark} handelTime={handelTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
