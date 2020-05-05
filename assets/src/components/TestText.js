const template = `
<div class="test-text">
  <p>Integer dapibus vitae sem et faucibus. Proin consectetur nisi at sapien cursus, a tempor ante pharetra. Nunc lacinia erat dui, quis venenatis lorem viverra at. Donec quis leo quis mauris hendrerit faucibus. Vivamus quis quam eget orci molestie suscipit et nec sapien. Duis vitae hendrerit diam. Nullam pellentesque pellentesque lorem, a scelerisque eros scelerisque in. Fusce hendrerit lacinia nunc, id porttitor nunc sodales nec. Aenean nunc lorem, dignissim vel risus non, eleifend imperdiet dolor. Fusce aliquet non ipsum a tristique. Donec imperdiet nunc eget cursus mattis. Duis ut consequat orci. Curabitur sed scelerisque sapien. Nulla lorem velit, efficitur vel condimentum feugiat, feugiat id libero.</p>
</div>
`;

import ZDClient from '../services/ZDClient.js';

const TestText = {
  template,
  mounted() {
    ZDClient.resizeFrame(this.$root.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$root.$el.scrollHeight);
  }
};

export default TestText;