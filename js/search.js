/**
 * ============================================================
 * AthleteVerse — js/search.js
 * Client-side search across title, description, category, tags.
 * Renders results and handles empty state.
 * ============================================================
 */

(function () {
  "use strict";

  const DEBOUNCE_MS = 250;
  let debounceTimer = null;
  let currentQuery  = "";

  /**
   * Initialize search on a page.
   * Requires:
   *   - An <input id="search-input"> element
   *   - A container with id="search-results"
   *   - A span with id="search-count" (optional, shows result count)
   *   - A div with id="search-empty" (optional, shown when no results)
   *   - data.js loaded before this script
   */
  function initSearch() {
    const input   = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    if (!input || !results) return;

    // Check for query in URL (e.g., search.html?q=gymnastics)
    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery  = urlParams.get("q");
    if (urlQuery) {
      input.value = urlQuery;
      performSearch(urlQuery);
    }

    // Live search as user types
    input.addEventListener("input", function () {
      const query = this.value.trim();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(query);
      }, DEBOUNCE_MS);
    });

    // Search on form submit
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        clearTimeout(debounceTimer);
        performSearch(this.value.trim());
        // Update URL with query
        const newUrl = new URL(window.location);
        newUrl.searchParams.set("q", this.value.trim());
        history.replaceState(null, "", newUrl);
      }
    });
  }

  /**
   * Perform a search and render results.
   */
  function performSearch(query) {
    currentQuery = query;
    const results = document.getElementById("search-results");
    const countEl = document.getElementById("search-count");
    const emptyEl = document.getElementById("search-empty");
    const queryEl = document.getElementById("search-query-display");
    if (!results) return;

    if (queryEl) queryEl.textContent = query ? `"${query}"` : "";

    if (!query) {
      results.innerHTML = "";
      if (countEl) countEl.textContent = "";
      if (emptyEl) emptyEl.style.display = "none";
      return;
    }

    // Use searchContent from data.js
    if (typeof searchContent !== "function") {
      console.error("[AthleteVerse Search] data.js must be loaded before search.js");
      return;
    }

    const items   = searchContent(query);
    const count   = items.length;
    const prefix  = getPathPrefix ? getPathPrefix("pages") : "../";

    if (countEl) {
      countEl.textContent = count === 1 ? "1 result" : `${count} results`;
    }

    if (count === 0) {
      results.innerHTML = "";
      if (emptyEl) emptyEl.style.display = "flex";
      return;
    }

    if (emptyEl) emptyEl.style.display = "none";
    results.innerHTML = items.map(item => renderSearchCard(item, prefix)).join("");

    // Re-initialize Lucide icons in rendered HTML
    if (window.lucide) lucide.createIcons();
  }

  /**
   * Render a single search result card.
   */
  function renderSearchCard(item, prefix = "") {
    const isVideo = item.category === "videos";
    const href    = `${prefix}post.html?id=${item.id}`;
    return `
      <article class="search-result-card" data-category="${item.category}">
        <a href="${href}" class="search-result-card__img-link" aria-label="View: ${escapeHtml(item.title)}">
          <div class="search-result-card__img-wrap">
            <img
              src="${item.image}"
              alt="${escapeHtml(item.imageAlt || item.title)}"
              class="search-result-card__img"
              loading="lazy"
              width="280" height="160"
            />
            ${isVideo ? `<div class="video-play-badge"><i data-lucide="play-circle" stroke-width="1.5"></i></div>` : ""}
            <span class="badge badge--category">${capitalize(item.category)}</span>
          </div>
        </a>
        <div class="search-result-card__body">
          <span class="badge badge--sm badge--category">${capitalize(item.category)}</span>
          <h3 class="search-result-card__title">
            <a href="${href}">${escapeHtml(item.title)}</a>
          </h3>
          <p class="search-result-card__desc">${escapeHtml(truncate(item.description, 120))}</p>
          <div class="card-meta">
            <span class="card-meta__item">
              <i data-lucide="eye" stroke-width="1.5"></i>
              ${formatViews(item.views)}
            </span>
            <span class="card-meta__item">
              <i data-lucide="calendar" stroke-width="1.5"></i>
              ${formatDate(item.date)}
            </span>
            ${isVideo && item.duration ? `
            <span class="card-meta__item">
              <i data-lucide="clock" stroke-width="1.5"></i>
              ${item.duration}
            </span>` : ""}
          </div>
        </div>
      </article>
    `;
  }

  // ── Utility helpers ──────────────────────────────────────────

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function truncate(str, max) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max).trimEnd() + "…" : str;
  }

  // Expose to global scope
  window.AthleteVerseSearch = { init: initSearch, search: performSearch };

  // Auto-init if on a search page
  document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("search-input")) {
      initSearch();
    }
  });
})();
