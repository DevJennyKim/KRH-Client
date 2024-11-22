import React from "react";
import "./Posts.scss";

function Posts({ posts }) {
  return (
    <div className="post">
      {posts.map((post, index) => (
        <div className="post__card" key={index}>
          <div className="post__user">
            <div className="post__user-icon"></div>
          </div>

          <div className="post__main-content">
            <div className="post__top-banner">
              <div className="post__top-banner-left">
                <p className="post__author">{post.author}</p>
                <p className="post__date">{post.date}</p>
              </div>
              <img
                src="public/icons/three-dots.svg"
                alt="three-dots"
                className="post__three-dots-icon"
              />
            </div>

            <div className="post__content">
              <p className="post__content-text">{post.content}</p>
            </div>
            <div className="post__image">
              {post.image && <img
                className="post__image-image"
                src={post.image}
                alt={post.author}
              />}
              {/* <img src={post.image || "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"} alt={post.title} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
