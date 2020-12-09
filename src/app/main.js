import App from "./component/app.svelte";

const $app = document.getElementById("jsApp");
const appType = $app.getAttribute("data-app-type");

if (appType !== "boy" && appType !== "girl")
  throw new Error(`Undefined appType: ${appType}`);

window.addEventListener("error", () => {
  location.href = "/sorry.html";
}, false);

$app.innerHTML = "";
new App({
  target: $app,
  props: { appType },
});
