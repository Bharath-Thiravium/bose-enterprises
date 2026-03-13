// Debug Script - Diagnose flickering animations
(function() {
  console.log('=== FLICKERING DIAGNOSIS SCRIPT ===');
  
  // 1. Check for conflicting animations
  console.log('\n1. CHECKING ANIMATIONS ON ELEMENTS:');
  var animatedElements = document.querySelectorAll('[data-be-animate]');
  console.log('Total animated elements:', animatedElements.length);
  
  animatedElements.forEach(function(el, index) {
    if (index < 5) {
      var computed = window.getComputedStyle(el);
      var animationName = computed.animationName;
      var animationDuration = computed.animationDuration;
      var opacity = computed.opacity;
      console.log('Element', index, '- Animation:', animationName, 'Duration:', animationDuration, 'Opacity:', opacity);
    }
  });

  // 2. Check CSS rules
  console.log('\n2. CHECKING CSS RULES:');
  var sheets = document.styleSheets;
  var flickeringRules = [];
  
  for (var i = 0; i < sheets.length; i++) {
    try {
      var rules = sheets[i].cssRules || sheets[i].rules;
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        if (rule.selectorText && rule.selectorText.includes('be-animate')) {
          console.log('Found rule:', rule.selectorText, rule.style.cssText);
          flickeringRules.push(rule);
        }
      }
    } catch(e) {
      // Skip CORS errors
    }
  }

  // 3. Monitor repaints during scroll
  console.log('\n3. MONITORING REPAINTS DURING SCROLL:');
  var repaintCount = 0;
  var lastRepaintTime = Date.now();
  
  var observer = new MutationObserver(function(mutations) {
    repaintCount++;
    var now = Date.now();
    if (now - lastRepaintTime > 100) {
      console.log('Repaints in last 100ms:', repaintCount);
      repaintCount = 0;
      lastRepaintTime = now;
    }
  });
  
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class', 'style'],
    subtree: true,
    attributeOldValue: true
  });

  // 4. Check for layout thrashing
  console.log('\n4. CHECKING FOR LAYOUT THRASHING:');
  var bcrCalls = 0;
  
  var originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function() {
    bcrCalls++;
    if (bcrCalls > 50) {
      console.warn('High getBoundingClientRect calls detected:', bcrCalls);
    }
    return originalGetBoundingClientRect.call(this);
  };

  // 5. Check IntersectionObserver performance
  console.log('\n5. CHECKING INTERSECTION OBSERVER:');
  var ioCallCount = 0;
  var originalIO = window.IntersectionObserver;
  
  window.IntersectionObserver = function(callback, options) {
    ioCallCount++;
    console.log('IntersectionObserver created #' + ioCallCount, 'Options:', options);
    
    var wrappedCallback = function(entries) {
      console.log('IO Callback triggered with', entries.length, 'entries');
      entries.forEach(function(entry) {
        console.log('  - Element:', entry.target.tagName, 'isIntersecting:', entry.isIntersecting);
      });
      return callback(entries);
    };
    
    return new originalIO(wrappedCallback, options);
  };

  // 6. Monitor animation frames
  console.log('\n6. MONITORING ANIMATION FRAMES:');
  var rafCount = 0;
  var originalRAF = window.requestAnimationFrame;
  
  window.requestAnimationFrame = function(callback) {
    rafCount++;
    if (rafCount % 10 === 0) {
      console.log('requestAnimationFrame calls:', rafCount);
    }
    return originalRAF(callback);
  };

  // 7. Check for rapid class changes
  console.log('\n7. MONITORING CLASS CHANGES:');
  var classChangeCount = 0;
  var lastClassChangeTime = Date.now();
  
  var classObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        classChangeCount++;
        var now = Date.now();
        if (now - lastClassChangeTime > 1000) {
          console.log('Class changes in last second:', classChangeCount);
          classChangeCount = 0;
          lastClassChangeTime = now;
        }
      }
    });
  });
  
  classObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true
  });

  console.log('\n=== DIAGNOSIS COMPLETE ===');
  console.log('Open DevTools Console to see detailed logs while scrolling');
})();
