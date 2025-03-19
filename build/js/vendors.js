(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  var SpriteSymbol = function SpriteSymbol(ref) {
    var id = ref.id;
    var viewBox = ref.viewBox;
    var content = ref.content;
    this.id = id;
    this.viewBox = viewBox;
    this.content = content;
  };
  /**
   * @return {string}
   */


  SpriteSymbol.prototype.stringify = function stringify() {
    return this.content;
  };
  /**
   * @return {string}
   */


  SpriteSymbol.prototype.toString = function toString() {
    return this.stringify();
  };

  SpriteSymbol.prototype.destroy = function destroy() {
    var this$1 = this;
    ['id', 'viewBox', 'content'].forEach(function (prop) {
      return delete this$1[prop];
    });
  };
  /**
   * @param {string} content
   * @return {Element}
   */


  var parse = function (content) {
    var hasImportNode = !!document.importNode;
    var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;
    /**
     * Fix for browser which are throwing WrongDocumentError
     * if you insert an element which is not part of the document
     * @see http://stackoverflow.com/a/7986519/4624403
     */

    if (hasImportNode) {
      return document.importNode(doc, true);
    }

    return doc;
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var deepmerge = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
      if (false) {} else {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {
      function isMergeableObject(val) {
        var nonNullObject = val && typeof val === 'object';
        return nonNullObject && Object.prototype.toString.call(val) !== '[object RegExp]' && Object.prototype.toString.call(val) !== '[object Date]';
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }

      function cloneIfNecessary(value, optionsArgument) {
        var clone = optionsArgument && optionsArgument.clone === true;
        return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
      }

      function defaultArrayMerge(target, source, optionsArgument) {
        var destination = target.slice();
        source.forEach(function (e, i) {
          if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
          } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
          } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
          }
        });
        return destination;
      }

      function mergeObject(target, source, optionsArgument) {
        var destination = {};

        if (isMergeableObject(target)) {
          Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
          });
        }

        Object.keys(source).forEach(function (key) {
          if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
          } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
          }
        });
        return destination;
      }

      function deepmerge(target, source, optionsArgument) {
        var array = Array.isArray(source);
        var options = optionsArgument || {
          arrayMerge: defaultArrayMerge
        };
        var arrayMerge = options.arrayMerge || defaultArrayMerge;

        if (array) {
          return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument);
        } else {
          return mergeObject(target, source, optionsArgument);
        }
      }

      deepmerge.all = function deepmergeAll(array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
          throw new Error('first argument should be an array with at least two elements');
        } // we are sure there are at least 2 values, so it is safe to have no initial value


        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, optionsArgument);
        });
      };

      return deepmerge;
    });
  });
  var namespaces_1 = createCommonjsModule(function (module, exports) {
    var namespaces = {
      svg: {
        name: 'xmlns',
        uri: 'http://www.w3.org/2000/svg'
      },
      xlink: {
        name: 'xmlns:xlink',
        uri: 'http://www.w3.org/1999/xlink'
      }
    };
    exports.default = namespaces;
    module.exports = exports.default;
  });
  /**
   * @param {Object} attrs
   * @return {string}
   */

  var objectToAttrsString = function (attrs) {
    return Object.keys(attrs).map(function (attr) {
      var value = attrs[attr].toString().replace(/"/g, '&quot;');
      return attr + "=\"" + value + "\"";
    }).join(' ');
  };

  var svg = namespaces_1.svg;
  var xlink = namespaces_1.xlink;
  var defaultAttrs = {};
  defaultAttrs[svg.name] = svg.uri;
  defaultAttrs[xlink.name] = xlink.uri;
  /**
   * @param {string} [content]
   * @param {Object} [attributes]
   * @return {string}
   */

  var wrapInSvgString = function (content, attributes) {
    if (content === void 0) content = '';
    var attrs = deepmerge(defaultAttrs, attributes || {});
    var attrsRendered = objectToAttrsString(attrs);
    return "<svg " + attrsRendered + ">" + content + "</svg>";
  };

  var BrowserSpriteSymbol = function (SpriteSymbol$$1) {
    function BrowserSpriteSymbol() {
      SpriteSymbol$$1.apply(this, arguments);
    }

    if (SpriteSymbol$$1) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
    BrowserSpriteSymbol.prototype = Object.create(SpriteSymbol$$1 && SpriteSymbol$$1.prototype);
    BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;
    var prototypeAccessors = {
      isMounted: {}
    };

    prototypeAccessors.isMounted.get = function () {
      return !!this.node;
    };
    /**
     * @param {Element} node
     * @return {BrowserSpriteSymbol}
     */


    BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode(node) {
      return new BrowserSpriteSymbol({
        id: node.getAttribute('id'),
        viewBox: node.getAttribute('viewBox'),
        content: node.outerHTML
      });
    };

    BrowserSpriteSymbol.prototype.destroy = function destroy() {
      if (this.isMounted) {
        this.unmount();
      }

      SpriteSymbol$$1.prototype.destroy.call(this);
    };
    /**
     * @param {Element|string} target
     * @return {Element}
     */


    BrowserSpriteSymbol.prototype.mount = function mount(target) {
      if (this.isMounted) {
        return this.node;
      }

      var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
      var node = this.render();
      this.node = node;
      mountTarget.appendChild(node);
      return node;
    };
    /**
     * @return {Element}
     */


    BrowserSpriteSymbol.prototype.render = function render() {
      var content = this.stringify();
      return parse(wrapInSvgString(content)).childNodes[0];
    };

    BrowserSpriteSymbol.prototype.unmount = function unmount() {
      this.node.parentNode.removeChild(this.node);
    };

    Object.defineProperties(BrowserSpriteSymbol.prototype, prototypeAccessors);
    return BrowserSpriteSymbol;
  }(SpriteSymbol);

  return BrowserSpriteSymbol;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var deepmerge = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
      if (false) {} else {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {
      function isMergeableObject(val) {
        var nonNullObject = val && typeof val === 'object';
        return nonNullObject && Object.prototype.toString.call(val) !== '[object RegExp]' && Object.prototype.toString.call(val) !== '[object Date]';
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }

      function cloneIfNecessary(value, optionsArgument) {
        var clone = optionsArgument && optionsArgument.clone === true;
        return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
      }

      function defaultArrayMerge(target, source, optionsArgument) {
        var destination = target.slice();
        source.forEach(function (e, i) {
          if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
          } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
          } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
          }
        });
        return destination;
      }

      function mergeObject(target, source, optionsArgument) {
        var destination = {};

        if (isMergeableObject(target)) {
          Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
          });
        }

        Object.keys(source).forEach(function (key) {
          if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
          } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
          }
        });
        return destination;
      }

      function deepmerge(target, source, optionsArgument) {
        var array = Array.isArray(source);
        var options = optionsArgument || {
          arrayMerge: defaultArrayMerge
        };
        var arrayMerge = options.arrayMerge || defaultArrayMerge;

        if (array) {
          return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument);
        } else {
          return mergeObject(target, source, optionsArgument);
        }
      }

      deepmerge.all = function deepmergeAll(array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
          throw new Error('first argument should be an array with at least two elements');
        } // we are sure there are at least 2 values, so it is safe to have no initial value


        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, optionsArgument);
        });
      };

      return deepmerge;
    });
  }); //      
  // An event handler can take an optional event argument
  // and should not return a value
  // An array of all currently registered event handlers for a type
  // A map of event types and their corresponding event handlers.

  /** Mitt: Tiny (~200b) functional event emitter / pubsub.
   *  @name mitt
   *  @returns {Mitt}
   */

  function mitt(all) {
    all = all || Object.create(null);
    return {
      /**
       * Register an event handler for the given type.
       *
       * @param  {String} type	Type of event to listen for, or `"*"` for all events
       * @param  {Function} handler Function to call in response to given event
       * @memberOf mitt
       */
      on: function on(type, handler) {
        (all[type] || (all[type] = [])).push(handler);
      },

      /**
       * Remove an event handler for the given type.
       *
       * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
       * @param  {Function} handler Handler function to remove
       * @memberOf mitt
       */
      off: function off(type, handler) {
        if (all[type]) {
          all[type].splice(all[type].indexOf(handler) >>> 0, 1);
        }
      },

      /**
       * Invoke all handlers for the given type.
       * If present, `"*"` handlers are invoked after type-matched handlers.
       *
       * @param {String} type  The event type to invoke
       * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
       * @memberof mitt
       */
      emit: function emit(type, evt) {
        (all[type] || []).map(function (handler) {
          handler(evt);
        });
        (all['*'] || []).map(function (handler) {
          handler(type, evt);
        });
      }
    };
  }

  var namespaces_1 = createCommonjsModule(function (module, exports) {
    var namespaces = {
      svg: {
        name: 'xmlns',
        uri: 'http://www.w3.org/2000/svg'
      },
      xlink: {
        name: 'xmlns:xlink',
        uri: 'http://www.w3.org/1999/xlink'
      }
    };
    exports.default = namespaces;
    module.exports = exports.default;
  });
  /**
   * @param {Object} attrs
   * @return {string}
   */

  var objectToAttrsString = function (attrs) {
    return Object.keys(attrs).map(function (attr) {
      var value = attrs[attr].toString().replace(/"/g, '&quot;');
      return attr + "=\"" + value + "\"";
    }).join(' ');
  };

  var svg = namespaces_1.svg;
  var xlink = namespaces_1.xlink;
  var defaultAttrs = {};
  defaultAttrs[svg.name] = svg.uri;
  defaultAttrs[xlink.name] = xlink.uri;
  /**
   * @param {string} [content]
   * @param {Object} [attributes]
   * @return {string}
   */

  var wrapInSvgString = function (content, attributes) {
    if (content === void 0) content = '';
    var attrs = deepmerge(defaultAttrs, attributes || {});
    var attrsRendered = objectToAttrsString(attrs);
    return "<svg " + attrsRendered + ">" + content + "</svg>";
  };

  var svg$1 = namespaces_1.svg;
  var xlink$1 = namespaces_1.xlink;
  var defaultConfig = {
    attrs: (obj = {
      style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
      'aria-hidden': 'true'
    }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj)
  };
  var obj;

  var Sprite = function Sprite(config) {
    this.config = deepmerge(defaultConfig, config || {});
    this.symbols = [];
  };
  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * @param {SpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */


  Sprite.prototype.add = function add(symbol) {
    var ref = this;
    var symbols = ref.symbols;
    var existing = this.find(symbol.id);

    if (existing) {
      symbols[symbols.indexOf(existing)] = symbol;
      return false;
    }

    symbols.push(symbol);
    return true;
  };
  /**
   * Remove symbol & destroy it
   * @param {string} id
   * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
   */


  Sprite.prototype.remove = function remove(id) {
    var ref = this;
    var symbols = ref.symbols;
    var symbol = this.find(id);

    if (symbol) {
      symbols.splice(symbols.indexOf(symbol), 1);
      symbol.destroy();
      return true;
    }

    return false;
  };
  /**
   * @param {string} id
   * @return {SpriteSymbol|null}
   */


  Sprite.prototype.find = function find(id) {
    return this.symbols.filter(function (s) {
      return s.id === id;
    })[0] || null;
  };
  /**
   * @param {string} id
   * @return {boolean}
   */


  Sprite.prototype.has = function has(id) {
    return this.find(id) !== null;
  };
  /**
   * @return {string}
   */


  Sprite.prototype.stringify = function stringify() {
    var ref = this.config;
    var attrs = ref.attrs;
    var stringifiedSymbols = this.symbols.map(function (s) {
      return s.stringify();
    }).join('');
    return wrapInSvgString(stringifiedSymbols, attrs);
  };
  /**
   * @return {string}
   */


  Sprite.prototype.toString = function toString() {
    return this.stringify();
  };

  Sprite.prototype.destroy = function destroy() {
    this.symbols.forEach(function (s) {
      return s.destroy();
    });
  };

  var SpriteSymbol = function SpriteSymbol(ref) {
    var id = ref.id;
    var viewBox = ref.viewBox;
    var content = ref.content;
    this.id = id;
    this.viewBox = viewBox;
    this.content = content;
  };
  /**
   * @return {string}
   */


  SpriteSymbol.prototype.stringify = function stringify() {
    return this.content;
  };
  /**
   * @return {string}
   */


  SpriteSymbol.prototype.toString = function toString() {
    return this.stringify();
  };

  SpriteSymbol.prototype.destroy = function destroy() {
    var this$1 = this;
    ['id', 'viewBox', 'content'].forEach(function (prop) {
      return delete this$1[prop];
    });
  };
  /**
   * @param {string} content
   * @return {Element}
   */


  var parse = function (content) {
    var hasImportNode = !!document.importNode;
    var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;
    /**
     * Fix for browser which are throwing WrongDocumentError
     * if you insert an element which is not part of the document
     * @see http://stackoverflow.com/a/7986519/4624403
     */

    if (hasImportNode) {
      return document.importNode(doc, true);
    }

    return doc;
  };

  var BrowserSpriteSymbol = function (SpriteSymbol$$1) {
    function BrowserSpriteSymbol() {
      SpriteSymbol$$1.apply(this, arguments);
    }

    if (SpriteSymbol$$1) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
    BrowserSpriteSymbol.prototype = Object.create(SpriteSymbol$$1 && SpriteSymbol$$1.prototype);
    BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;
    var prototypeAccessors = {
      isMounted: {}
    };

    prototypeAccessors.isMounted.get = function () {
      return !!this.node;
    };
    /**
     * @param {Element} node
     * @return {BrowserSpriteSymbol}
     */


    BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode(node) {
      return new BrowserSpriteSymbol({
        id: node.getAttribute('id'),
        viewBox: node.getAttribute('viewBox'),
        content: node.outerHTML
      });
    };

    BrowserSpriteSymbol.prototype.destroy = function destroy() {
      if (this.isMounted) {
        this.unmount();
      }

      SpriteSymbol$$1.prototype.destroy.call(this);
    };
    /**
     * @param {Element|string} target
     * @return {Element}
     */


    BrowserSpriteSymbol.prototype.mount = function mount(target) {
      if (this.isMounted) {
        return this.node;
      }

      var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
      var node = this.render();
      this.node = node;
      mountTarget.appendChild(node);
      return node;
    };
    /**
     * @return {Element}
     */


    BrowserSpriteSymbol.prototype.render = function render() {
      var content = this.stringify();
      return parse(wrapInSvgString(content)).childNodes[0];
    };

    BrowserSpriteSymbol.prototype.unmount = function unmount() {
      this.node.parentNode.removeChild(this.node);
    };

    Object.defineProperties(BrowserSpriteSymbol.prototype, prototypeAccessors);
    return BrowserSpriteSymbol;
  }(SpriteSymbol);

  var defaultConfig$1 = {
    /**
     * Should following options be automatically configured:
     * - `syncUrlsWithBaseTag`
     * - `locationChangeAngularEmitter`
     * - `moveGradientsOutsideSymbol`
     * @type {boolean}
     */
    autoConfigure: true,

    /**
     * Default mounting selector
     * @type {string}
     */
    mountTo: 'body',

    /**
     * Fix disappearing SVG elements when <base href> exists.
     * Executes when sprite mounted.
     * @see http://stackoverflow.com/a/18265336/796152
     * @see https://github.com/everdimension/angular-svg-base-fix
     * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
     * @type {boolean}
     */
    syncUrlsWithBaseTag: false,

    /**
     * Should sprite listen custom location change event
     * @type {boolean}
     */
    listenLocationChangeEvent: true,

    /**
     * Custom window event name which should be emitted to update sprite urls
     * @type {string}
     */
    locationChangeEvent: 'locationChange',

    /**
     * Emit location change event in Angular automatically
     * @type {boolean}
     */
    locationChangeAngularEmitter: false,

    /**
     * Selector to find symbols usages when updating sprite urls
     * @type {string}
     */
    usagesToUpdate: 'use[*|href]',

    /**
     * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
     * Executes when sprite is rendered, but not mounted.
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
     * @type {boolean}
     */
    moveGradientsOutsideSymbol: false
  };
  /**
   * @param {*} arrayLike
   * @return {Array}
   */

  var arrayFrom = function (arrayLike) {
    return Array.prototype.slice.call(arrayLike, 0);
  };

  var browser = {
    isChrome: function () {
      return /chrome/i.test(navigator.userAgent);
    },
    isFirefox: function () {
      return /firefox/i.test(navigator.userAgent);
    },
    // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
    isIE: function () {
      return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
    },
    isEdge: function () {
      return /edge/i.test(navigator.userAgent);
    }
  };
  /**
   * @param {string} name
   * @param {*} data
   */

  var dispatchEvent = function (name, data) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(name, false, false, data);
    window.dispatchEvent(event);
  };
  /**
   * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
   * This trick will trigger IE to read and use any existing SVG <style> tags.
   * @see https://github.com/iconic/SVGInjector/issues/23
   * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
   *
   * @param {Element} node DOM Element to search <style> tags in
   * @return {Array<HTMLStyleElement>}
   */


  var evalStylesIEWorkaround = function (node) {
    var updatedNodes = [];
    arrayFrom(node.querySelectorAll('style')).forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });
    return updatedNodes;
  };
  /**
   * @param {string} [url] If not provided - current URL will be used
   * @return {string}
   */


  var getUrlWithoutFragment = function (url) {
    return (url || window.location.href).split('#')[0];
  };
  /* global angular */

  /**
   * @param {string} eventName
   */


  var locationChangeAngularEmitter = function (eventName) {
    angular.module('ng').run(['$rootScope', function ($rootScope) {
      $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
        dispatchEvent(eventName, {
          oldUrl: oldUrl,
          newUrl: newUrl
        });
      });
    }]);
  };

  var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';
  /**
   * @param {Element} svg
   * @param {string} [selector]
   * @return {Element}
   */

  var moveGradientsOutsideSymbol = function (svg, selector) {
    if (selector === void 0) selector = defaultSelector;
    arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
      arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
        symbol.parentNode.insertBefore(node, symbol);
      });
    });
    return svg;
  };
  /**
   * @param {NodeList} nodes
   * @param {Function} [matcher]
   * @return {Attr[]}
   */


  function selectAttributes(nodes, matcher) {
    var attrs = arrayFrom(nodes).reduce(function (acc, node) {
      if (!node.attributes) {
        return acc;
      }

      var arrayfied = arrayFrom(node.attributes);
      var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
      return acc.concat(matched);
    }, []);
    return attrs;
  }
  /**
   * @param {NodeList|Node} nodes
   * @param {boolean} [clone=true]
   * @return {string}
   */


  var xLinkNS = namespaces_1.xlink.uri;
  var xLinkAttrName = 'xlink:href'; // eslint-disable-next-line no-useless-escape

  var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

  function encoder(url) {
    return url.replace(specialUrlCharsPattern, function (match) {
      return "%" + match[0].charCodeAt(0).toString(16).toUpperCase();
    });
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }
  /**
   * @param {NodeList} nodes
   * @param {string} startsWith
   * @param {string} replaceWith
   * @return {NodeList}
   */


  function updateReferences(nodes, startsWith, replaceWith) {
    arrayFrom(nodes).forEach(function (node) {
      var href = node.getAttribute(xLinkAttrName);

      if (href && href.indexOf(startsWith) === 0) {
        var newUrl = href.replace(startsWith, replaceWith);
        node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
      }
    });
    return nodes;
  }
  /**
   * List of SVG attributes to update url() target in them
   */


  var attList = ['clipPath', 'colorProfile', 'src', 'cursor', 'fill', 'filter', 'marker', 'markerStart', 'markerMid', 'markerEnd', 'mask', 'stroke', 'style'];
  var attSelector = attList.map(function (attr) {
    return "[" + attr + "]";
  }).join(',');
  /**
   * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
   * @param {Element} svg
   * @param {NodeList} references
   * @param {string|RegExp} startsWith
   * @param {string} replaceWith
   * @return {void}
   *
   * @example
   * const sprite = document.querySelector('svg.sprite');
   * const usages = document.querySelectorAll('use');
   * updateUrls(sprite, usages, '#', 'prefix#');
   */

  var updateUrls = function (svg, references, startsWith, replaceWith) {
    var startsWithEncoded = encoder(startsWith);
    var replaceWithEncoded = encoder(replaceWith);
    var nodes = svg.querySelectorAll(attSelector);
    var attrs = selectAttributes(nodes, function (ref) {
      var localName = ref.localName;
      var value = ref.value;
      return attList.indexOf(localName) !== -1 && value.indexOf("url(" + startsWithEncoded) !== -1;
    });
    attrs.forEach(function (attr) {
      return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded);
    });
    updateReferences(references, startsWithEncoded, replaceWithEncoded);
  };
  /**
   * Internal emitter events
   * @enum
   * @private
   */


  var Events = {
    MOUNT: 'mount',
    SYMBOL_MOUNT: 'symbol_mount'
  };

  var BrowserSprite = function (Sprite$$1) {
    function BrowserSprite(cfg) {
      var this$1 = this;
      if (cfg === void 0) cfg = {};
      Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));
      var emitter = mitt();
      this._emitter = emitter;
      this.node = null;
      var ref = this;
      var config = ref.config;

      if (config.autoConfigure) {
        this._autoConfigure(cfg);
      }

      if (config.syncUrlsWithBaseTag) {
        var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
        emitter.on(Events.MOUNT, function () {
          return this$1.updateUrls('#', baseUrl);
        });
      }

      var handleLocationChange = this._handleLocationChange.bind(this);

      this._handleLocationChange = handleLocationChange; // Provide way to update sprite urls externally via dispatching custom window event

      if (config.listenLocationChangeEvent) {
        window.addEventListener(config.locationChangeEvent, handleLocationChange);
      } // Emit location change event in Angular automatically


      if (config.locationChangeAngularEmitter) {
        locationChangeAngularEmitter(config.locationChangeEvent);
      } // After sprite mounted


      emitter.on(Events.MOUNT, function (spriteNode) {
        if (config.moveGradientsOutsideSymbol) {
          moveGradientsOutsideSymbol(spriteNode);
        }
      }); // After symbol mounted into sprite

      emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
        if (config.moveGradientsOutsideSymbol) {
          moveGradientsOutsideSymbol(symbolNode.parentNode);
        }

        if (browser.isIE() || browser.isEdge()) {
          evalStylesIEWorkaround(symbolNode);
        }
      });
    }

    if (Sprite$$1) BrowserSprite.__proto__ = Sprite$$1;
    BrowserSprite.prototype = Object.create(Sprite$$1 && Sprite$$1.prototype);
    BrowserSprite.prototype.constructor = BrowserSprite;
    var prototypeAccessors = {
      isMounted: {}
    };
    /**
     * @return {boolean}
     */

    prototypeAccessors.isMounted.get = function () {
      return !!this.node;
    };
    /**
     * Automatically configure following options
     * - `syncUrlsWithBaseTag`
     * - `locationChangeAngularEmitter`
     * - `moveGradientsOutsideSymbol`
     * @param {Object} cfg
     * @private
     */


    BrowserSprite.prototype._autoConfigure = function _autoConfigure(cfg) {
      var ref = this;
      var config = ref.config;

      if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
        config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
      }

      if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';
      }

      if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
        config.moveGradientsOutsideSymbol = browser.isFirefox();
      }
    };
    /**
     * @param {Event} event
     * @param {Object} event.detail
     * @param {string} event.detail.oldUrl
     * @param {string} event.detail.newUrl
     * @private
     */


    BrowserSprite.prototype._handleLocationChange = function _handleLocationChange(event) {
      var ref = event.detail;
      var oldUrl = ref.oldUrl;
      var newUrl = ref.newUrl;
      this.updateUrls(oldUrl, newUrl);
    };
    /**
     * Add new symbol. If symbol with the same id exists it will be replaced.
     * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
     * @fires Events#SYMBOL_MOUNT
     * @param {BrowserSpriteSymbol} symbol
     * @return {boolean} `true` - symbol was added, `false` - replaced
     */


    BrowserSprite.prototype.add = function add(symbol) {
      var sprite = this;
      var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

      if (this.isMounted && isNewSymbol) {
        symbol.mount(sprite.node);

        this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
      }

      return isNewSymbol;
    };
    /**
     * Attach to existing DOM node
     * @param {string|Element} target
     * @return {Element|null} attached DOM Element. null if node to attach not found.
     */


    BrowserSprite.prototype.attach = function attach(target) {
      var this$1 = this;
      var sprite = this;

      if (sprite.isMounted) {
        return sprite.node;
      }
      /** @type Element */


      var node = typeof target === 'string' ? document.querySelector(target) : target;
      sprite.node = node; // Already added symbols needs to be mounted

      this.symbols.forEach(function (symbol) {
        symbol.mount(sprite.node);

        this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
      }); // Create symbols from existing DOM nodes, add and mount them

      arrayFrom(node.querySelectorAll('symbol')).forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding

        sprite.add(symbol);
      });

      this._emitter.emit(Events.MOUNT, node);

      return node;
    };

    BrowserSprite.prototype.destroy = function destroy() {
      var ref = this;
      var config = ref.config;
      var symbols = ref.symbols;
      var _emitter = ref._emitter;
      symbols.forEach(function (s) {
        return s.destroy();
      });

      _emitter.off('*');

      window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

      if (this.isMounted) {
        this.unmount();
      }
    };
    /**
     * @fires Events#MOUNT
     * @param {string|Element} [target]
     * @param {boolean} [prepend=false]
     * @return {Element|null} rendered sprite node. null if mount node not found.
     */


    BrowserSprite.prototype.mount = function mount(target, prepend) {
      if (target === void 0) target = this.config.mountTo;
      if (prepend === void 0) prepend = false;
      var sprite = this;

      if (sprite.isMounted) {
        return sprite.node;
      }

      var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
      var node = sprite.render();
      this.node = node;

      if (prepend && mountNode.childNodes[0]) {
        mountNode.insertBefore(node, mountNode.childNodes[0]);
      } else {
        mountNode.appendChild(node);
      }

      this._emitter.emit(Events.MOUNT, node);

      return node;
    };
    /**
     * @return {Element}
     */


    BrowserSprite.prototype.render = function render() {
      return parse(this.stringify());
    };
    /**
     * Detach sprite from the DOM
     */


    BrowserSprite.prototype.unmount = function unmount() {
      this.node.parentNode.removeChild(this.node);
    };
    /**
     * Update URLs in sprite and usage elements
     * @param {string} oldUrl
     * @param {string} newUrl
     * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
     */


    BrowserSprite.prototype.updateUrls = function updateUrls$1(oldUrl, newUrl) {
      if (!this.isMounted) {
        return false;
      }

      var usages = document.querySelectorAll(this.config.usagesToUpdate);
      updateUrls(this.node, usages, getUrlWithoutFragment(oldUrl) + "#", getUrlWithoutFragment(newUrl) + "#");
      return true;
    };

    Object.defineProperties(BrowserSprite.prototype, prototypeAccessors);
    return BrowserSprite;
  }(Sprite);

  var ready$1 = createCommonjsModule(function (module) {
    /*!
      * domready (c) Dustin Diaz 2014 - License MIT
      */
    !function (name, definition) {
      {
        module.exports = definition();
      }
    }('domready', function () {
      var fns = [],
          listener,
          doc = document,
          hack = doc.documentElement.doScroll,
          domContentLoaded = 'DOMContentLoaded',
          loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

      if (!loaded) {
        doc.addEventListener(domContentLoaded, listener = function () {
          doc.removeEventListener(domContentLoaded, listener);
          loaded = 1;

          while (listener = fns.shift()) {
            listener();
          }
        });
      }

      return function (fn) {
        loaded ? setTimeout(fn, 0) : fns.push(fn);
      };
    });
  });
  var spriteNodeId = '__SVG_SPRITE_NODE__';
  var spriteGlobalVarName = '__SVG_SPRITE__';
  var isSpriteExists = !!window[spriteGlobalVarName]; // eslint-disable-next-line import/no-mutable-exports

  var sprite;

  if (isSpriteExists) {
    sprite = window[spriteGlobalVarName];
  } else {
    sprite = new BrowserSprite({
      attrs: {
        id: spriteNodeId
      }
    });
    window[spriteGlobalVarName] = sprite;
  }

  var loadSprite = function () {
    /**
     * Check for page already contains sprite node
     * If found - attach to and reuse it's content
     * If not - render and mount the new sprite
     */
    var existing = document.getElementById(spriteNodeId);

    if (existing) {
      sprite.attach(existing);
    } else {
      sprite.mount(document.body, true);
    }
  };

  if (document.body) {
    loadSprite();
  } else {
    ready$1(loadSprite);
  }

  var sprite$1 = sprite;
  return sprite$1;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
!function (e, t) {
  if (true) module.exports = t();else { var a, i; }
}(self, function () {
  return function () {
    "use strict";

    var e = {
      8741: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t.default = i;
      },
      3976: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a,
            n = (a = i(5581)) && a.__esModule ? a : {
          default: a
        };
        var r = {
          _maxTestPos: 500,
          placeholder: "_",
          optionalmarker: ["[", "]"],
          quantifiermarker: ["{", "}"],
          groupmarker: ["(", ")"],
          alternatormarker: "|",
          escapeChar: "\\",
          mask: null,
          regex: null,
          oncomplete: function () {},
          onincomplete: function () {},
          oncleared: function () {},
          repeat: 0,
          greedy: !1,
          autoUnmask: !1,
          removeMaskOnSubmit: !1,
          clearMaskOnLostFocus: !0,
          insertMode: !0,
          insertModeVisual: !0,
          clearIncomplete: !1,
          alias: null,
          onKeyDown: function () {},
          onBeforeMask: null,
          onBeforePaste: function (e, t) {
            return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
          },
          onBeforeWrite: null,
          onUnMask: null,
          showMaskOnFocus: !0,
          showMaskOnHover: !0,
          onKeyValidation: function () {},
          skipOptionalPartCharacter: " ",
          numericInput: !1,
          rightAlign: !1,
          undoOnEscape: !0,
          radixPoint: "",
          _radixDance: !1,
          groupSeparator: "",
          keepStatic: null,
          positionCaretOnTab: !0,
          tabThrough: !1,
          supportsInputType: ["text", "tel", "url", "password", "search"],
          ignorables: [n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
          isComplete: null,
          preValidation: null,
          postValidation: null,
          staticDefinitionSymbol: void 0,
          jitMasking: !1,
          nullable: !0,
          inputEventOnly: !1,
          noValuePatching: !1,
          positionCaretOnClick: "lvp",
          casing: null,
          inputmode: "text",
          importDataAttributes: !0,
          shiftPositions: !0,
          usePrototypeDefinitions: !0,
          validationEventTimeOut: 3e3,
          substitutes: {}
        };
        t.default = r;
      },
      7392: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        t.default = {
          9: {
            validator: "[0-9\uff10-\uff19]",
            definitionSymbol: "*"
          },
          a: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            definitionSymbol: "*"
          },
          "*": {
            validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
          }
        };
      },
      253: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e, t, i) {
          if (void 0 === i) return e.__data ? e.__data[t] : null;
          e.__data = e.__data || {}, e.__data[t] = i;
        };
      },
      3776: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Event = void 0, t.off = function (e, t) {
          var i, a;

          function n(e, t, n) {
            if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1);else i[e][t].splice(i[e][t].indexOf(n), 1);
          }

          function r(e, a) {
            var n,
                r,
                o = [];
            if (e.length > 0) {
              if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                ev: e,
                namespace: a && a.length > 0 ? a : "global",
                handler: i[e][a][n]
              });else o.push({
                ev: e,
                namespace: a && a.length > 0 ? a : "global",
                handler: t
              });
            } else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, r = i[l][s].length; n < r; n++) o.push({
              ev: l,
              namespace: s,
              handler: i[l][s][n]
            });else o.push({
              ev: l,
              namespace: s,
              handler: t
            });
            return o;
          }

          if (u(this[0]) && e) {
            i = this[0].eventRegistry, a = this[0];

            for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
          }

          return this;
        }, t.on = function (e, t) {
          function i(e, i) {
            n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
          }

          if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
            var l = r[o].split("."),
                s = l[0],
                c = l[1] || "global";
            i(s, c);
          }
          return this;
        }, t.trigger = function (e) {
          if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [e.type], r = 0; r < a.length; r++) {
            var l = a[r].split("."),
                s = l[0],
                c = l[1] || "global";

            if (void 0 !== document && "global" === c) {
              var f,
                  d,
                  p = {
                bubbles: !0,
                cancelable: !0,
                detail: arguments[1]
              };

              if (document.createEvent) {
                try {
                  if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p);else f = new CustomEvent(s, p);
                } catch (e) {
                  (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                }

                e.type && (0, n.default)(f, e), i.dispatchEvent(f);
              } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
            } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments);else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
          }
          return this;
        };
        var a,
            n = s(i(600)),
            r = s(i(9380)),
            o = s(i(4963)),
            l = s(i(8741));

        function s(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        function u(e) {
          return e instanceof Element;
        }

        t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function (e, t) {
          t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        }, a.prototype = r.default.Event.prototype);
      },
      600: function (e, t) {
        function i(e) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, i(e);
        }

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function e() {
          var t,
              a,
              n,
              r,
              o,
              l,
              s = arguments[0] || {},
              u = 1,
              c = arguments.length,
              f = !1;
          "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
          "object" !== i(s) && "function" != typeof s && (s = {});

          for (; u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));

          return s;
        };
      },
      4963: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = l(i(600)),
            n = l(i(9380)),
            r = l(i(253)),
            o = i(3776);

        function l(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var s = n.default.document;

        function u(e) {
          return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
        }

        u.prototype = {
          on: o.on,
          off: o.off,
          trigger: o.trigger
        }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
        var c = u;
        t.default = c;
      },
      9845: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
        var a,
            n = (a = i(9380)) && a.__esModule ? a : {
          default: a
        };
        var r = n.default.navigator && n.default.navigator.userAgent || "",
            o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0,
            l = ("ontouchstart" in n.default),
            s = /iemobile/i.test(r),
            u = /iphone/i.test(r) && !s;
        t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
      },
      7184: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e) {
          return e.replace(i, "\\$1");
        };
        var i = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
      },
      6030: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.EventHandlers = void 0;
        var a,
            n = i(8711),
            r = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            o = i(9845),
            l = i(7215),
            s = i(7760),
            u = i(4713);

        function c(e, t) {
          var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

          if (!i) {
            if (Array.isArray(e) || (i = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return f(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === i && e.constructor && (i = e.constructor.name);
              if ("Map" === i || "Set" === i) return Array.from(e);
              if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
            }(e)) || t && e && "number" == typeof e.length) {
              i && (e = i);

              var a = 0,
                  n = function () {};

              return {
                s: n,
                n: function () {
                  return a >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[a++]
                  };
                },
                e: function (e) {
                  throw e;
                },
                f: n
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var r,
              o = !0,
              l = !1;
          return {
            s: function () {
              i = i.call(e);
            },
            n: function () {
              var e = i.next();
              return o = e.done, e;
            },
            e: function (e) {
              l = !0, r = e;
            },
            f: function () {
              try {
                o || null == i.return || i.return();
              } finally {
                if (l) throw r;
              }
            }
          };
        }

        function f(e, t) {
          (null == t || t > e.length) && (t = e.length);

          for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];

          return a;
        }

        var d = {
          keydownEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = t.dependencyLib,
                c = t.maskset,
                f = this,
                d = a(f),
                p = e.keyCode,
                h = n.caret.call(t, f),
                v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
            if (void 0 !== v) return v;
            if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join(""));else if (p === r.default.END || p === r.default.PAGE_DOWN) {
              e.preventDefault();
              var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
              n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
            } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout(function () {
              var e = n.caret.call(t, f);
              n.caret.call(t, f, e.begin);
            }, 0) : p === r.default.LEFT && setTimeout(function () {
              var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
              n.translatePosition.call(t, f.inputmask.caretPos.end);
              t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
            }, 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, n.caret.call(t, f, h.begin, h.begin));
            t.ignorable = i.ignorables.includes(p);
          },
          keypressEvent: function (e, t, i, a, o) {
            var u = this.inputmask || this,
                c = u.opts,
                f = u.dependencyLib,
                d = u.maskset,
                p = u.el,
                h = f(p),
                v = e.keyCode;
            if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), setTimeout(function () {
              h.trigger("change");
            }, 0)), u.skipInputEvent = !0, !0;

            if (v) {
              44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
              var m,
                  g = t ? {
                begin: o,
                end: o
              } : n.caret.call(u, p),
                  k = String.fromCharCode(v);
              k = c.substitutes[k] || k, d.writeOutBuffer = !0;
              var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);

              if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, !1 !== i && (setTimeout(function () {
                c.onKeyValidation.call(p, v, y);
              }, 0), d.writeOutBuffer && !1 !== y)) {
                var b = n.getBuffer.call(u);
                (0, s.writeBuffer)(p, b, m, e, !0 !== t);
              }

              if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
            }
          },
          keyupEvent: function (e) {
            var t = this.inputmask;
            !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
          },
          pasteEvent: function (e) {
            var t,
                i = this.inputmask,
                a = i.opts,
                r = i._valueGet(!0),
                o = n.caret.call(i, this);

            i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
            var l = r.substr(0, o.begin),
                u = r.substr(o.end, r.length);
            if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u;else {
              if (!e.clipboardData || !e.clipboardData.getData) return !0;
              r = l + e.clipboardData.getData("text/plain") + u;
            }
            var f = r;

            if (i.isRTL) {
              f = f.split("");
              var d,
                  p = c(n.getBufferTemplate.call(i));

              try {
                for (p.s(); !(d = p.n()).done;) {
                  var h = d.value;
                  f[0] === h && f.shift();
                }
              } catch (e) {
                p.e(e);
              } finally {
                p.f();
              }

              f = f.join("");
            }

            if ("function" == typeof a.onBeforePaste) {
              if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
              f || (f = r);
            }

            (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
          },
          inputFallBackEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = t.dependencyLib;

            var l = this,
                c = l.inputmask._valueGet(!0),
                f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""),
                p = n.caret.call(t, l, void 0, void 0, !0);

            if (f !== c) {
              c = function (e, i, a) {
                if (o.iemobile) {
                  var r = i.replace(n.getBuffer.call(t).join(""), "");

                  if (1 === r.length) {
                    var l = i.split("");
                    l.splice(a.begin, 0, r), i = l.join("");
                  }
                }

                return i;
              }(0, c, p);

              var h = function (e, a, r) {
                for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h;) c.push(k);

                for (; d.length < h;) d.push(k);

                for (; f.length < v;) f.unshift(k);

                for (; p.length < v;) p.unshift(k);

                var y = c.concat(f),
                    b = d.concat(p);

                for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), m) {
                  case "insertText":
                    b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                    break;

                  case "insertReplacementText":
                  case "deleteContentBackward":
                    y[l] === k ? r.end++ : l = o;
                    break;

                  default:
                    y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", g.push(y[l]), r.begin--, r.end--));
                }

                return {
                  action: m,
                  data: g,
                  caret: r
                };
              }(c, f, p);

              switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), h.action) {
                case "insertText":
                case "insertReplacementText":
                  h.data.forEach(function (e, i) {
                    var n = new a.Event("keypress");
                    n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                  }), setTimeout(function () {
                    t.$el.trigger("keyup");
                  }, 0);
                  break;

                case "deleteContentBackward":
                  var v = new a.Event("keydown");
                  v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                  break;

                default:
                  (0, s.applyInputValue)(l, c);
              }

              e.preventDefault();
            }
          },
          compositionendEvent: function (e) {
            var t = this.inputmask;
            t.isComposing = !1, t.$el.trigger("input");
          },
          setValueEvent: function (e) {
            var t = this.inputmask,
                i = this,
                a = e && e.detail ? e.detail[0] : arguments[1];
            void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
          },
          focusEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = this,
                r = a.inputmask._valueGet();

            i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [e, !0]), t.undoValue = t._valueGet(!0);
          },
          invalidEvent: function (e) {
            this.inputmask.validationEvent = !0;
          },
          mouseleaveEvent: function () {
            var e = this.inputmask,
                t = e.opts,
                i = this;
            e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, s.HandleNativePlaceholder)(i, e.originalPlaceholder);
          },
          clickEvent: function (e, t) {
            var i = this.inputmask,
                a = this;

            if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
              var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
              void 0 !== r && n.caret.call(i, a, r);
            }
          },
          cutEvent: function (e) {
            var t = this.inputmask,
                i = t.maskset,
                a = this,
                o = n.caret.call(t, a),
                u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end),
                c = t.isRTL ? u.reverse().join("") : u.join("");
            window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
          },
          blurEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = (0, t.dependencyLib)(this),
                r = this;

            if (r.inputmask) {
              (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);

              var o = r.inputmask._valueGet(),
                  u = n.getBuffer.call(t).slice();

              "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), !1 === l.isComplete.call(t, u) && (setTimeout(function () {
                a.trigger("incomplete");
              }, 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), a.trigger("change"));
            }
          },
          mouseenterEvent: function () {
            var e = this.inputmask,
                t = e.opts,
                i = this;

            if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
              var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
              e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
            }
          },
          submitEvent: function () {
            var e = this.inputmask,
                t = e.opts;
            e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout(function () {
              (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
            }, 0));
          },
          resetEvent: function () {
            var e = this.inputmask;
            e.refreshValue = !0, setTimeout(function () {
              (0, s.applyInputValue)(e.el, e._valueGet(!0));
            }, 0);
          }
        };
        t.EventHandlers = d;
      },
      9716: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.EventRuler = void 0;
        var a = l(i(2394)),
            n = l(i(5581)),
            r = i(8711),
            o = i(7760);

        function l(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var s = {
          on: function (e, t, i) {
            var l = e.inputmask.dependencyLib,
                s = function (t) {
              t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
              var s,
                  u = this,
                  c = u.inputmask,
                  f = c ? c.opts : void 0;

              if (void 0 === c && "FORM" !== this.nodeName) {
                var d = l.data(u, "_inputmask_opts");
                l(u).off(), d && new a.default(d).mask(u);
              } else {
                if (["submit", "reset", "setvalue"].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                  switch (t.type) {
                    case "input":
                      if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, t.preventDefault();
                      break;

                    case "keydown":
                      c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                      break;

                    case "keyup":
                    case "compositionend":
                      c.isComposing && (c.skipInputEvent = !1);
                      break;

                    case "keypress":
                      if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                      c.skipKeyPressEvent = !0;
                      break;

                    case "click":
                    case "focus":
                      return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), setTimeout(function () {
                        e.focus();
                      }, f.validationEventTimeOut), !1) : (s = arguments, setTimeout(function () {
                        e.inputmask && i.apply(u, s);
                      }, 0), !1);
                  }

                  var p = i.apply(u, arguments);
                  return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                }

                t.preventDefault();
              }
            };

            ["submit", "reset"].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
          },
          off: function (e, t) {
            if (e.inputmask && e.inputmask.events) {
              var i = e.inputmask.dependencyLib,
                  a = e.inputmask.events;

              for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                for (var r = a[n]; r.length > 0;) {
                  var o = r.pop();
                  ["submit", "reset"].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                }

                delete e.inputmask.events[n];
              }
            }
          }
        };
        t.EventRuler = s;
      },
      219: function (e, t, i) {
        var a = d(i(2394)),
            n = d(i(5581)),
            r = d(i(7184)),
            o = i(8711),
            l = i(4713);

        function s(e) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, s(e);
        }

        function u(e, t) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, t) {
            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == i) return;
            var a,
                n,
                r = [],
                o = !0,
                l = !1;

            try {
              for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
            } catch (e) {
              l = !0, n = e;
            } finally {
              try {
                o || null == i.return || i.return();
              } finally {
                if (l) throw n;
              }
            }

            return r;
          }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return c(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
          }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);

          for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];

          return a;
        }

        function f(e, t) {
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        function d(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var p = a.default.dependencyLib,
            h = function () {
          function e(t, i, a) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), this.initDateObject(t, this.opts);
          }

          var t, i, a;
          return t = e, (i = [{
            key: "date",
            get: function () {
              return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), this._date;
            }
          }, {
            key: "initDateObject",
            value: function (e, t) {
              var i;

              for (P(t).lastIndex = 0; i = P(t).exec(this.format);) {
                var a = new RegExp("\\d+$").exec(i[0]),
                    n = a ? i[0][0] + "x" : i[0],
                    r = void 0;

                if (void 0 !== e) {
                  if (a) {
                    var o = P(t).lastIndex,
                        l = O(i.index, t);
                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                  } else r = e.slice(0, n.length);

                  e = e.slice(r.length);
                }

                Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
              }
            }
          }, {
            key: "setValue",
            value: function (e, t, i, a, n) {
              if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), void 0 !== n) {
                var r = e[a];
                ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), "ampm" === a && n.call(e._date, r);
              }
            }
          }, {
            key: "reset",
            value: function () {
              this._date = new Date(1, 0, 1);
            }
          }, {
            key: "reInit",
            value: function () {
              this._date = void 0, this.date;
            }
          }]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e;
        }(),
            v = new Date().getFullYear(),
            m = !1,
            g = {
          d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
          dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
            return _(Date.prototype.getDate.call(this), 2);
          }],
          ddd: [""],
          dddd: [""],
          m: ["[1-9]|1[012]", function (e) {
            var t = e ? parseInt(e) : 0;
            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
          }, "month", function () {
            return Date.prototype.getMonth.call(this) + 1;
          }],
          mm: ["0[1-9]|1[012]", function (e) {
            var t = e ? parseInt(e) : 0;
            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
          }, "month", function () {
            return _(Date.prototype.getMonth.call(this) + 1, 2);
          }],
          mmm: [""],
          mmmm: [""],
          yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
            return _(Date.prototype.getFullYear.call(this), 2);
          }],
          yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
            return _(Date.prototype.getFullYear.call(this), 4);
          }],
          h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
          hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
            return _(Date.prototype.getHours.call(this), 2);
          }],
          hx: [function (e) {
            return "[0-9]{".concat(e, "}");
          }, Date.prototype.setHours, "hours", function (e) {
            return Date.prototype.getHours;
          }],
          H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
          HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
            return _(Date.prototype.getHours.call(this), 2);
          }],
          Hx: [function (e) {
            return "[0-9]{".concat(e, "}");
          }, Date.prototype.setHours, "hours", function (e) {
            return function () {
              return _(Date.prototype.getHours.call(this), e);
            };
          }],
          M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
          MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
            return _(Date.prototype.getMinutes.call(this), 2);
          }],
          s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
          ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
            return _(Date.prototype.getSeconds.call(this), 2);
          }],
          l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
            return _(Date.prototype.getMilliseconds.call(this), 3);
          }],
          L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
            return _(Date.prototype.getMilliseconds.call(this), 2);
          }],
          t: ["[ap]", y, "ampm", b, 1],
          tt: ["[ap]m", y, "ampm", b, 2],
          T: ["[AP]", y, "ampm", b, 1],
          TT: ["[AP]M", y, "ampm", b, 2],
          Z: [".*", void 0, "Z", function () {
            var e = this.toString().match(/\((.+)\)/)[1];
            e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map(function (e) {
              return u(e, 1)[0];
            }).join(""));
            return e;
          }],
          o: [""],
          S: [""]
        },
            k = {
          isoDate: "yyyy-mm-dd",
          isoTime: "HH:MM:ss",
          isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        function y(e) {
          var t = this.getHours();
          e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
        }

        function b() {
          var e = this.getHours();
          return (e = e || 12) >= 12 ? "PM" : "AM";
        }

        function x(e) {
          var t = new RegExp("\\d+$").exec(e[0]);

          if (t && void 0 !== t[0]) {
            var i = g[e[0][0] + "x"].slice("");
            return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
          }

          if (g[e[0]]) return g[e[0]];
        }

        function P(e) {
          if (!e.tokenizer) {
            var t = [],
                i = [];

            for (var a in g) if (/\.*x$/.test(a)) {
              var n = a[0] + "\\d+";
              -1 === i.indexOf(n) && i.push(n);
            } else -1 === t.indexOf(a[0]) && t.push(a[0]);

            e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
          }

          return e.tokenizer;
        }

        function E(e, t, i) {
          if (!m) return !0;
          if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;

          if ("29" == e.day) {
            var a = O(t.pos, i);
            if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, t;
          } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", e.date.setDate(3), e.date.setMonth(1), t.insert = [{
            pos: t.pos,
            c: "0"
          }, {
            pos: t.pos + 1,
            c: t.c
          }], t.caret = o.seekNext.call(this, t.pos + 1), t;

          return !1;
        }

        function S(e, t, i, a) {
          var n,
              o,
              l = "";

          for (P(i).lastIndex = 0; n = P(i).exec(e);) {
            if (void 0 === t) {
              if (o = x(n)) l += "(" + o[0] + ")";else switch (n[0]) {
                case "[":
                  l += "(";
                  break;

                case "]":
                  l += ")?";
                  break;

                default:
                  l += (0, r.default)(n[0]);
              }
            } else if (o = x(n)) {
              if (!0 !== a && o[3]) l += o[3].call(t.date);else o[2] ? l += t["raw" + o[2]] : l += n[0];
            } else l += n[0];
          }

          return l;
        }

        function _(e, t, i) {
          for (e = String(e), t = t || 2; e.length < t;) e = i ? e + "0" : "0" + e;

          return e;
        }

        function w(e, t, i) {
          return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
        }

        function M(e, t) {
          return S(t.inputFormat, {
            date: e
          }, t);
        }

        function O(e, t) {
          var i,
              a,
              n = 0,
              r = 0;

          for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat);) {
            var o = new RegExp("\\d+$").exec(a[0]);

            if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
              i = a, a = P(t).exec(t.inputFormat);
              break;
            }
          }

          return {
            targetMatchIndex: n - r,
            nextMatch: a,
            targetMatch: i
          };
        }

        a.default.extendAliases({
          datetime: {
            mask: function (e) {
              return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), null;
            },
            placeholder: "",
            inputFormat: "isoDateTime",
            displayFormat: null,
            outputFormat: null,
            min: null,
            max: null,
            skipOptionalPartCharacter: "",
            i18n: {
              dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              ordinalSuffix: ["st", "nd", "rd", "th"]
            },
            preValidation: function (e, t, i, a, n, r, o, l) {
              if (l) return !0;

              if (isNaN(i) && e[t] !== i) {
                var s = O(t, n);

                if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                  var u = g[s.targetMatch[0]][0];
                  if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", {
                    fuzzy: !0,
                    buffer: e,
                    refreshFromBuffer: {
                      start: t - 1,
                      end: t + 1
                    },
                    pos: t + 1
                  };
                }
              }

              return !0;
            },
            postValidation: function (e, t, i, a, n, r, o, s) {
              var u, c;
              if (o) return !0;
              if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, e[t + 1] = "0", a = {
                pos: t + 2,
                caret: t
              }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                pos: t + 2
              })), !1 === a)) return a;

              if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                var f = g[u.targetMatch[0]];
                c = f[0];
                var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], delete r.validPositions[h];
              }

              var m = a,
                  k = w(e.join(""), n.inputFormat, n);
              return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function (e, t, i) {
                if (e.year !== e.rawyear) {
                  var a = v.toString(),
                      n = e.rawyear.replace(/[^0-9]/g, ""),
                      r = a.slice(0, n.length),
                      o = a.slice(n.length);

                  if (2 === n.length && n === r) {
                    var l = new Date(v, e.month - 1, e.day);
                    e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), e.year = a, t.insert = [{
                      pos: t.pos + 1,
                      c: o[0]
                    }, {
                      pos: t.pos + 2,
                      c: o[1]
                    }]);
                  }
                }

                return t;
              }(k, m, n)), m = function (e, t, i, a, n) {
                if (!t) return t;

                if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                  var r;

                  for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat);) {
                    var o;

                    if ((o = x(r)) && o[3]) {
                      for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));

                      l.call(e._date, f.join(""));
                    }
                  }

                  t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                }

                return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), t;
              }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                buffer: S(n.inputFormat, k, n).split(""),
                refreshFromBuffer: {
                  start: t,
                  end: a.pos
                },
                pos: a.caret || a.pos
              } : m;
            },
            onKeyDown: function (e, t, i, a) {
              e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date(), a)), p(this).trigger("setvalue"));
            },
            onUnMask: function (e, t, i) {
              return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
            },
            casing: function (e, t, i, a) {
              return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
            },
            onBeforeMask: function (e, t) {
              return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
            },
            insertMode: !1,
            shiftPositions: !1,
            keepStatic: !1,
            inputmode: "numeric",
            prefillYear: !0
          }
        });
      },
      3851: function (e, t, i) {
        var a,
            n = (a = i(2394)) && a.__esModule ? a : {
          default: a
        },
            r = i(8711),
            o = i(4713);
        n.default.extendDefinitions({
          A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            casing: "upper"
          },
          "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            casing: "upper"
          },
          "#": {
            validator: "[0-9A-Fa-f]",
            casing: "upper"
          }
        });
        var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

        function s(e, t, i, a, n) {
          return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, l.test(e);
        }

        n.default.extendAliases({
          cssunit: {
            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
          },
          url: {
            regex: "(https?|ftp)://.*",
            autoUnmask: !1,
            keepStatic: !1,
            tabThrough: !0
          },
          ip: {
            mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
            definitions: {
              i: {
                validator: s
              },
              j: {
                validator: s
              },
              k: {
                validator: s
              },
              l: {
                validator: s
              }
            },
            onUnMask: function (e, t, i) {
              return e;
            },
            inputmode: "decimal",
            substitutes: {
              ",": "."
            }
          },
          email: {
            mask: function (e) {
              var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                  i = t;
              if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
              return i;
            },
            greedy: !1,
            casing: "lower",
            separator: null,
            quantifier: 5,
            skipOptionalPartCharacter: "",
            onBeforePaste: function (e, t) {
              return (e = e.toLowerCase()).replace("mailto:", "");
            },
            definitions: {
              "*": {
                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
              },
              "-": {
                validator: "[0-9A-Za-z-]"
              }
            },
            onUnMask: function (e, t, i) {
              return e;
            },
            inputmode: "email"
          },
          mac: {
            mask: "##:##:##:##:##:##"
          },
          vin: {
            mask: "V{13}9{4}",
            definitions: {
              V: {
                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                casing: "upper"
              }
            },
            clearIncomplete: !0,
            autoUnmask: !0
          },
          ssn: {
            mask: "999-99-9999",
            postValidation: function (e, t, i, a, n, l, s) {
              var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
              return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
            }
          }
        });
      },
      207: function (e, t, i) {
        var a = l(i(2394)),
            n = l(i(5581)),
            r = l(i(7184)),
            o = i(8711);

        function l(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var s = a.default.dependencyLib;

        function u(e, t) {
          for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);

          return i;
        }

        function c(e, t, i, a) {
          if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
            var n = e.indexOf(i.radixPoint),
                r = !1;
            i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), n = e.length - 1);

            for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
          }

          return r && e.push(i.negationSymbol.back), e;
        }

        function f(e, t) {
          var i = 0;

          if ("+" === e) {
            for (i in t.validPositions);

            i = o.seekNext.call(this, parseInt(i));
          }

          for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);

          return i;
        }

        function d(e, t) {
          var i = -1;

          for (var a in t.validPositions) {
            var n = t.validPositions[a];

            if (n && n.match.def === e) {
              i = parseInt(a);
              break;
            }
          }

          return i;
        }

        function p(e, t, i, a, n) {
          var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1,
              o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
          return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
            insert: {
              pos: r === i ? r + 1 : r,
              c: n.radixPoint
            },
            pos: i
          } : o;
        }

        a.default.extendAliases({
          numeric: {
            mask: function (e) {
              e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
              var t = "0",
                  i = e.radixPoint;
              !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
              var a,
                  n = "[+]";

              if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                var o = e.digits.toString().split(",");
                isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
              } else e.inputmode = "numeric";

              return n += u(e.suffix, e), n += "[-]", a && (n = [a + u(e.suffix, e) + "[-]", n]), e.greedy = !1, function (e) {
                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
              }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), n;
            },
            _mask: function (e) {
              return "(" + e.groupSeparator + "999){+|1}";
            },
            digits: "*",
            digitsOptional: !0,
            enforceDigitsOnBlur: !1,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            _radixDance: !0,
            groupSeparator: "",
            allowMinus: !0,
            negationSymbol: {
              front: "-",
              back: ""
            },
            prefix: "",
            suffix: "",
            min: null,
            max: null,
            SetMaxOnOverflow: !1,
            step: 1,
            inputType: "text",
            unmaskAsNumber: !1,
            roundingFN: Math.round,
            inputmode: "decimal",
            shortcuts: {
              k: "1000",
              m: "1000000"
            },
            placeholder: "0",
            greedy: !1,
            rightAlign: !0,
            insertMode: !0,
            autoUnmask: !1,
            skipOptionalPartCharacter: "",
            usePrototypeDefinitions: !1,
            stripLeadingZeroes: !0,
            definitions: {
              0: {
                validator: p
              },
              1: {
                validator: p,
                definitionSymbol: "9"
              },
              9: {
                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                definitionSymbol: "*"
              },
              "+": {
                validator: function (e, t, i, a, n) {
                  return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                }
              },
              "-": {
                validator: function (e, t, i, a, n) {
                  return n.allowMinus && e === n.negationSymbol.back;
                }
              }
            },
            preValidation: function (e, t, i, a, n, r, o, l) {
              if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
              var s = e.indexOf(n.radixPoint),
                  u = t;

              if (t = function (e, t, i, a, n) {
                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), e;
              }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                if (!0 !== n.allowMinus) return !1;
                var c = !1,
                    p = d("+", r),
                    h = d("-", r);
                return -1 !== p && (c = [p, h]), !1 !== c ? {
                  remove: c,
                  caret: u - n.negationSymbol.back.length
                } : {
                  insert: [{
                    pos: f.call(this, "+", r),
                    c: n.negationSymbol.front,
                    fromIsValid: !0
                  }, {
                    pos: f.call(this, "-", r),
                    c: n.negationSymbol.back,
                    fromIsValid: void 0
                  }],
                  caret: u + n.negationSymbol.back.length
                };
              }

              if (i === n.groupSeparator) return {
                caret: u
              };
              if (l) return !0;
              if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                caret: n._radixDance && t === s - 1 ? s + 1 : s
              };
              if (!1 === n.__financeInput) if (a) {
                if (n.digitsOptional) return {
                  rewritePosition: o.end
                };

                if (!n.digitsOptional) {
                  if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                    insert: {
                      pos: s + 1,
                      c: "0",
                      fromIsValid: !0
                    },
                    rewritePosition: s
                  } : {
                    rewritePosition: s + 1
                  };
                  if (o.begin < s) return {
                    rewritePosition: o.begin - 1
                  };
                }
              } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                rewritePosition: s
              };
              return {
                rewritePosition: t
              };
            },
            postValidation: function (e, t, i, a, n, r, o) {
              if (!1 === a) return a;
              if (o) return !0;

              if (null !== n.min || null !== n.max) {
                var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                  unmaskAsNumber: !0
                }));
                if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                  refreshFromBuffer: !0,
                  buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                };
              }

              return a;
            },
            onUnMask: function (e, t, i) {
              if ("" === t && !0 === i.nullable) return t;
              var a = e.replace(i.prefix, "");
              return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
            },
            isComplete: function (e, t) {
              var i = (t.numericInput ? e.slice().reverse() : e).join("");
              return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, r.default)(t.radixPoint), ".")), isFinite(i);
            },
            onBeforeMask: function (e, t) {
              var i = t.radixPoint || ",";
              isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
              var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front,
                  n = e.split(i),
                  o = n[0].replace(/[^\-0-9]/g, ""),
                  l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "",
                  s = n.length > 1;
              e = o + ("" !== l ? i + l : l);
              var u = 0;

              if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, "" !== l || !t.digitsOptional)) {
                var f = Math.pow(10, u || 1);
                e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), e = e.toString().replace(".", i);
              }

              if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), null !== t.min || null !== t.max) {
                var d = e.toString().replace(i, ".");
                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
              }

              return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
            },
            onBeforeWrite: function (e, t, i, a) {
              function n(e, t) {
                if (!1 !== a.__financeInput || t) {
                  var i = e.indexOf(a.radixPoint);
                  -1 !== i && e.splice(i, 1);
                }

                if ("" !== a.groupSeparator) for (; -1 !== (i = e.indexOf(a.groupSeparator));) e.splice(i, 1);
                return e;
              }

              var o, l;
              if (a.stripLeadingZeroes && (l = function (e, t) {
                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")),
                    a = i ? i[2] : "",
                    n = !1;
                return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
              }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], delete t[u + d];
              if (e) switch (e.type) {
                case "blur":
                case "checkval":
                  if (null !== a.min) {
                    var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                      unmaskAsNumber: !0
                    }));
                    if (null !== a.min && p < a.min) return {
                      refreshFromBuffer: !0,
                      buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                    };
                  }

                  if (t[t.length - 1] === a.negationSymbol.front) {
                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                    0 == (h ? h[2] : "") && (o = {
                      refreshFromBuffer: !0,
                      buffer: [0]
                    });
                  } else if ("" !== a.radixPoint) {
                    t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), o = {
                      refreshFromBuffer: !0,
                      buffer: n(t)
                    }));
                  }

                  if (a.enforceDigitsOnBlur) {
                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                    o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                  }

              }
              return o;
            },
            onKeyDown: function (e, t, i, a) {
              var r,
                  o,
                  l = s(this),
                  u = String.fromCharCode(e.keyCode).toLowerCase();
              if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), l.trigger("setvalue"), !1;
              if (e.ctrlKey) switch (e.keyCode) {
                case n.default.UP:
                  return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), l.trigger("setvalue"), !1;

                case n.default.DOWN:
                  return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), l.trigger("setvalue"), !1;
              }

              if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), l.trigger("setvalue", [r.join(""), i.begin]), !1;

                if (!0 === a._radixDance) {
                  var f = t.indexOf(a.radixPoint);

                  if (a.digitsOptional) {
                    if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [r.join(""), i.begin >= r.length ? r.length : i.begin]), !1;
                  } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), l.trigger("setvalue", [r, i.begin >= r.length ? f + 1 : i.begin]), !1;
                }
              }
            }
          },
          currency: {
            prefix: "",
            groupSeparator: ",",
            alias: "numeric",
            digits: 2,
            digitsOptional: !1
          },
          decimal: {
            alias: "numeric"
          },
          integer: {
            alias: "numeric",
            inputmode: "numeric",
            digits: 0
          },
          percentage: {
            alias: "numeric",
            min: 0,
            max: 100,
            suffix: " %",
            digits: 0,
            allowMinus: !1
          },
          indianns: {
            alias: "numeric",
            _mask: function (e) {
              return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
            },
            groupSeparator: ",",
            radixPoint: ".",
            placeholder: "0",
            digits: 2,
            digitsOptional: !1
          }
        });
      },
      9380: function (e, t, i) {
        var a;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = ((a = i(8741)) && a.__esModule ? a : {
          default: a
        }).default ? window : {};
        t.default = n;
      },
      7760: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.HandleNativePlaceholder = function (e, t) {
          var i = e ? e.inputmask : this;

          if (s.ie) {
            if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
              var a = o.getBuffer.call(i).slice(),
                  n = e.inputmask._valueGet();

              if (n !== t) {
                var r = o.getLastValidPosition.call(i);
                -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), p(e, a);
              }
            }
          } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
        }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function (e) {
          var t = e ? e.inputmask : this,
              i = t.opts,
              a = t.maskset;

          if (e) {
            if (void 0 === e.inputmask) return e.value;
            e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
          }

          var n = [],
              r = a.validPositions;

          for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);

          var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");

          if ("function" == typeof i.onUnMask) {
            var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
            s = i.onUnMask.call(t, u, s, i);
          }

          return s;
        }, t.writeBuffer = p;
        var a,
            n = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            r = i(4713),
            o = i(8711),
            l = i(7215),
            s = i(9845),
            u = i(6030);

        function c(e, t) {
          var i = e ? e.inputmask : this,
              a = i.opts;
          e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
        }

        function f(e) {
          e.length = 0;

          for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift());) e.push(t);

          return e;
        }

        function d(e, t, i, a, n) {
          var s = e ? e.inputmask : this,
              c = s.maskset,
              f = s.opts,
              d = s.dependencyLib,
              h = a.slice(),
              v = "",
              m = -1,
              g = void 0,
              k = f.skipOptionalPartCharacter;
          f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
            begin: 0,
            end: 0
          }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
            begin: m
          };
          var y = [],
              b = s.caretPos;

          if (h.forEach(function (e, t) {
            if (void 0 !== e) {
              var a = new d.Event("_checkval");
              a.keyCode = e.toString().charCodeAt(0), v += e;
              var n = o.getLastValidPosition.call(s, void 0, !0);
              !function (e, t) {
                for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1];) a--;

                var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));

                if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                  var l = o.seekNext.call(s, e);
                  s.caretPos.begin < l && (s.caretPos = {
                    begin: l
                  });
                }

                return n;
              }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), s.caretPos = {
                begin: g.forwardPosition,
                end: g.forwardPosition
              }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
            }
          }), y.length > 0) {
            var x,
                P,
                E = o.seekNext.call(s, -1, void 0, !1);
            if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift());) {
              var _ = new d.Event("_checkval");

              if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos);else if (!g) break;
              S++;
            }
          }

          t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), f.skipOptionalPartCharacter = k;
        }

        function p(e, t, i, a, r) {
          var s = e ? e.inputmask : this,
              u = s.opts,
              c = s.dependencyLib;

          if (a && "function" == typeof u.onBeforeWrite) {
            var f = u.onBeforeWrite.call(s, a, t, i, u);

            if (f) {
              if (f.refreshFromBuffer) {
                var d = f.refreshFromBuffer;
                l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
              }

              void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
            }
          }

          if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), !0 === r)) {
            var p = c(e),
                h = e.inputmask._valueGet();

            e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout(function () {
              h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
            }, 0);
          }
        }
      },
      2394: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0, i(7149), i(3194);
        var a = i(157),
            n = m(i(4963)),
            r = m(i(9380)),
            o = i(2391),
            l = i(4713),
            s = i(8711),
            u = i(7215),
            c = i(7760),
            f = i(9716),
            d = m(i(7392)),
            p = m(i(3976)),
            h = m(i(8741));

        function v(e) {
          return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, v(e);
        }

        function m(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var g = r.default.document,
            k = "_inputmask_opts";

        function y(e, t, i) {
          if (h.default) {
            if (!(this instanceof y)) return new y(e, t, i);
            this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, this.isComposing = !1;
          }
        }

        function b(e, t, i) {
          var a = y.prototype.aliases[e];
          return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), !0) : (null === i.mask && (i.mask = e), !1);
        }

        y.prototype = {
          dataAttribute: "data-inputmask",
          defaults: p.default,
          definitions: d.default,
          aliases: {},
          masksCache: {},

          get isRTL() {
            return this.opts.isRTL || this.opts.numericInput;
          },

          mask: function (e) {
            var t = this;
            return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [e] : Array.isArray(e) ? e : Array.from(e)).forEach(function (e, i) {
              var l = n.default.extend(!0, {}, t.opts);

              if (function (e, t, i, a) {
                function o(t, n) {
                  var o = "" === a ? t : a + "-" + t;
                  null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), i[t] = n);
                }

                if (!0 === t.importDataAttributes) {
                  var l,
                      s,
                      u,
                      c,
                      f = e.getAttribute(a);
                  if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                    u = s[c];
                    break;
                  }

                  for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                    if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                      u = s[c];
                      break;
                    }
                    o(l, u);
                  }
                }

                n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0);
                return Object.keys(i).length;
              }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), a.mask.call(e.inputmask));
              }
            }), e && e[0] && e[0].inputmask || this;
          },
          option: function (e, t) {
            return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0;
          },
          unmaskedvalue: function (e) {
            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e) {
              var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
              c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
            }

            return c.unmaskedvalue.call(this, this.el);
          },
          remove: function () {
            if (this.el) {
              n.default.data(this.el, k, null);
              var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
              e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                get: this.__valueGet,
                set: this.__valueSet,
                configurable: !0
              }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
            }

            return this.el;
          },
          getemptymask: function () {
            return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), s.getBufferTemplate.call(this).join("");
          },
          hasMaskedValue: function () {
            return !this.opts.autoUnmask;
          },
          isComplete: function () {
            return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), u.isComplete.call(this, s.getBuffer.call(this));
          },
          getmetadata: function () {
            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
              var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
              return this.maskset.metadata.forEach(function (t) {
                return t.mask !== e || (e = t, !1);
              }), e;
            }

            return this.maskset.metadata;
          },
          isValid: function (e) {
            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), e) {
              var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
              c.checkVal.call(this, void 0, !0, !1, t);
            } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");

            for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--);

            return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
          },
          format: function (e, t) {
            this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
            var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
            c.checkVal.call(this, void 0, !0, !1, i);
            var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
            return t ? {
              value: a,
              metadata: this.getmetadata()
            } : a;
          },
          setValue: function (e) {
            this.el && (0, n.default)(this.el).trigger("setvalue", [e]);
          },
          analyseMask: o.analyseMask
        }, y.extendDefaults = function (e) {
          n.default.extend(!0, y.prototype.defaults, e);
        }, y.extendDefinitions = function (e) {
          n.default.extend(!0, y.prototype.definitions, e);
        }, y.extendAliases = function (e) {
          n.default.extend(!0, y.prototype.aliases, e);
        }, y.format = function (e, t, i) {
          return y(t).format(e, i);
        }, y.unmask = function (e, t) {
          return y(t).unmaskedvalue(e);
        }, y.isValid = function (e, t) {
          return y(t).isValid(e);
        }, y.remove = function (e) {
          "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach(function (e) {
            e.inputmask && e.inputmask.remove();
          });
        }, y.setValue = function (e, t) {
          "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach(function (e) {
            e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [t]);
          });
        }, y.dependencyLib = n.default, r.default.Inputmask = y;
        var x = y;
        t.default = x;
      },
      5296: function (e, t, i) {
        function a(e) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, a(e);
        }

        var n = h(i(9380)),
            r = h(i(2394)),
            o = h(i(8741));

        function l(e, t) {
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        function s(e, t) {
          if (t && ("object" === a(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          }(e);
        }

        function u(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return u = function (e) {
            if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, a);
            }

            function a() {
              return c(e, arguments, p(this).constructor);
            }

            return a.prototype = Object.create(e.prototype, {
              constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), d(a, e);
          }, u(e);
        }

        function c(e, t, i) {
          return c = f() ? Reflect.construct : function (e, t, i) {
            var a = [null];
            a.push.apply(a, t);
            var n = new (Function.bind.apply(e, a))();
            return i && d(n, i.prototype), n;
          }, c.apply(null, arguments);
        }

        function f() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }

        function d(e, t) {
          return d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e;
          }, d(e, t);
        }

        function p(e) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }, p(e);
        }

        function h(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var v = n.default.document;

        if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
          var m = function (e) {
            !function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              Object.defineProperty(e, "prototype", {
                value: Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                  }
                }),
                writable: !1
              }), t && d(e, t);
            }(c, e);
            var t,
                i,
                a,
                n,
                o,
                u = (t = c, i = f(), function () {
              var e,
                  a = p(t);

              if (i) {
                var n = p(this).constructor;
                e = Reflect.construct(a, arguments, n);
              } else e = a.apply(this, arguments);

              return s(this, e);
            });

            function c() {
              var e;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, c);
              var t = (e = u.call(this)).getAttributeNames(),
                  i = e.attachShadow({
                mode: "closed"
              }),
                  a = v.createElement("input");

              for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));

              var o = new r.default();
              return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
            }

            return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
              writable: !1
            }), a;
          }(u(HTMLElement));

          n.default.customElements.define("input-mask", m);
        }
      },
      2391: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.analyseMask = function (e, t, i) {
          var a,
              o,
              l,
              s,
              u,
              c,
              f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
              d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
              p = !1,
              h = new n.default(),
              v = [],
              m = [],
              g = !1;

          function k(e, a, n) {
            n = void 0 !== n ? n : e.matches.length;
            var o = e.matches[n - 1];
            if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
              fn: new RegExp(a, i.casing ? "i" : ""),
              static: !1,
              optionality: !1,
              newBlockMarker: void 0 === o ? "master" : o.def !== a,
              casing: null,
              def: a,
              placeholder: void 0,
              nativeDef: a
            }) : (p && (a = a[a.length - 1]), a.split("").forEach(function (t, a) {
              o = e.matches[n - 1], e.matches.splice(n++, 0, {
                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                static: !0,
                optionality: !1,
                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                casing: null,
                def: i.staticDefinitionSymbol || t,
                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                nativeDef: (p ? "'" : "") + t
              });
            })), p = !1;else {
              var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
              l && !p ? e.matches.splice(n++, 0, {
                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function () {
                  this.test = l.validator;
                }() : new RegExp("."),
                static: l.static || !1,
                optionality: l.optional || !1,
                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                casing: l.casing,
                def: l.definitionSymbol || a,
                placeholder: l.placeholder,
                nativeDef: a,
                generated: l.generated
              }) : (e.matches.splice(n++, 0, {
                fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                static: !0,
                optionality: !1,
                newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                casing: null,
                def: i.staticDefinitionSymbol || a,
                placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                nativeDef: (p ? "'" : "") + a
              }), p = !1);
            }
          }

          function y() {
            if (v.length > 0) {
              if (k(s = v[v.length - 1], o), s.isAlternator) {
                u = v.pop();

                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);

                v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
              }
            } else k(h, o);
          }

          function b(e) {
            var t = new n.default(!0);
            return t.openGroup = !1, t.matches = e, t;
          }

          function x() {
            if ((l = v.pop()).openGroup = !1, void 0 !== l) {
              if (v.length > 0) {
                if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                  for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), e = u.matches[t].matches ? u.matches[t].matches.length : 1;

                  v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                }
              } else h.matches.push(l);
            } else y();
          }

          function P(e) {
            var t = e.pop();
            return t.isQuantifier && (t = b([e.pop(), t])), t;
          }

          t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);

          for (; a = t ? d.exec(e) : f.exec(e);) {
            if (o = a[0], t) {
              switch (o.charAt(0)) {
                case "?":
                  o = "{0,1}";
                  break;

                case "+":
                case "*":
                  o = "{" + o + "}";
                  break;

                case "|":
                  if (0 === v.length) {
                    var E = b(h.matches);
                    E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                  }

              }

              if ("\\d" === o) o = "[0-9]";
            }

            if (p) y();else switch (o.charAt(0)) {
              case "$":
              case "^":
                t || y();
                break;

              case i.escapeChar:
                p = !0, t && y();
                break;

              case i.optionalmarker[1]:
              case i.groupmarker[1]:
                x();
                break;

              case i.optionalmarker[0]:
                v.push(new n.default(!1, !0));
                break;

              case i.groupmarker[0]:
                v.push(new n.default(!0));
                break;

              case i.quantifiermarker[0]:
                var S = new n.default(!1, !1, !0),
                    _ = (o = o.replace(/[{}?]/g, "")).split("|"),
                    w = _[0].split(","),
                    M = isNaN(w[0]) ? w[0] : parseInt(w[0]),
                    O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]),
                    T = isNaN(_[1]) ? _[1] : parseInt(_[1]);

                "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                  min: M,
                  max: O,
                  jit: T
                };
                var C = v.length > 0 ? v[v.length - 1].matches : h.matches;

                if ((a = C.pop()).isAlternator) {
                  C.push(a), C = a.matches;
                  var A = new n.default(!0),
                      D = C.pop();
                  C.push(A), C = A.matches, a = D;
                }

                a.isGroup || (a = b([a])), C.push(a), C.push(S);
                break;

              case i.alternatormarker:
                if (v.length > 0) {
                  var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                  c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                } else c = P(h.matches);

                if (c.isAlternator) v.push(c);else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), u.matches.push(c), v.push(u), c.openGroup) {
                  c.openGroup = !1;
                  var B = new n.default(!0);
                  B.alternatorGroup = !0, v.push(B);
                }
                break;

              default:
                y();
            }
          }

          g && x();

          for (; v.length > 0;) l = v.pop(), h.matches.push(l);

          h.matches.length > 0 && (!function e(a) {
            a && a.matches && a.matches.forEach(function (n, r) {
              var o = a.matches[r + 1];
              (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), e(n);
            });
          }(h), m.push(h));
          (i.numericInput || i.isRTL) && function e(t) {
            for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
              var n = parseInt(a);

              if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                var r = t.matches[a];
                t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
              }

              void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), o);
            }

            var o;
            return t;
          }(m[0]);
          return m;
        }, t.generateMaskSet = function (e, t) {
          var i;

          function n(e, i, n) {
            var o,
                l,
                s = !1;

            if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
              var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
              e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
            }

            return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
              mask: e,
              maskToken: r.default.prototype.analyseMask(e, s, n),
              validPositions: {},
              _buffer: void 0,
              buffer: void 0,
              tests: {},
              excludes: {},
              metadata: i,
              maskLength: void 0,
              jitOffset: {}
            }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), o;
          }

          "function" == typeof e.mask && (e.mask = e.mask(e));

          if (Array.isArray(e.mask)) {
            if (e.mask.length > 1) {
              null === e.keepStatic && (e.keepStatic = !0);
              var o = e.groupmarker[0];
              return (e.isRTL ? e.mask.reverse() : e.mask).forEach(function (t) {
                o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
              }), n(o += e.groupmarker[1], e.mask, e);
            }

            e.mask = e.mask.pop();
          }

          i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
          null === e.keepStatic && (e.keepStatic = !1);
          return i;
        };
        var a = o(i(4963)),
            n = o(i(9695)),
            r = o(i(2394));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
      },
      157: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.mask = function () {
          var e = this,
              t = this.opts,
              i = this.el,
              a = this.dependencyLib;
          l.EventRuler.off(i);

          var f = function (t, i) {
            "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
            var s = t.getAttribute("type"),
                u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
            if (!u) if ("input" === t.tagName.toLowerCase()) {
              var c = document.createElement("input");
              c.setAttribute("type", s), u = "text" === c.type, c = null;
            } else u = "partial";
            return !1 !== u ? function (t) {
              var n, s;

              function u() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
              }

              function c(e) {
                s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
              }

              if (!t.inputmask.__valueGet) {
                if (!0 !== i.noValuePatching) {
                  if (Object.getOwnPropertyDescriptor) {
                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                      get: u,
                      set: c,
                      configurable: !0
                    })) : "input" !== t.tagName.toLowerCase() && (n = function () {
                      return this.textContent;
                    }, s = function (e) {
                      this.textContent = e;
                    }, Object.defineProperty(t, "value", {
                      get: u,
                      set: c,
                      configurable: !0
                    }));
                  } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));

                  t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                }

                t.inputmask._valueGet = function (t) {
                  return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                }, t.inputmask._valueSet = function (t, i) {
                  s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                }, void 0 === n && (n = function () {
                  return this.value;
                }, s = function (e) {
                  this.value = e;
                }, function (t) {
                  if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                    var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function (e) {
                      return e.value;
                    },
                        l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function (e, t) {
                      return e.value = t, e;
                    };
                    a.valHooks[t] = {
                      get: function (t) {
                        if (t.inputmask) {
                          if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                          var a = n(t);
                          return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                        }

                        return n(t);
                      },
                      set: function (e, t) {
                        var i = l(e, t);
                        return e.inputmask && (0, o.applyInputValue)(e, t), i;
                      },
                      inputmaskpatch: !0
                    };
                  }
                }(t.type), function (t) {
                  l.EventRuler.on(t, "mouseenter", function () {
                    var t = this.inputmask._valueGet(!0);

                    t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, o.applyInputValue)(this, t);
                  });
                }(t));
              }
            }(t) : t.inputmask = void 0, u;
          }(i, t);

          if (!1 !== f) {
            e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(i.autocomplete), s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
            var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;

            if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
              (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
              var p = r.getBuffer.call(e).slice();
              !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
            }
          }
        };
        var a,
            n = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            r = i(8711),
            o = i(7760),
            l = i(9716),
            s = i(9845),
            u = i(7215),
            c = i(6030);
      },
      9695: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e, t, i, a) {
          this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        };
      },
      3194: function () {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
          value: function (e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                a = i.length >>> 0;
            if (0 === a) return !1;

            for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a;) {
              if (i[r] === e) return !0;
              r++;
            }

            return !1;
          }
        });
      },
      7149: function () {
        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, e(t);
        }

        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function (e) {
          return e.__proto__;
        } : function (e) {
          return e.constructor.prototype;
        });
      },
      8711: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.caret = function (e, t, i, a, n) {
          var r,
              o = this,
              l = this.opts;
          if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), {
            begin: a ? t : u.call(o, t),
            end: a ? i : u.call(o, i)
          };

          if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), "number" == typeof t) {
            t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
            var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
            if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
              begin: t,
              end: i
            }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i);else if (window.getSelection) {
              if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                var c = document.createTextNode("");
                e.appendChild(c);
              }

              r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), r.collapse(!0);
              var f = window.getSelection();
              f.removeAllRanges(), f.addRange(r);
            } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), r.moveStart("character", t), r.select());
          }
        }, t.determineLastRequiredPosition = function (e) {
          var t,
              i,
              r = this,
              l = this.maskset,
              s = this.dependencyLib,
              u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0),
              c = u.length,
              f = o.call(r),
              d = {},
              p = l.validPositions[f],
              h = void 0 !== p ? p.locator.slice() : void 0;

          for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), d[t] = s.extend(!0, {}, i);

          var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;

          for (t = c - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match); t--) c--;

          return e ? {
            l: c,
            def: d[c] ? d[c].match : void 0
          } : c;
        }, t.determineNewCaretPosition = function (e, t, i) {
          var n = this,
              u = this.maskset,
              c = this.opts;
          t && (n.isRTL ? e.end = e.begin : e.begin = e.end);

          if (e.begin === e.end) {
            switch (i = i || c.positionCaretOnClick) {
              case "none":
                break;

              case "select":
                e = {
                  begin: 0,
                  end: r.call(n).length
                };
                break;

              case "ignore":
                e.end = e.begin = s.call(n, o.call(n));
                break;

              case "radixFocus":
                if (function (e) {
                  if ("" !== c.radixPoint && 0 !== c.digits) {
                    var t = u.validPositions;

                    if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                      if (e < s.call(n, -1)) return !0;
                      var i = r.call(n).indexOf(c.radixPoint);

                      if (-1 !== i) {
                        for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;

                        return !0;
                      }
                    }
                  }

                  return !1;
                }(e.begin)) {
                  var f = r.call(n).join("").indexOf(c.radixPoint);
                  e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                  break;
                }

              default:
                var d = e.begin,
                    p = o.call(n, d, !0),
                    h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d);else {
                  var v = u.validPositions[p],
                      m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v),
                      g = a.getPlaceholder.call(n, h, m.match);

                  if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                    var k = s.call(n, h);
                    (d >= k || d === h) && (h = k);
                  }

                  e.end = e.begin = h;
                }
            }

            return e;
          }
        }, t.getBuffer = r, t.getBufferTemplate = function () {
          var e = this.maskset;
          void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
          return e._buffer;
        }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function (e) {
          var t = this.maskset;
          t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
        }, t.seekNext = s, t.seekPrevious = function (e, t) {
          var i = this,
              n = e - 1;
          if (e <= 0) return 0;

          for (; n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0));) n--;

          return n;
        }, t.translatePosition = u;
        var a = i(4713),
            n = i(7215);

        function r(e) {
          var t = this.maskset;
          return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
        }

        function o(e, t, i) {
          var a = this.maskset,
              n = -1,
              r = -1,
              o = i || a.validPositions;

          for (var l in void 0 === e && (e = -1), o) {
            var s = parseInt(l);
            o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
          }

          return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
        }

        function l(e, t, i) {
          var n = this,
              r = this.maskset,
              o = a.getTestTemplate.call(n, e).match;
          if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
          if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;

          if (!0 !== t && e > -1) {
            if (i) {
              var l = a.getTests.call(n, e);
              return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
            }

            var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)),
                u = a.getPlaceholder.call(n, e, s.match);
            return s.match.def !== u;
          }

          return !1;
        }

        function s(e, t, i) {
          var n = this;
          void 0 === i && (i = !0);

          for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i));) r++;

          return r;
        }

        function u(e) {
          var t = this.opts,
              i = this.el;
          return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), e;
        }
      },
      4713: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function (e, t, i, a, n) {
          var r = this,
              o = this.opts,
              c = this.maskset,
              f = o.greedy;
          n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
          t = t || 0;
          var p,
              h,
              v,
              m,
              g = [],
              k = 0;

          do {
            if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h));else {
              v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
              var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
              (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
            }
            k++;
          } while (!0 !== h.static || "" !== h.def || t > k);

          "" === g[g.length - 1] && g.pop();
          !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
          return o.greedy = f, g;
        }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
        var a,
            n = (a = i(2394)) && a.__esModule ? a : {
          default: a
        };

        function r(e, t) {
          var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
          if ("" !== i) for (; i.length < t;) i += "0";
          return i;
        }

        function o(e) {
          var t = e.locator[e.alternation];
          return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
        }

        function l(e, t, i) {
          var a = this.opts,
              n = this.maskset;
          if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;

          if (!0 === t.static) {
            if (e > -1 && void 0 === n.validPositions[e]) {
              var r,
                  o = d.call(this, e),
                  l = [];
              if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
            }

            return t.def;
          }

          return a.placeholder.charAt(e % a.placeholder.length);
        }

        function s(e, t, i) {
          return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
        }

        function u(e, t) {
          var i = this.opts,
              a = function (e, t) {
            var i = 0,
                a = !1;
            t.forEach(function (e) {
              e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
            }), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
            return i;
          }(e, t);

          e = e > 0 ? e - 1 : 0;
          var n,
              o,
              l,
              s = r(c.call(this, e));
          i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();

          for (var u = 0; u < t.length; u++) {
            var f = t[u];
            n = r(f, s.length);
            var d = Math.abs(n - s);
            (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, l = f);
          }

          return l;
        }

        function c(e, t) {
          var i = this.maskset;
          return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
        }

        function f(e, t, i) {
          function a(e) {
            for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t;) i.push(String.fromCharCode(a));else a = e.charCodeAt(n), i.push(e.charAt(n));

            return i.join("");
          }

          return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
        }

        function d(e, t, i) {
          var a,
              r,
              o = this,
              l = this.dependencyLib,
              s = this.maskset,
              c = this.opts,
              d = this.el,
              p = s.maskToken,
              h = t ? i : 0,
              v = t ? t.slice() : [0],
              m = [],
              g = !1,
              k = t ? t.join("") : "";

          function y(t, i, r, o) {
            function l(r, o, u) {
              function p(e, t) {
                var i = 0 === t.matches.indexOf(e);
                return i || t.matches.every(function (a, n) {
                  return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), !i;
                }), i;
              }

              function v(e, t, i) {
                var a, n;

                if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [s.validPositions[e]]).every(function (e, r) {
                  if (e.mloc[t]) return a = e, !1;
                  var o = void 0 !== i ? i : e.alternation,
                      l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                  return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                }), a) {
                  var r = a.locator[a.alternation];
                  return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                }

                return void 0 !== i ? v(e, t) : void 0;
              }

              function b(e, t) {
                var i = e.alternation,
                    a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                  i = n, a = !0;
                  break;
                }

                if (a) {
                  e.mloc = e.mloc || {};
                  var r = e.locator[i];

                  if (void 0 !== r) {
                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), void 0 !== t) {
                      for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);

                      e.locator[i] = Object.keys(e.mloc).join(",");
                    }

                    return !0;
                  }

                  e.alternation = void 0;
                }

                return !1;
              }

              function x(e, t) {
                if (e.locator.length !== t.locator.length) return !1;

                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;

                return !0;
              }

              if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;

              if (h === e && void 0 === r.matches) {
                if (m.push({
                  match: r,
                  locator: o.reverse(),
                  cd: k,
                  mloc: {}
                }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                g = !0, h = e;
              } else if (void 0 !== r.matches) {
                if (r.isGroup && u !== r) {
                  if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                } else if (r.isOptional) {
                  var P = r,
                      E = m.length;

                  if (r = y(r, i, o, u)) {
                    if (m.forEach(function (e, t) {
                      t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                    }), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                    g = !0, h = e;
                  }
                } else if (r.isAlternator) {
                  var S,
                      _ = r,
                      w = [],
                      M = m.slice(),
                      O = o.length,
                      T = !1,
                      C = i.length > 0 ? i.shift() : -1;

                  if (-1 === C || "string" == typeof C) {
                    var A,
                        D = h,
                        j = i.slice(),
                        B = [];
                    if ("string" == typeof C) B = C.split(",");else for (A = 0; A < _.matches.length; A++) B.push(A.toString());

                    if (void 0 !== s.excludes[e]) {
                      for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                        var F = s.excludes[e][L].toString().split(":");
                        o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                      }

                      0 === B.length && (delete s.excludes[e], B = R);
                    }

                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));

                    for (var N = 0; N < B.length; N++) {
                      A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                      var V = _.matches[A];
                      if (V && l(V, [A].concat(o), u)) r = !0;else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                      S = m.slice(), h = D, m = [];

                      for (var G = 0; G < S.length; G++) {
                        var H = S[G],
                            K = !1;
                        H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);

                        for (var U = 0; U < w.length; U++) {
                          var $ = w[U];

                          if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                            if (H.match.nativeDef === $.match.nativeDef) {
                              K = !0, b($, H);
                              break;
                            }

                            if (f(H, $, c)) {
                              b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                              break;
                            }

                            if (f($, H, c)) {
                              b($, H);
                              break;
                            }

                            if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                              x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                              break;
                            }
                          }
                        }

                        K || w.push(H);
                      }
                    }

                    m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                  } else r = l(_.matches[C] || t.matches[C], [C].concat(o), u);

                  if (r) return !0;
                } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                  var W = t.matches[t.matches.indexOf(q) - 1];

                  if (r = l(W, [z].concat(o), W)) {
                    if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, a.optionalQuantifier && p(a, W)) {
                      g = !0, h = e;
                      break;
                    }

                    return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                  }
                } else if (r = y(r, i, o, u)) return !0;
              } else h++;

              var Q, Z;
            }

            for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
              var p = l(t.matches[u], [u].concat(r), o);
              if (p && h === e) return p;
              if (h > e) break;
            }
          }

          if (e > -1) {
            if (void 0 === t) {
              for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1;) x--;

              void 0 !== b && x > -1 && (v = function (e, t) {
                var i,
                    a = [];
                return Array.isArray(t) || (t = [t]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach(function (e) {
                  "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                })), a;
              }(x, b), k = v.join(""), h = x);
            }

            if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];

            for (var P = v.shift(); P < p.length; P++) {
              if (y(p[P], v, [P]) && h === e || h > e) break;
            }
          }

          return (0 === m.length || g) && m.push({
            match: {
              fn: null,
              static: !0,
              optionality: !1,
              casing: null,
              def: "",
              placeholder: ""
            },
            locator: [],
            mloc: {},
            cd: k
          }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), r = s.tests[e]), m.forEach(function (e) {
            e.match.optionality = !1;
          }), r;
        }
      },
      7215: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.alternate = s, t.checkAlternationMatch = function (e, t, i) {
          for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);

          for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
            r = !0;
            break;
          }

          return r;
        }, t.handleRemove = function (e, t, i, a, l) {
          var u = this,
              c = this.maskset,
              f = this.opts;

          if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), u.isRTL)) {
            var d = i.end;
            i.end = i.begin, i.begin = d;
          }

          var p,
              h = o.getLastValidPosition.call(u, void 0, !0);
          i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
          t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);

          if (!1 !== (p = m.call(u, i))) {
            if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
              var v = s.call(u, !0);

              if (v) {
                var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                (t !== r.default.DELETE || i.begin > g) && i.begin;
              }
            }

            !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
              begin: c.p,
              end: c.p
            }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
          }
        }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, t.revalidateMask = m;
        var a,
            n = i(4713),
            r = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            o = i(8711),
            l = i(6030);

        function s(e, t, i, a, r, l) {
          var u,
              c,
              f,
              p,
              h,
              v,
              m,
              g,
              k,
              y,
              b,
              x = this,
              P = this.dependencyLib,
              E = this.opts,
              S = x.maskset,
              _ = P.extend(!0, {}, S.validPositions),
              w = P.extend(!0, {}, S.tests),
              M = !1,
              O = !1,
              T = void 0 !== r ? r : o.getLastValidPosition.call(x);

          if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation;else for (; T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
            if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
            u = T, c = S.validPositions[u].alternation, p = f;
          }

          if (void 0 !== c) {
            m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, n.getDecisionTaker)(p) + ":" + p.alternation);
            var C = [],
                A = -1;

            for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), delete S.validPositions[h];

            for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10;) {
              for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                caretPos: h
              });

              if (M) break;

              if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                O = s.call(x, e, t, i, a, m - 1, l);
                break;
              }

              var D = (0, n.getDecisionTaker)(p);

              if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                O = s.call(x, e, t, i, a, m - 1, l);
                break;
              }

              for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
            }
          }

          return O && !1 === E.keepStatic || delete S.excludes[m], O;
        }

        function u(e, t, i) {
          var a = this.opts,
              n = this.maskset;

          switch (a.casing || t.casing) {
            case "upper":
              e = e.toUpperCase();
              break;

            case "lower":
              e = e.toLowerCase();
              break;

            case "title":
              var o = n.validPositions[i - 1];
              e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
              break;

            default:
              if ("function" == typeof a.casing) {
                var l = Array.prototype.slice.call(arguments);
                l.push(n.validPositions), e = a.casing.apply(this, l);
              }

          }

          return e;
        }

        function c(e) {
          var t = this,
              i = this.opts,
              a = this.maskset;
          if ("function" == typeof i.isComplete) return i.isComplete(e, i);

          if ("*" !== i.repeat) {
            var r = !1,
                l = o.determineLastRequiredPosition.call(t, !0),
                s = o.seekPrevious.call(t, l.l);

            if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
              r = !0;

              for (var u = 0; u <= s; u++) {
                var c = n.getTestTemplate.call(t, u).match;

                if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                  r = !1;
                  break;
                }
              }
            }

            return r;
          }
        }

        function f(e) {
          var t = this.opts.insertMode ? 0 : 1;
          return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
        }

        function d(e, t, i, a, r, l, p) {
          var g = this,
              k = this.dependencyLib,
              y = this.opts,
              b = g.maskset;
          i = !0 === i;
          var x = e;

          function P(e) {
            if (void 0 !== e) {
              if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [e.remove]), e.remove.sort(function (e, t) {
                return t.pos - e.pos;
              }).forEach(function (e) {
                m.call(g, {
                  begin: e,
                  end: e + 1
                });
              }), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [e.insert]), e.insert.sort(function (e, t) {
                return e.pos - t.pos;
              }).forEach(function (e) {
                "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
              }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                var t = e.refreshFromBuffer;
                h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
              }

              void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
            }

            return e;
          }

          function E(t, i, r) {
            var l = !1;
            return n.getTests.call(g, t).every(function (s, c) {
              var d = s.match;

              if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                pos: t
              }))) {
                var p = void 0 !== l.c ? l.c : i,
                    h = t;
                return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                  input: u.call(g, p, d, h)
                }), a, h) && (l = !1), !1);
              }

              return !0;
            }), l;
          }

          void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);

          var S = !0,
              _ = k.extend(!0, {}, b.validPositions);

          if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, delete b.tests[w]);

          if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), !0 === S) {
            if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
              var M = b.validPositions[x];

              if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                  var O = !1;
                  if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                    S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                    break;
                  }
                }
              } else S = {
                caret: o.seekNext.call(g, x)
              };
            }

            !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), !0 === S && (S = {
              pos: x
            });
          }

          if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
            var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
            void 0 !== A && (S = !0 === A ? S : A);
          }

          S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
          var D = P(S);
          void 0 !== g.maxLength && o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), b.validPositions = k.extend(!0, {}, _), D = !1);
          return D;
        }

        function p(e, t, i) {
          for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
            if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
              r = !0;
              break;
            }

            if (o[l].match && o[l].match.def === t.match.nativeDef) {
              r = void 0;
              break;
            }
          }

          return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), r;
        }

        function h(e, t, i) {
          var a,
              n,
              r = this,
              s = this.maskset,
              u = this.opts,
              c = this.dependencyLib,
              f = u.skipOptionalPartCharacter,
              d = r.isRTL ? i.slice().reverse() : i;
          if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
            begin: 0,
            end: 0
          }, !1).begin;else {
            for (a = e; a < t; a++) delete s.validPositions[a];

            n = e;
          }
          var p = new c.Event("keypress");

          for (a = e; a < t; a++) {
            p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
            var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
            !1 !== h && void 0 !== h && (n = h.forwardPosition);
          }

          u.skipOptionalPartCharacter = f;
        }

        function v(e, t, i) {
          var a = this,
              r = this.maskset,
              l = this.dependencyLib;
          if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--);

          for (var s = e; s < t; s++) {
            if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
              var u = n.getTests.call(a, s).slice();
              "" === u[u.length - 1].match.def && u.pop();
              var c,
                  f = n.determineTestTemplate.call(a, s, u);

              if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
              })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                var p = r.validPositions[t].input;
                return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
              }
            }
          }
        }

        function m(e, t, i, a) {
          var r = this,
              l = this.maskset,
              s = this.opts,
              u = this.dependencyLib;

          function c(e, t, i) {
            var a = t[e];

            if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
              var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1],
                  r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
              return n && r;
            }

            return !1;
          }

          var f = 0,
              h = void 0 !== e.begin ? e.begin : e,
              v = void 0 !== e.end ? e.end : e,
              m = !0;

          if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
            var g,
                k = u.extend(!0, {}, l.validPositions),
                y = o.getLastValidPosition.call(r, void 0, !0);

            for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];

            var b,
                x,
                P = a,
                E = P;

            for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
              if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                begin: h,
                end: v
              }))) {
                for (; "" !== n.getTest.call(r, E).match.def;) {
                  if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                    "+" === b.match.def && o.getBuffer.call(r, !0);
                    var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                    if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                  } else m = !1;

                  if (m) {
                    void 0 === t && b.match.static && g === e.begin && f++;
                    break;
                  }

                  if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                  E++;
                }

                "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
              }

              if (!m) break;
            }

            if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), !1;
          } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));

          return o.resetMaskSet.call(r, !0), f;
        }
      },
      5581: function (e) {
        e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
      }
    },
        t = {};

    function i(a) {
      var n = t[a];
      if (void 0 !== n) return n.exports;
      var r = t[a] = {
        exports: {}
      };
      return e[a](r, r.exports, i), r.exports;
    }

    var a = {};
    return function () {
      var e,
          t = a;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, i(3851), i(219), i(207), i(5296);
      var n = ((e = i(2394)) && e.__esModule ? e : {
        default: e
      }).default;
      t.default = n;
    }(), a;
  }();
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! formbouncerjs v1.4.6 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/bouncer */
"document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {
  "use strict";

  if ("Element" in e) {
    var t = "classList",
        r = "prototype",
        n = e.Element[r],
        a = Object,
        i = String[r].trim || function () {
      return this.replace(/^\s+|\s+$/g, "");
    },
        o = Array[r].indexOf || function (e) {
      for (var t = 0, r = this.length; t < r; t++) if (t in this && this[t] === e) return t;

      return -1;
    },
        l = function (e, t) {
      this.name = e, this.code = DOMException[e], this.message = t;
    },
        u = function (e, t) {
      if ("" === t) throw new l("SYNTAX_ERR", "An invalid or illegal string was specified");
      if (/\s/.test(t)) throw new l("INVALID_CHARACTER_ERR", "String contains an invalid character");
      return o.call(e, t);
    },
        s = function (e) {
      for (var t = i.call(e.getAttribute("class") || ""), r = t ? t.split(/\s+/) : [], n = 0, a = r.length; n < a; n++) this.push(r[n]);

      this._updateClassName = function () {
        e.setAttribute("class", this.toString());
      };
    },
        c = s[r] = [],
        f = function () {
      return new s(this);
    };

    if (l[r] = Error[r], c.item = function (e) {
      return this[e] || null;
    }, c.contains = function (e) {
      return -1 !== u(this, e += "");
    }, c.add = function () {
      for (var e, t = arguments, r = 0, n = t.length, a = !1; e = t[r] + "", -1 === u(this, e) && (this.push(e), a = !0), ++r < n;);

      a && this._updateClassName();
    }, c.remove = function () {
      var e,
          t,
          r = arguments,
          n = 0,
          a = r.length,
          i = !1;

      do {
        for (e = r[n] + "", t = u(this, e); -1 !== t;) this.splice(t, 1), i = !0, t = u(this, e);
      } while (++n < a);

      i && this._updateClassName();
    }, c.toggle = function (e, t) {
      e += "";
      var r = this.contains(e),
          n = r ? !0 !== t && "remove" : !1 !== t && "add";
      return n && this[n](e), !0 === t || !1 === t ? t : !r;
    }, c.toString = function () {
      return this.join(" ");
    }, a.defineProperty) {
      var d = {
        get: f,
        enumerable: !0,
        configurable: !0
      };

      try {
        a.defineProperty(n, t, d);
      } catch (e) {
        void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1, a.defineProperty(n, t, d));
      }
    } else a[r].__defineGetter__ && n.__defineGetter__(t, f);
  }
}(self), function () {
  "use strict";

  var e = document.createElement("_");

  if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
    var t = function (e) {
      var n = DOMTokenList.prototype[e];

      DOMTokenList.prototype[e] = function (e) {
        var t,
            r = arguments.length;

        for (t = 0; t < r; t++) e = arguments[t], n.call(this, e);
      };
    };

    t("add"), t("remove");
  }

  if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
    var r = DOMTokenList.prototype.toggle;

    DOMTokenList.prototype.toggle = function (e, t) {
      return 1 in arguments && !this.contains(e) == !t ? t : r.call(this, e);
    };
  }

  e = null;
}()), Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (e) {
  var t = this;
  if (!document.documentElement.contains(this)) return null;

  do {
    if (t.matches(e)) return t;
    t = t.parentElement;
  } while (null !== t);

  return null;
}), function () {
  if ("function" == typeof window.CustomEvent) return;

  function e(e, t) {
    t = t || {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    };
    var r = document.createEvent("CustomEvent");
    return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r;
  }

  e.prototype = window.Event.prototype, window.CustomEvent = e;
}(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return t(e);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (a) {
  "use strict";

  var u = {
    fieldClass: "error",
    errorClass: "error-message",
    fieldPrefix: "bouncer-field_",
    errorPrefix: "bouncer-error_",
    patterns: {
      email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
      url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
      number: /^(?:[-+]?[0-9]*[.,]?[0-9]+)$/,
      color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
      date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
      time: /^(?:(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]))$/,
      month: /^(?:(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])))$/
    },
    customValidations: {},
    messageAfterField: !0,
    messageCustom: "data-bouncer-message",
    messageTarget: "data-bouncer-target",
    messages: {
      missingValue: {
        checkbox: "This field is required.",
        radio: "Please select a value.",
        select: "Please select a value.",
        "select-multiple": "Please select at least one value.",
        default: "Please fill out this field."
      },
      patternMismatch: {
        email: "Please enter a valid email address.",
        url: "Please enter a URL.",
        number: "Please enter a number",
        color: "Please match the following format: #rrggbb",
        date: "Please use the YYYY-MM-DD format",
        time: "Please use the 24-hour time format. Ex. 23:00",
        month: "Please use the YYYY-MM format",
        default: "Please match the requested format."
      },
      outOfRange: {
        over: "Please select a value that is no more than {max}.",
        under: "Please select a value that is no less than {min}."
      },
      wrongLength: {
        over: "Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.",
        under: "Please lengthen this text to {minLength} characters or more. You are currently using {length} characters."
      },
      fallback: "There was an error with this field."
    },
    disableSubmit: !1,
    emitEvents: !0
  },
      s = function (e, t) {
    Array.prototype.forEach.call(e, t);
  },
      c = function () {
    var r = {};
    return s(arguments, function (e) {
      for (var t in e) {
        if (!e.hasOwnProperty(t)) return;
        "[object Object]" === Object.prototype.toString.call(e[t]) ? r[t] = c(r[t], e[t]) : r[t] = e[t];
      }
    }), r;
  },
      f = function (e, t, r) {
    if ("function" == typeof a.CustomEvent) {
      var n = new CustomEvent(t, {
        bubbles: !0,
        detail: r || {}
      });
      e.dispatchEvent(n);
    }
  },
      d = function (e, t) {
    return {
      missingValue: function (e) {
        if (!e.hasAttribute("required")) return !1;
        if ("checkbox" === e.type) return !e.checked;
        var t = e.value.length;
        return "radio" === e.type && (t = Array.prototype.filter.call(e.form.querySelectorAll('[name="' + m(e.name) + '"]'), function (e) {
          return e.checked;
        }).length), t < 1;
      }(e),
      patternMismatch: (r = e, n = t, a = r.getAttribute("pattern"), !(!(a = a ? new RegExp("^(?:" + a + ")$") : n.patterns[r.type]) || !r.value || r.value.length < 1 || r.value.match(a))),
      outOfRange: function (e) {
        if (!e.value || e.value.length < 1) return !1;
        var t = e.getAttribute("max"),
            r = e.getAttribute("min"),
            n = parseFloat(e.value);
        return t && t < n ? "over" : !!(r && n < r) && "under";
      }(e),
      wrongLength: function (e) {
        if (!e.value || e.value.length < 1) return !1;
        var t = e.getAttribute("maxlength"),
            r = e.getAttribute("minlength"),
            n = e.value.length;
        return t && t < n ? "over" : !!(r && n < r) && "under";
      }(e)
    };
    var r, n, a;
  },
      m = function (e) {
    for (var t, r = String(e), n = r.length, a = -1, i = "", o = r.charCodeAt(0); ++a < n;) {
      if (0 === (t = r.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
      1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === o ? i += "\\" + t.toString(16) + " " : i += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? r.charAt(a) : "\\" + r.charAt(a);
    }

    return i;
  },
      h = function (e, t, r) {
    var n = e.name ? e.name : e.id;
    return !n && r && (n = t.fieldPrefix + Math.floor(999 * Math.random()), e.id = n), "checkbox" === e.type && (n += "_" + (e.value || e.id)), n;
  },
      x = function (e, t) {
    var r = document.createElement("div");
    r.className = t.errorClass, r.id = t.errorPrefix + h(e, t, !0);

    var n = function (e, t, r) {
      var n = e.getAttribute(r.messageTarget);

      if (n) {
        var a = e.form.querySelector(n);
        if (a) return a.firstChild || a.appendChild(document.createTextNode(""));
      }

      return r.messageAfterField ? (t.nextSibling || t.parentNode.appendChild(document.createTextNode("")), t.nextSibling) : t;
    }(e, function (e) {
      if ("radio" === e.type && e.name) {
        var t = e.form.querySelectorAll('[name="' + m(e.name) + '"]');
        e = t[t.length - 1];
      }

      "radio" !== e.type && "checkbox" !== e.type || (e = e.closest("label") || e.form.querySelector('[for="' + e.id + '"]') || e);
      return e;
    }(e), t);

    return n.parentNode.insertBefore(r, n), r;
  },
      v = function (e, t, r) {
    e.classList.add(r.fieldClass), e.setAttribute("aria-describedby", t.id), e.setAttribute("aria-invalid", !0);
  },
      g = function (e, t, r) {
    var n,
        a,
        i,
        o = e.form.querySelector("#" + m(r.errorPrefix + h(e, r))) || x(e, r),
        l = function (e, t, r) {
      var n = r.messages;
      if (t.missingValue) return n.missingValue[e.type] || n.missingValue.default;
      if (t.outOfRange) return n.outOfRange[t.outOfRange].replace("{max}", e.getAttribute("max")).replace("{min}", e.getAttribute("min")).replace("{length}", e.value.length);
      if (t.wrongLength) return n.wrongLength[t.wrongLength].replace("{maxLength}", e.getAttribute("maxlength")).replace("{minLength}", e.getAttribute("minlength")).replace("{length}", e.value.length);

      if (t.patternMismatch) {
        var a = e.getAttribute(r.messageCustom);
        return a || n.patternMismatch[e.type] || n.patternMismatch.default;
      }

      for (var i in r.customValidations) if (r.customValidations.hasOwnProperty(i) && t[i] && n[i]) return n[i];

      return n.fallback;
    }(e, t, r);

    o.textContent = "function" == typeof l ? l(e, r) : l, a = o, i = r, "radio" === (n = e).type && n.name && Array.prototype.forEach.call(document.querySelectorAll('[name="' + n.name + '"]'), function (e) {
      v(e, a, i);
    }), v(n, a, i), r.emitEvents && f(e, "bouncerShowError", {
      errors: t
    });
  },
      i = function (e, t) {
    e.classList.remove(t.fieldClass), e.removeAttribute("aria-describedby"), e.removeAttribute("aria-invalid");
  },
      p = function (e, t) {
    var r,
        n,
        a = e.form.querySelector("#" + m(t.errorPrefix + h(e, t)));
    a && (a.parentNode.removeChild(a), n = t, "radio" === (r = e).type && r.name ? Array.prototype.forEach.call(document.querySelectorAll('[name="' + r.name + '"]'), function (e) {
      i(e, n);
    }) : i(r, n), t.emitEvents && f(e, "bouncerRemoveError"));
  };

  return function (n, e) {
    var l,
        r = {};
    r.validate = function (e, t) {
      if (!e.disabled && !e.readOnly && "reset" !== e.type && "submit" !== e.type && "button" !== e.type) {
        var r,
            n,
            a,
            i = c(l, t || {}),
            o = (a = d(r = e, n = i), {
          valid: !function (e) {
            for (var t in e) if (e[t]) return !0;

            return !1;
          }(a = function (e, t, r, n) {
            for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a](e, n));

            return t;
          }(r, a, n.customValidations, n)),
          errors: a
        });
        if (!o.valid) return g(e, o.errors, i), o;
        p(e, i);
      }
    }, r.validateAll = function (e) {
      return Array.prototype.filter.call(e.querySelectorAll("input, select, textarea"), function (e) {
        var t = r.validate(e);
        return t && !t.valid;
      });
    };

    var a = function (e) {
      e.target.form && e.target.form.matches(n) && r.validate(e.target);
    },
        i = function (e) {
      e.target.form && e.target.form.matches(n) && e.target.classList.contains(l.fieldClass) && r.validate(e.target);
    },
        o = function (e) {
      if (e.target.matches(n)) {
        e.preventDefault();
        var t = r.validateAll(e.target);
        if (0 < t.length) return t[0].focus(), void f(e.target, "bouncerFormInvalid", {
          errors: t
        });
        l.disableSubmit || e.target.submit(), l.emitEvents && f(e.target, "bouncerFormValid");
      }
    };

    r.destroy = function () {
      var e, t, r;
      document.removeEventListener("blur", a, !0), document.removeEventListener("input", i, !1), document.removeEventListener("click", i, !1), document.removeEventListener("submit", o, !1), e = n, t = l, s(document.querySelectorAll(e), function (e) {
        s(e.querySelectorAll("input, select, textarea"), function (e) {
          p(e, t);
        });
      }), r = n, s(document.querySelectorAll(r), function (e) {
        e.removeAttribute("novalidate");
      }), l.emitEvents && f(document, "bouncerDestroyed", {
        settings: l
      }), l = null;
    };

    var t;
    return l = c(u, e || {}), t = n, s(document.querySelectorAll(t), function (e) {
      e.setAttribute("novalidate", !0);
    }), document.addEventListener("blur", a, !0), document.addEventListener("input", i, !1), document.addEventListener("click", i, !1), document.addEventListener("submit", o, !1), l.emitEvents && f(document, "bouncerInitialized", {
      settings: l
    }), r;
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 23 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Choices; });
/*! choices.js v11.0.3 | © 2024 Josh Johnson | https://github.com/jshjohnson/Choices#readme */

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise, SuppressedError, Symbol */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var ActionType = {
  ADD_CHOICE: 'ADD_CHOICE',
  REMOVE_CHOICE: 'REMOVE_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM'
};
var EventType = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice',
  unhighlightItem: 'unhighlightItem'
};
var KeyCodeMap = {
  TAB_KEY: 9,
  SHIFT_KEY: 16,
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
var ObjectsInConfig = ['fuseOptions', 'classNames'];
var PassedElementTypes = {
  Text: 'text',
  SelectOne: 'select-one',
  SelectMultiple: 'select-multiple'
};

var addChoice = function (choice) {
  return {
    type: ActionType.ADD_CHOICE,
    choice: choice
  };
};

var removeChoice = function (choice) {
  return {
    type: ActionType.REMOVE_CHOICE,
    choice: choice
  };
};

var filterChoices = function (results) {
  return {
    type: ActionType.FILTER_CHOICES,
    results: results
  };
};

var activateChoices = function (active) {
  return {
    type: ActionType.ACTIVATE_CHOICES,
    active: active
  };
};

var addGroup = function (group) {
  return {
    type: ActionType.ADD_GROUP,
    group: group
  };
};

var addItem = function (item) {
  return {
    type: ActionType.ADD_ITEM,
    item: item
  };
};

var removeItem$1 = function (item) {
  return {
    type: ActionType.REMOVE_ITEM,
    item: item
  };
};

var highlightItem = function (item, highlighted) {
  return {
    type: ActionType.HIGHLIGHT_ITEM,
    item: item,
    highlighted: highlighted
  };
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var generateChars = function (length) {
  return Array.from({
    length: length
  }, function () {
    return getRandomNumber(0, 36).toString(36);
  }).join('');
};

var generateId = function (element, prefix) {
  var id = element.id || element.name && "".concat(element.name, "-").concat(generateChars(2)) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = "".concat(prefix, "-").concat(id);
  return id;
};

var getAdjacentEl = function (startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
  var sibling = startEl[prop];

  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }

    sibling = sibling[prop];
  }

  return null;
};

var isScrolledIntoView = function (element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  var isVisible;

  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
  }

  return isVisible;
};

var sanitise = function (value) {
  if (typeof value !== 'string') {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'object') {
      if ('raw' in value) {
        return sanitise(value.raw);
      }

      if ('trusted' in value) {
        return value.trusted;
      }
    }

    return value;
  }

  return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;');
};

var strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    tmpEl.innerHTML = str.trim();
    var firstChild = tmpEl.children[0];

    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }

    return firstChild;
  };
}();

var resolveNoticeFunction = function (fn, value) {
  return typeof fn === 'function' ? fn(sanitise(value), value) : fn;
};

var resolveStringFunction = function (fn) {
  return typeof fn === 'function' ? fn() : fn;
};

var unwrapStringForRaw = function (s) {
  if (typeof s === 'string') {
    return s;
  }

  if (typeof s === 'object') {
    if ('trusted' in s) {
      return s.trusted;
    }

    if ('raw' in s) {
      return s.raw;
    }
  }

  return '';
};

var unwrapStringForEscaped = function (s) {
  if (typeof s === 'string') {
    return s;
  }

  if (typeof s === 'object') {
    if ('escaped' in s) {
      return s.escaped;
    }

    if ('trusted' in s) {
      return s.trusted;
    }
  }

  return '';
};

var escapeForTemplate = function (allowHTML, s) {
  return allowHTML ? unwrapStringForEscaped(s) : sanitise(s);
};

var setElementHtml = function (el, allowHtml, html) {
  el.innerHTML = escapeForTemplate(allowHtml, html);
};

var sortByAlpha = function (_a, _b) {
  var value = _a.value,
      _c = _a.label,
      label = _c === void 0 ? value : _c;
  var value2 = _b.value,
      _d = _b.label,
      label2 = _d === void 0 ? value2 : _d;
  return unwrapStringForRaw(label).localeCompare(unwrapStringForRaw(label2), [], {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true
  });
};

var sortByRank = function (a, b) {
  return a.rank - b.rank;
};

var dispatchEvent = function (element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }

  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
/**
 * Returns an array of keys present on the first but missing on the second object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


var diff = function (a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};

var getClassNames = function (ClassNames) {
  return Array.isArray(ClassNames) ? ClassNames : [ClassNames];
};

var getClassNamesSelector = function (option) {
  if (option && Array.isArray(option)) {
    return option.map(function (item) {
      return ".".concat(item);
    }).join('');
  }

  return ".".concat(option);
};

var addClassesToElement = function (element, className) {
  var _a;

  (_a = element.classList).add.apply(_a, getClassNames(className));
};

var removeClassesFromElement = function (element, className) {
  var _a;

  (_a = element.classList).remove.apply(_a, getClassNames(className));
};

var parseCustomProperties = function (customProperties) {
  if (typeof customProperties !== 'undefined') {
    try {
      return JSON.parse(customProperties);
    } catch (e) {
      return customProperties;
    }
  }

  return {};
};

var updateClassList = function (item, add, remove) {
  var itemEl = item.itemEl;

  if (itemEl) {
    removeClassesFromElement(itemEl, remove);
    addClassesToElement(itemEl, add);
  }
};

var Dropdown =
/** @class */
function () {
  function Dropdown(_a) {
    var element = _a.element,
        type = _a.type,
        classNames = _a.classNames;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.isActive = false;
  }
  /**
   * Show dropdown to user by adding active state class
   */


  Dropdown.prototype.show = function () {
    addClassesToElement(this.element, this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isActive = true;
    return this;
  };
  /**
   * Hide dropdown from user
   */


  Dropdown.prototype.hide = function () {
    removeClassesFromElement(this.element, this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'false');
    this.isActive = false;
    return this;
  };

  return Dropdown;
}();

var Container =
/** @class */
function () {
  function Container(_a) {
    var element = _a.element,
        type = _a.type,
        classNames = _a.classNames,
        position = _a.position;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.position = position;
    this.isOpen = false;
    this.isFlipped = false;
    this.isDisabled = false;
    this.isLoading = false;
  }
  /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   */


  Container.prototype.shouldFlip = function (dropdownPos, dropdownHeight) {
    // If flip is enabled and the dropdown bottom position is
    // greater than the window height flip the dropdown.
    var shouldFlip = false;

    if (this.position === 'auto') {
      shouldFlip = this.element.getBoundingClientRect().top - dropdownHeight >= 0 && !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
    } else if (this.position === 'top') {
      shouldFlip = true;
    }

    return shouldFlip;
  };

  Container.prototype.setActiveDescendant = function (activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  Container.prototype.removeActiveDescendant = function () {
    this.element.removeAttribute('aria-activedescendant');
  };

  Container.prototype.open = function (dropdownPos, dropdownHeight) {
    addClassesToElement(this.element, this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isOpen = true;

    if (this.shouldFlip(dropdownPos, dropdownHeight)) {
      addClassesToElement(this.element, this.classNames.flippedState);
      this.isFlipped = true;
    }
  };

  Container.prototype.close = function () {
    removeClassesFromElement(this.element, this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'false');
    this.removeActiveDescendant();
    this.isOpen = false; // A dropdown flips if it does not have space within the page

    if (this.isFlipped) {
      removeClassesFromElement(this.element, this.classNames.flippedState);
      this.isFlipped = false;
    }
  };

  Container.prototype.addFocusState = function () {
    addClassesToElement(this.element, this.classNames.focusState);
  };

  Container.prototype.removeFocusState = function () {
    removeClassesFromElement(this.element, this.classNames.focusState);
  };

  Container.prototype.enable = function () {
    removeClassesFromElement(this.element, this.classNames.disabledState);
    this.element.removeAttribute('aria-disabled');

    if (this.type === PassedElementTypes.SelectOne) {
      this.element.setAttribute('tabindex', '0');
    }

    this.isDisabled = false;
  };

  Container.prototype.disable = function () {
    addClassesToElement(this.element, this.classNames.disabledState);
    this.element.setAttribute('aria-disabled', 'true');

    if (this.type === PassedElementTypes.SelectOne) {
      this.element.setAttribute('tabindex', '-1');
    }

    this.isDisabled = true;
  };

  Container.prototype.wrap = function (element) {
    var el = this.element;
    var parentNode = element.parentNode;

    if (parentNode) {
      if (element.nextSibling) {
        parentNode.insertBefore(el, element.nextSibling);
      } else {
        parentNode.appendChild(el);
      }
    }

    el.appendChild(element);
  };

  Container.prototype.unwrap = function (element) {
    var el = this.element;
    var parentNode = el.parentNode;

    if (parentNode) {
      // Move passed element outside this element
      parentNode.insertBefore(element, el); // Remove this element

      parentNode.removeChild(el);
    }
  };

  Container.prototype.addLoadingState = function () {
    addClassesToElement(this.element, this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
  };

  Container.prototype.removeLoadingState = function () {
    removeClassesFromElement(this.element, this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
  };

  return Container;
}();

var Input =
/** @class */
function () {
  function Input(_a) {
    var element = _a.element,
        type = _a.type,
        classNames = _a.classNames,
        preventPaste = _a.preventPaste;
    this.element = element;
    this.type = type;
    this.classNames = classNames;
    this.preventPaste = preventPaste;
    this.isFocussed = this.element.isEqualNode(document.activeElement);
    this.isDisabled = element.disabled;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  Object.defineProperty(Input.prototype, "placeholder", {
    set: function (placeholder) {
      this.element.placeholder = placeholder;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "value", {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });

  Input.prototype.addEventListeners = function () {
    var el = this.element;
    el.addEventListener('paste', this._onPaste);
    el.addEventListener('input', this._onInput, {
      passive: true
    });
    el.addEventListener('focus', this._onFocus, {
      passive: true
    });
    el.addEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  Input.prototype.removeEventListeners = function () {
    var el = this.element;
    el.removeEventListener('input', this._onInput);
    el.removeEventListener('paste', this._onPaste);
    el.removeEventListener('focus', this._onFocus);
    el.removeEventListener('blur', this._onBlur);
  };

  Input.prototype.enable = function () {
    var el = this.element;
    el.removeAttribute('disabled');
    this.isDisabled = false;
  };

  Input.prototype.disable = function () {
    var el = this.element;
    el.setAttribute('disabled', '');
    this.isDisabled = true;
  };

  Input.prototype.focus = function () {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  Input.prototype.blur = function () {
    if (this.isFocussed) {
      this.element.blur();
    }
  };

  Input.prototype.clear = function (setWidth) {
    if (setWidth === void 0) {
      setWidth = true;
    }

    this.element.value = '';

    if (setWidth) {
      this.setWidth();
    }

    return this;
  };
  /**
   * Set the correct input width based on placeholder
   * value or input value
   */


  Input.prototype.setWidth = function () {
    // Resize input to contents or placeholder
    var element = this.element;
    element.style.minWidth = "".concat(element.placeholder.length + 1, "ch");
    element.style.width = "".concat(element.value.length + 1, "ch");
  };

  Input.prototype.setActiveDescendant = function (activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  Input.prototype.removeActiveDescendant = function () {
    this.element.removeAttribute('aria-activedescendant');
  };

  Input.prototype._onInput = function () {
    if (this.type !== PassedElementTypes.SelectOne) {
      this.setWidth();
    }
  };

  Input.prototype._onPaste = function (event) {
    if (this.preventPaste) {
      event.preventDefault();
    }
  };

  Input.prototype._onFocus = function () {
    this.isFocussed = true;
  };

  Input.prototype._onBlur = function () {
    this.isFocussed = false;
  };

  return Input;
}();

var SCROLLING_SPEED = 4;

var List =
/** @class */
function () {
  function List(_a) {
    var element = _a.element;
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }

  List.prototype.prepend = function (node) {
    var child = this.element.firstElementChild;

    if (child) {
      this.element.insertBefore(node, child);
    } else {
      this.element.append(node);
    }
  };

  List.prototype.scrollToTop = function () {
    this.element.scrollTop = 0;
  };

  List.prototype.scrollToChildElement = function (element, direction) {
    var _this = this;

    if (!element) {
      return;
    }

    var listHeight = this.element.offsetHeight; // Scroll position of dropdown

    var listScrollPosition = this.element.scrollTop + listHeight;
    var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

    var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
    requestAnimationFrame(function () {
      _this._animateScroll(destination, direction);
    });
  };

  List.prototype._scrollDown = function (scrollPos, strength, destination) {
    var easing = (destination - scrollPos) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos + distance;
  };

  List.prototype._scrollUp = function (scrollPos, strength, destination) {
    var easing = (scrollPos - destination) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos - distance;
  };

  List.prototype._animateScroll = function (destination, direction) {
    var _this = this;

    var strength = SCROLLING_SPEED;
    var choiceListScrollTop = this.element.scrollTop;
    var continueAnimation = false;

    if (direction > 0) {
      this._scrollDown(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop < destination) {
        continueAnimation = true;
      }
    } else {
      this._scrollUp(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop > destination) {
        continueAnimation = true;
      }
    }

    if (continueAnimation) {
      requestAnimationFrame(function () {
        _this._animateScroll(destination, direction);
      });
    }
  };

  return List;
}();

var WrappedElement =
/** @class */
function () {
  function WrappedElement(_a) {
    var element = _a.element,
        classNames = _a.classNames;
    this.element = element;
    this.classNames = classNames;
    this.isDisabled = false;
  }

  Object.defineProperty(WrappedElement.prototype, "isActive", {
    get: function () {
      return this.element.dataset.choice === 'active';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedElement.prototype, "dir", {
    get: function () {
      return this.element.dir;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(WrappedElement.prototype, "value", {
    get: function () {
      return this.element.value;
    },
    set: function (value) {
      this.element.setAttribute('value', value);
      this.element.value = value;
    },
    enumerable: false,
    configurable: true
  });

  WrappedElement.prototype.conceal = function () {
    var el = this.element; // Hide passed input

    addClassesToElement(el, this.classNames.input);
    el.hidden = true; // Remove element from tab index

    el.tabIndex = -1; // Backup original styles if any

    var origStyle = el.getAttribute('style');

    if (origStyle) {
      el.setAttribute('data-choice-orig-style', origStyle);
    }

    el.setAttribute('data-choice', 'active');
  };

  WrappedElement.prototype.reveal = function () {
    var el = this.element; // Reinstate passed element

    removeClassesFromElement(el, this.classNames.input);
    el.hidden = false;
    el.removeAttribute('tabindex'); // Recover original styles if any

    var origStyle = el.getAttribute('data-choice-orig-style');

    if (origStyle) {
      el.removeAttribute('data-choice-orig-style');
      el.setAttribute('style', origStyle);
    } else {
      el.removeAttribute('style');
    }

    el.removeAttribute('data-choice');
  };

  WrappedElement.prototype.enable = function () {
    this.element.removeAttribute('disabled');
    this.element.disabled = false;
    this.isDisabled = false;
  };

  WrappedElement.prototype.disable = function () {
    this.element.setAttribute('disabled', '');
    this.element.disabled = true;
    this.isDisabled = true;
  };

  WrappedElement.prototype.triggerEvent = function (eventType, data) {
    dispatchEvent(this.element, eventType, data || {});
  };

  return WrappedElement;
}();

var WrappedInput =
/** @class */
function (_super) {
  __extends(WrappedInput, _super);

  function WrappedInput() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return WrappedInput;
}(WrappedElement);

var coerceBool = function (arg, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = true;
  }

  return typeof arg === 'undefined' ? defaultValue : !!arg;
};

var stringToHtmlClass = function (input) {
  if (typeof input === 'string') {
    // eslint-disable-next-line no-param-reassign
    input = input.split(' ').filter(function (s) {
      return s.length;
    });
  }

  if (Array.isArray(input) && input.length) {
    return input;
  }

  return undefined;
};

var mapInputToChoice = function (value, allowGroup, allowRawString) {
  if (allowRawString === void 0) {
    allowRawString = true;
  }

  if (typeof value === 'string') {
    var sanitisedValue = sanitise(value);
    var userValue = allowRawString || sanitisedValue === value ? value : {
      escaped: sanitisedValue,
      raw: value
    };
    var result_1 = mapInputToChoice({
      value: value,
      label: userValue,
      selected: true
    }, false);
    return result_1;
  }

  var groupOrChoice = value;

  if ('choices' in groupOrChoice) {
    if (!allowGroup) {
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
      throw new TypeError("optGroup is not allowed");
    }

    var group = groupOrChoice;
    var choices = group.choices.map(function (e) {
      return mapInputToChoice(e, false);
    });
    var result_2 = {
      id: 0,
      // actual ID will be assigned during _addGroup
      label: unwrapStringForRaw(group.label) || group.value,
      active: !!choices.length,
      disabled: !!group.disabled,
      choices: choices
    };
    return result_2;
  }

  var choice = groupOrChoice;
  var result = {
    id: 0,
    // actual ID will be assigned during _addChoice
    group: null,
    // actual group will be assigned during _addGroup but before _addChoice
    score: 0,
    // used in search
    rank: 0,
    // used in search, stable sort order
    value: choice.value,
    label: choice.label || choice.value,
    active: coerceBool(choice.active),
    selected: coerceBool(choice.selected, false),
    disabled: coerceBool(choice.disabled, false),
    placeholder: coerceBool(choice.placeholder, false),
    highlighted: false,
    labelClass: stringToHtmlClass(choice.labelClass),
    labelDescription: choice.labelDescription,
    customProperties: choice.customProperties
  };
  return result;
};

var isHtmlInputElement = function (e) {
  return e.tagName === 'INPUT';
};

var isHtmlSelectElement = function (e) {
  return e.tagName === 'SELECT';
};

var isHtmlOption = function (e) {
  return e.tagName === 'OPTION';
};

var isHtmlOptgroup = function (e) {
  return e.tagName === 'OPTGROUP';
};

var WrappedSelect =
/** @class */
function (_super) {
  __extends(WrappedSelect, _super);

  function WrappedSelect(_a) {
    var element = _a.element,
        classNames = _a.classNames,
        template = _a.template,
        extractPlaceholder = _a.extractPlaceholder;

    var _this = _super.call(this, {
      element: element,
      classNames: classNames
    }) || this;

    _this.template = template;
    _this.extractPlaceholder = extractPlaceholder;
    return _this;
  }

  Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
    get: function () {
      return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
      this.element.querySelector('option[placeholder]');
    },
    enumerable: false,
    configurable: true
  });

  WrappedSelect.prototype.addOptions = function (choices) {
    var _this = this;

    var fragment = document.createDocumentFragment();
    choices.forEach(function (obj) {
      var choice = obj;

      if (choice.element) {
        return;
      }

      var option = _this.template(choice);

      fragment.appendChild(option);
      choice.element = option;
    });
    this.element.appendChild(fragment);
  };

  WrappedSelect.prototype.optionsAsChoices = function () {
    var _this = this;

    var choices = [];
    this.element.querySelectorAll(':scope > option, :scope > optgroup').forEach(function (e) {
      if (isHtmlOption(e)) {
        choices.push(_this._optionToChoice(e));
      } else if (isHtmlOptgroup(e)) {
        choices.push(_this._optgroupToChoice(e));
      } // todo: hr as empty optgroup, requires displaying empty opt-groups to be useful

    });
    return choices;
  }; // eslint-disable-next-line class-methods-use-this


  WrappedSelect.prototype._optionToChoice = function (option) {
    // option.value returns the label if there is no value attribute, which can break legacy placeholder attribute support
    if (!option.hasAttribute('value') && option.hasAttribute('placeholder')) {
      option.setAttribute('value', '');
      option.value = '';
    }

    return {
      id: 0,
      group: null,
      score: 0,
      rank: 0,
      value: option.value,
      label: option.innerText,
      // HTML options do not support most html tags, but innerHtml will extract html comments...
      element: option,
      active: true,
      // this returns true if nothing is selected on initial load, which will break placeholder support
      selected: this.extractPlaceholder ? option.selected : option.hasAttribute('selected'),
      disabled: option.disabled,
      highlighted: false,
      placeholder: this.extractPlaceholder && (!option.value || option.hasAttribute('placeholder')),
      labelClass: typeof option.dataset.labelClass !== 'undefined' ? stringToHtmlClass(option.dataset.labelClass) : undefined,
      labelDescription: typeof option.dataset.labelDescription !== 'undefined' ? option.dataset.labelDescription : undefined,
      customProperties: parseCustomProperties(option.dataset.customProperties)
    };
  };

  WrappedSelect.prototype._optgroupToChoice = function (optgroup) {
    var _this = this;

    var options = optgroup.querySelectorAll('option');
    var choices = Array.from(options).map(function (option) {
      return _this._optionToChoice(option);
    });
    return {
      id: 0,
      label: optgroup.label || '',
      element: optgroup,
      active: !!choices.length,
      disabled: optgroup.disabled,
      choices: choices
    };
  };

  return WrappedSelect;
}(WrappedElement);

var DEFAULT_CLASSNAMES = {
  containerOuter: ['choices'],
  containerInner: ['choices__inner'],
  input: ['choices__input'],
  inputCloned: ['choices__input--cloned'],
  list: ['choices__list'],
  listItems: ['choices__list--multiple'],
  listSingle: ['choices__list--single'],
  listDropdown: ['choices__list--dropdown'],
  item: ['choices__item'],
  itemSelectable: ['choices__item--selectable'],
  itemDisabled: ['choices__item--disabled'],
  itemChoice: ['choices__item--choice'],
  description: ['choices__description'],
  placeholder: ['choices__placeholder'],
  group: ['choices__group'],
  groupHeading: ['choices__heading'],
  button: ['choices__button'],
  activeState: ['is-active'],
  focusState: ['is-focused'],
  openState: ['is-open'],
  disabledState: ['is-disabled'],
  highlightedState: ['is-highlighted'],
  selectedState: ['is-selected'],
  flippedState: ['is-flipped'],
  loadingState: ['is-loading'],
  notice: ['choices__notice'],
  addChoice: ['choices__item--selectable', 'add-choice'],
  noResults: ['has-no-results'],
  noChoices: ['has-no-choices']
};
var DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  closeDropdownOnSelect: 'auto',
  singleModeForMultiSelect: false,
  addChoices: false,
  addItems: true,
  addItemFilter: function (value) {
    return !!value && value !== '';
  },
  removeItems: true,
  removeItemButton: false,
  removeItemButtonAlignLeft: false,
  editItems: false,
  allowHTML: false,
  allowHtmlUserInput: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: sortByAlpha,
  shadowRoot: null,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function (value) {
    return "Press Enter to add <b>\"".concat(value, "\"</b>");
  },
  removeItemIconText: function () {
    return "Remove item";
  },
  removeItemLabelText: function (value) {
    return "Remove item: ".concat(value);
  },
  maxItemText: function (maxItemCount) {
    return "Only ".concat(maxItemCount, " values can be added");
  },
  valueComparer: function (value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  labelId: '',
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: DEFAULT_CLASSNAMES,
  appendGroupInSearch: false
};

var removeItem = function (item) {
  var itemEl = item.itemEl;

  if (itemEl) {
    itemEl.remove();
    item.itemEl = undefined;
  }
};

function items(s, action, context) {
  var state = s;
  var update = true;

  switch (action.type) {
    case ActionType.ADD_ITEM:
      {
        action.item.selected = true;
        var el = action.item.element;

        if (el) {
          el.selected = true;
          el.setAttribute('selected', '');
        }

        state.push(action.item);
        break;
      }

    case ActionType.REMOVE_ITEM:
      {
        action.item.selected = false;
        var el = action.item.element;

        if (el) {
          el.selected = false;
          el.removeAttribute('selected'); // For a select-one, if all options are deselected, the first item is selected. To set a black value, select.value needs to be set

          var select = el.parentElement;

          if (select && isHtmlSelectElement(select) && select.type === PassedElementTypes.SelectOne) {
            select.value = '';
          }
        } // this is mixing concerns, but this is *so much faster*


        removeItem(action.item);
        state = state.filter(function (choice) {
          return choice.id !== action.item.id;
        });
        break;
      }

    case ActionType.REMOVE_CHOICE:
      {
        removeItem(action.choice);
        state = state.filter(function (item) {
          return item.id !== action.choice.id;
        });
        break;
      }

    case ActionType.HIGHLIGHT_ITEM:
      {
        var highlighted = action.highlighted;
        var item = state.find(function (obj) {
          return obj.id === action.item.id;
        });

        if (item && item.highlighted !== highlighted) {
          item.highlighted = highlighted;

          if (context) {
            updateClassList(item, highlighted ? context.classNames.highlightedState : context.classNames.selectedState, highlighted ? context.classNames.selectedState : context.classNames.highlightedState);
          }
        }

        break;
      }

    default:
      {
        update = false;
        break;
      }
  }

  return {
    state: state,
    update: update
  };
}

function groups(s, action) {
  var state = s;
  var update = true;

  switch (action.type) {
    case ActionType.ADD_GROUP:
      {
        state.push(action.group);
        break;
      }

    case ActionType.CLEAR_CHOICES:
      {
        state = [];
        break;
      }

    default:
      {
        update = false;
        break;
      }
  }

  return {
    state: state,
    update: update
  };
}
/* eslint-disable */


function choices(s, action, context) {
  var state = s;
  var update = true;

  switch (action.type) {
    case ActionType.ADD_CHOICE:
      {
        state.push(action.choice);
        break;
      }

    case ActionType.REMOVE_CHOICE:
      {
        action.choice.choiceEl = undefined;

        if (action.choice.group) {
          action.choice.group.choices = action.choice.group.choices.filter(function (obj) {
            return obj.id !== action.choice.id;
          });
        }

        state = state.filter(function (obj) {
          return obj.id !== action.choice.id;
        });
        break;
      }

    case ActionType.ADD_ITEM:
    case ActionType.REMOVE_ITEM:
      {
        action.item.choiceEl = undefined;
        break;
      }

    case ActionType.FILTER_CHOICES:
      {
        // avoid O(n^2) algorithm complexity when searching/filtering choices
        var scoreLookup_1 = [];
        action.results.forEach(function (result) {
          scoreLookup_1[result.item.id] = result;
        });
        state.forEach(function (choice) {
          var result = scoreLookup_1[choice.id];

          if (result !== undefined) {
            choice.score = result.score;
            choice.rank = result.rank;
            choice.active = true;
          } else {
            choice.score = 0;
            choice.rank = 0;
            choice.active = false;
          }

          if (context && context.appendGroupInSearch) {
            choice.choiceEl = undefined;
          }
        });
        break;
      }

    case ActionType.ACTIVATE_CHOICES:
      {
        state.forEach(function (choice) {
          choice.active = action.active;

          if (context && context.appendGroupInSearch) {
            choice.choiceEl = undefined;
          }
        });
        break;
      }

    case ActionType.CLEAR_CHOICES:
      {
        state = [];
        break;
      }

    default:
      {
        update = false;
        break;
      }
  }

  return {
    state: state,
    update: update
  };
}

var reducers = {
  groups: groups,
  items: items,
  choices: choices
};

var Store =
/** @class */
function () {
  function Store(context) {
    this._state = this.defaultState;
    this._listeners = [];
    this._txn = 0;
    this._context = context;
  }

  Object.defineProperty(Store.prototype, "defaultState", {
    // eslint-disable-next-line class-methods-use-this
    get: function () {
      return {
        groups: [],
        items: [],
        choices: []
      };
    },
    enumerable: false,
    configurable: true
  }); // eslint-disable-next-line class-methods-use-this

  Store.prototype.changeSet = function (init) {
    return {
      groups: init,
      items: init,
      choices: init
    };
  };

  Store.prototype.reset = function () {
    this._state = this.defaultState;
    var changes = this.changeSet(true);

    if (this._txn) {
      this._changeSet = changes;
    } else {
      this._listeners.forEach(function (l) {
        return l(changes);
      });
    }
  };

  Store.prototype.subscribe = function (onChange) {
    this._listeners.push(onChange);

    return this;
  };

  Store.prototype.dispatch = function (action) {
    var _this = this;

    var state = this._state;
    var hasChanges = false;
    var changes = this._changeSet || this.changeSet(false);
    Object.keys(reducers).forEach(function (key) {
      var stateUpdate = reducers[key](state[key], action, _this._context);

      if (stateUpdate.update) {
        hasChanges = true;
        changes[key] = true;
        state[key] = stateUpdate.state;
      }
    });

    if (hasChanges) {
      if (this._txn) {
        this._changeSet = changes;
      } else {
        this._listeners.forEach(function (l) {
          return l(changes);
        });
      }
    }
  };

  Store.prototype.withTxn = function (func) {
    this._txn++;

    try {
      func();
    } finally {
      this._txn = Math.max(0, this._txn - 1);

      if (!this._txn) {
        var changeSet_1 = this._changeSet;

        if (changeSet_1) {
          this._changeSet = undefined;

          this._listeners.forEach(function (l) {
            return l(changeSet_1);
          });
        }
      }
    }
  };

  Object.defineProperty(Store.prototype, "state", {
    /**
     * Get store object
     */
    get: function () {
      return this._state;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "items", {
    /**
     * Get items from store
     */
    get: function () {
      return this.state.items;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "highlightedActiveItems", {
    /**
     * Get highlighted items from store
     */
    get: function () {
      return this.items.filter(function (item) {
        return !item.disabled && item.active && item.highlighted;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "choices", {
    /**
     * Get choices from store
     */
    get: function () {
      return this.state.choices;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeChoices", {
    /**
     * Get active choices from store
     */
    get: function () {
      return this.choices.filter(function (choice) {
        return choice.active;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "searchableChoices", {
    /**
     * Get choices that can be searched (excluding placeholders)
     */
    get: function () {
      return this.choices.filter(function (choice) {
        return !choice.disabled && !choice.placeholder;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "groups", {
    /**
     * Get groups from store
     */
    get: function () {
      return this.state.groups;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Store.prototype, "activeGroups", {
    /**
     * Get active groups from store
     */
    get: function () {
      var _this = this;

      return this.state.groups.filter(function (group) {
        var isActive = group.active && !group.disabled;

        var hasActiveOptions = _this.state.choices.some(function (choice) {
          return choice.active && !choice.disabled;
        });

        return isActive && hasActiveOptions;
      }, []);
    },
    enumerable: false,
    configurable: true
  });

  Store.prototype.inTxn = function () {
    return this._txn > 0;
  };
  /**
   * Get single choice by it's ID
   */


  Store.prototype.getChoiceById = function (id) {
    return this.activeChoices.find(function (choice) {
      return choice.id === id;
    });
  };
  /**
   * Get group by group id
   */


  Store.prototype.getGroupById = function (id) {
    return this.groups.find(function (group) {
      return group.id === id;
    });
  };

  return Store;
}();

var NoticeTypes = {
  noChoices: 'no-choices',
  noResults: 'no-results',
  addChoice: 'add-choice',
  generic: ''
};

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function ownKeys(e, r) {
  var t = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }

  return t;
}

function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }

  return e;
}

function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];

  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return ("string" === r ? String : Number)(t);
}

function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");

  return "symbol" == typeof i ? i : i + "";
}
/**
 * Fuse.js v7.0.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2023 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */


function isArray(value) {
  return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
} // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js


const INFINITY = 1 / 0;

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function toString(value) {
  return value == null ? '' : baseToString(value);
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number';
} // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js


function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
}

function isObject(value) {
  return typeof value === 'object';
} // Checks if `value` is object-like.


function isObjectLike(value) {
  return isObject(value) && value !== null;
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isBlank(value) {
  return !value.trim().length;
} // Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js


function getTag(value) {
  return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = key => `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = max => `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = name => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = key => `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach(key => {
      let obj = createKey(key);

      this._keys.push(obj);

      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    }); // Normalize weights so that their sum is equal to 1

    this._keys.forEach(key => {
      key.weight /= totalWeight;
    });
  }

  get(keyId) {
    return this._keyMap[keyId];
  }

  keys() {
    return this._keys;
  }

  toJSON() {
    return JSON.stringify(this._keys);
  }

}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'));
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }

  return {
    path,
    id,
    weight,
    src,
    getFn
  };
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.');
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key;
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return;
    }

    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];
      const value = obj[key];

      if (!isDefined(value)) {
        return;
      } // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list


      if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true; // Search each item in the array.

        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  }; // Backwards compatibility (since path used to be a string)


  deepGet(obj, isString(path) ? path.split('.') : path, 0);
  return arr ? list : list[0];
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);

const SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.

function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      } // Default function is 1/sqrt(x), weight makes that variable


      const norm = 1 / Math.pow(numTokens, 0.5 * weight); // In place of `toFixed(mantissa)`, for faster computation

      const n = parseFloat(Math.round(norm * m) / m);
      cache.set(numTokens, n);
      return n;
    },

    clear() {
      cache.clear();
    }

  };
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }

  setSources(docs = []) {
    this.docs = docs;
  }

  setIndexRecords(records = []) {
    this.records = records;
  }

  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }

  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }

    this.isCreated = true; // List is Array<String>

    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  } // Adds a doc to the end of the index


  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  } // Removes the doc at the specified index of the index


  removeAt(idx) {
    this.records.splice(idx, 1); // Change ref index of every subsquent doc

    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }

  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }

  size() {
    return this.records.length;
  }

  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }

  _addObject(doc, docIndex) {
    let record = {
      i: docIndex,
      $: {}
    }; // Iterate over every key (i.e, path), and fetch the value at that key

    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return;
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{
          nestedArrIndex: -1,
          value
        }];

        while (stack.length) {
          const {
            nestedArrIndex,
            value
          } = stack.pop();

          if (!isDefined(value)) {
            continue;
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };
            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }

        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }

  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }

}

function createIndex(keys, docs, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}

function parseIndex(data, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const {
    keys,
    records
  } = data;
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}

function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy;
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
}

function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];

    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;

      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }

      start = -1;
    }
  } // (i-1 - start) + 1 => i - start


  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices;
} // Machine word size


const MAX_BITS = 32;

function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }

  const patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

  const textLen = text.length; // Handle the case when location > text.length

  const expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

  let currentThreshold = threshold; // Is there a nearby exact match? (speedup)

  let bestLocation = expectedLocation; // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.

  const computeMatches = minMatchCharLength > 1 || includeMatches; // A mask of the matches, used for building the indices

  const matchMask = computeMatches ? Array(textLen) : [];
  let index; // Get all exact matches, here for speed up

  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;

      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  } // Reset the best location


  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    } // Use the result from this iteration as the maximum for the next.


    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      } // First pass: exact match


      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        }); // This match will almost certainly be better than any existing match.
        // But check anyway.

        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

          if (bestLocation <= expectedLocation) {
            break;
          } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    } // No hope for a (better) match at greater error levels.


    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);

    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result;
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }

  return mask;
}

class BitapSearch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];

    if (!this.pattern.length) {
      return;
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const {
      isCaseSensitive,
      includeMatches
    } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    } // Exact match


    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result;
    } // Otherwise, use Bitap algorithm


    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({
      pattern,
      alphabet,
      startIndex
    }) => {
      const {
        isMatch,
        score,
        indices
      } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result;
  }

}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }

  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }

  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }

  search() {}

}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
} // Token: 'file


class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'exact';
  }

  static get multiRegex() {
    return /^="(.*)"$/;
  }

  static get singleRegex() {
    return /^=(.*)$/;
  }

  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }

} // Token: !fire


class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'inverse-exact';
  }

  static get multiRegex() {
    return /^!"(.*)"$/;
  }

  static get singleRegex() {
    return /^!(.*)$/;
  }

  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }

} // Token: ^file


class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'prefix-exact';
  }

  static get multiRegex() {
    return /^\^"(.*)"$/;
  }

  static get singleRegex() {
    return /^\^(.*)$/;
  }

  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }

} // Token: !^fire


class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'inverse-prefix-exact';
  }

  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }

  static get singleRegex() {
    return /^!\^(.*)$/;
  }

  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }

} // Token: .file$


class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'suffix-exact';
  }

  static get multiRegex() {
    return /^"(.*)"\$$/;
  }

  static get singleRegex() {
    return /^(.*)\$$/;
  }

  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }

} // Token: !.file$


class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'inverse-suffix-exact';
  }

  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }

  static get singleRegex() {
    return /^!(.*)\$$/;
  }

  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }

}

class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }

  static get type() {
    return 'fuzzy';
  }

  static get multiRegex() {
    return /^"(.*)"$/;
  }

  static get singleRegex() {
    return /^(.*)$/;
  }

  search(text) {
    return this._bitapSearch.searchIn(text);
  }

} // Token: 'file


class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }

  static get type() {
    return 'include';
  }

  static get multiRegex() {
    return /^'"(.*)"$/;
  }

  static get singleRegex() {
    return /^'(.*)$/;
  }

  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length; // Get all exact matches

    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }

} // ❗Order is important. DO NOT CHANGE.


const searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
const searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|'; // Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map(item => {
    let query = item.trim().split(SPACE_RE).filter(item => item && !!item.trim());
    let results = [];

    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

      let found = false;
      let idx = -1;

      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);

        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue;
      } // 2. Handle single query matches (i.e, once that are *not* quoted)


      idx = -1;

      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);

        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }

    return results;
  });
} // These extended matchers can return an array of matches, as opposed
// to a singl match


const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */

class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch;
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }

    const {
      includeMatches,
      isCaseSensitive
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0; // ORs

    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i]; // Reset indices

      allIndices.length = 0;
      numMatches = 0; // ANDs

      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const {
          isMatch,
          indices,
          score
        } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;

          if (includeMatches) {
            const type = searcher.constructor.type;

            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      } // OR condition, so if TRUE, return


      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result;
      }
    } // Nothing was matched


    return {
      isMatch: false,
      score: 1
    };
  }

}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];

    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }

  return new BitapSearch(pattern, options);
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};
const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = query => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = query => !!query[KeyType.PATH];

const isLeaf = query => !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = query => ({
  [LogicalOperator.AND]: Object.keys(query).map(key => ({
    [key]: query[key]
  }))
}); // When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance


function parse(query, options, {
  auto = true
} = {}) {
  const next = query => {
    let keys = Object.keys(query);
    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query));
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj;
    }

    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach(key => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach(item => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query);
} // Practical scoring function


function computeScore(results, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  results.forEach(result => {
    let totalScore = 1;
    result.matches.forEach(({
      key,
      norm,
      score
    }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
    });
    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return;
  }

  matches.forEach(match => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }

    const {
      indices,
      value
    } = match;
    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map(result => {
    const {
      idx
    } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach(transformer => {
        transformer(result, data);
      });
    }

    return data;
  });
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = _objectSpread2(_objectSpread2({}, Config), options);

    if (this.options.useExtendedSearch && !true) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }

    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }

    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return;
    }

    this._docs.push(doc);

    this._myIndex.add(doc);
  }

  remove(predicate = () => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];

      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }

    return results;
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);

    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex;
  }

  search(query, {
    limit = -1
  } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, {
      ignoreFieldNorm
    });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const {
      records
    } = this._myIndex;
    const results = []; // Iterate over every string in the index

    records.forEach(({
      v: text,
      i: idx,
      n: norm
    }) => {
      if (!isDefined(text)) {
        return;
      }

      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{
            score,
            value: text,
            norm,
            indices
          }]
        });
      }
    });
    return results;
  }

  _searchLogical(query) {
    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const {
          keyId,
          searcher
        } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [{
            idx,
            item,
            matches
          }];
        }

        return [];
      }

      const res = [];

      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);

        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }

      return res;
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = {
              idx,
              item,
              matches: []
            };
            results.push(resultMap[idx]);
          }

          expResults.forEach(({
            matches
          }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const {
      keys,
      records
    } = this._myIndex;
    const results = []; // List is Array<Object>

    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (!isDefined(item)) {
        return;
      }

      let matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

      keys.forEach((key, keyIndex) => {
        matches.push(...this._findMatches({
          key,
          value: item[keyIndex],
          searcher
        }));
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }

  _findMatches({
    key,
    value,
    searcher
  }) {
    if (!isDefined(value)) {
      return [];
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({
        v: text,
        i: idx,
        n: norm
      }) => {
        if (!isDefined(text)) {
          return;
        }

        const {
          isMatch,
          score,
          indices
        } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const {
        v: text,
        n: norm
      } = value;
      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({
          score,
          key,
          value: text,
          norm,
          indices
        });
      }
    }

    return matches;
  }

}

Fuse.version = '7.0.0';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}

var SearchByFuse =
/** @class */
function () {
  function SearchByFuse(config) {
    this._haystack = [];
    this._fuseOptions = __assign(__assign({}, config.fuseOptions), {
      keys: __spreadArray([], config.searchFields, true),
      includeMatches: true
    });
  }

  SearchByFuse.prototype.index = function (data) {
    this._haystack = data;

    if (this._fuse) {
      this._fuse.setCollection(data);
    }
  };

  SearchByFuse.prototype.reset = function () {
    this._haystack = [];
    this._fuse = undefined;
  };

  SearchByFuse.prototype.isEmptyIndex = function () {
    return !this._haystack.length;
  };

  SearchByFuse.prototype.search = function (needle) {
    if (!this._fuse) {
      {
        this._fuse = new Fuse(this._haystack, this._fuseOptions);
      }
    }

    var results = this._fuse.search(needle);

    return results.map(function (value, i) {
      return {
        item: value.item,
        score: value.score || 0,
        rank: i + 1 // If value.score is used for sorting, this can create non-stable sorts!

      };
    });
  };

  return SearchByFuse;
}();

function getSearcher(config) {
  {
    return new SearchByFuse(config);
  }
}
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option.
 * `Choices.defaults.templates` allows access to the default template methods from `callbackOnCreateTemplates`
 */


var isEmptyObject = function (obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};

var assignCustomProperties = function (el, choice, withCustomProperties) {
  var dataset = el.dataset;
  var customProperties = choice.customProperties,
      labelClass = choice.labelClass,
      labelDescription = choice.labelDescription;

  if (labelClass) {
    dataset.labelClass = getClassNames(labelClass).join(' ');
  }

  if (labelDescription) {
    dataset.labelDescription = labelDescription;
  }

  if (withCustomProperties && customProperties) {
    if (typeof customProperties === 'string') {
      dataset.customProperties = customProperties;
    } else if (typeof customProperties === 'object' && !isEmptyObject(customProperties)) {
      dataset.customProperties = JSON.stringify(customProperties);
    }
  }
};

var addAriaLabel = function (docRoot, id, element) {
  var label = id && docRoot.querySelector("label[for='".concat(id, "']"));
  var text = label && label.innerText;

  if (text) {
    element.setAttribute('aria-label', text);
  }
};

var templates = {
  containerOuter: function (_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
    var containerOuter = _a.classNames.containerOuter;
    var div = document.createElement('div');
    addClassesToElement(div, containerOuter);
    div.dataset.type = passedElementType;

    if (dir) {
      div.dir = dir;
    }

    if (isSelectOneElement) {
      div.tabIndex = 0;
    }

    if (isSelectElement) {
      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

      if (searchEnabled) {
        div.setAttribute('aria-autocomplete', 'list');
      } else if (!labelId) {
        addAriaLabel(this._docRoot, this.passedElement.element.id, div);
      }

      div.setAttribute('aria-haspopup', 'true');
      div.setAttribute('aria-expanded', 'false');
    }

    if (labelId) {
      div.setAttribute('aria-labelledby', labelId);
    }

    return div;
  },
  containerInner: function (_a) {
    var containerInner = _a.classNames.containerInner;
    var div = document.createElement('div');
    addClassesToElement(div, containerInner);
    return div;
  },
  itemList: function (_a, isSelectOneElement) {
    var searchEnabled = _a.searchEnabled,
        _b = _a.classNames,
        list = _b.list,
        listSingle = _b.listSingle,
        listItems = _b.listItems;
    var div = document.createElement('div');
    addClassesToElement(div, list);
    addClassesToElement(div, isSelectOneElement ? listSingle : listItems);

    if (this._isSelectElement && searchEnabled) {
      div.setAttribute('role', 'listbox');
    }

    return div;
  },
  placeholder: function (_a, value) {
    var allowHTML = _a.allowHTML,
        placeholder = _a.classNames.placeholder;
    var div = document.createElement('div');
    addClassesToElement(div, placeholder);
    setElementHtml(div, allowHTML, value);
    return div;
  },
  item: function (_a, choice, removeItemButton) {
    var allowHTML = _a.allowHTML,
        removeItemButtonAlignLeft = _a.removeItemButtonAlignLeft,
        removeItemIconText = _a.removeItemIconText,
        removeItemLabelText = _a.removeItemLabelText,
        _b = _a.classNames,
        item = _b.item,
        button = _b.button,
        highlightedState = _b.highlightedState,
        itemSelectable = _b.itemSelectable,
        placeholder = _b.placeholder;
    var rawValue = unwrapStringForRaw(choice.value);
    var div = document.createElement('div');
    addClassesToElement(div, item);

    if (choice.labelClass) {
      var spanLabel = document.createElement('span');
      setElementHtml(spanLabel, allowHTML, choice.label);
      addClassesToElement(spanLabel, choice.labelClass);
      div.appendChild(spanLabel);
    } else {
      setElementHtml(div, allowHTML, choice.label);
    }

    div.dataset.item = '';
    div.dataset.id = choice.id;
    div.dataset.value = rawValue;
    assignCustomProperties(div, choice, true);

    if (choice.disabled || this.containerOuter.isDisabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    if (this._isSelectElement) {
      div.setAttribute('aria-selected', 'true');
      div.setAttribute('role', 'option');
    }

    if (choice.placeholder) {
      addClassesToElement(div, placeholder);
      div.dataset.placeholder = '';
    }

    addClassesToElement(div, choice.highlighted ? highlightedState : itemSelectable);

    if (removeItemButton) {
      if (choice.disabled) {
        removeClassesFromElement(div, itemSelectable);
      }

      div.dataset.deletable = '';
      var removeButton = document.createElement('button');
      removeButton.type = 'button';
      addClassesToElement(removeButton, button);
      setElementHtml(removeButton, true, resolveNoticeFunction(removeItemIconText, choice.value));
      var REMOVE_ITEM_LABEL = resolveNoticeFunction(removeItemLabelText, choice.value);

      if (REMOVE_ITEM_LABEL) {
        removeButton.setAttribute('aria-label', REMOVE_ITEM_LABEL);
      }

      removeButton.dataset.button = '';

      if (removeItemButtonAlignLeft) {
        div.insertAdjacentElement('afterbegin', removeButton);
      } else {
        div.appendChild(removeButton);
      }
    }

    return div;
  },
  choiceList: function (_a, isSelectOneElement) {
    var list = _a.classNames.list;
    var div = document.createElement('div');
    addClassesToElement(div, list);

    if (!isSelectOneElement) {
      div.setAttribute('aria-multiselectable', 'true');
    }

    div.setAttribute('role', 'listbox');
    return div;
  },
  choiceGroup: function (_a, _b) {
    var allowHTML = _a.allowHTML,
        _c = _a.classNames,
        group = _c.group,
        groupHeading = _c.groupHeading,
        itemDisabled = _c.itemDisabled;
    var id = _b.id,
        label = _b.label,
        disabled = _b.disabled;
    var rawLabel = unwrapStringForRaw(label);
    var div = document.createElement('div');
    addClassesToElement(div, group);

    if (disabled) {
      addClassesToElement(div, itemDisabled);
    }

    div.setAttribute('role', 'group');
    div.dataset.group = '';
    div.dataset.id = id;
    div.dataset.value = rawLabel;

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    var heading = document.createElement('div');
    addClassesToElement(heading, groupHeading);
    setElementHtml(heading, allowHTML, label || '');
    div.appendChild(heading);
    return div;
  },
  choice: function (_a, choice, selectText, groupName) {
    var allowHTML = _a.allowHTML,
        _b = _a.classNames,
        item = _b.item,
        itemChoice = _b.itemChoice,
        itemSelectable = _b.itemSelectable,
        selectedState = _b.selectedState,
        itemDisabled = _b.itemDisabled,
        description = _b.description,
        placeholder = _b.placeholder; // eslint-disable-next-line prefer-destructuring

    var label = choice.label;
    var rawValue = unwrapStringForRaw(choice.value);
    var div = document.createElement('div');
    div.id = choice.elementId;
    addClassesToElement(div, item);
    addClassesToElement(div, itemChoice);

    if (groupName && typeof label === 'string') {
      label = escapeForTemplate(allowHTML, label);
      label += " (".concat(groupName, ")");
      label = {
        trusted: label
      };
    }

    var describedBy = div;

    if (choice.labelClass) {
      var spanLabel = document.createElement('span');
      setElementHtml(spanLabel, allowHTML, label);
      addClassesToElement(spanLabel, choice.labelClass);
      describedBy = spanLabel;
      div.appendChild(spanLabel);
    } else {
      setElementHtml(div, allowHTML, label);
    }

    if (choice.labelDescription) {
      var descId = "".concat(choice.elementId, "-description");
      describedBy.setAttribute('aria-describedby', descId);
      var spanDesc = document.createElement('span');
      setElementHtml(spanDesc, allowHTML, choice.labelDescription);
      spanDesc.id = descId;
      addClassesToElement(spanDesc, description);
      div.appendChild(spanDesc);
    }

    if (choice.selected) {
      addClassesToElement(div, selectedState);
    }

    if (choice.placeholder) {
      addClassesToElement(div, placeholder);
    }

    div.setAttribute('role', choice.group ? 'treeitem' : 'option');
    div.dataset.choice = '';
    div.dataset.id = choice.id;
    div.dataset.value = rawValue;

    if (selectText) {
      div.dataset.selectText = selectText;
    }

    if (choice.group) {
      div.dataset.groupId = "".concat(choice.group.id);
    }

    assignCustomProperties(div, choice, false);

    if (choice.disabled) {
      addClassesToElement(div, itemDisabled);
      div.dataset.choiceDisabled = '';
      div.setAttribute('aria-disabled', 'true');
    } else {
      addClassesToElement(div, itemSelectable);
      div.dataset.choiceSelectable = '';
    }

    return div;
  },
  input: function (_a, placeholderValue) {
    var _b = _a.classNames,
        input = _b.input,
        inputCloned = _b.inputCloned,
        labelId = _a.labelId;
    var inp = document.createElement('input');
    inp.type = 'search';
    addClassesToElement(inp, input);
    addClassesToElement(inp, inputCloned);
    inp.autocomplete = 'off';
    inp.autocapitalize = 'off';
    inp.spellcheck = false;
    inp.setAttribute('role', 'textbox');
    inp.setAttribute('aria-autocomplete', 'list');

    if (placeholderValue) {
      inp.setAttribute('aria-label', placeholderValue);
    } else if (!labelId) {
      addAriaLabel(this._docRoot, this.passedElement.element.id, inp);
    }

    return inp;
  },
  dropdown: function (_a) {
    var _b = _a.classNames,
        list = _b.list,
        listDropdown = _b.listDropdown;
    var div = document.createElement('div');
    addClassesToElement(div, list);
    addClassesToElement(div, listDropdown);
    div.setAttribute('aria-expanded', 'false');
    return div;
  },
  notice: function (_a, innerHTML, type) {
    var _b = _a.classNames,
        item = _b.item,
        itemChoice = _b.itemChoice,
        addChoice = _b.addChoice,
        noResults = _b.noResults,
        noChoices = _b.noChoices,
        noticeItem = _b.notice;

    if (type === void 0) {
      type = NoticeTypes.generic;
    }

    var notice = document.createElement('div');
    setElementHtml(notice, true, innerHTML);
    addClassesToElement(notice, item);
    addClassesToElement(notice, itemChoice);
    addClassesToElement(notice, noticeItem); // eslint-disable-next-line default-case

    switch (type) {
      case NoticeTypes.addChoice:
        addClassesToElement(notice, addChoice);
        break;

      case NoticeTypes.noResults:
        addClassesToElement(notice, noResults);
        break;

      case NoticeTypes.noChoices:
        addClassesToElement(notice, noChoices);
        break;
    }

    if (type === NoticeTypes.addChoice) {
      notice.dataset.choiceSelectable = '';
      notice.dataset.choice = '';
    }

    return notice;
  },
  option: function (choice) {
    // HtmlOptionElement's label value does not support HTML, so the avoid double escaping unwrap the untrusted string.
    var labelValue = unwrapStringForRaw(choice.label);
    var opt = new Option(labelValue, choice.value, false, choice.selected);
    assignCustomProperties(opt, choice, true);
    opt.disabled = choice.disabled;

    if (choice.selected) {
      opt.setAttribute('selected', '');
    }

    return opt;
  }
};
/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */

var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
var USER_DEFAULTS = {};

var parseDataSetId = function (element) {
  if (!element) {
    return undefined;
  }

  return element.dataset.id ? parseInt(element.dataset.id, 10) : undefined;
};

var selectableChoiceIdentifier = '[data-choice-selectable]';
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */

var Choices =
/** @class */
function () {
  function Choices(element, userConfig) {
    if (element === void 0) {
      element = '[data-choice]';
    }

    if (userConfig === void 0) {
      userConfig = {};
    }

    var _this = this;

    this.initialisedOK = undefined;
    this._hasNonChoicePlaceholder = false;
    this._lastAddedChoiceId = 0;
    this._lastAddedGroupId = 0;
    var defaults = Choices.defaults;
    this.config = __assign(__assign(__assign({}, defaults.allOptions), defaults.options), userConfig);
    ObjectsInConfig.forEach(function (key) {
      _this.config[key] = __assign(__assign(__assign({}, defaults.allOptions[key]), defaults.options[key]), userConfig[key]);
    });
    var config = this.config;

    if (!config.silent) {
      this._validateConfig();
    }

    var docRoot = config.shadowRoot || document.documentElement;
    this._docRoot = docRoot;
    var passedElement = typeof element === 'string' ? docRoot.querySelector(element) : element;

    if (!passedElement || typeof passedElement !== 'object' || !(isHtmlInputElement(passedElement) || isHtmlSelectElement(passedElement))) {
      if (!passedElement && typeof element === 'string') {
        throw TypeError("Selector ".concat(element, " failed to find an element"));
      }

      throw TypeError("Expected one of the following types text|select-one|select-multiple");
    }

    var elementType = passedElement.type;
    var isText = elementType === PassedElementTypes.Text;

    if (isText || config.maxItemCount !== 1) {
      config.singleModeForMultiSelect = false;
    }

    if (config.singleModeForMultiSelect) {
      elementType = PassedElementTypes.SelectMultiple;
    }

    var isSelectOne = elementType === PassedElementTypes.SelectOne;
    var isSelectMultiple = elementType === PassedElementTypes.SelectMultiple;
    var isSelect = isSelectOne || isSelectMultiple;
    this._elementType = elementType;
    this._isTextElement = isText;
    this._isSelectOneElement = isSelectOne;
    this._isSelectMultipleElement = isSelectMultiple;
    this._isSelectElement = isSelectOne || isSelectMultiple;
    this._canAddUserChoices = isText && config.addItems || isSelect && config.addChoices;

    if (typeof config.renderSelectedChoices !== 'boolean') {
      config.renderSelectedChoices = config.renderSelectedChoices === 'always' || isSelectOne;
    }

    if (config.closeDropdownOnSelect === 'auto') {
      config.closeDropdownOnSelect = isText || isSelectOne || config.singleModeForMultiSelect;
    } else {
      config.closeDropdownOnSelect = coerceBool(config.closeDropdownOnSelect);
    }

    if (config.placeholder) {
      if (config.placeholderValue) {
        this._hasNonChoicePlaceholder = true;
      } else if (passedElement.dataset.placeholder) {
        this._hasNonChoicePlaceholder = true;
        config.placeholderValue = passedElement.dataset.placeholder;
      }
    }

    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
      config.addItemFilter = re.test.bind(re);
    }

    if (this._isTextElement) {
      this.passedElement = new WrappedInput({
        element: passedElement,
        classNames: config.classNames
      });
    } else {
      var selectEl = passedElement;
      this.passedElement = new WrappedSelect({
        element: selectEl,
        classNames: config.classNames,
        template: function (data) {
          return _this._templates.option(data);
        },
        extractPlaceholder: config.placeholder && !this._hasNonChoicePlaceholder
      });
    }

    this.initialised = false;
    this._store = new Store(config);
    this._currentValue = '';
    config.searchEnabled = !isText && config.searchEnabled || isSelectMultiple;
    this._canSearch = config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = generateId(passedElement, 'choices-');
    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     */

    this._direction = passedElement.dir;

    if (!this._direction) {
      var elementDirection = window.getComputedStyle(passedElement).direction;
      var documentDirection = window.getComputedStyle(document.documentElement).direction;

      if (elementDirection !== documentDirection) {
        this._direction = elementDirection;
      }
    }

    this._idNames = {
      itemChoice: 'item-choice'
    };
    this._templates = defaults.templates;
    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onSelectKey = this._onSelectKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

    if (this.passedElement.isActive) {
      if (!config.silent) {
        console.warn('Trying to initialise Choices on element already initialised', {
          element: element
        });
      }

      this.initialised = true;
      this.initialisedOK = false;
      return;
    } // Let's go


    this.init(); // preserve the selected item list after setup for form reset

    this._initialItems = this._store.items.map(function (choice) {
      return choice.value;
    });
  }

  Object.defineProperty(Choices, "defaults", {
    get: function () {
      return Object.preventExtensions({
        get options() {
          return USER_DEFAULTS;
        },

        get allOptions() {
          return DEFAULT_CONFIG;
        },

        get templates() {
          return templates;
        }

      });
    },
    enumerable: false,
    configurable: true
  });

  Choices.prototype.init = function () {
    if (this.initialised || this.initialisedOK !== undefined) {
      return;
    }

    this._searcher = getSearcher(this.config);

    this._loadChoices();

    this._createTemplates();

    this._createElements();

    this._createStructure();

    if (this._isTextElement && !this.config.addItems || this.passedElement.element.hasAttribute('disabled') || !!this.passedElement.element.closest('fieldset:disabled')) {
      this.disable();
    } else {
      this.enable();

      this._addEventListeners();
    } // should be triggered **after** disabled state to avoid additional re-draws


    this._initStore();

    this.initialised = true;
    this.initialisedOK = true;
    var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

    if (typeof callbackOnInit === 'function') {
      callbackOnInit.call(this);
    }
  };

  Choices.prototype.destroy = function () {
    if (!this.initialised) {
      return;
    }

    this._removeEventListeners();

    this.passedElement.reveal();
    this.containerOuter.unwrap(this.passedElement.element);
    this._store._listeners = []; // prevents select/input value being wiped

    this.clearStore(false);

    this._stopSearch();

    this._templates = Choices.defaults.templates;
    this.initialised = false;
    this.initialisedOK = undefined;
  };

  Choices.prototype.enable = function () {
    if (this.passedElement.isDisabled) {
      this.passedElement.enable();
    }

    if (this.containerOuter.isDisabled) {
      this._addEventListeners();

      this.input.enable();
      this.containerOuter.enable();
    }

    return this;
  };

  Choices.prototype.disable = function () {
    if (!this.passedElement.isDisabled) {
      this.passedElement.disable();
    }

    if (!this.containerOuter.isDisabled) {
      this._removeEventListeners();

      this.input.disable();
      this.containerOuter.disable();
    }

    return this;
  };

  Choices.prototype.highlightItem = function (item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }

    if (!item || !item.id) {
      return this;
    }

    var choice = this._store.items.find(function (c) {
      return c.id === item.id;
    });

    if (!choice || choice.highlighted) {
      return this;
    }

    this._store.dispatch(highlightItem(choice, true));

    if (runEvent) {
      this.passedElement.triggerEvent(EventType.highlightItem, this._getChoiceForOutput(choice));
    }

    return this;
  };

  Choices.prototype.unhighlightItem = function (item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }

    if (!item || !item.id) {
      return this;
    }

    var choice = this._store.items.find(function (c) {
      return c.id === item.id;
    });

    if (!choice || !choice.highlighted) {
      return this;
    }

    this._store.dispatch(highlightItem(choice, false));

    if (runEvent) {
      this.passedElement.triggerEvent(EventType.unhighlightItem, this._getChoiceForOutput(choice));
    }

    return this;
  };

  Choices.prototype.highlightAll = function () {
    var _this = this;

    this._store.withTxn(function () {
      _this._store.items.forEach(function (item) {
        if (!item.highlighted) {
          _this._store.dispatch(highlightItem(item, true));

          _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
        }
      });
    });

    return this;
  };

  Choices.prototype.unhighlightAll = function () {
    var _this = this;

    this._store.withTxn(function () {
      _this._store.items.forEach(function (item) {
        if (item.highlighted) {
          _this._store.dispatch(highlightItem(item, false));

          _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
        }
      });
    });

    return this;
  };

  Choices.prototype.removeActiveItemsByValue = function (value) {
    var _this = this;

    this._store.withTxn(function () {
      _this._store.items.filter(function (item) {
        return item.value === value;
      }).forEach(function (item) {
        return _this._removeItem(item);
      });
    });

    return this;
  };

  Choices.prototype.removeActiveItems = function (excludedId) {
    var _this = this;

    this._store.withTxn(function () {
      _this._store.items.filter(function (_a) {
        var id = _a.id;
        return id !== excludedId;
      }).forEach(function (item) {
        return _this._removeItem(item);
      });
    });

    return this;
  };

  Choices.prototype.removeHighlightedItems = function (runEvent) {
    var _this = this;

    if (runEvent === void 0) {
      runEvent = false;
    }

    this._store.withTxn(function () {
      _this._store.highlightedActiveItems.forEach(function (item) {
        _this._removeItem(item); // If this action was performed by the user
        // trigger the event


        if (runEvent) {
          _this._triggerChange(item.value);
        }
      });
    });

    return this;
  };

  Choices.prototype.showDropdown = function (preventInputFocus) {
    var _this = this;

    if (this.dropdown.isActive) {
      return this;
    }

    if (preventInputFocus === undefined) {
      // eslint-disable-next-line no-param-reassign
      preventInputFocus = !this._canSearch;
    }

    requestAnimationFrame(function () {
      _this.dropdown.show();

      var rect = _this.dropdown.element.getBoundingClientRect();

      _this.containerOuter.open(rect.bottom, rect.height);

      if (!preventInputFocus) {
        _this.input.focus();
      }

      _this.passedElement.triggerEvent(EventType.showDropdown);
    });
    return this;
  };

  Choices.prototype.hideDropdown = function (preventInputBlur) {
    var _this = this;

    if (!this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this.dropdown.hide();

      _this.containerOuter.close();

      if (!preventInputBlur && _this._canSearch) {
        _this.input.removeActiveDescendant();

        _this.input.blur();
      }

      _this.passedElement.triggerEvent(EventType.hideDropdown);
    });
    return this;
  };

  Choices.prototype.getValue = function (valueOnly) {
    var _this = this;

    var values = this._store.items.map(function (item) {
      return valueOnly ? item.value : _this._getChoiceForOutput(item);
    });

    return this._isSelectOneElement || this.config.singleModeForMultiSelect ? values[0] : values;
  };

  Choices.prototype.setValue = function (items) {
    var _this = this;

    if (!this.initialisedOK) {
      this._warnChoicesInitFailed('setValue');

      return this;
    }

    this._store.withTxn(function () {
      items.forEach(function (value) {
        if (value) {
          _this._addChoice(mapInputToChoice(value, false));
        }
      });
    }); // @todo integrate with Store


    this._searcher.reset();

    return this;
  };

  Choices.prototype.setChoiceByValue = function (value) {
    var _this = this;

    if (!this.initialisedOK) {
      this._warnChoicesInitFailed('setChoiceByValue');

      return this;
    }

    if (this._isTextElement) {
      return this;
    }

    this._store.withTxn(function () {
      // If only one value has been passed, convert to array
      var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

      choiceValue.forEach(function (val) {
        return _this._findAndSelectChoiceByValue(val);
      });

      _this.unhighlightAll();
    }); // @todo integrate with Store


    this._searcher.reset();

    return this;
  };
  /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */


  Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices, clearSearchFlag) {
    var _this = this;

    if (choicesArrayOrFetcher === void 0) {
      choicesArrayOrFetcher = [];
    }

    if (value === void 0) {
      value = 'value';
    }

    if (label === void 0) {
      label = 'label';
    }

    if (replaceChoices === void 0) {
      replaceChoices = false;
    }

    if (clearSearchFlag === void 0) {
      clearSearchFlag = true;
    }

    if (!this.initialisedOK) {
      this._warnChoicesInitFailed('setChoices');

      return this;
    }

    if (!this._isSelectElement) {
      throw new TypeError("setChoices can't be used with INPUT based Choices");
    }

    if (typeof value !== 'string' || !value) {
      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
    } // Clear choices if needed


    if (replaceChoices) {
      this.clearChoices();
    }

    if (typeof choicesArrayOrFetcher === 'function') {
      // it's a choices fetcher function
      var fetcher_1 = choicesArrayOrFetcher(this);

      if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
        // that's a promise
        // eslint-disable-next-line no-promise-executor-return
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(function () {
          return _this._handleLoadingState(true);
        }).then(function () {
          return fetcher_1;
        }).then(function (data) {
          return _this.setChoices(data, value, label, replaceChoices);
        }).catch(function (err) {
          if (!_this.config.silent) {
            console.error(err);
          }
        }).then(function () {
          return _this._handleLoadingState(false);
        }).then(function () {
          return _this;
        });
      } // function returned something else than promise, let's check if it's an array of choices


      if (!Array.isArray(fetcher_1)) {
        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
      } // recursion with results, it's sync and choices were cleared already


      return this.setChoices(fetcher_1, value, label, false);
    }

    if (!Array.isArray(choicesArrayOrFetcher)) {
      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
    }

    this.containerOuter.removeLoadingState();

    this._store.withTxn(function () {
      if (clearSearchFlag) {
        _this._isSearching = false;
      }

      var isDefaultValue = value === 'value';
      var isDefaultLabel = label === 'label';
      choicesArrayOrFetcher.forEach(function (groupOrChoice) {
        if ('choices' in groupOrChoice) {
          var group = groupOrChoice;

          if (!isDefaultLabel) {
            group = __assign(__assign({}, group), {
              label: group[label]
            });
          }

          _this._addGroup(mapInputToChoice(group, true));
        } else {
          var choice = groupOrChoice;

          if (!isDefaultLabel || !isDefaultValue) {
            choice = __assign(__assign({}, choice), {
              value: choice[value],
              label: choice[label]
            });
          }

          _this._addChoice(mapInputToChoice(choice, false));
        }
      });

      _this.unhighlightAll();
    }); // @todo integrate with Store


    this._searcher.reset();

    return this;
  };

  Choices.prototype.refresh = function (withEvents, selectFirstOption, deselectAll) {
    var _this = this;

    if (withEvents === void 0) {
      withEvents = false;
    }

    if (selectFirstOption === void 0) {
      selectFirstOption = false;
    }

    if (deselectAll === void 0) {
      deselectAll = false;
    }

    if (!this._isSelectElement) {
      if (!this.config.silent) {
        console.warn('refresh method can only be used on choices backed by a <select> element');
      }

      return this;
    }

    this._store.withTxn(function () {
      var choicesFromOptions = _this.passedElement.optionsAsChoices(); // Build the list of items which require preserving


      var existingItems = {};

      if (!deselectAll) {
        _this._store.items.forEach(function (choice) {
          if (choice.id && choice.active && choice.selected && !choice.disabled) {
            existingItems[choice.value] = true;
          }
        });
      }

      _this.clearStore(false);

      var updateChoice = function (choice) {
        if (deselectAll) {
          _this._store.dispatch(removeItem$1(choice));
        } else if (existingItems[choice.value]) {
          choice.selected = true;
        }
      };

      choicesFromOptions.forEach(function (groupOrChoice) {
        if ('choices' in groupOrChoice) {
          groupOrChoice.choices.forEach(updateChoice);
          return;
        }

        updateChoice(groupOrChoice);
      });
      /* @todo only generate add events for the added options instead of all
      if (withEvents) {
        items.forEach((choice) => {
          if (existingItems[choice.value]) {
            this.passedElement.triggerEvent(
              EventType.removeItem,
              this._getChoiceForEvent(choice),
            );
          }
        });
      }
      */
      // load new choices & items

      _this._addPredefinedChoices(choicesFromOptions, selectFirstOption, withEvents); // re-do search if required


      if (_this._isSearching) {
        _this._searchChoices(_this.input.value);
      }
    });

    return this;
  };

  Choices.prototype.removeChoice = function (value) {
    var choice = this._store.choices.find(function (c) {
      return c.value === value;
    });

    if (!choice) {
      return this;
    }

    this._clearNotice();

    this._store.dispatch(removeChoice(choice)); // @todo integrate with Store


    this._searcher.reset();

    if (choice.selected) {
      this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(choice));
    }

    return this;
  };

  Choices.prototype.clearChoices = function () {
    var _this = this;

    this._store.withTxn(function () {
      _this._store.choices.forEach(function (choice) {
        if (!choice.selected) {
          _this._store.dispatch(removeChoice(choice));
        }
      });
    }); // @todo integrate with Store


    this._searcher.reset();

    return this;
  };

  Choices.prototype.clearStore = function (clearOptions) {
    if (clearOptions === void 0) {
      clearOptions = true;
    }

    this._stopSearch();

    if (clearOptions) {
      this.passedElement.element.replaceChildren('');
    }

    this.itemList.element.replaceChildren('');
    this.choiceList.element.replaceChildren('');

    this._clearNotice();

    this._store.reset();

    this._lastAddedChoiceId = 0;
    this._lastAddedGroupId = 0; // @todo integrate with Store

    this._searcher.reset();

    return this;
  };

  Choices.prototype.clearInput = function () {
    var shouldSetInputWidth = !this._isSelectOneElement;
    this.input.clear(shouldSetInputWidth);

    this._stopSearch();

    return this;
  };

  Choices.prototype._validateConfig = function () {
    var config = this.config;
    var invalidConfigOptions = diff(config, DEFAULT_CONFIG);

    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }

    if (config.allowHTML && config.allowHtmlUserInput) {
      if (config.addItems) {
        console.warn('Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks');
      }

      if (config.addChoices) {
        console.warn('Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks');
      }
    }
  };

  Choices.prototype._render = function (changes) {
    if (changes === void 0) {
      changes = {
        choices: true,
        groups: true,
        items: true
      };
    }

    if (this._store.inTxn()) {
      return;
    }

    if (this._isSelectElement) {
      if (changes.choices || changes.groups) {
        this._renderChoices();
      }
    }

    if (changes.items) {
      this._renderItems();
    }
  };

  Choices.prototype._renderChoices = function () {
    var _this = this;

    if (!this._canAddItems()) {
      return; // block rendering choices if the input limit is reached.
    }

    var _a = this,
        config = _a.config,
        isSearching = _a._isSearching;

    var _b = this._store,
        activeGroups = _b.activeGroups,
        activeChoices = _b.activeChoices;
    var renderLimit = 0;

    if (isSearching && config.searchResultLimit > 0) {
      renderLimit = config.searchResultLimit;
    } else if (config.renderChoiceLimit > 0) {
      renderLimit = config.renderChoiceLimit;
    }

    if (this._isSelectElement) {
      var backingOptions = activeChoices.filter(function (choice) {
        return !choice.element;
      });

      if (backingOptions.length) {
        this.passedElement.addOptions(backingOptions);
      }
    }

    var fragment = document.createDocumentFragment();

    var renderableChoices = function (choices) {
      return choices.filter(function (choice) {
        return !choice.placeholder && (isSearching ? !!choice.rank : config.renderSelectedChoices || !choice.selected);
      });
    };

    var selectableChoices = false;

    var renderChoices = function (choices, withinGroup, groupLabel) {
      if (isSearching) {
        // sortByRank is used to ensure stable sorting, as scores are non-unique
        // this additionally ensures fuseOptions.sortFn is not ignored
        choices.sort(sortByRank);
      } else if (config.shouldSort) {
        choices.sort(config.sorter);
      }

      var choiceLimit = choices.length;
      choiceLimit = !withinGroup && renderLimit && choiceLimit > renderLimit ? renderLimit : choiceLimit;
      choiceLimit--;
      choices.every(function (choice, index) {
        // choiceEl being empty signals the contents has probably significantly changed
        var dropdownItem = choice.choiceEl || _this._templates.choice(config, choice, config.itemSelectText, groupLabel);

        choice.choiceEl = dropdownItem;
        fragment.appendChild(dropdownItem);

        if (!choice.disabled && (isSearching || !choice.selected)) {
          selectableChoices = true;
        }

        return index < choiceLimit;
      });
    };

    if (activeChoices.length) {
      if (config.resetScrollPosition) {
        requestAnimationFrame(function () {
          return _this.choiceList.scrollToTop();
        });
      }

      if (!this._hasNonChoicePlaceholder && !isSearching && this._isSelectOneElement) {
        // If we have a placeholder choice along with groups
        renderChoices(activeChoices.filter(function (choice) {
          return choice.placeholder && !choice.group;
        }), false, undefined);
      } // If we have grouped options


      if (activeGroups.length && !isSearching) {
        if (config.shouldSort) {
          activeGroups.sort(config.sorter);
        } // render Choices without group first, regardless of sort, otherwise they won't be distinguishable
        // from the last group


        renderChoices(activeChoices.filter(function (choice) {
          return !choice.placeholder && !choice.group;
        }), false, undefined);
        activeGroups.forEach(function (group) {
          var groupChoices = renderableChoices(group.choices);

          if (groupChoices.length) {
            if (group.label) {
              var dropdownGroup = group.groupEl || _this._templates.choiceGroup(_this.config, group);

              group.groupEl = dropdownGroup;
              dropdownGroup.remove();
              fragment.appendChild(dropdownGroup);
            }

            renderChoices(groupChoices, true, config.appendGroupInSearch && isSearching ? group.label : undefined);
          }
        });
      } else {
        renderChoices(renderableChoices(activeChoices), false, undefined);
      }
    }

    if (!selectableChoices) {
      if (!this._notice) {
        this._notice = {
          text: resolveStringFunction(isSearching ? config.noResultsText : config.noChoicesText),
          type: isSearching ? NoticeTypes.noResults : NoticeTypes.noChoices
        };
      }

      fragment.replaceChildren('');
    }

    this._renderNotice(fragment);

    this.choiceList.element.replaceChildren(fragment);

    if (selectableChoices) {
      this._highlightChoice();
    }
  };

  Choices.prototype._renderItems = function () {
    var _this = this;

    var items = this._store.items || [];
    var itemList = this.itemList.element;
    var config = this.config;
    var fragment = document.createDocumentFragment();

    var itemFromList = function (item) {
      return itemList.querySelector("[data-item][data-id=\"".concat(item.id, "\"]"));
    };

    var addItemToFragment = function (item) {
      var el = item.itemEl;

      if (el && el.parentElement) {
        return;
      }

      el = itemFromList(item) || _this._templates.item(config, item, config.removeItemButton);
      item.itemEl = el;
      fragment.appendChild(el);
    }; // new items


    items.forEach(addItemToFragment);
    var addItems = !!fragment.childNodes.length;

    if (this._isSelectOneElement && this._hasNonChoicePlaceholder) {
      var existingItems = itemList.children.length;

      if (addItems || existingItems > 1) {
        var placeholder = itemList.querySelector(getClassNamesSelector(config.classNames.placeholder));

        if (placeholder) {
          placeholder.remove();
        }
      } else if (!existingItems) {
        addItems = true;
        addItemToFragment(mapInputToChoice({
          selected: true,
          value: '',
          label: config.placeholderValue || '',
          placeholder: true
        }, false));
      }
    }

    if (addItems) {
      itemList.append(fragment);

      if (config.shouldSortItems && !this._isSelectOneElement) {
        items.sort(config.sorter); // push sorting into the DOM

        items.forEach(function (item) {
          var el = itemFromList(item);

          if (el) {
            el.remove();
            fragment.append(el);
          }
        });
        itemList.append(fragment);
      }
    }

    if (this._isTextElement) {
      // Update the value of the hidden input
      this.passedElement.value = items.map(function (_a) {
        var value = _a.value;
        return value;
      }).join(config.delimiter);
    }
  };

  Choices.prototype._displayNotice = function (text, type, openDropdown) {
    if (openDropdown === void 0) {
      openDropdown = true;
    }

    var oldNotice = this._notice;

    if (oldNotice && (oldNotice.type === type && oldNotice.text === text || oldNotice.type === NoticeTypes.addChoice && (type === NoticeTypes.noResults || type === NoticeTypes.noChoices))) {
      if (openDropdown) {
        this.showDropdown(true);
      }

      return;
    }

    this._clearNotice();

    this._notice = text ? {
      text: text,
      type: type
    } : undefined;

    this._renderNotice();

    if (openDropdown && text) {
      this.showDropdown(true);
    }
  };

  Choices.prototype._clearNotice = function () {
    if (!this._notice) {
      return;
    }

    var noticeElement = this.choiceList.element.querySelector(getClassNamesSelector(this.config.classNames.notice));

    if (noticeElement) {
      noticeElement.remove();
    }

    this._notice = undefined;
  };

  Choices.prototype._renderNotice = function (fragment) {
    var noticeConf = this._notice;

    if (noticeConf) {
      var notice = this._templates.notice(this.config, noticeConf.text, noticeConf.type);

      if (fragment) {
        fragment.append(notice);
      } else {
        this.choiceList.prepend(notice);
      }
    }
  }; // eslint-disable-next-line class-methods-use-this


  Choices.prototype._getChoiceForOutput = function (choice, keyCode) {
    return {
      id: choice.id,
      highlighted: choice.highlighted,
      labelClass: choice.labelClass,
      labelDescription: choice.labelDescription,
      customProperties: choice.customProperties,
      disabled: choice.disabled,
      active: choice.active,
      label: choice.label,
      placeholder: choice.placeholder,
      value: choice.value,
      groupValue: choice.group ? choice.group.label : undefined,
      element: choice.element,
      keyCode: keyCode
    };
  };

  Choices.prototype._triggerChange = function (value) {
    if (value === undefined || value === null) {
      return;
    }

    this.passedElement.triggerEvent(EventType.change, {
      value: value
    });
  };

  Choices.prototype._handleButtonAction = function (element) {
    var _this = this;

    var items = this._store.items;

    if (!items.length || !this.config.removeItems || !this.config.removeItemButton) {
      return;
    }

    var id = element && parseDataSetId(element.parentElement);
    var itemToRemove = id && items.find(function (item) {
      return item.id === id;
    });

    if (!itemToRemove) {
      return;
    }

    this._store.withTxn(function () {
      // Remove item associated with button
      _this._removeItem(itemToRemove);

      _this._triggerChange(itemToRemove.value);

      if (_this._isSelectOneElement && !_this._hasNonChoicePlaceholder) {
        var placeholderChoice = _this._store.choices.reverse().find(function (choice) {
          return !choice.disabled && choice.placeholder;
        });

        if (placeholderChoice) {
          _this._addItem(placeholderChoice);

          _this.unhighlightAll();

          if (placeholderChoice.value) {
            _this._triggerChange(placeholderChoice.value);
          }
        }
      }
    });
  };

  Choices.prototype._handleItemAction = function (element, hasShiftKey) {
    var _this = this;

    if (hasShiftKey === void 0) {
      hasShiftKey = false;
    }

    var items = this._store.items;

    if (!items.length || !this.config.removeItems || this._isSelectOneElement) {
      return;
    }

    var id = parseDataSetId(element);

    if (!id) {
      return;
    } // We only want to select one item with a click
    // so we deselect any items that aren't the target
    // unless shift is being pressed


    items.forEach(function (item) {
      if (item.id === id && !item.highlighted) {
        _this.highlightItem(item);
      } else if (!hasShiftKey && item.highlighted) {
        _this.unhighlightItem(item);
      }
    }); // Focus input as without focus, a user cannot do anything with a
    // highlighted item

    this.input.focus();
  };

  Choices.prototype._handleChoiceAction = function (element) {
    var _this = this; // If we are clicking on an option


    var id = parseDataSetId(element);

    var choice = id && this._store.getChoiceById(id);

    if (!choice || choice.disabled) {
      return false;
    }

    var hasActiveDropdown = this.dropdown.isActive;

    if (!choice.selected) {
      if (!this._canAddItems()) {
        return true; // causes _onEnterKey to early out
      }

      this._store.withTxn(function () {
        _this._addItem(choice, true, true);

        _this.clearInput();

        _this.unhighlightAll();
      });

      this._triggerChange(choice.value);
    } // We want to close the dropdown if we are dealing with a single select box


    if (hasActiveDropdown && this.config.closeDropdownOnSelect) {
      this.hideDropdown(true);
      this.containerOuter.element.focus();
    }

    return true;
  };

  Choices.prototype._handleBackspace = function (items) {
    var config = this.config;

    if (!config.removeItems || !items.length) {
      return;
    }

    var lastItem = items[items.length - 1];
    var hasHighlightedItems = items.some(function (item) {
      return item.highlighted;
    }); // If editing the last item is allowed and there are not other selected items,
    // we can edit the item value. Otherwise if we can remove items, remove all selected items

    if (config.editItems && !hasHighlightedItems && lastItem) {
      this.input.value = lastItem.value;
      this.input.setWidth();

      this._removeItem(lastItem);

      this._triggerChange(lastItem.value);
    } else {
      if (!hasHighlightedItems) {
        // Highlight last item if none already highlighted
        this.highlightItem(lastItem, false);
      }

      this.removeHighlightedItems(true);
    }
  };

  Choices.prototype._loadChoices = function () {
    var _a;

    var _this = this;

    var config = this.config;

    if (this._isTextElement) {
      // Assign preset items from passed object first
      this._presetChoices = config.items.map(function (e) {
        return mapInputToChoice(e, false);
      }); // Add any values passed from attribute

      if (this.passedElement.value) {
        var elementItems = this.passedElement.value.split(config.delimiter).map(function (e) {
          return mapInputToChoice(e, false, _this.config.allowHtmlUserInput);
        });
        this._presetChoices = this._presetChoices.concat(elementItems);
      }

      this._presetChoices.forEach(function (choice) {
        choice.selected = true;
      });
    } else if (this._isSelectElement) {
      // Assign preset choices from passed object
      this._presetChoices = config.choices.map(function (e) {
        return mapInputToChoice(e, true);
      }); // Create array of choices from option elements

      var choicesFromOptions = this.passedElement.optionsAsChoices();

      if (choicesFromOptions) {
        (_a = this._presetChoices).push.apply(_a, choicesFromOptions);
      }
    }
  };

  Choices.prototype._handleLoadingState = function (setLoading) {
    if (setLoading === void 0) {
      setLoading = true;
    }

    var el = this.itemList.element;

    if (setLoading) {
      this.disable();
      this.containerOuter.addLoadingState();

      if (this._isSelectOneElement) {
        el.replaceChildren(this._templates.placeholder(this.config, this.config.loadingText));
      } else {
        this.input.placeholder = this.config.loadingText;
      }
    } else {
      this.enable();
      this.containerOuter.removeLoadingState();

      if (this._isSelectOneElement) {
        el.replaceChildren('');

        this._render();
      } else {
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  };

  Choices.prototype._handleSearch = function (value) {
    if (!this.input.isFocussed) {
      return;
    } // Check that we have a value to search and the input was an alphanumeric character


    if (value !== null && typeof value !== 'undefined' && value.length >= this.config.searchFloor) {
      var resultCount = this.config.searchChoices ? this._searchChoices(value) : 0;

      if (resultCount !== null) {
        // Trigger search event
        this.passedElement.triggerEvent(EventType.search, {
          value: value,
          resultCount: resultCount
        });
      }
    } else if (this._store.choices.some(function (option) {
      return !option.active;
    })) {
      this._stopSearch();
    }
  };

  Choices.prototype._canAddItems = function () {
    var config = this.config;
    var maxItemCount = config.maxItemCount,
        maxItemText = config.maxItemText;

    if (!config.singleModeForMultiSelect && maxItemCount > 0 && maxItemCount <= this._store.items.length) {
      this.choiceList.element.replaceChildren('');
      this._notice = undefined;

      this._displayNotice(typeof maxItemText === 'function' ? maxItemText(maxItemCount) : maxItemText, NoticeTypes.addChoice);

      return false;
    }

    return true;
  };

  Choices.prototype._canCreateItem = function (value) {
    var config = this.config;
    var canAddItem = true;
    var notice = '';

    if (canAddItem && typeof config.addItemFilter === 'function' && !config.addItemFilter(value)) {
      canAddItem = false;
      notice = resolveNoticeFunction(config.customAddItemText, value);
    }

    if (canAddItem) {
      var foundChoice = this._store.choices.find(function (choice) {
        return config.valueComparer(choice.value, value);
      });

      if (this._isSelectElement) {
        // for exact matches, do not prompt to add it as a custom choice
        if (foundChoice) {
          this._displayNotice('', NoticeTypes.addChoice);

          return false;
        }
      } else if (this._isTextElement && !config.duplicateItemsAllowed) {
        if (foundChoice) {
          canAddItem = false;
          notice = resolveNoticeFunction(config.uniqueItemText, value);
        }
      }
    }

    if (canAddItem) {
      notice = resolveNoticeFunction(config.addItemText, value);
    }

    if (notice) {
      this._displayNotice(notice, NoticeTypes.addChoice);
    }

    return canAddItem;
  };

  Choices.prototype._searchChoices = function (value) {
    var newValue = value.trim().replace(/\s{2,}/, ' '); // signal input didn't change search

    if (!newValue.length || newValue === this._currentValue) {
      return null;
    }

    var searcher = this._searcher;

    if (searcher.isEmptyIndex()) {
      searcher.index(this._store.searchableChoices);
    } // If new value matches the desired length and is not the same as the current value with a space


    var results = searcher.search(newValue);
    this._currentValue = newValue;
    this._highlightPosition = 0;
    this._isSearching = true;
    var notice = this._notice;
    var noticeType = notice && notice.type;

    if (noticeType !== NoticeTypes.addChoice) {
      if (!results.length) {
        this._displayNotice(resolveStringFunction(this.config.noResultsText), NoticeTypes.noResults);
      } else {
        this._clearNotice();
      }
    }

    this._store.dispatch(filterChoices(results));

    return results.length;
  };

  Choices.prototype._stopSearch = function () {
    if (this._isSearching) {
      this._currentValue = '';
      this._isSearching = false;

      this._clearNotice();

      this._store.dispatch(activateChoices(true));

      this.passedElement.triggerEvent(EventType.search, {
        value: '',
        resultCount: 0
      });
    }
  };

  Choices.prototype._addEventListeners = function () {
    var documentElement = this._docRoot;
    var outerElement = this.containerOuter.element;
    var inputElement = this.input.element; // capture events - can cancel event processing or propagation

    documentElement.addEventListener('touchend', this._onTouchEnd, true);
    outerElement.addEventListener('keydown', this._onKeyDown, true);
    outerElement.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

    documentElement.addEventListener('click', this._onClick, {
      passive: true
    });
    documentElement.addEventListener('touchmove', this._onTouchMove, {
      passive: true
    });
    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
      passive: true
    });

    if (this._isSelectOneElement) {
      outerElement.addEventListener('focus', this._onFocus, {
        passive: true
      });
      outerElement.addEventListener('blur', this._onBlur, {
        passive: true
      });
    }

    inputElement.addEventListener('keyup', this._onKeyUp, {
      passive: true
    });
    inputElement.addEventListener('input', this._onInput, {
      passive: true
    });
    inputElement.addEventListener('focus', this._onFocus, {
      passive: true
    });
    inputElement.addEventListener('blur', this._onBlur, {
      passive: true
    });

    if (inputElement.form) {
      inputElement.form.addEventListener('reset', this._onFormReset, {
        passive: true
      });
    }

    this.input.addEventListeners();
  };

  Choices.prototype._removeEventListeners = function () {
    var documentElement = this._docRoot;
    var outerElement = this.containerOuter.element;
    var inputElement = this.input.element;
    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
    outerElement.removeEventListener('keydown', this._onKeyDown, true);
    outerElement.removeEventListener('mousedown', this._onMouseDown, true);
    documentElement.removeEventListener('click', this._onClick);
    documentElement.removeEventListener('touchmove', this._onTouchMove);
    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

    if (this._isSelectOneElement) {
      outerElement.removeEventListener('focus', this._onFocus);
      outerElement.removeEventListener('blur', this._onBlur);
    }

    inputElement.removeEventListener('keyup', this._onKeyUp);
    inputElement.removeEventListener('input', this._onInput);
    inputElement.removeEventListener('focus', this._onFocus);
    inputElement.removeEventListener('blur', this._onBlur);

    if (inputElement.form) {
      inputElement.form.removeEventListener('reset', this._onFormReset);
    }

    this.input.removeEventListeners();
  };

  Choices.prototype._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    var hasActiveDropdown = this.dropdown.isActive;
    /*
    See:
    https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
    https://en.wikipedia.org/wiki/UTF-16#Code_points_from_U+010000_to_U+10FFFF - UTF-16 surrogate pairs
    https://stackoverflow.com/a/70866532 - "Unidentified" for mobile
    http://www.unicode.org/versions/Unicode5.2.0/ch16.pdf#G19635 - U+FFFF is reserved (Section 16.7)
         Logic: when a key event is sent, `event.key` represents its printable value _or_ one
    of a large list of special values indicating meta keys/functionality. In addition,
    key events for compose functionality contain a value of `Dead` when mid-composition.
         I can't quite verify it, but non-English IMEs may also be able to generate key codes
    for code points in the surrogate-pair range, which could potentially be seen as having
    key.length > 1. Since `Fn` is one of the special keys, we can't distinguish by that
    alone.
         Here, key.length === 1 means we know for sure the input was printable and not a special
    `key` value. When the length is greater than 1, it could be either a printable surrogate
    pair or a special `key` value. We can tell the difference by checking if the _character
    code_ value (not code point!) is in the "surrogate pair" range or not.
         We don't use .codePointAt because an invalid code point would return 65535, which wouldn't
    pass the >= 0x10000 check we would otherwise use.
         > ...The Unicode Standard sets aside 66 noncharacter code points. The last two code points
    > of each plane are noncharacters: U+FFFE and U+FFFF on the BMP...
    */

    var wasPrintableChar = event.key.length === 1 || event.key.length === 2 && event.key.charCodeAt(0) >= 0xd800 || event.key === 'Unidentified';
    /*
      We do not show the dropdown if focusing out with esc or navigating through input fields.
      An activated search can still be opened with any other key.
     */

    if (!this._isTextElement && !hasActiveDropdown && keyCode !== KeyCodeMap.ESC_KEY && keyCode !== KeyCodeMap.TAB_KEY && keyCode !== KeyCodeMap.SHIFT_KEY) {
      this.showDropdown();

      if (!this.input.isFocussed && wasPrintableChar) {
        /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */
        this.input.value += event.key; // browsers interpret a space as pagedown

        if (event.key === ' ') {
          event.preventDefault();
        }
      }
    }

    switch (keyCode) {
      case KeyCodeMap.A_KEY:
        return this._onSelectKey(event, this.itemList.element.hasChildNodes());

      case KeyCodeMap.ENTER_KEY:
        return this._onEnterKey(event, hasActiveDropdown);

      case KeyCodeMap.ESC_KEY:
        return this._onEscapeKey(event, hasActiveDropdown);

      case KeyCodeMap.UP_KEY:
      case KeyCodeMap.PAGE_UP_KEY:
      case KeyCodeMap.DOWN_KEY:
      case KeyCodeMap.PAGE_DOWN_KEY:
        return this._onDirectionKey(event, hasActiveDropdown);

      case KeyCodeMap.DELETE_KEY:
      case KeyCodeMap.BACK_KEY:
        return this._onDeleteKey(event, this._store.items, this.input.isFocussed);
    }
  };

  Choices.prototype._onKeyUp = function
    /* event: KeyboardEvent */
  () {
    this._canSearch = this.config.searchEnabled;
  };

  Choices.prototype._onInput = function
    /* event: InputEvent */
  () {
    var value = this.input.value;

    if (!value) {
      if (this._isTextElement) {
        this.hideDropdown(true);
      } else {
        this._stopSearch();
      }

      return;
    }

    if (!this._canAddItems()) {
      return;
    }

    if (this._canSearch) {
      // do the search even if the entered text can not be added
      this._handleSearch(value);
    }

    if (!this._canAddUserChoices) {
      return;
    } // determine if a notice needs to be displayed for why a search result can't be added


    this._canCreateItem(value);

    if (this._isSelectElement) {
      this._highlightPosition = 0; // reset to select the notice and/or exact match

      this._highlightChoice();
    }
  };

  Choices.prototype._onSelectKey = function (event, hasItems) {
    // If CTRL + A or CMD + A have been pressed and there are items to select
    if ((event.ctrlKey || event.metaKey) && hasItems) {
      this._canSearch = false;
      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

      if (shouldHightlightAll) {
        this.highlightAll();
      }
    }
  };

  Choices.prototype._onEnterKey = function (event, hasActiveDropdown) {
    var _this = this;

    var value = this.input.value;
    var target = event.target;
    event.preventDefault();

    if (target && target.hasAttribute('data-button')) {
      this._handleButtonAction(target);

      return;
    }

    if (!hasActiveDropdown) {
      if (this._isSelectElement || this._notice) {
        this.showDropdown();
      }

      return;
    }

    var highlightedChoice = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));

    if (highlightedChoice && this._handleChoiceAction(highlightedChoice)) {
      return;
    }

    if (!target || !value) {
      this.hideDropdown(true);
      return;
    }

    if (!this._canAddItems()) {
      return;
    }

    var addedItem = false;

    this._store.withTxn(function () {
      addedItem = _this._findAndSelectChoiceByValue(value, true);

      if (!addedItem) {
        if (!_this._canAddUserChoices) {
          return;
        }

        if (!_this._canCreateItem(value)) {
          return;
        }

        _this._addChoice(mapInputToChoice(value, false, _this.config.allowHtmlUserInput), true, true);

        addedItem = true;
      }

      _this.clearInput();

      _this.unhighlightAll();
    });

    if (!addedItem) {
      return;
    }

    this._triggerChange(value);

    if (this.config.closeDropdownOnSelect) {
      this.hideDropdown(true);
    }
  };

  Choices.prototype._onEscapeKey = function (event, hasActiveDropdown) {
    if (hasActiveDropdown) {
      event.stopPropagation();
      this.hideDropdown(true);

      this._stopSearch();

      this.containerOuter.element.focus();
    }
  };

  Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
    var keyCode = event.keyCode; // If up or down key is pressed, traverse through options

    if (hasActiveDropdown || this._isSelectOneElement) {
      this.showDropdown();
      this._canSearch = false;
      var directionInt = keyCode === KeyCodeMap.DOWN_KEY || keyCode === KeyCodeMap.PAGE_DOWN_KEY ? 1 : -1;
      var skipKey = event.metaKey || keyCode === KeyCodeMap.PAGE_DOWN_KEY || keyCode === KeyCodeMap.PAGE_UP_KEY;
      var nextEl = void 0;

      if (skipKey) {
        if (directionInt > 0) {
          nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      } else {
        var currentEl = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));

        if (currentEl) {
          nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      }

      if (nextEl) {
        // We prevent default to stop the cursor moving
        // when pressing the arrow
        if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
          this.choiceList.scrollToChildElement(nextEl, directionInt);
        }

        this._highlightChoice(nextEl);
      } // Prevent default to maintain cursor position whilst
      // traversing dropdown options


      event.preventDefault();
    }
  };

  Choices.prototype._onDeleteKey = function (event, items, hasFocusedInput) {
    // If backspace or delete key is pressed and the input has no value
    if (!this._isSelectOneElement && !event.target.value && hasFocusedInput) {
      this._handleBackspace(items);

      event.preventDefault();
    }
  };

  Choices.prototype._onTouchMove = function () {
    if (this._wasTap) {
      this._wasTap = false;
    }
  };

  Choices.prototype._onTouchEnd = function (event) {
    var target = (event || event.touches[0]).target;
    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

    if (touchWasWithinContainer) {
      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

      if (containerWasExactTarget) {
        if (this._isTextElement) {
          this.input.focus();
        } else if (this._isSelectMultipleElement) {
          this.showDropdown();
        }
      } // Prevents focus event firing


      event.stopPropagation();
    }

    this._wasTap = true;
  };
  /**
   * Handles mousedown event in capture mode for containetOuter.element
   */


  Choices.prototype._onMouseDown = function (event) {
    var target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    } // If we have our mouse down on the scrollbar and are on IE11...


    if (IS_IE11 && this.choiceList.element.contains(target)) {
      // check if click was on a scrollbar area
      var firstChoice = this.choiceList.element.firstElementChild;
      this._isScrollingOnIe = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
    }

    if (target === this.input.element) {
      return;
    }

    var item = target.closest('[data-button],[data-item],[data-choice]');

    if (item instanceof HTMLElement) {
      if ('button' in item.dataset) {
        this._handleButtonAction(item);
      } else if ('item' in item.dataset) {
        this._handleItemAction(item, event.shiftKey);
      } else if ('choice' in item.dataset) {
        this._handleChoiceAction(item);
      }
    }

    event.preventDefault();
  };
  /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */


  Choices.prototype._onMouseOver = function (_a) {
    var target = _a.target;

    if (target instanceof HTMLElement && 'choice' in target.dataset) {
      this._highlightChoice(target);
    }
  };

  Choices.prototype._onClick = function (_a) {
    var target = _a.target;
    var containerOuter = this.containerOuter;
    var clickWasWithinContainer = containerOuter.element.contains(target);

    if (clickWasWithinContainer) {
      if (!this.dropdown.isActive && !containerOuter.isDisabled) {
        if (this._isTextElement) {
          if (document.activeElement !== this.input.element) {
            this.input.focus();
          }
        } else {
          this.showDropdown();
          containerOuter.element.focus();
        }
      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
        this.hideDropdown();
      }
    } else {
      containerOuter.removeFocusState();
      this.hideDropdown(true);
      this.unhighlightAll();
    }
  };

  Choices.prototype._onFocus = function (_a) {
    var target = _a.target;
    var containerOuter = this.containerOuter;
    var focusWasWithinContainer = target && containerOuter.element.contains(target);

    if (!focusWasWithinContainer) {
      return;
    }

    var targetIsInput = target === this.input.element;

    if (this._isTextElement) {
      if (targetIsInput) {
        containerOuter.addFocusState();
      }
    } else if (this._isSelectMultipleElement) {
      if (targetIsInput) {
        this.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown

        containerOuter.addFocusState();
      }
    } else {
      containerOuter.addFocusState();

      if (targetIsInput) {
        this.showDropdown(true);
      }
    }
  };

  Choices.prototype._onBlur = function (_a) {
    var target = _a.target;
    var containerOuter = this.containerOuter;
    var blurWasWithinContainer = target && containerOuter.element.contains(target);

    if (blurWasWithinContainer && !this._isScrollingOnIe) {
      if (target === this.input.element) {
        containerOuter.removeFocusState();
        this.hideDropdown(true);

        if (this._isTextElement || this._isSelectMultipleElement) {
          this.unhighlightAll();
        }
      } else if (target === this.containerOuter.element) {
        // Remove the focus state when the past outerContainer was the target
        containerOuter.removeFocusState();
      }
    } else {
      // On IE11, clicking the scollbar blurs our input and thus
      // closes the dropdown. To stop this, we refocus our input
      // if we know we are on IE *and* are scrolling.
      this._isScrollingOnIe = false;
      this.input.element.focus();
    }
  };

  Choices.prototype._onFormReset = function () {
    var _this = this;

    this._store.withTxn(function () {
      _this.clearInput();

      _this.hideDropdown();

      _this.refresh(false, false, true);

      if (_this._initialItems.length) {
        _this.setChoiceByValue(_this._initialItems);
      }
    });
  };

  Choices.prototype._highlightChoice = function (el) {
    if (el === void 0) {
      el = null;
    }

    var choices = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier));

    if (!choices.length) {
      return;
    }

    var passedEl = el;
    var highlightedState = this.config.classNames.highlightedState;
    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(getClassNamesSelector(highlightedState))); // Remove any highlighted choices

    highlightedChoices.forEach(function (choice) {
      removeClassesFromElement(choice, highlightedState);
      choice.setAttribute('aria-selected', 'false');
    });

    if (passedEl) {
      this._highlightPosition = choices.indexOf(passedEl);
    } else {
      // Highlight choice based on last known highlight location
      if (choices.length > this._highlightPosition) {
        // If we have an option to highlight
        passedEl = choices[this._highlightPosition];
      } else {
        // Otherwise highlight the option before
        passedEl = choices[choices.length - 1];
      }

      if (!passedEl) {
        passedEl = choices[0];
      }
    }

    addClassesToElement(passedEl, highlightedState);
    passedEl.setAttribute('aria-selected', 'true');
    this.passedElement.triggerEvent(EventType.highlightChoice, {
      el: passedEl
    });

    if (this.dropdown.isActive) {
      // IE11 ignores aria-label and blocks virtual keyboard
      // if aria-activedescendant is set without a dropdown
      this.input.setActiveDescendant(passedEl.id);
      this.containerOuter.setActiveDescendant(passedEl.id);
    }
  };

  Choices.prototype._addItem = function (item, withEvents, userTriggered) {
    if (withEvents === void 0) {
      withEvents = true;
    }

    if (userTriggered === void 0) {
      userTriggered = false;
    }

    if (!item.id) {
      throw new TypeError('item.id must be set before _addItem is called for a choice/item');
    }

    if (this.config.singleModeForMultiSelect || this._isSelectOneElement) {
      this.removeActiveItems(item.id);
    }

    this._store.dispatch(addItem(item));

    if (withEvents) {
      this.passedElement.triggerEvent(EventType.addItem, this._getChoiceForOutput(item));

      if (userTriggered) {
        this.passedElement.triggerEvent(EventType.choice, this._getChoiceForOutput(item));
      }
    }
  };

  Choices.prototype._removeItem = function (item) {
    if (!item.id) {
      return;
    }

    this._store.dispatch(removeItem$1(item));

    var notice = this._notice;

    if (notice && notice.type === NoticeTypes.noChoices) {
      this._clearNotice();
    }

    this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(item));
  };

  Choices.prototype._addChoice = function (choice, withEvents, userTriggered) {
    if (withEvents === void 0) {
      withEvents = true;
    }

    if (userTriggered === void 0) {
      userTriggered = false;
    }

    if (choice.id) {
      throw new TypeError('Can not re-add a choice which has already been added');
    }

    var config = this.config;

    if ((this._isSelectElement || !config.duplicateItemsAllowed) && this._store.choices.find(function (c) {
      return config.valueComparer(c.value, choice.value);
    })) {
      return;
    } // Generate unique id, in-place update is required so chaining _addItem works as expected


    this._lastAddedChoiceId++;
    choice.id = this._lastAddedChoiceId;
    choice.elementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choice.id);
    var prependValue = config.prependValue,
        appendValue = config.appendValue;

    if (prependValue) {
      choice.value = prependValue + choice.value;
    }

    if (appendValue) {
      choice.value += appendValue.toString();
    }

    if ((prependValue || appendValue) && choice.element) {
      choice.element.value = choice.value;
    }

    this._clearNotice();

    this._store.dispatch(addChoice(choice));

    if (choice.selected) {
      this._addItem(choice, withEvents, userTriggered);
    }
  };

  Choices.prototype._addGroup = function (group, withEvents) {
    var _this = this;

    if (withEvents === void 0) {
      withEvents = true;
    }

    if (group.id) {
      throw new TypeError('Can not re-add a group which has already been added');
    }

    this._store.dispatch(addGroup(group));

    if (!group.choices) {
      return;
    } // add unique id for the group(s), and do not store the full list of choices in this group


    this._lastAddedGroupId++;
    group.id = this._lastAddedGroupId;
    group.choices.forEach(function (item) {
      item.group = group;

      if (group.disabled) {
        item.disabled = true;
      }

      _this._addChoice(item, withEvents);
    });
  };

  Choices.prototype._createTemplates = function () {
    var _this = this;

    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
    var userTemplates = {};

    if (typeof callbackOnCreateTemplates === 'function') {
      userTemplates = callbackOnCreateTemplates.call(this, strToEl, escapeForTemplate, getClassNames);
    }

    var templating = {};
    Object.keys(this._templates).forEach(function (name) {
      if (name in userTemplates) {
        templating[name] = userTemplates[name].bind(_this);
      } else {
        templating[name] = _this._templates[name].bind(_this);
      }
    });
    this._templates = templating;
  };

  Choices.prototype._createElements = function () {
    var templating = this._templates;

    var _a = this,
        config = _a.config,
        isSelectOneElement = _a._isSelectOneElement;

    var position = config.position,
        classNames = config.classNames;
    var elementType = this._elementType;
    this.containerOuter = new Container({
      element: templating.containerOuter(config, this._direction, this._isSelectElement, isSelectOneElement, config.searchEnabled, elementType, config.labelId),
      classNames: classNames,
      type: elementType,
      position: position
    });
    this.containerInner = new Container({
      element: templating.containerInner(config),
      classNames: classNames,
      type: elementType,
      position: position
    });
    this.input = new Input({
      element: templating.input(config, this._placeholderValue),
      classNames: classNames,
      type: elementType,
      preventPaste: !config.paste
    });
    this.choiceList = new List({
      element: templating.choiceList(config, isSelectOneElement)
    });
    this.itemList = new List({
      element: templating.itemList(config, isSelectOneElement)
    });
    this.dropdown = new Dropdown({
      element: templating.dropdown(config),
      classNames: classNames,
      type: elementType
    });
  };

  Choices.prototype._createStructure = function () {
    var _a = this,
        containerInner = _a.containerInner,
        containerOuter = _a.containerOuter,
        passedElement = _a.passedElement;

    var dropdownElement = this.dropdown.element; // Hide original element

    passedElement.conceal(); // Wrap input in container preserving DOM ordering

    containerInner.wrap(passedElement.element); // Wrapper inner container with outer container

    containerOuter.wrap(containerInner.element);

    if (this._isSelectOneElement) {
      this.input.placeholder = this.config.searchPlaceholderValue || '';
    } else {
      if (this._placeholderValue) {
        this.input.placeholder = this._placeholderValue;
      }

      this.input.setWidth();
    }

    containerOuter.element.appendChild(containerInner.element);
    containerOuter.element.appendChild(dropdownElement);
    containerInner.element.appendChild(this.itemList.element);
    dropdownElement.appendChild(this.choiceList.element);

    if (!this._isSelectOneElement) {
      containerInner.element.appendChild(this.input.element);
    } else if (this.config.searchEnabled) {
      dropdownElement.insertBefore(this.input.element, dropdownElement.firstChild);
    }

    this._highlightPosition = 0;
    this._isSearching = false;
  };

  Choices.prototype._initStore = function () {
    var _this = this;

    this._store.subscribe(this._render).withTxn(function () {
      _this._addPredefinedChoices(_this._presetChoices, _this._isSelectOneElement && !_this._hasNonChoicePlaceholder, false);
    });

    if (!this._store.choices.length || this._isSelectOneElement && this._hasNonChoicePlaceholder) {
      this._render();
    }
  };

  Choices.prototype._addPredefinedChoices = function (choices, selectFirstOption, withEvents) {
    var _this = this;

    if (selectFirstOption === void 0) {
      selectFirstOption = false;
    }

    if (withEvents === void 0) {
      withEvents = true;
    }

    if (selectFirstOption) {
      /**
       * If there is a selected choice already or the choice is not the first in
       * the array, add each choice normally.
       *
       * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
       */
      var noSelectedChoices = choices.findIndex(function (choice) {
        return choice.selected;
      }) === -1;

      if (noSelectedChoices) {
        choices.some(function (choice) {
          if (choice.disabled || 'choices' in choice) {
            return false;
          }

          choice.selected = true;
          return true;
        });
      }
    }

    choices.forEach(function (item) {
      if ('choices' in item) {
        if (_this._isSelectElement) {
          _this._addGroup(item, withEvents);
        }
      } else {
        _this._addChoice(item, withEvents);
      }
    });
  };

  Choices.prototype._findAndSelectChoiceByValue = function (value, userTriggered) {
    var _this = this;

    if (userTriggered === void 0) {
      userTriggered = false;
    } // Check 'value' property exists and the choice isn't already selected


    var foundChoice = this._store.choices.find(function (choice) {
      return _this.config.valueComparer(choice.value, value);
    });

    if (foundChoice && !foundChoice.disabled && !foundChoice.selected) {
      this._addItem(foundChoice, true, userTriggered);

      return true;
    }

    return false;
  };

  Choices.prototype._generatePlaceholderValue = function () {
    var config = this.config;

    if (!config.placeholder) {
      return null;
    }

    if (this._hasNonChoicePlaceholder) {
      return config.placeholderValue;
    }

    if (this._isSelectElement) {
      var placeholderOption = this.passedElement.placeholderOption;
      return placeholderOption ? placeholderOption.text : null;
    }

    return null;
  };

  Choices.prototype._warnChoicesInitFailed = function (caller) {
    if (this.config.silent) {
      return;
    }

    if (!this.initialised) {
      throw new TypeError("".concat(caller, " called on a non-initialised instance of Choices"));
    } else if (!this.initialisedOK) {
      throw new TypeError("".concat(caller, " called for an element which has multiple instances of Choices initialised on it"));
    }
  };

  Choices.version = '11.0.3';
  return Choices;
}();



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);

var content = __webpack_require__(25);

content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {};
options.insert = "head";
options.singleton = false;
var update = api(content, options);
module.exports = content.locals || {};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(27);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};








var DEBOUNCED_CHANGE_MS = 300;

function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"]), flatpickr.defaultConfig),
    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"];
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;

  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function (month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }

        if (yr === void 0) {
          yr = self.currentYear;
        }

        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }

  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();

    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }

      updateValue(false);
    }

    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!self.isMobile && isSafari) {
      positionCalendar();
    }

    triggerEvent("onReady");
  }

  function getClosestActiveElement() {
    var _a;

    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }

  function bindToInstance(fn) {
    return fn.bind(self);
  }

  function setCalendarWidth() {
    var config = self.config;

    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }

  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }

    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }

    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();

    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }

  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(amPM === self.l10n.amPM[1]);
  }

  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;

      default:
        return hour % 12;
    }
  }

  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
        minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
        seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }

    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

    if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
      var minBound = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(hours, minutes, seconds);

      if (currentTime > maxBound && currentTime < minBound) {
        var result = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["parseSeconds"])(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }
    }

    setHours(hours, minutes, seconds);
  }

  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;

    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }

    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(!self.config.time_24hr ? (12 + hours) % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours % 12 === 0) : hours);
    self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(seconds);
  }

  function onYearInput(event) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);

    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }

  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(function (ev) {
      return bind(element, ev, handler, options);
    });
    if (element instanceof Array) return element.forEach(function (el) {
      return bind(el, event, handler, options);
    });
    element.addEventListener(event, handler, options);

    self._handlers.push({
      remove: function () {
        return element.removeEventListener(event, handler, options);
      }
    });
  }

  function triggerChange() {
    triggerEvent("onChange");
  }

  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function (evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
          return bind(el, "click", self[evt]);
        });
      });
    }

    if (self.isMobile) {
      setupMobile();
      return;
    }

    var debouncedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(onResize, 50);
    self._debouncedChange = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
      if (self.config.mode === "range") onMouseOver(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e));
    });
    bind(self._input, "keydown", onKeyDown);

    if (self.calendarContainer !== undefined) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }

    if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });

    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }

    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }

    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function (e) {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).select();
      };

      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
        return self.secondElement && self.secondElement.select();
      });

      if (self.amPM !== undefined) {
        bind(self.amPM, "click", function (e) {
          updateTime(e);
        });
      }
    }

    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }

  function jumpToDate(jumpDate, triggerChange) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;

    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }

    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }

    self.redraw();
  }

  function timeIncrement(e) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }

  function incrementNumInput(e, delta, inputElem) {
    var target = e && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }

  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;

    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-innerContainer");

      if (self.config.weekNumbers) {
        var _a = buildWeeks(),
            weekWrapper = _a.weekWrapper,
            weekNumbers = _a.weekNumbers;

        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }

      self.rContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());

      if (!self.daysContainer) {
        self.daysContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }

      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }

    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rangeMode", self.config.mode === "range");
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "animate", self.config.animate === true);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }

      if (self.config.static) {
        var wrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }

    if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }

  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true),
        dayElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

    if (className.indexOf("hidden") === -1 && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }

    if (dateIsEnabled) {
      dayElement.tabIndex = -1;

      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;

        if (self.config.mode === "range") {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "startRange", self.selectedDates[0] && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0], true) === 0);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "endRange", self.selectedDates[1] && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }

    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }

    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }

    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }

  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }

  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;

    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;

      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }

    return undefined;
  }

  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;

    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;

      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }

    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }

  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }

  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year),
        days = window.document.createDocumentFragment(),
        isMultiMonth = self.config.showMonths > 1,
        prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
        nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth,
        dayIndex = 0;

    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }

    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }

    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }

    var dayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }

  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.daysContainer);
    if (self.weekNumbers) Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekNumbers);
    var frag = document.createDocumentFragment();

    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }

    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;

    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }

  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

    var shouldBuildMonth = function (month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }

      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };

    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";

    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      var month = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;

      if (self.currentMonth === i) {
        month.selected = true;
      }

      self.monthsDropdownContainer.appendChild(month);
    }
  }

  function buildMonth() {
    var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;

    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "cur-month");
    } else {
      self.monthsDropdownContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function (e) {
        var target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }

    var yearInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }

    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }

    var currentMonth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container: container,
      yearElement: yearElement,
      monthElement: monthElement
    };
  }

  function buildMonths() {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);

    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }

    for (var m = self.config.showMonths; m--;) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }

    self.monthNav.appendChild(self.nextMonthNav);
  }

  function buildMonthNav() {
    self.monthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function () {
        return self.__hidePrevMonthArrow;
      },
      set: function (bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function () {
        return self.__hideNextMonthArrow;
      },
      set: function (bool) {
        if (self.__hideNextMonthArrow !== bool) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }

  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
    self.timeContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":");
    var hourInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }

    if (!self.config.time_24hr) {
      self.amPM = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-am-pm", self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }

    return self.timeContainer;
  }

  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdays");else Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekdayContainer);

    for (var i = self.config.showMonths; i--;) {
      var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }

    updateWeekdays();
    return self.weekdayContainer;
  }

  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }

    var firstDayOfWeek = self.l10n.firstDayOfWeek;

    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);

    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }

    for (var i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }

  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper: weekWrapper,
      weekNumbers: weekNumbers
    };
  }

  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }

    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;

    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }

  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }

    if (toInitial === void 0) {
      toInitial = true;
    }

    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;

    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }

    if (self.config.enableTime === true) {
      var _a = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config),
          hours = _a.hours,
          minutes = _a.minutes,
          seconds = _a.seconds;

      setHours(hours, minutes, seconds);
    }

    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }

  function close() {
    self.isOpen = false;

    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }

      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }

    triggerEvent("onClose");
  }

  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");

    for (var i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }

    self._handlers = [];

    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }

    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }

    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }

    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }

  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }

  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
        return elem.contains(eventTarget_1);
      });

      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }

        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }

        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
      }
    }
  }

  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear,
        isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;

    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }

    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }

  function isEnabled(date, timeless) {
    var _a;

    if (timeless === void 0) {
      timeless = true;
    }

    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    var bool = !!self.config.enable,
        array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }

    return !bool;
  }

  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }

  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();

    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }

  function onKeyDown(e) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;

    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);

          break;

        case 27:
          e.preventDefault();
          focusAndClose();
          break;

        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }

          break;

        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();

            if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();

          break;

        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;

          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);

            self._debouncedChange();
          }

          break;

        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);

            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();

              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();

            self._input.focus();
          }

          break;

        default:
          break;
      }
    }

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;

        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }

    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }

  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }

    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
        initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
        rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
        rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0,
        maxRange = 0;

    for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__["duration"].DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }

    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function (dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function (c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange) return;

      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
        dayElem.classList.remove(c);
      });

      if (elem !== undefined) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["isBetween"])(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
      }
    });
  }

  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }

  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }

    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);

        if (eventTarget) {
          eventTarget.blur();
        }
      }

      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }

      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }

    var wasOpen = self.isOpen;
    self.isOpen = true;

    if (!wasOpen) {
      self.calendarContainer.classList.add("open");

      self._input.classList.add("active");

      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }

    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function () {
          return self.hourElement.select();
        }, 50);
      }
    }
  }

  function minMaxDateSetter(type) {
    return function (date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }

      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function (d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }

      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }

  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);

    var formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function () {
        return self.config._enable;
      },
      set: function (dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function () {
        return self.config._disable;
      },
      set: function (dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";

    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }

    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }

    Object.defineProperty(self.config, "minDate", {
      get: function () {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function () {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });

    var minMaxTimeSetter = function (type) {
      return function (val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };

    Object.defineProperty(self.config, "minTime", {
      get: function () {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function () {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });

    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }

    Object.assign(self.config, formats, userConfig);

    for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

    _types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].filter(function (hook) {
      return self.config[hook] !== undefined;
    }).forEach(function (hook) {
      self.config[hook] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};

      for (var key in pluginConf) {
        if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(key) > -1) {
          self.config[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }

    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }

    triggerEvent("onParseConfig");
  }

  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }

  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].M = "(" + self.l10n.months.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].F = "(" + self.l10n.months.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }

    self.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])(self);
    self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({
      config: self.config,
      l10n: self.l10n
    });
  }

  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }

    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
      return acc + child.offsetHeight;
    }, 0),
        calendarWidth = self.calendarContainer.offsetWidth,
        configPos = self.config.position.split(" "),
        configPosVertical = configPos[0],
        configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
        inputBounds = positionElement.getBoundingClientRect(),
        distanceFromBottom = window.innerHeight - inputBounds.bottom,
        showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowTop", !showOnTop);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;

    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowCenter", isCenter);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = top + "px";

    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", false);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }

  function getDocumentStyleSheet() {
    var editableSheet = null;

    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules) continue;

      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }

      editableSheet = sheet;
      break;
    }

    return editableSheet != null ? editableSheet : createStyleSheet();
  }

  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }

  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }

  function focusAndClose() {
    self._input.focus();

    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }

  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();

    var isSelectable = function (day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };

    var t = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["findParent"])(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), isSelectable);
    if (t === undefined) return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }

      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }
    setHoursFromInputs();

    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();

      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      triggerEvent("onMonthChange");
    }

    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

      if (single || range) {
        focusAndClose();
      }
    }

    triggerChange();
  }

  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [function () {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);

        self._input.removeEventListener("click", self.open);
      }
    }]
  };

  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);

      for (var key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
          return x();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
        return x();
      });else if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(option) > -1) self.config[option] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(value);
    }

    self.redraw();
    updateValue(true);
  }

  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function (d) {
      return self.parseDate(d, format);
    });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;

        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        default:
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
      return a.getTime() - b.getTime();
    });
  }

  function setDate(date, triggerChange, format) {
    if (triggerChange === void 0) {
      triggerChange = false;
    }

    if (format === void 0) {
      format = self.config.dateFormat;
    }

    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();

    if (self.selectedDates.length === 0) {
      self.clear(false);
    }

    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }

  function parseDateRules(arr) {
    return arr.slice().map(function (rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };

      return rule;
    }).filter(function (x) {
      return x;
    });
  }

  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }

  function setupInputs() {
    self.input = getInputElem();

    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }

    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;

    if (self.config.altInput) {
      self.altInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }

    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }

  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }

  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }

    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";

    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}

    bind(self.mobileInput, "change", function (e) {
      self.setDate(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }

  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }

  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    var hooks = self.config[event];

    if (hooks !== undefined && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
    }

    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }

  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }

  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, date) === 0) return "" + i;
    }

    return false;
  }

  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0]) >= 0 && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1]) <= 0;
  }

  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function (yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }

      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }

  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function (dObj) {
      return self.formatDate(dObj, format);
    }).filter(function (d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }

  function updateValue(triggerChange) {
    if (triggerChange === void 0) {
      triggerChange = true;
    }

    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }

    self.input.value = getDateStr(self.config.dateFormat);

    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }

    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }

  function onMonthNavClick(e) {
    var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);

    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }

  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown",
        eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e),
        input = eventTarget;

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
    }

    var min = parseFloat(input.getAttribute("min")),
        max = parseFloat(input.getAttribute("max")),
        step = parseFloat(input.getAttribute("step")),
        curValue = parseInt(input.value, 10),
        delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;

    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement,
          isMinuteElem = input === self.minuteElement;

      if (newValue < min) {
        newValue = max + newValue + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!isHourElem) + (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(isHourElem) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }

      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
      }

      input.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(newValue);
    }
  }

  init();
  return self;
}

function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
    return x instanceof HTMLElement;
  });
  var instances = [];

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;

      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();

        node._flatpickr = undefined;
      }

      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };

  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}

var flatpickr = function (selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};

flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
  default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
};

flatpickr.localize = function (l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};

flatpickr.setDefaults = function (config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};

flatpickr.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({});
flatpickr.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"];

if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}

Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};

if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}

/* harmony default export */ __webpack_exports__["default"] = (flatpickr);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOKS", function() { return HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function (err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function (givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "english", function() { return english; });
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function (nth) {
    var s = nth % 100;
    if (s > 3 && s < 21) return "th";

    switch (s % 10) {
      case 1:
        return "st";

      case 2:
        return "nd";

      case 3:
        return "rd";

      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
/* harmony default export */ __webpack_exports__["default"] = (english);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return arrayify; });
var pad = function (number, length) {
  if (length === void 0) {
    length = 2;
  }

  return ("000" + number).slice(length * -1);
};
var int = function (bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function () {
    var _this = this;

    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function (obj) {
  return obj instanceof Array ? obj : [obj];
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNode", function() { return clearNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberInput", function() { return createNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTarget", function() { return getEventTarget; });
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"),
      numInput = createElement("input", "numInput " + inputClassName),
      arrowUp = createElement("span", "arrowUp"),
      arrowDown = createElement("span", "arrowDown");

  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }

  if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }

    return event.target;
  } catch (error) {
    return event.target;
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateFormatter", function() { return createDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateParser", function() { return createDateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTimes", function() { return compareTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateSecondsSinceMidnight", function() { return calculateSecondsSinceMidnight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSeconds", function() { return parseSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultHours", function() { return getDefaultHours; });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);



var createDateFormatter = function (_a) {
  var _b = _a.config,
      config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _b,
      _c = _a.l10n,
      l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _c,
      _d = _a.isMobile,
      isMobile = _d === void 0 ? false : _d;
  return function (dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;

    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }

    return frmt.split("").map(function (c, i, arr) {
      return _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function (_a) {
  var _b = _a.config,
      config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _b,
      _c = _a.l10n,
      l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _c;
  return function (date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return undefined;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
      var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"]).dateFormat;
      var datestr = String(date).trim();

      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0,
            ops = [];

        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;

          if (_formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token] && !escaped) {
            regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token];
            var match = new RegExp(regexStr).exec(date);

            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__["revFormat"][token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";
        }

        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        ops.forEach(function (_a) {
          var fn = _a.fn,
              val = _a.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : undefined;
      }
    }

    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return undefined;
    }

    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }

  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }

  return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = function (ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600),
      minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;

  if (config.minDate !== undefined) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();

    if (hours < minHour) {
      hours = minHour;
    }

    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }

    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }

  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthToStr", function() { return monthToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revFormat", function() { return revFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenRegex", function() { return tokenRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function() { return formats; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);


var doNothing = function () {
  return undefined;
};

var monthToStr = function (monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function (dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function (dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function (dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function (dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function (_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function (dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function (dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function (_, ISODate) {
    return new Date(ISODate);
  },
  d: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function (dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function (_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function (dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function (date) {
    return date.toISOString();
  },
  D: function (date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function (date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function (date, locale, options) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(formats.h(date, locale, options));
  },
  H: function (date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getHours());
  },
  J: function (date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function (date, locale) {
    return locale.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(date.getHours() > 11)];
  },
  M: function (date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function (date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getSeconds());
  },
  U: function (date) {
    return date.getTime() / 1000;
  },
  W: function (date, _, options) {
    return options.getWeek(date);
  },
  Y: function (date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getFullYear(), 4);
  },
  d: function (date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getDate());
  },
  h: function (date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function (date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMinutes());
  },
  j: function (date) {
    return date.getDate();
  },
  l: function (date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function (date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMonth() + 1);
  },
  n: function (date) {
    return date.getMonth() + 1;
  },
  s: function (date) {
    return date.getSeconds();
  },
  u: function (date) {
    return date.getTime();
  },
  w: function (date) {
    return date.getDay();
  },
  y: function (date) {
    return String(date.getFullYear()).substring(2);
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.assign !== "function") {
  Object.assign = function (target) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }

    var _loop_1 = function (source) {
      if (source) {
        Object.keys(source).forEach(function (key) {
          return target[key] = source[key];
        });
      }
    };

    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];

      _loop_1(source);
    }

    return target;
  };
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
    l10ns: {}
  };
  var Russian = {
    weekdays: {
      shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    },
    months: {
      shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    },
    firstDayOfWeek: 1,
    ordinal: function () {
      return "";
    },
    rangeSeparator: " — ",
    weekAbbreviation: "Нед.",
    scrollTitle: "Прокрутите для увеличения",
    toggleTitle: "Нажмите для переключения",
    amPM: ["ДП", "ПП"],
    yearAriaLabel: "Год",
    time_24hr: true
  };
  fp.l10ns.ru = Russian;
  var ru = fp.l10ns;
  exports.Russian = Russian;
  exports.default = ru;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ })
]]);