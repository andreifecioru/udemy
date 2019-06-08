<script>
  import { tick } from "svelte";

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
  let textAreaText = "Some dummy text";
  let isUpper = true;

  const onShowModalClick = event => {
    showModal = true;
  };

  const onModalClose = event => {
    showModal = false;
  };

  const toggleCase = input => {
    isUpper = !isUpper;
    return isUpper ? input.toLowerCase() : input.toUpperCase();
  };

  // We want to select text, press TAB and toggle upper/lower case the selected text
  // while also maintaining the selection area.
  const transformText = event => {
    // We're only interested in TAB presses (keycode 9)
    if (event.which !== 9) return;

    console.log("TAB pressed!");

    const selStart = event.target.selectionStart;
    const selEnd = event.target.selectionEnd;

    const value = event.target.value;
    textAreaText =
      value.slice(0, selStart) +
      toggleCase(value.slice(selStart, selEnd)) +
      value.slice(selEnd);

    // reselect the text using the "tick()" promise
    tick().then(() => {
      event.target.selectionStart = selStart;
      event.target.selectionEnd = selEnd;
    });
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
  <Modal on:modal-close={onModalClose} let:isAgreed={closable}>

    <!-- Target the "header" slot. -->
    <h1 slot="header">Hello!</h1>
    <p>It works!</p>

    <!-- Target the "footer" slot -->
    <div slot="footer">
      <button on:click={onModalClose} disabled={!closable}>Close</button>
    </div>
  </Modal>
{/if}

<br />
<hr />

<textarea
  rows="7"
  value={textAreaText}
  on:keydown|preventDefault={transformText} />
