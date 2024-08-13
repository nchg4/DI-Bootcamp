import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import ReactionButton from './ReactionButton';

const PostList = () => {
    const dispatch = useDispatch();
    const postsFromStore = useSelector((state) => state.posts);
    const [posts, setPosts] = useState(postsFromStore); // Initialize posts from Redux store
    const [title, setTitle] = useState(''); // State for title input
    const [body, setBody] = useState(''); // State for body input

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        setPosts(postsFromStore); // Update local posts state when Redux store changes
    }, [postsFromStore]);

    const handlePostSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (title && body) {
            const newPost = {
                id: Date.now(), // Unique ID for each post
                title,
                body,
                userId: 1, // Example user ID
            };
            setPosts((prevPosts) => [...prevPosts, newPost]); // Add new post to the list
            setTitle(''); // Clear title input
            setBody(''); // Clear body input
        }
    };

    return (
        <div>
            <form onSubmit={handlePostSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Title" 
                    required 
                />
                <textarea 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)} 
                    placeholder="Body" 
                    required 
                />
                <button type="submit">Post</button>
            </form>

            {posts.map((post) => (
                <div key={post.id} style={{ border: '0.1rem solid white', padding: '0.5rem', margin: '0.5rem' }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    {/* <p>User ID: {post.userId}</p> */}
                    <ReactionButton /> {/* Add ReactionButton for each post */}
                </div>
            ))}
        </div>
    );
};

export default PostList;