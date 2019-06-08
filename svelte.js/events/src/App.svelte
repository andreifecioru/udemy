<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";

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

  let showModal = false;
  let closable = false;

  const onShowModalClick = event => {
    showModal = true;
  };

  const onModalClose = event => {
    showModal = false;
  };
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

<button on:click={onShowModalClick}>Show modal</button>

<!--
		Bind the "isAgreed" slot prop with the "closable" local var.
-->
{#if showModal}
  <Modal 
    on:modal-close={onModalClose} 
    let:isAgreed={closable}>

    <!-- Target the "header" slot. -->
    <h1 slot="header">Hello!</h1>
    <p>It works!</p>

    <!-- Target the "footer" slot -->
    <div slot="footer">
      <button on:click={onModalClose} disabled={!closable}>Close</button>
    </div>
  </Modal>
{/if}
