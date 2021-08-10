const Sequelize =  require('sequelize')

const database  = "graodireto"//process.env.DATABASE
const username  = "root"//process.env.USERNAME
const password  = "teste"//process.env.PASSWORD
const host      = process.env.HOST
const dialect   = process.env.DIALECT
 //console.log(process.env)
const connection = new Sequelize(database, username, password, {
    host,
    dialect
})

module.exports = connection