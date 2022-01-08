import { connection } from "../db/connection.js"

export const getCategories = (req, res) => {
    const query = "SELECT * FROM category"
    connection.query(query, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No data');
        }
    })
}

export const getCategoryByID = (req, res) => {
    const { id } = req.params
    const query = `SELECT * FROM category WHERE id=${id}`
    connection.query(query, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No data');
        }
    })
}


