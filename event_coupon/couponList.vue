<template>
   <section class="container">
		<h1 class="pt21 pb13">보유 <span class="br num">{{items.length}}</span></h1>
		<ul class="list-coupon mt5">
			<li class="modal-toggle" v-for="item in items">
				<div class="img"><img :src="item.src" alt="" /></div>
				<div class="txt">
					{{item.title}}
					<span class="date">{{item.date}}</span>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
    export default {
        data(){
            return{
                tries:[],
                value:'',
                result:'',
                items: [
                    { key: 1, src:'./assets/images/img-sb.png', title: '스타필드가면 시원한 스타벅스 아메리카노 20% 할인',date:'2019년 8월 31일까지' },
                    { key: 2, src:'./assets/images/img-sb.png', title: '스타필드가면 시원한 스타벅스',date:'2019년 10월 20일까지'},
                    { key: 3, src:'./assets/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' }
			    ],
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
   /* 쿠폰 리스트  */
.list-coupon {
  overflow: hidden;
  position: relative;
}

.list-coupon li {
  position: relative;
  height: 132px;
  margin-bottom: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.list-coupon li:after {
  position: absolute;
  right: -10px;
  top: 50%;
  margin-top: -10px;
  z-index: 201;
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f1f1f1
}

.list-coupon li div.img {
  position: absolute;
  top: 0;
  left: 19px;
  float: left;
  width: 110px;
  height: 132px;
  z-index: 105
}

.list-coupon li div.txt {
  float: right;
  padding: 0 22px 0 150px;
  overflow: hidden;
  word-wrap: break-word;
  font-size: 1.7rem;
  line-height: 1.3;
  color: #111;
  font-family: 'skpgo_BM';
}

.list-coupon li div.txt span.date {
  padding-top: 11px;
  display: block;
  color: #a1a3a6;
  font-size: 1.3rem;
  font-family: 'skpgo_BM';
}

.list-coupon li:last-child {
  margin-bottom: 6px;
}
</style>