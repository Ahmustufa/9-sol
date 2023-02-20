// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";

 const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await clientPromise;
    try {
      const db = client.db("9Sol");
      let result = await db.collection("package_model").find({}).toArray()
      // console.log(result);
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({ error: "unable to retrieve values" });
    }
  } else {
    res.status(400).json({ error: "Invalid http request" });
  }

  // res.status(200).json()
};
export default handler