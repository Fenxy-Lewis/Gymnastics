/**
 * ============================================================
 * AthleteVerse — js/ads.js
 * Adsterra integration layer.
 *
 * HOW TO CONFIGURE:
 * 1. Replace "YOUR_ADSTERRA_SMARTLINK_HERE" with your Smartlink URL.
 * 2. Paste your Banner ad script inside the marked sections below.
 * 3. Paste your Social Bar script inside the marked section below.
 * ============================================================
 */

// ============================================================
// ADSTERRA CONFIGURATION
// ============================================================
const ADSTERRA_CONFIG = {
  // ──────────────────────────────────────────────────────────
  // ADSTERRA SMARTLINK
  // Paste your Smartlink URL here (between the quotes).
  // ──────────────────────────────────────────────────────────
  smartlink: "YOUR_ADSTERRA_SMARTLINK_HERE",

  // Toggle ad zones on/off
  topBanner:     true,
  contentBanner: true,
  sidebarBanner: true,
  socialBar:     true,
};

// ============================================================
// SMARTLINK CTA HANDLER
// Opens the Smartlink in a new tab safely (noopener, noreferrer).
// Called by "Watch Now", "View Story", "Explore Gallery" buttons.
// ============================================================
function openSmartlink(event) {
  event.preventDefault();
  const url = ADSTERRA_CONFIG.smartlink;
  if (!url || url === "YOUR_ADSTERRA_SMARTLINK_HERE") {
    // Smartlink not configured — open a placeholder page
    console.warn("[AthleteVerse Ads] Smartlink not configured. Set ADSTERRA_CONFIG.smartlink in js/ads.js");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

// Attach Smartlink handler to all elements with data-smartlink attribute
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-smartlink]").forEach(function (el) {
    el.addEventListener("click", openSmartlink);
  });
  // Initialize ad zones
  initAdZones();
});

// ============================================================
// AD ZONE INITIALIZER
// Renders placeholder containers and injects the ad scripts.
// ============================================================
function initAdZones() {

  // ────────────────────────────────────────────────────────────
  // TOP BANNER — #adsterra-top-banner
  // Desktop: 728×90 | Mobile: 320×100
  // ────────────────────────────────────────────────────────────
  if (ADSTERRA_CONFIG.topBanner) {
    injectAdLabel("adsterra-top-banner");

    /* =====================================================
     * ADSTERRA BANNER — TOP
     * Paste your Adsterra banner <script> tag below:
     * ===================================================== */
    // (Adsterra banner script goes here — paste between these comments)
    /* ===================================================== */
  }

  // ────────────────────────────────────────────────────────────
  // IN-CONTENT BANNER — #adsterra-content-banner
  // Desktop: 728×90 | Mobile: 320×100
  // ────────────────────────────────────────────────────────────
  if (ADSTERRA_CONFIG.contentBanner) {
    injectAdLabel("adsterra-content-banner");

    /* =====================================================
     * ADSTERRA BANNER — IN-CONTENT
     * Paste your Adsterra in-content banner <script> below:
     * ===================================================== */
    // (Adsterra banner script goes here — paste between these comments)
    /* ===================================================== */
  }

  // ────────────────────────────────────────────────────────────
  // SIDEBAR BANNER — #adsterra-sidebar
  // Desktop: 300×250
  // ────────────────────────────────────────────────────────────
  if (ADSTERRA_CONFIG.sidebarBanner) {
    injectAdLabel("adsterra-sidebar");

    /* =====================================================
     * ADSTERRA BANNER — SIDEBAR (300×250)
     * Paste your Adsterra sidebar banner <script> below:
     * ===================================================== */
    // (Adsterra banner script goes here — paste between these comments)
    /* ===================================================== */
  }

  // ────────────────────────────────────────────────────────────
  // SOCIAL BAR — #adsterra-social
  // Near bottom of page, before footer
  // ────────────────────────────────────────────────────────────
  if (ADSTERRA_CONFIG.socialBar) {
    injectAdLabel("adsterra-social");

    /* =====================================================
     * ADSTERRA SOCIAL BAR
     * Paste your Adsterra Social Bar <script> below:
     * ===================================================== */
    // (Adsterra Social Bar script goes here — paste between these comments)
    /* ===================================================== */
  }
}

/**
 * Add "Advertisement" label to an ad zone container.
 * This ensures the ad zone is clearly labeled for transparency.
 */
function injectAdLabel(zoneId) {
  const zone = document.getElementById(zoneId);
  if (!zone) return;

  // Avoid double-labeling
  if (zone.querySelector(".ad-label")) return;

  const label = document.createElement("span");
  label.className = "ad-label";
  label.textContent = "Advertisement";
  label.setAttribute("aria-label", "Advertisement");
  zone.prepend(label);
}

/**
 * Helper: inject a script tag into a zone container.
 * Used internally when pasting Adsterra <script> content.
 */
function injectScript(zoneId, scriptContent) {
  const zone = document.getElementById(zoneId);
  if (!zone) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.text = scriptContent;
  zone.appendChild(script);
}

// Expose to global scope for page-level usage
window.AdsConfig = ADSTERRA_CONFIG;
window.openSmartlink = openSmartlink;
