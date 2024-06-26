import React from "react";
import { useState } from "react";
import { Axios } from "axios";

export default function AddBlog() {
  const [titleState, settitlestate] = useState("");
  const [contentState, setcontentstate] = useState("");
  const [authorState, setauthorstate] = useState("");
  const [likesState, setlikesstate] = useState(0);
  const [timeState, settimestate] = useState(0);

  async function addNewBlogs() {
    const res = await axios.post("http://localhost:3000/blog", {
      title: titleState,
      content: contentState,
      author: authorState,
      likes: likesState,
      time: timeState,
    });
    console.log(res);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <input
        type="text"
        placeholder="title"
        onChange={(e) => settitlestate(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        onChange={(e) => setcontentstate(e.target.value)}
      />
      <input
        type="text"
        placeholder="author"
        onChange={(e) => setauthorstate(e.target.value)}
      />
      <input
        type="text"
        placeholder="likes"
        onChange={(e) => setlikesstate(e.target.value)}
      />
      <input
        type="text"
        placeholder="time"
        onChange={(e) => settimestate(e.target.value)}
      />
      <button onClick={addNewBlogs}>click to add</button>
    </div>
  );
}
