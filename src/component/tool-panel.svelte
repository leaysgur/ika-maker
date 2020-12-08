<script>
  import TextForm from "./text-form.svelte";
  import PartsSelector from "./parts-selector.svelte";
  export let settings;
  export let tabItems;

  let selectedTabIdx = 0;
  $: activePartsId = tabItems[selectedTabIdx].id;
</script>

<div class="tool-panel">
  <div class="tab-body">
    {#if activePartsId === "text"}
    <TextForm
      {settings}
      on:set:text
    />
    {:else}
    <PartsSelector
      partsId={activePartsId}
      {settings}
    />
    {/if}
  </div>

  <ul class="tab-header">
    {#each tabItems as item, idx (item.order)}
    <li
      class={`ft-ika tab-header__item tab-header__item--type-${item.group}`}
      class:is-selected={idx === selectedTabIdx}
      on:click={() => (selectedTabIdx = idx)}
    >
      <h2>{item.name}</h2>
    </li>
    {/each}
  </ul>
</div>
