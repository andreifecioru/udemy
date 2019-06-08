<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let agreed = false;

  const onModalClose = event => {
    dispatch("modal-close");
  };

  const onAgree = event => {
    agreed = true;
  };
</script>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: auto;
  }

  header {
    border-bottom: 1px solid bisque;
  }

  footer {
    border-top: 1px solid bisque;
    padding: 1rem;
  }
</style>

<div class="backdrop" on:click={onModalClose} />
<div class="modal">
  <header>
    <!-- This is a "named" slot. -->
    <slot name="header" />
  </header>

  <div class="content">
    <!--
      This is the default slot.
      NOTE: there can be only one default slot.
    -->
    <slot />
  </div>
  <footer>
    {#if !agreed}
      <div>
        <p>You must agree with our terms of service</p>
        <button on:click={onAgree}>Agree</button>
      </div>
    {/if}

    <!-- 
    This is a named slot with a default content. 

    Also bind the "isAgreed" slot prop to the "agreed" local var.
  -->
    <slot name="footer" isAgreed={agreed}>
      <button on:click={onModalClose} disabled={!agreed}>Close</button>
    </slot>
  </footer>
</div>
