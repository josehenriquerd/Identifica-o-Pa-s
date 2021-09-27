function identificacao() {
  var paisItem = document.getElementsByName("pais");
  var sexoItem = document.getElementsByName("sexo");
  var nome = document.querySelector("input#nome").value;
  var pais = "";
  var frase = "";
  var sexo = "";
  var imgUlr = "";

  if (sexoItem[0].checked) {
    sexo = "a";
  } else if (sexoItem[1].checked) {
    sexo = "o";
  }

  if (paisItem[0].checked) {
    pais = paisItem[0].value;
    frase = `Olá ${nome}, sejá bem vind${sexo} ao brasil!<br>Morador da ${pais} tem passaporte aprovado aqui!<br>`;
    imgUrl = "imagens/inglaterra.png";
  } else if (paisItem[1].checked) {
    pais = paisItem[1].value;
    frase = `Olá ${nome}, sejá bem vind${sexo} ao brasil!<br>Morador da ${pais} tem passaporte aprovado aqui<br>`;
    imgUrl = "imagens/argentina.jpg";
  } else if (paisItem[2].checked) {
    pais = paisItem[2].value;
    frase = `Olá ${nome}, sejá bem vind${sexo} ao brasil!<br>Morador da ${pais} tem passaporte aprovado aqui!<br>`;
    imgUrl = "imagens/mexico.png";
  } else if (paisItem[3].checked) {
    pais = paisItem[3].value;
    frase = `Olá ${nome}, Infelizamente<br>Morador da ${pais} não tem passaporte aprovado aqui!<br>`;
    imgUrl = "imagens/eua.png";
  } else if (paisItem[4].checked) {
    pais = paisItem[4].value;
    frase = `Olá ${nome}, sejá bem vind${sexo} ao brasil!<br>Morador da ${pais} tem passaporte aprovado aqui!<br>`;
    imgUrl = "imagens/china.jpg";
  }

  var img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  var divResposta = document.querySelector("div.resultado");
  divResposta.innerHTML = frase;
  divResposta.appendChild(img);
}
