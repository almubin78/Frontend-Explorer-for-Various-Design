

const demoStudentsForHsc = require("../../demoStudentsForHsc");
const { client } = require("../config/dbConnect");
const { successResponse } = require("./responseController")


const handleGetClassEightStudents = async(req,res,next) =>{  
    try {
        
        const eightStudentCollection =  client.db('PrivateServer').collection('EightStudents');
       
        const allEightStudents = await eightStudentCollection.find({}).toArray();
        successResponse(res,{
            message:'get all Eight students Successfully',
            payload:allEightStudents,
            responsesFrom:'handleGetClassEightStudents Controller'
        })
        
    } catch (error) {
        next(error)
    }
}
const handleGetClassHscStudents = async(req,res,next) =>{  
    try {
        
        
        const hscStudentCollection =  client.db('PrivateServer').collection('HscStudents');
        const allHscStudents = await hscStudentCollection.find({}).toArray();
        successResponse(res,{
            message:'get all Hsc students Successfully',
            payload:allHscStudents,
            responsesFrom:'handleGetClassHscStudents Controller'
        })
        
    } catch (error) {
        next(error)
    }
}
const handleFeedback = async(req,res,next)=>{
    try {
        const comment = req.body;
        // console.log(comment,'comments');
        const feedbackCollection =  client.db('ClassEight').collection('feedback');
        const allFeedback = await feedbackCollection.insertOne(comment)
        successResponse(res,{
            message:'get all feedback Successfully',
            payload:allFeedback,
            responsesFrom:'From handleFeedback Controller'
        })
    } catch (error) {
        next(error)
    }
}

const handleInsertDemoStudents = async(req,res,next) =>{  
    try {
        
        const eightStudentCollection =  client.db('PrivateServer').collection('EightStudents');
        const hscStudentCollection =  client.db('PrivateServer').collection('HscStudents');
        const allEightStudents = await eightStudentCollection.find({}).toArray();
        const allHscStudents = await hscStudentCollection.insertMany(demoStudentsForHsc);
        successResponse(res,{
            message:'Inserting Demo Student Successfully',
            payload:allHscStudents,
            responsesFrom:'handleInsertDemoStudents Controller'
        })
        
    } catch (error) {
        next(error)
    }
}
module.exports = {
    handleGetClassEightStudents,
    handleGetClassHscStudents,
    handleFeedback,
    handleInsertDemoStudents
}