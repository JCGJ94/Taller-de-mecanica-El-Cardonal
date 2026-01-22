import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

function setCookie(name, value, days = 180) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function ensureDefaults() {
  if (!document.cookie.includes("consent_analytics=")) setCookie("consent_analytics", "denied");
  if (!document.cookie.includes("consent_marketing=")) setCookie("consent_marketing", "denied");
}

function applyConsentCookiesFromLib() {
  // ✅ API real en bundlers: CookieConsent.getUserPreferences()
  const prefs = CookieConsent.getUserPreferences?.();
  const accepted = Array.isArray(prefs?.acceptedCategories) ? prefs.acceptedCategories : [];

  const analyticsWanted = accepted.includes("analytics") ? "granted" : "denied";
  const marketingWanted = accepted.includes("marketing") ? "granted" : "denied";

  const analyticsNow = getCookie("consent_analytics");
  const marketingNow = getCookie("consent_marketing");

  const changed = analyticsNow !== analyticsWanted || marketingNow !== marketingWanted;

  setCookie("consent_analytics", analyticsWanted);
  setCookie("consent_marketing", marketingWanted);

  return changed;
}

export function initCookieConsent() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // ✅ Evita doble init por React.StrictMode / HMR
  if (window.__cc_initialized) return;
  window.__cc_initialized = true;

  ensureDefaults();

  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom center",
        equalWeightButtons: true,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
      },
    },

    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: { enabled: false },
      marketing: { enabled: false },
    },

    language: {
      default: "es",
      translations: {
        es: {
          consentModal: {
            title: "Cookies",
            description:
              "Usamos cookies necesarias para el funcionamiento del sitio y, con tu permiso, cookies de analítica y marketing.",
            acceptAllBtn: "Aceptar todo",
            acceptNecessaryBtn: "Rechazar",
            showPreferencesBtn: "Configurar",
          },
          preferencesModal: {
            title: "Preferencias de cookies",
            acceptAllBtn: "Aceptar todo",
            acceptNecessaryBtn: "Rechazar",
            savePreferencesBtn: "Guardar",
            sections: [
              { title: "Necesarias", description: "Imprescindibles para el funcionamiento del sitio." },
              { title: "Analítica", description: "Nos ayuda a mejorar la web (Google Analytics).", linkedCategory: "analytics" },
              { title: "Marketing", description: "Medición de campañas y publicidad (Google Ads, Meta).", linkedCategory: "marketing" },
            ],
          },
        },
      },
    },

    onConsent: () => {
      const changed = applyConsentCookiesFromLib();
      if (changed) window.location.reload();
    },

    onChange: () => {
      const changed = applyConsentCookiesFromLib();
      if (changed) window.location.reload();
    },
  });
}

export function openCookiePreferences() {
  // ✅ En bundlers se llama así (no window.CookieConsent)
  if (CookieConsent.showPreferences) return CookieConsent.showPreferences();

  console.warn("CookieConsent.showPreferences no está disponible. Revisa versión del paquete.");
}
