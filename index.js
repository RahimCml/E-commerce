const express = require("express");
const { customerDatabase } = require("./database");
const flatted = require("flatted");

const app = express();

app.get("/customers", async (req, res) => {
	const customers = await customerDatabase.load();
	res.send(flatted.stringify(customers));
});

app.listen(3000, () => {
	console.log("started listening on 3000");
});
