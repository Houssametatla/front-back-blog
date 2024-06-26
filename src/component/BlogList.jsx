import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  async function getAllBlogs() {
    const res = await axios.get("http://localhost:3000/blogs");
    setBlogs(res.data);
  }
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blogcourant, index) => {
        return (
          <div
            key={index}
            style={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>{blogcourant.title}</h1>
            <div>
              <p>{blogcourant.author}</p>
              <p>{blogcourant.time}</p>
              <p>{blogcourant.createdAt}</p>
            </div>
            <p>{blogcourant.content}</p>
            <div
              style={{
                width: "260px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <p>{blogcourant.likes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
