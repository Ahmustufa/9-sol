import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const client = await clientPromise;
  if (req.method === "POST") {
    const db = client.db("9Sol");
    const { password } = req.body;
    const email = req.body.email.trim().toLowerCase();
    if (!email || !password) {
      res.json({ message: "Invalid email or password" });
    } else {
      let admin = await db.collection("admins").findOne({ email });
      console.log("admin", admin?.password);
      let match = await bcrypt.compare(password, admin?.password);
      console.log("match", match);
      if (!match) {
        res.status(400).json({ message: "Incorrect email or password" });
      } else {
        const token = jwt.sign({ email }, process.env.jwt_token);
        res.status(200).json({ message: "Login successful", token });
      }
    }
  } else {
    res.status(400).send("Invalid request");
  }
}
