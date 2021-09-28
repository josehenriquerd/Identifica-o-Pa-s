function processo(){
  var paisItem = document.getElementsByName("pais");
  var sexoItem = document.getElementsByName("sexo");
  var nome = document.querySelector("input#nome").value;
  var valor = "";
  var texto = "";
  var sexo = "";
  var img = "";

  var data=new Date()
  var hora    = data.getHours();
  var cumprimento="";

  if(hora>=6 && hora<=12){
    cumprimento = "Bom dia"
  }
  else if(horas>12 && horas<=18){
    cumprimento = "Boa tarde"
  }
  else if(horas>18 && hora<6){
    cumprimento = "Boa noite"
  }

  if (sexoItem[0].checked) {
    sexo = "a";
  } else if (sexoItem[1].checked) {
    sexo = "o";
  }

  if (paisItem[0].checked) {
    pais = paisItem[0].value;
    texto = `Olá ${nome}, ${cumprimento}, bem vind${sexo} ao nosso Brasil<br>Morador da ${valor} tem passagem livre<br>`;
    img = "imagens/inglaterra.png";
  } else if (paisItem[1].checked) {
    pais = paisItem[1].value;
    texto = `Olá ${nome}, ${cumprimento}, bem vind${sexo} ao nosso Brasil<br>Morador da ${valor} tem passagem livre<br>`;
    img = "imagens/argentina.jpg";
  } else if (paisItem[2].checked) {
    pais = paisItem[2].value;
    texto = `Olá ${nome}, ${cumprimento}, bem vind${sexo} ao nosso Brasil<br>Morador da ${valor} tem passagem livre<br>`;
    img = "imagens/mexico.png";
  } else if (paisItem[3].checked) {
    pais = paisItem[3].value;
    texto = `Olá ${nome},${cumprimento} Infelizamente<br>Morador da ${pais} não tem passaporte aprovado aqui!<br>`;
    img = "imagens/eua.png";
  } else if (paisItem[4].checked) {
    pais = paisItem[4].value;
    texto = `Olá ${nome}, ${cumprimento}, bem vind${sexo} ao nosso Brasil<br>Morador da ${valor} tem passagem livre<br>`;
    img = "imagens/china.jpg";
  }


  var img = document.createElement("img");
  img.setAttribute("src", img);
  var divResposta = document.querySelector("div#resposta");
  divResposta.innerHTML = texto;
  divResposta.appendChild(img);
}
 