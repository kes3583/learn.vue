<template>
  <div>
    <header>
      <a name="" class="btn-back" href="javascript:TmapWebView.closeWebView();"></a>
      <a name="이벤트&쿠폰" class="tit">이벤트&쿠폰</a>
      <a name="제휴" class="btn-right">제휴</a>
	  </header>
    <app-tab></app-tab>
    <div class="wrapper coupon">
      <app-usableList></app-usableList>
    </div>
  </div>
</template>

<script>
  import CouponTab from './couponTab.vue';
  import CouponList from './couponList.vue';
  export default {
    components: {
      'app-tab': CouponTab,
      'app-usableList': CouponList
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
