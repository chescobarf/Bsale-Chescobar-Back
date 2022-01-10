import express from 'express'
import Database from '../db/connection.js';
import productRoutes from '../routes/product.js'
import categoryRoutes from '../routes/category.js'
import cors from 'cors'

const corsOptions = {
    origin: '*',
}
class Server {
    constructor() {
        this.app = express()
        this.app.use(cors(corsOptions))
        this.port = process.env.PORT || 8080
        this.API = {
            product: '/products',
            category: '/categories'
        }
        this.routes()
    }
    routes() {
        this.app.use(this.API.product, productRoutes)
        this.app.use(this.API.category, categoryRoutes)
        this.app.get('/', function (req, res) {
            res.json({
                title: 'Hi! To use this API try using the next',
                product: {
                    allProducts: '/products',
                    productByID: '/products/:id',
                    productByCategoryID: '/products/category/:id',
                    searchProductsByTerm: '/products/search/:term'
                },
                category: {
                    allCategories: '/categories',
                    categoryByID: '/categories/:id'
                },
                signature: 'This API was created by https://github.com/chescobarf'
            })
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server start in port', this.port)
        })
    }

    dbConnect() {
        try {
            db.connect()
        } catch (error) {
            console.log(error)
        }
    }

}

export default Server