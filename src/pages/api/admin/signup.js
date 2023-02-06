import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("9Sol");
    switch (req.method) {
      case "POST":
        const {email, password} = req.body
        console.log(email, password);
        //  let bodyObject = JSON.parse(req.body);
        let user = await db.collection("admins").insertOne(req.body);
        // res.json(myPost.ops[0]);
        // console.log(user);
        res.status(200).send(user)
        break;
      case "GET":
        const allPosts = await db.collection("allPosts").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  }
  