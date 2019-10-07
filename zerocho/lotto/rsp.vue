<template>
   <section :class="{active:true, islotto:false}">
     <div id="rsp-img" ref="backgroundImg" :style="{background:`url('https://en.pimg.jp/023/182/267/1/23182267.jpg')`}"></div>
     <div :style="{color:'#000', fontSize: '18px'}">rock scissor paper</div>
     <button @click="getData('rock')">바위</button>
     <button @click="getData('scissor')">가위</button>
     <button @click="getData('paper')">보</button>
     <div>{{result}}</div>
     <div>score : {{score}}</div>
	</section>
</template>
<script>
export default {
  data(){
    return{
      result:'',
      score:0,
      imgCoord:0,
    }
  },
  computed:{

  },
  methods:{
    getData(data){
        if(data === 'rock'){
          this.$refs.backgroundImg.style.backgroundPosition = '0 0'
        }else if(data === 'scissor'){
          this.$refs.backgroundImg.style.backgroundPosition = '-142px 0'
        }else if (data === 'paper'){
          this.$refs.backgroundImg.style.backgroundPosition = '-284px 0'
        }
    }
  }
}
</script>
<style scoped>
#rsp-img{
  width:140px;
  height:180px;
  background-position: 0 0;
}
</style>