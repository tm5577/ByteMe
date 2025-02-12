import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    role: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
});
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unqiue: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: [chatSchema],
});
export default mongoose.model("User", userschema);
//# sourceMappingURL=User.js.map