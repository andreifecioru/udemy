<script>
	export let name;
	export let age;

	const incrementAge = () => age += 1;

	// reactive vars
	// NOTE: var definition is not requried
	$: uppercaseName = name.toUpperCase();

	// reactive statements
	$: console.log(`${name} is ${age} yeas old.`);

	$: if (age % 10 == 0) {
		console.log('You are older!');
	}

	const nameInput = (event) => {
		name = event.target.value;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}!</h1>
<p>I am {age} years old.</p>

<button on:click="{incrementAge}">Change age</button>
<br>
<br>
<br>

<!-- 2-way binding to an element attribute 
	<input type="text" value="{name}" on:input="{nameInput}"> 
	For a shortcut see below:
-->
<input type="text" bind:value="{name}">

