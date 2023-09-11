
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMark = (blog) => {
    // console.log('clicked bookmark');
    const newBlog = [...bookMarks, blog]
    setBookMarks(newBlog)

    // console.log(bookMarks)

  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header></Header>
      </div>
      <div className="max-w-screen-xl mx-auto px-10 py-5">
        <div className="flex">
          <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
          <Bookmarks bookMarks={bookMarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App
