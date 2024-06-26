import React from "react";
import { Timer } from "lucide-react";
import { Heart } from "lucide-react";
import image from "../assets/image.png";
import profile from "../assets/profile.png";

export default function BlogItem({ blog }) {
  return (
    <div className="cont">
      <div className="data">
        <div>
          <div className="title">
            <img
              src={profile}
              style={{
                width: "30px",
                borderRadius: "50%",
              }}
            />
            <p>{blog.author}</p>

            <p
              style={{
                color: "gray",
              }}
            >
              {`${new Date(blog.createdAt).getFullYear()} - ${new Date(
                blog.createdAt
              ).getMonth()} - ${new Date(blog.createdAt).getDate()}`}
            </p>
          </div>
          <div className="content-image">
            <div
              className="content"
              style={{
                width: "70%",
                paddingRight: "30px",
                display: "flex",
                flexDirection: "column",
                paddingTop: "20px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                {blog.title}
              </p>
              <p className="paragraph">{blog.content}</p>
            </div>
            <div
              className="image"
              style={{
                paddingTop: "50px",
              }}
            >
              <img src={image} />
            </div>
          </div>
          <div
            className="timer-likes"
            style={{
              width: "500px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="timer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Timer
                style={{
                  width: "20px",
                }}
              />
              <p style={{ paddingTop: "2px", color: "gray" }}>
                {blog.time} min read
              </p>
            </div>

            <div
              className="likes"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Heart
                style={{
                  width: "20px",
                }}
              />
              <p style={{ paddingTop: "2px", color: "gray" }}>{blog.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
