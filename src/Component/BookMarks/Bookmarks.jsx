import Bookmark from "../BookMark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
            <div className="md:w-1/3">
            <h3 className="text-center font-bold text-3xl border-4 bg-slate-200 p-5 rounded-xl mt-4">Total Time: <span className="text-indigo-700">{readingTime}</span></h3> 
            
            <div className=" rounded-lg bg-gray-400 h-[98.2%] ">
            <h2 className="text-3xl text-center pt-10 mt-5 text-white ">Book Marks:{bookmarks.length} </h2>
            {
                bookmarks.map(bookmarks => <Bookmark key={bookmarks.id} bookmark={ bookmarks}></Bookmark>)
            }
            </div>
            </div>
      
    );
};

export default Bookmarks;