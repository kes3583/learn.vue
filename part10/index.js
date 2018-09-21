const title = "practical component Exercise 2 Modal",
selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;


Vue.component('modal', {
  //props: ['msg'],
  template: `
  <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
          <div class="box">
            <slot></slot>
          </div>
      </div>
      <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
  </div>
  `,
  data(){
      return {}
  }
})


new Vue({
  el: '#root',
  data:{
    showModal : false
  }
})
