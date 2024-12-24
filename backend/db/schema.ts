import { 
    pgTable, 
    varchar, 
    text, 
    boolean, 
    timestamp, 
    uuid, 
    pgEnum, 
    integer,
    index,
    decimal,
    serial,
    json,
    unique,
    check
} from "drizzle-orm/pg-core";
import { sql, relations, eq } from "drizzle-orm";
export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
})