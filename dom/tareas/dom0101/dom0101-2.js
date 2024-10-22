"use strict";

        window.addEventListener("load", () => {
            inicializarEventos();
        });

        function inicializarEventos() {
            // Obtener elementos por ID
            const redButton = document.getElementById('redButton');
            const blueButton = document.getElementById('blueButton');
            const greenButton = document.getElementById('greenButton');
            const campo = document.getElementById('campo');

            // Asignar eventos a los botones
            redButton.addEventListener('click', cambiarColor);
            blueButton.addEventListener('click', cambiarColor);
            greenButton.addEventListener('click', cambiarColor);
        }

        function cambiarColor(e) {
            const campo = document.getElementById('campo');

            // Usar un switch para determinar el botón y cambiar el color
            switch (e.target.id) {
                case 'redButton':
                    campo.style.backgroundColor = 'red';
                    break;
                case 'blueButton':
                    campo.style.backgroundColor = 'blue';
                    break;
                case 'greenButton':
                    campo.style.backgroundColor = 'green';
                    break;
                default:
                    campo.style.backgroundColor = 'white';
            }
        }