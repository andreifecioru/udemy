<script>
  import Card from "./Card.svelte";

  // NOTE: if the local var is set to true initially, 
  // the checkbox will start in the "checked" state.
  let isChecked = true;

  $: console.log(`Is box checked? ${isChecked}`);
</script>

<Card title="Bind to checkbox control">
  <label>
    <input type="checkbox" bind:checked={isChecked}>
    Are you sure?
  </label>
</Card>
