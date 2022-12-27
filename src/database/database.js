import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb",
  "luisvasquez",
  "mysecretpassword",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
