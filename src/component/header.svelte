<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="header">
  <a class="button button--negative ft-ika" href="./index.html">モドル</a>
  <h1 class="header__title ft-ika">スーパーイカメーカー</h1>
  <a class="button ft-ika" href="#" on:click|preventDefault={() => dispatch("show:fixModal")}>カンセイ</a>
</div>
