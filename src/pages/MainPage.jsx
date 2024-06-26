import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import LogoComponent from "../component/logoComponent";
import { MessageCircleMore } from "lucide-react";
import { Bell } from "lucide-react";
import BlogItem from "../component/blogItem";
import profile from "../assets/profile.png";
import { X } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const blog = {
  title: "test",
  content: "test",
  author: "test",
  date: "12/02/2022",
  likes: 20,
  time: 5,
};

export default function MainPage() {
  const [blogList, setBlogList] = useState([]);
  async function getAllBlogs() {
    const blogLista = await axios.get("http://localhost:3000/blogs");

    setBlogList(blogLista.data);
  }
  useEffect(() => {
    getAllBlogs();
  }, []);

  console.log(getAllBlogs());
  return (
    <div>
      <div className="nav-main">
        <div className="nav-left">
          <LogoComponent />
        </div>
        <div className="nav-right">
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <MessageCircleMore />
            <p
              style={{
                fontSize: "19px",
              }}
            >
              Write
            </p>
          </div>
          <Bell />
          <img
            src={profile}
            style={{
              width: "30px",
              borderRadius: "50%",
            }}
          ></img>
        </div>
      </div>
      <div className="container-main">
        <div className="star">
          <div className="fst">
            <p>
              ✨ Get unlimited access to the best of Medium for less than
              $1/week.
            </p>
            <a
              style={{ color: "black", textDecoration: "underline" }}
              href="/login"
            >
              Become a member
            </a>
          </div>
          <div className="scnd">
            <X />
          </div>
        </div>
        <div className="info">
          <div>
            <Plus />
          </div>
          <div className="li-pages">
            <li>
              <a href="*">For you</a>
              <a href="*">Following</a>
              <a href="*">Web Development</a>
              <a href="*">Programming</a>
              <a href="*">Data science</a>
            </li>
          </div>
        </div>
        <div className="b-l-container">
          {blogList.map((blog, i) => {
            return <BlogItem blog={blog} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
