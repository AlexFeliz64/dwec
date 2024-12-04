export const environment = {
  production: true,
  server:'http://localhost:3000', 
  articulosURL:'http://localhost:8080/arti',
  proveedoresURL:'http://localhost:8080/pro',
  rutaImgPeliculas: 'assets/peliculas/',

  paginaInicial: 1,

  registrosPorPagina: 3,
 
  // Tiempo en milisegundos que un usuario debe estar sin pulsar una tecla
  // para que se acepte la entrada para lanzar por ejemplo un desplegable
  userInputDebounceDelay: 500,

  // Activa el modo depuración. Desactiva la autenticación.
  debug: 1
};
