import mongoose from "mongoose"

const DBConnect = async()=>{
    try {
       const reponse= await mongoose.connect("mongodb+srv://mohithbachu:230504@cluster0.0hblruy.mongodb.net/tempDB")
       console.log("DB Connected Successfully")
    } catch (error) {
        
    }
}

export default DBConnect