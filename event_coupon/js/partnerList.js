/* 제휴서비스 URL */
	
const names = [
		['deviceUrl(0)', '/comm/event_coupon/images/icon_list_nugu.png', 'NUGU'],
		['deviceUrl(1)', '/comm/event_coupon/images/icon_list_lawtalk.png', '로톡법률상담'],
		['deviceUrl(2)', '/comm/event_coupon/images/icon_list_db.png', 'DB손해보험'],
		['deviceUrl(3)', '/comm/event_coupon/images/icon_list_cyauto.png', '내차가치'],
		['deviceUrl(4)', '/comm/event_coupon/images/icon_list_gifticon.png', '기프티콘'],
		['deviceUrl(5)', '/comm/event_coupon/images/icon_list_okcashbag.png', 'OK캐쉬백'],
		['deviceUrl(6)', '/comm/event_coupon/images/icon_list_weatherpong.png', '웨더퐁'],
		['deviceUrl(7)")', '/comm/event_coupon/images/icon_list_emerg.png', '긴급출동 접수'],
		['deviceUrl(8)', '/comm/event_coupon/images/icon_list_parkingon.png', 'Parking On']
	];
	
	const urls = [
		[ "https://play.google.com/store/apps/details?id=com.skt.aladdin",
		"https://itunes.apple.com/kr/app/id1142864065?mt=8" ], //1 nugu			
		[ "https://www.lawtalk.co.kr/api/afpbc/T map/59549a0262a0a53517425aba", 
		"https://www.lawtalk.co.kr/api/afpbc/T map/59549a0262a0a53517425aba" ], //2 로톡법률상담		
		[ "https://d.directdb.co.kr/mobile/ubi/ubijoin.do", "https://d.directdb.co.kr/mobile/ubi/ubijoin.do" ], //3 DB손해보험
		[ "http://tmap.cyauto.co.kr/tmap/index.do?uk=${uk}", "http://tmap.cyauto.co.kr/tmap/index.do?uk=${uk}" ], //4 내차가치
		[ "http://m.gifticon.com/main.do", "http://m.gifticon.com/main.do" ], //5 기프티콘
		[ "https://m.okcashbag.com", "https://m.okcashbag.com" ], //6 OK캐쉬백
		["https://play.google.com/store/apps/details?id=com.skplanet.weatherpong.mobile", 
		"https://itunes.apple.com/kr/app/id661647070?mt=8" ],//7 웨더퐁
		["https://ers.speedmate.com/ERSMobile/service/serviceMain.do?type=TMAP", 
		"https://ers.speedmate.com/ERSMobile/service/serviceMain.do?type=TMAP" ], //8 긴급전화
		["https://play.google.com/store/apps/details?id=com.anglee.parkingon",
					"https://itunes.apple.com/kr/app/id1049602585?mt=8" ] //9 파킹온
	]
	
	/* 제휴서비스 URL 가기 */				
	function deviceUrl(target) {
		var flag = 0
		var iOS = !!navigator.platform
				&& /iPad|iPhone|iPod/.test(navigator.platform);
		if (iOS) {
			flag = 1;
		}

		TmapApp.openBrowser(urls[target][flag]);
		//location.href = urls[target][flag]
	}
	
	/* 제휴서비스 메뉴 */
	const showServices = function(e, el){
		this.el = document.querySelector('.'+ el) || this.el;
		
		if(e.target.classList.contains('is-close')){ 
			console.log('close')
			btnR.textContent = "제휴";
			e.target.classList.remove("is-close");
			$(this.el).slideUp(300);
			bodyScrollLock.enableBodyScroll(scrollEl);
			return ;
		}
		
		btnR.textContent = "닫기";
		btnR.classList.add("is-close");
		$(this.el).slideDown(300);
		
		if(this.el.querySelectorAll('ul li').length != 0 || this.el.querySelector('ul li') != null){
			//this.el.style.display = "block";
			return;
		}else{
			names.forEach((item, index)=>{
				let li = document.createElement('li');
				li.innerHTML = '<a href="javascript:;" onclick="' + names[index][0] + '"> <img src="'+ names[index][1] + '" alt="Nugu" /><span>'+ names[index][2] + '</span></a>'
				this.el.querySelector("ul").appendChild(li);
			})
			
			bodyScrollLock.disableBodyScroll(scrollEl);
		}
		
	}