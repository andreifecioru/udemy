<script>
  import Card from "./Card.svelte";

  // NOTE: if the local var is set to one valid option initially
  // the corresponding radio control will be properly checked.
  let selectedOption = "green";

  $: console.log(`Selected option: ${selectedOption}`);
</script>

<Card title="Bind to radio-button control">
  <h2>What is your favourite color?</h2>

  <!-- 
    Use "bind:group" directive on all radio controls to setup 2-way bindings.

    NOTE: To group multiple radio controls give them the same "name" attribute 
  -->
  <label>
    <input type="radio" name="fav-color" value="red" bind:group={selectedOption}>
    Red
  </label>
  <label>
    <input type="radio" name="fav-color" value="green" bind:group={selectedOption}>
    Green
  </label>
  <label>
    <input type="radio" name="fav-color" value="black" bind:group={selectedOption}>
    Black
  </label>
</Card>
