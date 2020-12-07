<script>
  import TextForm from "./text-form.svelte";
  /* import PartsSelector from "./parts-selector.svelte"; */

  export let settings;
  const tabItems = [];
  let selectedTabIdx = 0;
</script>

<div class="tool-panel">
  <ul class="tab-body">
    {#each tabItems as item, idx (item.order)}
    <li
      class:is-hidden={idx === selectedTabIdx}
    >
      <svelte:component this={(item.id === "text") ? TextForm : PartsSelector} {settings} partsName={item.id} />
    </li>
    {/each}
  </ul>

  <ul class="tab-header">
    {#each tabItems as item, idx (item.order)}
    <li
      class={`
      tab-header__item
      tab-header__item--type-${item.group}
      ${idx === selectedTabIdx ? "is-selected" : ""}
      ft-ika
      `}
      on:click={() => (selectedTabIdx = idx)}
    >
      <h2>{item.name}</h2>
    </li>
    {/each}
  </ul>
</div>
