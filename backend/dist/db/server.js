"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const schema_1 = require("./schema");
const drizzle_orm_1 = require("drizzle-orm");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/posts', async (req, res) => {
    try {
        const allPosts = await db_1.db.select().from(schema_1.posts);
        res.json(allPosts);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
app.get('/posts/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const post = await db_1.db.select().from(schema_1.posts).where((0, drizzle_orm_1.eq)(schema_1.posts.id, id));
        if (post) {
            res.json(post);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
});
app.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(400).json({ error: 'Title and content are required' });
        return;
    }
    try {
        await db_1.db.insert(schema_1.posts).values({ title, content });
        res.json({ message: 'Postt added successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add post' });
    }
});
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db_1.db.delete(schema_1.posts).where((0, drizzle_orm_1.eq)(schema_1.posts.id, Number(id)));
        res.json({ message: 'Post deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
});
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        await db_1.db.update(schema_1.posts)
            .set({ title, content })
            .where((0, drizzle_orm_1.eq)(schema_1.posts.id, Number(id)));
        res.json({ message: 'Post updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update posts' });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
});
