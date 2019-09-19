
Vue.component('alinkItem', {
  props:['name'],
  template: `
	  
    	<a href="javascript:;">{{name}}</a>
  `,
  data(){
      return {}
  }
})


//title
const tit = Vue.component('tit',{
	props: ['name'],
	template : `
	  
	  <h1 class="pt21 pb13">{{name}} <slot></slot></h1>
  `,
  data(){
		return {}
	}
})

//coupon-list
const cpItem = Vue.component('cpItem',{
	props: ['id','item'],
	template : `
	
		<li class="modal-toggle">
			<div class="img"><img :src="item.src" alt="" /></div>
			<div class="txt">
				{{item.title}}
				<span class="date">{{item.date}}</span>
			</div>
		</li>
  `,
  data(){
		return {
			items: [
			    { id: 1, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한 스타벅스 아메리카노 20% 할인',date:'2019년 8월 31일까지' },
			    { id: 2, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한 스타벅스',date:'2019년 10월 20일까지'},
			    { id: 3, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' }
			],
			
		}
	}
})

const modal = Vue.component('modal', {
  //props: ['msg'],
  template: `
  <div id="modal-coupon" class="modal modal-coupon">
      <div class="modal-overlay modal-toggle"></div>
      <div class="modal-wrapper">
      	<a class="btn btn-cancel"><img src="/comm/event_coupon/images/icon-popup-close.png" alt="닫기" style="width:24px; height:24px"/></a>
        <div class="modal-content">
	        <div class="scroll_">
	        	<div class="mc-top">
	        		<h2 class="logo"><img src="/comm/event_coupon/images/icon-logo-black.png" alt="tmap logo" style="width:58px; height:23px"/></h2>
		        	<div class="cp-img">
		        		<img src="/comm/event_coupon/images/img-coupon-ssg.png" alt="" />
		        	</div>
		        	<div class="cp-txt">
		        		가나다라마바사아자차카파타하앓닭가나다라마바사아자차카파타하앓닭
		        		<span class="br date">12월 31일까지</span>
		        	</div>
	        	</div>
	        	
	        	<!-- 쿠폰 넘버 class : num --><!--  <div class="num">391802 - R21938021</div> -->
	        	<!-- 쿠폰 바코드 class : bcode --><div class="bcode"><img src="/comm/event_coupon/images/img-barcode.png" alt="" /></div> 
	        	<div class="cp-info">
	        		<h3>사용처</h3>
	        		<p>가나다라마바사아자차카파타하가나다라마바사아자차카파</p>
	        		<h3 class="mt13">이용안내 및 도움말</h3>
	        		<ul>
	        			<li>가나다라마바사아자차카파타하가나다라마바사아자차카파가나다라마바사아자차카파타하가나다라마바사아자차카파</li>
	        			<li>가나다라마바사아자차카파타하가나다라마바사아자차카파</li>
	        			<li>가나다라마바사아자차카파타하가나다라마바사아자차카파</li>
	        		</ul>
	        		<h3 class="mt13">고객문의</h3>
	        		<p>가나다라마바사아자차카파타하가나다라마바사아자차카파</p>
	        	</div>
	        </div>
        </div>
      <div class="_df btns">
        <button class="btn btn-block btn-del">사용하신 쿠폰은 삭제해주세요</button>
      </div>
      </div>
      
    </div>
    <!-- //쿠폰팝업 -->
  `,
  data(){
      return {}
  }
})

var vm = new Vue({
  el: '#root',
  data:{
	 currentItems: [
		    { id: 1, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한 스타벅스 아메리카노 20% 할인',date:'2019년 8월 31일까지' },
		    { id: 2, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한 스타벅스',date:'2019년 10월 20일까지'},
		    { id: 3, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' }
		],
	 expiredItems: [
		    { id: 1, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한 스타벅스 아메리카노 20% 할인',date:'2019년 8월 31일까지' },
		    { id: 2, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한 스타벅스',date:'2019년 10월 20일까지'},
		    { id: 3, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' },
		    { id: 3, src:'/comm/event_coupon/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' }
		]
  },
  mounted(){
	  console.log(this.currentItems.length)
  }
})
