<script>
	export let name;
	export let age;

	function incrementAge() {
		age += 1;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<p>I am {age} years old.</p>

<button on:click="{incrementAge}">Change age</button>
