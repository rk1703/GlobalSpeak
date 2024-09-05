import mongoose from "mongoose";

// const conectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@globalspeak.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`
const conectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.vimao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDb = async ()=>{
    if(mongoose.connection?.readyState >= 1){
        console.log("---- Already connected to MongoDB ----");
        return;
    }

    try{
        await mongoose.connect(conectionString);
        console.log("---- Connected to MongoDB ----");
    } catch(err){
        console.log("Unable to connect MongoDB: ",err);
    }
}

export default connectDb;