<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../ui/TextInput.svelte";
  import Button from "../ui/Button.svelte";

  export let id = null;
  export let title = "";
  export let subtitle = "";
  export let description = "";
  export let address = "";
  export let imageUrl = "";
  export let contactEmail = "";
  export let isFavourite = false;

  const dispatch = createEventDispatcher();

  const onFromSubmit = event => {
    console.log("Meetup Item changed!");

    dispatch("editMeetup", {
      id: id,
      title: title,
      subtitle: subtitle,
      description: description,
      address: address,
      imageUrl: imageUrl,
      contactEmail: contactEmail,
      isFavourite: isFavourite
    });
  };
</script>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<form on:submit|preventDefault={onFromSubmit}>
  <TextInput
    id="title"
    label="Title"
    value={title}
    on:input={e => (title = e.target.value)} />
  <TextInput
    id="subtitle"
    label="Subtitle"
    value={subtitle}
    on:input={e => (subtitle = e.target.value)} />
  <TextInput
    id="description"
    label="Description"
    value={description}
    controlType="textarea"
    rows="3"
    on:input={e => (description = e.target.value)} />
  <TextInput
    id="address"
    label="Address"
    value={address}
    on:input={e => (address = e.target.value)} />
  <TextInput
    id="imageUrl"
    label="Image URL"
    value={imageUrl}
    on:input={e => (imageUrl = e.target.value)} />
  <TextInput
    id="email"
    label="E-mail"
    value={contactEmail}
    inputType="email"
    on:input={e => (contactEmail = e.target.value)} />

  <Button type="submit">Save</Button>

</form>
