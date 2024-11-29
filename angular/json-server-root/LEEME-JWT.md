# Autenticación
Muy interesante. Permite crear usuarios y llevar a cabo la autenticación con tokens JWT
De modo que nos permite hacer un cliente totalmente funcional que incluye autenticación
y seguridad.

https://www.npmjs.com/package/json-server-auth

# Instalación
Para instalar el paquete en nuestro proyecto podemos utilizar una línea de comandos como la siguiente:

```cmd
C:\> npm install --prefix=. json-server-auth
```

# Configuración
Será necesario contar con una base de datos de usuarios. El módulo soporta entre otras cosas operaciones de registro e inicio de sesión basado en JWT. La base de datos de usuarios la podemos crear inclyendo esta colección en **db.json**
```json
{
  "users": []
}
```

# Iniciar json-server
Para iniciar json-server con soporte para autenticación, ya que hemos instalado tanto json-server como json-server-auth en nuestro proyecto, ejecutaremos la siguiente secuencia de comandos:

```cmd
C:\> npx json-server --watch db.json -m ./node_modules/json-server-auth -r routes.json
```

El archivo routes.json al que se hace referencia contiene la configuración necesaria para que se requiera autenticación para acceder a los diferentes recursos. Esto es conveniente para que podamos hacer una aplicación real.

# Autenticación
En este apartado vamos a ver cómo se gestionan las operaciones de registro e inicio de sesión.

### Registro
Se pueden usar las siguientes rutas para llevar a cabo el registro:

* POST /register
* POST /signup
* POST /users

Ejemplo de JSON enviado en el cuerpo de la petición al registro:

```json
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```
Se podrían añadir otras propiedades en la petición que no van a ser validadas. La contraseña será encriptada con bcryptjs al guardar el usuario en la colección users dentro de db.json. Aunque la aplicación no tenga página de registro, deberemos utilizar los recursos mencionados para crear los usuarios que queramos ya que es la forma de asegurar que la colección users mantiene el formato correcto.

La respuesta al registro será:
```json
201 Created
{
  "accessToken": "xxx.xxx.xxx"
}
```
El token tendrá una validez de una hora de modo que podremos directamente utilizarlo o, si lo consideramos oportuno, redirigir al usuario al login y hacer un proceso de inicio de sesión.

### Login
Las siguientes rutas permiten hacer un inicio de sesión:

* POST /login
* POST /signin

Objeto json que tenemos que enviar para iniciar sesión: 
```json
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
```
Los datos enviados coincidirán con los datos que hemos introducido en el registro. La respuesta que obtendremos si todo funcionó correctamente será algo así:

```json
200 OK
{
  "accessToken": "xxx.xxx.xxx"
}
```
El token JWT. Expirará en una hora.

# Sobre el token
Va a contener la siguiente información:
* sub : El id de usuario
* email : El correo del usuario

# Peticiones HTTP con el token
Para acceder a aquellos recursos que requieran autenticación será necesario enviar con cada petición HTTP el token. Esto es importante, ya que tendremos que hacerlo tanto en el Postman cuando estemos haciendo pruebas con autenticación, como en las peticiones que hagamos desde nuestra aplicación. Para hacerlo, podemos insertar una cabecera Authorization con el siguiente contenido:

  - Authorization: Bearer <token>

Donde <token> es el token que hemos obtenido durante el proceso de login. Este token lo habremos guardado en algún sitio en el cliente de modo que podamos enviarlo con todas las peticiones que hagamos desde ese momento.

# Bibliografía
- https://hackernoon.com/using-session-cookies-vs-jwt-for-authentication-sd2v3vci
- https://www.npmjs.com/package/json-server-auth