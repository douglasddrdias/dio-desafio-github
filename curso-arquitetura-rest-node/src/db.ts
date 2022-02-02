import { Pool } from "pg";

const connectionString = 'postgres://ergxeixb:sa09m_N3MzKkMjyfUjZr4u7gWPQIGOSj@kesavan.db.elephantsql.com/ergxeixb';
const db = new Pool({ connectionString });

export default db;