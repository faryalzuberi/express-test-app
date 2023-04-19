const authService = require('../services/auth');

const loginUser = (async(req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.loginUser(username, password);
        const jsonRes = (token) ? { success: true, token } : { success: false, error: `Incorrect username or password` }
        res.json(jsonRes);
    } catch (error) {
        res.json({ success: false, error: error.message })
    }
})

module.exports = {
    loginUser
}