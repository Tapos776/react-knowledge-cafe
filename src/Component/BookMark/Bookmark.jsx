const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="bg-gray-200 p-10 mx-10  my-5 rounded-lg text-2xl font-normal shadow-xl">
            <h3  >{title}</h3>
        </div>
    );
};

export default Bookmark;