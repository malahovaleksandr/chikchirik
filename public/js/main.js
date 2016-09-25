    $(document).ready(function(){
        console.log('подключен link_slide');
    });

    $(document).ready(function(){
        $(".header_nav").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);

        });
        $(".js_link_page2").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);

        });


    });

    $(document).ready(function(){
        console.log('подключен меню перелистывает ');
    });

    // desctop 4 при нажатии на меню появляется текст
    var itemMenu=$('.page4_menu-item'),//пункт меню
        textMenu=itemMenu.find('.page4_menu-text');//текст которыйдолжен появиться

    itemMenu.on('click',function(){
        var $this = $(this),
            page4=$this.parent('.content-desktop_page4'),//находим блок страницы
            activBlockText=page4.find('.page4_menu-text_activ'),//находим существующий активный клас у текста
            activBlockTitle=page4.find('.page4_menu-title_activ');//находим существующий активный клас у титула

            activBlockTitle.removeClass('page4_menu-title_activ');// удаляем у титула существующий активный класс
            activBlockText.removeClass('page4_menu-text_activ');// удаляем у текста существующий активный класс
        $this.find('.page4_menu-text').addClass('page4_menu-text_activ');// добавляем тексту автиквный класс элементу на который нажали
        $this.find('.page4_menu-title').addClass('page4_menu-title_activ');// добавляем титулу автиквный класс элементу на который нажали

    });
$(document).ready(function(){
    console.log('connect move arrow');
    var arrowBlock= $('.desktop1_learn-more__arrow');


    function bigArrow (){

        arrowBlock.animate({
            marginBottom: "8px",
            width: "22px",
            opacity:1,
            height: '34px'
        },800);
        setTimeout(function(){
            smallArrow();
        }, 1000);

    }
    function smallArrow(){

        arrowBlock.animate({
            marginBottom: 0,
            width: "15px",
            opacity:0.5,
            height: '28px'
        },1000);
    }



    setInterval(bigArrow,2200);

});


var arrowRight=$('.page3_arrow-right'),//стрелочка вправо
    arrowLeft=$('.page3_arrow-left'),//стрелочка влево

    allCloud=$('.page3_content_absoluteBlock'),//все облака
    conteiner=$('.page3_content'),//контейнер где лежат все облака
    i=1;//порядковый номер









        arrowRight.on('click',function(){
            console.log('right');
            i++;
            console.log('номер: '+i);
            if(i==allCloud.length) {
                i=0;
                console.log('обнулили i');
            }
            if(i==allCloud.length+1) {
                i=1;
                console.log('обнулили i');
            }
            var center=i+1,
                right=i+2,
                rightOut=i+3,
                leftOut=i+4;

            if(i==allCloud.length) {i=0; }
            if(center==allCloud.length) {center=0; }
            if(right==allCloud.length) {right=0; }
            if(rightOut==allCloud.length) {rightOut=0; }
            if(leftOut==allCloud.length) {leftOut=0; }


            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');
            conteiner.find('.cloud_absolute_out_right').removeClass('cloud_absolute_out_right');
            conteiner.find('.cloud_absolute_out_left').removeClass('cloud_absolute_out_left');

            allCloud.eq(i).addClass('cloud_absolute_left');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_right');
            allCloud.eq(rightOut).addClass('cloud_absolute_out_left');
            allCloud.eq(leftOut).addClass('cloud_absolute_out_right');


        });

        arrowLeft.on('click',function(){
            console.log('left');
            console.log('номер: '+i);
            i--;
            if(i<0) {
                i=allCloud.length;
                console.log('повысили i');
            }
            var center=i-1,
                right=i-2,
                rightOut=i-3,
                leftOut=i-4;

            if(i==allCloud.length) {i=allCloud.length; }
            if(center==allCloud.length) {center=allCloud.length; }
            if(right==allCloud.length) {right=allCloud.length; }
            if(rightOut==allCloud.length) {rightOut=allCloud.length; }
            if(leftOut==allCloud.length) {leftOut=allCloud.length; }
            
            conteiner.find('.cloud_absolute_left').removeClass('cloud_absolute_left');//удаляем классы чтоб облаком поменяло место
            conteiner.find('.cloud_absolute_center').removeClass('cloud_absolute_center');
            conteiner.find('.cloud_absolute_right').removeClass('cloud_absolute_right');
            conteiner.find('.cloud_absolute_out_right').removeClass('cloud_absolute_out_right');
            conteiner.find('.cloud_absolute_out_left').removeClass('cloud_absolute_out_left');

            allCloud.eq(i).addClass('cloud_absolute_right');//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(center).addClass('cloud_absolute_center');
            allCloud.eq(right).addClass('cloud_absolute_left');
            allCloud.eq(rightOut).addClass('cloud_absolute_out_right');
            allCloud.eq(leftOut).addClass('cloud_absolute_out_left');


        });
//
//	Uses Douglas Crockfords Object creation style
//	In preparation for ES6.
//

(function () {

	// Handles scroll events and attaches them to methods.
	var ScrollController = function () {
		var method;
		var interval;
		var repeatIntervalId;
		var $window = $(window);
		var lastScrollTop = 0;
		var lastScrollTime;
		var delayCount = 0;

		// ----- public methods ------
		// repeat function *func* every *interv*:nth millisecond
		var repeatOnScroll = function (func, interv) {
			method = func;
			interval = interv;

			window.onscroll = function () {
				if(!repeatIntervalId){
					startRepeat();
				};
			};
		};

		// ----- private methods ------
		
		// Tick forwards, check for scroll stop and run *method*.
		var update = function(){
			if(repeatIntervalId){
				// detect when to stop repeating
				var tmpScrollTop = $window.scrollTop();
				

				// delta stopped
				if(tmpScrollTop == lastScrollTop){
					// wait half a second extra to account for scroll easing
					if(++delayCount >= 30){
						delayCount = 0;
						stopRepeat();
					}
				};

				lastScrollTop = tmpScrollTop;

				// run the method
				method();
			};
		};

		var startRepeat = function(){
			repeatIntervalId = window.setInterval(update, interval);
		};

		var stopRepeat = function(){
			window.clearInterval(repeatIntervalId);
			repeatIntervalId = undefined;
		};


		return Object.freeze({
			repeatOnScroll:repeatOnScroll,
			getScrollTop: function () {
				return lastScrollTop;
			}
		});
	};

	// animation controller
	var SpaceController = function () {
		var $window = $(window);
		var windowHeight = $window.height();
		var scrollControl = ScrollController();
		var frames;
		var currentFrame = 0;
		var frameSelector = ".space-frame";

		// Todo: make these modular from the <element>, e.g:
		// e.g. <section class="frame depth-scale depth-opacity"></section>

		var transitions = {
			scaleIn: {'scale':{from:0, to:1}},
			fadeIn: {'opacity':{from:0, to:1}},
			scaleOut: {'scale':{from:1, to:1.5}},
			fadeOut: {'opacity':{from:1, to:0}},
			rotateQuarterRight: {'rotate':{from:0, to:90}},
			rotateInQuarterClockwise: {'rotate':{from:-90, to:0}},
			zoomOut:{
				'scale': {from: 1, to: 0}
			},
			slideInBottom: {
				'translate3d':{
					from:{y:700},
					to: {y:0}
				}
			},
			slideOutDown: {
				'translate3d':{
					from:{y:0},
					to: {y:700}
				}
			},
			slideOutLeft: {
				'translate3d':{
					from:{x:0},
					to: {x:-700}
				}
			},
			slideOutRight: {
				'translate3d':{
					from:{x:0},
					to: {x:700}
				}
			},
			slideInRight: {
				'translate3d':{
					from:{x:700},
					to: {x:0}
				}
			},
			slideOutUp: {
				'translate3d':{
					from:{y:0},
					to: {y:-700}
				}
			},
			slideInTop: {
				'translate3d':{
					from:{y:-700},
					to: {y:0}
				}
			},
			slideInLeft: {
				'translate3d':{
					from:{x:-700},
					to: {x:0}
				}
			},
			slideBottomRight: {
				'translate3d':{
					from:{x:0, y:0},
					to: {x:500, y:500}
				}
			},
			rotate360: {
				'rotate':{from:0, to:360}
			},
			rotate3dOut: {
				'rotate3d':{
					from:{x:0, y:0, z:0, angle:0},
					to: {x:1, y:-1,z:0, angle:90}
				}
			}
		};

		var defaultTransition = {
			all: [transitions.scaleOut, transitions.fadeOut],
			enter: [],
			exit:[]
		};

		// ----- public methods ------
		var init = function () {
			// compensate speed scrolling on touch screens
			var touchScreenCompensation = (isMobile() ? 0.3 : 1);

			var simulatedBodyHeight = 0;

			// Set up frames
			frames = $('.space-frame').map(function(index, frame){

				// Duration for current frame, default is one.
				// Other is read from html-element attribute data-duration
				var duration = (frame.dataset.duration || 1) * touchScreenCompensation;

				// simulated document height, to get a scrollbar and height
				var simulatedHeight = duration * windowHeight;
				var distanceTo = simulatedBodyHeight;
				simulatedBodyHeight+= simulatedHeight;


				// give each frame an id
				var frameId = "frame-"+index;
				frame.id = frameId;

				// look for a custom transition to override the default one
				var customTransition = frame.dataset.transition;
				var customEnter = frame.dataset.enter;
				var customExit = frame.dataset.exit;

				if(customTransition || customEnter || customExit){
					var newTransition = {all:[],enter:[],exit:[]};

					var toTransition = function(arr){return arr.split(/\s+/).map(function(t){return transitions[t];})};

					newTransition.all = customTransition ? toTransition(customTransition) : [];
					newTransition.enter = customEnter ? toTransition(customEnter) : [];
					newTransition.exit = customExit ? toTransition(customExit) : [];

					return {selector:"#"+frameId, duration:simulatedHeight, distanceTo:distanceTo, transition:newTransition};
				};

				return {selector:"#"+frameId, duration:simulatedHeight, distanceTo:distanceTo};
			});

			// set fake body height
			$('body').height(simulatedBodyHeight);


			// show the first frame
			$(frames[currentFrame].selector).show();

			// initiate scroll controller with animate method
			scrollControl.repeatOnScroll(animate, 1000/60);
		};

		// ----- private methods ------

		var animate = function () {
			window.requestAnimationFrame(function(){
				setCurrentFrame();
				animateFrame();
			});
		};

		// compare scrolled distance with frames and select the correct one
		var setCurrentFrame = function(){
			var top = scrollControl.getScrollTop();
			var trigger = frames[currentFrame].distanceTo;

			// check if we are not in the interval of the current frame
			if(top < trigger){ // prev frame
				$('.space-frame').hide();
				currentFrame--;
				if (currentFrame < 0){currentFrame = 0};
				$(frames[currentFrame].selector).show();
			}else if(top > (trigger + frames[currentFrame].duration)){ // next frame
				$('.space-frame').hide();
				currentFrame++;
				$(frames[currentFrame].selector).show();
			};
		};

		function propValueToCssFormat (prop, val) {
			switch (prop){
				case "scale":
					return 'scale('+val+')';
				case "rotate":
					return 'rotate('+val+'deg)';
				case "translate3d":
					return 'translate3d(' + 
						(val.x ? val.x+'px' : 0)+','+
						(val.y ? val.y+'px' : 0)+','+
						(val.z ? val.z+'px' : 0)+')';
				case "rotate3d":
					return 'rotate3d(' + 
						(val.x ? val.x : 0)+','+
						(val.y ? val.y : 0)+','+
						(val.z ? val.z : 0)+','+
						(val.angle ? val.angle+'deg' : 0)+')';
				default:
					return val;
			};
		}

		// Update css values of the current frame to their delta-value in the scroll progress
		var animateFrame = function () {
			var scrollInElement = (scrollControl.getScrollTop() - frames[currentFrame].distanceTo);

			var props = {'transform':''};

			// custom or default transition
			var frameTransition = frames[currentFrame].transition || defaultTransition;

			frameTransition.all.forEach(function (trans) {
				for(var property in trans){
					if (property == 'scale' || property == 'translate3d' || property == 'rotate' || property == 'rotate3d'){
						props['transform'] += propValueToCssFormat(property, deltaValue(trans, scrollInElement, property));
					}else{
						props[property] = propValueToCssFormat(property, deltaValue(trans, scrollInElement, property));
					};
				};
			});

			if(scrollInElement <= (frames[currentFrame].duration / 2)){
				frameTransition.enter.forEach(function (trans) {
					for(var property in trans){
						if (property == 'scale' || property == 'translate3d' || property == 'rotate' || property == 'rotate3d'){
							props['transform'] += propValueToCssFormat(property, deltaValue(trans, scrollInElement*2, property));
						}else{
							props[property] = propValueToCssFormat(property, deltaValue(trans, scrollInElement*2, property));
						};
					};
				});
			}else{
				frameTransition.exit.forEach(function (trans) {
					for(var property in trans){
						if (property == 'scale' || property == 'translate3d' || property == 'rotate' || property == 'rotate3d'){
							props['transform'] += propValueToCssFormat(property, deltaValue(trans, (scrollInElement - (frames[currentFrame].duration / 2))*2, property));
						}else{
							props[property] = propValueToCssFormat(property, deltaValue(trans, (scrollInElement - (frames[currentFrame].duration / 2))*2, property));
						};
					};
				});
			}
			props['-webkit-transform'] = props['transform'];
			props['-moz-transform'] = props['transform'];
			$(frames[currentFrame].selector).css(props);
		};

		var deltaValue = function(animation, delta, property) {
		  var value = animation[property];

		  var frameDuration = frames[currentFrame].duration;

		  var frameProgress = delta/frameDuration; // decimal percent

		  if(property == 'translate3d' || property == 'rotate3d'){
		  		var trans = {};
		  		for(axis in value.from){
		  			trans[axis] = +linearEase(delta, value.from[axis], (value.to[axis]-value.from[axis]), frameDuration).toFixed(4);
		  		};
		  		return trans;
		  }else{
			  // compute delta value and round it to four digits to save performance.
			  return +linearEase(delta, value.from, (value.to-value.from), frameDuration).toFixed(4);
		  }
		};

		var linearEase = function(t, b, c, d) {
		  return b+c*(t/d);
		};

		var isMobile = function () {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		};


		// format
		// {{key:{///transition///}}, key:{///transition///}}}
		var addTransitions = function (customTrans) {
			// transitions[]
			for(var name in customTrans){
				if(transitions[name]){
					console.log("Transition name already exists!!!");
					return
				};

				transitions[name] = customTrans[name];

			};

			// reinit with new transitons.. todo: fix so that we do not have to.
			init();
		}

		// export immutable public properties
		return Object.freeze({
			init:init,
			addTransitions: addTransitions
		});
	};

	var initFrameCSS = function () {
		var frameStyle = ".space-frame {display: none;position: fixed;width: 100vw;height: 100vh;} ";
		var innerFrameStyle = ".space-frame .space-inner-frame {position: absolute;transform-style: preserve-3d;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);}"

		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = frameStyle + innerFrameStyle;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	initFrameCSS();

	Space = SpaceController()
	Space.init();

}).call(this);



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtfc2xpZGUuanMiLCJtYWluLmpzIiwibW92ZV9hcnJvdy5qcyIsInNsaWRlcl9jbG91ZHMuanMiLCJzcGFjZS5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpZCIsInRoaXMiLCJhdHRyIiwidG9wIiwib2Zmc2V0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIml0ZW1NZW51IiwidGV4dE1lbnUiLCJmaW5kIiwiJHRoaXMiLCJwYWdlNCIsInBhcmVudCIsImFjdGl2QmxvY2tUZXh0IiwiYWN0aXZCbG9ja1RpdGxlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpZ0Fycm93IiwiYXJyb3dCbG9jayIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwib3BhY2l0eSIsImhlaWdodCIsInNldFRpbWVvdXQiLCJzbWFsbEFycm93Iiwic2V0SW50ZXJ2YWwiLCJhcnJvd1JpZ2h0IiwiYXJyb3dMZWZ0IiwiYWxsQ2xvdWQiLCJjb250ZWluZXIiLCJpIiwibGVuZ3RoIiwiY2VudGVyIiwicmlnaHQiLCJyaWdodE91dCIsImxlZnRPdXQiLCJlcSIsIlNjcm9sbENvbnRyb2xsZXIiLCJtZXRob2QiLCJpbnRlcnZhbCIsInJlcGVhdEludGVydmFsSWQiLCIkd2luZG93Iiwid2luZG93IiwibGFzdFNjcm9sbFRvcCIsImRlbGF5Q291bnQiLCJyZXBlYXRPblNjcm9sbCIsImZ1bmMiLCJpbnRlcnYiLCJvbnNjcm9sbCIsInN0YXJ0UmVwZWF0IiwidXBkYXRlIiwidG1wU2Nyb2xsVG9wIiwic3RvcFJlcGVhdCIsImNsZWFySW50ZXJ2YWwiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJmcmVlemUiLCJnZXRTY3JvbGxUb3AiLCJTcGFjZUNvbnRyb2xsZXIiLCJwcm9wVmFsdWVUb0Nzc0Zvcm1hdCIsInByb3AiLCJ2YWwiLCJ4IiwieSIsInoiLCJhbmdsZSIsImZyYW1lcyIsIndpbmRvd0hlaWdodCIsInNjcm9sbENvbnRyb2wiLCJjdXJyZW50RnJhbWUiLCJ0cmFuc2l0aW9ucyIsInNjYWxlSW4iLCJzY2FsZSIsImZyb20iLCJ0byIsImZhZGVJbiIsInNjYWxlT3V0IiwiZmFkZU91dCIsInJvdGF0ZVF1YXJ0ZXJSaWdodCIsInJvdGF0ZSIsInJvdGF0ZUluUXVhcnRlckNsb2Nrd2lzZSIsInpvb21PdXQiLCJzbGlkZUluQm90dG9tIiwidHJhbnNsYXRlM2QiLCJzbGlkZU91dERvd24iLCJzbGlkZU91dExlZnQiLCJzbGlkZU91dFJpZ2h0Iiwic2xpZGVJblJpZ2h0Iiwic2xpZGVPdXRVcCIsInNsaWRlSW5Ub3AiLCJzbGlkZUluTGVmdCIsInNsaWRlQm90dG9tUmlnaHQiLCJyb3RhdGUzNjAiLCJyb3RhdGUzZE91dCIsInJvdGF0ZTNkIiwiZGVmYXVsdFRyYW5zaXRpb24iLCJhbGwiLCJlbnRlciIsImV4aXQiLCJpbml0IiwidG91Y2hTY3JlZW5Db21wZW5zYXRpb24iLCJpc01vYmlsZSIsInNpbXVsYXRlZEJvZHlIZWlnaHQiLCJtYXAiLCJpbmRleCIsImZyYW1lIiwiZHVyYXRpb24iLCJkYXRhc2V0Iiwic2ltdWxhdGVkSGVpZ2h0IiwiZGlzdGFuY2VUbyIsImZyYW1lSWQiLCJjdXN0b21UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImN1c3RvbUVudGVyIiwiY3VzdG9tRXhpdCIsIm5ld1RyYW5zaXRpb24iLCJ0b1RyYW5zaXRpb24iLCJhcnIiLCJzcGxpdCIsInQiLCJzZWxlY3RvciIsInNob3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRDdXJyZW50RnJhbWUiLCJhbmltYXRlRnJhbWUiLCJ0cmlnZ2VyIiwiaGlkZSIsInNjcm9sbEluRWxlbWVudCIsInByb3BzIiwidHJhbnNmb3JtIiwiZnJhbWVUcmFuc2l0aW9uIiwiZm9yRWFjaCIsInRyYW5zIiwicHJvcGVydHkiLCJkZWx0YVZhbHVlIiwiY3NzIiwiYW5pbWF0aW9uIiwiZGVsdGEiLCJ2YWx1ZSIsImZyYW1lRHVyYXRpb24iLCJheGlzIiwibGluZWFyRWFzZSIsInRvRml4ZWQiLCJiIiwiYyIsImQiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYWRkVHJhbnNpdGlvbnMiLCJjdXN0b21UcmFucyIsIm5hbWUiLCJpbml0RnJhbWVDU1MiLCJmcmFtZVN0eWxlIiwiaW5uZXJGcmFtZVN0eWxlIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJTcGFjZSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFBLFdBQ0FDLFFBQUFDLElBQUEsMEJBR0FKLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUYsRUFBQSxlQUFBSyxHQUFBLFFBQUEsSUFBQSxTQUFBQyxHQUVBQSxFQUFBQyxnQkFFQSxJQUFBQyxHQUFBUixFQUFBUyxNQUFBQyxLQUFBLFFBRUFDLEVBQUFYLEVBQUFRLEdBQUFJLFNBQUFELEdBRUFYLEdBQUEsYUFBQWEsU0FBQUMsVUFBQUgsR0FBQSxPQUdBWCxFQUFBLGtCQUFBSyxHQUFBLFFBQUEsU0FBQUMsR0FFQUEsRUFBQUMsZ0JBRUEsSUFBQUMsR0FBQVIsRUFBQVMsTUFBQUMsS0FBQSxRQUVBQyxFQUFBWCxFQUFBUSxHQUFBSSxTQUFBRCxHQUVBWCxHQUFBLGFBQUFhLFNBQUFDLFVBQUFILEdBQUEsU0N4QkFYLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUMsUUFBQUMsSUFBQSxrQ0FJQSxJQUFBVyxVQUFBZixFQUFBLG9CQUNBZ0IsU0FBQUQsU0FBQUUsS0FBQSxtQkFFQUYsVUFBQVYsR0FBQSxRQUFBLFdBQ0EsR0FBQWEsR0FBQWxCLEVBQUFTLE1BQ0FVLEVBQUFELEVBQUFFLE9BQUEsMEJBQ0FDLEVBQUFGLEVBQUFGLEtBQUEsMEJBQ0FLLEVBQUFILEVBQUFGLEtBQUEsMEJBRUFLLEdBQUFDLFlBQUEsMEJBQ0FGLEVBQUFFLFlBQUEseUJBQ0FMLEVBQUFELEtBQUEsb0JB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b3VyY2VzQ29udGVudCI6WyIgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQtdC9IGxpbmtfc2xpZGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5oZWFkZXJfbmF2XCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcbiAgICAgICAgICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgLy/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuICAgICAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLmpzX2xpbmtfcGFnZTJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdGD0Y4g0L7QsdGA0LDQsdC+0YLQutGDINC90LDQttCw0YLQuNGPINC/0L4g0YHRgdGL0LvQutC1XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8v0LfQsNCx0LjRgNCw0LXQvCDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQsdC+0LrQsCDRgSDQsNGC0YDQuNCx0YPRgtCwIGhyZWZcclxuICAgICAgICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAvL9GD0LfQvdCw0LXQvCDQstGL0YHQvtGC0YMg0L7RgiDQvdCw0YfQsNC70LAg0YHRgtGA0LDQvdC40YbRiyDQtNC+INCx0LvQvtC60LAg0L3QsCDQutC+0YLQvtGA0YvQuSDRgdGB0YvQu9Cw0LXRgtGB0Y8g0Y/QutC+0YDRjFxyXG4gICAgICAgICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuIiwiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LXQvSDQvNC10L3RjiDQv9C10YDQtdC70LjRgdGC0YvQstCw0LXRgiAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlc2N0b3AgNCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQvNC10L3RjiDQv9C+0Y/QstC70Y/QtdGC0YHRjyDRgtC10LrRgdGCXHJcbiAgICB2YXIgaXRlbU1lbnU9JCgnLnBhZ2U0X21lbnUtaXRlbScpLC8v0L/Rg9C90LrRgiDQvNC10L3RjlxyXG4gICAgICAgIHRleHRNZW51PWl0ZW1NZW51LmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKTsvL9GC0LXQutGB0YIg0LrQvtGC0L7RgNGL0LnQtNC+0LvQttC10L0g0L/QvtGP0LLQuNGC0YzRgdGPXHJcblxyXG4gICAgaXRlbU1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHBhZ2U0PSR0aGlzLnBhcmVudCgnLmNvbnRlbnQtZGVza3RvcF9wYWdlNCcpLC8v0L3QsNGF0L7QtNC40Lwg0LHQu9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGV4dD1wYWdlNC5maW5kKCcucGFnZTRfbWVudS10ZXh0X2FjdGl2JyksLy/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC10LrRgdGC0LBcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RpdGxlPXBhZ2U0LmZpbmQoJy5wYWdlNF9tZW51LXRpdGxlX2FjdGl2Jyk7Ly/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC40YLRg9C70LBcclxuXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUaXRsZS5yZW1vdmVDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINGD0LTQsNC70Y/QtdC8INGDINGC0LjRgtGD0LvQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUZXh0LnJlbW92ZUNsYXNzKCdwYWdlNF9tZW51LXRleHRfYWN0aXYnKTsvLyDRg9C00LDQu9GP0LXQvCDRgyDRgtC10LrRgdGC0LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICR0aGlzLmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKS5hZGRDbGFzcygncGFnZTRfbWVudS10ZXh0X2FjdGl2Jyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INGC0LXQutGB0YLRgyDQsNCy0YLQuNC60LLQvdGL0Lkg0LrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtGDINC90LAg0LrQvtGC0L7RgNGL0Lkg0L3QsNC20LDQu9C4XHJcbiAgICAgICAgJHRoaXMuZmluZCgnLnBhZ2U0X21lbnUtdGl0bGUnKS5hZGRDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDRgtC40YLRg9C70YMg0LDQstGC0LjQutCy0L3Ri9C5INC60LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC90LDQttCw0LvQuFxyXG5cclxuICAgIH0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdCBtb3ZlIGFycm93Jyk7XHJcbiAgICB2YXIgYXJyb3dCbG9jaz0gJCgnLmRlc2t0b3AxX2xlYXJuLW1vcmVfX2Fycm93Jyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGJpZ0Fycm93ICgpe1xyXG5cclxuICAgICAgICBhcnJvd0Jsb2NrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjIycHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eToxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICczNHB4J1xyXG4gICAgICAgIH0sODAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNtYWxsQXJyb3coKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzbWFsbEFycm93KCl7XHJcblxyXG4gICAgICAgIGFycm93QmxvY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjhweCdcclxuICAgICAgICB9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoYmlnQXJyb3csMjIwMCk7XHJcblxyXG59KTsiLCJcclxuXHJcbnZhciBhcnJvd1JpZ2h0PSQoJy5wYWdlM19hcnJvdy1yaWdodCcpLC8v0YHRgtGA0LXQu9C+0YfQutCwINCy0L/RgNCw0LLQvlxyXG4gICAgYXJyb3dMZWZ0PSQoJy5wYWdlM19hcnJvdy1sZWZ0JyksLy/RgdGC0YDQtdC70L7Rh9C60LAg0LLQu9C10LLQvlxyXG5cclxuICAgIGFsbENsb3VkPSQoJy5wYWdlM19jb250ZW50X2Fic29sdXRlQmxvY2snKSwvL9Cy0YHQtSDQvtCx0LvQsNC60LBcclxuICAgIGNvbnRlaW5lcj0kKCcucGFnZTNfY29udGVudCcpLC8v0LrQvtC90YLQtdC50L3QtdGAINCz0LTQtSDQu9C10LbQsNGCINCy0YHQtSDQvtCx0LvQsNC60LBcclxuICAgIGk9MTsvL9C/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBhcnJvd1JpZ2h0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C90L7QvNC10YA6ICcraSk7XHJcbiAgICAgICAgICAgIGlmKGk9PWFsbENsb3VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaT0wO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9C+0LHQvdGD0LvQuNC70LggaScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGk9PWFsbENsb3VkLmxlbmd0aCsxKSB7XHJcbiAgICAgICAgICAgICAgICBpPTE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0L7QsdC90YPQu9C40LvQuCBpJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNlbnRlcj1pKzEsXHJcbiAgICAgICAgICAgICAgICByaWdodD1pKzIsXHJcbiAgICAgICAgICAgICAgICByaWdodE91dD1pKzMsXHJcbiAgICAgICAgICAgICAgICBsZWZ0T3V0PWkrNDtcclxuXHJcbiAgICAgICAgICAgIGlmKGk9PWFsbENsb3VkLmxlbmd0aCkge2k9MDsgfVxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PWFsbENsb3VkLmxlbmd0aCkge2NlbnRlcj0wOyB9XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0PT1hbGxDbG91ZC5sZW5ndGgpIHtyaWdodD0wOyB9XHJcbiAgICAgICAgICAgIGlmKHJpZ2h0T3V0PT1hbGxDbG91ZC5sZW5ndGgpIHtyaWdodE91dD0wOyB9XHJcbiAgICAgICAgICAgIGlmKGxlZnRPdXQ9PWFsbENsb3VkLmxlbmd0aCkge2xlZnRPdXQ9MDsgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfbGVmdCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9sZWZ0Jyk7Ly/Rg9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0YfRgtC+0LEg0L7QsdC70LDQutC+0Lwg0L/QvtC80LXQvdGP0LvQviDQvNC10YHRgtC+XHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfY2VudGVyJykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGNvbnRlaW5lci5maW5kKCcuY2xvdWRfYWJzb2x1dGVfb3V0X3JpZ2h0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9yaWdodCcpO1xyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX291dF9sZWZ0JykucmVtb3ZlQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9sZWZ0Jyk7XHJcblxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShpKS5hZGRDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShjZW50ZXIpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShyaWdodE91dCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9sZWZ0Jyk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGxlZnRPdXQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfcmlnaHQnKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcnJvd0xlZnQub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L3QvtC80LXRgDogJytpKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICBpZihpPDApIHtcclxuICAgICAgICAgICAgICAgIGk9YWxsQ2xvdWQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QstGL0YHQuNC70LggaScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXI9aS0xLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ9aS0yLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRPdXQ9aS0zLFxyXG4gICAgICAgICAgICAgICAgbGVmdE91dD1pLTQ7XHJcblxyXG4gICAgICAgICAgICBpZihpPT1hbGxDbG91ZC5sZW5ndGgpIHtpPWFsbENsb3VkLmxlbmd0aDsgfVxyXG4gICAgICAgICAgICBpZihjZW50ZXI9PWFsbENsb3VkLmxlbmd0aCkge2NlbnRlcj1hbGxDbG91ZC5sZW5ndGg7IH1cclxuICAgICAgICAgICAgaWYocmlnaHQ9PWFsbENsb3VkLmxlbmd0aCkge3JpZ2h0PWFsbENsb3VkLmxlbmd0aDsgfVxyXG4gICAgICAgICAgICBpZihyaWdodE91dD09YWxsQ2xvdWQubGVuZ3RoKSB7cmlnaHRPdXQ9YWxsQ2xvdWQubGVuZ3RoOyB9XHJcbiAgICAgICAgICAgIGlmKGxlZnRPdXQ9PWFsbENsb3VkLmxlbmd0aCkge2xlZnRPdXQ9YWxsQ2xvdWQubGVuZ3RoOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2xlZnQnKS5yZW1vdmVDbGFzcygnY2xvdWRfYWJzb2x1dGVfbGVmdCcpOy8v0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGH0YLQvtCxINC+0LHQu9Cw0LrQvtC8INC/0L7QvNC10L3Rj9C70L4g0LzQtdGB0YLQvlxyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX2NlbnRlcicpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9jZW50ZXInKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9yaWdodCcpO1xyXG4gICAgICAgICAgICBjb250ZWluZXIuZmluZCgnLmNsb3VkX2Fic29sdXRlX291dF9yaWdodCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfcmlnaHQnKTtcclxuICAgICAgICAgICAgY29udGVpbmVyLmZpbmQoJy5jbG91ZF9hYnNvbHV0ZV9vdXRfbGVmdCcpLnJlbW92ZUNsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfbGVmdCcpO1xyXG5cclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoaSkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX3JpZ2h0Jyk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2NlbnRlcicpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShyaWdodCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX2xlZnQnKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHRPdXQpLmFkZENsYXNzKCdjbG91ZF9hYnNvbHV0ZV9vdXRfcmlnaHQnKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEobGVmdE91dCkuYWRkQ2xhc3MoJ2Nsb3VkX2Fic29sdXRlX291dF9sZWZ0Jyk7XHJcblxyXG5cclxuICAgICAgICB9KTsiLCIvL1xuLy9cdFVzZXMgRG91Z2xhcyBDcm9ja2ZvcmRzIE9iamVjdCBjcmVhdGlvbiBzdHlsZVxuLy9cdEluIHByZXBhcmF0aW9uIGZvciBFUzYuXG4vL1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdC8vIEhhbmRsZXMgc2Nyb2xsIGV2ZW50cyBhbmQgYXR0YWNoZXMgdGhlbSB0byBtZXRob2RzLlxuXHR2YXIgU2Nyb2xsQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgbWV0aG9kO1xuXHRcdHZhciBpbnRlcnZhbDtcblx0XHR2YXIgcmVwZWF0SW50ZXJ2YWxJZDtcblx0XHR2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblx0XHR2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XG5cdFx0dmFyIGxhc3RTY3JvbGxUaW1lO1xuXHRcdHZhciBkZWxheUNvdW50ID0gMDtcblxuXHRcdC8vIC0tLS0tIHB1YmxpYyBtZXRob2RzIC0tLS0tLVxuXHRcdC8vIHJlcGVhdCBmdW5jdGlvbiAqZnVuYyogZXZlcnkgKmludGVydio6bnRoIG1pbGxpc2Vjb25kXG5cdFx0dmFyIHJlcGVhdE9uU2Nyb2xsID0gZnVuY3Rpb24gKGZ1bmMsIGludGVydikge1xuXHRcdFx0bWV0aG9kID0gZnVuYztcblx0XHRcdGludGVydmFsID0gaW50ZXJ2O1xuXG5cdFx0XHR3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmKCFyZXBlYXRJbnRlcnZhbElkKXtcblx0XHRcdFx0XHRzdGFydFJlcGVhdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0gcHJpdmF0ZSBtZXRob2RzIC0tLS0tLVxuXHRcdFxuXHRcdC8vIFRpY2sgZm9yd2FyZHMsIGNoZWNrIGZvciBzY3JvbGwgc3RvcCBhbmQgcnVuICptZXRob2QqLlxuXHRcdHZhciB1cGRhdGUgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYocmVwZWF0SW50ZXJ2YWxJZCl7XG5cdFx0XHRcdC8vIGRldGVjdCB3aGVuIHRvIHN0b3AgcmVwZWF0aW5nXG5cdFx0XHRcdHZhciB0bXBTY3JvbGxUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xuXHRcdFx0XHRcblxuXHRcdFx0XHQvLyBkZWx0YSBzdG9wcGVkXG5cdFx0XHRcdGlmKHRtcFNjcm9sbFRvcCA9PSBsYXN0U2Nyb2xsVG9wKXtcblx0XHRcdFx0XHQvLyB3YWl0IGhhbGYgYSBzZWNvbmQgZXh0cmEgdG8gYWNjb3VudCBmb3Igc2Nyb2xsIGVhc2luZ1xuXHRcdFx0XHRcdGlmKCsrZGVsYXlDb3VudCA+PSAzMCl7XG5cdFx0XHRcdFx0XHRkZWxheUNvdW50ID0gMDtcblx0XHRcdFx0XHRcdHN0b3BSZXBlYXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0bGFzdFNjcm9sbFRvcCA9IHRtcFNjcm9sbFRvcDtcblxuXHRcdFx0XHQvLyBydW4gdGhlIG1ldGhvZFxuXHRcdFx0XHRtZXRob2QoKTtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdHZhciBzdGFydFJlcGVhdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXBlYXRJbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKHVwZGF0ZSwgaW50ZXJ2YWwpO1xuXHRcdH07XG5cblx0XHR2YXIgc3RvcFJlcGVhdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChyZXBlYXRJbnRlcnZhbElkKTtcblx0XHRcdHJlcGVhdEludGVydmFsSWQgPSB1bmRlZmluZWQ7XG5cdFx0fTtcblxuXG5cdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoe1xuXHRcdFx0cmVwZWF0T25TY3JvbGw6cmVwZWF0T25TY3JvbGwsXG5cdFx0XHRnZXRTY3JvbGxUb3A6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGxhc3RTY3JvbGxUb3A7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gYW5pbWF0aW9uIGNvbnRyb2xsZXJcblx0dmFyIFNwYWNlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcblx0XHR2YXIgc2Nyb2xsQ29udHJvbCA9IFNjcm9sbENvbnRyb2xsZXIoKTtcblx0XHR2YXIgZnJhbWVzO1xuXHRcdHZhciBjdXJyZW50RnJhbWUgPSAwO1xuXHRcdHZhciBmcmFtZVNlbGVjdG9yID0gXCIuc3BhY2UtZnJhbWVcIjtcblxuXHRcdC8vIFRvZG86IG1ha2UgdGhlc2UgbW9kdWxhciBmcm9tIHRoZSA8ZWxlbWVudD4sIGUuZzpcblx0XHQvLyBlLmcuIDxzZWN0aW9uIGNsYXNzPVwiZnJhbWUgZGVwdGgtc2NhbGUgZGVwdGgtb3BhY2l0eVwiPjwvc2VjdGlvbj5cblxuXHRcdHZhciB0cmFuc2l0aW9ucyA9IHtcblx0XHRcdHNjYWxlSW46IHsnc2NhbGUnOntmcm9tOjAsIHRvOjF9fSxcblx0XHRcdGZhZGVJbjogeydvcGFjaXR5Jzp7ZnJvbTowLCB0bzoxfX0sXG5cdFx0XHRzY2FsZU91dDogeydzY2FsZSc6e2Zyb206MSwgdG86MS41fX0sXG5cdFx0XHRmYWRlT3V0OiB7J29wYWNpdHknOntmcm9tOjEsIHRvOjB9fSxcblx0XHRcdHJvdGF0ZVF1YXJ0ZXJSaWdodDogeydyb3RhdGUnOntmcm9tOjAsIHRvOjkwfX0sXG5cdFx0XHRyb3RhdGVJblF1YXJ0ZXJDbG9ja3dpc2U6IHsncm90YXRlJzp7ZnJvbTotOTAsIHRvOjB9fSxcblx0XHRcdHpvb21PdXQ6e1xuXHRcdFx0XHQnc2NhbGUnOiB7ZnJvbTogMSwgdG86IDB9XG5cdFx0XHR9LFxuXHRcdFx0c2xpZGVJbkJvdHRvbToge1xuXHRcdFx0XHQndHJhbnNsYXRlM2QnOntcblx0XHRcdFx0XHRmcm9tOnt5OjcwMH0sXG5cdFx0XHRcdFx0dG86IHt5OjB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzbGlkZU91dERvd246IHtcblx0XHRcdFx0J3RyYW5zbGF0ZTNkJzp7XG5cdFx0XHRcdFx0ZnJvbTp7eTowfSxcblx0XHRcdFx0XHR0bzoge3k6NzAwfVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2xpZGVPdXRMZWZ0OiB7XG5cdFx0XHRcdCd0cmFuc2xhdGUzZCc6e1xuXHRcdFx0XHRcdGZyb206e3g6MH0sXG5cdFx0XHRcdFx0dG86IHt4Oi03MDB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzbGlkZU91dFJpZ2h0OiB7XG5cdFx0XHRcdCd0cmFuc2xhdGUzZCc6e1xuXHRcdFx0XHRcdGZyb206e3g6MH0sXG5cdFx0XHRcdFx0dG86IHt4OjcwMH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNsaWRlSW5SaWdodDoge1xuXHRcdFx0XHQndHJhbnNsYXRlM2QnOntcblx0XHRcdFx0XHRmcm9tOnt4OjcwMH0sXG5cdFx0XHRcdFx0dG86IHt4OjB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzbGlkZU91dFVwOiB7XG5cdFx0XHRcdCd0cmFuc2xhdGUzZCc6e1xuXHRcdFx0XHRcdGZyb206e3k6MH0sXG5cdFx0XHRcdFx0dG86IHt5Oi03MDB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzbGlkZUluVG9wOiB7XG5cdFx0XHRcdCd0cmFuc2xhdGUzZCc6e1xuXHRcdFx0XHRcdGZyb206e3k6LTcwMH0sXG5cdFx0XHRcdFx0dG86IHt5OjB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzbGlkZUluTGVmdDoge1xuXHRcdFx0XHQndHJhbnNsYXRlM2QnOntcblx0XHRcdFx0XHRmcm9tOnt4Oi03MDB9LFxuXHRcdFx0XHRcdHRvOiB7eDowfVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2xpZGVCb3R0b21SaWdodDoge1xuXHRcdFx0XHQndHJhbnNsYXRlM2QnOntcblx0XHRcdFx0XHRmcm9tOnt4OjAsIHk6MH0sXG5cdFx0XHRcdFx0dG86IHt4OjUwMCwgeTo1MDB9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyb3RhdGUzNjA6IHtcblx0XHRcdFx0J3JvdGF0ZSc6e2Zyb206MCwgdG86MzYwfVxuXHRcdFx0fSxcblx0XHRcdHJvdGF0ZTNkT3V0OiB7XG5cdFx0XHRcdCdyb3RhdGUzZCc6e1xuXHRcdFx0XHRcdGZyb206e3g6MCwgeTowLCB6OjAsIGFuZ2xlOjB9LFxuXHRcdFx0XHRcdHRvOiB7eDoxLCB5Oi0xLHo6MCwgYW5nbGU6OTB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlZmF1bHRUcmFuc2l0aW9uID0ge1xuXHRcdFx0YWxsOiBbdHJhbnNpdGlvbnMuc2NhbGVPdXQsIHRyYW5zaXRpb25zLmZhZGVPdXRdLFxuXHRcdFx0ZW50ZXI6IFtdLFxuXHRcdFx0ZXhpdDpbXVxuXHRcdH07XG5cblx0XHQvLyAtLS0tLSBwdWJsaWMgbWV0aG9kcyAtLS0tLS1cblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGNvbXBlbnNhdGUgc3BlZWQgc2Nyb2xsaW5nIG9uIHRvdWNoIHNjcmVlbnNcblx0XHRcdHZhciB0b3VjaFNjcmVlbkNvbXBlbnNhdGlvbiA9IChpc01vYmlsZSgpID8gMC4zIDogMSk7XG5cblx0XHRcdHZhciBzaW11bGF0ZWRCb2R5SGVpZ2h0ID0gMDtcblxuXHRcdFx0Ly8gU2V0IHVwIGZyYW1lc1xuXHRcdFx0ZnJhbWVzID0gJCgnLnNwYWNlLWZyYW1lJykubWFwKGZ1bmN0aW9uKGluZGV4LCBmcmFtZSl7XG5cblx0XHRcdFx0Ly8gRHVyYXRpb24gZm9yIGN1cnJlbnQgZnJhbWUsIGRlZmF1bHQgaXMgb25lLlxuXHRcdFx0XHQvLyBPdGhlciBpcyByZWFkIGZyb20gaHRtbC1lbGVtZW50IGF0dHJpYnV0ZSBkYXRhLWR1cmF0aW9uXG5cdFx0XHRcdHZhciBkdXJhdGlvbiA9IChmcmFtZS5kYXRhc2V0LmR1cmF0aW9uIHx8IDEpICogdG91Y2hTY3JlZW5Db21wZW5zYXRpb247XG5cblx0XHRcdFx0Ly8gc2ltdWxhdGVkIGRvY3VtZW50IGhlaWdodCwgdG8gZ2V0IGEgc2Nyb2xsYmFyIGFuZCBoZWlnaHRcblx0XHRcdFx0dmFyIHNpbXVsYXRlZEhlaWdodCA9IGR1cmF0aW9uICogd2luZG93SGVpZ2h0O1xuXHRcdFx0XHR2YXIgZGlzdGFuY2VUbyA9IHNpbXVsYXRlZEJvZHlIZWlnaHQ7XG5cdFx0XHRcdHNpbXVsYXRlZEJvZHlIZWlnaHQrPSBzaW11bGF0ZWRIZWlnaHQ7XG5cblxuXHRcdFx0XHQvLyBnaXZlIGVhY2ggZnJhbWUgYW4gaWRcblx0XHRcdFx0dmFyIGZyYW1lSWQgPSBcImZyYW1lLVwiK2luZGV4O1xuXHRcdFx0XHRmcmFtZS5pZCA9IGZyYW1lSWQ7XG5cblx0XHRcdFx0Ly8gbG9vayBmb3IgYSBjdXN0b20gdHJhbnNpdGlvbiB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvbmVcblx0XHRcdFx0dmFyIGN1c3RvbVRyYW5zaXRpb24gPSBmcmFtZS5kYXRhc2V0LnRyYW5zaXRpb247XG5cdFx0XHRcdHZhciBjdXN0b21FbnRlciA9IGZyYW1lLmRhdGFzZXQuZW50ZXI7XG5cdFx0XHRcdHZhciBjdXN0b21FeGl0ID0gZnJhbWUuZGF0YXNldC5leGl0O1xuXG5cdFx0XHRcdGlmKGN1c3RvbVRyYW5zaXRpb24gfHwgY3VzdG9tRW50ZXIgfHwgY3VzdG9tRXhpdCl7XG5cdFx0XHRcdFx0dmFyIG5ld1RyYW5zaXRpb24gPSB7YWxsOltdLGVudGVyOltdLGV4aXQ6W119O1xuXG5cdFx0XHRcdFx0dmFyIHRvVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKGFycil7cmV0dXJuIGFyci5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdHJhbnNpdGlvbnNbdF07fSl9O1xuXG5cdFx0XHRcdFx0bmV3VHJhbnNpdGlvbi5hbGwgPSBjdXN0b21UcmFuc2l0aW9uID8gdG9UcmFuc2l0aW9uKGN1c3RvbVRyYW5zaXRpb24pIDogW107XG5cdFx0XHRcdFx0bmV3VHJhbnNpdGlvbi5lbnRlciA9IGN1c3RvbUVudGVyID8gdG9UcmFuc2l0aW9uKGN1c3RvbUVudGVyKSA6IFtdO1xuXHRcdFx0XHRcdG5ld1RyYW5zaXRpb24uZXhpdCA9IGN1c3RvbUV4aXQgPyB0b1RyYW5zaXRpb24oY3VzdG9tRXhpdCkgOiBbXTtcblxuXHRcdFx0XHRcdHJldHVybiB7c2VsZWN0b3I6XCIjXCIrZnJhbWVJZCwgZHVyYXRpb246c2ltdWxhdGVkSGVpZ2h0LCBkaXN0YW5jZVRvOmRpc3RhbmNlVG8sIHRyYW5zaXRpb246bmV3VHJhbnNpdGlvbn07XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIHtzZWxlY3RvcjpcIiNcIitmcmFtZUlkLCBkdXJhdGlvbjpzaW11bGF0ZWRIZWlnaHQsIGRpc3RhbmNlVG86ZGlzdGFuY2VUb307XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gc2V0IGZha2UgYm9keSBoZWlnaHRcblx0XHRcdCQoJ2JvZHknKS5oZWlnaHQoc2ltdWxhdGVkQm9keUhlaWdodCk7XG5cblxuXHRcdFx0Ly8gc2hvdyB0aGUgZmlyc3QgZnJhbWVcblx0XHRcdCQoZnJhbWVzW2N1cnJlbnRGcmFtZV0uc2VsZWN0b3IpLnNob3coKTtcblxuXHRcdFx0Ly8gaW5pdGlhdGUgc2Nyb2xsIGNvbnRyb2xsZXIgd2l0aCBhbmltYXRlIG1ldGhvZFxuXHRcdFx0c2Nyb2xsQ29udHJvbC5yZXBlYXRPblNjcm9sbChhbmltYXRlLCAxMDAwLzYwKTtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0gcHJpdmF0ZSBtZXRob2RzIC0tLS0tLVxuXG5cdFx0dmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNldEN1cnJlbnRGcmFtZSgpO1xuXHRcdFx0XHRhbmltYXRlRnJhbWUoKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyBjb21wYXJlIHNjcm9sbGVkIGRpc3RhbmNlIHdpdGggZnJhbWVzIGFuZCBzZWxlY3QgdGhlIGNvcnJlY3Qgb25lXG5cdFx0dmFyIHNldEN1cnJlbnRGcmFtZSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgdG9wID0gc2Nyb2xsQ29udHJvbC5nZXRTY3JvbGxUb3AoKTtcblx0XHRcdHZhciB0cmlnZ2VyID0gZnJhbWVzW2N1cnJlbnRGcmFtZV0uZGlzdGFuY2VUbztcblxuXHRcdFx0Ly8gY2hlY2sgaWYgd2UgYXJlIG5vdCBpbiB0aGUgaW50ZXJ2YWwgb2YgdGhlIGN1cnJlbnQgZnJhbWVcblx0XHRcdGlmKHRvcCA8IHRyaWdnZXIpeyAvLyBwcmV2IGZyYW1lXG5cdFx0XHRcdCQoJy5zcGFjZS1mcmFtZScpLmhpZGUoKTtcblx0XHRcdFx0Y3VycmVudEZyYW1lLS07XG5cdFx0XHRcdGlmIChjdXJyZW50RnJhbWUgPCAwKXtjdXJyZW50RnJhbWUgPSAwfTtcblx0XHRcdFx0JChmcmFtZXNbY3VycmVudEZyYW1lXS5zZWxlY3Rvcikuc2hvdygpO1xuXHRcdFx0fWVsc2UgaWYodG9wID4gKHRyaWdnZXIgKyBmcmFtZXNbY3VycmVudEZyYW1lXS5kdXJhdGlvbikpeyAvLyBuZXh0IGZyYW1lXG5cdFx0XHRcdCQoJy5zcGFjZS1mcmFtZScpLmhpZGUoKTtcblx0XHRcdFx0Y3VycmVudEZyYW1lKys7XG5cdFx0XHRcdCQoZnJhbWVzW2N1cnJlbnRGcmFtZV0uc2VsZWN0b3IpLnNob3coKTtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHByb3BWYWx1ZVRvQ3NzRm9ybWF0IChwcm9wLCB2YWwpIHtcblx0XHRcdHN3aXRjaCAocHJvcCl7XG5cdFx0XHRcdGNhc2UgXCJzY2FsZVwiOlxuXHRcdFx0XHRcdHJldHVybiAnc2NhbGUoJyt2YWwrJyknO1xuXHRcdFx0XHRjYXNlIFwicm90YXRlXCI6XG5cdFx0XHRcdFx0cmV0dXJuICdyb3RhdGUoJyt2YWwrJ2RlZyknO1xuXHRcdFx0XHRjYXNlIFwidHJhbnNsYXRlM2RcIjpcblx0XHRcdFx0XHRyZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyBcblx0XHRcdFx0XHRcdCh2YWwueCA/IHZhbC54KydweCcgOiAwKSsnLCcrXG5cdFx0XHRcdFx0XHQodmFsLnkgPyB2YWwueSsncHgnIDogMCkrJywnK1xuXHRcdFx0XHRcdFx0KHZhbC56ID8gdmFsLnorJ3B4JyA6IDApKycpJztcblx0XHRcdFx0Y2FzZSBcInJvdGF0ZTNkXCI6XG5cdFx0XHRcdFx0cmV0dXJuICdyb3RhdGUzZCgnICsgXG5cdFx0XHRcdFx0XHQodmFsLnggPyB2YWwueCA6IDApKycsJytcblx0XHRcdFx0XHRcdCh2YWwueSA/IHZhbC55IDogMCkrJywnK1xuXHRcdFx0XHRcdFx0KHZhbC56ID8gdmFsLnogOiAwKSsnLCcrXG5cdFx0XHRcdFx0XHQodmFsLmFuZ2xlID8gdmFsLmFuZ2xlKydkZWcnIDogMCkrJyknO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIFVwZGF0ZSBjc3MgdmFsdWVzIG9mIHRoZSBjdXJyZW50IGZyYW1lIHRvIHRoZWlyIGRlbHRhLXZhbHVlIGluIHRoZSBzY3JvbGwgcHJvZ3Jlc3Ncblx0XHR2YXIgYW5pbWF0ZUZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHNjcm9sbEluRWxlbWVudCA9IChzY3JvbGxDb250cm9sLmdldFNjcm9sbFRvcCgpIC0gZnJhbWVzW2N1cnJlbnRGcmFtZV0uZGlzdGFuY2VUbyk7XG5cblx0XHRcdHZhciBwcm9wcyA9IHsndHJhbnNmb3JtJzonJ307XG5cblx0XHRcdC8vIGN1c3RvbSBvciBkZWZhdWx0IHRyYW5zaXRpb25cblx0XHRcdHZhciBmcmFtZVRyYW5zaXRpb24gPSBmcmFtZXNbY3VycmVudEZyYW1lXS50cmFuc2l0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uO1xuXG5cdFx0XHRmcmFtZVRyYW5zaXRpb24uYWxsLmZvckVhY2goZnVuY3Rpb24gKHRyYW5zKSB7XG5cdFx0XHRcdGZvcih2YXIgcHJvcGVydHkgaW4gdHJhbnMpe1xuXHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PSAnc2NhbGUnIHx8IHByb3BlcnR5ID09ICd0cmFuc2xhdGUzZCcgfHwgcHJvcGVydHkgPT0gJ3JvdGF0ZScgfHwgcHJvcGVydHkgPT0gJ3JvdGF0ZTNkJyl7XG5cdFx0XHRcdFx0XHRwcm9wc1sndHJhbnNmb3JtJ10gKz0gcHJvcFZhbHVlVG9Dc3NGb3JtYXQocHJvcGVydHksIGRlbHRhVmFsdWUodHJhbnMsIHNjcm9sbEluRWxlbWVudCwgcHJvcGVydHkpKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHByb3BzW3Byb3BlcnR5XSA9IHByb3BWYWx1ZVRvQ3NzRm9ybWF0KHByb3BlcnR5LCBkZWx0YVZhbHVlKHRyYW5zLCBzY3JvbGxJbkVsZW1lbnQsIHByb3BlcnR5KSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZihzY3JvbGxJbkVsZW1lbnQgPD0gKGZyYW1lc1tjdXJyZW50RnJhbWVdLmR1cmF0aW9uIC8gMikpe1xuXHRcdFx0XHRmcmFtZVRyYW5zaXRpb24uZW50ZXIuZm9yRWFjaChmdW5jdGlvbiAodHJhbnMpIHtcblx0XHRcdFx0XHRmb3IodmFyIHByb3BlcnR5IGluIHRyYW5zKXtcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PSAnc2NhbGUnIHx8IHByb3BlcnR5ID09ICd0cmFuc2xhdGUzZCcgfHwgcHJvcGVydHkgPT0gJ3JvdGF0ZScgfHwgcHJvcGVydHkgPT0gJ3JvdGF0ZTNkJyl7XG5cdFx0XHRcdFx0XHRcdHByb3BzWyd0cmFuc2Zvcm0nXSArPSBwcm9wVmFsdWVUb0Nzc0Zvcm1hdChwcm9wZXJ0eSwgZGVsdGFWYWx1ZSh0cmFucywgc2Nyb2xsSW5FbGVtZW50KjIsIHByb3BlcnR5KSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0cHJvcHNbcHJvcGVydHldID0gcHJvcFZhbHVlVG9Dc3NGb3JtYXQocHJvcGVydHksIGRlbHRhVmFsdWUodHJhbnMsIHNjcm9sbEluRWxlbWVudCoyLCBwcm9wZXJ0eSkpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRmcmFtZVRyYW5zaXRpb24uZXhpdC5mb3JFYWNoKGZ1bmN0aW9uICh0cmFucykge1xuXHRcdFx0XHRcdGZvcih2YXIgcHJvcGVydHkgaW4gdHJhbnMpe1xuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID09ICdzY2FsZScgfHwgcHJvcGVydHkgPT0gJ3RyYW5zbGF0ZTNkJyB8fCBwcm9wZXJ0eSA9PSAncm90YXRlJyB8fCBwcm9wZXJ0eSA9PSAncm90YXRlM2QnKXtcblx0XHRcdFx0XHRcdFx0cHJvcHNbJ3RyYW5zZm9ybSddICs9IHByb3BWYWx1ZVRvQ3NzRm9ybWF0KHByb3BlcnR5LCBkZWx0YVZhbHVlKHRyYW5zLCAoc2Nyb2xsSW5FbGVtZW50IC0gKGZyYW1lc1tjdXJyZW50RnJhbWVdLmR1cmF0aW9uIC8gMikpKjIsIHByb3BlcnR5KSk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0cHJvcHNbcHJvcGVydHldID0gcHJvcFZhbHVlVG9Dc3NGb3JtYXQocHJvcGVydHksIGRlbHRhVmFsdWUodHJhbnMsIChzY3JvbGxJbkVsZW1lbnQgLSAoZnJhbWVzW2N1cnJlbnRGcmFtZV0uZHVyYXRpb24gLyAyKSkqMiwgcHJvcGVydHkpKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9wc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHByb3BzWyd0cmFuc2Zvcm0nXTtcblx0XHRcdHByb3BzWyctbW96LXRyYW5zZm9ybSddID0gcHJvcHNbJ3RyYW5zZm9ybSddO1xuXHRcdFx0JChmcmFtZXNbY3VycmVudEZyYW1lXS5zZWxlY3RvcikuY3NzKHByb3BzKTtcblx0XHR9O1xuXG5cdFx0dmFyIGRlbHRhVmFsdWUgPSBmdW5jdGlvbihhbmltYXRpb24sIGRlbHRhLCBwcm9wZXJ0eSkge1xuXHRcdCAgdmFyIHZhbHVlID0gYW5pbWF0aW9uW3Byb3BlcnR5XTtcblxuXHRcdCAgdmFyIGZyYW1lRHVyYXRpb24gPSBmcmFtZXNbY3VycmVudEZyYW1lXS5kdXJhdGlvbjtcblxuXHRcdCAgdmFyIGZyYW1lUHJvZ3Jlc3MgPSBkZWx0YS9mcmFtZUR1cmF0aW9uOyAvLyBkZWNpbWFsIHBlcmNlbnRcblxuXHRcdCAgaWYocHJvcGVydHkgPT0gJ3RyYW5zbGF0ZTNkJyB8fCBwcm9wZXJ0eSA9PSAncm90YXRlM2QnKXtcblx0XHQgIFx0XHR2YXIgdHJhbnMgPSB7fTtcblx0XHQgIFx0XHRmb3IoYXhpcyBpbiB2YWx1ZS5mcm9tKXtcblx0XHQgIFx0XHRcdHRyYW5zW2F4aXNdID0gK2xpbmVhckVhc2UoZGVsdGEsIHZhbHVlLmZyb21bYXhpc10sICh2YWx1ZS50b1theGlzXS12YWx1ZS5mcm9tW2F4aXNdKSwgZnJhbWVEdXJhdGlvbikudG9GaXhlZCg0KTtcblx0XHQgIFx0XHR9O1xuXHRcdCAgXHRcdHJldHVybiB0cmFucztcblx0XHQgIH1lbHNle1xuXHRcdFx0ICAvLyBjb21wdXRlIGRlbHRhIHZhbHVlIGFuZCByb3VuZCBpdCB0byBmb3VyIGRpZ2l0cyB0byBzYXZlIHBlcmZvcm1hbmNlLlxuXHRcdFx0ICByZXR1cm4gK2xpbmVhckVhc2UoZGVsdGEsIHZhbHVlLmZyb20sICh2YWx1ZS50by12YWx1ZS5mcm9tKSwgZnJhbWVEdXJhdGlvbikudG9GaXhlZCg0KTtcblx0XHQgIH1cblx0XHR9O1xuXG5cdFx0dmFyIGxpbmVhckVhc2UgPSBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0ICByZXR1cm4gYitjKih0L2QpO1xuXHRcdH07XG5cblx0XHR2YXIgaXNNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXHRcdH07XG5cblxuXHRcdC8vIGZvcm1hdFxuXHRcdC8vIHt7a2V5OnsvLy90cmFuc2l0aW9uLy8vfX0sIGtleTp7Ly8vdHJhbnNpdGlvbi8vL319fVxuXHRcdHZhciBhZGRUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uIChjdXN0b21UcmFucykge1xuXHRcdFx0Ly8gdHJhbnNpdGlvbnNbXVxuXHRcdFx0Zm9yKHZhciBuYW1lIGluIGN1c3RvbVRyYW5zKXtcblx0XHRcdFx0aWYodHJhbnNpdGlvbnNbbmFtZV0pe1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVHJhbnNpdGlvbiBuYW1lIGFscmVhZHkgZXhpc3RzISEhXCIpO1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRyYW5zaXRpb25zW25hbWVdID0gY3VzdG9tVHJhbnNbbmFtZV07XG5cblx0XHRcdH07XG5cblx0XHRcdC8vIHJlaW5pdCB3aXRoIG5ldyB0cmFuc2l0b25zLi4gdG9kbzogZml4IHNvIHRoYXQgd2UgZG8gbm90IGhhdmUgdG8uXG5cdFx0XHRpbml0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXhwb3J0IGltbXV0YWJsZSBwdWJsaWMgcHJvcGVydGllc1xuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKHtcblx0XHRcdGluaXQ6aW5pdCxcblx0XHRcdGFkZFRyYW5zaXRpb25zOiBhZGRUcmFuc2l0aW9uc1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBpbml0RnJhbWVDU1MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGZyYW1lU3R5bGUgPSBcIi5zcGFjZS1mcmFtZSB7ZGlzcGxheTogbm9uZTtwb3NpdGlvbjogZml4ZWQ7d2lkdGg6IDEwMHZ3O2hlaWdodDogMTAwdmg7fSBcIjtcblx0XHR2YXIgaW5uZXJGcmFtZVN0eWxlID0gXCIuc3BhY2UtZnJhbWUgLnNwYWNlLWlubmVyLWZyYW1lIHtwb3NpdGlvbjogYWJzb2x1dGU7dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDt0b3A6IDUwJTtsZWZ0OiA1MCU7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOy1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTstby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt9XCJcblxuXHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0c3R5bGUuaW5uZXJIVE1MID0gZnJhbWVTdHlsZSArIGlubmVyRnJhbWVTdHlsZTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fVxuXG5cdGluaXRGcmFtZUNTUygpO1xuXG5cdFNwYWNlID0gU3BhY2VDb250cm9sbGVyKClcblx0U3BhY2UuaW5pdCgpO1xuXG59KS5jYWxsKHRoaXMpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
