import { Schema, model, models } from "mongoose";



const user_schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
},
    { timestamps: true }
)

const User = models.User || model("User", user_schema)


export default User