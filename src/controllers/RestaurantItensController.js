const connection = require('../database/connection')

const responseModel = {
    success: true,
    data: [],
    error: []
}

module.exports = {
    async get(req, res) {
        const response = {...responseModel}
        
        let { restaurant } = req.body

        const [, data] = await connection.query(`
            SELECT * FROM restaurant_itens WHERE id_restaurant = '${restaurant}'
        `)

        response.success = data.length > 0

        response.data = data

        return res.json(response)
    }
}