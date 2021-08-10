const connection = require('../database/connection')

const responseModel = {
    success: true,
    data: [],
    error: []
}

module.exports = {
    async get(req, res) {
        const response = {...responseModel}
        
        let { description } = req.body

        const [, data] = await connection.query(`
            SELECT t1.* FROM restaurant as t1
            left join restaurant_itens as t2 on t2.id_restaurant = t1.id
             WHERE t1.name LIKE '%${description}%'
                or t1.description LIKE '%${description}%'
                or t2.name LIKE '%${description}%' 
                or t2.description LIKE '%${description}%'
        `)

        response.success = data.length > 0

        response.data = data

        return res.json(response)
    }
}