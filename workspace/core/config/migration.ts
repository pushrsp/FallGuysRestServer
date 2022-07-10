import { DataSource } from "typeorm";
import { GetConfig } from "./ormConfig";

const AppDbContext = new DataSource(GetConfig());
AppDbContext.initialize();

export default AppDbContext;
