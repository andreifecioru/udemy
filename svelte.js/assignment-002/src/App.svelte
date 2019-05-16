<script>
	let pass = ''
	let passwords = []

	const addPassword = () => {
		passwords = [
			...passwords,
			{ 
				id: Math.random(),
				text: pass
			}
		]

		console.log(passwords);
	};

	const deletePassword = (pswd) => {
		console.log(`removing: ${pswd.id}`);
		passwords = passwords.filter((_pswd) => pswd.id != _pswd.id);
	};
</script>

<input type="password" bind:value={pass}>
<button on:click={addPassword}>Add password</button>

{#if (pass.trim().length < 5)}
<p>Password too short</p>
{:else if (pass.trim().length > 10)}
<p>Password too long</p>
{:else}
<p>Password is: {pass}</p>
{/if}
<hr>
<ul>
{#each passwords as pswd, idx (pswd.id)}
	<li on:click={deletePassword.bind(this, pswd)}>#{idx + 1}: {pswd.text}</li>
{:else}
	<p>No passwords added yet.</p>
{/each}
</ul>

<hr>
<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li>Add a password input field and save the user input in a variable.</li>
	<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>Add a button and let the user add the passwords to an array.</li>
	<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>
