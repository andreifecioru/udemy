<script>
  export let goalName='';

  $: hasExclamation = goalName.includes('!');
</script>

<style>
  .with-exclamation {
    color: red;
  }
</style>

<h1 class:with-exclamation={hasExclamation}>{goalName}</h1>