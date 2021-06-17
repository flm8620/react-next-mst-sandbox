import { useMemo } from 'react';
import { types, applySnapshot } from 'mobx-state-tree';

let store;

const Store = types.model({
  number: types.number
});

export function initializeStore(snapshot = null) {
  const isServer = typeof window === 'undefined';
  console.log('init store at ' + (isServer ? 'server' : 'client'));
  console.log(`store is ${store}`);

  const _store = store ?? Store.create({ number: Math.random() * 100 });

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
