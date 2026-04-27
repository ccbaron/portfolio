import mongoose from "mongoose";

// Singleton: Mongoose tracks connection state internally.
// readyState 1 = connected — safe to skip reconnect on warm invocations.
export async function connectMongoose(): Promise<void> {
  if (mongoose.connection.readyState === 1) return;

  const config = useRuntimeConfig();

  if (!config.mongodbUri) {
    throw new Error("NUXT_MONGODB_URI environment variable is not set");
  }

  // Serverless-optimised pool: small size, release idle connections quickly.
  await mongoose.connect(config.mongodbUri as string, {
    maxPoolSize: 5,
    minPoolSize: 0,
    maxIdleTimeMS: 10_000,
    connectTimeoutMS: 5_000,
    socketTimeoutMS: 30_000,
  });
}
