import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async () => {
  const filePath = path.join(process.cwd(), "public", "CHANGELOG.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  // const mdToJSON = fileContent.toJSON();
  const jsonMD = JSON.stringify(fileContent);
  console.log("jsonMD is: ", jsonMD);
  return NextResponse.json(JSON.parse(jsonMD), { status: 200 });
};

// // http://localhost:3000/api/changelog
