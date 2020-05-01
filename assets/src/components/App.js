const template = `
  <AddForm></AddForm>
`;

import ZDClient from '../services/ZDClient.js';
import { state, getters } from '../store/store.js';
import AddForm from '../components/AddForm.js';

const App = {
  components: {
    AddForm
  },
  template,
  computed: {
    state: () => state,
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
