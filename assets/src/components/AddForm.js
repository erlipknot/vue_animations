const template = `
<div class="add-form">
  <div class="add-form__inputs">
    <input class="c-txt__input" id="txt-0" placeholder="Name" type="text" v-model="userName">
    <button class="c-btn c-btn--primary" @click="addUser">Add</button>
    <button class="c-btn c-btn--primary" @click="sortUser">Sort</button>
  </div>
  <div class="add-form__content">
  <transition-group name="slide-up" tag="ul" appear>
  <!--
  name = used to target and make unique our transition
  tag = to spacify the element to render by default reders the tag <span>
  appear = wheter to apply the transition when the component appears
  -->
    <li v-for="user in users"  :key="user" class="add-form__content--user-info">{{ user }}</li>
  </transition-group>
  </div>
</div>`;

import ZDClient from '../services/ZDClient.js';

const Form = {
  template,
  data() {
    return {
      users: ['Skip', 'Fabio', 'Linda', 'Alex', 'Pablo'],
      userName: ''
    }
  },
  methods: {
    addUser() {
      this.users.push(this.userName);
      this.userName = '';
    },
    sortUser() {
      this.users.sort();
    }
  },
  mounted() {
    ZDClient.resizeFrame(this.$root.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$root.$el.scrollHeight);
  },
};

export default Form;