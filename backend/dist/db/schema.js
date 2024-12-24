"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.posts = (0, pg_core_1.pgTable)('posts', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    title: (0, pg_core_1.text)('title').notNull(),
    content: (0, pg_core_1.text)('content').notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
