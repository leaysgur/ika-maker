import App from "./component/app.svelte";
import data from "./data/parts.js";

window.addEventListener("error", (err) => {
  // TODO: もどす
  // location.href = "/sorry.html";
}, false);

const $app = document.getElementById("jsApp");
const appType = $app.getAttribute("data-app-type");

if (appType !== "boy" && appType !== "girl") {
  throw new Error(`Undefined appType: ${appType}`);
}

const scheme = data[appType];

$app.innerHTML = "";

new App({
  target: $app,
  props: {
    appType,
    scheme,
  },
});

// TODO: ServiceWorker
