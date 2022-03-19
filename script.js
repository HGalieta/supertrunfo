var carta1 = {
  nome: "Geralt",
  imagem: "https://t2.tudocdn.net/362026?w=660&h=574",
  atributos: { Ataque: 8, Defesa: 6, Magia: 5, DefesaContraMagia: 7 }
};

var carta2 = {
  nome: "Yennefer",
  imagem:
    "https://psverso.com.br/wp-content/uploads/2021/04/the-witcher-3-guia-romance-yennefer.png",
  atributos: {
    Ataque: 4,
    Defesa: 3,
    Magia: 9,
    DefesaContraMagia: 8
  }
};

var carta3 = {
  nome: "Vesemir",
  imagem:
    "https://meups.com.br/wp-content/uploads/2021/09/The-Witcher-da-Netlic.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 7,
    Magia: 5,
    DefesaContraMagia: 7
  }
};

var carta4 = {
  nome: "Triss",
  imagem:
    "https://manualdosgames.com/wp-content/uploads/2021/02/tumblr_pmmo8gpKI31wwdtjqo1_1280.png",
  atributos: {
    Ataque: 4,
    Defesa: 4,
    Magia: 8,
    DefesaContraMagia: 9
  }
};

var carta5 = {
  nome: "Ciri",
  imagem:
    "https://valedopontar.com.br/wp-content/uploads/2019/11/ciri-the-witcher-3.png",
  atributos: {
    Ataque: 7,
    Defesa: 7,
    Magia: 7,
    DefesaContraMagia: 8
  }
};

var carta6 = {
  nome: "Foglet",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/5/52/Tw3_cardart_monsters_foglet.png/revision/latest/scale-to-width-down/309?cb=20170425202631",
  atributos: {
    Ataque: 5,
    Defesa: 7,
    Magia: 4,
    DefesaContraMagia: 4
  }
};

var carta7 = {
  nome: "Grifo",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/3/3e/Gwent_cardart_monsters_griffin.jpg/revision/latest/scale-to-width-down/900?cb=20180529211200",
  atributos: {
    Ataque: 8,
    Defesa: 6,
    Magia: 3,
    DefesaContraMagia: 5
  }
};

var carta8 = {
  nome: "Gargula",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/9/92/Tw3_cardart_monsters_gargoyle.png/revision/latest/scale-to-width-down/309?cb=20170425202633",
  atributos: {
    Ataque: 7,
    Defesa: 10,
    Magia: 5,
    DefesaContraMagia: 6
  }
};

var carta9 = {
  nome: "Cockatrice",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/b/bf/Tw3_cardart_monsters_cockatrice.png/revision/latest/scale-to-width-down/309?cb=20170425202404",
  atributos: {
    Ataque: 7,
    Defesa: 6,
    Magia: 6,
    DefesaContraMagia: 7
  }
};

var carta10 = {
  nome: "Leshen",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/3/35/Tw3_cardart_monsters_leshen.png/revision/latest/scale-to-width-down/309?cb=20170425202849",
  atributos: {
    Ataque: 10,
    Defesa: 8,
    Magia: 8,
    DefesaContraMagia: 7
  }
};
var carta11 = {
  nome: "Espectro",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/c/c6/Tw3_journal_wraith.png/revision/latest/scale-to-width-down/654?cb=20160514164125",
  atributos: {
    Ataque: 6,
    Defesa: 5,
    Magia: 7,
    DefesaContraMagia: 8
  }
};

var carta12 = {
  nome: "Lobisomen",
  imagem:
    "https://static.wikia.nocookie.net/witcher/images/4/46/Tw3_cardart_monsters_werewolf.png/revision/latest/scale-to-width-down/309?cb=20170425203100",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 4,
    DefesaContraMagia: 6
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12
];
var cartaJogador;
var cartaMaquina;

function sortearCarta() {
  var indiceCartaMaquina = parseInt(Math.random() * 12);
  var indiceCartaJogador = parseInt(Math.random() * 12);
  cartaJogador = cartas[indiceCartaJogador];
  exibirCartaJogador();

  while (indiceCartaMaquina == indiceCartaJogador) {
    var indiceCartaMaquina = parseInt(Math.random() * 5);
  }
  cartaMaquina = cartas[indiceCartaMaquina];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  console.log(cartaJogador);
  console.log(cartaMaquina);
}

function obtemAtributo() {
  var getAtributo = document.getElementsByName("atributo");

  for (var i = 0; i < getAtributo.length; i++) {
    if (getAtributo[i].checked == true) {
      return getAtributo[i].value;
    }
  }
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var molduraJogador =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
  var tagHTMLJogador = "<div id='opcoes' class='carta-status'>";

  var opcoesTextoJogador = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTextoJogador +=
      "<input style='line-heigth:120%;' type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      "<strong>" +
      cartaJogador.atributos[atributo] +
      "</strong></input><br>";
  }
  var nome = "<p class='carta-subtitle'>" + cartaJogador.nome + "</p>";
  divCartaJogador.innerHTML =
    molduraJogador + nome + tagHTMLJogador + opcoesTextoJogador + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var molduraMaquina =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
  var tagHTMLMaquina = "<div id='opcoes' class='carta-status'>";

  var opcoesTextoMaquina = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTextoMaquina +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      "<strong>" +
      cartaMaquina.atributos[atributo] +
      "</strong></p>";
  }
  var nome = "<p class='carta-subtitle'>" + cartaMaquina.nome + "</p>";
  divCartaMaquina.innerHTML =
    molduraMaquina + nome + tagHTMLMaquina + opcoesTextoMaquina + "</div>";
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  var valorAtributoJogador = cartaJogador.atributos[atributoSelecionado];
  var valorAtributoMaquina = cartaMaquina.atributos[atributoSelecionado];
  exibirCartaMaquina();

  var resultado = document.getElementById("resultado");

  if (valorAtributoJogador > valorAtributoMaquina) {
    resultado.innerHTML = "Você Venceu!";
  } else if (valorAtributoJogador == valorAtributoMaquina) {
    resultado.innerHTML = "A rodada empatou.";
  } else {
    resultado.innerHTML = "Você Perdeu.";
  }
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("novaPartida").disabled = false;
}

function refresh() {
  document.location.reload();
}