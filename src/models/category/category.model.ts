import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const categorySchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Category = model('Author', categorySchema);