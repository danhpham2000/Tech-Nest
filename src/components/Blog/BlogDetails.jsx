import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return <h1>Blog Details - {id}</h1>;
};

export default BlogDetails;
