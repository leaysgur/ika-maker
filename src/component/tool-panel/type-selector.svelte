<script>
  import { createEventDispatcher } from "svelte";
  export let appType;
  export let parts;
  export let partsId;
  export let settings;

  const target = `${partsId}Type`;
  const dispatch = createEventDispatcher();
</script>

<div class="parts-selector parts-selector--app-{appType}">
  <h3 class="parts-selector-header ft-ika">タイプをえらぶ</h3>
  <ul class="parts-selector-items">
    {#each parts.items as item, idx (idx)}
    <li class="parts-selector-items--item">
      <div
        class="type-selector type-selector--type-{partsId}"
        class:is-selected={item.id === settings[target]}
        on:click={() => dispatch("update:settings", { target, value: item.id }) }
      >
        <img
          src={item.path}
          alt=""
          width="40"
          height="40"
          loading="lazy"
        />
      </div>
    </li>
    {/each}
  </ul>
</div>
