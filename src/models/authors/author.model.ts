import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    bio: String,
    avatar: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Author = model('Author', authorSchema);