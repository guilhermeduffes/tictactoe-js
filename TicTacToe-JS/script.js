var contador = 0

var tiles

var bola = 'url("assets/circle.png")'

var xis = 'url("assets/xis.png")'

var ganhou = false

var quemGanhou = "";

var jogadorVez = document.getElementById("sJogadorDaVez");

tiles = document.getElementsByClassName("tile")

function selecionarCasa(event, numCasa) {
  const tile = event.target;
  if (contador % 2 == 0) {
    tile.style.backgroundImage = bola;
    tiles[numCasa].removeAttribute("onclick")
    jogadorVez.innerText = "Xis"

  } else {
    tile.style.backgroundImage = xis;
    tiles[numCasa].removeAttribute("onclick")
    jogadorVez.innerText = "Bolinha"
  }
  contador++
  console.log(contador)
  console.log(contador)


  if (tiles[0].style.backgroundImage == bola && tiles[3].style.backgroundImage == bola && tiles[6].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[1].style.backgroundImage == bola && tiles[4].style.backgroundImage == bola && tiles[7].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[2].style.backgroundImage == bola && tiles[5].style.backgroundImage == bola && tiles[8].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[0].style.backgroundImage == bola && tiles[1].style.backgroundImage == bola && tiles[2].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[3].style.backgroundImage == bola && tiles[4].style.backgroundImage == bola && tiles[5].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[6].style.backgroundImage == bola && tiles[7].style.backgroundImage == bola && tiles[8].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[2].style.backgroundImage == bola && tiles[4].style.backgroundImage == bola && tiles[6].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }

  else if (tiles[0].style.backgroundImage == bola && tiles[4].style.backgroundImage == bola && tiles[8].style.backgroundImage == bola) {
    ganhou = true
    quemGanhou = "bolinha"
  }
    
/* ----------------------------------------------------- */

  if (tiles[0].style.backgroundImage == xis && tiles[3].style.backgroundImage == xis && tiles[6].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[1].style.backgroundImage == xis && tiles[4].style.backgroundImage == xis && tiles[7].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[2].style.backgroundImage == xis && tiles[5].style.backgroundImage == xis && tiles[8].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[0].style.backgroundImage == xis && tiles[1].style.backgroundImage == xis && tiles[2].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[3].style.backgroundImage == xis && tiles[4].style.backgroundImage == xis && tiles[5].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[6].style.backgroundImage == xis && tiles[7].style.backgroundImage == xis && tiles[8].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[2].style.backgroundImage == xis && tiles[4].style.backgroundImage == xis && tiles[6].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  }

  else if (tiles[0].style.backgroundImage == xis && tiles[4].style.backgroundImage == xis && tiles[8].style.backgroundImage == xis) {
    ganhou = true
    quemGanhou = "X"
  } else if (ganhou == false && contador == 11) {
    document.getElementById('resultado').innerHTML = "Empate!"
  }

  if (ganhou == true) {
    document.getElementById('resultado').innerHTML = "Quem ganhou:" + quemGanhou
    tiles[2].removeAttribute("onclick")
  }  
}
