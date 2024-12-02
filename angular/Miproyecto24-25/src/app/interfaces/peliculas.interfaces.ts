export interface PeliculasID0TituloHombreDeHierroGeneroDramaDuracion32FechaDeLanzamiento11112011SinopsisDuranteLasHuelgasEnLosAstillerosDeGdańskAComienzosDeLosAños1980MaciekTomczykJerzyRadziwiłowiczEsUnObreroMarcadoPorLaMuerteDeSuPadreQueDecideUnirseASolidarnośćParaLucharAFavorDeLosDerechosSocialesTituloAalecsGeneroAaDuracionAaFechaDeLanzamientoAaID1TituloAsaalecsGeneroJavichuDuracionDydyFechaDeLanzamientoDhdhdID2TituloEwGeneroWerwerDuracionRwerwrFechaDeLanzamientoRgergeID3TituloAwdawGeneroDuracionFechaDeLanzamientoID9TituloAdaGeneroAwdaDuracionAwdFechaDeLanzamientoID10UsersEmailAdminAdminPasswordAdminID1EmailAlecsGmailCOMPasswordAlecsID2PeliculasID0TituloHombreDeHierroGeneroDramaDuracion32FechaDeLanzamiento11112011SinopsisDuranteLasHuelgasEnLosAstillerosDeGdańskAComienzosDeLosAños1980MaciekTomczykJerzyRadziwiłowiczEsUnObreroMarcadoPorLaMuerteDeSuPadreQueDecideUnirseASolidarnośćParaLucharAFavorDeLosDerechosSocialesTituloAalecsGeneroAaDuracionAaFechaDeLanzamientoAaID1TituloAsaalecsGeneroJavichuDuracionDydyFechaDeLanzamientoDhdhdID2TituloEwGeneroWerwerDuracionRwerwrFechaDeLanzamientoRgergeID3TituloAwdawGeneroDuracionFechaDeLanzamientoID9TituloAdaGeneroAwdaDuracionAwdFechaDeLanzamientoID10UsersEmailAdminAdminPasswordAdminID1EmailAlecsGmailCOMPasswordAlecsID2 {
    peliculas: Pelicula[];
    users:     User[];
}

export interface Pelicula {
    id:                   string;
    titulo:               string;
    genero:               string;
    duracion:             string;
    fecha_de_lanzamiento: string;
    sinopsis?:            string;
    portada?:             string;
}

export interface User {
    email:    string;
    password: string;
    id:       number;
}
