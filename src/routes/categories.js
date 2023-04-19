const express = require('express')
const router = express.Router()
const auth = require('../middlewares/jwtMiddleware');

const  { 
    getAllCategories
} = require('../controllers/categories.js')

router.get('/', auth, getAllCategories) 

module.exports = router