import { cakesRepository } from "../repositories/cakesRepository.js";
async function createCake(req, res) {
	try {
		const existingName = await cakesRepository.searchByName(res.locals.name);
		if (existingName.rowCount >= 1) {
			res.status(409).send("name already in database");
			return;
		}
		await cakesRepository.insert(res.locals);
		res.status(201).send(res.locals);
	} catch (e) {
		console.log(e);
		return;
	}
}

export default { createCake };
