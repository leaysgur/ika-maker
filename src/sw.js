import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { CacheFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { registerRoute } from "workbox-routing";

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        purgeOnQuotaError: true,
      }),
    ],
  }),
);
