
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {


  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header></Header>
      </div>
      <div className='max-w-screen-xl mx-auto px-10 py-5'>
        <div className="flex">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App
