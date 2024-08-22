import React, { useState } from "react";
import Swal from "sweetalert2";
import "./addpost.css";

const AddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content && category) {
      try {
        await onAddPost({ title, content, category });
        Swal.fire({
          title: "Success!",
          text: "Post has been added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setTitle("");
        setContent("");
        setCategory("");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding the post.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        title: "Warning!",
        text: "Please fill in all fields.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="add-post-container">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title of the post......."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            placeholder="Content of the post......."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
