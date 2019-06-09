<script>
  import Card from "./Card.svelte";

  let _$textInput;

  const onButtonClick = event => {

    // NOTE: do not use this to modify DOM elements 
    // (use svelte rendering pipeline for that)

    console.log(_$textInput.value);
  };
</script>

<Card title="Bind to DOM element references">
  <!-- Use the "bind:this" directive to bind to the actual underlying DOM element -->
  <input type="text" bind:this={_$textInput} value="default"/>
  <button on:click={onButtonClick}>Click me!</button>
</Card>
