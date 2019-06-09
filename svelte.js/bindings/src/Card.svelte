<script>
  import Header from "./Header.svelte";

  export let title = "No title";
</script>

<style>
  main {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header {
    width: 100%;
    background-color: bisque;
    color: brown;
  }

  h1 {
    margin: 0;
    padding: 1rem .5rem;
    text-align: center;
  }

  article {
    padding: 1rem;
  }
</style>

<main class="card">
  <header>
      <h1>{title}</h1>
  </header>

  <article>
    <slot>
      <p>Content goes here</p>
    </slot>
  </article>
</main>
