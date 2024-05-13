import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    bio: String,
    avatar: String,
    birthDate: Date,
    email: String,
    creditCard: Number,
    password: /*all*/ Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const User = model('User', userSchema);
