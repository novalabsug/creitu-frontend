import { Schema, model, models } from "mongoose";

const subscribeSchema = new Schema(
  {
    email: String,
    comment: String,
  },
  {
    timestamps: true,
  }
);

const Subscribe = models.Subscribe || model("Subscribe", subscribeSchema);

export default Subscribe;
