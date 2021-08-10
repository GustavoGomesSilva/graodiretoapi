const router = require('express').Router()

const UserController = require('./controllers/UserController')
const RestaurantController = require('./controllers/RestaurantController')
const RestaurantItensController = require('./controllers/RestaurantItensController')
const SearchController = require('./controllers/SearchController')

router.post('/user/create', UserController.create)
router.post('/user/login', UserController.login)

router.get('/restaurant', RestaurantController.get)

router.get('/restaurant-itens', RestaurantItensController.get)

router.get('/search', SearchController.get)

module.exports = router