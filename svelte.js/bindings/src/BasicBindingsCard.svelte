<script>
  import Card from "./Card.svelte";

  let variableOne = "variable one";
  let variableTwo = "variable two";

  $: console.log(`Variable one: ${variableOne}`);
  $: console.log(`Variable two: ${variableTwo}`);
</script>

<Card title="Basic bindings">
  <!-- 
  This is the shorthand form (do not abuse it) 

  NOTE: if the local var would be named "value" you cound have written even shorter:
    <input type="text" {value} />
  -->
  <input type="text" bind:value={variableOne} />

  <br />

  <!-- This is the longer (more explicit form) -->
  <input
    type="text"
    value={variableTwo}
    on:input={e => (variableTwo = e.target.value)} />
</Card>
