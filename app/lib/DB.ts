import mongoose from "mongoose";
import { env } from "process";

const mongodb_uri = env.MONGODB_URL;

if(!mongodb_uri) throw new Error("Connection url missing");

const connect = async () => {
    const connection_state = mongoose.connection.readyState;
    if(connection_state == 1){
        console.log("Already connected");
        return;
    }
    try{
        mongoose.connect(mongodb_uri, {
            dbName: "nextapi",
            bufferCommands: true
        });
        console.log("Database connected...");
    }catch(e:any){
        throw new Error("Some Error occured : " , e);
    }
}

export default connect