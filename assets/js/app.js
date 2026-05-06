window.Cards = (function() {
  const components = {};
  const actions = {};
  let initialized = false;

  function register(name, opts) {
    components[name] = { init: opts.init, destroy: opts.destroy, instance: null };
  }

  function initAll() {
    if (initialized) return;
    Object.keys(components).forEach(function(name) {
      const comp = components[name];
      if (comp.init) comp.instance = comp.init();
    });
    initialized = true;
  }

  function destroyAll() {
    Object.keys(components).forEach(function(name) {
      const comp = components[name];
      if (comp.destroy && comp.instance !== undefined) comp.destroy(comp.instance);
      comp.instance = null;
    });
    initialized = false;
  }

  function onPageChange() {
    destroyAll();
    initAll();
  }

  document.addEventListener('click', function(e) {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;
    const handler = actions[action];
    if (handler) handler(e, target);
  });

  document.addEventListener('keydown', function(e) {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    if (e.key === 'Enter' || e.key === ' ') {
      const action = target.dataset.action;
      const handler = actions[action];
      if (handler) handler(e, target);
    }
  });

  return {
    register: register,
    initAll: initAll,
    destroyAll: destroyAll,
    onPageChange: onPageChange,
    actions: actions
  };
})();

document.addEventListener('DOMContentLoaded', function() {
  window.Cards.initAll();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function() {});
  }
});
