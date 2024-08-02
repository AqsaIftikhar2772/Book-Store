
import mongoose from 'mongoose'


const DbConfig = () => {
mongoose.connect(process.env.MONGODB_LOCAL)
.then(con=> console.log(`database connected successfuly ${con.connection.host}`))
.catch(error => console.log(`database connection failed ${error.message}`))

} 

export default DbConfig;