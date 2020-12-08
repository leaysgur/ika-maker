<script>
  import { SHARE_URL, SHARE_TEXT } from "../../data/const.js";

  const shareUrl = SHARE_URL + encodeURIComponent(SHARE_TEXT);
</script>

<a class="button button--tweet ft-ika" target="_blank" href={shareUrl}>ツイートする</a>
