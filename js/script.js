"use strict";
//Promoções

let promocao01 = document.querySelector("#promocao01");
let promocao02 = document.querySelector("#promocao02");
let promocao03 = document.querySelector("#promocao03");
let indisponivel01 = document.querySelector("#indisponivel01");
let indisponivel02 = document.querySelector("#indisponivel02");
let indisponivel03 = document.querySelector("#indisponivel03");
let botoesPromocao01 = document.querySelector("#botoesPromocao01");
let botoesPromocao02 = document.querySelector("#botoesPromocao02");
let botoesPromocao03 = document.querySelector("#botoesPromocao03");

let data = new Date();
let diaDaSemana = new Array(7);

diaDaSemana[0] = "Domingo";
diaDaSemana[1] = "Segunda";
diaDaSemana[2] = "Terça";
diaDaSemana[3] = "Quarta";
diaDaSemana[4] = "Quinta";
diaDaSemana[5] = "Sexta";
diaDaSemana[6] = "Sabado";

var diaPromocao = diaDaSemana[data.getDay()];
console.log(diaPromocao);

if (diaPromocao === "Segunda" || diaPromocao === "Quarta") {
  indisponivel02.innerHTML = "Promoção indisponível";
  indisponivel03.innerHTML = "Promoção indisponível";
  botoesPromocao02.style.display = "none";
  botoesPromocao03.style.display = "none";
  promocao02.style.background = "rgba(44, 42, 44, 0.3)";
  promocao03.style.background = "rgba(44, 42, 44, 0.3)";
} else if (diaPromocao === "Terça" || diaPromocao === "Quinta") {
  indisponivel01.innerHTML = "Promoção indisponível";
  indisponivel03.innerHTML = "Promoção indisponível";
  botoesPromocao01.style.display = "none";
  botoesPromocao03.style.display = "none";
  promocao01.style.background = "rgba(44, 42, 44, 0.3)";
  promocao03.style.background = "rgba(44, 42, 44, 0.3)";
} else if (diaPromocao === "Sexta" || diaPromocao === "Sabado") {
  indisponivel01.innerHTML = "Promoção indisponível";
  indisponivel02.innerHTML = "Promoção indisponível";
  botoesPromocao01.style.display = "none";
  botoesPromocao02.style.display = "none";
  promocao01.style.background = "rgba(44, 42, 44, 0.3)";
  promocao02.style.background = "rgba(44, 42, 44, 0.3)";
} else {
  
  //promocao01.innerHTML = "<h5>Não temos promoções disponíveis</h5>";
  indisponivel01.innerHTML = "Promoção indisponível";
  indisponivel02.innerHTML = "Promoção indisponível";
  indisponivel03.innerHTML = "Promoção indisponível";

  botoesPromocao01.style.display = "none";
  botoesPromocao02.style.display = "none";
  botoesPromocao03.style.display = "none";
  promocao01.style.background = "rgba(44, 42, 44, 0.3)";
  promocao02.style.background = "rgba(44, 42, 44, 0.3)";
  promocao03.style.background = "rgba(44, 42, 44, 0.3)";
};

/*-----------------------------------------------------*/
//Script para pegar cep

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  //document.getElementById("cidade").value = "";
  //document.getElementById("uf").value = "";
  //document.getElementById("nome").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    //document.getElementById("cidade").value = conteudo.localidade;
    //document.getElementById("uf").value = conteudo.uf;
    //document.getElementById("ibge").value = conteudo.ibge;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  let cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    let validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      //document.getElementById("cidade").value = "...";
      //document.getElementById("uf").value = "...";
      //document.getElementById("ibge").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

/*-----------------------------------------------------*/

//Formulário

let form = document.querySelector("form");
let log = document.querySelector("#resRad");
let opcoes;
let btn1 = document.querySelector("#btn1");
let confirmacao = document.querySelector("#confirmacao")



function dadosFormClienteEnvio() {
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM analisado");
  });

  form.addEventListener(
    "submit",
    function (event) {
      let adicional = new FormData(form);
      let output = "";
      for (const entry of adicional) {
        output = output + "\r" + entry[0] + ": " + entry[1] + " " + "\r";
      }

      let dadosCliente = output;
      event.preventDefault();
      console.log(dadosCliente);

      let dados = new Object();
      //Retorna esse objeto
      dados["enderecoRua"] = document.querySelector("#rua").value;
      dados["enderecoBairro"] = document.querySelector("#bairro").value;
      dados["enderecoComplemento"] = document.querySelector("#complemento").value;
      dados["pagamentoEscolhido"] = document.querySelector("#pagamento").value;
      dados["nomeCliente"] = document.querySelector("#cliente").value;
      dados["telefoneCliente"] = document.querySelector("#telefone").value;
      dados["emailCliente"] = document.querySelector("#email").value;
      dados["obsevacaoCliente"] = document.querySelector("#obsevacao").value;
      //dados["adicionalOpcoes"] = document.querySelectorAll("[name=Adicional]");

      console.log(dados.enderecoBairro);
      console.log(opcoes);
      console.log(dados);


      btn1.addEventListener("click", () =>{

        confirmacao.innerHTML = "Dados confirmados! Clique em enviar pedido.";

      });

        //Revisar as promoções para inserir na mensagemn wp
      var promocoes;

      if (promocoes === promocao01) {
        var promocoes = document.querySelector("#promocao01");
      } else if (promocoes === promocao02) {
        var promocoes = document.querySelector("#promocao02");
      } else {
        var promocoes = document.querySelector("#promocao03");
      }
      //Revisar as promoções para inserir na mensagemn wp

      console.log(promocoes);

      dadosCliente = dadosCliente.replace(/[ ]/g, "%20");
      document.getElementById(
        "whatsapp-share-btt"
      ).href = `https://api.whatsapp.com/send?phone=5521971025148&text=Olá! Acessei a página Delivery da PrimoCappo: Meu nome é: ${dados.nomeCliente} | Promoção do dia ${diaPromocao} | Bairro: ${dados.enderecoBairro} | ${dadosCliente} | Confirmação de modo de pagamento: ${dados.pagamentoEscolhido}.`;
    },
    false
  );
}

dadosFormClienteEnvio();

//----------------------------------------
