import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./posteditmodal.css";
import PropTypes from "prop-types";

const PostEditModal = ({ post, onSave, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [category, setCategory] = useState(post.category);

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
    setCategory(post.category);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Changes",
      text: "Are you sure you want to save these changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, save it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        onSave({ ...post, title, content, category });
        Swal.fire("Saved!", "Your changes have been saved.", "success");
        onClose();
      }
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

PostEditModal.propTypes = {
  post: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PostEditModal;
