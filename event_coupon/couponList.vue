<template>
   <section class="container">
		<h1 class="pt21 pb13"> {{couponTitle}} <span class="br num">{{couponData.length}}</span></h1>
		<ul class="list-coupon mt5" v-if="couponData.length">
			<li class="modal-toggle" v-for="item in couponData" :key="item.key" @click.prevent="toggleModal(item)">
				<div class="img"><img :src="item.src" alt="" /></div>
				<div class="txt">
					{{item.title.replace('\\n', '')}}
					<span class="date" v-if="item.used">사용완료</span>
					<span class="date" v-else>기간만료</span>
				</div>
			</li>
		</ul>
    <div class="noEvent" v-else>
			<div>진행중인 이벤트가 없습니다.</div> 
		</div>
    
	</section>
</template>

<script>
  //import toggleMixin from './toggleMixin.js';
  import {EventBus} from './main.js';
  export default {
    //mixins: [toggleMixin],
    components: {
     
    },
    props: {
      couponTitle: String,
      couponData: {
        type: Array
      }
    },
    data(){
        return{
            array1:[],
            isShowing: false,
            value:'',
            result:'',
            wh:'',
            el:'',
            // currentItems: [
            //     { key: 1, src:'../assets/images/img-sb.png', title: '스타필드가면 시원한 스타벅스 아메리카노 20% 할인',date:'2019년 8월 31일까지' },
            //     { key: 2, src:'../assets/images/img-sb.png', title: '스타필드가면 시원한 스타벅스',date:'2019년 10월 20일까지'},
            //     { key: 3, src:'../assets/images/img-sb.png', title: '스타필드가면 시원한',date:'2022년 8월 31일까지' }
            // ],
        }
    },
    mounted(){
      console.log(this.couponData)
    },
    methods: {
        toggleModal(item){
        console.log('data-', item)
         EventBus.$emit('toggleModal', item)
        }
      
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