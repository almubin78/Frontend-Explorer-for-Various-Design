require('dotenv').config()
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_COMPASS_URI
// console.log(uri,'==uri from dbConnect.js');
const client = new MongoClient(uri);
// console.log(client);
// const studentCollection =  client.db('ClassEight').collection('Students');
// console.log(studentCollection,'student Collection in db connect');

async function dbConnect(){
    // console.log('db connected from  dbConnect.js');

    try {

        
    } catch (error) {
        
    }
}
module.exports = {
    dbConnect,
    client,

}