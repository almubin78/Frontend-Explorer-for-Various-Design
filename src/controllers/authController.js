const { successResponse } = require("./responseController")

const handleLogin = async (req, res, next) => {
    try {

        const { email, password } = req.body;
        // console.log(email, password);
        return successResponse(res, {
            statusCode:202,
            message: 'You Have Login Successfully',
            responsesFrom:'handleLogin Controller',
            payload:{ email, password }
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    handleLogin,

}