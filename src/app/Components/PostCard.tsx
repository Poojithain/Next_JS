import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
  onSave: () => void;
  onUnsave: () => void;
  isSaved: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, onSave, onUnsave, isSaved }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {isSaved ? (
        <button onClick={onUnsave}>Unsave</button>
      ) : (
        <button onClick={onSave}>Save</button>
      )}
    </div>
  );
};

export default PostCard;
