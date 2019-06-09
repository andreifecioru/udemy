<script>
  import { afterUpdate } from "svelte";
  import Header from "./ui/Header.svelte";
  import Button from "./ui/Button.svelte";
  import Modal from "./ui/Modal.svelte";
  import MeetupGrid from "./meetups/MeetupGrid.svelte";
  import EditMeetup from "./meetups/EditMeetup.svelte";

  let showAddMeetupModal = false;
  let showEditMeetupModal = false;
  let editMeetupModalData = null;

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
      contactEmail: "code@test.com",
      isFavourite: false
    },

    {
      id: "m2",
      title: "Swim Together",
      subtitle: "We go for a dip.",
      description: "We will do some laps",
      imageUrl:
        "https://www.1life.co.uk/app/uploads/sites/35/2018/06/Downham-swim-09-800x400.jpg",
      address: "27th Nerd Road, 2314 New York",
      contactEmail: "swim@test.com",
      isFavourite: false
    }
  ];

  const addMeetup = event => {
    console.log("Saving");

    const data = event.detail;

    const newMeetup = {...event.detail};
    newMeetup.id = Math.random().toString;

    meetups = [newMeetup, ...meetups];

    closeAddMeetupModal();
  };

  const toggleAddMeetupModal = event => {
    showAddMeetupModal = !showAddMeetupModal;
  };

  const closeAddMeetupModal = event => {
    showAddMeetupModal = false;
  };

  const showMeetupDetails = event => {
    const id = event.detail.id;
    editMeetupModalData = meetups.find(m => m.id === id);
    showEditMeetupModal = true;
  };

  const saveMeetup = event => {
    console.log("Saving meetup...");

    const data = event.detail;

    const idx = meetups.findIndex(m => m.id === data.id);
    let meetup = meetups[idx];
    ({ ...meetup } = { ...data });
    meetups[idx] = meetup;
    meetups = meetups; // trigger DOM update

    closeEditMeetupModal();
  };

  const closeEditMeetupModal = event => {
    showEditMeetupModal = false;
  };

  const onToggleFavourite = event => {
    console.log("Toggle favourite for id: " + event.detail.id);

    const meetup = meetups.find(m => m.id === event.detail.id);
    meetup.isFavourite = !meetup.isFavourite;
    meetups = meetups; // trigger DOM update
  };

  afterUpdate(() => {
    console.log("Dom updated");
  });
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .add-meetup-button {
    margin-left: 1rem;
  }
</style>

<Header />

<main>
  <div class="add-meetup-button">
    <Button on:click={toggleAddMeetupModal}>Add meetup</Button>
  </div>
  {#if showAddMeetupModal}
    <Modal on:modalCancel={closeAddMeetupModal}>
      <h1 slot="header">Add new meetup</h1>
      <EditMeetup on:editMeetup={addMeetup} />
      <div slot="footer" />
    </Modal>
  {/if}
  {#if showEditMeetupModal}
    <Modal on:modalCancel={closeEditMeetupModal}>
      <h1 slot="header">Edit meetup</h1>
      <EditMeetup {...editMeetupModalData} on:editMeetup={saveMeetup} />
      <div slot="footer" />
    </Modal>
  {/if}
  <MeetupGrid
    {meetups}
    on:toggleFavourite={onToggleFavourite}
    on:showDetails={showMeetupDetails} />
</main>
