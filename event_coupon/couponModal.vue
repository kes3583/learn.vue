<template>
<div>
   <div id="modal-coupon" ref="modalCoupon" class="modal modal-coupon" :class="{ 'is-visible': active }" >
      <div class="modal-overlay modal-toggle"></div>
      <div class="modal-wrapper">
      	<a class="btn btn-cancel" @click.prevent="active = false" ><img src="./assets/images/icon-popup-close.png" alt="닫기" style="width:24px; height:24px"/></a>
        <div class="modal-content">
	        <div class="scroll_">
	        	<div class="mc-top">
	        		<h2 class="logo"><img src="./assets/images/icon-logo-black.png" alt="tmap logo" style="width:58px; height:23px"/></h2>
		        	<div class="cp-img">
		        		<img src="./assets/images/img-coupon-ssg.png" alt="" />
		        	</div>
		        	<div class="cp-txt">
		        		<!-- {{item.couponDisplayTitle.replace('\\n', '')}} -->
						 {{couponDisplayTitle}}
		        		<span class="br date">{{item.date}}</span>
		        	</div>
	        	</div>
	        	
	        	<!-- 쿠폰 넘버 class : num --><!--  <div class="num">391802 - R21938021</div> -->
	        	<!-- 쿠폰 바코드 class : bcode -->
	        	<div class="bcode" >
	        		<div id="barcode"></div>
	        	</div> 
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
        <button class="btn btn-block btn-del" @click.prevent="confirmModal">사용하신 쿠폰은 삭제해주세요</button>
      </div>
      </div>
    </div>
</div>
</template>

<script>
	import toggleMixin from './toggleMixin.js';
	import {EventBus} from './main.js';
	export default {
		//mixins: [toggleMixin],
		data(){
			return{
				active: false,
				item:Array,
				couponDisplayTitle: String,
			}
		},
		created() {
            EventBus.$on('toggleModal', (item) => {
				this.active = !this.active;
				this.item = item;
				console.log('this.item ', this.item )
				console.log(typeof this.item.couponDisplayTitle === 'string')
				this.couponDisplayTitle = this.item.couponDisplayTitle.replace('\\n', '')
            });
        },
		methods: {
			confirmModal(){
				EventBus.$emit('delete-coupon')
			}
		}
	}
</script>
<style scoped>

/* modal popup */
.modal { position: fixed; z-index: 1001; /* 1 */ top: 0; left: 0; visibility: hidden; width: 100%; height: 100%; }
.modal.is-visible { visibility: visible; }
.modal-overlay { position: fixed; z-index: 10; top: 0; left: 0; width: 100%; height: 100%; background: hsla(0, 0%, 0%, 0.75); visibility: hidden; opacity: 0;  }

.modal.is-visible .modal-overlay { opacity: 1; visibility: visible; animation-name: fadeIn;
animation-duration: 0.4s; }

/* modal coupon popup */
.modal-coupon .modal-wrapper {/* width:calc(100% - 29px); */ width: 330px; height:100%; position: fixed; z-index: 999; top: 0; left: 0; margin:0 15px 0 14px; left:50%; margin-left:-165px}
.modal-coupon .modal-wrapper .btn-cancel{background:none; justify-content: flex-end}
.modal-coupon .modal-wrapper h2.logo{height:30px}
.modal-coupon .modal-content{overflow:hidden; height:500px; padding:20px; background:#fff no-repeat 0 0 url("./assets/images/bg-box.png"); background-size: 100% auto;}

.modal-coupon .modal-content .cp-img{margin-bottom: 20px;}/* img size 580 x 220 */
.modal-coupon .modal-content .cp-txt{display: flex; flex-direction:column;  align-items: center; justify-content: center; margin:0 8px; font-size: 1.9rem; color:#111; font-family: 'skpgo_BM'; }
.modal-coupon .modal-wrapper span.br.date{margin-top:15px; padding:2px 8px; font-size:1.2rem; color:#666; background:#f0f0f0; font-family: 'skpgo_BM';}
.modal-coupon .modal-content .mc-top{height:278px; margin-bottom:27px; background:#fff no-repeat center bottom url("./assets/images/img_dotline.png"); background-size: 302px 1px; }
.modal-coupon .modal-content .num{font-size:1.8rem; color:#111; font-family: 'roboto-medium'; text-align: center;display: flex; align-items: center; justify-content: center; height:56px; background: #f9f9f9}
.modal-coupon .modal-content .bcode{background: none}
.modal-coupon .modal-content .cp-info{padding:19px 0 0 0}
.modal-coupon .modal-content .cp-info h3{font-size:1.2rem; padding-bottom:3px; color:#a1a3a6; font-family: 'skpgo_BM';}
.modal-coupon .modal-content .cp-info h3, .modal-content .cp-info p{line-height: 2}
.modal-coupon .modal-content .cp-info p, .modal-content .cp-info ul > li{font-size:1.2rem; color:#111; font-family: 'skpgo_MM';}
.modal-coupon .modal-content .cp-info ul > li{padding-left:10px;line-height: 1.5} 
.modal-coupon .modal-content .cp-info ul > li:before {content:'·'; margin-left:-10px; padding-right:5px; font-size:1.3rem;color:#000; font-family: 'skpgo_BM'; }
.modal-coupon .modal-wrapper .btns{position:absolute;bottom:16px; width:100%; padding:0 20px; }
.modal-coupon .modal-wrapper .btn-del{width:100%; height: 50px; padding:0 24px; text-align:left; border-radius: 25px; box-shadow: 0 0.5px 1.5px 0 rgba(0, 0, 0, 0.2), 0 0 0.5px 0 rgba(0, 0, 0, 0.22); background:#e55545 no-repeat right 24px center url("./assets/images/ico-delete.png"); background-size: 24px 24px; font-size:1.3rem; color:#fff;  font-family: 'skpgo_BM';}

</style>