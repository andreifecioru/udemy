<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "";
  let image = "";
  let description = "";
  let formState = "empty";

  let createdContacts = [];

  const addContact = () => {
    if (
      name.trim().length === 0 ||
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      image.trim().length === 0
    ) {
      formState = "invalid";
    } else {
      formState = "done";
      createdContacts = [
        ...createdContacts,
        {
          id: Math.random(), // generate a unique ID
          name: name,
          jobTitle: title,
          imageUrl: image,
          desc: description
        }
      ];
    }
  };

  const deleteFirst = () => {
    createdContacts = createdContacts.slice(1);
  }
  const deleteLast = () => {
    createdContacts = createdContacts.slice(0, -1);
  }
</script>

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete first</button>
<button on:click={deleteLast}>Delete last</button>

{#if formState === 'invalid'}
  <p>Form is invalid</p>
{:else}
  <p>Please enter some data.</p>
{/if}

<!-- We can also specify a list key (in parens) -->
{#each createdContacts as contact, idx (contact.id)}
  <h2>#{idx + 1}</h2>
  <ContactCard
    userName={contact.name}
    jobTitle={contact.jobTitle}
    description={contact.desc}
    userImage={contact.imageUrl} />
{:else}
  <!-- 
    "else" blocks are rendered when 
    the collection is empty.
  -->
  <p>Please start adding some contacts.</p>
{/each}
