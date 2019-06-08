<script>
  let productTitle;


  const onClick = (event) => {
    console.log("Clicked inside the Product component.")
  }
</script>

<!-- You can also listen for events here (via DOM event propagation) -->
<article on:click="{onClick}">
  <h1>{productTitle}</h1>
  <!-- Forward the click event up the component tree -->
  <button on:click>Add to cart</button>
  <button>Delete</button>
</article>