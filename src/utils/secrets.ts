import logger from "./logger";
import dotenv from "dotenv";
import fs from 'fs';

if (fs.existsSync(".env")) {
    logger.info("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
} else {
    logger.debug("Missing .env file");
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env["SESSION_SECRET"];
export const MONGODB_URI = process.env["MONGO_URI"];

if (!SESSION_SECRET) {
  logger.error("No client secret. Set SESSION_SECRET environment variable.");
}

if (!MONGODB_URI) {
  logger.error("No mongo connection string. Set MONGO_URI environment variable.");
  process.exit(1);
}