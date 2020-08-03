//Guarda os valores
//sessionStorage.setItem('cliente', document.form01.cliente.value);

//sessionStorage.setItem('telefone', document.form01.telefone.value);

//sessionStorage.setItem('email', document.form01.email.value);

//sessionStorage.setItem('endereco', document.form01.endereco.value);
//console.log(sessionStorage.getItem('cliente'));


let form = document.querySelector("form");
let log = document.querySelector("#resRad");
let opcoes;
var opcao01 = document.querySelector("input#escolha01").value;
var opcao02 = document.querySelector("input#escolha02").value;
var opcao03 = document.querySelector("input#escolha03").value;

console.log(opcao01);
console.log(opcao02);
console.log(opcao03);

function dadosFormClienteEnvio() {

    document.addEventListener("DOMContentLoaded", function (event) {
        console.log("DOM analisado");

    });

    form.addEventListener("submit", function (event) {
        var adicional = new FormData(form);
        var output = "";
        for (const entry of adicional) {
            output = output + "\r" + entry[0] + ": " + entry[1] + " " + "\r"

        };

        var dadosCliente = output;
        event.preventDefault();
        console.log(dadosCliente);

        let dados = new Object()
        //Retorna esse objeto

        dados["saborEscolhido"] = document.querySelector("#sabor").value;
        //dados["adicionalOpcoes"] = document.querySelector("#box-opcoes").value;
        dados["adicionalOpcoes"] = document.querySelectorAll('[name=Adicional]');
        dados["nomeCliente"] = document.querySelector("#cliente").value;
        dados["telefoneCliente"] = document.querySelector("#telefone").value;
        dados["emailCliente"] = document.querySelector("#email").value;
        dados["enderecoCliente"] = document.querySelector("#endereco").value;
        dados["cepCliente"] = document.querySelector("#cep").value;

        opcao01 = dados.adicionalOpcoes[0].value;
        opcao02 = dados.adicionalOpcoes[1].value;
        opcao01 = dados.adicionalOpcoes[2].value;

        /*opcoes = () => {
    
    
            if (adicional == dados.adicionalOpcoes[0]) {
                console.log(dados.adicionalOpcoes[0].value);
            }
    
        };*/
        console.log(opcoes);
        console.log(dados);

        dadosCliente = dadosCliente.replace(/[ ]/g, '%20');
        document.getElementById("whatsapp-share-btt").href = `https://api.whatsapp.com/send?phone=5521971025148&text=Olá! Esse é o meu pedido: Meu nome é ${dados.nomeCliente},  ${dadosCliente}`;

        //document.getElementById("whatsapp-share-btt").href = `https://api.whatsapp.com/send?phone=5521971025148&text=Cliente: ${dados.nomeCliente}, Telefone: ${dados.telefoneCliente}, Email: ${dados.emailCliente}, Endereço: ${dados.enderecoCliente}, Cep: ${dados.cepCliente}, Tipo de carne: ${dados.saborEscolhido}, Adicionais: ${opcoes}`;

    }, false);

}

dadosFormClienteEnvio();
