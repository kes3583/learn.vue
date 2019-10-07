<template>
   <div id="modal-confirm" class="modal modal-confirm" ref="confirm" :class="{ 'is-visible': active }">
      <div class="modal-overlay modal-toggle"></div>
      <div class="modal-wrapper">
        <div class="modal-content">
         	 삭제하면 다시 사용할 수 없어요.<br>정말 삭제할까요?
        </div>
        <div class="_df btns">
          <button class="btn btn-gr w50p btn-cancel" @click.prevent="active = false">취소</button>
          <button class="btn btn-bl w50p btn-confirm">확인</button>
        </div>
      </div>
    </div>
</template>

<script>
    import {EventBus} from './main.js';
    export default {
        data(){
           return {
            active: false,
            wh:window.innerHeight,
            mcw : null,
            mcwh: null,
            marginTop:null,
          }
        },
        created() {
          EventBus.$on('delete-coupon', (item) => {
            this.active = !this.active;
            console.log('confirm item',item)
          })
        },
         mounted(){
          this.mcw = this.$refs.confirm.children[1] || this.mcw;
          //console.log('this.el',this.$refs.confirm.children[1])
          this.mcwh = this.mcw.offsetHeight || this.mcwh;
          this.mcw.style.marginTop = this.wh/2 - this.mcwh /2 + 'px';
        }
    }
</script>
<style scoped>

/* modal confirm popup */
.modal-confirm .modal-wrapper{z-index:20; background:#fff; position: relative; margin: 0 25px; top:0; bottom:auto; padding:35px 0 0; border-radius: 8px;}
.modal-confirm .modal-overlay { z-index: 19; }
.modal-confirm .modal-wrapper .modal-content{color:#000; font-size:1.8rem; margin-bottom:3.5rem; line-height:1.2; text-align: center; font-family: 'skpgo_BM';}
.modal-confirm .modal-wrapper .btns{height:5rem;line-height:5rem; color:#fff;font-size:1.6rem;text-align: center;}
.modal-confirm .btn{font-family: 'skpgo_MM';}
.modal-confirm .btn-gr{width:50%; border-bottom-left-radius: 8px; }
.modal-confirm .btn-bl{width:50%; border-bottom-right-radius: 8px; }
</style>