import express from 'express'
import Database from '../db/connection.js';
import productRoutes from '../routes/product.js'
import categoryRoutes from '../routes/category.js'

class Server {
    constructor() {
        this.app = express()
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