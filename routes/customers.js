const { customerService, orderService} = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
	const customers = await customerService.load();

	res.render('customers', { customers })
	// res.send(customers);
});

router.post("/", async (req, res, next) => {
	try {
		const customer = await customerService.insert(req.body);
		res.send(customer);
	} catch (e) {
		next(e);
	}
});

router.delete("/:customerId", async (req, res) => {
	await customerService.removeBy("_id", req.params.customerId);
});

router.get("/:customerId", async (req, res) => {
	const customer = await customerService.find(req.params.customerId);
    if (!customer) return res.status(404).send("Cannot find customer");

    res.render("customer", { customer });

        // if (!customer) return res.status(404);
        // res.send(customer);
});

router.post("/:customerId/orders", async (req, res) => {
	const { customerId } = req.params;
	const { productId, address, email } = req.body;

	const order = await orderService.orderInfo(
		productId,
		customerId,
		address,
		email
	);

	res.send(order);
});

router.patch("./customerId", async (req, res) => {
	const { name } = req.body;

	await customerService.update({ name });
});
module.exports = router;
