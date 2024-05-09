// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { addBook, getAllBooks } from "@/utils/controllers/books-controllers";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export default function handler(req, res) {
	
	mongoose.connect(process.env.NEXT_ATLAS_URI)
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
	

	if(req.method === "GET") {
		return getAllBooks(req, res);
	}
	else if (req.method === "POST"){
		return addBook(req,res);
	}
}

