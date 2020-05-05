const template = `
<div>
  <div class="tabs">
    <Tabs></Tabs>
  </div>
  <transition name="slide-fade" mode="out-in">
    <AddForm v-if="tabIndex === 0"></AddForm>
    <TestText v-else-if="tabIndex === 1"></TestText>
  </transition>
  </div>
</div>
`;

import ZDClient from '../services/ZDClient.js';
import { getters } from '../store/store.js';
import Tabs from '../components/Tabs.js';
import AddForm from '../components/AddForm.js';
import TestText from './TestText.js';

const App = {
  components: {
    Tabs,
    AddForm,
    TestText
  },
  template,
  computed: {
    ...getters
  },
  mounted() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
