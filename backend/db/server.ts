import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { db } from './db';
import { posts } from './schema';
import { eq } from 'drizzle-orm';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/posts', async (req: Request, res: Response): Promise<void> => {
    try {
        const allPosts = await db.select().from(posts);
        res.json(allPosts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts'});
    }
});

app.get('/posts/:id', async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    try {
        const post = await db.select().from(posts).where(eq(posts.id, id));
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch'});
    }
});

app.post('/posts', async (req: Request, res: Response): Promise<void> => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(400).json({ error: 'Title and content are required'});
        return;
    }
    try {
        await db.insert(posts).values({ title, content });
        res.json({ message: 'Postt added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add post' });
    }
});

app.delete('/posts/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await db.delete(posts).where(eq(posts.id, Number(id)));
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
});

app.put('/posts/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        await db.update(posts)
            .set({ title, content })
            .where(eq(posts.id, Number(id)));
        res.json({ message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update posts'});
    }
});

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
});