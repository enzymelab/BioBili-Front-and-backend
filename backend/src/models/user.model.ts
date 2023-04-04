import { Schema, model } from "mongoose";


export interface User{
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    token: string;
    isAdmin: Boolean;
}

export const UserSchema = new Schema<User>(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        address: { type: String, required: true },
        token: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    }, {
        timestamps: true,
        toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    
}
);

export const UserModel = model<User>('user', UserSchema);