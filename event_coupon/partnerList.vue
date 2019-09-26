<template>
  <section class="detailServices">
      <ul class="scroll_">
       <li v-for="(list, index) in lists" :key="index"> 
         <a @click="deviceUrl(lists[index][2])"><img :src="lists[index][0]" :alt="lists[index][0]" /><span>{{ lists[index][1] }}</span></a>
       </li>
      </ul>
    </section>
</template>

<script>
    export default {
      data(){
        return{
            lists : [ 
              ['../assets/images/icon_list_nugu.png', 'NUGU', 
                [ "https://play.google.com/store/apps/details?id=com.skt.aladdin",
                "https://itunes.apple.com/kr/app/id1142864065?mt=8" ], //1 nugu	- flag1 
              ],
              ['../assets/images/icon_list_lawtalk.png', '로톡법률상담',
                ["https://www.lawtalk.co.kr/api/afpbc/T map/59549a0262a0a53517425aba"]
              ],
              ['../assets/images/icon_list_db.png', 'DB손해보험', ["https://d.directdb.co.kr/mobile/ubi/ubijoin.do"]],
              ['../assets/images/icon_list_cyauto.png', '내차가치', ["http://tmap.cyauto.co.kr/tmap/index.do?uk=${uk}"]],
              ['../assets/images/icon_list_gifticon.png', '기프티콘',  ["http://m.gifticon.com/main.do"]],
              ['../assets/images/icon_list_okcashbag.png', 'OK캐쉬백', ["https://m.okcashbag.com", "https://m.okcashbag.com" ]],
              ['../assets/images/icon_list_weatherpong.png', '웨더퐁', 
                ["https://play.google.com/store/apps/details?id=com.skplanet.weatherpong.mobile", 
                "https://itunes.apple.com/kr/app/id661647070?mt=8" ]
              ],
              ['../assets/images/icon_list_emerg.png', '긴급출동 접수',  ["https://ers.speedmate.com/ERSMobile/service/serviceMain.do?type=TMAP"]],
              ['../assets/images/icon_list_parkingon.png', 'Parking On', 
                ["https://play.google.com/store/apps/details?id=com.anglee.parkingon",
                "https://itunes.apple.com/kr/app/id1049602585?mt=8" ]
              ] 
            ]
        }
    },
    methods: {
        deviceUrl : function(target) {
          //console.log(target[0])
          var flag = 0
          var iOS = !!navigator.platform
              && /iPad|iPhone|iPod/.test(navigator.platform);
          if (iOS) {
            flag = 1;

          }
          if(typeof(target[flag]) === 'undefined'){
            flag = 0;
          }
          
          console.log(target[flag]);
        }
      }
    }
</script>
<style>
/* 제휴 services  */
.detailServices{display:none; z-index:401; position: fixed; left:0; top:55px; width:100%; background: #fff}
.detailServices ul li {border-bottom:1px solid #f9f9f9; height:70px; background:#fff; }
.detailServices ul li a { display: flex; align-items: center; justify-content: flex-start; padding:0 20px; height:100%; position:relative; font-size:0px; line-height:0px;}
.detailServices ul li a img {width:40px; height:40px; display:inline-block;margin-right:20px }
.detailServices ul li a span {display:inline-block; font-size:1.7rem; line-height:64px; color:#000;}
</style>