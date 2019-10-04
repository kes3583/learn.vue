<template>
  <div>
    <header>
      <a name="" class="btn-back" href="javascript:TmapWebView.closeWebView();"></a>
      <a name="이벤트&쿠폰" class="tit">이벤트&쿠폰</a>
      <a name="제휴" class="btn-right" @click="showServices($event, 'detailServices')">제휴</a>
	  </header>
    <app-tab></app-tab>
    <div class="wrapper coupon">
      <app-couponList v-bind:currentItems="currentItems" v-bind:currentTitle="currentTitle"></app-couponList>
    </div>
    <app-partnerList></app-partnerList>
    <app-couponModal></app-couponModal>
    <app-confirmModal></app-confirmModal>
  </div>
</template>

<script>
  //import toggleMixin from './toggleMixin.js';
  import CouponTab from './couponTab.vue';
  import CouponList from './couponList.vue';
  import PartnerList from './partnerList.vue';
  import couponModal from './couponModal.vue';
  import confirmModal from './confirmModal.vue';

  export default {
    name:'app',
    components: {
      'app-tab': CouponTab,
      'app-couponList': CouponList,
      'app-partnerList': PartnerList,
      'app-couponModal': couponModal,
      'app-confirmModal': confirmModal
    },
    data(){
      return {
          currentTitle: '보유인가요',
          currentItems: [
                {src:'../assets/images/img-sb.png', title: '스타필드가면 시원한 스타벅스 아메리카노 20% 할인',date:'2019년 8월 31일까지' },
                {src:'../assets/images/img-sb.png', title: '스타필드가면 시원한 스타벅스',date:'2019년 10월 20일까지'},
                {src:'../assets/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' }
          ],
      } 
    },
    methods: {
      showServices : function(event, el){

        const hdh = document.querySelector("header");
        const servicesEl = document.querySelector(".detailServices");
        const scrollEl = document.querySelector(".scroll_");
        const btnR = hdh.querySelector(".btn-right")

        event.preventDefault();
        this.el = document.querySelector('.'+ el) || this.el;
        if(event.target.classList.contains('is-close')){ 
          //console.log('close')
          btnR.textContent = "제휴";
          event.target.classList.remove("is-close");
          this.el.style.display = "none";
          return ;
        }
        
        btnR.textContent = "닫기";
        btnR.classList.add("is-close");
        this.el.style.display = "block";
      
        
      },
    },
    mounted(){
      console.log('mounted!')
      //modal cancel click event
      const cb = document.querySelectorAll(".btn-cancel");
      cb.forEach( i => {
        i.addEventListener('click', (e) => {
          //console.log(e.target)
          e.target.closest('.modal').classList.remove('is-visible');
          document.querySelector('body').classList.remove('oh');
          bodyScrollLock.enableBodyScroll(scrollEl);
        });
      })
    }
  }
</script>
<style scoped>
  /* 상위 내비게이션  */
  header {
    height: 55px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 20px 0 10px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 301;
    border-bottom: 1px solid #f0f0f0;
    text-align:center;
  }

  header a {
    display: inline-block;
    color: #000;
    position: absolute;
    text-align: center;
  }

  header a.tit {
    font-size: 1.8rem;
    font-family: 'skpgo_BM';
    position: unset; white-space: nowrap;
    line-height: 55px;
  }

  header a.btn-back {
    left: 10px; top: 17px;
    height: 22px;
    width: 12px;
    background: url("./assets/images/icon-back.png") 0 0 no-repeat;
    background-size: 100% 100%;
    font-size:0;
  }

  header a.btn-right {
    right: 20px; top: 20px;
    font-size: 1.4rem;
    color: #333
  }
</style>
