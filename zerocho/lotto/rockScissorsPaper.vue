<template>
   <section :class="{active:true, islotto:false}">
     <div id="rsp-img" ref="backgroundImg" :style="computedBackgroundStyle"></div>
     <div :style="{color:'#000', fontSize: '18px'}">rock scissor paper</div>
     <button @click="getOneData('rock')">바위</button>
     <button @click="getOneData('scissors')">가위</button>
     <button @click="getOneData('paper')">보</button>
     <div>{{result}}</div>
     <div>score : {{score}}</div>
	</section>
</template>
<script>
const rspCoords = {
  rock : '0',
  scissors : '-142px',
  paper : '-284px'
}
const score = {
  rock : 1, 
  scissors : 0,
  paper :-1
}
let interval = null;
export default {
  data(){
    return{
      result:'',
      score:0,
      imgCoords: rspCoords.rock,
    }
  },
  computed:{
    computedBackgroundStyle(){
      return {
        background:`url('https://en.pimg.jp/023/182/267/1/23182267.jpg') ${this.imgCoords} 0`
      }
    }
  },
  methods:{
    getOneData(choice){
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoices(this.imgCoords)];
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
    interval = setInterval(() => { 
      if(this.imgCoords === rspCoords.rock){
        this.imgCoords = rspCoords.scissors;
      }else if (this.imgCoords === rspCoords.scissors) {
        this.imgCoords = rspCoords.paper;
      } else if(this.imgCoords === rspCoords.paper){
        this.imgCoords = rspCoords.rock;
      }
     }, 200);
  },
  beforeDestroy(){
    console.log('beforeDestroy')
    clearInterval(interval);
  },
  destroyed() {
    console.log('destroyed')
  },
  
  updated(){
    console.log('updated')
  }
}
</script>
<style scoped>
#rsp-img{
  width:140px;
  height:180px;
 
 
}
</style>