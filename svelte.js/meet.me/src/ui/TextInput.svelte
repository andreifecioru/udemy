<script>
  export let controlType = null;
  export let id;
  export let label;
  export let rows = 3;
  export let value;
  export let inputType = "text";
  export let isValid = true;
  export let errorMsg = "";

  let wasTouched = false;

  const touch = event => {
    wasTouched = true;
  };
</script>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }

  .error {
    background-color: rgb(233, 224, 224);
  }

  .error-message {
    color: #e40763;
    font-weight: bold;
  }
</style>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if controlType === 'textarea'}
    <textarea class:error="{!isValid && wasTouched}" {rows} {id} {value} on:input on:blur="{touch}"/>
  {:else}
    <input class:error="{!isValid && wasTouched}" type={inputType} {id} {value} on:input on:blur="{touch}"/>
  {/if}

  {#if !isValid && wasTouched}
    <p class="error-message">{errorMsg}</p>
  {/if}

</div>
