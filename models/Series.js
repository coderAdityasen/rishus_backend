import mongoose, { Schema } from "mongoose";


const SeriesSchema = new Schema({

	Name : {
		type : String,
		required: true,
		index: true,
	}
} , {timestamps : true})

export const Series = mongoose.model("Series" , SeriesSchema);