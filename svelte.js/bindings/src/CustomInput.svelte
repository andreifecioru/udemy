<script>
  export let textInput;

  // NOTE: you can also export functions from a component
  export const clear = () => {
    textInput = "";
  };
</script>

<!-- 
  NOTE: if "type" attribute is set dynamically,
  binding on the "value" will NOT work (not supported) 
-->
<input type="text" bind:value={textInput} />
