import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddPost from "./Components/AddPost/AddPost";
import PostList from "./Components/PostList/PostList";
import Navbar from "./Components/Navbar/Navbar";
import PostEditModal from "./Components/PostEditModal/PostEditModal";
import ContactUs from "./Components/Contact/ContactUs";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handleAddPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setEditingPost(null);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addpost"
          element={<AddPost onAddPost={handleAddPost} />}
        />
        <Route
          path="/postlist"
          element={
            <PostList
              posts={posts}
              onUpdatePost={(post) => setEditingPost(post)}
              onDeletePost={handleDeletePost}
            />
          }
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {editingPost && (
        <PostEditModal
          post={editingPost}
          onSave={handleUpdatePost}
          onClose={() => setEditingPost(null)}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
