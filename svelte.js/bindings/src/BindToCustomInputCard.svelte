<script>
  import Card from "./Card.svelte";
  import CustomInput from "./CustomInput.svelte"

  let textInput = "default value";

  $: console.log(`Text input: ${textInput}`);
</script>

<Card title="Bind to custom components.">
  <!-- Shortest-hand version for 2-way binding to a prop of a custom component -->
  <CustomInput {textInput} />
</Card>
