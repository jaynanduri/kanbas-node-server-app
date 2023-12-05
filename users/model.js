import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("user", schema);
export default model;