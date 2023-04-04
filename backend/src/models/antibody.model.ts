
import { Schema, model } from "mongoose";


export interface Antibody{
  id: string;
  name: string;
  price: number;
  tags: string[];
  favorite: boolean;
  stars: number;
  imageurl: string;
  origins: string[];
  catNumber: string;
}

export const AntibodySchema = new Schema<Antibody>(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        tags: { type: [String] },
        favorite: { type: Boolean, default: false },
        stars: { type: Number, required: true },
        imageurl: { type: String, required: true },
        origins: { type: [String], required: true },
        catNumber: { type: String, required: true },
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
);

export const AntibodyModel = model<Antibody>('antibody', AntibodySchema);