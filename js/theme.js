/**
 * ============================================================
 * AthleteVerse — js/theme.js
 * Dark / Light mode toggle.
 * Persists preference in localStorage.
 * Falls back to system prefers-color-scheme.
 * ============================================================
 */

(function () {
  "use strict";

  const STORAGE_KEY = "av-theme";
  const DARK  = "dark";
  const LIGHT = "light";

  /**
   * Read theme from localStorage, then system preference, then default dark.
   */
  function getStoredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === DARK || stored === LIGHT) return stored;
    // Fall back to system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return LIGHT;
    }
    return DARK; // default
  }

  /**
   * Apply theme to the root <html> element.
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    // Update any toggle button icons on the page
    updateToggleButtons(theme);
  }

  /**
   * Update all theme toggle buttons to show the correct icon.
   */
  function updateToggleButtons(theme) {
    const buttons = document.querySelectorAll("[data-theme-toggle]");
    buttons.forEach(btn => {
      const sunIcon  = btn.querySelector(".icon-sun");
      const moonIcon = btn.querySelector(".icon-moon");
      if (sunIcon && moonIcon) {
        if (theme === DARK) {
          sunIcon.style.display  = "block";
          moonIcon.style.display = "none";
        } else {
          sunIcon.style.display  = "none";
          moonIcon.style.display = "block";
        }
      }
      btn.setAttribute("aria-label", theme === DARK ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  /**
   * Toggle between dark and light.
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || DARK;
    applyTheme(current === DARK ? LIGHT : DARK);
  }

  /**
   * Initialize: apply stored theme immediately to prevent FOUC,
   * then wire up toggle buttons after DOM is ready.
   */
  function init() {
    // Apply immediately (synchronous) to avoid flash of unstyled content
    const theme = getStoredTheme();
    document.documentElement.setAttribute("data-theme", theme);

    // Wire up buttons after DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        wireToggleButtons();
        updateToggleButtons(theme);
      });
    } else {
      wireToggleButtons();
      updateToggleButtons(theme);
    }
  }

  function wireToggleButtons() {
    const buttons = document.querySelectorAll("[data-theme-toggle]");
    buttons.forEach(btn => {
      btn.addEventListener("click", toggleTheme);
    });
  }

  // Expose toggleTheme globally for any inline usage
  window.AthleteVerseTheme = { toggle: toggleTheme, apply: applyTheme };

  // Run immediately
  init();
})();
