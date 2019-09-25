<template>
   <div class="cp-tabs">
		<a href="" class="event">이벤트</a>
		<a href="" class="coupon active">쿠폰</a>
	</div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
    /* 이벤트 쿠폰 메뉴 */
    .cp-tabs {
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .cp-tabs a {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-family: 'skpgo_BM';
    color: #000;
    position:relative;
    }

    .cp-tabs a.active{color: #3673ee;}
    .cp-tabs a.active:after {
        content:'';
        position:absolute;
        left:0; 
        bottom:0;
        width:100%;
        height:3px;
        background:#3673ee;
    }
</style>