import { ITable } from "./types";
const db = require('./database');
const url = require('url');
const ROWS_PER_PAGE = 5;

const getTableSQL = (page: number) => `SELECT * FROM test WHERE id <=${page*ROWS_PER_PAGE} AND id >${(page - 1)*ROWS_PER_PAGE}`;

const getTableData = function (req, response, postData) {
  const params =  url.parse(req.url,true).query;
   db.pool.query(getTableSQL(params.page), (err, res) => {
      if (err) {
        throw err;
      }
      response.end(JSON.stringify(res.rows.map(el => ({id: el.id, ...el.row, }))));
    });
}
exports.getTableData = getTableData;

