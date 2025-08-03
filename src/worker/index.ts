import v8 from "v8"
import { PostgreDataSource } from "../../database/data-source";
import ThreadConsumer from "./ThreadConsumer";

PostgreDataSource.initialize()
  .then(async () => {
    console.log(
      "Max old space size:",
      v8.getHeapStatistics().heap_size_limit / 1024 / 1024,
      "MB"
    );

    await ThreadConsumer.add();
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
