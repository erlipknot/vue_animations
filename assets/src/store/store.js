import i18n from '../i18n/en-US.js';

export const state = Vue.observable({
  i18n,
  tabIndex: 0
});

export const getters = {
  i18n: () => state.i18n,
  tabIndex: () => state.tabIndex
};

export const methods = {};