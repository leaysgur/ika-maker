import App from "./component/app.svelte";

(async () => {
  const $app = document.getElementById("jsApp");
  const appType = $app.getAttribute("data-app-type");

  if (appType !== "boy" && appType !== "girl")
    throw new Error(`Undefined appType: ${appType}`);

  window.addEventListener("error", () => {
    location.href = "/sorry.html";
  }, false);

  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("/dist/sw.js");
  }

  $app.innerHTML = "";
  new App({
    target: $app,
    props: { appType },
  });

  // TODO: ServiceWorker
})();
