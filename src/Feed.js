import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "./firebase";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
      }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
    {/* Tweet box*/}
    <TweetBox/>

    {/* posts*/}
    <FlipMove>
    {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
    </FlipMove>


    </div>
  );
}

export default Feed;