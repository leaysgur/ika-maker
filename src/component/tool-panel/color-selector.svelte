<script>
  import { createEventDispatcher } from "svelte";
  export let parts;
  export let partsId;
  export let settings;

  const dispatch = createEventDispatcher();
  $: target = partsId + "Color";
</script>

<div>
  <h3 class="parts-selector-header ft-ika">イロをえらぶ</h3>
  <ul class="parts-selector-items">
    {#each parts.items as item, idx (idx)}
    <li class="parts-selector-items--item">
      <div
        class="color-selector"
        class:is-selected={item.id === settings[target]}
        style="background-color: #{parts.COLORS[item.id]}"
        on:click={() => dispatch("update:settings", { target, value: item.id }) }
      />
    </li>
    {/each}
  </ul>
</div>
