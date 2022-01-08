import { connection } from "../db/connection.js"

export const getProducts = (req, res) => {
    const query = "SELECT * FROM product"
    connection.query(query, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No data');
        }
    })
}

export const getProductsByID = (req, res) => {
    const { id } = req.params
    const query = `SELECT * FROM product WHERE id=${id}`
    connection.query(query, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No data');
        }
    })
}


