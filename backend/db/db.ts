import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

require('dotenv').config();

let { PGCONNECTSTRING } = process.env;

const client = postgres(PGCONNECTSTRING as string)
export const db = drizzle(client, { schema, logger: true });