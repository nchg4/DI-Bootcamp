import React from 'react';
import postData from '../info.json';

const PostList = () => {
  return (
    <div>
      <h2>Post List</h2>
      {postData.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
