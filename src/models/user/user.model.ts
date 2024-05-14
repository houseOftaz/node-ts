import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    bio: String,
    avatar: String,
    email: {type: String, required: true},
    creditCard: Number,
    password: {type: String, required: true},
    token: String,
    birthDate: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const User = model('User', userSchema);
