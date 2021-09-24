function identificacao() {
  var sexo = document.getElementsByName("sexo");
  var pais = document.getElementsByName("pais");
  var varnome = document.querySelector("input#nome");
  

  if (pais[0].checked) {
    //Inglaterra
    if (sexo[0].checked) {
      texto = `Olá, ${nome}, seja bem vindo ao Brasil, mordador da inglaterra tem passaporte aprovado aqui`;
      
    } else if (sexo[1].checked) {
      texto = `olá,${nome}, seja bem vinda ao Brasil, morador da inglaterra tem passaporte aprovado aqui`;
    }
  }
  if (pais[1].checked) {
    //India
    if (sexo[0].checked) {
      texto = `Olá, ${nome}, seja bem vindo ao Brasil, mordador da inglaterra tem passaporte aprovado aqui`;
    } else if (sexo[1].checked) {
      texto = `olá,${nome}, seja bem vinda ao Brasil, morador da inglaterra tem passaporte aprovado aqui`;
    }
  }
  if (pais[2].checked) {
    //Inglaterra
    if (sexo[0].checked) {
      texto = `Olá, ${nome}, seja bem vindo ao Brasil, mordador da inglaterra tem passaporte aprovado aqui`;
    } else if (sexo[1].checked) {
      texto = `olá,${nome}, seja bem vinda ao Brasil, morador da inglaterra tem passaporte aprovado aqui`;
    }
  }
  if (pais[3].checked) {
    //Inglaterra
    if (sexo[0].checked) {
      texto = `Olá, ${nome}, seja bem vindo ao Brasil, mordador da inglaterra tem passaporte aprovado aqui`;
    } else if (sexo[1].checked) {
      texto = `olá,${nome}, seja bem vinda ao Brasil, morador da inglaterra tem passaporte aprovado aqui`;
    }
  }
  if (pais[4].checked) {
    //Inglaterra
    if (sexo[0].checked) {
      texto = `Olá, ${nome}, seja bem vindo ao Brasil, mordador da inglaterra tem passaporte aprovado aqui`;
    } else if (sexo[1].checked) {
      texto = `olá,${nome}, seja bem vinda ao Brasil, morador da inglaterra tem passaporte aprovado aqui`;
    }
  }
}
