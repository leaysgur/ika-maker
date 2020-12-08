<script>
  import { createEventDispatcher } from 'svelte';

  export let settings;

  const dispatch = createEventDispatcher();
</script>

<div class="parts-selector">
  <h3 class="parts-selector-header ft-ika">テキストをにゅうりょく</h3>
  <div class="parts-selector-items">
    <input
      class="parts-selector-items--text"
      type="text" maxLength="10"
      value={settings.text}
      on:input={(ev) => dispatch("update:settings", { target: "text", value: ev.currentTarget.value })}
      placeholder="入力は10文字まで"
    />
  </div>
  <p class="memo">
    ※一部の文字種にはイカしたフォントが当たりません
  </p>
</div>
