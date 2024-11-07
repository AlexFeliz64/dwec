export const environment = {
  // Observad como está marcado que no es producción
  production: false,
  
  // URL Base de los servicios de taskman
  recetasUrl: 'http://localhost:3000', 

  // Tiempo en milisegundos que un usuario debe estar sin pulsar una tecla
  // para que se acepte la entrada para lanzar por ejemplo un desplegable
  userInputDebounceDelay: 500,

  // Activa el modo depuración. Desactiva la autenticación.
  debug: 1
};
