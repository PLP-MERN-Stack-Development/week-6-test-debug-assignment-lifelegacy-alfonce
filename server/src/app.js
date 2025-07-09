import express from 'express';
import postsRouter from './routes/posts.js'; // or just 'posts' if not using file extensions
// import other routes as needed

const app = express();

app.use(express.json());
app.use('/api/posts', postsRouter); // adjust route paths as per your setup

export default app;
