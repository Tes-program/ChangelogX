import app from "./server";
import * as dotenv from "dotenv";
import config from "./config/index";
dotenv.config();

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}!`);
});
