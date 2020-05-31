-> GRID - onRecord

--------------------------------------------------------------------

{wpp} = "<img class='cm_wpp' data-phone='".{telefone}."' data-nome='".{nome}."' data-id='".{id}."' src='/scriptcase9/app/BootstrapTour/_lib/img/grp__NM__ico__NM__if_WhatsApp_1298775.png' border='0'>";

--------------------------------------------------------------------

-> GRID - onScriptInit

--------------------------------------------------------------------

sc_include_lib("Jquery");

?>
<script>
	window.onload = function(e){ 
		$(".cm_wpp").on("click", function() {
			var phone = $(this).attr("data-phone");
			var nome = $(this).attr("data-nome");
			var id = $(this).attr("data-id");
			var token = ''; //coloque o seu token aqui
			
			//só para texto
			var url = 'https://eu6.chat-api.com/instance4371/message?token='+token;
			
			//para envio de imagens também
			//var url = 'https://eu6.chat-api.com/instance4371/sendFile?token='+token;
			
			var body = 'Olá '+nome+', tudo bem?\nVocê está recebendo uma mensagem devido à sua solicitação de teste da API do WhatsApp.';
			
			//link da imagem contendo .jpg ou .png no final
			var img = 'http://camilamoreira.com.br/blog/wp-content/uploads/2017/03/camilamoreira.png';
			
			//passa o diretótio da imagem
			var img = '../_lib/img/camilamoreira.png';

			var data = {
				phone: phone,
				body: body,
				filename: img //vai receber a imagem
			};
			
			$.ajax(url, {
			data : JSON.stringify(data),
			contentType : 'application/json',
			type : 'POST'
			});
		});
	}
</script>
<?php

--------------------------------------------------------------------

-> FORM - beforeInsert

--------------------------------------------------------------------

$phone = {telefone};
$phone = str_replace(" ", "", $phone);
$phone = str_replace("+", "", $phone);
$phone = str_replace(".", "", $phone);
{telefone} = $phone;

--------------------------------------------------------------------

-> FORM - afterInsert

$var_token = ""; //coloque o seu token aqui
$var_phone = {telefone};
$var_nome = {nome};
$var_conteudo = "Olá ".$var_nome.", tudo bem? Você está recebendo uma mensagem devido à sua solicitação de teste da API do WhatsApp.
	Att. Camila Moreira";
$var_imagem = "../_lib/img/camilamoreira.png"; //caminho ou link da imagem desejada

$data = [
	'phone' => $var_phone,
	'body' => $var_conteudo,
	'filename' => $var_imagem
];
$json = json_encode($data);

//para envio de textos
$url = 'https://eu6.chat-api.com/instance4371/message?token='.$var_token;

//para envio de imagens
//$url = 'https://eu6.chat-api.com/instance4371/sendFile?token='.$var_token;

$options = stream_context_create(['http' => [
	'method'  => 'POST',
	'header'  => 'Content-type: application/json',
	'content' => $json
]
								 ]);

$result = file_get_contents($url, false, $options);