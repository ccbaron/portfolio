// GTM client-side plugin
// Injects the Google Tag Manager snippet on the client only.
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const gtmId = config.public.gtmId;

  if (!gtmId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const firstScript = document.getElementsByTagName("script")[0];
  const gtmScript = document.createElement("script");

  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

  firstScript.parentNode?.insertBefore(gtmScript, firstScript);
});
