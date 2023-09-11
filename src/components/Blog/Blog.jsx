import PropTypes from "prop-types";
import { BsBookmarkStarFill } from "react-icons/bs";

const Blog = ({blog}) => {
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
      <div className="flex justify-between mt-8">
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
          <button>
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
      <p className="text-cyan-600 underline underline-offset-4 mb-6">Mark as read</p>
      <hr className="mb-10" />
    </div>
  );
};





Blog.propTypes = {
  blog: PropTypes.object.isRequired
};
export default Blog;
