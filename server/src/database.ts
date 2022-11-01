const { Pool } = require('pg');

const pool= new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'test',
    port: 5432,
});

const createTable = `
DROP TABLE IF EXISTS test;
CREATE TABLE test (id SERIAL PRIMARY KEY, row JSON NOT NULL);
INSERT INTO test (row)
VALUES('{"date":"02-02-2022", "name":"яна", "count":3,"distance":1000}'),
('{"date":"03-02-2022", "name":"янина", "count":2,"distance":5000}'),
('{"date":"05-02-2022", "name":"януля", "count":1,"distance":4000}'),
('{"date":"05-08-2022", "name":"крыса", "count":1,"distance":8000}'),
('{"date":"05-07-2022", "name":"крысина", "count":10,"distance":2000}'),
('{"date":"05-06-2022", "name":"крысуля", "count":8,"distance":3000}'),
('{"date":"05-04-2022", "name":"саша", "count":7,"distance":6000}'),
('{"date":"05-09-2022", "name":"санина", "count":6,"distance":16000}'),
('{"date":"05-10-2022", "name":"сашуля", "count":5,"distance":15000}'),
('{"date":"05-02-2021", "name":"галя", "count":4,"distance":14000}'),
('{"date":"05-02-2020", "name":"галина", "count":14,"distance":13000}'),
('{"date":"05-02-2019", "name":"галюня", "count":13,"distance":12000}'),
('{"date":"15-02-2022", "name":"маша", "count":12,"distance":11000}'),
('{"date":"16-02-2022", "name":"машина", "count":11,"distance":10000}'),
('{"date":"05-03-2022", "name":"машуля", "count":9,"distance":9000}'),
('{"date":"05-02-2005", "name":"валя", "count":40,"distance":8000}'),
('{"date":"05-02-2006", "name":"валюня", "count":41,"distance":7000}');
`;

pool.connect();
pool.query(createTable, (err, res) => {
  if (err) {
    throw err;
  }
//   pool.end();
});

exports.pool = pool;