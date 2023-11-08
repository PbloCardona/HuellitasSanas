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

const insert = 'INSERT INTO users (id,nombre,identificacion,telefono,correo,servicio,fecha) VALUES ("20","juan","1231321","asdasd","asdasda","asdasda","1231321")'
  conexion.query(insert,(err,rows)=>{
    if(err) throw err 
})


conexion.end()


