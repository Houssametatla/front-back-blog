import React from "react";
import NavBar from "../component/NavBar";
import profile from "../assets/profile.png";
import { ThumbsUp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { BookmarkPlus } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { FileDown } from "lucide-react";
export default function BlogPost() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        className="post-content"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "70%",

            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "80px",
          }}
        >
          <div className="member">
            <p> 💫 Member-only story</p>
          </div>
          <div
            className="post"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <div className="post-title">
              <h2>
                Because of a Question about try... catch, i Failed my interview
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                gap: "15px",

                height: "40px",
                alignItems: "center",
              }}
            >
              <img
                src={profile}
                style={{
                  width: "38x",
                  height: "38px",
                  borderRadius: "50%",
                }}
              />
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <p>Olivier Foster</p>
                  <p style={{ color: "green" }}>Follow</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    color: "gray",
                  }}
                >
                  <p>Published in Stackademic</p>
                  <p> 3 min read</p>
                  <p>Feb 19,2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",

            height: "50px",
            marginTop: "60px",
            borderTop: "1px solid gray",
            borderBottom: "1px solid gray",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",

                gap: "7px",
              }}
            >
              <ThumbsUp
                style={{
                  width: "20px",
                }}
              />
              <p>1.5K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",

                gap: "7px",
              }}
            >
              <MessageCircle />
              <p>16</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <BookmarkPlus />
            <CirclePlay />
            <FileDown />
          </div>
        </div>
      </div>
    </div>
  );
}
