<script>
  import {
    createEventDispatcher,
    // Creation life-cycle events
    onMount,
    onDestroy,
    // Update life-cycle events
    beforeUpdate,
    afterUpdate
  } from "svelte";

  const dispatch = createEventDispatcher();

  let agreed = false;
  let autoscroll = false;

  const onModalClose = event => {
    dispatch("modal-close");
  };

  const onAgree = event => {
    agreed = true;
  };

  onMount(() => {
    // Usually this is where you load data from remote source
    // (show a loading spinner, etc.)
    console.log("On mount");
  });

  onDestroy(() => {
    console.log("On destroy");
  });

  beforeUpdate(() => {
    console.log("Before update");

    // save state before the DOM gets updated
    autoscroll = agreed;
  });

  afterUpdate(() => {
    console.log("After update");

    // load stored state after the DOM was updated
    if (autoscroll) {
      const modal = document.querySelector(".modal");
      // scroll all the way to the bottom
      modal.scrollTo(0, modal.scrollHeight);
    }
  });

  console.log("Script area executed");
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
    max-height: 15vh;
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

    {#if !agreed}
      <div>
        <p>You must agree with our terms of service</p>
        <button on:click={onAgree}>Agree</button>
      </div>
    {/if}
  </header>

  <div class="content">
    <!--
      This is the default slot.
      NOTE: there can be only one default slot.
    -->
    <slot />
  </div>
  <footer>

    <!-- 
    This is a named slot with a default content. 

    Also bind the "isAgreed" slot prop to the "agreed" local var.
  -->
    <slot name="footer" isAgreed={agreed}>
      <button on:click={onModalClose} disabled={!agreed}>Close</button>
    </slot>
  </footer>
</div>
