import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// If MONGODB_URI is not defined, we'll gracefully handle it so the app doesn't crash during build or local dev without env vars.
// However, saving to DB will fail.
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not defined. Database operations will be bypassed or mocked.");
    return null; // Return null if no URI, we will handle this in the API route
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};
