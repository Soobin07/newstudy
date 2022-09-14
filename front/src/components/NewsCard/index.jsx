import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

export default function NewsCard({ news, stretch }) {
  return (
    <div className={`newscard-container ${stretch ? "stretch" : ""}`}>
      <div className="newscard-img-container">
        <img src={news.img} alt="" className="newscard-img" />
        <i
          className={`newscard-level ${
            news.level.includes("A")
              ? "Alv"
              : news.level.includes("B")
              ? "Blv"
              : "Clv"
          }`}
        >
          {news.level}
        </i>
      </div>
      <div className="newscard-contents-container">
        <h1 className="newscard-title">{news.title}</h1>
        <h3 className="newscard-body">{news.body}</h3>
        <div className="newscard-footer">
          <div className="newscard-category">
            <FontAwesomeIcon icon={faCircle} />
            {news.category}
          </div>
          <div className="newscard-footer-right">
            <i>{news.date}</i> <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
