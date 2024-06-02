import { Schema, model, InferSchemaType } from "mongoose";

const projectSchema = new Schema({
    title: String,
    description: String,
});



type ProjectType = InferSchemaType<typeof projectSchema>;
const Project = model("Project", projectSchema);


export { ProjectType };
export default Project;