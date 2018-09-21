const title = "practical component Exercise 1 message",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;


Vue.component('tabs', {
  //props: ['msg'],
  template: `
  <div class="tabs">
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a href="#tab1" id="tab1">Music</a></li>
      <li><a href="#tab2" id="tab2">Videos</a></li>
      <li><a href="#tab3" id="tab3">Documents</a></li>
    </ul>
  </div>
  `,
  data() {
    return {}
  }
})
Vue.component('tab', {
  //props: ['msg'],
  template: `
    <li><a href="#">Pictures</a></li>
  `
})
Vue.component('tab-panel', {
  //props: ['msg'],
  template: `
    <div class="tab-panels" id="tab1">
      <p>tab1</p>
    </div>
  `
})

new Vue({
  el: '#root',
  data: {
    showModal: false
  }
})
