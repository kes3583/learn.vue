const title = "Named Slots in a Nutshell",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;

Vue.component('modal', {
  //props: ['title'],
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="header"></slot>
        </p>
        <button v-on:click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <button  class="button is-success">Save changes</button>
        <button  @click="closeModal" class="button">Cancel</button>
      </footer>
    </div>
  </div>
  `,
  data(){
    return{
      //showModal : false
    }
  },
  methods:{
    closeModal(){
      console.log('component method')
      this.$emit('close')
    }
  }

})

new Vue({
  el: '#root',
  data:{
    showModal: true
  },
  methods:{
    cancelModal(){
      console.log('new vue method')
      this.showModal = false;
    }
  }
})
