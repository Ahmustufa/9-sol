// import clientPromise from "@/lib/mongodb";
// import hashPassword from "@/helpers/hashPassword";
// export default async function handler(req, res) {
//   const client = await clientPromise;
//   if (req.method === "POST") {
//     const db = client.db("9Sol");
//     const { email, password, role } = req.body;
//     if (role === "admin") {
//       const authorization = req.headers;
//       console.log("authorization", authorization);
//       if (!authorization) {
//         return res.status(401).json({ message: "Unauthorized" });
//       } else {
//         const user = {
//           email: email.trim().toLowerCase(),
//           password: await hashPassword(password),
//           status: 1,
//         };
//         if (!email && !password) {
//           res.json({ message: "Invalid email or password" });
//         } else {
//           let admin = await db.collection("admins").insertOne(user);
//           res.json({ message: "Signup successful" });
//         }
//       }
//     } else {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//   } else {
//     res.status(400).send("Invalid request");
//   }
// }
