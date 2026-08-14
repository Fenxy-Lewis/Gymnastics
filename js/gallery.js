/**
 * ============================================================
 * AthleteVerse — js/gallery.js
 * Category filter logic for listing/gallery pages.
 * Filters card grids dynamically without page reload.
 * ============================================================
 */

(function () {
  "use strict";

  let activeFilter = "all";

  /**
   * Initialize filter buttons on a page.
   * @param {string} gridSelector - CSS selector for the card grid container.
   * @param {string} filterSelector - CSS selector for filter button container.
   * @param {Function} renderFn - Function to call when filter changes. Receives (filterId).
   */
  function initFilters(gridSelector, filterSelector, renderFn) {
    const filterContainer = document.querySelector(filterSelector);
    if (!filterContainer) return;

    filterContainer.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");
        if (filter === activeFilter) return;
        activeFilter = filter;

        // Update active state on buttons
        filterContainer.querySelectorAll("[data-filter]").forEach(b => {
          b.classList.toggle("filter-btn--active", b === this);
          b.setAttribute("aria-pressed", b === this ? "true" : "false");
        });

        // Re-render with new filter
        if (typeof renderFn === "function") {
          renderFn(filter);
        } else {
          filterCards(gridSelector, filter);
        }
      });
    });
  }

  /**
   * Filter existing rendered cards in a grid by category data attribute.
   * Cards need a data-category attribute on them.
   */
  function filterCards(gridSelector, category) {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-category]");
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      const match = category === "all" || cardCategory === category;
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    // Show empty state if no results
    const emptyState = grid.querySelector(".empty-state");
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "flex" : "none";
    }

    // Update result count if element exists
    const countEl = document.querySelector("[data-filter-count]");
    if (countEl) {
      countEl.textContent = visibleCount;
    }
  }

  /**
   * Build the HTML for category filter buttons.
   * @param {Array} categories - Array of { id, label } objects.
   * @param {string} activeId - ID of the active category (default "all").
   * @returns {string} HTML string for the filter bar.
   */
  function buildFilterBar(categories, activeId = "all") {
    return categories.map(cat => `
      <button
        class="filter-btn ${cat.id === activeId ? "filter-btn--active" : ""}"
        data-filter="${cat.id}"
        aria-pressed="${cat.id === activeId ? "true" : "false"}"
        type="button"
      >
        ${cat.label}
      </button>
    `).join("");
  }

  /**
   * Get filtered content from a data array.
   * @param {Array} data - Array of content items.
   * @param {string} category - Category to filter by ("all" returns all).
   * @returns {Array} Filtered array.
   */
  function getFilteredContent(data, category) {
    if (category === "all") return data;
    return data.filter(item => item.category === category);
  }

  // Expose to global scope
  window.AthleteVerseGallery = {
    initFilters,
    filterCards,
    buildFilterBar,
    getFilteredContent,
    getActiveFilter: () => activeFilter,
    setActiveFilter: (f) => { activeFilter = f; },
  };
})();
