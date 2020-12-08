<script>
  import ShareButton from "./share-button.svelte";
  import { createEventDispatcher } from "svelte";
  export let isShow;

  const dispatch = createEventDispatcher();
</script>

<div class="fix-modal" class:is-show={isShow}>
  <slot />
  <p class="memo">
    ※画像を長押し or 右クリックメニューから保存できます<br/>
    ※ツイートする場合の画像はご自身で添付してください
  </p>
  <div class="button-wrap">
    <ShareButton />
    <a class="button button--negative ft-ika" href="." on:click|preventDefault={() => dispatch("hide:fixModal")}>てなおしする</a>
  </div>
</div>
