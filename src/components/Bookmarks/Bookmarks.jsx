import PropTypes from "prop-types";

const Bookmarks = ({ bookMarks, marksAsRead }) => {
  // console.log(bookMarks)
//   let s = 0;
//   for (let time of marksAsRead) {
//      s = s + parseInt(time)
//   }
  return (
    <div>
      <h1 className="font-bold bg-cyan-200 p-4 rounded-lg mb-4 mt-5 text-center">
        Spent time on read : {marksAsRead} min
      </h1>
      <div className="bg-slate-400 rounded-lg p-2">
        <h1 className="font-bold mb-4">Bookmarked Blogs: {bookMarks.length}</h1>
        {bookMarks.map((s,indx) => (
          <div className="bg-cyan-100 p-4 mb-3 rounded-lg" key={indx}>
            {s.title}
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    marksAsRead: PropTypes.number.isRequired
}
export default Bookmarks;
