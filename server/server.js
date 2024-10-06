import app from "./app.js";
import { DBConnect, PORT } from "./configs/config.js";
import log from "./utils/logger.js";

app.listen(PORT, async () => {
  await DBConnect();
  log.info("Server Started successfully");
});
