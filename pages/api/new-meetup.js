import { MongoClient } from "mongodb"

// /api/new-meetup

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body

		const client = await MongoClient.connect(
			"mongodb+srv://away:gksrlf78@cluster0.jmluvpy.mongodb.net/meetups?retryWrites=true&w=majority"
		)
		const db = client.db()

		const meetupsCollection = db.collection("meetups")
		console.log("ddd")
		const result = await meetupsCollection.insertOne(data)

		console.log(result)

		client.close()

		res.status(201).json({ message: "Meetup inserted!" })
	}
}

export default handler
