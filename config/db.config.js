import mongoose from "mongoose";

let isConnected = false; // track the connections

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    process.env.NODE_ENV == "development" &&
      console.log("MongoDB is already connected");
    return;
  }

  console.log(process.env.NODE_ENV);

  try {
    await mongoose.connect(
      process.env.NODE_ENV == "development"
        ? process.env.DATABASE_DEV_URL
        : process.env.DATABASE_PROD_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    process.env.NODE_ENV == "development" && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
