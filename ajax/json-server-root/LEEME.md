# Descripción
Backend de aplicación de gestión de contactos. 

# API Rest
Las APIs REST son APIs que se apoyan en el protocolo HTTP para dar su servicio. Se soportan las operaciones HTTP para operaciones convencionales. En estas APIs, una **URL representa un recurso**, **el método HTTP representa la operación** a realizar y el **código de estado representa el resultado**.

### Recursos
En este backend se han incluido los siguientes recursos: 

- http://localhost:3000/recetas: Recetas.
- http://localhost:3000/ingredientes_recetas: Ingredientes asociados a una receta.
- http://localhost:3000/pasos_recetas: Pasos asociados a las recetas.
- http://localhost:3000/ingredientes: Ingredientes registrados en el sistema.


Directrices para escoger el nombre de los recursos: 
- Plural mejor que singular, para lograr uniformidad:
- Url's lo más cortas posibles
- Evita guiones y guiones bajos
- Deben ser semánticas para el cliente
- Utiliza nombres y no verbos

### Métodos/Operaciones
* **GET**: Permite cargar un recurso. Puede recibir los siguientes códigos como resultado resultado:
  - 200 ok
  - 404 No encontrado
  
* **POST**: Permite crear un recurso. La petición no debe tener identificador ya que el recurso no existía en la base de datos. En la cabecera HTTP **Location** de la respuesta contendrá la URL para acceder al rescurso recien creado. Nos puede devolver los siguientes códigos de resultado:
  - 201 Recurso creado correctamente
  - 400 Petición incorrecta
  - 403 Acceso prohibido
  - 500 Error en el servidor

+ **PUT**: Actualiza todos los datos excepto el identificador. Puede devolver los siguientes datos de resultado. 
  - 200 Recurso actualizado correctamente
  - 201 Recurso creado correctamente
  - 400 Petición incorrecta
  - 403 Acceso prohibido
  - 500 Error en el servidor

+ **PATCH**: Nuevo método. Permite actualizar solo una parte de los datos. No está soportado por todos los frameworks.

+ **DELETE**: Elimina el recurso. Después de eliminarlo, los intentos de acceso deberían fallar. Puede devolver los siguientes resultados:
    - 200 OK
    - 404 No encontrado
    - 500 Error en el servidor

### CORS
Por motivos de seguridad no es posible utilizar un backend alojado en otro dominio sin autorización previa de modo que será necesario configurar CORS en el backend que estemos utilizando.

# Instalación del servidor
Será necesario instalar el paquete json-server. Podemos hacerlo utilizando alguno de los siguientes comandos:

Si utilizamos el proyecto suministrado podemos utilizar el siguiente comando:
```cmd
C:> npm install 
```

En un nuevo proyecto podemos utilizar la siguiente para instalarlo en el directorio del proyecto:
```cmd
C:> npm install --prefix=. json-server
```


# Ejecución del servidor
Para ejecutar el servidor se puede lanzar el siguiente comando:

```shell
C:\....\> npx json-server --watch db.json
Debugger listening on ws://127.0.0.1:64447/387eb498-c271-4ca5-84e9-42131547f1fe
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/recetas
  http://localhost:3000/ingredientes_recetas
  http://localhost:3000/pasos_recetas
  http://localhost:3000/ingredientes
  
  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```
Nos ha dado tres url que podemos utilizar para acceder a cada uno de los recursos.

# Consultas
En este apartado incluyo algunas consultas que pueden hacerse.

### Recetas
- http://localhost:3000/recetas : Devuelve todos los contactos.
- http://localhost:3000/recetas?nombre=Macarrones&descripcion=Macarrones : Devuelve las recetas que cumplen el criterio
- http://localhost:3000/recetas/1 : Devuelve la receta con ID = 1

### Ingredientes
- http://localhost:3000/ingredientes : Devuelve todos los ingredientes.
- http://localhost:3000/ingredientes?nombre=Macarrones: Devuelve los ingredientes que cumplen el criterio
- http://localhost:3000/ingredientes/1 : Devuelve el ingrediente cons ID = 1

### Ingredientes de las recetas
- http://localhost:3000/ingredientes_recetas?receta.nombre=Macarrones : Las recetas asociadas a nombre Macarrones
- http://localhost:3000/ingredientes_recetas?recetaId=1 : Retorna los ingredientes de la receta 1.

### Pasos de las recetas
- http://localhost:3000/pasos_recetas?receta.nombre=Macarrones : Los ingredientes asociadas a nombre Macarrones
- http://localhost:3000/pasos_recetas?recetaId=1 : Retorna los pasos de la receta 1.

### Elementos hijos
Esta url devuelve las recetas con los pasos y los ingredientes asociados:

http://localhost:3000/recetas?_embed=pasos&_embed=ingredientes

### Incluir padre
Permite obtener por ejemplo los pasos pero con los datos del padre relacionado.

http://localhost:3000/pasos_recetas/GET?_expand=receta

### Búsquedas
Con **gte** (mayor o igual) y **lte** (menor o igual) podemos obtener los contactos en una letra o hacer búsquedas

http://localhost:3000/recetas?nombre_gte=P&nombre_lte=Q

**ne** permite excluir un valor del resultado

http://localhost:3000/recetas?id_ne=1

**like** permite buscar. Soporta expresiones regulares.

http://localhost:3000/recetas?nombre_like=Pac

También disponemos de búsqueda de texto completa que busca el texto indicado en todos los campos. En este caso es el parámetro **q**

http://localhost:3000/recetas?q=Pac

### Ordenación
Podemos ordenar por diferentes campos 

http://localhost:3000/recetas?_sort=nombre,apellidos&_order=desc,asc

### Paginación
Si queremos implementar paginación, podemos utilizar urls como las siguientes:

http://localhost:3000/recetas?_page=7
http://localhost:3000/recetas?_page=7&_limit=20

# Bibliografía 
- API REST: https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html
- json-server: https://github.com/typicode/json-server

