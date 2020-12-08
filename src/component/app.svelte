<script>
  import Header from "./header.svelte";
  import Preview from "./preview.svelte";
  import ToolPanel from "./tool-panel.svelte";
  import FixModal from "./fix-modal.svelte";
  import data from "../data/parts.js";
  import { TITLE_TEXT } from "../data/const.js";
  import {
    getDefaultSettings,
    generateFixImgSrcBySettings,
  } from "../domain/core.js";
  export let appType;

  const scheme = data[appType];
  const title = TITLE_TEXT[appType];

  let showFixModal = false;
  const toggleFixModal = () => (showFixModal = !showFixModal);

  const settings = getDefaultSettings(appType);
  const onUpdateSettings = ({ detail }) => {
    const { value, target } = detail;
    console.log({ value, target });
    settings[target] = value;
  };

  // TODO: while loading...
  let fixImgSrc = "";
  $: {
    generateFixImgSrcBySettings(scheme, settings)
      .then((src) => (fixImgSrc = src))
      .catch(console.error);
  }
</script>

<svelte:head>
  <title>{title}スーパーイカメーカー</title>
</svelte:head>

<Header on:show:fixModal={toggleFixModal} />
<Preview {fixImgSrc} />
<ToolPanel
  settings={settings}
  {scheme}
  {appType}
  on:update:settings={onUpdateSettings}
/>
<FixModal isShow={showFixModal} on:hide:fixModal={toggleFixModal}>
  <Preview {fixImgSrc} />
</FixModal>
