import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      {showCourses && (
        <div className="box">
          <CourseDetails />
        </div>
      )}

      {showBooks && (
        <div className="box">
          <BookDetails />
        </div>
      )}

      {showBlogs && (
        <div className="box">
          <BlogDetails />
        </div>
      )}

    </div>

  );

}

export default App;