import mongoose, { Schema } from "mongoose";


const BrandSchema = new Schema({

	Name : {
		type : String,
		required: true,
		index: true,
	},
	FilePath : {
		type : String,
		required: true,
	}
} , {timestamps : true})

export const Brand = mongoose.model("Brand" , BrandSchema);