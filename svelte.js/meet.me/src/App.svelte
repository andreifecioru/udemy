<script>
  import Header from "./ui/Header.svelte";
  import MeetupGrid from "./meetups/MeetupGrid.svelte";
  import TextInput from "./ui/TextInput.svelte";
  import Button from "./ui/Button.svelte"

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code.",
      imageUrl:
        "https://3t7bol18ef963l8x6yzv7ja1-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/on-ground_coding_bootcamps_2.jpg",
      address: "27th Nerd Road, 2314 New York",
      contactEmail: "code@test.com"
    },

    {
      id: "m2",
      title: "Swim Together",
      subtitle: "We go for a dip.",
      description: "We will do some laps",
      imageUrl:
        "https://www.1life.co.uk/app/uploads/sites/35/2018/06/Downham-swim-09-800x400.jpg",
      address: "27th Nerd Road, 2314 New York",
      contactEmail: "swim@test.com"
    }
  ];

  let title = "";
  let subtitle = "";
  let description = "";
  let address = "";
  let imageUrl = "";
  let email = "";

  const addMeetup = () => {
    console.log("Saving");

    const newMeetup = {
      id: Math.random.toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      address: address,
      imageUrl: imageUrl,
      contactEmail: email
    };

    meetups = [newMeetup, ...meetups];
  };
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput 
      id="title"
      label="Title"
      value={title} 
      on:input="{(e) => title = e.target.value}"/>
    <TextInput 
      id="subtitle"
      label="Subtitle"
      value={subtitle} 
      on:input="{(e) => subtitle = e.target.value}"/>
    <TextInput 
      id="description"
      label="Description"
      value={description} 
      on:input="{(e) => description = e.target.value}"/>
    <TextInput 
      id="description"
      label="Description"
      value={description} 
      controlType="textarea" rows="3"
      on:input="{(e) => description = e.target.value}"/>
    <TextInput 
      id="address"
      label="Address"
      value={address} 
      on:input="{(e) => address = e.target.value}"/>
    <TextInput 
      id="imageUrl"
      label="Image URL"
      value={imageUrl} 
      on:input="{(e) => imageUrl = e.target.value}"/>
    <TextInput 
      id="email"
      label="E-amil"
      value={email} 
      inputType="email"
      on:input="{(e) => email = e.target.value}"/>

    <Button type="submit" caption="Save"/>
  </form>

  <MeetupGrid {meetups} />
</main>
