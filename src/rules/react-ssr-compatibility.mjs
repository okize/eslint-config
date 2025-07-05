// only add rules related to maintaining SSR compatibility
// see:
// - https://github.com/kopiro/eslint-plugin-ssr-friendly
// - https://github.com/correttojs/eslint-plugin-react-hooks-ssr
// - https://github.com/nirtamir2/eslint-plugin-no-typeof-window-undefined

export default {
  // Disallow use of DOM globals in module and global scope, as this will break any import/require in a NodeJS environment.
  // https://github.com/kopiro/eslint-plugin-ssr-friendly#no-dom-globals-in-module-scope
  'ssr-friendly/no-dom-globals-in-module-scope': 'error',

  // Disallow use of DOM globals in class constructors, as this will break SSR if you're instantiating this class as singleton or you're rendering this component.
  // https://github.com/kopiro/eslint-plugin-ssr-friendly#no-dom-globals-in-constructor
  'ssr-friendly/no-dom-globals-in-constructor': 'error',

  // Disallow use of DOM globals in render() method of a React class-component, as this will break SSR if you're rendering this component.
  // https://github.com/kopiro/eslint-plugin-ssr-friendly#no-dom-globals-in-react-cc-render
  'ssr-friendly/no-dom-globals-in-react-cc-render': 'error',

  // Disallow use of DOM globals in the render-cycle of a React FC, as this will break SSR if you're rendering this component.
  // https://github.com/kopiro/eslint-plugin-ssr-friendly#no-dom-globals-in-react-fc
  'ssr-friendly/no-dom-globals-in-react-fc': 'error',

  // forbid DOM globals within react server side rendering
  // a global within `useEffect` or custom hook is allowed
  // a global within a function prefixed by `async` (eg. `asyncMyFunc`) is allowed
  // a global within a `useState`, `useReducer` and `useMemo` callback is forbidden
  // a global within a React `Component` is forbidden
  'react-hooks-ssr/react-hooks-global-ssr': 'error',

  // avoid checking for window since it is supported by Deno
  // prefer `typeof document === "undefined"` instead
  // https://github.com/nirtamir2/eslint-plugin-no-typeof-window-undefined#no-typeof-window-undefined
  'no-typeof-window-undefined/no-typeof-window-undefined': 'error',
};
