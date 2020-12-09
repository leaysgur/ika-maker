<script>
  import ColorSelector from "./tool-panel/color-selector.svelte";
  import TypeSelector from "./tool-panel/type-selector.svelte";
  import TypeColorSelector from "./tool-panel/type-color-selector.svelte";
  import TextForm from "./tool-panel/text-form.svelte";
  import { getTabItems } from "../domain/core.js";
  export let settings;
  export let scheme;
  export let appType;

  const tabItems = getTabItems(scheme);

  let selectedTabIdx = 0;
  $: activePartsId = tabItems[selectedTabIdx].id;
  $: parts = scheme[activePartsId];
</script>

<div class="tool-panel">
  <div class="tab-body">
    {#if activePartsId === "text"}
    <TextForm
      {settings}
      on:update:settings
    />
    {:else}
    {#if parts.selectType === "TYPE"}
    <TypeSelector
      {settings}
      {parts}
      partsId={activePartsId}
      {appType}
      on:update:settings
    />
    {/if}
    {#if parts.selectType === "COLOR"}
    <ColorSelector
      {settings}
      {parts}
      partsId={activePartsId}
      on:update:settings
    />
    {/if}
    {#if parts.selectType === "TYPE_COLOR"}
    <TypeColorSelector
      {settings}
      {parts}
      partsId={activePartsId}
      {appType}
      on:update:settings
    />
    {/if}
    {/if}
  </div>

  <ul class="tab-header">
    {#each tabItems as item, idx (item.order)}
    <li
      class="ft-ika tab-header__item tab-header__item--type-{item.group}"
      class:is-selected={idx === selectedTabIdx}
      on:click={() => (selectedTabIdx = idx)}
    >
      <h2>{item.name}</h2>
    </li>
    {/each}
  </ul>
</div>
