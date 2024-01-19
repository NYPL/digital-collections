import { promises as fsPromises } from "fs";
import path from "path";

export default async function handler(req, res) {
  const logDir = path.resolve(process.cwd(), "log/dc.log");

  try {
    await fsPromises.mkdir(logDir);
    res.status(200).json({ message: "Log directory created" });
  } catch (error) {
    if (error.code === "EEXIST") {
      res.status(200).json({ message: "Log directory already exists" });
    } else {
      console.error("Error creating log directory", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
