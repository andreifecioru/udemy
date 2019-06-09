<script>
  import Card from "./Card.svelte";

  let value = 0;

  $: console.log(`Text input value: ${value}`);
</script>

<Card title="Bind to input with type 'number'">
  <!-- 
    Shorthand version for 2-way binding to a text input value.
  -->
  <input type="number" bind:value={value}>
</Card>
