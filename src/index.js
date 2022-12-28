import app from "./app.js";
import { sequelize } from "./database/database.js";

// importar los modelos para que los reconozca la conexion a la base de datos
// import './models/Project.js'
// import './models/Task.js'

async function main() {
  try {
    await sequelize.authenticate();

    // sincronizacion con la base de datos
    // force: true para volver a crear la tabla al inicio del programa
    await sequelize.sync({force: false})

    console.log("conexion establecida");

    app.listen(3000, () => {
      console.log("running on port 3000");
    });
  } catch (error) {
    console.error("error: ", error);
  }
}

main();
