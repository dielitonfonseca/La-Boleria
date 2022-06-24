import app from "./App.js";
import dotenv from "dotenv";
dotenv.config();
app.listen(process.env.PORT, () => {
	console.log("Rodando em " + process.env.PORT);
});
