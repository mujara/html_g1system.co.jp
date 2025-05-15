



	//ウインドウサイズの横幅によって条件分岐

	var windowSize = window.innerWidth;
	var wrapperIdDiv = document.getElementById("wrapper");
	if (windowSize < 768) {
		// スマホ時の処理
		wrapperIdDiv.classList.add("is-smallScreen");
	} else {
		// スマホ以外の処理
		wrapperIdDiv.classList.add("is-wideScreen");
	}

	var timer = '';
	window.onresize = function () {
		  if (timer) {
		    	clearTimeout(timer);
		  }
		  timer = setTimeout(function(){
		    	var windowSize = window.innerWidth;
			var wrapperIdDiv = document.getElementById("wrapper");
		    	if (windowSize < 768) {
				// スマホ時の処理
		      		wrapperIdDiv.classList.remove("is-wideScreen");
		      		wrapperIdDiv.classList.add("is-smallScreen");
		    	} else {
				// スマホ以外の処理
		      		wrapperIdDiv.classList.add("is-wideScreen");
		      		wrapperIdDiv.classList.remove("is-smallScreen");
		    	}
		  }, 200);
	};


	//最上位置・スクロールで表示・変化させるボタンの処理

	//上部に移動するボタン
	const btnRise_btn = document.querySelector('#btnRise');
	//サイドバナー
	const btnSideBanner_btn = document.querySelector('#btnSideBanner');
	//スマホ用画面固定ボタン
	const btnPageBottom_btn = document.querySelector('#btnPageBottom');
	//スティッキーヘッダー
	var sticky_head = document.querySelector('#pageTopFix');
	var sticky = false;

	// <body>に「home」クラスが付いているか確認
	if (document.body.classList.contains('home')) {
	  // 要素が存在し、「is-scroll」クラスが付いている場合削除
	  if (sticky_head && btnSideBanner_btn.classList.contains('is-active') && sticky_head.classList.contains('is-scroll')) {
		btnSideBanner_btn.classList.remove('is-active');
		sticky_head.classList.remove('is-scroll');
	  }
	}

	//クリックイベントを追加
	btnRise_btn.addEventListener( 'click' , scroll_to_top );
	function scroll_to_top(){
		window.scroll({top: 0, behavior: 'smooth'});
	};

	//スクロール時のイベントを追加
	window.addEventListener( 'scroll' , scroll_event );

	function scroll_event(){
		if(window.pageYOffset > 100){
			btnRise_btn.classList.add("is-active");
			btnSideBanner_btn.classList.add("is-active");
			btnPageBottom_btn.classList.add("is-active");
			if ( sticky === false ){
				sticky_head.classList.add("is-scroll");
	                	sticky = true;
	           	}
		}else if(window.pageYOffset < 100){
			btnRise_btn.classList.remove("is-active");
			btnPageBottom_btn.classList.remove("is-active");
			if (document.body.classList.contains('home')) {
				btnSideBanner_btn.classList.remove("is-active");
			}
			if ( sticky === true ){
				if (document.body.classList.contains('home')) {
					sticky_head.classList.remove("is-scroll");
				}
		                sticky = false;
			}
		}
	};

	// URLのパラメータでタブを操作する

	// URLのパラメータを取得
	let urlParam = location.search.substring(1);
	// タブ要素を取得
	let tabBoxType01Elements = document.getElementsByName( "tabBox--type01__button" ) ;

	// URLにパラメータが存在する場合
	if(urlParam) {
		// 「&」が含まれている場合は「&」で分割
		let param = urlParam.split('&');

		// パラメータを格納する用の配列を用意
		const paramArray = [];
		 
		// 用意した配列にパラメータを格納
		for (i = 0; i < param.length; i++) {
			var paramItem = param[i].split('=');
			paramArray[paramItem[0]] = paramItem[1];
		}
		 
		// パラメータtabBoxで判断する
		if (paramArray.tabBox == 'type01Label001') {
			tabBoxType01Elements[0].checked = true;
		} else if (paramArray.tabBox == 'type01Label002') {
			tabBoxType01Elements[1].checked = true;
		}
	}


// jsへのリンクは、main.jsからの相対パスで記述。
// ファイルを呼び出す時は、拡張子[.js]を削除。

require([
  "smoothScroll",			//スムーズスクロール用JS
  "micromodal.min",			//モーダルウィンドウJS
  "luminous.min",			//画像用モーダルウィンドウJS
],function(){ //[ , ]で区切ってfunction文を追記

	//micromodal.min モーダルウィンドウ用
	MicroModal.init({
	  disableScroll: true,
	  awaitOpenAnimation: true,
	  disableFocus: true,
	  awaitCloseAnimation: true
	});

	//スマートフォン用ボタン
	var globalNaviSmallIcon = document.querySelector('#globalNaviSmallIcon');
	globalNaviSmallIcon.addEventListener( 'click' , btn_is_open );

	//スマートフォン用ボタン　ページ下部　btnPageBottom01
	var btnPageBottom01 = document.querySelector('#btnPageBottom01');
	btnPageBottom01.addEventListener( 'click' , btn_is_open2 );
	var btnClosePageBottom01 = document.querySelector('#btnClosePageBottom01');
	btnClosePageBottom01.addEventListener( 'click' , btn_is_open2 );
	if (document.getElementById('btnPageMainVisual01') !== null) {
		var btnPageMainVisual01 = document.querySelector('#btnPageMainVisual01');
		btnPageMainVisual01.addEventListener( 'click' , btn_is_open2 );
	}

	//スマートフォン用ボタン　ページ下部　btnPageBottom02
	var btnPageBottom02 = document.querySelector('#btnPageBottom02');
	btnPageBottom02.addEventListener( 'click' , btn_is_open3 );
	var btnClosePageBottom02 = document.querySelector('#btnClosePageBottom02');
	btnClosePageBottom02.addEventListener( 'click' , btn_is_open3 );
	if (document.getElementById('btnPageMainVisual02') !== null) {
		var btnPageMainVisual02 = document.querySelector('#btnPageMainVisual02');
		btnPageMainVisual02.addEventListener( 'click' , btn_is_open3 );
	}

	//スマートフォン用ボタン　ページ下部　btnPageBottom03
	var btnPageBottom03 = document.querySelector('#btnPageBottom03');
	btnPageBottom03.addEventListener( 'click' , btn_is_open4 );
	var btnClosePageBottom03 = document.querySelector('#btnClosePageBottom03');
	btnClosePageBottom03.addEventListener( 'click' , btn_is_open4 );
	if (document.getElementById('btnPageMainVisual03') !== null) {
		var btnPageMainVisual03 = document.querySelector('#btnPageMainVisual03');
		btnPageMainVisual03.addEventListener( 'click' , btn_is_open4 );
	}

	//スマートフォン用ボタン　ページ下部　btnPageBottom04
	var btnPageBottom04 = document.querySelector('#btnPageBottom04');
	btnPageBottom04.addEventListener( 'click' , btn_is_open5 );
	var btnClosePageBottom04 = document.querySelector('#btnClosePageBottom04');
	btnClosePageBottom04.addEventListener( 'click' , btn_is_open5 );
	if (document.getElementById('btnPageMainVisual04') !== null) {
		var btnPageMainVisual03 = document.querySelector('#btnPageMainVisual04');
		btnPageMainVisual03.addEventListener( 'click' , btn_is_open5 );
	}

	
	function btn_is_open(){
		if( globalNaviSmallIcon.classList.contains("is-open") == true ){
			globalNaviSmallIcon.classList.remove("is-open");
			MicroModal.close('modal-globalNaviSmall', {
				awaitCloseAnimation: true
     			});
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
		} else {
			globalNaviSmallIcon.classList.add("is-open");
			btnPageBottom_btn.classList.add("is-active");
			MicroModal.show('modal-globalNaviSmall', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
	        }
	};

	//スマートフォン用ボタン ページ内リンクをクリックした時にモーダルウィンドウを外す
	var globalNaviSmallMenuMain = document.querySelector('.globalNaviSmall__menu__main');
	var globalNaviSmallIconPagelinks = [].slice.call(globalNaviSmallMenuMain.querySelectorAll('a[href^="#"]'));

	globalNaviSmallIconPagelinks.forEach(function (globalNaviSmallIconPagelink) {

		globalNaviSmallIconPagelink.addEventListener( 'click' , pagelink_btn_is_open );
		function pagelink_btn_is_open(){
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			} else {
				globalNaviSmallIcon.classList.add("is-open");
				MicroModal.show('modal-globalNaviSmall', {
				       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
				       awaitCloseAnimation: true
				});
		        }
		};
	});

	//スマートフォン用ボタン　ページ下部　btnPageBottom01の動作
	function btn_is_open2(){
		if( btnPageBottom01.classList.contains("is-open") == true ){
			btnPageBottom01.classList.remove("is-open");
			btnClosePageBottom01.classList.remove("is-open");
			document.body.classList.remove("ba-white");
			MicroModal.close('modal-btnPageBottom01', {
				awaitCloseAnimation: true
     			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
		} else {
			btnPageBottom01.classList.add("is-open");
			btnClosePageBottom01.classList.add("is-open");
			document.body.classList.add("ba-white");
			MicroModal.show('modal-btnPageBottom01', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
	        }
	};

	//スマートフォン用ボタン　ページ下部　btnPageBottom02の動作
	function btn_is_open3(){
		if( btnPageBottom02.classList.contains("is-open") == true ){
			btnPageBottom02.classList.remove("is-open");
			btnClosePageBottom02.classList.remove("is-open");
			document.body.classList.remove("ba-white");
			MicroModal.close('modal-btnPageBottom02', {
				awaitCloseAnimation: true
     			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
		} else {
			btnPageBottom02.classList.add("is-open");
			btnClosePageBottom02.classList.add("is-open");
			document.body.classList.add("ba-white");
			MicroModal.show('modal-btnPageBottom02', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
	        }
	};

	//スマートフォン用ボタン　ページ下部　btnPageBottom03の動作
	function btn_is_open4(){
		if( btnPageBottom03.classList.contains("is-open") == true ){
			btnPageBottom03.classList.remove("is-open");
			btnClosePageBottom03.classList.remove("is-open");
			document.body.classList.remove("ba-white");
			MicroModal.close('modal-btnPageBottom03', {
				awaitCloseAnimation: true
     			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
		} else {
			btnPageBottom03.classList.add("is-open");
			btnClosePageBottom03.classList.add("is-open");
			document.body.classList.add("ba-white");
			MicroModal.show('modal-btnPageBottom03', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom04.classList.contains("is-open") == true ){
				btnPageBottom04.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom04', {
					awaitCloseAnimation: true
		     		});
			}
	        }
	};

	//スマートフォン用ボタン　ページ下部　btnPageBottom04の動作
	function btn_is_open5(){
		if( btnPageBottom04.classList.contains("is-open") == true ){
			btnPageBottom04.classList.remove("is-open");
			btnClosePageBottom04.classList.remove("is-open");
			document.body.classList.remove("ba-white");
			MicroModal.close('modal-btnPageBottom04', {
				awaitCloseAnimation: true
     			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
		} else {
			btnPageBottom04.classList.add("is-open");
			btnClosePageBottom04.classList.add("is-open");
			document.body.classList.add("ba-white");
			MicroModal.show('modal-btnPageBottom04', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			}
			if( btnPageBottom01.classList.contains("is-open") == true ){
				btnPageBottom01.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom01', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom02.classList.contains("is-open") == true ){
				btnPageBottom02.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom02', {
					awaitCloseAnimation: true
		     		});
			}
			if( btnPageBottom03.classList.contains("is-open") == true ){
				btnPageBottom03.classList.remove("is-open");
				MicroModal.close('modal-btnPageBottom03', {
					awaitCloseAnimation: true
		     		});
			}
	        }
	};

	//URLのパラメータからインラインのモーダルをページを訪れた際に自動に開くようにする
	// URLのパラメータを取得
	var urlParam = location.search.substring(1);
	
	// URLにパラメータが存在する場合
	if(urlParam) {
		// 「&」が含まれている場合は「&」で分割
		var param = urlParam.split('&');

		// パラメータを格納する用の配列を用意
		var paramArray = [];
		 
		// 用意した配列にパラメータを格納
		for (i = 0; i < param.length; i++) {
			var paramItem = param[i].split('=');
			paramArray[paramItem[0]] = paramItem[1];
		}

		// もしパラメータにmodalInlineContentがあれば
		if (paramArray.modalInlineContent) {
			var modalInlineContentName = paramArray.modalInlineContent;
			MicroModal.show( modalInlineContentName , {
				disableScroll: true,
				awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
				awaitCloseAnimation: true
			});
		} 
	}

	//luminous.min用
	//単数用　.luminous
	var luminousOptions = {
		caption: function (trigger) {
	    		return trigger.getAttribute('title');
	  	},
	}
	var luminousTrigger = document.querySelectorAll('.luminous');
	for (var i = 0; i < luminousTrigger.length; i++) {
	  var elem = luminousTrigger[i];
	  new Luminous(elem, luminousOptions);
	}
	//複数用　.luminousGallery
	var luminousGalleryTrigger = document.querySelectorAll('.luminousGallery');
	var luminousGalleryOptions = {
		caption: function (trigger) {
	    		return trigger.getAttribute('title');
	  	},
	}
	if( luminousGalleryTrigger !== null ) {
		new LuminousGallery(luminousGalleryTrigger,{},luminousGalleryOptions);
	}

	
});//end function文 & require


//画面スクロール・遷移でのアニメ用　ScrollMagic用
require([
  "ScrollMagic",			//特定の位置で発火させるJS
  "debug.addIndicators.min",		//デバッグ用JS
  "gsap.min",				//アニメーションJS
],function(){ //[ , ]で区切ってfunction文を追記

	var ScrollMagic = require('ScrollMagic');
	class ScrollAction {
		constructor() {
			this.ANIMATION_CLASS = 'active';

			let $section = document.querySelectorAll('.--typeScrollAction:not(.active)');
			if ($section.length === null) {
				return;
			}
		    	let controller = new ScrollMagic.Controller();
		    	for (let i = 0; i < $section.length; i++) {
		      		let scene = new ScrollMagic.Scene({
		        		triggerElement: $section[i],
		        		triggerHook: 'onEnter',
		        		reverse: false,
		        		offset: 200,
		      		})
		        	//.addIndicators()　//デバッグ用
		        	.addTo(controller);
			      	scene.on('enter', () => {
			        	$section[i].classList.toggle(this.ANIMATION_CLASS);
			      	});
		    	}
		}
	}

	new ScrollAction();

	class ScrollFadeIn {
		constructor() {
			this.ANIMATION_CLASS = 'active';

			let $section = document.querySelectorAll('.--typeScrollFadeIn:not(.active)');
			if ($section.length === null) {
				return;
			}
		    	let controller = new ScrollMagic.Controller();
		    	for (let i = 0; i < $section.length; i++) {
		      		let scene = new ScrollMagic.Scene({
		        		triggerElement: $section[i],
		        		triggerHook: 'onEnter',
		        		reverse: false,
		        		offset: 200,
		      		})
		        	//.addIndicators()　//デバッグ用
		        	.addTo(controller);
			      	scene.on('enter', () => {
			        	$section[i].classList.toggle(this.ANIMATION_CLASS);
			      	});
		    	}
		}
	}

	new ScrollFadeIn();

	
});//end function文 & require


//メインイメージスライダー　Swiper用
require([
  "swiper-bundle.min",			//スライダーJS
],function(){ //[ , ]で区切ってfunction文を追記
	var Swiper = require('swiper-bundle.min');

	//.sliderBox--typeFlow01　流れるスライダー
	const slideLengthTypeFlow01 = document.querySelectorAll('.sliderBox--typeFlow01 .swiper-slide').length;
	const mySwiperTypeFlow01 = new Swiper('.sliderBox--typeFlow01 .swiper', {
	      slidesPerView: 'auto',
	      spaceBetween: 8,
	      loop: true,
	      loopAdditionalSlides: slideLengthTypeFlow01,
	      speed: 16000,
	      allowTouchMove: false,// スワイプ無効
	      autoplay: {
	        delay: 0,
	        disableOnInteraction: false,
	      },
	      useTransform: false,
	      breakpoints: {
	        1025: {
	          spaceBetween: 8,
	        }
	      }
	});

	//コンテンツのスライダー
	  let mySwiperTypeChangeSlide = null;
	  const mediaQuery = window.matchMedia('(max-width: 768px)');

	  const checkBreakpoint = (e) => {
	    if (e.matches) {
	      initSwiperTypeChangeSlide();
	    } else if (mySwiperTypeChangeSlide) {
	      mySwiperTypeChangeSlide.destroy(false, true);
	    }
	  }

	  const initSwiperTypeChangeSlide = () => {
	    mySwiperTypeChangeSlide = new Swiper('.sliderBox--typeChangeSlide .swiper', {
	      slidesPerView: 1,
	      spaceBetween: 16,
	      loop: true,
	      loopAdditionalSlides: 1,
	      speed: 1000,
	      grabCursor: true,
	      pagination: {
	        el: '.sliderBox--typeChangeSlide .swiper-pagination', // ページネーション要素のクラス
	        clickable: true, //クリックを有効化する
	      },
	      navigation: {
	        nextEl: '.sliderBox--typeChangeSlide .swiper-button-next',
	        prevEl: '.sliderBox--typeChangeSlide .swiper-button-prev',
	      },
	      breakpoints: {
	        600: {// 画面幅600px以上で適用
	          slidesPerView: 3,
	        }
	      },
	    });
	  };

	  mediaQuery.addListener(checkBreakpoint);
	  checkBreakpoint(mediaQuery);

	
});//end function文 & require







