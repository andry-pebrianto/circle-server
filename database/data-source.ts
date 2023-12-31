import "reflect-metadata";
import { DataSource } from "typeorm";
import Env from "../src/utils/variables/Env";
import { User } from "./entities/User";
import { Thread } from "./entities/Thread";
import { Reply } from "./entities/Reply";
import { Like } from "./entities/Like";
import { Upload } from "./entities/Upload";
import { MigrationFile1698899930953 } from "./migration/1698899930953-MigrationFile";

export const PostgreDataSource = new DataSource({
  type: "postgres",
  host: Env.DB_HOST,
  port: Env.DB_PORT,
  username: Env.DB_USERNAME,
  password: Env.DB_PASSWORD,
  database: Env.DB_NAME,
  synchronize: Env.NODE_ENV === "prod" ? false : true,
  logging: Env.NODE_ENV === "prod" ? false : true,
  entities: [User, Thread, Reply, Like, Upload],
  migrations: [MigrationFile1698899930953],
  subscribers: [],
  ssl: true,
});
