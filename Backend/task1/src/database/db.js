import mongoose from "mongoose"

const DBConnect = async()=>{
    try {
       const reponse= await mongoose.connect("mongodb+srv://<database_username>:<database_password>@cluster0.0hblruy.mongodb.net/tempDB")
       console.log("DB Connected Successfully")
    } catch (error) {
        
    }
}


export default DBConnect
