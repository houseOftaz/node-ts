import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const articleSchema = new Schema({
    title: String,
    description: String,
    img: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Article = model('Article', articleSchema);