<script>
  import Card from "./Card.svelte";

  const green = { color: "green" };
  const red = { color: "red" };
  const black = { color: "black" };

  // NOTE: if the local var is set to one valid option initially
  // the corresponding options in the dropdown is selected.
  let selectedOption = green;

  $: console.dir(`Selected option: ${selectedOption.color}`);
</script>

<Card title="Bind to drop-down selection control">
  <h2>What is your favourite color?</h2>

  <!-- 
    Use "bind:value" directive on the "select" HTML tag.

    NOTE: for each option, you can bind the value to an object.
  -->
  <select bind:value={selectedOption}>
    <option value={green}>Green</option>
    <option value={red}>Red</option>
    <option value={black}>Black</option>
  </select>
</Card>
