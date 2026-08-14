/**
 * ============================================================
 * AthleteVerse — js/app.js
 * Homepage rendering logic.
 * Renders: hero, trending grid, featured gallery, latest strip.
 * Requires: data.js, gallery.js, theme.js, ads.js loaded first.
 * ============================================================
 */

(function () {
  "use strict";

  // ── Shared helpers ─────────────────────────────────────────

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

  // ── Determine path prefix based on page location ──────────
  // index.html is at root; pages in /pages/ need ../
  const PATH_PREFIX = (function () {
    const path = window.location.pathname;
    return path.includes("/pages/") ? "../" : "";
  })();

  // ── Hero Section ───────────────────────────────────────────

  function renderHero() {
    const container = document.getElementById("hero-container");
    if (!container || typeof HERO_ITEM === "undefined") return;

    const item = HERO_ITEM;
    const postUrl = `${PATH_PREFIX}pages/post.html?id=${item.id}`;
    const galleryUrl = `${PATH_PREFIX}pages/gallery.html`;

    container.innerHTML = `
      <div class="hero-content">
        <div class="hero-text">
          <span class="hero-badge">
            <i data-lucide="zap" stroke-width="2"></i>
            ${capitalize(item.category)}
          </span>
          <h1 class="hero-headline">${escapeHtml(item.title)}</h1>
          <p class="hero-description">${escapeHtml(truncate(item.description, 160))}</p>
          <div class="hero-actions">
            <button
              class="btn btn--primary btn--lg"
              data-smartlink
              aria-label="Watch Now — opens Smartlink"
            >
              <i data-lucide="play-circle" stroke-width="1.5"></i>
              Watch Now
            </button>
            <a href="${galleryUrl}" class="btn btn--secondary btn--lg">
              <i data-lucide="image" stroke-width="1.5"></i>
              Explore Gallery
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-img-wrap">
            <img
              src="${item.image.replace('/800/', '/1200/').replace('/600', '/700')}"
              alt="${escapeHtml(item.imageAlt || item.title)}"
              class="hero-img"
              width="700" height="500"
              fetchpriority="high"
            />
            <div class="hero-img-overlay"></div>
            <div class="hero-img-meta">
              <span class="hero-meta-badge">
                <i data-lucide="eye" stroke-width="1.5"></i>
                ${formatViews(item.views)} views
              </span>
              <span class="hero-meta-badge">
                <i data-lucide="calendar" stroke-width="1.5"></i>
                ${formatDate(item.date)}
              </span>
              <span class="hero-meta-badge">
                <i data-lucide="tag" stroke-width="1.5"></i>
                ${capitalize(item.category)}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Content Card Builder ───────────────────────────────────

  function buildCard(item, options = {}) {
    const { size = "default", pathPrefix = PATH_PREFIX } = options;
    const isVideo = item.category === "videos";
    const href = `${pathPrefix}pages/post.html?id=${item.id}`;

    return `
      <article class="card card--${size}" data-category="${item.category}" itemscope itemtype="https://schema.org/Article">
        <a href="${href}" class="card__img-link" tabindex="-1" aria-hidden="true">
          <div class="card__img-wrap">
            <img
              src="${item.image}"
              alt="${escapeHtml(item.imageAlt || item.title)}"
              class="card__img"
              loading="lazy"
              width="400" height="280"
              itemprop="image"
            />
            <div class="card__img-overlay">
              <span class="card__overlay-cta">
                ${isVideo ? `<i data-lucide="play-circle" stroke-width="1.5"></i> Watch` : `<i data-lucide="arrow-right" stroke-width="1.5"></i> View Story`}
              </span>
            </div>
            ${isVideo ? `
            <div class="video-duration-badge">
              <i data-lucide="clock" stroke-width="1.5"></i>
              ${item.duration || ""}
            </div>` : ""}
            <span class="card__category-badge badge badge--sm">${capitalize(item.category)}</span>
          </div>
        </a>
        <div class="card__body">
          <h3 class="card__title" itemprop="headline">
            <a href="${href}">${escapeHtml(item.title)}</a>
          </h3>
          ${size === "large" || size === "featured" ? `
          <p class="card__desc" itemprop="description">${escapeHtml(truncate(item.description, 110))}</p>
          ` : ""}
          <div class="card-meta">
            <span class="card-meta__item">
              <i data-lucide="eye" stroke-width="1.5"></i>
              <span itemprop="interactionCount">${formatViews(item.views)}</span>
            </span>
            <span class="card-meta__item">
              <i data-lucide="calendar" stroke-width="1.5"></i>
              <time itemprop="datePublished" datetime="${item.date}">${formatDate(item.date)}</time>
            </span>
          </div>
          <a href="${href}" class="card__cta-link">
            View Story
            <i data-lucide="arrow-right" stroke-width="1.5"></i>
          </a>
        </div>
      </article>
    `;
  }

  // ── Video Card Builder ─────────────────────────────────────

  function buildVideoCard(item, options = {}) {
    const { pathPrefix = PATH_PREFIX } = options;
    const href = `${pathPrefix}pages/post.html?id=${item.id}`;
    return `
      <article class="card card--video" data-category="videos" itemscope itemtype="https://schema.org/VideoObject">
        <a href="${href}" class="card__img-link" tabindex="-1" aria-hidden="true">
          <div class="card__img-wrap card__img-wrap--video">
            <img
              src="${item.image}"
              alt="${escapeHtml(item.imageAlt || item.title)}"
              class="card__img"
              loading="lazy"
              width="400" height="225"
              itemprop="thumbnailUrl"
            />
            <div class="video-play-overlay">
              <div class="video-play-btn">
                <i data-lucide="play" stroke-width="2"></i>
              </div>
            </div>
            <div class="video-duration-badge">
              <i data-lucide="clock" stroke-width="1.5"></i>
              ${item.duration || ""}
            </div>
          </div>
        </a>
        <div class="card__body">
          <h3 class="card__title" itemprop="name">
            <a href="${href}">${escapeHtml(item.title)}</a>
          </h3>
          <p class="card__desc" itemprop="description">${escapeHtml(truncate(item.description, 90))}</p>
          <div class="card-meta">
            <span class="card-meta__item">
              <i data-lucide="eye" stroke-width="1.5"></i>
              ${formatViews(item.views)}
            </span>
            <span class="card-meta__item">
              <i data-lucide="clock" stroke-width="1.5"></i>
              ${item.duration || ""}
            </span>
          </div>
        </div>
      </article>
    `;
  }

  // ── Gallery Card Builder ───────────────────────────────────

  function buildGalleryCard(item, options = {}) {
    const { pathPrefix = PATH_PREFIX, featured = false } = options;
    const href = `${pathPrefix}pages/gallery.html?id=${item.id}`;
    const imgSrc = item.aspectRatio === "portrait"
      ? item.image.replace("/600/", "/500/").replace("/900", "/750")
      : item.image;
    return `
      <article class="gallery-card ${featured ? "gallery-card--featured" : ""} gallery-card--${item.aspectRatio || "landscape"}"
               data-category="gallery"
               itemscope itemtype="https://schema.org/ImageObject">
        <a href="${href}" class="gallery-card__link" aria-label="View gallery: ${escapeHtml(item.title)}">
          <div class="gallery-card__img-wrap">
            <img
              src="${imgSrc}"
              alt="${escapeHtml(item.imageAlt || item.title)}"
              class="gallery-card__img"
              loading="lazy"
              itemprop="contentUrl"
            />
            <div class="gallery-card__overlay">
              <div class="gallery-card__overlay-content">
                <span class="gallery-card__overlay-icon">
                  <i data-lucide="camera" stroke-width="1.5"></i>
                </span>
                <h3 class="gallery-card__title" itemprop="name">${escapeHtml(item.title)}</h3>
                <div class="card-meta card-meta--light">
                  <span class="card-meta__item">
                    <i data-lucide="eye" stroke-width="1.5"></i>
                    ${formatViews(item.views)}
                  </span>
                  <span class="card-meta__item badge badge--sm">${capitalize(item.category)}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </article>
    `;
  }

  // ── Section Header Builder ─────────────────────────────────

  function buildSectionHeader(title, subtitle, linkHref, linkText = "View All") {
    return `
      <div class="section-header">
        <div class="section-header__text">
          <h2 class="section-title">${escapeHtml(title)}</h2>
          ${subtitle ? `<p class="section-subtitle">${escapeHtml(subtitle)}</p>` : ""}
        </div>
        ${linkHref ? `
        <a href="${linkHref}" class="section-header__link">
          ${linkText}
          <i data-lucide="arrow-right" stroke-width="1.5"></i>
        </a>` : ""}
      </div>
    `;
  }

  // ── Render Trending Grid ───────────────────────────────────

  function renderTrending() {
    const container = document.getElementById("trending-grid");
    if (!container || typeof TRENDING === "undefined") return;

    container.innerHTML = TRENDING.slice(0, 12).map(item => buildCard(item)).join("");
  }

  // ── Render Featured Gallery Preview ───────────────────────

  function renderFeaturedGallery() {
    const container = document.getElementById("featured-gallery-grid");
    if (!container || typeof GALLERY_ITEMS === "undefined") return;

    const items = GALLERY_ITEMS.slice(0, 6);
    container.innerHTML = items.map((item, i) =>
      buildGalleryCard(item, { featured: i === 0 })
    ).join("");
  }

  // ── Render Latest Posts ────────────────────────────────────

  function renderLatest() {
    const container = document.getElementById("latest-grid");
    if (!container || typeof LATEST === "undefined") return;

    container.innerHTML = LATEST.slice(0, 6).map(item =>
      buildCard(item, { size: "large" })
    ).join("");
  }

  // ── Render Videos Strip ───────────────────────────────────

  function renderVideos() {
    const container = document.getElementById("videos-grid");
    if (!container || typeof VIDEOS === "undefined") return;

    container.innerHTML = VIDEOS.slice(0, 4).map(item =>
      buildVideoCard(item)
    ).join("");
  }

  // ── Header Scroll Behavior ─────────────────────────────────

  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;

    let lastScroll = 0;
    let ticking    = false;

    function updateHeader() {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
      // Hide on scroll down, show on scroll up (past 300px)
      if (scrollY > 300) {
        if (scrollY > lastScroll) {
          header.classList.add("header--hidden");
        } else {
          header.classList.remove("header--hidden");
        }
      } else {
        header.classList.remove("header--hidden");
      }
      lastScroll = scrollY;
      ticking    = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Mobile Menu ────────────────────────────────────────────

  function initMobileMenu() {
    const menuToggle  = document.getElementById("mobile-menu-toggle");
    const menuClose   = document.getElementById("mobile-menu-close");
    const mobileMenu  = document.getElementById("mobile-menu");
    const menuOverlay = document.getElementById("mobile-menu-overlay");

    function openMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add("mobile-menu--open");
      menuOverlay && menuOverlay.classList.add("menu-overlay--visible");
      document.body.classList.add("menu-open");
      menuToggle && menuToggle.setAttribute("aria-expanded", "true");
      menuClose && menuClose.focus();
    }

    function closeMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.remove("mobile-menu--open");
      menuOverlay && menuOverlay.classList.remove("menu-overlay--visible");
      document.body.classList.remove("menu-open");
      menuToggle && menuToggle.setAttribute("aria-expanded", "false");
      menuToggle && menuToggle.focus();
    }

    menuToggle  && menuToggle.addEventListener("click", openMenu);
    menuClose   && menuClose.addEventListener("click", closeMenu);
    menuOverlay && menuOverlay.addEventListener("click", closeMenu);

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("mobile-menu--open")) {
        closeMenu();
      }
    });
  }

  // ── Search Toggle ──────────────────────────────────────────

  function initSearchToggle() {
    const searchToggle   = document.getElementById("search-toggle");
    const searchBar      = document.getElementById("header-search-bar");
    const searchInput    = document.getElementById("header-search-input");
    const searchClose    = document.getElementById("search-bar-close");

    function openSearch() {
      if (!searchBar) return;
      searchBar.classList.add("search-bar--open");
      searchInput && setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
      if (!searchBar) return;
      searchBar.classList.remove("search-bar--open");
    }

    searchToggle && searchToggle.addEventListener("click", openSearch);
    searchClose  && searchClose.addEventListener("click", closeSearch);

    // Handle Enter key in header search
    searchInput && searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && this.value.trim()) {
        const query = encodeURIComponent(this.value.trim());
        window.location.href = `${PATH_PREFIX}pages/search.html?q=${query}`;
      }
      if (e.key === "Escape") closeSearch();
    });
  }

  // ── Site Name Injection ────────────────────────────────────

  function injectSiteName() {
    if (typeof SITE_CONFIG === "undefined") return;
    document.querySelectorAll("[data-site-name]").forEach(el => {
      el.textContent = SITE_CONFIG.siteName;
    });
  }

  // ── Active Nav Link ────────────────────────────────────────

  function setActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      const isActive =
        (href.includes("index.html") && (path === "/" || path.endsWith("index.html") || path === "")) ||
        (href !== "index.html" && path.includes(href.replace("../", "").replace("./", "")));
      link.classList.toggle("nav-link--active", isActive);
      link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  }

  // ── Main Init ──────────────────────────────────────────────

  function init() {
    injectSiteName();
    setActiveNav();
    initHeaderScroll();
    initMobileMenu();
    initSearchToggle();

    // Render page sections
    renderHero();
    renderTrending();
    renderFeaturedGallery();
    renderLatest();
    renderVideos();

    // Initialize Lucide icons (replaces all <i data-lucide="..."> with SVGs)
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Expose globally for use on other pages
  window.AthleteVerseApp = {
    buildCard,
    buildVideoCard,
    buildGalleryCard,
    buildSectionHeader,
    escapeHtml,
    capitalize,
    truncate,
    PATH_PREFIX,
    initHeaderScroll,
    initMobileMenu,
    initSearchToggle,
    injectSiteName,
    setActiveNav,
  };

  // Run on DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
