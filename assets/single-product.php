<?php

/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     1.6.4
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

get_header('shop'); ?>


<?php
/**
 * woocommerce_before_main_content hook.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 */
do_action('woocommerce_before_main_content');
?>





<?php while (have_posts()) : ?>
	<?php the_post(); ?>

	<?php wc_get_template_part('content', 'single-product'); ?>

<?php endwhile; // end of the loop. 
?>


<!--------------------------------->

<script>
	console.log("Carregou o script");

	const opcao01 = "Camarão";
	const opcao02 = "Carne seca";

	var selectElem = document.getElementById('escolha-o-sabor');
	var res = document.querySelector('div#res'); // pega o id da DIV pela #
	//var pElem = document.getElementById('p')
	// When a new <option> is selected
	selectElem.addEventListener('change', function() { //função para pegar o select de um formulárui
		var index = selectElem.selectedIndex;
		// Add that data to the <p>
		//pElem.innerHTML = 'selectedIndex: ' + index;

		if (index == [1]) { // Vê a igualdade  é imprime no console e insere na DIV #res o resultado
			console.log(`O sabor escolhido foi ${opcao01}.`);
			//res.innerHTML = `O sabor escolhido foi ${opcao01}.`;

		} else if (index == [2]) { // Vê a igualdade  é imprime no console e insere na DIV #res o resultado
			console.log(`O sabor escolhido foi ${opcao02}.`);
			//res.innerHTML = `O sabor escolhido foi ${opcao02}.`;
		}

	})

	function pegaDados() {

		var form = document.querySelector("form");
		var log = document.querySelector("#resRad");

		form.addEventListener("submit", function(event) {
			var adicional = new FormData(form);
			var output = "";
			for (const entry of adicional) {
				output = output + entry[0] + " : " + entry[1] + "\r";
			};
			//checado.innerHTML = "Teste";
			resRad.innerText = output;
			event.preventDefault();
		}, false);


	}
</script>

<form action="">
	<select id="escolha-o-sabor" class="" name="attribute_escolha-o-sabor" data-attribute_name="attribute_escolha-o-sabor" data-show_option_none="yes">
		<option value="">Escolha uma opção</option>
		<option value="Creme de aipim com camarão" class="attached enabled">Creme de aipim com camarão</option>
		<option value="Creme de aipim com carne seca" class="attached enabled">Creme de aipim com carne seca</option>
	</select>

	<!--<a id="sendbtn wa-order-button-click" class="single_add_to_cart_button botao_teste" href="https://wa.me/5521971025148?text=Esse+%C3%A9+o+meu+pedido%0D%0A%0D%0A*Creme+de+aipim*%0D%0A*Pre%C3%A7o:*%20R$17%0D%0A*URL:*%20http%3A%2F%2Fprimocappo.hospedagemdesites.ws%2Fdelivery%2Fproduto%2Fcreme-de-aipim%2F%0D%0A%0D%0AObrigado%21" role="button" target="_blank">
	<button type="button" id="sendbtn wa-order-button-click" class="wa-order-button single_add_to_cart_button button alt">Faça se pedido</button></a>-->
	<button type="button" id="" class="wa-order-button single_add_to_cart_button button alt">Faça se pedido</button>
	</div>

</form>

<div id="res"></div>

<!--------------------------------->


<?php
/**
 * woocommerce_after_main_content hook.
 *
 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
 */
do_action('woocommerce_after_main_content');
?>

<?php
/**
 * woocommerce_sidebar hook.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
do_action('woocommerce_sidebar');
?>



<?php
get_footer('shop');

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
