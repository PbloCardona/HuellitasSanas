const mysql = require("mysql")
const conexion = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"hs_db"
})

conexion.connect((err)=>{
  if(err) throw err
  console.log("Conexion establecida")
})

// let datos = {
//           id: idInput.value,
//           nombre: nameInput.value,
//           telefono: telInput.value,
//           correo: emailInput.value,
//           cita: servicioSelect.value,
//           fecha: fechaInput.value
//         }

let datos = {
    id: 121715455,
    nombre: "Sebas",
    telefono: "310",
    correo: "@gmail.com",
    cita: "medico",
    fecha: "2023-06-12"
  }

const insert = `INSERT INTO users (id,nombre,identificacion,telefono,correo,servicio,fecha) VALUES (NULL,"${datos.nombre}",${datos.id},"${datos.telefono}","${datos.correo}","${datos.cita}","${datos.fecha}")`
  conexion.query(insert,(err,rows)=>{
    if(err) throw err 
})


conexion.end()


