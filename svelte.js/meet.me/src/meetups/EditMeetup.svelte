<script>
  import { createEventDispatcher } from "svelte";
  import {
    isNonEmptyString,
    isValidEmail,
    isValidUrl
  } from "../helpers/validators.js";
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

  $: isTitleValid = isNonEmptyString(title);
  $: isSubtitleValid = isNonEmptyString(subtitle);
  $: isDescriptionValid = isNonEmptyString(description);
  $: isAddressValid = isNonEmptyString(address);
  $: isImageUrlValid = isValidUrl(imageUrl);
  $: isEmailValid = isValidEmail(contactEmail);
  $: isFormValid =
    isTitleValid &&
    isSubtitleValid &&
    isDescriptionValid &&
    isImageUrlValid &&
    isEmailValid;

  $: console.log(`Form is valid: ${isFormValid}`);

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
    isValid="{isTitleValid}"
    errorMsg="Title canot be empty."
    value={title}
    on:input={e => (title = e.target.value)} />
  <TextInput
    id="subtitle"
    label="Subtitle"
    isValid="{isSubtitleValid}"
    errorMsg="Subtitle canot be empty."
    value={subtitle}
    on:input={e => (subtitle = e.target.value)} />
  <TextInput
    id="description"
    label="Description"
    value={description}
    isValid="{isDescriptionValid}"
    errorMsg="Description canot be empty."
    controlType="textarea"
    rows="3"
    on:input={e => (description = e.target.value)} />
  <TextInput
    id="address"
    label="Address"
    isValid="{isAddressValid}"
    errorMsg="Address canot be empty."
    value={address}
    on:input={e => (address = e.target.value)} />
  <TextInput
    id="imageUrl"
    label="Image URL"
    isValid="{isImageUrlValid}"
    errorMsg="Must provide a valid URL address."
    value={imageUrl}
    on:input={e => (imageUrl = e.target.value)} />
  <TextInput
    id="email"
    label="E-mail"
    isValid="{isEmailValid}"
    errorMsg="Must provide a valid e-mail address."
    value={contactEmail}
    inputType="email"
    on:input={e => (contactEmail = e.target.value)} />

  <Button type="submit" disabled="{!isFormValid}">Save</Button>

</form>
