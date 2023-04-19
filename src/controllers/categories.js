const categoryService = require('../services/categories');

const getAllCategories = (async(req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json({ success: true, data: categories });
    } catch (error) {
        res.json({ success: false, error: error.message })
    }
})

module.exports = {
    getAllCategories
}