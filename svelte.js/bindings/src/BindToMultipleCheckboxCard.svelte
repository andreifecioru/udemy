<script>
  import Card from "./Card.svelte";

  // NOTE: if the local var is set to one/several valid options initially,
  // the corresponding checkboxes will be properly checked.
  let selectedOption = ["green", "black"];

  $: console.log(`Selected option: ${selectedOption}`);
</script>

<Card title="Bind to multiple related checkboxes">
  <h2>What is your favourite color?</h2>

  <!-- 
    Use "bind:group" directive on all input controls to setup 2-way bindings.

    NOTE: To group multiple input controls give them the same "name" attribute 
  -->
  <label>
    <input type="checkbox" name="fav-color" value="red" bind:group={selectedOption}>
    Red
  </label>
  <label>
    <input type="checkbox" name="fav-color" value="green" bind:group={selectedOption}>
    Green
  </label>
  <label>
    <input type="checkbox" name="fav-color" value="black" bind:group={selectedOption}>
    Black
  </label>
</Card>
