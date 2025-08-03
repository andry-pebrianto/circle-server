import v8 from "v8"
import { PostgreDataSource } from "../database/data-source";
import createServer from "./server/createServer";
import { redisConnect } from "./cache/redis";
import Env from "./utils/variables/Env";

PostgreDataSource.initialize()
  .then(async () => {
    createServer.listen(Env.PORT, () => {
      redisConnect();

      console.log(`Server started on port ${Env.PORT} with ${Env.NODE_ENV} environment`);
      console.log(`Visit http://localhost:${Env.PORT}`);
      console.log("Developed by Andry Pebrianto");
      console.log(
        "Max old space size:",
        v8.getHeapStatistics().heap_size_limit / 1024 / 1024,
        "MB"
      );
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
