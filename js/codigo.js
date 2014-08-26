
//CREAMOS EL ARRAY PARA LA GRILLA
var tablero = [ [0, 0, 0, 0, 0] ,
				[0, 0, 0, 0, 0] ,
				[0, 0, 0, 0, 0] ,
				[0, 0, 0, 0, 0] ,
				[0, 0, 0, 0, 0] , ];


//ALEATORIO
function  aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
	return numero;
}


//APLICAR EL NÚMERO ALEATORIO AL CAMPO DE MINAS:
var i;
var j;
var totalMinas = 0;

while (totalMinas < 8) {
	i = aleatorio(0,4);
	j = aleatorio(0,4);

	if (tablero[i][j] == 0) {
		tablero[i][j] = 1;
		totalMinas++;
	};
};

var totalEspacios = 25 - totalMinas;



//////////////////////////////////////
//PARA ASIGNAR X E Y A tablero[y][x]//
//////////////////////////////////////

//VALORES DE Y
var y;

function obtenY0() {
	y = 0;
};

function obtenY1() {
	y = 1;
};

function obtenY2() {
	y = 2;
};

function obtenY3() {
	y = 3;
};

function obtenY4() {
	y = 4;
};

//VALORES DE X
var x;

function obtenX0() {
	x = 0;
};

function obtenX1() {
	x = 1;
};

function obtenX2() {
	x = 2;
};

function obtenX3() {
	x = 3;
};

function obtenX4() {
	x = 4;
};


/////////////////////
//MOSTRAR RESULTADO//
/////////////////////

var vidas = 3;

function activar(element) {
	//AL PISAR MINA
	if (tablero[y][x] == 1) {
		element.className = "mina";
		element.setAttribute( "onClick", " " );

		vidas--;


		//VIDAS
		if (vidas == 2) {
			var vida3 = document.getElementById('vida3');
			vida3.style.display = "none";
		}

		if (vidas == 1) {
			var vida2 = document.getElementById('vida2');
			vida2.style.display = "none";

		}

		if (vidas == 0) {
			var vida1 = document.getElementById('vida1');
			vida1.style.display = "none";

			faltan.innerHTML = "<h1><strong>¡Perdiste!</strong></h1>";

			finJuego();

		} //if
	}


	//AL PISAR DESPEJADO
	if (tablero[y][x] == 0) {

		//Inmediatamente hago que no se pueda pinchar más, para que no afecte al marcador:
		element.setAttribute( "onClick", " " );
		element.className = "numero";

		//Identificar y contar minas que haya alrededor:
		comprobar();

		//MUESTRO EL CONTADOR:
		element.innerText = cuenta;

		//Falta un espacio libre menos:
		espacios--;
		faltan.innerHTML = "<br />Faltan " + espacios + " espacios limpios por descubrir.<br />";

		//Si los espacios que quedan son 0, ganaste:
		if (espacios == 0) {
			faltan.innerHTML = "<h1><strong>¡¡Lo conseguiste!!</strong></h1>";

			finJuego();
		};



	}
};



////////////////////
//FUNCIONES USADAS//
////////////////////

		function comprobar(){
			cuenta = 0;

			//ARRIBA IZQ
			if (y > 0) {
				if ( tablero[(y-1)][(x-1)] == 1 ) {
					cuenta++;
				}
			}
			//ARRIBA CTR
			if (y > 0) {
				if ( tablero[(y-1)][(x)] == 1 ) {
					cuenta++;
				}
			}
			//ARRIBA DCHA
			if (y > 0) {
				if ( tablero[(y-1)][(x+1)] == 1 ) {
					cuenta++;
				}
			}
			//CENTRO IZQ
			if ( tablero[(y)][(x-1)] == 1 ) {
				cuenta++;
			}
			//CENTRO DCH
			if ( tablero[(y)][(x+1)] == 1 ) {
				cuenta++;
			}
			//ABAJO IZQ
			if (y < 4) {
				if ( tablero[(y+1)][(x-1)] == 1 ) {
					cuenta++;
				}
			}
			//ABAJO CTR
			if (y < 4) {
				if ( tablero[(y+1)][(x)] == 1 ) {
					cuenta++;
				}
			}
			//ABAJO DCHA
			if (y < 4) {
				if ( tablero[(y+1)][(x+1)] == 1 ) {
					cuenta++;
				}
			}
		};


		function finJuego() {
			//HACER QUE EL TABLERO NO RESPONDA MÁS
			var maximoX = 4;
			var maximoY = 4;
			var i;
			var j;

			//VA CAMBIANDO [i] (y)
			for (var i = 0; i <= maximoY; i++) {

				//VA CAMBIANDO [j] (x)
				for (var j = 0; j <= maximoX; j++) {

					tablero[i][j] = null;

				} //for
			} //for
		};



//Esto hay que activarlo con el inicio. Es el contador de espacios
//en blanco que hay debajo.
var espacios;
var faltan;
function inicio () {
//´MINAS QUE FALTAN
	espacios = totalEspacios;
	faltan = document.getElementById('faltan');
	faltan.innerHTML = "<br />Faltan " + espacios + " espacios limpios por descubrir.<br />";
};
