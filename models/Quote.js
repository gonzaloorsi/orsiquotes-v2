import { Schema, models, model } from "mongoose";

const quoteSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  quote: { type: String, required: true, trim: true },
});

export const Quote = models.Quote || model("Quote", quoteSchema);
