<script>
  import Product from "./Product.svelte";

  const onProductAdd = event => {
    // event.detail contains the data attached to the event.
    console.log("Product was added! Attached data: " + event.detail.id);
  };

  const onProductRemove = event => {
    console.log("Product was deleted! Attached data: " + event.detail.id);
  };

  let products = [
    {
      id: Math.random(),
      title: "A book",
      price: 9.99
    },
    {
      id: Math.random(),
      title: "A car",
      price: 9999.99
    }
  ];
</script>

<style>

</style>

<!-- 
	Handle custom events dispatched by the Product component.
	NOTE: you can pass in prop data using the spread operator on objects.
-->
{#each products as product}
  <Product
    {...product}
    on:add-to-cart={onProductAdd}
    on:remove-from-cart={onProductRemove} />
{/each}
