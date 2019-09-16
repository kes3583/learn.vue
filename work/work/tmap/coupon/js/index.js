
Vue.component('cp-header', {
  template: `
	  <header>
    	<a href="javascript:;" class="btn-back"></a>
    	<a href="javascript:;" class="tit">이벤트&쿠폰</a>
    	<a href="javascript:;" class="btn-right">제휴</a>
	  </header>
  `,
  data(){
      return {}
  }
})
Vue.component('tabs', {
  template: `
	  <div class="cp-tabs">
		<a href="#" v-for="tab in tabs" >{{ tab }}</a>	
	  </div>
  `,
  data(){
      return {
    	  tabs : ['이벤트','쿠폰'],
    	  selected: '쿠폰'
      };
  }
})


var vm = new Vue({
  el: '#root',
  data:{
	 //isActive : false
  }
})
