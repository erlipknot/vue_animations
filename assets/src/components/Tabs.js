const template = `
<ul class="c-tab__list" role="tablist">
  <li
  v-for="(tab, index) in tabs" :key="index"
  class="c-tab__list__item"
  :class="{ 'is-selected': tabIndex === index }"
  @click="setTabIndex(index)">{{ tab }}</li>
</ul>
`
import ZDClient from '../services/ZDClient.js';
import { state, getters } from '../store/store.js';

const Tabs = {
  template,
  computed: {
    state: () => state,
    ...getters
  },
  data() {
    return {
      tabs: ['Form', 'Text', 'Validation']
    }
  },
  methods: {
    setTabIndex(tabIndex) {
      state.tabIndex = tabIndex;
    }
  },
  mounted() {
    ZDClient.resizeFrame(this.$root.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$root.$el.scrollHeight);
  }
};

export default Tabs;