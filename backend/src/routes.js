const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const postController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', postController.index);
routes.post('/posts', upload.single('image'), postController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;