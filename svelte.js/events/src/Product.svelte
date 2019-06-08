<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let title;
  export let price;

  const onClick = (event) => {
    console.log("Something was clicked!")
  };

  const addToCart = (event) => {
    dispatch('add-to-cart', {id: id});
  };

  const removeFromCart = (event) => {
    dispatch('remove-from-cart', {id: id});
  };

  const dispatch = createEventDispatcher();
</script>

<!-- You can also listen for events here (via DOM event propagation) -->
<article on:click="{onClick}">
  <h1>{title}</h1>
  <h2>${price}</h2>
  <!-- Fire some custom events when buttons are clicked -->
  <button on:click="{addToCart}">Add to cart</button>
  <button on:click="{removeFromCart}">Delete</button>
</article>