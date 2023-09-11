import PropTypes from "prop-types";
import { BsBookmarkStarFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookMark, handleAddToMarkAsRead }) => {
  const {
    title,
    image,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-3 mr-4">
      <img className="w-full h-[450px] rounded-lg" src={image} alt="" />
      <div className="flex flex-col lg:flex-row justify-between mt-8">
        <div className="flex">
          <img
            className="w-[50px] h-[50px] rounded-full mr-6"
            src={author_img}
            alt=""
          />
          <div className="">
            <h3 className="font-bold">{author_name}</h3>
            <h5>{posted_date}</h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h3>
            {" "}
            <span>{reading_time}</span> min read
          </h3>
          <button onClick={() => handleAddToBookMark(blog)}>
            {" "}
            <BsBookmarkStarFill />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-4xl mt-4">{title}</h1>
      {hashtags.map((hash, indx) => (
        <span key={indx}>
          <a className="mr-2 text-gray-400" href="">
            {" "}
            {hash}
          </a>
        </span>
      ))}
      <br />
      <button
        onClick={() => handleAddToMarkAsRead(reading_time)}
        className="text-cyan-600 underline underline-offset-4 mb-6"
      >
        Mark as read
      </button>
      <hr className="mb-10" />
    </div>
  );
};





Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleAddToMarkAsRead: PropTypes.func.isRequired
};
export default Blog;
