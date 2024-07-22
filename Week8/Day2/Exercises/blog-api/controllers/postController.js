const postModel = require('../models/postModel.js');

const getPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
};

const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postModel.getPostById(id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve post' });
    }
};

const createPost = async (req, res) => {
    try {
        const post = await postModel.createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPost = await postModel.updatePost(id, req.body);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await postModel.deletePost(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};
