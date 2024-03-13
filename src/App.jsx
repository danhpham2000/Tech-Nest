import NotFound from "./NotFound";
import NewBlog from "./components/Blog/NewBlog";
import BlogDetails from "./components/Blog/BlogDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/blogs/1" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
