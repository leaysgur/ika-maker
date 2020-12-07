<script>
  import Header from "./header.svelte";
  import Preview from "./preview.svelte";
  import ToolPanel from "./tool-panel.svelte";
  import FixModal from "./fix-modal.svelte";
  export let appType;

  const title = appType === "boy"
    ? "ボーイをつくる | "
    : appType === "girl" ? "ガールをつくる | " : "";

  let showFixModal = false;
  // TODO
  const settings = {};
  let fixImgSrc = "http://localhost:5000/img/loading.gif";
</script>

<svelte:head>
  <title>{title}スーパーイカメーカー</title>
</svelte:head>

<div>
  <Header on:show:fixModal={() => (showFixModal = true)} />
  <Preview {fixImgSrc} />
  <ToolPanel settings={settings} />
  <FixModal fixImgSrc={fixImgSrc} isShow={showFixModal} on:hide:fixModal={() => (showFixModal = false)} />
</div>
