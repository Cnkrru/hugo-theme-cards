class PJAX {
  constructor(options = {}) {
    this.options = {
      container: '.center-container',
      links: 'a[href^="/"]:not([target="_blank"]):not([data-no-pjax])',
      timeout: 5000,
      loadingClass: 'pjax-loading',
      animationDuration: 300,
      ...options
    };

    this.isLoading = false;
    this.currentUrl = window.location.href;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupPopstate();
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest(this.options.links);
      if (link && !this.isLoading) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href !== this.currentUrl) {
          this.loadPage(href);
        }
      }
    });
  }

  setupPopstate() {
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.url) {
        this.loadPage(e.state.url, false);
      }
    });
  }

  async loadPage(url, pushState = true) {
    if (this.isLoading) return;

    this.isLoading = true;
    this.showLoading();

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: this.options.timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      this.processResponse(html, url, pushState);

    } catch (error) {
      console.error('PJAX load error:', error);
      window.location.href = url;
    } finally {
      this.hideLoading();
      this.isLoading = false;
    }
  }

  processResponse(html, url, pushState) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const newContainer = doc.querySelector(this.options.container);
    const newTitle = doc.querySelector('title')?.textContent || '';
    const newHead = doc.querySelector('head');

    if (newContainer) {
      const currentContainer = document.querySelector(this.options.container);
      if (!currentContainer) {
        window.location.href = url;
        this.isLoading = false;
        this.hideLoading();
        return;
      }

      this.animateTransition(newContainer);
      document.title = newTitle;
      this.updateHead(newHead);

      if (pushState) {
        history.pushState({ url }, newTitle, url);
      }
      this.currentUrl = url;

      this.afterLoad();
    }
  }

  animateTransition(newContainer) {
    const container = document.querySelector(this.options.container);
    if (!container) return;

    if (window.Cards) window.Cards.destroyAll();

    container.style.opacity = '0';
    container.style.transform = 'translateX(20px)';
    container.style.transition = `all ${this.options.animationDuration}ms ease-out`;

    setTimeout(() => {
      container.innerHTML = newContainer.innerHTML;
      this.executeInlineScripts(container);
      container.style.opacity = '1';
      container.style.transform = 'translateX(0)';
      if (window.Cards) window.Cards.initAll();
    }, this.options.animationDuration);
  }

  executeInlineScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      if (script.src) {
        newScript.src = script.src;
        newScript.async = true;
      } else {
        newScript.textContent = script.textContent;
      }
      document.body.appendChild(newScript);
      document.body.removeChild(newScript);
    });
  }

  updateHead(newHead) {
    if (!newHead) return;

    const currentHead = document.querySelector('head');

    const newScripts = newHead.querySelectorAll('script[src], script[data-pjax-reload]');
    newScripts.forEach(script => {
      const existingScript = currentHead.querySelector(`script[src="${script.src}"]`);
      if (!existingScript) {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.async = true;
        currentHead.appendChild(newScript);
      }
    });

    const newStyles = newHead.querySelectorAll('link[rel="stylesheet"]');
    newStyles.forEach(link => {
      const existingLink = currentHead.querySelector(`link[href="${link.href}"]`);
      if (!existingLink) {
        const newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = link.href;
        currentHead.appendChild(newLink);
      }
    });
  }

  afterLoad() {
    this.reinitializeScripts();
    this.updateActiveLinks();
  }

  reinitializeScripts() {
    this.initializeHighlightJS();
    this.initializeKatex();
    this.initializeMermaid();
  }

  initializeHighlightJS() {
    if (window.hljs) {
      document.querySelectorAll('pre code').forEach(block => {
        window.hljs.highlightElement(block);
      });
    }
  }

  initializeKatex() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ]
      });
    }
  }

  initializeMermaid() {
    if (window.mermaid) {
      window.mermaid.init();
    }
  }

  updateActiveLinks() {
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href === this.currentUrl) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  showLoading() {
    document.body.classList.add(this.options.loadingClass);
  }

  hideLoading() {
    document.body.classList.remove(this.options.loadingClass);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PJAX();
});