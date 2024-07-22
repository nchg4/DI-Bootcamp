const db = require('../config/db.js');



// Return a list of all blog posts.
const getAllPosts = async () => {
    return await db('posts');
};

// Return a specific blog post based on its id.
const getPostById = async (id) => {
    return await db('posts').where({ id }).first();
};

// Create a new blog post
const createPost = async (post) => {
    const [id] = await db('posts').insert(post);
    return getPostById(id);
};

// Update an existing blog post.
const updatePost = async (id, updates) => {
    await db('posts').where({ id }).update(updates);
    return getPostById(id);
};

// Delete a blog post.
const deletePost = async (id) => {
    await db('posts').where({ id }).del();
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
