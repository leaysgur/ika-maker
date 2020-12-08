<script>
  import Header from "./header.svelte";
  import Preview from "./preview.svelte";
  import ToolPanel from "./tool-panel.svelte";
  import FixModal from "./fix-modal.svelte";
  import { getDefaultSettings } from "../domain/core.js";
  export let appType;
  export let scheme;

  const title = appType === "boy"
    ? "ボーイをつくる | "
    : appType === "girl" ? "ガールをつくる | " : "";

  let showFixModal = false;
  const settings = getDefaultSettings(appType);
  let fixImgSrc = "http://localhost:5000/img/loading.gif";
  $: console.log(settings);

  const onUpdateSettings = ({ detail }) => {
    const { value, target } = detail;
    settings[target] = value;
  };
</script>

<svelte:head>
  <title>{title}スーパーイカメーカー</title>
</svelte:head>

<Header on:show:fixModal={() => (showFixModal = true)} />
<Preview {fixImgSrc} />
<ToolPanel
  settings={settings}
  {scheme}
  {appType}
  on:update:settings={onUpdateSettings}
/>
<FixModal isShow={showFixModal} on:hide:fixModal={() => (showFixModal = false)}>
  <Preview {fixImgSrc} />
</FixModal>
