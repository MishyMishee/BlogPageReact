import "./styles.css";
import BlogData from "../../MockData/BlogData.json";

const BlogRelatedArticles = () => {
  const { related_articles } = BlogData;
  const { title, articles_list } = related_articles;

  const renderRelatedArticles = () => {
    return (
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <h2 className="line_title">{title}</h2>
        <div className="rel_articles">
          {articles_list.map((item, i) => {
            return (
              <div className="rel_articles-card">
                <img
                  className="rel_articles-img"
                  src={`${item.img_url}?random=${i}`}
                  alt=""
                />
                <div className="rel_articles-card-detail">
                  <h2 className="blueText">{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="related_articles-content">{renderRelatedArticles()}</div>
  );
};

export default BlogRelatedArticles;
