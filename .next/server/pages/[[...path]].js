module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/[[...path]].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    return locale && locale !== defaultLocale && !path.startsWith('/' + locale + '/') && path !== '/' + locale ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    return locale && (path.startsWith('/' + locale + '/') || path === '/' + locale) ? path.substr(locale.length + 1) || '/' : path;
  }

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (true) {
      var _this$locales;

      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const {
        normalizeLocalePath
      } = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = normalizeLocalePath(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        url = addBasePath(localePathResult.pathname);
      } // if the locale isn't configured hard navigate to show 404 page


      if (!((_this$locales = this.locales) == null ? void 0 : _this$locales.includes(this.locale))) {
        parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
        window.location.href = (0, _utils.formatWithValidation)(parsedAs);
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      const normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js").normalizeLocalePath;

      if (options.locale === false) {
        pathname = normalizeLocalePath(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = normalizeLocalePath(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, description, version, private, config, engines, author, repository, bugs, license, dependencies, devDependencies, scripts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"corsair\",\"description\":\"Application utilizing Sitecore JavaScript Services and Next.js\",\"version\":\"18.0.0\",\"private\":true,\"config\":{\"appName\":\"corsair\",\"rootPlaceholders\":[\"jss-header\",\"jss-main\",\"jss-footer\"],\"sitecoreConfigPath\":\"/App_Config/Include/zzz\",\"graphQLEndpointPath\":\"/sitecore/api/graph/edge\",\"language\":\"en\"},\"engines\":{\"node\":\">=8.1\",\"npm\":\">=5.6.0\",\"yarn\":\"yarn is not supported, please use npm\"},\"author\":{\"name\":\"Sitecore Corporation\",\"url\":\"https://jss.sitecore.com\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sitecore/jss.git\"},\"bugs\":{\"url\":\"https://github.com/sitecore/jss/issues\"},\"license\":\"Apache-2.0\",\"dependencies\":{\"@sitecore-jss/sitecore-jss-nextjs\":\"^18.0.0\",\"@sitecore-jss/sitecore-jss-tracking\":\"^18.0.0\",\"bootstrap\":\"^4.3.1\",\"graphql\":\"~15.4.0\",\"graphql-tag\":\"^2.11.0\",\"next\":\"^10.0.3\",\"next-localization\":\"^0.10.0\",\"nprogress\":\"~0.2.0\",\"react\":\"^17.0.1\",\"react-dom\":\"^17.0.1\",\"sass\":\"^1.43.3\"},\"devDependencies\":{\"@graphql-codegen/cli\":\"^1.19.1\",\"@graphql-codegen/plugin-helpers\":\"^1.18.1\",\"@graphql-codegen/typed-document-node\":\"^1.18.4\",\"@graphql-codegen/typescript\":\"^1.21.1\",\"@graphql-codegen/typescript-operations\":\"^1.17.9\",\"@graphql-codegen/typescript-resolvers\":\"^1.17.10\",\"@graphql-typed-document-node/core\":\"^3.1.0\",\"@sitecore-jss/sitecore-jss-cli\":\"^18.0.0\",\"@sitecore-jss/sitecore-jss-dev-tools\":\"^18.0.0\",\"@sitecore-jss/sitecore-jss-manifest\":\"^18.0.0\",\"@types/node\":\"^14.6.4\",\"@types/nprogress\":\"^0.2.0\",\"@types/react\":\"^17.0.0\",\"@types/react-dom\":\"^17.0.0\",\"@typescript-eslint/eslint-plugin\":\"^4.7.0\",\"@typescript-eslint/parser\":\"^4.7.0\",\"axios\":\"^0.21.1\",\"chalk\":\"~2.4.2\",\"chokidar\":\"~3.1.1\",\"constant-case\":\"^3.0.4\",\"cross-env\":\"~6.0.3\",\"eslint\":\"^7.13.0\",\"eslint-config-prettier\":\"^6.15.0\",\"eslint-plugin-prettier\":\"^3.1.4\",\"eslint-plugin-react\":\"^7.21.5\",\"eslint-plugin-yaml\":\"^0.2.0\",\"graphql-let\":\"^0.16.2\",\"npm-run-all\":\"~4.1.5\",\"prettier\":\"^2.1.2\",\"ts-node\":\"^9.0.0\",\"typescript\":\"^4.0.2\",\"yaml-loader\":\"^0.6.0\"},\"scripts\":{\"jss\":\"jss\",\"lint\":\"eslint ./src/**/*.tsx ./src/**/*.ts ./sitecore/definitions/**/*.ts ./scripts/**/*.ts ./data/**/*.yml\",\"bootstrap\":\"ts-node --project tsconfig.scripts.json scripts/bootstrap.ts && graphql-let\",\"build\":\"npm-run-all --serial bootstrap next:build\",\"graphql:update\":\"ts-node --project tsconfig.scripts.json ./scripts/fetch-graphql-introspection-data.ts\",\"next:build\":\"next build\",\"next:dev\":\"cross-env NODE_OPTIONS='--inspect' next dev\",\"next:start\":\"next start\",\"scaffold\":\"ts-node --project tsconfig.scripts.json scripts/scaffold-component.ts\",\"start:connected\":\"npm-run-all --serial bootstrap --parallel next:dev start:watch-components\",\"start\":\"cross-env-shell JSS_MODE=disconnected \\\"npm-run-all --serial bootstrap --parallel next:dev start:disconnected-proxy start:watch-components\\\"\",\"start:disconnected-proxy\":\"ts-node --project tsconfig.scripts.json ./scripts/disconnected-mode-proxy.ts\",\"start:production\":\"npm-run-all --serial bootstrap next:build next:start\",\"start:watch-components\":\"ts-node --project tsconfig.scripts.json scripts/generate-component-factory.ts --watch\"}}");

/***/ }),

/***/ "./sitecore/manifest/sitecore-import.json":
/*!************************************************!*\
  !*** ./sitecore/manifest/sitecore-import.json ***!
  \************************************************/
/*! exports provided: templates, placeholders, appName, language, renderings, wipeExisting, items, dictionary, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"templates\":[{\"name\":\"ExampleCustomRouteType\",\"fields\":[{\"name\":\"headline\",\"type\":\"Single-Line Text\"},{\"name\":\"author\",\"type\":\"Single-Line Text\"},{\"name\":\"content\",\"type\":\"Rich Text\"}],\"route\":true,\"defaultRoute\":false,\"allFields\":[{\"name\":\"headline\",\"type\":\"Single-Line Text\"},{\"name\":\"author\",\"type\":\"Single-Line Text\"},{\"name\":\"content\",\"type\":\"Rich Text\"}]},{\"name\":\"App Route\",\"fields\":[{\"name\":\"pageTitle\",\"displayName\":\"Page Title\",\"section\":\"Page Metadata\",\"type\":\"Single-Line Text\"}],\"insertOptions\":[\"App Route\"],\"route\":false,\"defaultRoute\":true},{\"name\":\"Styleguide-ContentList-Item-Template\",\"fields\":[{\"name\":\"textField\",\"type\":\"Single-Line Text\"}],\"route\":false,\"defaultRoute\":false,\"allFields\":[{\"name\":\"textField\",\"type\":\"Single-Line Text\"}]},{\"name\":\"Styleguide-Explanatory-Component\",\"id\":\"styleguide-explanatory-component-template\",\"fields\":[{\"name\":\"heading\",\"type\":\"Single-Line Text\"},{\"name\":\"description\",\"type\":\"Rich Text\"}],\"route\":false,\"defaultRoute\":false},{\"name\":\"Styleguide-ItemLink-Item-Template\",\"fields\":[{\"name\":\"textField\",\"type\":\"Single-Line Text\"}],\"route\":false,\"defaultRoute\":false,\"allFields\":[{\"name\":\"textField\",\"type\":\"Single-Line Text\"}]},{\"name\":\"ContentBlock\",\"displayName\":\"Content Block\",\"icon\":\"Office/16x16/document_tag.png\",\"fields\":[{\"name\":\"heading\",\"type\":\"Single-Line Text\"},{\"name\":\"content\",\"type\":\"Rich Text\"}],\"allFields\":[{\"name\":\"heading\",\"type\":\"Single-Line Text\"},{\"name\":\"content\",\"type\":\"Rich Text\"}]},{\"name\":\"Styleguide-FieldUsage-Checkbox\",\"icon\":\"Office/16x16/checkbox_selected.png\",\"fields\":[{\"name\":\"checkbox\",\"type\":\"Checkbox\"},{\"name\":\"checkbox2\",\"type\":\"Checkbox\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"checkbox\",\"type\":\"Checkbox\"},{\"name\":\"checkbox2\",\"type\":\"Checkbox\"}]},{\"name\":\"Styleguide-FieldUsage-ContentList\",\"icon\":\"Office/16x16/list_style_numbered.png\",\"fields\":[{\"name\":\"sharedContentList\",\"type\":\"Treelist\",\"source\":\"dataSource=/sitecore/content/corsair/Content/Styleguide/ContentListField\"},{\"name\":\"localContentList\",\"type\":\"Treelist\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sharedContentList\",\"type\":\"Treelist\",\"source\":\"dataSource=/sitecore/content/corsair/Content/Styleguide/ContentListField\"},{\"name\":\"localContentList\",\"type\":\"Treelist\"}]},{\"name\":\"Styleguide-FieldUsage-Custom\",\"icon\":\"Office/16x16/gearwheel.png\",\"fields\":[{\"name\":\"customIntField\",\"type\":\"Integer\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"customIntField\",\"type\":\"Integer\"}]},{\"name\":\"Styleguide-FieldUsage-Date\",\"icon\":\"Office/16x16/clock.png\",\"fields\":[{\"name\":\"date\",\"type\":\"Date\"},{\"name\":\"dateTime\",\"type\":\"Datetime\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"date\",\"type\":\"Date\"},{\"name\":\"dateTime\",\"type\":\"Datetime\"}]},{\"name\":\"Styleguide-FieldUsage-File\",\"icon\":\"Office/16x16/floppy_disk.png\",\"fields\":[{\"name\":\"file\",\"type\":\"File\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"file\",\"type\":\"File\"}]},{\"name\":\"Styleguide-FieldUsage-Image\",\"icon\":\"Office/16x16/photo_portrait.png\",\"fields\":[{\"name\":\"sample1\",\"type\":\"Image\"},{\"name\":\"sample2\",\"type\":\"Image\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sample1\",\"type\":\"Image\"},{\"name\":\"sample2\",\"type\":\"Image\"}]},{\"name\":\"Styleguide-FieldUsage-ItemLink\",\"icon\":\"Office/16x16/link.png\",\"fields\":[{\"name\":\"sharedItemLink\",\"type\":\"Droptree\",\"source\":\"dataSource=/sitecore/content/corsair/Content/Styleguide/ItemLinkField\"},{\"name\":\"localItemLink\",\"type\":\"Droptree\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sharedItemLink\",\"type\":\"Droptree\",\"source\":\"dataSource=/sitecore/content/corsair/Content/Styleguide/ItemLinkField\"},{\"name\":\"localItemLink\",\"type\":\"Droptree\"}]},{\"name\":\"Styleguide-FieldUsage-Link\",\"icon\":\"Office/16x16/link.png\",\"fields\":[{\"name\":\"externalLink\",\"type\":\"General Link\"},{\"name\":\"internalLink\",\"type\":\"General Link\"},{\"name\":\"emailLink\",\"type\":\"General Link\"},{\"name\":\"paramsLink\",\"type\":\"General Link\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"externalLink\",\"type\":\"General Link\"},{\"name\":\"internalLink\",\"type\":\"General Link\"},{\"name\":\"emailLink\",\"type\":\"General Link\"},{\"name\":\"paramsLink\",\"type\":\"General Link\"}]},{\"name\":\"Styleguide-FieldUsage-Number\",\"icon\":\"Office/16x16/numbers_field.png\",\"fields\":[{\"name\":\"sample\",\"type\":\"Number\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sample\",\"type\":\"Number\"}]},{\"name\":\"Styleguide-FieldUsage-RichText\",\"icon\":\"Office/16x16/text_field.png\",\"fields\":[{\"name\":\"sample\",\"type\":\"Rich Text\"},{\"name\":\"sample2\",\"displayName\":\"Customize Name Shown in Sitecore\",\"required\":true,\"type\":\"Rich Text\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sample\",\"type\":\"Rich Text\"},{\"name\":\"sample2\",\"displayName\":\"Customize Name Shown in Sitecore\",\"required\":true,\"type\":\"Rich Text\"}]},{\"name\":\"Styleguide-FieldUsage-Text\",\"icon\":\"Office/16x16/text.png\",\"fields\":[{\"name\":\"sample\",\"type\":\"Single-Line Text\"},{\"name\":\"sample2\",\"displayName\":\"Customize Name Shown in Sitecore\",\"required\":true,\"type\":\"Single-Line Text\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sample\",\"type\":\"Single-Line Text\"},{\"name\":\"sample2\",\"displayName\":\"Customize Name Shown in Sitecore\",\"required\":true,\"type\":\"Single-Line Text\"}]},{\"name\":\"GraphQL-ConnectedDemo\",\"icon\":\"Office/16x16/graph_connection_directed.png\",\"fields\":[{\"name\":\"sample1\",\"type\":\"Single-Line Text\"},{\"name\":\"sample2\",\"type\":\"General Link\"}],\"allFields\":[{\"name\":\"sample1\",\"type\":\"Single-Line Text\"},{\"name\":\"sample2\",\"type\":\"General Link\"}]},{\"name\":\"GraphQL-IntegratedDemo\",\"icon\":\"Office/16x16/graph_connection_directed.png\",\"fields\":[{\"name\":\"sample1\",\"type\":\"Single-Line Text\"},{\"name\":\"sample2\",\"type\":\"General Link\"}],\"allFields\":[{\"name\":\"sample1\",\"type\":\"Single-Line Text\"},{\"name\":\"sample2\",\"type\":\"General Link\"}]},{\"name\":\"Styleguide-ComponentParams\",\"icon\":\"Office/16x16/window_dialog.png\",\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[]},{\"name\":\"Styleguide-Layout-Reuse\",\"icon\":\"Office/16x16/documents_exchange.png\",\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[]},{\"name\":\"Styleguide-Layout-Tabs-Tab\",\"icon\":\"Office/16x16/tab_pane.png\",\"fields\":[{\"name\":\"title\",\"type\":\"Single-Line Text\"},{\"name\":\"content\",\"type\":\"Rich Text\"}],\"allFields\":[{\"name\":\"title\",\"type\":\"Single-Line Text\"},{\"name\":\"content\",\"type\":\"Rich Text\"}]},{\"name\":\"Styleguide-Layout-Tabs\",\"icon\":\"Office/16x16/document_tag.png\",\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[]},{\"name\":\"Styleguide-Multilingual\",\"icon\":\"Office/16x16/flag_generic.png\",\"fields\":[{\"name\":\"sample\",\"type\":\"Single-Line Text\",\"displayName\":\"This field has a translated value\"}],\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[{\"name\":\"sample\",\"type\":\"Single-Line Text\",\"displayName\":\"This field has a translated value\"}]},{\"name\":\"Styleguide-RouteFields\",\"icon\":\"Office/16x16/text_field.png\",\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[]},{\"name\":\"Styleguide-Section\",\"icon\":\"Office/16x16/document_tag.png\",\"fields\":[{\"name\":\"heading\",\"type\":\"Single-Line Text\"}],\"allFields\":[{\"name\":\"heading\",\"type\":\"Single-Line Text\"}]},{\"name\":\"Styleguide-SitecoreContext\",\"icon\":\"Office/16x16/control_panel.png\",\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[]},{\"name\":\"Styleguide-Tracking\",\"icon\":\"Office/16x16/compass.png\",\"inherits\":[\"styleguide-explanatory-component-template\"],\"allFields\":[]}],\"placeholders\":[{\"name\":\"jss-main\",\"displayName\":\"Main\"},{\"name\":\"jss-tabs\",\"displayName\":\"Tabs\",\"id\":\"tabs-placeholder\"},{\"name\":\"jss-graphql-layout\"},{\"name\":\"jss-styleguide-layout\"},{\"name\":\"jss-styleguide-section\"},{\"name\":\"jss-header\"},{\"name\":\"jss-reuse-example\"},{}],\"appName\":\"corsair\",\"language\":\"en\",\"renderings\":[{\"name\":\"ContentBlock\",\"displayName\":\"Content Block\",\"icon\":\"Office/16x16/document_tag.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"ContentBlock\"},{\"name\":\"Styleguide-FieldUsage-Checkbox\",\"icon\":\"Office/16x16/checkbox_selected.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Checkbox\"},{\"name\":\"Styleguide-FieldUsage-ContentList\",\"icon\":\"Office/16x16/list_style_numbered.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-ContentList\"},{\"name\":\"Styleguide-FieldUsage-Custom\",\"icon\":\"Office/16x16/gearwheel.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Custom\"},{\"name\":\"Styleguide-FieldUsage-Date\",\"icon\":\"Office/16x16/clock.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Date\"},{\"name\":\"Styleguide-FieldUsage-File\",\"icon\":\"Office/16x16/floppy_disk.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-File\"},{\"name\":\"Styleguide-FieldUsage-Image\",\"icon\":\"Office/16x16/photo_portrait.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Image\"},{\"name\":\"Styleguide-FieldUsage-ItemLink\",\"icon\":\"Office/16x16/link.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-ItemLink\"},{\"name\":\"Styleguide-FieldUsage-Link\",\"icon\":\"Office/16x16/link.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Link\"},{\"name\":\"Styleguide-FieldUsage-Number\",\"icon\":\"Office/16x16/numbers_field.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Number\"},{\"name\":\"Styleguide-FieldUsage-RichText\",\"icon\":\"Office/16x16/text_field.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-RichText\"},{\"name\":\"Styleguide-FieldUsage-Text\",\"icon\":\"Office/16x16/text.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-FieldUsage-Text\"},{\"name\":\"GraphQL-ConnectedDemo\",\"icon\":\"Office/16x16/graph_connection_directed.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"GraphQL-ConnectedDemo\"},{\"name\":\"GraphQL-IntegratedDemo\",\"icon\":\"Office/16x16/graph_connection_directed.png\",\"graphQLQuery\":\"# This file contains a GraphQL query that will be executed and the result provided to\\n# your JSS component. You can run this query in GraphiQL ($endpoint/ui) for a nice editing experience.\\n\\n# Note that we're executing _two queries_ (datasource and contextItem)\\n# within the context of the IntegratedDemoQuery _operation_. This makes it\\n# very efficient at gathering data from multiple sources.\\n\\nquery IntegratedDemoQuery($datasource: String!, $contextItem: String!, $language: String!) {\\n  # Datasource query\\n  # $datasource will always be set to the ID of the rendering's datasource item\\n  # (as long as the GraphQLData helper is used)\\n  datasource: item(path: $datasource, language: $language) {\\n    id\\n    name\\n    # Strongly-typed querying on known templates is possible!\\n    ...on GraphQLIntegratedDemo {\\n      # Single-line text field\\n      sample1 {\\n        # the 'jsonValue' field is a JSON blob that represents the object that\\n        # should be passed to JSS field rendering helpers (i.e. text, image, link)\\n        jsonValue\\n        value\\n      }\\n      # General Link field\\n      sample2 {\\n        jsonValue\\n        # Structured querying of the field's values is possible\\n        text\\n        target\\n        url\\n        # Access to the template definition is possible\\n        definition {\\n          type\\n          shared\\n        }\\n      }\\n    }\\n  }\\n\\n  # Context/route item query\\n  # $contextItem will always be set to the ID of the current context item (the route item)\\n  # (as long as the GraphQLData helper is used)\\n  contextItem: item(path: $contextItem, language: $language) {\\n    id\\n    # Get the page title from the app route template\\n    ...on AppRoute {\\n      pageTitle {\\n        value\\n      }\\n    }\\n\\n    # List the children of the current route\\n    children(hasLayout: true) {\\n      results {\\n        id\\n        # typing fragments can be used anywhere!\\n        # so in this case, we're grabbing the 'pageTitle'\\n        # field on all child route items.\\n        ...on AppRoute {\\n          pageTitle {\\n            jsonValue\\n            value\\n          }\\n        }\\n        url{\\n          path\\n        }\\n      }\\n    }\\n  }\\n}\\n\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"GraphQL-IntegratedDemo\"},{\"name\":\"GraphQL-Layout\",\"icon\":\"Office/16x16/layout.png\",\"exposedPlaceholders\":[\"jss-graphql-layout\"],\"dataSourceTemplate\":\"\"},{\"name\":\"Styleguide-ComponentParams\",\"icon\":\"Office/16x16/window_dialog.png\",\"params\":[{\"name\":\"cssClass\",\"type\":\"Single-Line Text\"},{\"name\":\"columns\",\"type\":\"Single-Line Text\"},{\"name\":\"useCallToAction\",\"type\":\"Single-Line Text\"}],\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-ComponentParams\"},{\"name\":\"Styleguide-CustomRouteType\",\"icon\":\"Office/16x16/document_tag.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"\"},{\"name\":\"Styleguide-Layout-Reuse\",\"icon\":\"Office/16x16/documents_exchange.png\",\"exposedPlaceholders\":[\"jss-reuse-example\"],\"dataSourceTemplate\":\"Styleguide-Layout-Reuse\"},{\"name\":\"Styleguide-Layout-Tabs-Tab\",\"icon\":\"Office/16x16/tab_pane.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-Layout-Tabs-Tab\"},{\"name\":\"Styleguide-Layout-Tabs\",\"icon\":\"Office/16x16/document_tag.png\",\"exposedPlaceholders\":[\"jss-tabs\"],\"dataSourceTemplate\":\"Styleguide-Layout-Tabs\"},{\"name\":\"Styleguide-Layout\",\"icon\":\"Office/16x16/layout.png\",\"exposedPlaceholders\":[\"jss-styleguide-layout\"],\"dataSourceTemplate\":\"\"},{\"name\":\"Styleguide-Multilingual\",\"icon\":\"Office/16x16/flag_generic.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-Multilingual\"},{\"name\":\"Styleguide-RouteFields\",\"icon\":\"Office/16x16/text_field.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-RouteFields\"},{\"name\":\"Styleguide-Section\",\"icon\":\"Office/16x16/document_tag.png\",\"exposedPlaceholders\":[\"jss-styleguide-section\"],\"dataSourceTemplate\":\"Styleguide-Section\"},{\"name\":\"Styleguide-SitecoreContext\",\"icon\":\"Office/16x16/control_panel.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-SitecoreContext\"},{\"name\":\"Styleguide-Tracking\",\"icon\":\"Office/16x16/compass.png\",\"exposedPlaceholders\":[],\"dataSourceTemplate\":\"Styleguide-Tracking\"}],\"wipeExisting\":false,\"items\":{\"routes\":[{\"id\":\"home-page\",\"name\":\"home\",\"layout\":{\"renderings\":[{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"home-jss-main-ContentBlock-1\",\"displayName\":\"ContentBlock-1\",\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"heading\",\"value\":\"Welcome to Sitecore JSS\"},{\"name\":\"content\",\"value\":\"<p>Thanks for using JSS!! Here are some resources to get you started:</p>\\n\\n<h3><a href=\\\"https://jss.sitecore.com\\\" rel=\\\"noopener noreferrer\\\">Documentation</a></h3>\\n<p>The official JSS documentation can help you with any JSS task from getting started to advanced techniques.</p>\\n\\n<h3><a href=\\\"/styleguide\\\">Styleguide</a></h3>\\n<p>The JSS styleguide is a living example of how to use JSS, hosted right in this app.\\nIt demonstrates most of the common patterns that JSS implementations may need to use,\\nas well as useful architectural patterns.</p>\\n\\n<h3><a href=\\\"/graphql\\\">GraphQL</a></h3>\\n<p>JSS features integration with the Sitecore GraphQL API to enable fetching non-route data from Sitecore - or from other internal backends as an API aggregator or proxy.\\nThis route is a living example of how to use an integrate with GraphQL data in a JSS app.</p>\\n\\n<div class=\\\"alert alert-dark\\\">\\n  <h4>This app is a boilerplate</h4>\\n  <p>The JSS samples are a boilerplate, not a library. That means that any code in this app is meant for you to own and customize to your own requirements.</p>\\n  <p>Want to change the lint settings? Do it. Want to read manifest data from a MongoDB database? Go for it. This app is yours.</p>\\n</div>\\n\\n<div class=\\\"alert alert-dark\\\">\\n  <h4>How to start with an empty app</h4>\\n  <p>To remove all of the default sample content (the Styleguide and GraphQL routes) and start out with an empty JSS app:</p>\\n  <ol>\\n    <li>Delete <code>/src/components/Styleguide*</code> and <code>/src/components/GraphQL*</code></li>\\n    <li>Delete <code>/sitecore/definitions/components/Styleguide*</code>, <code>/sitecore/definitions/templates/Styleguide*</code>, and <code>/sitecore/definitions/components/GraphQL*</code></li>\\n    <li>Delete <code>/data/component-content/Styleguide</code></li>\\n    <li>Delete <code>/data/content/Styleguide</code></li>\\n    <li>Delete <code>/data/routes/styleguide</code> and <code>/data/routes/graphql</code></li>\\n    <li>Delete <code>/data/dictionary/*.yml</code></li>\\n  </ol>\\n</div>\\n\"}]},\"renderingParams\":[],\"uid\":\"{2C4A53CC-9DA8-5F51-9D79-6EE2FC671B2D}\"}],\"placeholders\":[\"jss-main\"]},\"fields\":[{\"name\":\"pageTitle\",\"value\":\"Welcome to Sitecore JSS\"}],\"children\":[{\"name\":\"graphql\",\"layout\":{\"renderings\":[{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"graphql-jss-main-ContentBlock-1\",\"displayName\":\"ContentBlock-1\",\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"heading\",\"value\":\"Using GraphQL with JSS\"},{\"name\":\"content\",\"value\":\"<p>This is a live example of using Integrated GraphQL and Connected GraphQL with a JSS app.\\nFor more information on GraphQL use in JSS, please see <a href=\\\"https://jss.sitecore.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">the documentation</a>.</p>\\n\"}]},\"renderingParams\":[],\"uid\":\"{FB82986A-A6CD-53FD-AA1D-BC5036B6979B}\"},{\"renderingName\":\"GraphQL-Layout\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"graphql-jss-main-GraphQL-Layout-2\",\"displayName\":\"GraphQL-Layout-2\",\"template\":\"GraphQL-Layout\",\"fields\":[]},\"renderingParams\":[],\"uid\":\"{A9FBC7CC-F00B-58A2-873B-4C70C726476C}\"},{\"renderingName\":\"GraphQL-IntegratedDemo\",\"placeholderKey\":\"/jss-main/jss-graphql-layout-{A9FBC7CC-F00B-58A2-873B-4C70C726476C}-0\",\"placeholderName\":\"jss-graphql-layout\",\"dataSource\":{\"name\":\"graphql-jss-graphql-layout-A9FBC7CC-F00B-58A2-873B-4C70C726476C-0-GraphQL-IntegratedDemo-1\",\"displayName\":\"GraphQL-IntegratedDemo-1\",\"template\":\"GraphQL-IntegratedDemo\",\"fields\":[{\"name\":\"sample1\",\"value\":\"Hello integrated GraphQL world!\"},{\"name\":\"sample2\",\"value\":{\"href\":\"https://www.sitecore.com\",\"target\":\"_blank\",\"text\":\"GraphQL lets you get structured field data too\"}}]},\"renderingParams\":[],\"uid\":\"{B6BBD1E2-C0B2-5C34-ADD3-858333393BFD}\"},{\"renderingName\":\"GraphQL-ConnectedDemo\",\"placeholderKey\":\"/jss-main/jss-graphql-layout-{A9FBC7CC-F00B-58A2-873B-4C70C726476C}-0\",\"placeholderName\":\"jss-graphql-layout\",\"dataSource\":{\"name\":\"graphql-jss-graphql-layout-A9FBC7CC-F00B-58A2-873B-4C70C726476C-0-GraphQL-ConnectedDemo-2\",\"displayName\":\"GraphQL-ConnectedDemo-2\",\"template\":\"GraphQL-ConnectedDemo\",\"fields\":[{\"name\":\"sample1\",\"value\":\"Hello connected GraphQL world!\"},{\"name\":\"sample2\",\"value\":{\"href\":\"https://www.sitecore.com\",\"target\":\"_blank\",\"text\":\"GraphQL lets you get structured field data too\"}}]},\"renderingParams\":[],\"uid\":\"{4E86EC75-DCF5-57A7-B43C-150ADD6BD099}\"}],\"placeholders\":[\"jss-main\",\"jss-graphql-layout\"]},\"fields\":[{\"name\":\"pageTitle\",\"value\":\"GraphQL | Sitecore JSS\"}],\"children\":[{\"name\":\"sample-1\",\"layout\":{\"renderings\":[{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"sample-1-jss-main-ContentBlock-1\",\"displayName\":\"ContentBlock-1\",\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"heading\",\"value\":\"GraphQL Sample 1\"},{\"name\":\"content\",\"value\":\"<p>A child route here to illustrate the power of GraphQL queries. <a href=\\\"/graphql\\\">Back to GraphQL route</a></p>\\n\"}]},\"renderingParams\":[],\"uid\":\"{9157CC8C-5760-5114-9F2D-93CBE39B30DC}\"}],\"placeholders\":[\"jss-main\"]},\"fields\":[{\"name\":\"pageTitle\",\"value\":\"Sample 1 Page Title\"}]},{\"name\":\"sample-2\",\"layout\":{\"renderings\":[{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"sample-2-jss-main-ContentBlock-1\",\"displayName\":\"ContentBlock-1\",\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"heading\",\"value\":\"GraphQL Sample 2\"},{\"name\":\"content\",\"value\":\"<p>A child route here to illustrate the power of GraphQL queries. <a href=\\\"/graphql\\\">Back to GraphQL route</a></p>\\n\"}]},\"renderingParams\":[],\"uid\":\"{5C424448-2B30-5910-ABE7-5021B762D542}\"}],\"placeholders\":[\"jss-main\"]},\"fields\":[{\"name\":\"pageTitle\",\"value\":\"Sample 2 Page Title\"}]}]},{\"name\":\"styleguide\",\"layout\":{\"renderings\":[{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"styleguide-jss-main-ContentBlock-1\",\"displayName\":\"ContentBlock-1\",\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"heading\",\"value\":\"JSS Styleguide\"},{\"name\":\"content\",\"value\":\"<p>This is a live set of examples of how to use JSS. For more information on using JSS, please see <a href=\\\"https://jss.sitecore.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">the documentation</a>.</p>\\n<p>The content and layout of this page is defined in <code>/data/routes/styleguide/en.yml</code></p>\\n\"}]},\"renderingParams\":[],\"uid\":\"{E02DDB9B-A062-5E50-924A-1940D7E053CE}\"},{\"renderingName\":\"Styleguide-Layout\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"styleguide-jss-main-Styleguide-Layout-2\",\"displayName\":\"Styleguide-Layout-2\",\"template\":\"Styleguide-Layout\",\"fields\":[]},\"renderingParams\":[],\"uid\":\"{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}\"},{\"renderingName\":\"Styleguide-Section\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0\",\"placeholderName\":\"jss-styleguide-layout\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-layout-34A6553C-81DE-5CD3-989E-853F6CB6DF8C-0-Styleguide-Section-1\",\"displayName\":\"Styleguide-Section-1\",\"template\":\"Styleguide-Section\",\"fields\":[{\"name\":\"heading\",\"value\":\"Content Data\"}]},\"renderingParams\":[],\"uid\":\"{B7C779DA-2B75-586C-B40D-081FCB864256}\"},{\"renderingName\":\"Styleguide-FieldUsage-Text\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Text-1\",\"displayName\":\"Styleguide-FieldUsage-Text-1\",\"template\":\"Styleguide-FieldUsage-Text\",\"fields\":[{\"name\":\"heading\",\"value\":\"Single-Line Text\"},{\"name\":\"sample\",\"value\":\"This is a sample text field. <mark>HTML is encoded.</mark> In Sitecore, editors will see a <input type=\\\"text\\\">.\"},{\"name\":\"sample2\",\"value\":\"This is another sample text field using rendering options. <mark>HTML supported with encode=false.</mark> Cannot edit because editable=false.\"}]},\"renderingParams\":[],\"uid\":\"{63B0C99E-DAC7-5670-9D66-C26A78000EAE}\"},{\"renderingName\":\"Styleguide-FieldUsage-Text\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Text-2\",\"displayName\":\"Styleguide-FieldUsage-Text-2\",\"template\":\"Styleguide-FieldUsage-Text\",\"fields\":[{\"name\":\"heading\",\"value\":\"Multi-Line Text\"},{\"name\":\"description\",\"value\":\"<small>Multi-line text tells Sitecore to use a <code>textarea</code> for editing; consumption in JSS is the same as single-line text.</small>\"},{\"name\":\"sample\",\"value\":\"This is a sample multi-line text field. <mark>HTML is encoded.</mark> In Sitecore, editors will see a textarea.\"},{\"name\":\"sample2\",\"value\":\"This is another sample multi-line text field using rendering options. <mark>HTML supported with encode=false.</mark>\"}]},\"renderingParams\":[],\"uid\":\"{F1EA3BB5-1175-5055-AB11-9C48BF69427A}\"},{\"renderingName\":\"Styleguide-FieldUsage-RichText\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-RichText-3\",\"displayName\":\"Styleguide-FieldUsage-RichText-3\",\"template\":\"Styleguide-FieldUsage-RichText\",\"fields\":[{\"name\":\"heading\",\"value\":\"Rich Text\"},{\"name\":\"sample\",\"value\":\"<p>This is a sample rich text field. <mark>HTML is always supported.</mark> In Sitecore, editors will see a WYSIWYG editor for these fields.</p>\"},{\"name\":\"sample2\",\"value\":\"<p>Another sample rich text field, using options. Keep markup entered in rich text fields as simple as possible - ideally bare tags only (no classes). Adding a wrapping class can help with styling within rich text blocks.</p>\\n<marquee>But you can use any valid HTML in a rich text field!</marquee>\\n\"}]},\"renderingParams\":[],\"uid\":\"{69CEBC00-446B-5141-AD1E-450B8D6EE0AD}\"},{\"renderingName\":\"Styleguide-FieldUsage-Image\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Image-4\",\"displayName\":\"Styleguide-FieldUsage-Image-4\",\"template\":\"Styleguide-FieldUsage-Image\",\"fields\":[{\"name\":\"heading\",\"value\":\"Image\"},{\"name\":\"sample1\",\"value\":{\"src\":\"/data/media/img/sc_logo.png\",\"alt\":\"Sitecore Logo\"}},{\"name\":\"sample2\",\"value\":{\"src\":\"/data/media/img/jss_logo.png\",\"alt\":\"Sitecore JSS Logo\"}}]},\"renderingParams\":[],\"uid\":\"{5630C0E6-0430-5F6A-AF9E-2D09D600A386}\"},{\"renderingName\":\"Styleguide-FieldUsage-File\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-File-5\",\"displayName\":\"Styleguide-FieldUsage-File-5\",\"template\":\"Styleguide-FieldUsage-File\",\"fields\":[{\"name\":\"heading\",\"value\":\"File\"},{\"name\":\"description\",\"value\":\"<small>Note: Sitecore does not support inline editing of File fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.</small>\\n\"},{\"name\":\"file\",\"value\":{\"src\":\"/data/media/files/jss.pdf\",\"title\":\"Example File\",\"description\":\"This data will be added to the Sitecore Media Library on import\"}}]},\"renderingParams\":[],\"uid\":\"{BAD43EF7-8940-504D-A09B-976C17A9A30C}\"},{\"renderingName\":\"Styleguide-FieldUsage-Number\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Number-6\",\"displayName\":\"Styleguide-FieldUsage-Number-6\",\"template\":\"Styleguide-FieldUsage-Number\",\"fields\":[{\"name\":\"heading\",\"value\":\"Number\"},{\"name\":\"description\",\"value\":\"<small>Number tells Sitecore to use a number entry for editing.</small>\"},{\"name\":\"sample\",\"value\":1.21}]},\"renderingParams\":[],\"uid\":\"{FF90D4BD-E50D-5BBF-9213-D25968C9AE75}\"},{\"renderingName\":\"Styleguide-FieldUsage-Checkbox\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Checkbox-7\",\"displayName\":\"Styleguide-FieldUsage-Checkbox-7\",\"template\":\"Styleguide-FieldUsage-Checkbox\",\"fields\":[{\"name\":\"heading\",\"value\":\"Checkbox\"},{\"name\":\"description\",\"value\":\"<small>Note: Sitecore does not support inline editing of Checkbox fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.</small>\\n\"},{\"name\":\"checkbox\",\"value\":true},{\"name\":\"checkbox2\",\"value\":false}]},\"renderingParams\":[],\"uid\":\"{B5C1C74A-A81D-59B2-85D8-09BC109B1F70}\"},{\"renderingName\":\"Styleguide-FieldUsage-Date\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Date-8\",\"displayName\":\"Styleguide-FieldUsage-Date-8\",\"template\":\"Styleguide-FieldUsage-Date\",\"fields\":[{\"name\":\"heading\",\"value\":\"Date\"},{\"name\":\"description\",\"value\":\"<p><small>Both <code>Date</code> and <code>DateTime</code> field types are available. Choosing <code>DateTime</code> will make Sitecore show editing UI for time; both types store complete date and time values internally. Date values in JSS are formatted using <a href=\\\"https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations\\\" target=\\\"_blank\\\">ISO 8601 formatted strings</a>, for example <code>2012-04-23T18:25:43.511Z</code>.</small></p>\\n<div class=\\\"alert alert-warning\\\"><small>Note: this is a JavaScript date format (e.g. <code>new Date().toISOString()</code>), and is different from how Sitecore stores date field values internally. Sitecore-formatted dates will not work.</small></div>\\n\"},{\"name\":\"date\",\"value\":\"2012-05-04T00:00:00Z\"},{\"name\":\"dateTime\",\"value\":\"2018-03-14T15:00:00Z\"}]},\"renderingParams\":[],\"uid\":\"{F166A7D6-9EC8-5C53-B825-33405DB7F575}\"},{\"renderingName\":\"Styleguide-FieldUsage-Link\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Link-9\",\"displayName\":\"Styleguide-FieldUsage-Link-9\",\"template\":\"Styleguide-FieldUsage-Link\",\"fields\":[{\"name\":\"heading\",\"value\":\"General Link\"},{\"name\":\"description\",\"value\":\"<p>A <em>General Link</em> is a field that represents an <code>&lt;a&gt;</code> tag.</p>\"},{\"name\":\"externalLink\",\"value\":{\"href\":\"https://www.sitecore.com\",\"text\":\"Link to Sitecore\"}},{\"name\":\"internalLink\",\"value\":{\"href\":\"/\"}},{\"name\":\"mediaLink\",\"value\":{\"href\":\"/data/media/files/jss.pdf\",\"text\":\"Link to PDF\"}},{\"name\":\"emailLink\",\"value\":{\"href\":\"mailto:foo@bar.com\",\"text\":\"Send an Email\"}},{\"name\":\"paramsLink\",\"value\":{\"href\":\"https://dev.sitecore.net\",\"text\":\"Sitecore Dev Site\",\"target\":\"_blank\",\"class\":\"font-weight-bold\",\"title\":\"<a> title attribute\"}}]},\"renderingParams\":[],\"uid\":\"{56A9562A-6813-579B-8ED2-FDDAB1BFD3D2}\"},{\"renderingName\":\"Styleguide-FieldUsage-ItemLink\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-ItemLink-10\",\"displayName\":\"Styleguide-FieldUsage-ItemLink-10\",\"template\":\"Styleguide-FieldUsage-ItemLink\",\"fields\":[{\"name\":\"heading\",\"value\":\"Item Link\"},{\"name\":\"description\",\"value\":\"<p>\\n  <small>\\n    Item Links are a way to reference another content item to use data from it.\\n    Referenced items may be shared.\\n    To reference multiple content items, use a <em>Content List</em> field.<br />\\n    <strong>Note:</strong> Sitecore does not support inline editing of Item Link fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.\\n  </small>\\n</p>\\n\"},{\"name\":\"sharedItemLink\",\"value\":{\"resolvedFromItemId\":\"styleguide-item-link-field-shared-1\",\"displayName\":\"Styleguide Item Link Item 1 (Shared)\",\"template\":\"Styleguide-ItemLink-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ItemLink Demo (Shared) Item 1 Text Field\"}],\"name\":\"Item1\"}},{\"name\":\"localItemLink\",\"value\":{\"template\":\"Styleguide-ItemLink-Item-Template\",\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-ItemLink-10-item-0\",\"displayName\":\"Styleguide-FieldUsage-ItemLink-10-item-0\",\"fields\":[{\"name\":\"textField\",\"value\":\"Referenced item textField\"}]}}]},\"renderingParams\":[],\"uid\":\"{A44AD1F8-0582-5248-9DF9-52429193A68B}\"},{\"renderingName\":\"Styleguide-FieldUsage-ContentList\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-ContentList-11\",\"displayName\":\"Styleguide-FieldUsage-ContentList-11\",\"template\":\"Styleguide-FieldUsage-ContentList\",\"fields\":[{\"name\":\"heading\",\"value\":\"Content List\"},{\"name\":\"description\",\"value\":\"<p>\\n  <small>\\n    Content Lists are a way to reference zero or more other content items.\\n    Referenced items may be shared.\\n    To reference a single content item, use an <em>Item Link</em> field.<br />\\n    <strong>Note:</strong> Sitecore does not support inline editing of Content List fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.\\n  </small>\\n</p>\\n\"},{\"name\":\"sharedContentList\",\"value\":[{\"resolvedFromItemId\":\"styleguide-content-list-field-shared-1\",\"displayName\":\"Styleguide Content List Item 1 (Shared)\",\"template\":\"Styleguide-ContentList-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ContentList Demo (Shared) Item 1 Text Field\"}],\"name\":\"Item1\"},{\"resolvedFromItemId\":\"styleguide-content-list-field-shared-2\",\"displayName\":\"Styleguide Content List Item 2 (Shared)\",\"template\":\"Styleguide-ContentList-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ContentList Demo (Shared) Item 2 Text Field\"}],\"name\":\"Item2\"}]},{\"name\":\"localContentList\",\"value\":[{\"template\":\"Styleguide-ContentList-Item-Template\",\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-ContentList-11-item-0\",\"displayName\":\"Styleguide-FieldUsage-ContentList-11-item-0\",\"fields\":[{\"name\":\"textField\",\"value\":\"Hello World Item 1\"}]},{\"template\":\"Styleguide-ContentList-Item-Template\",\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-ContentList-11-item-1\",\"displayName\":\"Styleguide-FieldUsage-ContentList-11-item-1\",\"fields\":[{\"name\":\"textField\",\"value\":\"Hello World Item 2\"}]}]}]},\"renderingParams\":[],\"uid\":\"{2F609D40-8AD9-540E-901E-23AA2600F3EB}\"},{\"renderingName\":\"Styleguide-FieldUsage-Custom\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{B7C779DA-2B75-586C-B40D-081FCB864256}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-B7C779DA-2B75-586C-B40D-081FCB864256-0-Styleguide-FieldUsage-Custom-12\",\"displayName\":\"Styleguide-FieldUsage-Custom-12\",\"template\":\"Styleguide-FieldUsage-Custom\",\"fields\":[{\"name\":\"heading\",\"value\":\"Custom Fields\"},{\"name\":\"description\",\"value\":\"<p>\\n  <small>\\n    Any Sitecore field type can be consumed by JSS.\\n    In this sample we consume the <em>Integer</em> field type.<br />\\n    <strong>Note:</strong> For field types with complex data, custom <code>FieldSerializer</code>s may need to be implemented on the Sitecore side.\\n  </small>\\n</p>\\n\"},{\"name\":\"customIntField\",\"value\":31337}]},\"renderingParams\":[],\"uid\":\"{352ED63D-796A-5523-89F5-9A991DDA4A8F}\"},{\"renderingName\":\"Styleguide-Section\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0\",\"placeholderName\":\"jss-styleguide-layout\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-layout-34A6553C-81DE-5CD3-989E-853F6CB6DF8C-0-Styleguide-Section-2\",\"displayName\":\"Styleguide-Section-2\",\"template\":\"Styleguide-Section\",\"fields\":[{\"name\":\"heading\",\"value\":\"Layout Patterns\"}]},\"renderingParams\":[],\"uid\":\"{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}\"},{\"renderingName\":\"Styleguide-Layout-Reuse\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-header-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0\",\"placeholderName\":\"jss-header\",\"dataSource\":{\"name\":\"styleguide-jss-header-7DE41A1A-24E4-5963-8206-3BB0B7D9DD69-0-Styleguide-Layout-Reuse-1\",\"displayName\":\"Styleguide-Layout-Reuse-1\",\"template\":\"Styleguide-Layout-Reuse\",\"fields\":[]},\"renderingParams\":[],\"uid\":\"{1A6FCB1C-E97B-5325-8E4E-6E13997A4A1A}\"},{\"renderingName\":\"Styleguide-Layout-Reuse\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-7DE41A1A-24E4-5963-8206-3BB0B7D9DD69-0-Styleguide-Layout-Reuse-1\",\"displayName\":\"Styleguide-Layout-Reuse-1\",\"template\":\"Styleguide-Layout-Reuse\",\"fields\":[{\"name\":\"heading\",\"value\":\"Reusing Content\"},{\"name\":\"description\",\"value\":\"<p>JSS provides powerful options to reuse content, whether it's sharing a common piece of text across pages or sketching out a site with repeating <em>lorem ipsum</em> content.</p>\"}]},\"renderingParams\":[],\"uid\":\"{3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A}\"},{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-reuse-example-{3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A}-0\",\"placeholderName\":\"jss-reuse-example\",\"dataSource\":{\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"content\",\"value\":\"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>\"}],\"name\":\"LoremIpsumContentBlock\",\"displayName\":\"Lorem Ipsum Dolor Sit Amet\",\"resolvedFromItemId\":\"lorem-ipsum-content-block\"},\"renderingParams\":[],\"uid\":\"{AA328B8A-D6E1-5B37-8143-250D2E93D6B8}\"},{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-reuse-example-{3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A}-0\",\"placeholderName\":\"jss-reuse-example\",\"dataSource\":{\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"content\",\"value\":\"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>\"}],\"name\":\"LoremIpsumContentBlock\",\"displayName\":\"Lorem Ipsum Dolor Sit Amet\",\"resolvedFromItemId\":\"lorem-ipsum-content-block\"},\"renderingParams\":[],\"uid\":\"{C4330D34-623C-556C-BF4C-97C93D40FB1E}\"},{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-reuse-example-{3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A}-0\",\"placeholderName\":\"jss-reuse-example\",\"dataSource\":{\"template\":\"ContentBlock\",\"name\":\"styleguide-jss-reuse-example-3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A-0-ContentBlock-3\",\"displayName\":\"ContentBlock-3\",\"fields\":[{\"name\":\"content\",\"value\":\"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>\"}],\"resolvedFromItemId\":\"lorem-ipsum-content-block\",\"copy\":true},\"renderingParams\":[],\"uid\":\"{A42D8B1C-193D-5627-9130-F7F7F87617F1}\",\"displayName\":\"Lorem Ipsum Dolor Sit Amet\",\"name\":\"LoremIpsumContentBlock\"},{\"renderingName\":\"ContentBlock\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-reuse-example-{3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A}-0\",\"placeholderName\":\"jss-reuse-example\",\"dataSource\":{\"name\":\"styleguide-jss-reuse-example-3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A-0-ContentBlock-4\",\"displayName\":\"ContentBlock-4\",\"template\":\"ContentBlock\",\"fields\":[{\"name\":\"content\",\"value\":\"<p>Mix and match reused and local content. Check out <code>/data/routes/styleguide/en.yml</code> to see how.</p>\"}]},\"renderingParams\":[],\"uid\":\"{0F4CB47A-979E-5139-B50B-A8E40C73C236}\"},{\"renderingName\":\"Styleguide-Layout-Tabs\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-7DE41A1A-24E4-5963-8206-3BB0B7D9DD69-0-Styleguide-Layout-Tabs-2\",\"displayName\":\"Styleguide-Layout-Tabs-2\",\"template\":\"Styleguide-Layout-Tabs\",\"fields\":[{\"name\":\"heading\",\"value\":\"Tabs\"},{\"name\":\"description\",\"value\":\"<p>Creating hierarchical components like tabs is made simpler in JSS because it's easy to introspect the layout structure.</p>\"}]},\"renderingParams\":[],\"uid\":\"{538E4831-F157-50BB-AC74-277FCAC9FDDB}\"},{\"renderingName\":\"Styleguide-Layout-Tabs-Tab\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-tabs-{538E4831-F157-50BB-AC74-277FCAC9FDDB}-0\",\"placeholderName\":\"jss-tabs\",\"dataSource\":{\"name\":\"styleguide-jss-tabs-538E4831-F157-50BB-AC74-277FCAC9FDDB-0-Styleguide-Layout-Tabs-Tab-1\",\"displayName\":\"Styleguide-Layout-Tabs-Tab-1\",\"template\":\"Styleguide-Layout-Tabs-Tab\",\"fields\":[{\"name\":\"title\",\"value\":\"Tab 1\"},{\"name\":\"content\",\"value\":\"<p>Tab 1 contents!</p>\"}]},\"renderingParams\":[],\"uid\":\"{7ECB2ED2-AC9B-58D1-8365-10CA74824AF7}\"},{\"renderingName\":\"Styleguide-Layout-Tabs-Tab\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-tabs-{538E4831-F157-50BB-AC74-277FCAC9FDDB}-0\",\"placeholderName\":\"jss-tabs\",\"dataSource\":{\"name\":\"styleguide-jss-tabs-538E4831-F157-50BB-AC74-277FCAC9FDDB-0-Styleguide-Layout-Tabs-Tab-2\",\"displayName\":\"Styleguide-Layout-Tabs-Tab-2\",\"template\":\"Styleguide-Layout-Tabs-Tab\",\"fields\":[{\"name\":\"title\",\"value\":\"Tab 2\"},{\"name\":\"content\",\"value\":\"<p>Tab 2 contents!</p>\"}]},\"renderingParams\":[],\"uid\":\"{AFD64900-0A61-50EB-A674-A7A884E0D496}\"},{\"renderingName\":\"Styleguide-Layout-Tabs-Tab\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}-0/jss-tabs-{538E4831-F157-50BB-AC74-277FCAC9FDDB}-0\",\"placeholderName\":\"jss-tabs\",\"dataSource\":{\"name\":\"styleguide-jss-tabs-538E4831-F157-50BB-AC74-277FCAC9FDDB-0-Styleguide-Layout-Tabs-Tab-3\",\"displayName\":\"Styleguide-Layout-Tabs-Tab-3\",\"template\":\"Styleguide-Layout-Tabs-Tab\",\"fields\":[{\"name\":\"title\",\"value\":\"Tab 3\"},{\"name\":\"content\",\"value\":\"<p>Tab 3 contents!</p>\"}]},\"renderingParams\":[],\"uid\":\"{44C12983-3A84-5462-84C0-6CA1430050C8}\"},{\"renderingName\":\"Styleguide-Section\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0\",\"placeholderName\":\"jss-styleguide-layout\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-layout-34A6553C-81DE-5CD3-989E-853F6CB6DF8C-0-Styleguide-Section-3\",\"displayName\":\"Styleguide-Section-3\",\"template\":\"Styleguide-Section\",\"fields\":[{\"name\":\"heading\",\"value\":\"Sitecore Patterns\"}]},\"renderingParams\":[],\"uid\":\"{2D806C25-DD46-51E3-93DE-63CF9035122C}\"},{\"renderingName\":\"Styleguide-SitecoreContext\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{2D806C25-DD46-51E3-93DE-63CF9035122C}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-2D806C25-DD46-51E3-93DE-63CF9035122C-0-Styleguide-SitecoreContext-1\",\"displayName\":\"Styleguide-SitecoreContext-1\",\"template\":\"Styleguide-SitecoreContext\",\"fields\":[{\"name\":\"heading\",\"value\":\"Sitecore Context\"},{\"name\":\"description\",\"value\":\"<p><small>The Sitecore Context contains route-level data about the current context - for example, <code>pageState</code> enables conditionally executing code based on whether Sitecore is in Experience Editor or not.</small></p>\"}]},\"renderingParams\":[],\"uid\":\"{471FA16A-BB82-5C42-9C95-E7EAB1E3BD30}\"},{\"renderingName\":\"Styleguide-RouteFields\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{2D806C25-DD46-51E3-93DE-63CF9035122C}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-2D806C25-DD46-51E3-93DE-63CF9035122C-0-Styleguide-RouteFields-2\",\"displayName\":\"Styleguide-RouteFields-2\",\"template\":\"Styleguide-RouteFields\",\"fields\":[{\"name\":\"heading\",\"value\":\"Route-level Fields\"},{\"name\":\"description\",\"value\":\"<p><small>Route-level content fields are defined on the <em>route</em> instead of on a <em>component</em>. This allows multiple components to share the field data on the same route - and querying is much easier on route level fields, making <em>custom route types</em> ideal for filterable/queryable data such as articles.</small></p>\"}]},\"renderingParams\":[],\"uid\":\"{21F21053-8F8A-5436-BC79-E674E246A2FC}\"},{\"renderingName\":\"Styleguide-ComponentParams\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{2D806C25-DD46-51E3-93DE-63CF9035122C}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-2D806C25-DD46-51E3-93DE-63CF9035122C-0-Styleguide-ComponentParams-3\",\"displayName\":\"Styleguide-ComponentParams-3\",\"template\":\"Styleguide-ComponentParams\",\"fields\":[{\"name\":\"heading\",\"value\":\"Component Params\"},{\"name\":\"description\",\"value\":\"<p><small>Component params (also called Rendering Parameters) allow storing non-content parameters for a component. These params should be used for more technical options such as CSS class names or structural settings.</small></p>\"}]},\"renderingParams\":[{\"name\":\"cssClass\",\"value\":\"alert alert-success\"},{\"name\":\"columns\",\"value\":5},{\"name\":\"useCallToAction\",\"value\":true}],\"uid\":\"{A0A66136-C21F-52E8-A2EA-F04DCFA6A027}\"},{\"renderingName\":\"Styleguide-Tracking\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{2D806C25-DD46-51E3-93DE-63CF9035122C}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-2D806C25-DD46-51E3-93DE-63CF9035122C-0-Styleguide-Tracking-4\",\"displayName\":\"Styleguide-Tracking-4\",\"template\":\"Styleguide-Tracking\",\"fields\":[{\"name\":\"heading\",\"value\":\"Tracking\"},{\"name\":\"description\",\"value\":\"<p><small>JSS supports tracking Sitecore analytics events from within apps. Give it a try with this handy interactive demo.</small></p>\"}]},\"renderingParams\":[],\"uid\":\"{7F765FCB-3B10-58FD-8AA7-B346EF38C9BB}\"},{\"renderingName\":\"Styleguide-Section\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0\",\"placeholderName\":\"jss-styleguide-layout\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-layout-34A6553C-81DE-5CD3-989E-853F6CB6DF8C-0-Styleguide-Section-4\",\"displayName\":\"Styleguide-Section-4\",\"template\":\"Styleguide-Section\",\"fields\":[{\"name\":\"heading\",\"value\":\"Multilingual Patterns\"}]},\"renderingParams\":[],\"uid\":\"{66AF8F03-0B52-5425-A6AF-6FB54F2D64D9}\"},{\"renderingName\":\"Styleguide-Multilingual\",\"placeholderKey\":\"/jss-main/jss-styleguide-layout-{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}-0/jss-styleguide-section-{66AF8F03-0B52-5425-A6AF-6FB54F2D64D9}-0\",\"placeholderName\":\"jss-styleguide-section\",\"dataSource\":{\"name\":\"styleguide-jss-styleguide-section-66AF8F03-0B52-5425-A6AF-6FB54F2D64D9-0-Styleguide-Multilingual-1\",\"displayName\":\"Styleguide-Multilingual-1\",\"template\":\"Styleguide-Multilingual\",\"fields\":[{\"name\":\"heading\",\"value\":\"Translation Patterns\"},{\"name\":\"sample\",\"value\":\"This text can be translated in en.yml\"}]},\"renderingParams\":[],\"uid\":\"{CF1B5D2B-C949-56E7-9594-66AFACEACA9D}\"}],\"placeholders\":[\"jss-main\",\"jss-styleguide-layout\",\"jss-styleguide-section\",\"jss-header\",\"jss-styleguide-section\",\"jss-reuse-example\",\"jss-tabs\",\"jss-styleguide-section\",\"jss-styleguide-section\"]},\"fields\":[{\"name\":\"pageTitle\",\"value\":\"Styleguide | Sitecore JSS\"}],\"children\":[{\"template\":\"ExampleCustomRouteType\",\"name\":\"custom-route-type\",\"layout\":{\"renderings\":[{\"renderingName\":\"Styleguide-CustomRouteType\",\"placeholderKey\":\"/jss-main\",\"placeholderName\":\"jss-main\",\"dataSource\":{\"name\":\"custom-route-type-jss-main-Styleguide-CustomRouteType-1\",\"displayName\":\"Styleguide-CustomRouteType-1\",\"template\":\"Styleguide-CustomRouteType\",\"fields\":[]},\"renderingParams\":[],\"uid\":\"{621128A6-CC4D-5287-8ED6-E4A89A7DBBDB}\"}],\"placeholders\":[\"jss-main\"]},\"fields\":[{\"name\":\"pageTitle\",\"value\":\"Custom Route Type | Sitecore JSS\"},{\"name\":\"headline\",\"value\":\"A Treatise on Route-Level Fields in JSS\"},{\"name\":\"author\",\"value\":\"Myrtle\"},{\"name\":\"content\",\"value\":\"<p>Custom route type fields are good for things like articles, where you may wish to have a filter UI on content fields, such as author or category. Route level fields are easy to query against, whereas component-level fields are not because it's possible to remove a component from a route. Note that route level fields <em>cannot be personalized</em> because you cannot conditionally swap out the route item for a different content item.</p>\"}]}]}]}],\"nonRoutes\":[{\"name\":\"Components\",\"displayName\":\"Components\",\"template\":\"Folder\",\"children\":[{\"name\":\"Styleguide\",\"displayName\":\"Styleguide\",\"template\":\"Folder\",\"children\":[{\"name\":\"ContentReuse\",\"displayName\":\"ContentReuse\",\"template\":\"Folder\",\"children\":[{\"id\":\"lorem-ipsum-content-block\",\"displayName\":\"Lorem Ipsum Dolor Sit Amet\",\"fields\":[{\"name\":\"content\",\"value\":\"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>\"}],\"name\":\"LoremIpsumContentBlock\",\"template\":\"ContentBlock\"}]}]}]},{\"name\":\"Content\",\"displayName\":\"Content\",\"template\":\"Folder\",\"children\":[{\"name\":\"Styleguide\",\"displayName\":\"Styleguide\",\"template\":\"Folder\",\"children\":[{\"name\":\"ContentListField\",\"displayName\":\"ContentListField\",\"template\":\"Folder\",\"children\":[{\"id\":\"styleguide-content-list-field-shared-1\",\"displayName\":\"Styleguide Content List Item 1 (Shared)\",\"template\":\"Styleguide-ContentList-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ContentList Demo (Shared) Item 1 Text Field\"}],\"name\":\"Item1\"},{\"id\":\"styleguide-content-list-field-shared-2\",\"displayName\":\"Styleguide Content List Item 2 (Shared)\",\"template\":\"Styleguide-ContentList-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ContentList Demo (Shared) Item 2 Text Field\"}],\"name\":\"Item2\"}]},{\"name\":\"ItemLinkField\",\"displayName\":\"ItemLinkField\",\"template\":\"Folder\",\"children\":[{\"id\":\"styleguide-item-link-field-shared-1\",\"displayName\":\"Styleguide Item Link Item 1 (Shared)\",\"template\":\"Styleguide-ItemLink-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ItemLink Demo (Shared) Item 1 Text Field\"}],\"name\":\"Item1\"},{\"id\":\"styleguide-item-link-field-shared-2\",\"displayName\":\"Styleguide Item Link Item 2 (Shared)\",\"template\":\"Styleguide-ItemLink-Item-Template\",\"fields\":[{\"name\":\"textField\",\"value\":\"ItemLink Demo (Shared) Item 2 Text Field\"}],\"name\":\"Item2\"}]}]}]}]},\"dictionary\":[{\"key\":\"styleguide-sample\",\"value\":\"This is a dictionary entry in English as a demonstration\"},{\"key\":\"Documentation\",\"value\":\"Documentation\"},{\"key\":\"Styleguide\",\"value\":\"Styleguide\"},{\"key\":\"GraphQL\",\"value\":\"GraphQL\"}]}");

/***/ }),

/***/ "./src/Layout.tsx":
/*!************************!*\
  !*** ./src/Layout.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-localization */ "next-localization");
/* harmony import */ var next_localization__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_localization__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/util */ "./src/lib/util.ts");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\NEXT\\sitecore\\src\\Layout.tsx";






// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = Object(lib_util__WEBPACK_IMPORTED_MODULE_5__["getPublicUrl"])(); // This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.

const Navigation = () => {
  const {
    t
  } = Object(next_localization__WEBPACK_IMPORTED_MODULE_4__["useI18n"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      className: "my-0 mr-md-auto font-weight-normal",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-dark",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: `${publicUrl}/sc_logo.svg`,
            alt: "Sitecore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "my-2 my-md-0 mr-md-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "p-2 text-dark",
        href: "https://jss.sitecore.com",
        target: "_blank",
        rel: "noopener noreferrer",
        children: t('Documentation')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/styleguide",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "p-2 text-dark",
          children: t('Styleguide')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/graphql",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "p-2 text-dark",
          children: t('GraphQL')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/nextjs",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "p-2 text-dark",
          children: 'NextJS'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

const Layout = ({
  context
}) => {
  var _route$fields, _route$fields$pageTit;

  const {
    updateSitecoreContext
  } = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_6__["useSitecoreContext"])({
    updatable: true
  }); // Update Sitecore Context if layoutData has changed (i.e. on client-side route change).
  // Note the context object type here matches the initial value in [[...path]].tsx.

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    updateSitecoreContext && updateSitecoreContext(context);
  }, [context]);
  const {
    route
  } = context;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: (route === null || route === void 0 ? void 0 : (_route$fields = route.fields) === null || _route$fields === void 0 ? void 0 : (_route$fields$pageTit = _route$fields.pageTitle) === null || _route$fields$pageTit === void 0 ? void 0 : _route$fields$pageTit.value) || 'Page'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: `${publicUrl}/favicon.ico`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_6__["VisitorIdentification"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Navigation, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
        name: "jss-main",
        rendering: route
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/NotFound.tsx":
/*!**************************!*\
  !*** ./src/NotFound.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\NEXT\\sitecore\\src\\NotFound.tsx";

/**
 * Rendered in case if we have 404 error
 */

const NotFound = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "404: NotFound"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: 10
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Page not found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "This page does not exist."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "/",
      children: "Go to the Home page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/ContentBlock.tsx":
/*!*****************************************!*\
  !*** ./src/components/ContentBlock.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\ContentBlock.tsx";


/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({
  fields
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    tag: "h2",
    className: "display-4",
    field: fields.heading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "contentDescription",
    field: fields.content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

/* harmony default export */ __webpack_exports__["default"] = (ContentBlock);

/***/ }),

/***/ "./src/components/Header/Header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/Header.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapHeader": "Header_wrapHeader__2S3jB"
};


/***/ }),

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\Header\\Header.tsx";



const Header = props => {
  console.log(props);
  const {
    fields
  } = props;
  const color = props.fields.color.value;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapHeader,
    style: {
      backgroundColor: color
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "nav",
      children: fields.listLinks.map(el => {
        var _el$fields$link$value;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: (_el$fields$link$value = el.fields.link.value.href) !== null && _el$fields$link$value !== void 0 ? _el$fields$link$value : '/',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: el.fields.name.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined)
        }, el.name, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Checkbox.tsx":
/*!******************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Checkbox.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Checkbox.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Checkbox (boolean) content field within JSS.
 */
const StyleguideFieldUsageCheckbox = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-checkbox",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: [props.fields && props.fields.checkbox && props.fields.checkbox.value && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined), " is true"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), !props.fields || !props.fields.checkbox || !props.fields.checkbox.value && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined), " is false"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }, undefined), Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(props.fields, 'checkbox2', false) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "checkbox2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), " is true"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined), !Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(props.fields, 'checkbox2', false) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "checkbox2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined), " is false"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageCheckbox);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-ContentList.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-ContentList.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-ContentList.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Content List field type within JSS.
 * Content Lists are references to 0..n other content items.
 * In Sitecore terms, this maps by default to a Treelist field.
 */
const StyleguideFieldUsageContentList = props => {
  const {
    sharedContentList,
    localContentList
  } = props.fields;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-content-list",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: "Shared Content List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), sharedContentList && sharedContentList.map((listItem, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          field: listItem.fields.textField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 22
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, undefined)
    }, `sharedListItem-${index}`, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: "Local Content List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), localContentList && localContentList.map((listItem, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          field: listItem.fields.textField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 22
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined)
    }, `localListItem-${index}`, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }, undefined))]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageContentList);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Custom.tsx":
/*!****************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Custom.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Custom.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a custom content field type within JSS.
 * See /sitecore/definitions/components/Styleguide-FieldUsage-Custom.sitecore.js
 * for the definition of the structure of the custom field. This code is just for display.
 */
const StyleguideFieldUsageCustom = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-custom",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    field: props.fields.customIntField
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageCustom);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Date.tsx":
/*!**************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Date.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Date.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of date and time content field types within JSS.
 */
const StyleguideFieldUsageDate = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-date",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Date helper: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
          field: props.fields.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 24
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Date helper (datetime): ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
          field: props.fields.dateTime
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 35
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["UTC Date string:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
          field: props.fields.date,
          render: date => date && date.toUTCString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Localized Date string (local timezone):\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
          field: props.fields.date,
          render: date => date && date.toLocaleDateString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Localized DateTime string (local timezone):\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
          field: props.fields.dateTime,
          render: date => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: date && date.toLocaleString()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 31
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageDate);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-File.tsx":
/*!**************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-File.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-File.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a File content field within JSS.
 * File types are stored within Sitecore's Media Library data, and can be edited.
 */
const StyleguideFieldUsageFile = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-file",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["File"], {
    field: props.fields.file
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["File"], {
    field: props.fields.file,
    target: "_blank",
    children: "Custom link body"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageFile);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Image.tsx":
/*!***************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Image.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Image.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of an Image content field within JSS.
 * Image field data is uploaded into the Sitecore Media Library.
 */
const StyleguideFieldUsageImage = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-image",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Plain image"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    media: props.fields.sample1
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Advanced image (not editable)"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    field: props.fields.sample2,
    editable: false,
    imageParams: {
      mw: 100,
      mh: 50
    },
    height: "50",
    width: "94",
    "data-sample": "other-attributes-pass-through"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Srcset responsive image"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    field: props.fields.sample2,
    srcSet: [{
      mw: 300
    }, {
      mw: 100
    }],
    sizes: "(min-width: 960px) 300px, 100px",
    className: "img-fluid"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageImage);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-ItemLink.tsx":
/*!******************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-ItemLink.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-ItemLink.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Content Link content field within JSS.
 * Content links are a reference to a single other piece of content.
 */
const StyleguideFieldUsageItemLink = props => {
  const {
    sharedItemLink,
    localItemLink
  } = props.fields;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-itemlink",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: "Shared Item Link"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), sharedItemLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          field: sharedItemLink.fields.textField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 20
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: "Local Item Link"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), localItemLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          field: localItemLink.fields.textField
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 20
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageItemLink);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Link.tsx":
/*!**************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Link.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Link.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a General Link (hyperlink) content field within JSS.
 */
const StyleguideFieldUsageLink = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-link",
  children: ["External link:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    field: props.fields.externalLink
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), "Internal link:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    field: props.fields.internalLink,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
      children: "HTML"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), " or other components can be used within link renderers, for example links to images."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), "Email link:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    field: props.fields.emailLink
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined), "All possible content params link:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    field: props.fields.paramsLink
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined), "The link component accepts params of its own:\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    field: props.fields.externalLink,
    showLinkTextWithChildrenPresent: true,
    className: "font-weight-bold",
    "data-otherattributes": "pass-through-to-anchor-tag"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageLink);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Number.tsx":
/*!****************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Number.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Number.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Number (decimal) content field within JSS.
 */
const StyleguideFieldUsageText = props => {
  const fieldValue = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(props.fields, 'sample');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-number",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      field: props.fields.sample
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["JS value type: ", typeof fieldValue, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), "JS value: ", fieldValue]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageText);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-RichText.tsx":
/*!******************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-RichText.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-RichText.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Rich Text (HTML) content field within JSS.
 */
const StyleguideFieldUsageRichText = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-richtext",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    field: props.fields.sample
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    field: props.fields.sample2,
    tag: "section",
    editable: false,
    className: "text-center",
    "data-sample": "other-attributes-pass-through"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageRichText);

/***/ }),

/***/ "./src/components/fields/Styleguide-FieldUsage-Text.tsx":
/*!**************************************************************!*\
  !*** ./src/components/fields/Styleguide-FieldUsage-Text.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\fields\\Styleguide-FieldUsage-Text.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Text content field within JSS.
 * Text fields are HTML encoded by default.
 */
const StyleguideFieldUsageText = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-text",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    field: props.fields.sample
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    field: props.fields.sample2,
    tag: "section",
    editable: false,
    encode: false,
    className: "font-weight-bold",
    "data-sample": "other-attributes-pass-through"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Raw value (not editable): ", Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(props.fields, 'sample')]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideFieldUsageText);

/***/ }),

/***/ "./src/components/graphql/GraphQL-ConnectedDemo.graphql":
/*!**************************************************************!*\
  !*** ./src/components/graphql/GraphQL-ConnectedDemo.graphql ***!
  \**************************************************************/
/*! exports provided: ItemSearchOperator, Ordering, ConnectedDemoQueryDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSearchOperator", function() { return ItemSearchOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ordering", function() { return Ordering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedDemoQueryDocument", function() { return ConnectedDemoQueryDocument; });
/* d5ba6dc49a4a61d4f9b8f1411d303e8ef44b3652
 * This file is automatically generated by graphql-let. */

/** All built-in and custom scalars, mapped to their actual values */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). */

/** /sitecore/templates/System/Layout/Sections/Rendering Options template (ID: {D1592226-3898-4CE2-B190-090FD5F84A4C}). */

/** /sitecore/templates/System/Layout/Layout template (ID: {3A45A723-64EE-4919-9D41-02FD40FD1466}). */

/** /sitecore/templates/System/Layout/Sections/Caching template (ID: {E8D2DD19-1347-4562-AE3F-310DC0B21A6C}). */

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). Also implements Route. */
let ItemSearchOperator;

(function (ItemSearchOperator) {
  ItemSearchOperator["Eq"] = "EQ";
  ItemSearchOperator["Contains"] = "CONTAINS";
  ItemSearchOperator["Neq"] = "NEQ";
  ItemSearchOperator["Ncontains"] = "NCONTAINS";
})(ItemSearchOperator || (ItemSearchOperator = {}));

let Ordering;

(function (Ordering) {
  Ordering["Asc"] = "ASC";
  Ordering["Desc"] = "DESC";
})(Ordering || (Ordering = {}));

const ConnectedDemoQueryDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "ConnectedDemoQuery"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "datasource"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "contextItem"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "language"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "alias": {
          "kind": "Name",
          "value": "datasource"
        },
        "name": {
          "kind": "Name",
          "value": "item"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "path"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "datasource"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "language"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "language"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "InlineFragment",
            "typeCondition": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "GraphQLConnectedDemo"
              }
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "sample1"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "jsonValue"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "value"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "sample2"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "jsonValue"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "text"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "target"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "url"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "definition"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [{
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "type"
                        }
                      }, {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "shared"
                        }
                      }]
                    }
                  }]
                }
              }]
            }
          }]
        }
      }, {
        "kind": "Field",
        "alias": {
          "kind": "Name",
          "value": "contextItem"
        },
        "name": {
          "kind": "Name",
          "value": "item"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "path"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "contextItem"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "language"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "language"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            }
          }, {
            "kind": "InlineFragment",
            "typeCondition": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AppRoute"
              }
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "pageTitle"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "value"
                    }
                  }]
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "children"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "hasLayout"
              },
              "value": {
                "kind": "BooleanValue",
                "value": true
              }
            }],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "results"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "id"
                    }
                  }, {
                    "kind": "InlineFragment",
                    "typeCondition": {
                      "kind": "NamedType",
                      "name": {
                        "kind": "Name",
                        "value": "AppRoute"
                      }
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [{
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "pageTitle"
                        },
                        "selectionSet": {
                          "kind": "SelectionSet",
                          "selections": [{
                            "kind": "Field",
                            "name": {
                              "kind": "Name",
                              "value": "jsonValue"
                            }
                          }, {
                            "kind": "Field",
                            "name": {
                              "kind": "Name",
                              "value": "value"
                            }
                          }]
                        }
                      }]
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "url"
                    },
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [{
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "path"
                        }
                      }]
                    }
                  }]
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};

/***/ }),

/***/ "./src/components/graphql/GraphQL-ConnectedDemo.tsx":
/*!**********************************************************!*\
  !*** ./src/components/graphql/GraphQL-ConnectedDemo.tsx ***!
  \**********************************************************/
/*! exports provided: getStaticProps, getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GraphQL_ConnectedDemo_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphQL-ConnectedDemo.graphql */ "./src/components/graphql/GraphQL-ConnectedDemo.graphql");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! temp/config */ "./src/temp/config.js");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(temp_config__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\graphql\\GraphQL-ConnectedDemo.tsx";






const GraphQLConnectedDemo = props => {
  var _data$datasource$samp, _data$datasource$samp2, _data$datasource$samp3, _data$datasource$samp4, _data$datasource$samp5, _data$datasource$samp6, _data$datasource$samp7, _data$datasource$samp8, _data$datasource$samp9, _data$datasource$samp10, _data$contextItem$pag;

  const data = props.rendering.uid ? Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["useComponentProps"])(props.rendering.uid) : undefined;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-e2e-id": "graphql-connected",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "GraphQL Connected Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Connected GraphQL executes GraphQL queries directly against the Sitecore GraphQL endpoint. This example runs the query server-side using component-level ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "getStaticProps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 71
      }, undefined), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "getServerSideProps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), ", a feature of the Sitecore JSS Next.js SDK. These are aggregated during the the Next.js page-level ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "getStaticProps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 54
      }, undefined), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "getServerSideProps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), " execution."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), data && data.datasource && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Datasource Item (via Connected GraphQL)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined), "id: ", data.datasource.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined), "name: ", data.datasource.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined), "sample1: ", (_data$datasource$samp = data.datasource.sample1) === null || _data$datasource$samp === void 0 ? void 0 : _data$datasource$samp.value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined), "sample1 (editable): ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        field: (_data$datasource$samp2 = data.datasource.sample1) === null || _data$datasource$samp2 === void 0 ? void 0 : _data$datasource$samp2.jsonValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 31
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined), "sample2:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["text: ", (_data$datasource$samp3 = data.datasource.sample2) === null || _data$datasource$samp3 === void 0 ? void 0 : _data$datasource$samp3.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["url: ", (_data$datasource$samp4 = data.datasource.sample2) === null || _data$datasource$samp4 === void 0 ? void 0 : _data$datasource$samp4.url]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["target: ", (_data$datasource$samp5 = data.datasource.sample2) === null || _data$datasource$samp5 === void 0 ? void 0 : _data$datasource$samp5.target]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["editable: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            field: (_data$datasource$samp6 = data.datasource.sample2) === null || _data$datasource$samp6 === void 0 ? void 0 : _data$datasource$samp6.jsonValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["field type: ", (_data$datasource$samp7 = data.datasource.sample2) === null || _data$datasource$samp7 === void 0 ? void 0 : (_data$datasource$samp8 = _data$datasource$samp7.definition) === null || _data$datasource$samp8 === void 0 ? void 0 : _data$datasource$samp8.type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["field is shared?: ", (_data$datasource$samp9 = data.datasource.sample2) === null || _data$datasource$samp9 === void 0 ? void 0 : (_data$datasource$samp10 = _data$datasource$samp9.definition) === null || _data$datasource$samp10 === void 0 ? void 0 : _data$datasource$samp10.shared.toString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined), data && data.contextItem && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Route Item (via Connected GraphQL)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, undefined), "id: ", data.contextItem.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, undefined), "page title: ", (_data$contextItem$pag = data.contextItem.pageTitle) === null || _data$contextItem$pag === void 0 ? void 0 : _data$contextItem$pag.value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined), "children:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: data.contextItem.children.results.map(child => {
          var _routeItem$pageTitle, _routeItem$pageTitle2;

          const routeItem = child;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: routeItem.url.path,
              children: (_routeItem$pageTitle = routeItem.pageTitle) === null || _routeItem$pageTitle === void 0 ? void 0 : _routeItem$pageTitle.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 19
            }, undefined), "(editable title too! ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              field: (_routeItem$pageTitle2 = routeItem.pageTitle) === null || _routeItem$pageTitle2 === void 0 ? void 0 : _routeItem$pageTitle2.jsonValue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 40
            }, undefined), ")"]
          }, routeItem.id, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};
/**
 * Will be called during SSG
 * @param {ComponentRendering} rendering
 * @param {LayoutServiceData} layoutData
 * @param {GetStaticPropsContext} context
 */


const getStaticProps = async (rendering, layoutData) => {
  var _layoutData$sitecore, _layoutData$sitecore$, _layoutData$sitecore2, _layoutData$sitecore3;

  if (process.env.JSS_MODE === _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["JSS_MODE_DISCONNECTED"]) {
    return null;
  }

  const graphQLClient = new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLRequestClient"](temp_config__WEBPACK_IMPORTED_MODULE_5___default.a.graphQLEndpoint, {
    apiKey: temp_config__WEBPACK_IMPORTED_MODULE_5___default.a.sitecoreApiKey
  });
  const result = await graphQLClient.request(_GraphQL_ConnectedDemo_graphql__WEBPACK_IMPORTED_MODULE_4__["ConnectedDemoQueryDocument"], {
    datasource: rendering.dataSource,
    contextItem: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore = layoutData.sitecore) === null || _layoutData$sitecore === void 0 ? void 0 : (_layoutData$sitecore$ = _layoutData$sitecore.route) === null || _layoutData$sitecore$ === void 0 ? void 0 : _layoutData$sitecore$.itemId,
    language: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore2 = layoutData.sitecore) === null || _layoutData$sitecore2 === void 0 ? void 0 : (_layoutData$sitecore3 = _layoutData$sitecore2.context) === null || _layoutData$sitecore3 === void 0 ? void 0 : _layoutData$sitecore3.language
  });
  return result;
};
/**
 * Will be called during SSR
 * @param {ComponentRendering} rendering
 * @param {LayoutServiceData} layoutData
 * @param {GetServerSidePropsContext} context
 */

const getServerSideProps = async (rendering, layoutData) => {
  var _layoutData$sitecore4, _layoutData$sitecore5, _layoutData$sitecore6, _layoutData$sitecore7;

  if (process.env.JSS_MODE === _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["JSS_MODE_DISCONNECTED"]) {
    return null;
  }

  const graphQLClient = new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLRequestClient"](temp_config__WEBPACK_IMPORTED_MODULE_5___default.a.graphQLEndpoint, {
    apiKey: temp_config__WEBPACK_IMPORTED_MODULE_5___default.a.sitecoreApiKey
  });
  const result = await graphQLClient.request(_GraphQL_ConnectedDemo_graphql__WEBPACK_IMPORTED_MODULE_4__["ConnectedDemoQueryDocument"], {
    datasource: rendering.dataSource,
    contextItem: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore4 = layoutData.sitecore) === null || _layoutData$sitecore4 === void 0 ? void 0 : (_layoutData$sitecore5 = _layoutData$sitecore4.route) === null || _layoutData$sitecore5 === void 0 ? void 0 : _layoutData$sitecore5.itemId,
    language: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore6 = layoutData.sitecore) === null || _layoutData$sitecore6 === void 0 ? void 0 : (_layoutData$sitecore7 = _layoutData$sitecore6.context) === null || _layoutData$sitecore7 === void 0 ? void 0 : _layoutData$sitecore7.language
  });
  return result;
};
/* harmony default export */ __webpack_exports__["default"] = (GraphQLConnectedDemo);

/***/ }),

/***/ "./src/components/graphql/GraphQL-IntegratedDemo.tsx":
/*!***********************************************************!*\
  !*** ./src/components/graphql/GraphQL-IntegratedDemo.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\graphql\\GraphQL-IntegratedDemo.tsx";



const GraphQLIntegratedDemo = props => {
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }
  const {
    datasource,
    contextItem
  } = props.fields.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-e2e-id": "graphql-integrated",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "GraphQL Integrated Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Integrated GraphQL executes GraphQL queries within the Layout Service endpoint, and merges the query results into the Layout Service result JSON. The query results can be seen by inspecting the Layout Service response."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), datasource && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Datasource Item (via Integrated GraphQL)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, undefined), "id: ", datasource.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined), "name: ", datasource.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, undefined), "sample1: ", datasource.sample1.value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, undefined), "sample1 (editable): ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        field: datasource.sample1.jsonValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 31
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined), "sample2:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["text: ", datasource.sample2.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["url: ", datasource.sample2.url]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["target: ", datasource.sample2.target]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["editable: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            field: datasource.sample2.jsonValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["field type: ", datasource.sample2.definition.type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["field is shared?: ", datasource.sample2.definition.shared.toString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined), contextItem && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Route Item (via Integrated GraphQL)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, undefined), "id: ", contextItem.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined), "page title: ", contextItem.pageTitle.value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, undefined), "children:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: contextItem.children.results.map(child => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: child.url.path,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: child.pageTitle.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, undefined), "\xA0 (editable title too! ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            field: child.pageTitle.jsonValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 45
          }, undefined), ")"]
        }, child.id, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GraphQLIntegratedDemo);

/***/ }),

/***/ "./src/components/graphql/GraphQL-Layout.tsx":
/*!***************************************************!*\
  !*** ./src/components/graphql/GraphQL-Layout.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\graphql\\GraphQL-Layout.tsx";


const GraphQLLayout = ({
  rendering
}) => {
  const {
    sitecoreContext
  } = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["useSitecoreContext"])();
  const disconnectedMode = sitecoreContext.route && sitecoreContext.route.layoutId === 'available-in-connected-mode';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-e2e-id": "graphql-layout",
    children: [disconnectedMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "This app is running in disconnected mode. GraphQL requires connected mode, headless connected mode, or integrated mode to work."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Libraries such as ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
          children: "graphql-tools"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 31
        }, undefined), " can provide GraphQL API mocking capabilities, which could enable disconnected GraphQL. This is not supported out of the box, however."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["To view the GraphQL samples, restart the app using ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
          children: "jss start:connected"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 64
        }, undefined), "\xA0 or deploy the app to Sitecore to run in integrated mode per the JSS documentation."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), !disconnectedMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
      name: "jss-graphql-layout",
      rendering: rendering
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GraphQLLayout);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-ComponentParams.tsx":
/*!******************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-ComponentParams.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-ComponentParams.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const StyleguideComponentParams = props => {
  // props.params (i.e. props.params.cssClass without destructuring) contains the component's params
  const {
    cssClass,
    columns,
    useCallToAction
  } = props.params;
  const columnsArray = columns && [...Array(parseInt(columns))];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-componentparams",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: cssClass,
      children: ["The CSS class of this paragraph (", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: cssClass
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 42
      }, undefined), ") is set using a param"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["useCallToAction param: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: useCallToAction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 32
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), "param type: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: typeof useCallToAction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined), useCallToAction === 'true' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-info",
        children: "the call to action is shown"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["columns param: ", columns]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: columnsArray && columnsArray.map((_, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-sm",
        children: ["Column ", index]
      }, `col-${index}`, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideComponentParams);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-CustomRouteType.tsx":
/*!******************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-CustomRouteType.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-CustomRouteType.tsx";



const StyleguideCustomRouteType = () => {
  // useSitecoreContext() is the magical glue that gives you route-level context access
  // see the context examples in the styleguide for more details.
  // this fancy destructure syntax is essentially equivalent to
  // const fields = props.sitecoreContext.route.fields
  const {
    sitecoreContext: {
      route: {
        fields
      }
    }
  } = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["useSitecoreContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-e2e-id": "styleguide-customroutetype",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      tag: "h3",
      field: fields.headline
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
        children: ["By ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          field: fields.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 14
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      field: fields.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/styleguide",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "Return to the Styleguide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideCustomRouteType);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Layout-Reuse.tsx":
/*!***************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Layout-Reuse.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Layout-Reuse.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates how to reuse content within JSS. See /data/routes/styleguide/en.yml
 * for the reused content definition sample. This component also demonstrates how to use
 * the Placeholder component's render props API to wrap all components in the placeholder
 * in a column tag (thus creating a horizontally laid out placeholder)
 */
const StyleguideLayoutReuse = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
  e2eId: "styleguide-layout-reuse",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
      rendering: props.rendering,
      name: "jss-reuse-example",
      renderEach: (component, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-sm",
        children: component
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined),
      renderEmpty: components => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-sm",
        children: components
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 38
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideLayoutReuse);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Layout-Tabs-Tab.tsx":
/*!******************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Layout-Tabs-Tab.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Layout-Tabs-Tab.tsx";


/**
 * This is a single tab within the tabs sample component. These are added to the tabs placeholder.
 * This component demonstrates conditionally altering rendering when in the Sitecore Experience Editor to improve
 * author experience.
 */
const StyleguideLayoutTabsTab = props => {
  const {
    sitecoreContext
  } = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["useSitecoreContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-e2e-class": "styleguide-layout-tabs-tab",
    children: [sitecoreContext && sitecoreContext.pageEditing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      tag: "h5",
      field: props.fields.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
      field: props.fields.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideLayoutTabsTab);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Layout-Tabs.tsx":
/*!**************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Layout-Tabs.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Layout-Tabs.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Demonstrates advanced component techniques in JSS.
 * This example implements a simple-looking tabs component.
 * Each tab is itself a child component added to a placeholder defined on the tabs component.
 * The tab component introspects its child components to render the tab headings (i.e. the tab children render partial content in two places).
 * When this component is edited in Sitecore Experience Editor, the tabbing behavior is turned off and each tab stacks on top of each other
 * for easy inline editing.
 */
class StyleguideLayoutTabs extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(index) {
    this.setState({
      activeTabIndex: index
    });
  }

  render() {
    const {
      tabsPlaceholder,
      sitecoreContext
    } = this.props;
    let validTabIndex = 0;
    const isEditing = sitecoreContext && sitecoreContext.pageEditing;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, this.props), {}, {
      e2eId: "styleguide-layout-tabs",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "nav nav-tabs",
        children: !isEditing && (tabsPlaceholder || []).filter(tab => tab.props && tab.props.fields).map((tab, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: `nav-link ${index === this.state.activeTabIndex ? 'active' : null}`,
            onClick: () => this.setActiveTab(index),
            href: "#t",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              field: tab.props.fields.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 19
          }, this)
        }, `tab${index}`, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-3 border-left border-right border-bottom",
        children: (tabsPlaceholder || []).map(tab => {
          const isValid = tab.props && tab.props.fields; // allow experience editor markup components to render

          if (!isValid && isEditing) return tab;
          validTabIndex += 1; // we render the tab either if it's active - or we're editing,
          // in which case we stack all tabs for visual editing

          if (this.state.activeTabIndex === validTabIndex - 1 || isEditing) {
            return tab;
          }

          return null;
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this);
  }

} // This is a _higher order component_ that will wrap our component and inject placeholder
// data into it as a prop (in this case, props.tabsPlaceholder).
// this another option compared to using the <Placeholder> component;
// in this case, chosen because we primarily need access to the _data_
// of the placeholder.


const tabsComponentWithPlaceholderInjected = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["withPlaceholder"])({
  placeholder: 'jss-tabs',
  prop: 'tabsPlaceholder'
})(StyleguideLayoutTabs); // We need to know if experience editor is active, to disable the dynamic tab behavior for editing.
// Using the same technique as injecting the placeholder, we wrap the component again to inject the
// `sitecoreContext` prop.

const tabsWithPlaceholderAndSitecoreContext = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["withSitecoreContext"])()(tabsComponentWithPlaceholderInjected);
/* harmony default export */ __webpack_exports__["default"] = (tabsWithPlaceholderAndSitecoreContext);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Layout.tsx":
/*!*********************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Layout.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Layout.tsx";


/**
 * The main layout (columns) of the styleguide.
 * Navigation is automatically generated based on the components added to the layout,
 * and does not need to be manually maintained.
 */
const StyleguideLayout = props => {
  const getRendering = section => section;

  const convertUID = uid => {
    if (!uid) return '';
    return uid.replace(/[{}]/g, '');
  }; // this code reads the components in the child placeholders of this component,
  // and projects them into the left navigation column for the styleguide


  const sections = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getChildPlaceholder"])(props.rendering, 'jss-styleguide-layout').filter(section => Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(getRendering(section), 'heading')).map(section => ({
    heading: Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(getRendering(section), 'heading'),
    id: `i${convertUID(getRendering(section).uid)}`,
    children: Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getChildPlaceholder"])(getRendering(section), 'jss-styleguide-section').filter(component => Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(getRendering(component), 'heading')).map(component => ({
      heading: Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["getFieldValue"])(getRendering(component), 'heading'),
      id: `i${convertUID(getRendering(component).uid)}`
    }))
  })).map(section => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "nav flex-column pt-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: `#${section.id}`,
      className: "nav-item font-weight-bold",
      children: section.heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), section.children && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "nav flex-column",
      children: section.children.map(child => child.heading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: `#${child.id}`,
        children: child.heading
      }, child.id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }, undefined)]
  }, section.heading, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }, undefined));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-8 col-lg-10",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
        name: "jss-styleguide-layout",
        rendering: props.rendering
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-4 col-lg-2 order-sm-first pt-2",
      children: sections
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideLayout);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Multilingual.tsx":
/*!***************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Multilingual.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-localization */ "next-localization");
/* harmony import */ var next_localization__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_localization__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Multilingual.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Demonstrates using the dictionary functionality and defining route data in
 * multiple languages.
 */
const StyleguideMultilingual = props => {
  const {
    t,
    locale
  } = Object(next_localization__WEBPACK_IMPORTED_MODULE_3__["useI18n"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-multilingual",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      field: props.fields.sample,
      encode: false,
      tag: "p"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["This is a static dictionary entry from ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "/data/dictionary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 48
      }, undefined), ":\xA0", t('styleguide-sample')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/en/styleguide",
        locale: false,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Show in English"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/styleguide",
        locale: "da-DK",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Show in Danish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["The current language is: ", locale()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideMultilingual);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-RouteFields.tsx":
/*!**************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-RouteFields.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-RouteFields.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Demonstrates gaining access to route-level fields.
 * This technique builds on the Styleguide-SitecoreContext technique,
 * to also get the route level field data and make it editable.
 */
const StyleguideRouteFields = props => {
  const {
    sitecoreContext
  } = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["useSitecoreContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-route-fields",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Route level ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "pageTitle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined), " field:", ' ', sitecoreContext.route && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        field: sitecoreContext.route.fields.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 35
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/styleguide/custom-route-type",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Sample of using a custom route type"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideRouteFields);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Section.tsx":
/*!**********************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Section.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Section.tsx";


/**
 * Represents a category of styleguide specimens within the Styleguide-Layout.
 * Usage examples are added to the `styleguide-section` placeholder that this
 * exposes.
 */
const StyleguideSection = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "pt-3",
  id: `i${props.rendering.uid && props.rendering.uid.replace(/[{}]/g, '')}`,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "border-bottom",
    field: props.fields.heading,
    tag: "h3"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
    name: "jss-styleguide-section",
    rendering: props.rendering
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideSection);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-SitecoreContext.tsx":
/*!******************************************************************!*\
  !*** ./src/components/styleguide/Styleguide-SitecoreContext.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-SitecoreContext.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates gaining access to the route-level Sitecore Context from
 * within other components.
 */
const StyleguideSitecoreContext = props => {
  const {
    sitecoreContext
  } = Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["useSitecoreContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-sitecore-context",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "The current Sitecore Context is..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
      style: {
        maxHeight: '400px',
        overflow: 'scroll'
      },
      children: JSON.stringify(sitecoreContext, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StyleguideSitecoreContext);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Specimen.tsx":
/*!***********************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Specimen.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Specimen.tsx";


/**
 * Helper component that displays explanatory information and where to find the definitions
 * of styleguide specimens.
 */
const StyleguideSpecimen = ({
  fields: {
    heading,
    description
  },
  children,
  rendering,
  e2eId
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "pt-3",
  id: `i${rendering.uid && rendering.uid.replace(/[{}]/g, '')}`,
  "data-e2e-id": e2eId,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    tag: "h4",
    field: heading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    field: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
      children: ["Implementation: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: ["/src/components/**/", rendering.componentName, ".tsx"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), "Definition:", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: ["/sitecore/definitions/components/**/", rendering.componentName, ".sitecore.js"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "border p-2",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 20,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleguideSpecimen);

/***/ }),

/***/ "./src/components/styleguide/Styleguide-Tracking.tsx":
/*!***********************************************************!*\
  !*** ./src/components/styleguide/Styleguide-Tracking.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-tracking */ "@sitecore-jss/sitecore-jss-tracking");
/* harmony import */ var _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_data_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/data-fetcher */ "./src/lib/data-fetcher.ts");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! temp/config */ "./src/temp/config.js");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(temp_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\components\\styleguide\\Styleguide-Tracking.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Demonstrates analytics tracking patterns (xDB)
 */
class StyleguideTracking extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "event", void 0);

    _defineProperty(this, "goal", void 0);

    _defineProperty(this, "outcomeName", void 0);

    _defineProperty(this, "outcomeValue", void 0);

    _defineProperty(this, "campaign", void 0);

    _defineProperty(this, "pageId", void 0);

    _defineProperty(this, "pageUrl", void 0);

    _defineProperty(this, "trackingApiOptions", void 0);

    this.event = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.goal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.outcomeName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.outcomeValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.campaign = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.pageId = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.pageUrl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.trackingApiOptions = {
      host: temp_config__WEBPACK_IMPORTED_MODULE_5___default.a.sitecoreApiHost,
      querystringParams: {
        sc_apikey: temp_config__WEBPACK_IMPORTED_MODULE_5___default.a.sitecoreApiKey
      },
      fetcher: lib_data_fetcher__WEBPACK_IMPORTED_MODULE_4__["dataFetcher"]
    };
  }

  submitEvent() {
    if (!this.event.current) return;
    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([{
      eventId: this.event.current.value
    }], this.trackingApiOptions).then(() => alert('Page event pushed')).catch(error => alert(error));
  }

  submitGoal() {
    if (!this.goal.current) return;
    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([{
      goalId: this.goal.current.value
    }], this.trackingApiOptions).then(() => alert('Goal pushed')).catch(error => alert(error));
  }

  submitOutcome() {
    if (!this.pageUrl.current || !this.pageId.current || !this.outcomeName.current || !this.outcomeValue.current) {
      return;
    }

    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([{
      url: this.pageUrl.current.value,
      pageId: this.pageId.current.value,
      outcomeId: this.outcomeName.current.value,
      currencyCode: 'USD',
      monetaryValue: this.outcomeValue.current.value
    }], this.trackingApiOptions).then(() => alert('Outcome pushed')).catch(error => alert(error));
  }

  triggerCampaign() {
    if (!this.campaign.current) return;
    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([{
      campaignId: this.campaign.current.value
    }], this.trackingApiOptions).then(() => alert('Campaign set')).catch(error => alert(error));
  }

  submitPageView() {
    if (!this.pageId.current || !this.pageUrl.current) return;
    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([{
      pageId: this.pageId.current.value,
      url: this.pageUrl.current.value
    }], this.trackingApiOptions).then(() => alert('Page view pushed')).catch(error => alert(error));
  }

  abandonSession() {
    const abandonOptions = _objectSpread({
      action: 'flush'
    }, this.trackingApiOptions);

    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([], abandonOptions).then(() => alert('Interaction has been terminated and its data pushed to xConnect.')).catch(error => alert(error));
  }

  submitBatching() {
    _sitecore_jss_sitecore_jss_tracking__WEBPACK_IMPORTED_MODULE_3__["trackingApi"].trackEvent([{
      eventId: 'Download'
    }, {
      goalId: 'Instant Demo'
    }, {
      outcomeId: 'Opportunity'
    }, {
      pageId: '{110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9}',
      url: '/arbitrary/url/you/own'
    }, // this goal will be added to the new page/route ID set above, not the current route
    {
      goalId: 'Register'
    }], this.trackingApiOptions).then(() => alert('Batch of events pushed')).catch(error => alert(error));
  }

  render() {
    const disconnectedMode = this.props.sitecoreContext.itemId === 'available-in-connected-mode';
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, this.props), {}, {
      e2eId: "styleguide-tracking",
      children: [disconnectedMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "The tracking API is only available in connected, integrated, or headless modes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }, this), !disconnectedMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "alert alert-warning",
          children: ["Note: The JSS tracker API is disabled by default. Consult the", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://jss.sitecore.com/docs/fundamentals/services/tracking",
            children: "tracking documentation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, this), ' ', "to enable it."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Event"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Events are defined in ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "/sitecore/system/Settings/Analytics/Page Events"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "event",
              children: "Event GUID or Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "event",
              className: "form-control",
              ref: this.event
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitEvent.bind(this),
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Goal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Goals are defined in ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "/sitecore/system/Marketing Control Panel/Goals"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 40
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "goal",
              children: "Goal GUID or Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "goal",
              ref: this.goal,
              placeholder: "i.e. Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitGoal.bind(this),
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Outcome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Outcomes are defined in", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "/sitecore/system/Marketing Control Panel/Outcomes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "outcomeName",
              children: "Outcome GUID or Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "outcomeName",
              ref: this.outcomeName,
              placeholder: "i.e. Marketing Lead"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "outcomeValue",
              children: "Monetary Value (optional)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              className: "form-control",
              id: "outcomeValue",
              ref: this.outcomeValue,
              placeholder: "i.e. 1337.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitOutcome.bind(this),
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Campaign"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Campaigns are defined in", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "/sitecore/system/Marketing Control Panel/Campaigns"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "campaign",
              children: "Campaign GUID or Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "campaign",
              ref: this.campaign
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.triggerCampaign.bind(this),
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Page View"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Track arbitrary page views for custom routing or offline use. Note that Layout Service tracks page views by default unless ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
                children: "tracking=false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 63
              }, this), " is passed in its query string."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "pageId",
              children: "Page Item GUID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "pageId",
              ref: this.pageId,
              placeholder: "i.e. {11111111-1111-1111-1111-111111111111}"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "pageUrl",
              children: "Page URL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "pageUrl",
              ref: this.pageUrl,
              placeholder: "i.e. /foo/bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitPageView.bind(this),
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Batching"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "The tracking API supports pushing a whole batch of events in a single request. This can be useful for queuing strategies or offline PWA usage."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: this.submitBatching.bind(this),
              children: "Submit Batch of Events"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              children: "Interaction Control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Tracking data is not pushed into the xConnect service until your session ends on the Sitecore server. Click this button to instantly end your session and flush the data - great for debugging and testing."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "alert alert-warning",
              children: ["Note: By default ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                children: "anonymous"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 36
              }, this), " contacts will not be shown in Experience Profile. If your interactions are not showing up in Experience Profile, you may need to", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://doc.sitecore.net/developers/xp/xconnect/xconnect-search-indexer/enable-anonymous-contact-indexing.html",
                children: "enable anonymous contact indexing."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: this.abandonSession.bind(this),
              children: "End Interaction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_2__["withSitecoreContext"])()(StyleguideTracking));

/***/ }),

/***/ "./src/lib/data-fetcher.ts":
/*!*********************************!*\
  !*** ./src/lib/data-fetcher.ts ***!
  \*********************************/
/*! exports provided: dataFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFetcher", function() { return dataFetcher; });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Implements a data fetcher using Axios - replace with your favorite
 * SSR-capable HTTP or fetch library if you like. See HttpDataFetcher<T> type
 * in sitecore-jss library for implementation details/notes.
 * @param {string} url The URL to request; may include query string
 * @param {any} data Optional data to POST with the request.
 */

function dataFetcher(url, data) {
  return new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["AxiosDataFetcher"]().fetch(url, data);
}

/***/ }),

/***/ "./src/lib/dictionary-service-factory.ts":
/*!***********************************************!*\
  !*** ./src/lib/dictionary-service-factory.ts ***!
  \***********************************************/
/*! exports provided: DictionaryServiceFactory, dictionaryServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryServiceFactory", function() { return DictionaryServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryServiceFactory", function() { return dictionaryServiceFactory; });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! temp/config */ "./src/temp/config.js");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(temp_config__WEBPACK_IMPORTED_MODULE_1__);
// import { DictionaryService, RestDictionaryService } from '@sitecore-jss/sitecore-jss-Header';
// import config from 'temp/config';
//
// export class DictionaryServiceFactory {
//   create(): DictionaryService {
//     return new RestDictionaryService({
//       apiHost: config.sitecoreApiHost,
//       apiKey: config.sitecoreApiKey,
//       siteName: config.jssAppName,
//     });
//   }
// }
//
// export const dictionaryServiceFactory = new DictionaryServiceFactory();
//GRAPH QL


class DictionaryServiceFactory {
  create() {
    // Switch to REST endpoint if we are in disconnected mode
    if (process.env.JSS_MODE === _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["JSS_MODE_DISCONNECTED"]) {
      return new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["RestDictionaryService"]({
        apiHost: `http://localhost:${process.env.PROXY_PORT || 3042}`,
        apiKey: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.sitecoreApiKey,
        siteName: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.jssAppName
      });
    }

    return new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLDictionaryService"]({
      endpoint: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.graphQLEndpoint,
      apiKey: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.sitecoreApiKey,
      siteName: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.jssAppName
      /*
      The Dictionary Service needs a root item ID in order to fetch dictionary phrases for the current
      app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
      otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
      rootItemId: '{GUID}'
      */

    });
  }

}
const dictionaryServiceFactory = new DictionaryServiceFactory();

/***/ }),

/***/ "./src/lib/layout-service-factory.ts":
/*!*******************************************!*\
  !*** ./src/lib/layout-service-factory.ts ***!
  \*******************************************/
/*! exports provided: LayoutServiceFactory, layoutServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutServiceFactory", function() { return LayoutServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutServiceFactory", function() { return layoutServiceFactory; });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! temp/config */ "./src/temp/config.js");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(temp_config__WEBPACK_IMPORTED_MODULE_1__);
// import { LayoutService, RestLayoutService } from '@sitecore-jss/sitecore-jss-Header';
// import config from 'temp/config';
//
// export class LayoutServiceFactory {
//   create(): LayoutService {
//     return new RestLayoutService({
//       apiHost: config.sitecoreApiHost,
//       apiKey: config.sitecoreApiKey,
//       siteName: config.jssAppName,
//       configurationName: 'default',
//     });
//   }
// }
//
// export const layoutServiceFactory = new LayoutServiceFactory();


class LayoutServiceFactory {
  create() {
    // Switch to REST endpoint if we are in disconnected mode
    if (process.env.JSS_MODE === _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["JSS_MODE_DISCONNECTED"]) {
      return new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["RestLayoutService"]({
        apiHost: `http://localhost:${process.env.PROXY_PORT || 3042}`,
        apiKey: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.sitecoreApiKey,
        siteName: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.jssAppName
      });
    }

    return new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLLayoutService"]({
      endpoint: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.graphQLEndpoint,
      apiKey: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.sitecoreApiKey,
      siteName: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.jssAppName
    });
  }

}
const layoutServiceFactory = new LayoutServiceFactory();

/***/ }),

/***/ "./src/lib/page-props-factory.ts":
/*!***************************************!*\
  !*** ./src/lib/page-props-factory.ts ***!
  \***************************************/
/*! exports provided: SitecorePagePropsFactory, sitecorePagePropsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitecorePagePropsFactory", function() { return SitecorePagePropsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sitecorePagePropsFactory", function() { return sitecorePagePropsFactory; });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_dictionary_service_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/dictionary-service-factory */ "./src/lib/dictionary-service-factory.ts");
/* harmony import */ var lib_layout_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/layout-service-factory */ "./src/lib/layout-service-factory.ts");
/* harmony import */ var temp_componentFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! temp/componentFactory */ "./src/temp/componentFactory.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Extract normalized Sitecore item path from query
 * @param {ParsedUrlQuery | undefined} params
 */

function extractPath(params) {
  var _params$path;

  if (params === undefined) {
    return '/';
  }

  let path = Array.isArray(params.path) ? params.path.join('/') : (_params$path = params.path) !== null && _params$path !== void 0 ? _params$path : '/'; // Ensure leading '/'

  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  return path;
}
/**
 * Determines whether context is GetServerSidePropsContext (SSR) or GetStaticPropsContext (SSG)
 * @param {GetServerSidePropsContext | GetStaticPropsContext} context
 */


const isServerSidePropsContext = function (context) {
  return context.req !== undefined;
};

class SitecorePagePropsFactory {
  constructor() {
    _defineProperty(this, "componentPropsService", void 0);

    _defineProperty(this, "dictionaryService", void 0);

    _defineProperty(this, "layoutService", void 0);

    this.componentPropsService = new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["ComponentPropsService"]();
    this.dictionaryService = lib_dictionary_service_factory__WEBPACK_IMPORTED_MODULE_1__["dictionaryServiceFactory"].create();
    this.layoutService = lib_layout_service_factory__WEBPACK_IMPORTED_MODULE_2__["layoutServiceFactory"].create();
  }
  /**
   * Create SitecorePageProps for given context (SSR / GetServerSidePropsContext or SSG / GetStaticPropsContext)
   * @param {GetServerSidePropsContext | GetStaticPropsContext} context
   * @see SitecorePageProps
   */


  async create(context) {
    var _layoutData, _layoutData$sitecore;

    let locale,
        layoutData,
        dictionary,
        componentProps = {},
        notFound = false;

    if (context.preview) {
      /**
       * Preview mode
       */
      // If we're in preview (editing) mode, use data already sent along with the editing request
      const data = await _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["editingDataService"].getEditingData(context.previewData);

      if (!data) {
        throw new Error(`Unable to get editing data for preview ${JSON.stringify(context.previewData)}`);
      }

      locale = data.language;
      layoutData = data.layoutData;
      dictionary = data.dictionary;
    } else {
      var _context$locale;

      /**
       * Normal mode
       */
      // Get normalized Sitecore item path
      const path = extractPath(context.params); // Use context locale if Next.js i18n is configured, otherwise use language defined in package.json

      locale = (_context$locale = context.locale) !== null && _context$locale !== void 0 ? _context$locale : _package_json__WEBPACK_IMPORTED_MODULE_4__["config"].language; // Fetch layout data, passing on req/res for SSR

      layoutData = await this.layoutService.fetchLayoutData(path, locale, // eslint-disable-next-line prettier/prettier
      isServerSidePropsContext(context) ? context.req : undefined, isServerSidePropsContext(context) ? context.res : undefined);

      if (!layoutData.sitecore.route) {
        // A missing route value signifies an invalid path, so set notFound.
        // Our page routes will return this in getStatic/ServerSideProps,
        // which will trigger our custom 404 page with proper 404 status code.
        // You could perform additional logging here to track these if desired.
        notFound = true;
      } // Fetch dictionary data


      dictionary = await this.dictionaryService.fetchDictionaryData(locale);
    } // Retrieve component props using side-effects defined on components level


    if ((_layoutData = layoutData) === null || _layoutData === void 0 ? void 0 : (_layoutData$sitecore = _layoutData.sitecore) === null || _layoutData$sitecore === void 0 ? void 0 : _layoutData$sitecore.route) {
      if (isServerSidePropsContext(context)) {
        componentProps = await this.componentPropsService.fetchServerSideComponentProps({
          layoutData: layoutData,
          context,
          componentModule: temp_componentFactory__WEBPACK_IMPORTED_MODULE_3__["componentModule"]
        });
      } else {
        componentProps = await this.componentPropsService.fetchStaticComponentProps({
          layoutData: layoutData,
          context,
          componentModule: temp_componentFactory__WEBPACK_IMPORTED_MODULE_3__["componentModule"]
        });
      }
    }

    return {
      locale,
      layoutData,
      dictionary,
      componentProps,
      notFound
    };
  }

}
const sitecorePagePropsFactory = new SitecorePagePropsFactory();

/***/ }),

/***/ "./src/lib/sitemap-fetcher.ts":
/*!************************************!*\
  !*** ./src/lib/sitemap-fetcher.ts ***!
  \************************************/
/*! exports provided: SitecoreSitemapFetcher, sitemapFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitecoreSitemapFetcher", function() { return SitecoreSitemapFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sitemapFetcher", function() { return sitemapFetcher; });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! temp/config */ "./src/temp/config.js");
/* harmony import */ var temp_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(temp_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/no-var-requires */



class SitecoreSitemapFetcher {
  constructor() {
    _defineProperty(this, "_graphqlSitemapService", void 0);

    _defineProperty(this, "_disconnectedSitemapService", void 0);

    this._graphqlSitemapService = new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLSitemapService"]({
      endpoint: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.graphQLEndpoint,
      apiKey: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.sitecoreApiKey,
      siteName: temp_config__WEBPACK_IMPORTED_MODULE_1___default.a.jssAppName
      /*
      The Sitemap Service needs a root item ID in order to fetch the list of pages for the current
      app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
      otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
      rootItemId: '{GUID}'
      */

    });
    this._disconnectedSitemapService = new _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_0__["DisconnectedSitemapService"](this.getManifest());
  }
  /**
   * Get sitecore-import.json manifest
   */


  getManifest() {
    if (process.env.JSS_MODE !== 'disconnected') return null;

    try {
      const manifest = __webpack_require__(/*! sitecore/manifest/sitecore-import.json */ "./sitecore/manifest/sitecore-import.json");

      return manifest;
    } catch (error) {
      throw Error("[Disconnected Export] Please make sure you've started the disconnected proxy `npm run start:disconnected-proxy`");
    }
  }
  /**
   * Generates SitecoreSitemap for given mode (Export / Disconnected Export / SSG)
   * @param {GetStaticPathsContext} context
   */


  async fetch(context) {
    // If we are in Export/Disconnected Export mode
    if (process.env.EXPORT_MODE) {
      return process.env.JSS_MODE === 'disconnected' ? this._disconnectedSitemapService.fetchExportSitemap() : this._graphqlSitemapService.fetchExportSitemap(_package_json__WEBPACK_IMPORTED_MODULE_2__["config"].language);
    }

    return this._graphqlSitemapService.fetchSSGSitemap((context === null || context === void 0 ? void 0 : context.locales) || []);
  }

}
const sitemapFetcher = new SitecoreSitemapFetcher();

/***/ }),

/***/ "./src/lib/util.ts":
/*!*************************!*\
  !*** ./src/lib/util.ts ***!
  \*************************/
/*! exports provided: getPublicUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublicUrl", function() { return getPublicUrl; });
/**
 * Get the publicUrl.
 * This is used primarily to enable compatibility with the Sitecore Experience Editor.
 */
const getPublicUrl = () => {
  return "http://localhost:3000" || false;
};

/***/ }),

/***/ "./src/pages/[[...path]].tsx":
/*!***********************************!*\
  !*** ./src/pages/[[...path]].tsx ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/NotFound */ "./src/NotFound.tsx");
/* harmony import */ var src_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Layout */ "./src/Layout.tsx");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "@sitecore-jss/sitecore-jss-nextjs");
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_page_props_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/page-props-factory */ "./src/lib/page-props-factory.ts");
/* harmony import */ var temp_componentFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! temp/componentFactory */ "./src/temp/componentFactory.ts");
/* harmony import */ var lib_sitemap_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/sitemap-fetcher */ "./src/lib/sitemap-fetcher.ts");

var _jsxFileName = "C:\\NEXT\\sitecore\\src\\pages\\[[...path]].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const SitecorePage = ({
  notFound,
  layoutData,
  componentProps
}) => {
  var _layoutData$sitecore, _layoutData$sitecore$;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Since Experience Editor does not support Fast Refresh need to refresh EE chromes after Fast Refresh finished
    Object(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_4__["handleExperienceEditorFastRefresh"])();
  }, []);

  if (notFound || !(layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore = layoutData.sitecore) === null || _layoutData$sitecore === void 0 ? void 0 : _layoutData$sitecore.route)) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_NotFound__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, undefined);
  }

  const context = _objectSpread({
    route: layoutData.sitecore.route,
    itemId: (_layoutData$sitecore$ = layoutData.sitecore.route) === null || _layoutData$sitecore$ === void 0 ? void 0 : _layoutData$sitecore$.itemId
  }, layoutData.sitecore.context);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_4__["ComponentPropsContext"], {
    value: componentProps,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_4__["SitecoreContext"], {
      componentFactory: temp_componentFactory__WEBPACK_IMPORTED_MODULE_6__["componentFactory"],
      context: context,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        context: context
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
}; // This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).


const getStaticPaths = async context => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
  if (false) {}

  return {
    paths: [],
    fallback: 'blocking'
  };
}; // This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.

const getStaticProps = async context => {
  const props = await lib_page_props_factory__WEBPACK_IMPORTED_MODULE_5__["sitecorePagePropsFactory"].create(context);
  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
    // In seconds
    notFound: props.notFound // Returns custom 404 page with a status code of 404 when true

  };
};
/* harmony default export */ __webpack_exports__["default"] = (SitecorePage);

/***/ }),

/***/ "./src/temp/componentFactory.ts":
/*!**************************************!*\
  !*** ./src/temp/componentFactory.ts ***!
  \**************************************/
/*! exports provided: componentModule, componentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentModule", function() { return componentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFactory", function() { return componentFactory; });
/* harmony import */ var src_components_ContentBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/ContentBlock */ "./src/components/ContentBlock.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Checkbox */ "./src/components/fields/Styleguide-FieldUsage-Checkbox.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_ContentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-ContentList */ "./src/components/fields/Styleguide-FieldUsage-ContentList.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Custom */ "./src/components/fields/Styleguide-FieldUsage-Custom.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Date */ "./src/components/fields/Styleguide-FieldUsage-Date.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-File */ "./src/components/fields/Styleguide-FieldUsage-File.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Image */ "./src/components/fields/Styleguide-FieldUsage-Image.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_ItemLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-ItemLink */ "./src/components/fields/Styleguide-FieldUsage-ItemLink.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Link */ "./src/components/fields/Styleguide-FieldUsage-Link.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Number */ "./src/components/fields/Styleguide-FieldUsage-Number.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_RichText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-RichText */ "./src/components/fields/Styleguide-FieldUsage-RichText.tsx");
/* harmony import */ var src_components_fields_Styleguide_FieldUsage_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/fields/Styleguide-FieldUsage-Text */ "./src/components/fields/Styleguide-FieldUsage-Text.tsx");
/* harmony import */ var src_components_graphql_GraphQL_ConnectedDemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/graphql/GraphQL-ConnectedDemo */ "./src/components/graphql/GraphQL-ConnectedDemo.tsx");
/* harmony import */ var src_components_graphql_GraphQL_IntegratedDemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/graphql/GraphQL-IntegratedDemo */ "./src/components/graphql/GraphQL-IntegratedDemo.tsx");
/* harmony import */ var src_components_graphql_GraphQL_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/graphql/GraphQL-Layout */ "./src/components/graphql/GraphQL-Layout.tsx");
/* harmony import */ var src_components_Header_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/Header/Header */ "./src/components/Header/Header.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_ComponentParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/styleguide/Styleguide-ComponentParams */ "./src/components/styleguide/Styleguide-ComponentParams.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_CustomRouteType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/styleguide/Styleguide-CustomRouteType */ "./src/components/styleguide/Styleguide-CustomRouteType.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Layout_Reuse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Layout-Reuse */ "./src/components/styleguide/Styleguide-Layout-Reuse.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Layout_Tabs_Tab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Layout-Tabs-Tab */ "./src/components/styleguide/Styleguide-Layout-Tabs-Tab.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Layout_Tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Layout-Tabs */ "./src/components/styleguide/Styleguide-Layout-Tabs.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Layout */ "./src/components/styleguide/Styleguide-Layout.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Multilingual__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Multilingual */ "./src/components/styleguide/Styleguide-Multilingual.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_RouteFields__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/components/styleguide/Styleguide-RouteFields */ "./src/components/styleguide/Styleguide-RouteFields.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Section__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Section */ "./src/components/styleguide/Styleguide-Section.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_SitecoreContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/components/styleguide/Styleguide-SitecoreContext */ "./src/components/styleguide/Styleguide-SitecoreContext.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Specimen */ "./src/components/styleguide/Styleguide-Specimen.tsx");
/* harmony import */ var src_components_styleguide_Styleguide_Tracking__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/components/styleguide/Styleguide-Tracking */ "./src/components/styleguide/Styleguide-Tracking.tsx");
/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.ts to modify the generation of this file.




























const components = new Map();
components.set('ContentBlock', src_components_ContentBlock__WEBPACK_IMPORTED_MODULE_0__);
components.set('Styleguide-FieldUsage-Checkbox', src_components_fields_Styleguide_FieldUsage_Checkbox__WEBPACK_IMPORTED_MODULE_1__);
components.set('Styleguide-FieldUsage-ContentList', src_components_fields_Styleguide_FieldUsage_ContentList__WEBPACK_IMPORTED_MODULE_2__);
components.set('Styleguide-FieldUsage-Custom', src_components_fields_Styleguide_FieldUsage_Custom__WEBPACK_IMPORTED_MODULE_3__);
components.set('Styleguide-FieldUsage-Date', src_components_fields_Styleguide_FieldUsage_Date__WEBPACK_IMPORTED_MODULE_4__);
components.set('Styleguide-FieldUsage-File', src_components_fields_Styleguide_FieldUsage_File__WEBPACK_IMPORTED_MODULE_5__);
components.set('Styleguide-FieldUsage-Image', src_components_fields_Styleguide_FieldUsage_Image__WEBPACK_IMPORTED_MODULE_6__);
components.set('Styleguide-FieldUsage-ItemLink', src_components_fields_Styleguide_FieldUsage_ItemLink__WEBPACK_IMPORTED_MODULE_7__);
components.set('Styleguide-FieldUsage-Link', src_components_fields_Styleguide_FieldUsage_Link__WEBPACK_IMPORTED_MODULE_8__);
components.set('Styleguide-FieldUsage-Number', src_components_fields_Styleguide_FieldUsage_Number__WEBPACK_IMPORTED_MODULE_9__);
components.set('Styleguide-FieldUsage-RichText', src_components_fields_Styleguide_FieldUsage_RichText__WEBPACK_IMPORTED_MODULE_10__);
components.set('Styleguide-FieldUsage-Text', src_components_fields_Styleguide_FieldUsage_Text__WEBPACK_IMPORTED_MODULE_11__);
components.set('GraphQL-ConnectedDemo', src_components_graphql_GraphQL_ConnectedDemo__WEBPACK_IMPORTED_MODULE_12__);
components.set('GraphQL-IntegratedDemo', src_components_graphql_GraphQL_IntegratedDemo__WEBPACK_IMPORTED_MODULE_13__);
components.set('GraphQL-Layout', src_components_graphql_GraphQL_Layout__WEBPACK_IMPORTED_MODULE_14__);
components.set('Header', src_components_Header_Header__WEBPACK_IMPORTED_MODULE_15__);
components.set('Styleguide-ComponentParams', src_components_styleguide_Styleguide_ComponentParams__WEBPACK_IMPORTED_MODULE_16__);
components.set('Styleguide-CustomRouteType', src_components_styleguide_Styleguide_CustomRouteType__WEBPACK_IMPORTED_MODULE_17__);
components.set('Styleguide-Layout-Reuse', src_components_styleguide_Styleguide_Layout_Reuse__WEBPACK_IMPORTED_MODULE_18__);
components.set('Styleguide-Layout-Tabs-Tab', src_components_styleguide_Styleguide_Layout_Tabs_Tab__WEBPACK_IMPORTED_MODULE_19__);
components.set('Styleguide-Layout-Tabs', src_components_styleguide_Styleguide_Layout_Tabs__WEBPACK_IMPORTED_MODULE_20__);
components.set('Styleguide-Layout', src_components_styleguide_Styleguide_Layout__WEBPACK_IMPORTED_MODULE_21__);
components.set('Styleguide-Multilingual', src_components_styleguide_Styleguide_Multilingual__WEBPACK_IMPORTED_MODULE_22__);
components.set('Styleguide-RouteFields', src_components_styleguide_Styleguide_RouteFields__WEBPACK_IMPORTED_MODULE_23__);
components.set('Styleguide-Section', src_components_styleguide_Styleguide_Section__WEBPACK_IMPORTED_MODULE_24__);
components.set('Styleguide-SitecoreContext', src_components_styleguide_Styleguide_SitecoreContext__WEBPACK_IMPORTED_MODULE_25__);
components.set('Styleguide-Specimen', src_components_styleguide_Styleguide_Specimen__WEBPACK_IMPORTED_MODULE_26__);
components.set('Styleguide-Tracking', src_components_styleguide_Styleguide_Tracking__WEBPACK_IMPORTED_MODULE_27__);
function componentModule(componentName) {
  return components.get(componentName);
}
;
function componentFactory(componentName) {
  var _components$get;

  return (_components$get = components.get(componentName)) === null || _components$get === void 0 ? void 0 : _components$get.default;
}
;

/***/ }),

/***/ "./src/temp/config.js":
/*!****************************!*\
  !*** ./src/temp/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.
const config = {};
config.sitecoreApiKey = process.env.SITECORE_API_KEY || "2A089C5D-32F2-44C0-8833-D43F69D5D4E6", config.sitecoreApiHost = process.env.SITECORE_API_HOST || "https://testcm.dev.local", config.jssAppName = process.env.JSS_APP_NAME || "corsair", config.graphQLEndpointPath = process.env.GRAPH_QL_ENDPOINT_PATH || "/sitecore/api/graph/edge", config.graphQLEndpoint = process.env.GRAPH_QL_ENDPOINT || `${config.sitecoreApiHost}${config.graphQLEndpointPath}`;
module.exports = config;

/***/ }),

/***/ "@sitecore-jss/sitecore-jss-nextjs":
/*!****************************************************!*\
  !*** external "@sitecore-jss/sitecore-jss-nextjs" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sitecore-jss/sitecore-jss-nextjs");

/***/ }),

/***/ "@sitecore-jss/sitecore-jss-tracking":
/*!******************************************************!*\
  !*** external "@sitecore-jss/sitecore-jss-tracking" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sitecore-jss/sitecore-jss-tracking");

/***/ }),

/***/ "next-localization":
/*!************************************!*\
  !*** external "next-localization" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-localization");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });