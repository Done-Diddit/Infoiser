// typescript

import express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://itunes.apple.com', changeOrigin: true }));
app.listen(5000);

// http://localhost:5000/api/foo/bar -> https://itunes.apple.com/api/foo/bar