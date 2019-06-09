<script>
  import BasicBindingsCard from "./BasicBindingsCard.svelte";
  import BindToCustomInputCard from "./BindToCustomInputCard.svelte";
  import BindToNumberInputCard from "./BindToNumberInputCard.svelte";
  import BindToCheckboxCard from "./BindToCheckboxCard.svelte";
  import BindToRadioButtonCard from "./BindToRadioButtonCard.svelte";
  import BindToMultipleCheckboxCard from "./BindToMultipleCheckboxCard.svelte";
  import BindToDropdownCard from "./BindToDropdownCard.svelte";
  import BindToElementReferencesCard from "./BindToElementReferencesCard.svelte";
  import BindToComponentReferencesCard from "./BindToComponentReferencesCard.svelte";
</script>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section>
  <BasicBindingsCard />
  <BindToCustomInputCard />
  <BindToNumberInputCard />
  <BindToCheckboxCard />
  <BindToRadioButtonCard />
  <BindToMultipleCheckboxCard />
  <BindToDropdownCard />
  <BindToElementReferencesCard />
  <BindToComponentReferencesCard />
</section>
