<script>
  import GoalComponent from './GoalComponent.svelte'

  let goalName='Goal is not set yet.'

  const updateGoal = (event) => goalName = event.target.value;
</script>

<GoalComponent {goalName} />

<input type="text" on:input={updateGoal}>

<hr>

<p>Solve these tasks.</p>

<ol>
  <li>Add an input field that allows users to enter a course goal.</li>
  <li>Output the user input in a h1 tag.</li>
  <li>
    Color the output red (e.g. by adding a class) if it contains at least one exclamation mark.
  </li>
  <li>
    Put the h1 tag + output into a separate component to which you pass the user input
  </li>
</ol>
