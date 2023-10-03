import React, { useEffect, useState } from "react";
import Sidebar from "../../SideBar/Sidebar";

const Post = () => {
  const[posts, setposts]=useState([])

  return (
    <div>
      <Sidebar />
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">POSTS</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
