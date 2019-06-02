<script>
  import Header from "./ui/Header.svelte";
  import MeetupGrid from "./meetups/MeetupGrid.svelte";

  const meetups = [
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
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <MeetupGrid {meetups}/>
</main>
