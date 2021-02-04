import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-community/async-storage';
import * as actionTypes from './Product/actionTypes';

export const cacheMiddleware = (store) => (next) => (action) => {
  // console.log('STATE BEFORE', store.getState().Product.productList);
  // console.log('ACTION DISPATCHED', action);
  if (action.type === actionTypes.GET_PRODUCT_LIST_REQUEST) {
    const productlist = store.getState().Product.productList;

    const cache = new Cache({
      namespace: 'PLP',
      policy: {
        stdTTL: 3600, // the standard ttl as number in seconds, default: 0 (unlimited)
      },
      backend: AsyncStorage,
    });

    cache.get('productList').then((data) => {
      // console.log('data cached', data);
      if (productlist.length === 0) {
        next(action);
        cache.set('productList', store.getState().Product.productList);
      } else {
        store.setState('productList', data);
      }
    });
  } else {
    next(action);
  }

  // console.log('STATE AFTER', store.getState());
};
