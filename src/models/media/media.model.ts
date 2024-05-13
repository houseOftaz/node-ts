import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const mediaSchema = new Schema({
    title: String,
    description: String,
    img: String,
    src: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Media = model('Media', mediaSchema);