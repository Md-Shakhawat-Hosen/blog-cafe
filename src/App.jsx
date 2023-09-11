
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const [marksAsRead, setMarkAsRead] = useState(0);

  const handleAddToBookMark = (blog) => {
    // console.log('clicked bookmark');
    const newBlog = [...bookMarks, blog]
    setBookMarks(newBlog)

    // console.log(bookMarks)

  }
  
  const handleAddToMarkAsRead = (reading_time,id) => {
        //  console.log('clicked',reading_time)
        //  const newReadTime = [...marksAsRead,reading_time]
        //  setMarkAsRead(newReadTime)
        setMarkAsRead(marksAsRead+reading_time)

        const remainingBookMarks = bookMarks.filter(bookmark => bookmark.id !== id);
        setBookMarks(remainingBookMarks)
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header></Header>
      </div>
      <div className="max-w-screen-xl mx-auto px-10 py-5">
        <div className="flex">
          <Blogs
            handleAddToBookMark={handleAddToBookMark}
            handleAddToMarkAsRead={handleAddToMarkAsRead}
          ></Blogs>
          <Bookmarks bookMarks={bookMarks} marksAsRead={marksAsRead}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App
