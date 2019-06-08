<script>
  import { createEventDispatcher } from "svelte";

  export let productTitle;

  const onClick = (event) => {
    console.log("Something was clicked!")
  };

  const addToCart = (event) => {
    dispatch('add-to-cart', "some data");
  };

  const removeFromCart = (event) => {
    dispatch('remove-from-cart', "some other data")
  };

  const dispatch = createEventDispatcher();
</script>

<!-- You can also listen for events here (via DOM event propagation) -->
<article on:click="{onClick}">
  <h1>{productTitle}</h1>
  <!-- Fire some custom events when buttons are clicked -->
  <button on:click="{addToCart}">Add to cart</button>
  <button on:click="{removeFromCart}">Delete</button>
</article>