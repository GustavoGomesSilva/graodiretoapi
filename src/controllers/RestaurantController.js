const connection = require('../database/connection')

const responseModel = {
    success: true,
    data: [],
    error: []
}

module.exports = {
    async get(req, res) {
        const response = {...responseModel}
        
        let { name } = req.body

        const [, data] = await connection.query(`
            SELECT * FROM restaurant
        `)

        response.success = data.length > 0

        response.data = data

        return res.json(response)
    }
}