import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./postlist.css";
import Swal from "sweetalert2";

const PostList = ({ posts = [], onUpdatePost, onDeletePost }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    const lowercasedSearch = debouncedSearch.toLowerCase();
    const result = posts.filter(
      (post) =>
        (post.title.toLowerCase().includes(lowercasedSearch) ||
          post.content.toLowerCase().includes(lowercasedSearch)) &&
        (filter === "" || post.category === filter)
    );
    setFilteredPosts(result);
  }, [debouncedSearch, filter, posts]);

  const handleDelete = (postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDeletePost(postId);
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="post-list-container">
        <h2 className="mb-4">Post List</h2>
        <div className="search-container mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="form-select mt-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
          </select>
        </div>
      </div>
      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div className="post-card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>
                <small className="text-muted">Category: {post.category}</small>
              </p>
              <div className="post-actions">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => onUpdatePost(post)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No posts found</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
