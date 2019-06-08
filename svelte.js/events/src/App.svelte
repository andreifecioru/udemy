<script>
  import Product from "./Product.svelte";

  const onProductAdd = event => {
    // event.detail contains the data attached to the event.
    console.log("Product was added! Attached data: " + event.detail);
  };

  const onProductRemove = event => {
    console.log("Product was deleted! Attached data: " + event.detail);
  };
</script>

<style>

</style>

<!-- Handle custome events dispatched by the Product component -->
<Product
  productTitle="A book"
  on:add-to-cart={onProductAdd}
  on:remove-from-cart={onProductRemove} />
