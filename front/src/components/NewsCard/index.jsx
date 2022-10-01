import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./style.scss";

export default function NewsCard({ news, stretch, query }) {
  return (
    <div className={`newscard-container ${stretch ? "stretch" : ""}`}>
      <div className="newscard-img-container">
        <img src={news.thumbnail} alt="" className="newscard-img" />
        <i
          // className={`newscard-level ${
          //   news.level.includes("A")
          //     ? "Alv"
          //     : news.level.includes("B")
          //     ? "Blv"
          //     : "Clv"
          // }`}
          className="newscard-level Alv"
        >
          {news.level}
        </i>
      </div>
      <div className="newscard-contents-container">
        {query ? (
          <h1 className="newscard-title">
            {news.title.includes(query) ? (
              <>
                {news.title.split(query)[0]}
                <b>{query}</b>
                {news.title.split(query)[1]}
              </>
            ) : (
              news.title
            )}
          </h1>
        ) : (
          <h1 className="newscard-title">{news.title}</h1>
        )}
        {query ? (
          <h3 className="newscard-body">
            {news.content.includes(query) ? (
              <>
                {news.content.split(query)[0]}
                <lb>{query}</lb>
                {news.content.split(query)[1]}
              </>
            ) : (
              news.content
            )}
          </h3>
        ) : (
          <h3 className="newscard-body">{news.content}</h3>
        )}
        <div className="newscard-footer">
          <div className="newscard-category">
            <FontAwesomeIcon icon={faCircle} />
            {news.c_id}
          </div>
          <div className="newscard-footer-right">
            <i>{news.date}</i> <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
