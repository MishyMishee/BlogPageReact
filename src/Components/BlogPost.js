import BlogFooter from "./BlogFooter";
import BlogHead from "./BlogHead";
import BlogMain from "./BlogMain";
import "./BlogPost.css";
import BlogRelatedArticles from "./BlogRelatedArticles";

const BlogPost = () => {
  return (
    <div>
      <BlogHead />
      <BlogMain />
      <BlogRelatedArticles />
      <BlogFooter />
    </div>
  );
};
export default BlogPost;
