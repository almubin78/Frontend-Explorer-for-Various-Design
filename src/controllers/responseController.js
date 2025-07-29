const successResponse = (
    res,{
        statusCode = 200,
        message = '',
        payload = {},
        responsesFrom='',
        
    }
) =>{


    return res.status(statusCode).json({
        success:true,
        statusCode,
        message:message,
        responsesFrom,
        payload
    })
}

module.exports = {
    successResponse,

}