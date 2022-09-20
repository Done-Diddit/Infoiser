const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

//app.use('/api', createProxyMiddleware({ target: 'https://animechan.vercel.app', changeOrigin: true }));
app.use('/search', createProxyMiddleware({ target: 'https://itunes.apple.com', changeOrigin: true }));


app.listen(5000);

// http://localhost:3000/api/foo/bar -> https://itunes.apple.com/api/foo/bar