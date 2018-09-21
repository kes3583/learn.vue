const title = "practical component Exercise 3 tab",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;

Vue.component('tabs', {
  //props: ['title'],
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
    </div>
    <div class="table-contents">
      <slot></slot>
    </div>
  </div>
  `,
  data(){
    return { tabs : [] };
  },
  created(){
    this.tabs = this.$children;
    console.log(this.tabs)
  },
  methods:{
    selectTab(selectedTab){
      //console.log(selectedTab.name)
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name)
      })

    }
  }
})
Vue.component('tab',{
  props:{
    name : { required : true },
    selected: {defalut : false}
  },
  data(){
    return{
      isActive : false
    }
  },
  computed:{
    href(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted(){
    this.isActive = this.selected
  },
  template : `
    <div :id="this.name" v-show="isActive" ><slot></slot></div>
  `
})

new Vue({
  el: '#root'
})
