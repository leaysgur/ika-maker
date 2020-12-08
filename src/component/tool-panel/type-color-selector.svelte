<script>
  import { createEventDispatcher } from "svelte";
  export let appType;
  export let parts;
  export let partsId;
  export let settings;

  const typeTarget = `${partsId}Type`;
  const colorTarget = `${partsId}Color`;
  const dispatch = createEventDispatcher();
  $: colors = parts.items.find((item) => item.id === settings[typeTarget]).items;
</script>

<div class="parts-selector parts-selector--app-{appType}">
  <h3 class="parts-selector-header ft-ika">タイプをえらぶ</h3>
  <ul class="parts-selector-items">
    {#each parts.items as item, idx (idx)}
    <li class="parts-selector-items--item">
      <div
        class="type-selector type-selector--type-{partsId}"
        class:is-selected={item.id === settings[typeTarget]}
        on:click={() => dispatch("update:settings", { target: typeTarget, value: item.id }) }
      >
        <img
          src={item.items[0].path}
          alt=""
          width="40"
          height="40"
          loading="lazy"
        />
      </div>
    </li>
    {/each}
  </ul>
  <h3 class="parts-selector-header ft-ika">イロをえらぶ</h3>
  <ul class="parts-selector-items">
    {#each colors as item, idx (idx)}
    <li class="parts-selector-items--item">
      <div
        class="color-selector"
        class:is-selected={item.id === settings[colorTarget]}
        style="background-color: #{parts.COLORS[item.id]}"
        on:click={() => dispatch("update:settings", { target: colorTarget, value: item.id }) }
      />
    </li>
    {/each}
  </ul>
</div>
