const connection    = require('../database/connection')
const crypto        = require('crypto')

const responseModel = {
    success: true,
    data: [],
    error: []
}

module.exports = {
    async create(req, res) {
        const response = {...responseModel}

        let { username, email, password} = req.body

        password = crypto.createHash("sha256").update(password).digest("hex")

        const [, affectRows] = await connection.query(`
            INSERT INTO users VALUES (DEFAULT, '${username}', '${email}', '${password}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return res.json(response)
    },

    async login(req, res) {
        const response = {...responseModel}
        
        let { email, password} = req.body

        password = crypto.createHash("sha256").update(password).digest("hex")

        const [, data] = await connection.query(`
            SELECT * FROM users WHERE email = '${email}' AND password = '${password}'
        `)

        response.success = data.length > 0

        return res.json(response)
    }
}