import "./styles.css";
import BlogData from "../../MockData/BlogData.json";
import BlogRightSection from "../BlogRightSection";

const BlogMain = () => {
  const { main_content, additional_content } = BlogData;
  const { title, subtitle, content_body, quote_line } = main_content;
  const { title: ad_title, post_list } = additional_content;

  console.log(BlogData);

  const renderAdditionalContent = () => {
    return (
      <div>
        <h2 className="line_title">{ad_title}</h2>
        {post_list.map((item, i) => {
          return (
            <div className="add_content-card">
              <img
                className="add_content-img"
                src={`${item.img_url}?random=${i}`}
                alt=""
              />
              <div className="add_content-card-detail">
                <h2 className="blueText">{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const renderMainContent = () => {
    return (
      <section className="main_content">
        <h1>{title}</h1>
        <p className="paddTop20 font20">{subtitle}</p>
        <aside id="main_quote">
          <p>"{quote_line.text}"</p>
          <cite style={{ float: "right" }}>- {quote_line.author}</cite>
        </aside>
        {content_body.map((item, i) => {
          return (
            <p key={`blog-item${i}`} className="paddTop20">
              {item}
            </p>
          );
        })}
      </section>
    );
  };
  return (
    <div className="blog_content">
      <div>
        {renderMainContent()}
        {renderAdditionalContent()}
      </div>
      <BlogRightSection />
    </div>
  );
};

export default BlogMain;
