// lib/db.js (for JS) or db.ts (for TS)
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task', // Change as needed
  waitForConnections: true,
  connectionLimit: 10,
});
