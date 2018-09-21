const title = "practical component Exercise 3 tab",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;

Vue.component('tabs', {
  //props: ['title'],
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>
    <div class="table-contents">
      <slot></slot>
    </div>
  </div>
  `,
  // //data() {
  //   return {
  //     isActive : 'is-active',
  //     tabs: [
  //       { title:'tab1', isActive: true, content: 'tab1 content'},
  //       { title:'tab2', isActive: false, content: 'tab1 content'},
  //       { title:'tab3', isActive: false, content: 'tab1 content'}
  //     ]
  //   }
  // },
  mounted(){
    console.log(this.$children)
  }
})
Vue.component('tab',{
  props:{
    name:{required: true}
  },
  template : `
    <div><slot></slot></div>
  `
})

new Vue({
  el: '#root'
})
