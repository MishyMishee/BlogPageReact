import "./styles.css";

const BlogHead = () => {
  return (
    <div>
      <header className="blog_header">
        <div className="blog_logo">
          <p>OYODO</p>
        </div>
        <nav className="blog_nav">
          <p>MAIN</p>
          <p>RELATED ARTICLES</p>
          <p>CONTACT US</p>
        </nav>
      </header>
      <section className="blog_banner">
        <span className="blog_banner-content">
          Hello there! Welcome to my blog. I implore you have look around and
          see what you like. If you see something that I should improve or
          change, please let me know.
        </span>
      </section>
    </div>
  );
};
export default BlogHead;
