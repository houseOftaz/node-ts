import mongoose from 'mongoose';
import { Author } from '../author/author.model';

const { Schema, model } = mongoose;
const articleSchema = new Schema({
    title: String,
    author: { type: String, ref: "Author" },
    category: { type: String, ref: "Category" },
    comments: [{ type: String, ref: "Comment" }],
    description: String,
    img: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Article = model('Article', articleSchema);