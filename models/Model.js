import mongoose, { Schema } from "mongoose";


const ModelSchema = new Schema({

	image : {
		type : String,
		required: true,
		index: true,
	},
	Name : {
		type : String,
		required: true,
	}
} , {timestamps : true})

export const Model = mongoose.model("Model" , ModelSchema);