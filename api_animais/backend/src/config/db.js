import pg from 'pg';

const  pool = new pg.Pool({
    user: 'user',
    host: 'host',
    database: 'password',
    port:Number('port'),
    database: 'database',
});

export const query = (text, params) => pool.query(text, params);