<script>
  import Card from "./Card.svelte";
  import CustomInput from "./CustomInput.svelte";

  let _$customInput;

  const onButtonClick = event => {
    // NOTE: it is not recommended to call functions to alter components
    // but there are some corner-cases where this is useful

    _$customInput.clear();
  };
</script>

<Card title="Bind to custom component references">
  <!-- Use the "bind:this" directive to bind to the component -->
  <CustomInput textInput="default value" bind:this={_$customInput} />
  <button on:click={onButtonClick}>Clear content</button>
</Card>
