//Guarda os valores
sessionStorage.setItem('cliente', document.form01.cliente.value);

sessionStorage.setItem('telefone', document.form01.telefone.value);

sessionStorage.setItem('email', document.form01.email.value);

sessionStorage.setItem('endereco', document.form01.endereco.value);
//console.log(sessionStorage.getItem('cliente'));

/*
var nomeCliente = document.querySelector("#cliente").value;
var telefoneCliente = document.querySelector("#telefone").value;
var emailCliente = document.querySelector("#email").value;
var enderecoCliente = document.querySelector("#endereco").value;
var cepCliente = document.querySelector("#cep").value;
*/
/*function dadosTeste() {

    let dados = new Object()

    dados["nomeCliente"] = document.querySelector("#cliente").value;
    dados["telefoneCliente"] = document.querySelector("#telefone").value;
    dados["emailCliente"] = document.querySelector("#email").value;
    dados["enderecoCliente"] = document.querySelector("#endereco").value;
    dados["cepCliente"] = document.querySelector("#cep").value;
    
    form.btn1.addEventListener("click", () => {

        console.log(`Nome do cliente: ${dados.nomeCliente}, telefone do cliente: ${dados.telefoneCliente}, email do cliente ${dados.emailCliente}, endereço do cliente: ${dados.enderecoCliente}`)
        console.log(dados);
    })
}*/

let dados = new Object()

dados["nomeCliente"] = document.querySelector("#cliente").value;
dados["telefoneCliente"] = document.querySelector("#telefone").value;
dados["emailCliente"] = document.querySelector("#email").value;
dados["enderecoCliente"] = document.querySelector("#endereco").value;
dados["cepCliente"] = document.querySelector("#cep").value;
console.log(dados);

let form = document.querySelector("form");
let log = document.querySelector("#resRad");

function dadosFormClienteEnvio() {

    document.addEventListener("DOMContentLoaded", function (event) {
        console.log("DOM analisado");

    });

    let dados = new Object()

    dados["nomeCliente"] = document.querySelector("#cliente").value;
    dados["telefoneCliente"] = document.querySelector("#telefone").value;
    dados["emailCliente"] = document.querySelector("#email").value;
    dados["enderecoCliente"] = document.querySelector("#endereco").value;
    dados["cepCliente"] = document.querySelector("#cep").value;
    console.log(dados);


    form.addEventListener("submit", function (event) {
        var adicional = new FormData(form);
        var output = "";
        for (const entry of adicional) {
            output = output + "\r" + entry[0] + ": " + entry[1] + " " + "\r";
        };

        if (output === undefined || output === "") {

            console.log("Preencha corretamente");
        } else {
            //checado.innerHTML = "Teste";
            //resRad.innerText = output;

            var dadosCliente = output; //document.getElementById('resRad'); //.innerText Pegou a saída das escolhas
        }
        event.preventDefault();
        //console.log(resultado);

        dadosCliente = dadosCliente.replace(/[ ]/g, '%20');
        document.getElementById("whatsapp-share-btt").href =
            `https://api.whatsapp.com/send?phone=5521971025148&text=Cliente: ${dados.nomeCliente}, Telefone:${dados.telefoneCliente}, Email:${dados.emailCliente}, Endereço:${dados.enderecoCliente}, Cep:${dados.cepCliente}`;

    }, false);




}

dadosFormClienteEnvio();
