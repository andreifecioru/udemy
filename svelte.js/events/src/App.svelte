<script>
	import Product from "./Product.svelte";


	const onProductAdd = (event) => {
		console.log("Clicked in App component.");
	};
</script>

<style>
</style>

<Product productTitle="A book" on:click="{onProductAdd}"/>

