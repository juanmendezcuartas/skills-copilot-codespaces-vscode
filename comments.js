// Create web server
// Create web server for comment
//=ニニニニニニニニニニニニニニニニニニニニニニニニニニニニニニニ
// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.js')
// Handle request
router.get('/', commentController. comment_list); 
router.get('/create', commentController. comment_create_)
router.post('/create', commentController. comment_create_p)
router.get('/:id/delete', commentController.comment_delete)