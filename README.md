# PruebaTecnica
Prueba de labymedic

Pasos para ejecutar
1) se cargara el archivo .sql para que puedan agregar el codigo y crear la base de datos y las tablas en sql server
2) se enviara a la nube el codigo de nest.js para que puedan ejecutarlo con el comando npm run start:dev
3) De momento solo se puede interactuar con el bakend ya que no me dio tiempo de agregar la interfaz grafica por temas de trabajo
4) se pueden realizar peticiones POST, GET, DELETE Y PATCH
5) las peticiones HTTP son las siguientes

   Usuarios
   http://localhost:3000/usuario utilizando el metodo GET se podran visualizar todos los usuarios de la tabla
   http://localhost:3000/usuario utilizando el metodo POST se podra ingresar información a la tabla agregando información dentro del body
    {
    "nombre": "Juanjo",
    "password": "123",
    "rol": "estudiante"

  }
  http://localhost:3000/usuario/1 utilizando el metodo GET se podra visualizar unicamente un registro de la tabla depende de que numero de usuario se seleccione
  http://localhost:3000/usuario/1 Utilizando el metodo Delete se podra eliminar un registro de la tabla igual depende del numero de usuario que se quiera eliminar 
  http://localhost:3000/usuario/1 Utilizando el metodo PATCH se podra modificar el registro dentro de la tabla siempre pasandole los datos que queremos modificar e indicandole a que numero de usuario se le aplicara el cambio 
   {
    "nombre": "Juanjo",
    "password": "123",
    "rol": "estudiante"
  }

y este es el mismo procedimiento para las peticiones HTTP de las demas tablas 
