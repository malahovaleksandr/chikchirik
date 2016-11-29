$(document).ready(function(){
    var map;
    var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
    var mapCoordinates = new google.maps.LatLng(50.4504996602356, 30.51102876663208),
        marker1=new google.maps.LatLng(50.461353, 30.510019),
        marker2=new google.maps.LatLng(50.458383, 30.405513),
        marker3=new google.maps.LatLng(50.442039, 30.473879);



    var markers = [];

        var image = new google.maps.MarkerImage(
            '../image/markerHarms.png',
            new google.maps.Size(320,80),
            new google.maps.Point(0,0),
            new google.maps.Point(10,10)
        );
        var image2 = new google.maps.MarkerImage(
            '../image/markerBiblioteka.png',
            new google.maps.Size(320,160),
            new google.maps.Point(0,0),
            new google.maps.Point(10,10)
        );
        var image3 = new google.maps.MarkerImage(
            '../image/markerAntoshka.png',
            new google.maps.Size(320,160),
            new google.maps.Point(0,0),
            new google.maps.Point(10,10)
        );

    function addMarker()
    {
        markers.push(new google.maps.Marker({
            position: marker1,
            raiseOnDrag: false,
            icon: image,
            map: map,
            draggable: false
        }));

    }
    function addMarker2()
    {

        markers.push(new google.maps.Marker({
            position: marker2,
            raiseOnDrag: false,
            icon: image2,
            map: map,
            draggable: false
        }));

    }
    function addMarker3()
    {
        markers.push(new google.maps.Marker({
            position: marker3,
            raiseOnDrag: false,
            icon: image3,
            map: map,
            draggable: false
        }));

    }

    function initialize() {
        var mapOptions = {
            backgroundColor: "#ffffff",
            zoom: 13,
            disableDefaultUI: true,
            center: mapCoordinates,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]

        };
        map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
        addMarker();
        addMarker2();
        addMarker3();

    }
    google.maps.event.addDomListener(window, 'load', initialize);

});


$(document).ready(function(){
	var headerLogo=$('.header_logo'),//картинка логотипа
		headButton=$('.header__coins_button'),//кнопка купить в шапке
		activeLink=$('.header_nav-text'),//выбираем ссылки на экраны,чтоб сделать активным
		headerNav=$('.header_nav');//блок где ссылки на страницы

	$('#fullpage').fullpage({
	   anchors: ['main', 'about', 'box', 'details', 'contacts'],

	   css3: true,
	   // navigation: true,
	   // navigationPosition: 'right',
	   // navigationTooltips: ['Главная', 'О нас', 'А что внутри?', 'На связи', 'Контакты'],


		//меняем цвета хэдера
	   afterLoad: function (anchorLink, index) {
		   //using index


		   if (index == 1) {
			   headerLogo.attr('src','image/logovector.png');
			   headButton.removeClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(0).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 2) {

			   headerLogo.attr('src','image/logoWhite.png');
			   headButton.addClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(1).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 3) {

			   headerLogo.attr('src','image/logovector.png');
			   headButton.removeClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(2).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 4) {

			   headerLogo.attr('src','image/logoWhite.png');
			   headButton.addClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(3).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
		   if (index == 5) {
			   
			   headerLogo.attr('src','image/logovector.png');
			   headButton.removeClass('color_blue');
			   headerNav.find('.active').removeClass('active');//удаляем активный класс
			   activeLink.eq(4).addClass('active');// добавляем активный класс ссылке текущей страницы
		   }
	   }
   });
});
/*!
 * fullPage 2.8.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
          return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    // Default options for iScroll.js used when using scrollOverflow
    var iscrollOptions = {
        scrollbars: true,
        mouseWheel: true,
        hideScrollbars: false,
        fadeScrollbars: false,
        disableMouse: true,
        interactiveScrollbars: true
    };

    $.fn.fullpage = function(options) {
        //only once my friend!
        if($('html').hasClass(ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: true,
            scrollHorizontally: true,
            interlockedSlides: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowHandler: iscrollHandler,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,


            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
        iscrollOptions.click = isTouch; // see #2035

        //extending iScroll options with the user custom ones
        iscrollOptions = $.extend(iscrollOptions, options.scrollOverflowOptions);

        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                silentScroll(0);

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        };

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        };

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            if(type !== 'internal' && options.fadingEffect && FP.fadingEffect ){
                FP.fadingEffect.update(value);
            }
            setVariableState('scrollingSpeed', value, type);
        };

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        };

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else if(value){
                setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                options.keyboardScrolling = value;
            }
        };

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        };

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        };

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        };

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        };

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        };

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        };

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height();  //updating global var

            $(SECTION_SEL).each(function(){
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if(options.scrollOverflow){
                    if(slides.length){
                        slides.each(function(){
                            createScrollBar($(this));
                        });
                    }else{
                        createScrollBar($(this));
                    }
                }

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        };

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);

                    if(options.responsiveSlides && FP.responsiveSlides){
                        FP.responsiveSlides.toSections();
                    }
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);

                if(options.responsiveSlides && FP.responsiveSlides){
                    FP.responsiveSlides.toSlides();
                }
            }
        };

        function getFullpageData(){
            return {
                options: options,
                internals: {
                    getXmovement: getXmovement,
                    removeAnimation: removeAnimation,
                    getTransforms: getTransforms,
                    lazyLoad: lazyLoad,
                    addAnimation: addAnimation,
                    performHorizontalMove: performHorizontalMove,
                    silentLandscapeScroll: silentLandscapeScroll,
                    keepSlidesPosition: keepSlidesPosition,
                    silentScroll: silentScroll,
                    styleSlides: styleSlides
                }
            };
        };

        if($(this).length){
            //public functions
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.getFullpageData = getFullpageData;
            FP.destroy = destroy;

            //Loading extensions
            loadExtension('continuousHorizontal');
            loadExtension('scrollHorizontally');
            loadExtension('resetSliders');
            loadExtension('interlockedSlides');
            loadExtension('responsiveSlides');
            loadExtension('fadingEffect');

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();

            prepareDom();
            setAllowScrolling(true);

            setAutoScrolling(options.autoScrolling, 'internal');

            //the starting point is a slide?
            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);

            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( activeSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0))){
                silentLandscapeScroll(activeSlide);
            }

            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents(){
            $window
                //when scrolling...
                .on('scroll', scrollHandler)

                //detecting any change on the URL to scroll to the given anchor link
                //(a way to detect back history button as we play with the hashes on the URL)
                .on('hashchange', hashChangeHandler)

                //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
                .blur(blurHandler)

                //when resizing the site, we adjust the heights of the sections, slimScroll...
                .resize(resizeHandler);

            $document
                //Sliding with arrow keys, both, vertical and horizontal
                .keydown(keydownHandler)

                //to prevent scrolling while zooming
                .keyup(keyUpHandler)

                //Scrolls to the section when clicking the navigation bullet
                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

                //Scrolls the slider to the given slide destination for the given section
                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                $document.on('mouseenter', options.normalScrollElements, function () {
                    setMouseWheelScrolling(false);
                });

                $document.on('mouseleave', options.normalScrollElements, function(){
                    setMouseWheelScrolling(true);
                });
            }
        }

        /**
        * Sets a public internal function based on the extension name.
        * @param externalName {String} Extension name with the form fp_[NAME]Extension referring to an external function.
        */
        function loadExtension(internalName){
            var externalName = 'fp_' + internalName + 'Extension';
            FP[internalName] = typeof window[externalName] !=='undefined' ? new window[externalName]() : null;
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                options.anchors = sections.filter('[data-anchor]').map(function(){
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltipos option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function(){
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage optionss.
        */
        function prepareDom(){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initilizing it again

            addInternalSelectors();

             //styling the sections / slides / menu
            $(SECTION_SEL).each(function(index){
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();
            enableVidemoAPI();

            if(options.fadingEffect && FP.fadingEffect){
                FP.fadingEffect.apply();
            }

            if(options.scrollOverflow){
                if(document.readyState === 'complete'){
                    createScrollBarHandler();
                }
                //after DOM and images are loaded
                $window.on('load', createScrollBarHandler);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function(index) {
                $(this).css('width', slideWidth + '%');

                if(options.verticalCentered){
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
                silentLandscapeScroll(startingSlide);
            }else{
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }

            section.css('height', windowsHeight + 'px');

            if(options.paddingTop){
                section.css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(section.hasClass(ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function() {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /**
        * Creates the slim scroll scrollbar for the sections and slides inside them.
        */
        function createScrollBarHandler(){
            $(SECTION_SEL).each(function(){
                var slides = $(this).find(SLIDE_SEL);

                if(slides.length){
                    slides.each(function(){
                        createScrollBar($(this));
                    });
                }else{
                    createScrollBar($(this));
                }

            });
            afterRenderActions();
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            container.find('iframe[src*="youtube.com/embed/"]').each(function(){
                addURLParam($(this), 'enablejsapi=1');
            });
        }

        /*
        * Enables the Vimeo videos API so we can control their flow if necessary.
        */
        function enableVidemoAPI(){
            container.find('iframe[src*="player.vimeo.com/"]').each(function(){
                addURLParam($(this), 'api=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.attr('src');
            element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            if(options.scrollOverflowHandler.afterRender){
                options.scrollOverflowHandler.afterRender(section);
            }
            lazyLoad(section);
            playMedia(section);

            $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            $.isFunction( options.afterRender ) && options.afterRender.call(container);
        }


        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + ($window.height() / 2.0);
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections =  document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't take most of the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);

                    if(activeSlide.length){
                        var slideAnchorLink = activeSlide.data('anchor');
                        var slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking fitToSection again in case it was set to false before the timeout delay
                        if(canScroll && options.fitToSection){
                            //allows to scroll to an active section and
                            //if the section is already active, we prevent firing callbacks
                            if($(SECTION_ACTIVE_SEL).is(currentSection)){
                                isResizing = true;
                            }
                            scrollPage($(SECTION_ACTIVE_SEL));

                            isResizing = false;
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if(movement == 'up'){
                return bottom >= ($window.scrollTop() + $window.height());
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            if (!isScrollAllowed.m[type]){
                return;
            }
            var check = (type === 'down') ? 'bottom' : 'top';
            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(FP.scrollHorizontally){
                scrollSection = FP.scrollHorizontally.getScrollSection(type, scrollSection);
            }
            
            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }


        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

                if (canScroll && !slideMoving) { //if theres any #
                    var touchEvents = getEventsPage(e);

                    touchEndY = touchEvents.y;
                    touchEndX = touchEvents.x;

                    //if movement in the X axys is greater than in the Y and the currect section has slides...
                    if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
                            if (touchStartX > touchEndX) {
                                if(isScrollAllowed.m.right){
                                    moveSlideRight(activeSection); //next
                                }
                            } else {
                                if(isScrollAllowed.m.left){
                                    moveSlideLeft(activeSection); //prev
                                }
                            }
                        }
                    }

                    //vertical scrolling (only when autoScrolling is enabled)
                    else if(options.autoScrolling){

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                            if (touchStartY > touchEndY) {
                                scrolling('down', scrollable);
                            } else if (touchEndY > touchStartY) {
                                scrolling('up', scrollable);
                            }
                        }
                    }
                }
            }

        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement (el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements) ) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $htmlBody.stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down', scrollable);

                        //scrolling up?
                        }else {
                            scrolling('up', scrollable);
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'left'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'left'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $(SLIDE_ACTIVE_SEL).each(function(){
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown =  elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(element.outerHeight() > windowsHeight){
                //scrolling up? 
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

            if(v.activeSlide.length){
                var slideAnchorLink = v.activeSlide.data('anchor');
                var slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if($.isFunction(options.onLeave) && !v.localIsResizing){
                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
                    return;
                }
            }

            stopMedia(v.activeSection);

            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);
            options.scrollOverflowHandler.onLeave();


            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {
                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = WRAPPER_SEL;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            }
            else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
            options.scrollOverflowHandler.afterLoad();

            if(options.resetSliders && FP.resetSliders){
                FP.resetSliders.apply(v);
            }

            playMedia(v.element);
            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
            
            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            var destiny = getSlideOrSection(destiny);

            destiny.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                $(this).attr('src', $(this).data('src'));
                $(this).removeAttr('data-src');

                if($(this).is('source')){
                    $(this).closest('video').get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var destiny = getSlideOrSection(destiny);

            //playing HTML5 media elements
            destiny.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            destiny.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }
                    
                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        };

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var destiny = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            destiny.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            destiny.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')){
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if( slide.length ) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var section = decodeURIComponent(value[0]);
            var slide = decodeURIComponent(value[1]);

            if(section){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(section, slide);
                }else{
                    silentMoveTo(section, slide);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var value =  window.location.hash.replace('#', '').split('/');
                var section = decodeURIComponent(value[0]);
                var slide = decodeURIComponent(value[1]);

                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);


                if(section.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
                        scrollPageAndSlide(section, slide);
                    }
                }
            }
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {

            clearTimeout(keydownId);

            var activeElement = $(':focus');

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        moveSectionUp();
                        break;
                    }
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor:  getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if($.isFunction( options.onSlideLeave )){
                        if(options.onSlideLeave.call( v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.xMovement, v.slideIndex ) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }
            stopMedia(v.prevSlide);

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            if(!v.localIsResizing){
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE)){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            if(FP.continuousHorizontal){
                FP.continuousHorizontal.apply(v);
            }

            performHorizontalMove(slides, v, true);
            
            if(options.interlockedSlides && FP.interlockedSlides){
                FP.interlockedSlides.apply(v);
            }
        }


        function afterSlideLoads(v){
            if(FP.continuousHorizontal){
                FP.continuousHorizontal.afterSlideLoads(v);
            }
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;
            }

            playMedia(v.destiny);

            //letting them slide again
            slideMoving = false;     

            if(FP.interlockedSlides){
                FP.interlockedSlides.apply(v);
            }
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        * 
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function() {

                    fireCallback && afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if(name){
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                }else{
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        /**
        * Checks if the element needs scrollbar and if the user wants to apply it.
        * If so it creates it.
        *
        * @param {Object} element   jQuery object of the section or slide
        */
        function createScrollBar(element){
            //User doesn't want scrollbar here? Sayonara baby!
            if(element.hasClass('fp-noscroll')) return;

            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            var scrollOverflowHandler = options.scrollOverflowHandler;
            var wrap = scrollOverflowHandler.wrapContent();
            //in case element is a slide
            var section = element.closest(SECTION_SEL);
            var scrollable = scrollOverflowHandler.scrollable(element);
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if(scrollable.length){
                contentHeight = scrollOverflowHandler.scrollHeight(element);
            }else{
                contentHeight = element.get(0).scrollHeight;
                if(options.verticalCentered){
                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if ( contentHeight > scrollHeight) {
                //did we already have an scrollbar ? Updating it
                if(scrollable.length){
                    scrollOverflowHandler.update(element, scrollHeight);
                }
                //creating the scrolling
                else{
                    if(options.verticalCentered){
                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
                    }else{
                        element.wrapInner(wrap);
                    }
                    scrollOverflowHandler.create(element, scrollHeight);
                }
            }
            //removing the scrolling when it is not necessary anymore
            else{
                scrollOverflowHandler.remove(element);
            }

            //undo
            element.css('overflow', '');
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!element.hasClass(TABLE)){
                element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass(SECTION)){
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass(NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            //section
            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( (sectionAnchor -1) );
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

            if(!slide.length){
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor){
            if(typeof slideAnchor !== 'undefined'){
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny =  getSlideByAnchor(slideAnchor, section);

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if(typeof anchor === 'undefined'){
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container
                .on('mousedown', mouseDownHandler)
                .on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container
                .off('mousedown', mouseDownHandler)
                .off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL)
                    .off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler)
                    .off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL)
                    .off('touchstart ' + MSPointer.down)
                    .off('touchmove ' + MSPointer.move);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            if(options.scrollBar){
                container.scrollTop(top);
            }
            else if (options.css3) {
                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else {
                container.css('top', -top);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            switch (direction){
                case 'up': isScrollAllowed[type].up = value; break;
                case 'down': isScrollAllowed[type].down = value; break;
                case 'left': isScrollAllowed[type].left = value; break;
                case 'right': isScrollAllowed[type].right = value; break;
                case 'all':
                    if(type == 'm'){
                        setAllowScrolling(value);
                    }else{
                        setKeyboardScrolling(value);
                    }
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        };

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                $(this).attr('src', $(this).data('src'));
                $(this).removeAttr('data-src');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
                options.scrollOverflowHandler.remove($(this));
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function(index, value){
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            if($('html').hasClass(ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollBar && options.scrollOverflow){
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && options.scrollBar){
                options.continuousVertical = false;
                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function() {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function() {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }
        
    }; //end of $.fn.fullpage

    if(typeof IScroll !== 'undefined'){ 
        /*
        * Turns iScroll `mousewheel` option off dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener('wheel', this);
            this.wrapper.addEventListener('mousewheel', this);
            this.wrapper.addEventListener('DOMMouseScroll', this);
        };

        /*
        * Turns iScroll `mousewheel` option on dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener('wheel', this);
            this.wrapper.removeEventListener('mousewheel', this);
            this.wrapper.removeEventListener('DOMMouseScroll', this);
        };
    }

    /**
     * An object to handle overflow scrolling.
     * This uses jquery.slimScroll to accomplish overflow scrolling.
     * It is possible to pass in an alternate scrollOverflowHandler
     * to the fullpage.js option that implements the same functions
     * as this handler.
     *
     * @type {Object}
     */
    var iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],

        /**
        * Turns off iScroll for the destination section.
        * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
        * scroll the destination section/slide before the sections animations ends.
        */
        onLeave: function(){
            var scroller = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL).data('iscrollInstance');
            if(typeof scroller !== 'undefined' && scroller){
                scroller.wheelOff();
            }
        },

        // Turns on iScroll on section load
        afterLoad: function(){
            var scroller = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL).data('iscrollInstance');
            if(typeof scroller !== 'undefined' && scroller){
                  scroller.wheelOn();
            }
        },

        /**
         * Called when overflow scrolling is needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        create: function(element, scrollHeight) {
            var scrollable = element.find(SCROLLABLE_SEL);

            scrollable.height(scrollHeight);
            scrollable.each(function() {
                var $this = jQuery(this);
                var iScrollInstance = $this.data('iscrollInstance');
                if (iScrollInstance) {
                    $.each(iscrollHandler.iScrollInstances, function(){
                        $(this).destroy();
                    });
                }

                iScrollInstance = new IScroll($this.get(0), iscrollOptions);
                iscrollHandler.iScrollInstances.push(iScrollInstance);
                $this.data('iscrollInstance', iScrollInstance);
            });
        },

        /**
         * Return a boolean depending on whether the scrollable element is a
         * the end or at the start of the scrolling depending on the given type.
         *
         * @param  {String}  type       Either 'top' or 'bottom'
         * @param  {Object}  scrollable jQuery object for the scrollable element
         * @return {Boolean}
         */
        isScrolled: function(type, scrollable) {
            var scroller = scrollable.data('iscrollInstance');
            
            //no scroller? 
            if (!scroller) {
                return true;
            }

            if (type === 'top') {
                return scroller.y >= 0 && !scrollable.scrollTop();
            } else if (type === 'bottom') {
                return (0 - scroller.y) + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        },

        /**
         * Returns the scrollable element for the given section.
         * If there are landscape slides, will only return a scrollable element
         * if it is in the active slide.
         *
         * @param  {Object}  activeSection jQuery object containing current section
         * @return {Boolean}
         */
        scrollable: function(activeSection){
            // if there are landscape slides, we check if the scrolling bar is in the current one or not
            if (activeSection.find(SLIDES_WRAPPER_SEL).length) {
                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
            }
            return activeSection.find(SCROLLABLE_SEL);
        },

        /**
         * Returns the scroll height of the wrapped content.
         * If this is larger than the window height minus section padding,
         * overflow scrolling is needed.
         *
         * @param  {Object} element jQuery object containing current section
         * @return {Number}
         */
        scrollHeight: function(element) {
            return element.find(SCROLLABLE_SEL).children().first().get(0).scrollHeight;
        },

        /**
         * Called when overflow scrolling is no longer needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         */
        remove: function(element) {
            var scrollable = element.find(SCROLLABLE_SEL);
            if (scrollable.length) {
                var iScrollInstance = scrollable.data('iscrollInstance');
                iScrollInstance.destroy();

                scrollable.data('iscrollInstance', null);
            }
            element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
        },

        /**
         * Called when overflow scrolling has already been setup but the
         * window height has potentially changed.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        update: function(element, scrollHeight) {
            //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
            //short period of time.
            //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
            clearTimeout(iscrollHandler.refreshId);
            iscrollHandler.refreshId = setTimeout(function(){
                $.each(iscrollHandler.iScrollInstances, function(){
                    $(this).get(0).refresh();
                });
            }, 150);

            //updating the wrappers height
            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
        },

        /**
         * Called to get any additional elements needed to wrap the section
         * content in order to facilitate overflow scrolling.
         *
         * @return {String|Object} Can be a string containing HTML,
         *                         a DOM element, or jQuery object.
         */
        wrapContent: function() {
            return '<div class="' + SCROLLABLE + '"><div class="fp-scroller"></div></div>';
        }
    };
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
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
    var me = {};

    var _elementStyle = document.createElement('div').style;
    var _vendor = (function () {
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;

        for ( ; i < l; i++ ) {
            transform = vendors[i] + 'ransform';
            if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
        }

        return false;
    })();

    function _prefixStyle (style) {
        if ( _vendor === false ) return false;
        if ( _vendor === '' ) return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.getTime = Date.now || function getTime () { return new Date().getTime(); };

    me.extend = function (target, obj) {
        for ( var i in obj ) {
            target[i] = obj[i];
        }
    };

    me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.removeEvent = function (el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
    };

    me.prefixPointerEvent = function (pointerEvent) {
        return window.MSPointerEvent ?
            'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
            pointerEvent;
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
        var distance = current - start,
            speed = Math.abs(distance) / time,
            destination,
            duration;

        deceleration = deceleration === undefined ? 0.0006 : deceleration;

        destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
        duration = speed / deceleration;

        if ( destination < lowerMargin ) {
            destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
            distance = Math.abs(destination - current);
            duration = distance / speed;
        } else if ( destination > 0 ) {
            destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
            distance = Math.abs(current) + destination;
            duration = distance / speed;
        }

        return {
            destination: Math.round(destination),
            duration: duration
        };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
        hasTransition: _prefixStyle('transition') in _elementStyle
    });

    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
    me.isBadAndroid = (function() {
        var appVersion = window.navigator.appVersion;
        // Android browser is not a chrome browser.
        if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
            if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
                return parseFloat(safariVersion[1]) < 535.19;
            } else {
                return true;
            }
        } else {
            return false;
        }
    })();

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin')
    });

    me.hasClass = function (e, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return re.test(e.className);
    };

    me.addClass = function (e, c) {
        if ( me.hasClass(e, c) ) {
            return;
        }

        var newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
        if ( !me.hasClass(e, c) ) {
            return;
        }

        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
        e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;

        // jshint -W084
        while (el = el.offsetParent) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
        }
        // jshint +W084

        return {
            left: left,
            top: top
        };
    };

    me.preventDefaultException = function (el, exceptions) {
        for ( var i in exceptions ) {
            if ( exceptions[i].test(el[i]) ) {
                return true;
            }
        }

        return false;
    };

    me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,

        mousedown: 2,
        mousemove: 2,
        mouseup: 2,

        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,

        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
    });

    me.extend(me.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (k) {
                return k * ( 2 - k );
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',   // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
            fn: function (k) {
                return Math.sqrt( 1 - ( --k * k ) );
            }
        },
        back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn: function (k) {
                var b = 4;
                return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
            }
        },
        bounce: {
            style: '',
            fn: function (k) {
                if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
                    return 7.5625 * k * k;
                } else if ( k < ( 2 / 2.75 ) ) {
                    return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
                } else if ( k < ( 2.5 / 2.75 ) ) {
                    return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
                } else {
                    return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
                }
            }
        },
        elastic: {
            style: '',
            fn: function (k) {
                var f = 0.22,
                    e = 0.4;

                if ( k === 0 ) { return 0; }
                if ( k == 1 ) { return 1; }

                return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
            }
        }
    });

    me.tap = function (e, eventName) {
        var ev = document.createEvent('Event');
        ev.initEvent(eventName, true, true);
        ev.pageX = e.pageX;
        ev.pageY = e.pageY;
        e.target.dispatchEvent(ev);
    };

    me.click = function (e) {
        var target = e.target,
            ev;

        if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
            // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
            // initMouseEvent is deprecated.
            ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
            ev.initEvent('click', true, true);
            ev.view = e.view || window;
            ev.detail = 1;
            ev.screenX = target.screenX || 0;
            ev.screenY = target.screenY || 0;
            ev.clientX = target.clientX || 0;
            ev.clientY = target.clientY || 0;
            ev.ctrlKey = !!e.ctrlKey;
            ev.altKey = !!e.altKey;
            ev.shiftKey = !!e.shiftKey;
            ev.metaKey = !!e.metaKey;
            ev.button = 0;
            ev.relatedTarget = null;
            ev._constructed = true;
            target.dispatchEvent(ev);
        }
    };

    return me;
})();
function IScroll (el, options) {
    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style;       // cache style for better performance

    this.options = {

        resizeScrollbars: true,

        mouseWheelSpeed: 20,

        snapThreshold: 0.334,

// INSERT POINT: OPTIONS
        disablePointer : !utils.hasPointer,
        disableTouch : utils.hasPointer || !utils.hasTouch,
        disableMouse : utils.hasPointer || utils.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: true,
        directionLockThreshold: 5,
        momentum: true,

        bounce: true,
        bounceTime: 600,
        bounceEasing: '',

        preventDefault: true,
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

        HWCompositing: true,
        useTransition: true,
        useTransform: true,
        bindToWrapper: typeof window.onmousedown === "undefined"
    };

    for ( var i in options ) {
        this.options[i] = options[i];
    }

    // Normalize options
    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;

    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

    if ( this.options.tap === true ) {
        this.options.tap = 'tap';
    }

    // https://github.com/cubiq/iscroll/issues/1029
    if (!this.options.useTransition && !this.options.useTransform) {
        if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
            this.scrollerStyle.position = "relative";
        }
    }

    if ( this.options.shrinkScrollbars == 'scale' ) {
        this.options.useTransition = false;
    }

    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

    // Some defaults
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {};

// INSERT POINT: DEFAULTS

    this._init();
    this.refresh();

    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
}

IScroll.prototype = {
    version: '5.2.0',

    _init: function () {
        this._initEvents();

        if ( this.options.scrollbars || this.options.indicators ) {
            this._initIndicators();
        }

        if ( this.options.mouseWheel ) {
            this._initWheel();
        }

        if ( this.options.snap ) {
            this._initSnap();
        }

        if ( this.options.keyBindings ) {
            this._initKeys();
        }

// INSERT POINT: _init

    },

    destroy: function () {
        this._initEvents(true);
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = null;
        this._execEvent('destroy');
    },

    _transitionEnd: function (e) {
        if ( e.target != this.scroller || !this.isInTransition ) {
            return;
        }

        this._transitionTime();
        if ( !this.resetPosition(this.options.bounceTime) ) {
            this.isInTransition = false;
            this._execEvent('scrollEnd');
        }
    },

    _start: function (e) {
        // React to left mouse button only
        if ( utils.eventType[e.type] != 1 ) {
          // for button property
          // http://unixpapa.com/js/mouse.html
          var button;
        if (!e.which) {
          /* IE case */
          button = (e.button < 2) ? 0 :
                   ((e.button == 4) ? 1 : 2);
        } else {
          /* All others */
          button = e.button;
        }
            if ( button !== 0 ) {
                return;
            }
        }

        if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
            return;
        }

        if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
            e.preventDefault();
        }

        var point = e.touches ? e.touches[0] : e,
            pos;

        this.initiated  = utils.eventType[e.type];
        this.moved      = false;
        this.distX      = 0;
        this.distY      = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;

        this.startTime = utils.getTime();

        if ( this.options.useTransition && this.isInTransition ) {
            this._transitionTime();
            this.isInTransition = false;
            pos = this.getComputedPosition();
            this._translate(Math.round(pos.x), Math.round(pos.y));
            this._execEvent('scrollEnd');
        } else if ( !this.options.useTransition && this.isAnimating ) {
            this.isAnimating = false;
            this._execEvent('scrollEnd');
        }

        this.startX    = this.x;
        this.startY    = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX    = point.pageX;
        this.pointY    = point.pageY;

        this._execEvent('beforeScrollStart');
    },

    _move: function (e) {
        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
            return;
        }

        if ( this.options.preventDefault ) {    // increases performance on Android? TODO: check!
            e.preventDefault();
        }

        var point       = e.touches ? e.touches[0] : e,
            deltaX      = point.pageX - this.pointX,
            deltaY      = point.pageY - this.pointY,
            timestamp   = utils.getTime(),
            newX, newY,
            absDistX, absDistY;

        this.pointX     = point.pageX;
        this.pointY     = point.pageY;

        this.distX      += deltaX;
        this.distY      += deltaY;
        absDistX        = Math.abs(this.distX);
        absDistY        = Math.abs(this.distY);

        // We need to move at least 10 pixels for the scrolling to initiate
        if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
            return;
        }

        // If you are scrolling in one direction lock the other
        if ( !this.directionLocked && !this.options.freeScroll ) {
            if ( absDistX > absDistY + this.options.directionLockThreshold ) {
                this.directionLocked = 'h';     // lock horizontally
            } else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
                this.directionLocked = 'v';     // lock vertically
            } else {
                this.directionLocked = 'n';     // no lock
            }
        }

        if ( this.directionLocked == 'h' ) {
            if ( this.options.eventPassthrough == 'vertical' ) {
                e.preventDefault();
            } else if ( this.options.eventPassthrough == 'horizontal' ) {
                this.initiated = false;
                return;
            }

            deltaY = 0;
        } else if ( this.directionLocked == 'v' ) {
            if ( this.options.eventPassthrough == 'horizontal' ) {
                e.preventDefault();
            } else if ( this.options.eventPassthrough == 'vertical' ) {
                this.initiated = false;
                return;
            }

            deltaX = 0;
        }

        deltaX = this.hasHorizontalScroll ? deltaX : 0;
        deltaY = this.hasVerticalScroll ? deltaY : 0;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        // Slow down if outside of the boundaries
        if ( newX > 0 || newX < this.maxScrollX ) {
            newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
        }
        if ( newY > 0 || newY < this.maxScrollY ) {
            newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
        }

        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

        if ( !this.moved ) {
            this._execEvent('scrollStart');
        }

        this.moved = true;

        this._translate(newX, newY);

/* REPLACE START: _move */

        if ( timestamp - this.startTime > 300 ) {
            this.startTime = timestamp;
            this.startX = this.x;
            this.startY = this.y;
        }

/* REPLACE END: _move */

    },

    _end: function (e) {
        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
            return;
        }

        if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
            e.preventDefault();
        }

        var point = e.changedTouches ? e.changedTouches[0] : e,
            momentumX,
            momentumY,
            duration = utils.getTime() - this.startTime,
            newX = Math.round(this.x),
            newY = Math.round(this.y),
            distanceX = Math.abs(newX - this.startX),
            distanceY = Math.abs(newY - this.startY),
            time = 0,
            easing = '';

        this.isInTransition = 0;
        this.initiated = 0;
        this.endTime = utils.getTime();

        // reset if we are outside of the boundaries
        if ( this.resetPosition(this.options.bounceTime) ) {
            return;
        }

        this.scrollTo(newX, newY);  // ensures that the last position is rounded

        // we scrolled less than 10 pixels
        if ( !this.moved ) {
            if ( this.options.tap ) {
                utils.tap(e, this.options.tap);
            }

            if ( this.options.click ) {
                utils.click(e);
            }

            this._execEvent('scrollCancel');
            return;
        }

        if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
            this._execEvent('flick');
            return;
        }

        // start momentum animation if needed
        if ( this.options.momentum && duration < 300 ) {
            momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
            momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
            newX = momentumX.destination;
            newY = momentumY.destination;
            time = Math.max(momentumX.duration, momentumY.duration);
            this.isInTransition = 1;
        }


        if ( this.options.snap ) {
            var snap = this._nearestSnap(newX, newY);
            this.currentPage = snap;
            time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(newX - snap.x), 1000),
                        Math.min(Math.abs(newY - snap.y), 1000)
                    ), 300);
            newX = snap.x;
            newY = snap.y;

            this.directionX = 0;
            this.directionY = 0;
            easing = this.options.bounceEasing;
        }

// INSERT POINT: _end

        if ( newX != this.x || newY != this.y ) {
            // change easing function when scroller goes out of the boundaries
            if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
                easing = utils.ease.quadratic;
            }

            this.scrollTo(newX, newY, time, easing);
            return;
        }

        this._execEvent('scrollEnd');
    },

    _resize: function () {
        var that = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            that.refresh();
        }, this.options.resizePolling);
    },

    resetPosition: function (time) {
        var x = this.x,
            y = this.y;

        time = time || 0;

        if ( !this.hasHorizontalScroll || this.x > 0 ) {
            x = 0;
        } else if ( this.x < this.maxScrollX ) {
            x = this.maxScrollX;
        }

        if ( !this.hasVerticalScroll || this.y > 0 ) {
            y = 0;
        } else if ( this.y < this.maxScrollY ) {
            y = this.maxScrollY;
        }

        if ( x == this.x && y == this.y ) {
            return false;
        }

        this.scrollTo(x, y, time, this.options.bounceEasing);

        return true;
    },

    disable: function () {
        this.enabled = false;
    },

    enable: function () {
        this.enabled = true;
    },

    refresh: function () {
        var rf = this.wrapper.offsetHeight;     // Force reflow

        this.wrapperWidth   = this.wrapper.clientWidth;
        this.wrapperHeight  = this.wrapper.clientHeight;

/* REPLACE START: refresh */

        this.scrollerWidth  = this.scroller.offsetWidth;
        this.scrollerHeight = this.scroller.offsetHeight;

        this.maxScrollX     = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY     = this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

        this.hasHorizontalScroll    = this.options.scrollX && this.maxScrollX < 0;
        this.hasVerticalScroll      = this.options.scrollY && this.maxScrollY < 0;

        if ( !this.hasHorizontalScroll ) {
            this.maxScrollX = 0;
            this.scrollerWidth = this.wrapperWidth;
        }

        if ( !this.hasVerticalScroll ) {
            this.maxScrollY = 0;
            this.scrollerHeight = this.wrapperHeight;
        }

        this.endTime = 0;
        this.directionX = 0;
        this.directionY = 0;

        this.wrapperOffset = utils.offset(this.wrapper);

        this._execEvent('refresh');

        this.resetPosition();

// INSERT POINT: _refresh

    },

    on: function (type, fn) {
        if ( !this._events[type] ) {
            this._events[type] = [];
        }

        this._events[type].push(fn);
    },

    off: function (type, fn) {
        if ( !this._events[type] ) {
            return;
        }

        var index = this._events[type].indexOf(fn);

        if ( index > -1 ) {
            this._events[type].splice(index, 1);
        }
    },

    _execEvent: function (type) {
        if ( !this._events[type] ) {
            return;
        }

        var i = 0,
            l = this._events[type].length;

        if ( !l ) {
            return;
        }

        for ( ; i < l; i++ ) {
            this._events[type][i].apply(this, [].slice.call(arguments, 1));
        }
    },

    scrollBy: function (x, y, time, easing) {
        x = this.x + x;
        y = this.y + y;
        time = time || 0;

        this.scrollTo(x, y, time, easing);
    },

    scrollTo: function (x, y, time, easing) {
        easing = easing || utils.ease.circular;

        this.isInTransition = this.options.useTransition && time > 0;
        var transitionType = this.options.useTransition && easing.style;
        if ( !time || transitionType ) {
                if(transitionType) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                }
            this._translate(x, y);
        } else {
            this._animate(x, y, time, easing.fn);
        }
    },

    scrollToElement: function (el, time, offsetX, offsetY, easing) {
        el = el.nodeType ? el : this.scroller.querySelector(el);

        if ( !el ) {
            return;
        }

        var pos = utils.offset(el);

        pos.left -= this.wrapperOffset.left;
        pos.top  -= this.wrapperOffset.top;

        // if offsetX/Y are true we center the element to the screen
        if ( offsetX === true ) {
            offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
        }
        if ( offsetY === true ) {
            offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
        }

        pos.left -= offsetX || 0;
        pos.top  -= offsetY || 0;

        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

        this.scrollTo(pos.left, pos.top, time, easing);
    },

    _transitionTime: function (time) {
        if (!this.options.useTransition) {
            return;
        }
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }

        this.scrollerStyle[durationProp] = time + 'ms';

        if ( !time && utils.isBadAndroid ) {
            this.scrollerStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            var self = this;
            rAF(function() {
                if(self.scrollerStyle[durationProp] === '0.0001ms') {
                    self.scrollerStyle[durationProp] = '0s';
                }
            });
        }


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].transitionTime(time);
            }
        }


// INSERT POINT: _transitionTime

    },

    _transitionTimingFunction: function (easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].transitionTimingFunction(easing);
            }
        }


// INSERT POINT: _transitionTimingFunction

    },

    _translate: function (x, y) {
        if ( this.options.useTransform ) {

/* REPLACE START: _translate */

            this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

        } else {
            x = Math.round(x);
            y = Math.round(y);
            this.scrollerStyle.left = x + 'px';
            this.scrollerStyle.top = y + 'px';
        }

        this.x = x;
        this.y = y;


    if ( this.indicators ) {
        for ( var i = this.indicators.length; i--; ) {
            this.indicators[i].updatePosition();
        }
    }


// INSERT POINT: _translate

    },

    _initEvents: function (remove) {
        var eventType = remove ? utils.removeEvent : utils.addEvent,
            target = this.options.bindToWrapper ? this.wrapper : window;

        eventType(window, 'orientationchange', this);
        eventType(window, 'resize', this);

        if ( this.options.click ) {
            eventType(this.wrapper, 'click', this, true);
        }

        if ( !this.options.disableMouse ) {
            eventType(this.wrapper, 'mousedown', this);
            eventType(target, 'mousemove', this);
            eventType(target, 'mousecancel', this);
            eventType(target, 'mouseup', this);
        }

        if ( utils.hasPointer && !this.options.disablePointer ) {
            eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
            eventType(target, utils.prefixPointerEvent('pointermove'), this);
            eventType(target, utils.prefixPointerEvent('pointercancel'), this);
            eventType(target, utils.prefixPointerEvent('pointerup'), this);
        }

        if ( utils.hasTouch && !this.options.disableTouch ) {
            eventType(this.wrapper, 'touchstart', this);
            eventType(target, 'touchmove', this);
            eventType(target, 'touchcancel', this);
            eventType(target, 'touchend', this);
        }

        eventType(this.scroller, 'transitionend', this);
        eventType(this.scroller, 'webkitTransitionEnd', this);
        eventType(this.scroller, 'oTransitionEnd', this);
        eventType(this.scroller, 'MSTransitionEnd', this);
    },

    getComputedPosition: function () {
        var matrix = window.getComputedStyle(this.scroller, null),
            x, y;

        if ( this.options.useTransform ) {
            matrix = matrix[utils.style.transform].split(')')[0].split(', ');
            x = +(matrix[12] || matrix[4]);
            y = +(matrix[13] || matrix[5]);
        } else {
            x = +matrix.left.replace(/[^-\d.]/g, '');
            y = +matrix.top.replace(/[^-\d.]/g, '');
        }

        return { x: x, y: y };
    },
    _initIndicators: function () {
        var interactive = this.options.interactiveScrollbars,
            customStyle = typeof this.options.scrollbars != 'string',
            indicators = [],
            indicator;

        var that = this;

        this.indicators = [];

        if ( this.options.scrollbars ) {
            // Vertical scrollbar
            if ( this.options.scrollY ) {
                indicator = {
                    el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                    interactive: interactive,
                    defaultScrollbars: true,
                    customStyle: customStyle,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }

            // Horizontal scrollbar
            if ( this.options.scrollX ) {
                indicator = {
                    el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                    interactive: interactive,
                    defaultScrollbars: true,
                    customStyle: customStyle,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }
        }

        if ( this.options.indicators ) {
            // TODO: check concat compatibility
            indicators = indicators.concat(this.options.indicators);
        }

        for ( var i = indicators.length; i--; ) {
            this.indicators.push( new Indicator(this, indicators[i]) );
        }

        // TODO: check if we can use array.map (wide compatibility and performance issues)
        function _indicatorsMap (fn) {
            if (that.indicators) {
                for ( var i = that.indicators.length; i--; ) {
                    fn.call(that.indicators[i]);
                }
            }
        }

        if ( this.options.fadeScrollbars ) {
            this.on('scrollEnd', function () {
                _indicatorsMap(function () {
                    this.fade();
                });
            });

            this.on('scrollCancel', function () {
                _indicatorsMap(function () {
                    this.fade();
                });
            });

            this.on('scrollStart', function () {
                _indicatorsMap(function () {
                    this.fade(1);
                });
            });

            this.on('beforeScrollStart', function () {
                _indicatorsMap(function () {
                    this.fade(1, true);
                });
            });
        }


        this.on('refresh', function () {
            _indicatorsMap(function () {
                this.refresh();
            });
        });

        this.on('destroy', function () {
            _indicatorsMap(function () {
                this.destroy();
            });

            delete this.indicators;
        });
    },

    _initWheel: function () {
        utils.addEvent(this.wrapper, 'wheel', this);
        utils.addEvent(this.wrapper, 'mousewheel', this);
        utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

        this.on('destroy', function () {
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = null;
            utils.removeEvent(this.wrapper, 'wheel', this);
            utils.removeEvent(this.wrapper, 'mousewheel', this);
            utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
        });
    },

    _wheel: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var wheelDeltaX, wheelDeltaY,
            newX, newY,
            that = this;

        if ( this.wheelTimeout === undefined ) {
            that._execEvent('scrollStart');
        }

        // Execute the scrollEnd event after 400ms the wheel stopped scrolling
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = setTimeout(function () {
            if(!that.options.snap) {
                that._execEvent('scrollEnd');
            }
            that.wheelTimeout = undefined;
        }, 400);

        if ( 'deltaX' in e ) {
            if (e.deltaMode === 1) {
                wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
            } else {
                wheelDeltaX = -e.deltaX;
                wheelDeltaY = -e.deltaY;
            }
        } else if ( 'wheelDeltaX' in e ) {
            wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
            wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        } else if ( 'wheelDelta' in e ) {
            wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
        } else if ( 'detail' in e ) {
            wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
        } else {
            return;
        }

        wheelDeltaX *= this.options.invertWheelDirection;
        wheelDeltaY *= this.options.invertWheelDirection;

        if ( !this.hasVerticalScroll ) {
            wheelDeltaX = wheelDeltaY;
            wheelDeltaY = 0;
        }

        if ( this.options.snap ) {
            newX = this.currentPage.pageX;
            newY = this.currentPage.pageY;

            if ( wheelDeltaX > 0 ) {
                newX--;
            } else if ( wheelDeltaX < 0 ) {
                newX++;
            }

            if ( wheelDeltaY > 0 ) {
                newY--;
            } else if ( wheelDeltaY < 0 ) {
                newY++;
            }

            this.goToPage(newX, newY);

            return;
        }

        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

        this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
        this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

        if ( newX > 0 ) {
            newX = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
        }

        if ( newY > 0 ) {
            newY = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
        }

        this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
    },

    _initSnap: function () {
        this.currentPage = {};

        if ( typeof this.options.snap == 'string' ) {
            this.options.snap = this.scroller.querySelectorAll(this.options.snap);
        }

        this.on('refresh', function () {
            var i = 0, l,
                m = 0, n,
                cx, cy,
                x = 0, y,
                stepX = this.options.snapStepX || this.wrapperWidth,
                stepY = this.options.snapStepY || this.wrapperHeight,
                el;

            this.pages = [];

            if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
                return;
            }

            if ( this.options.snap === true ) {
                cx = Math.round( stepX / 2 );
                cy = Math.round( stepY / 2 );

                while ( x > -this.scrollerWidth ) {
                    this.pages[i] = [];
                    l = 0;
                    y = 0;

                    while ( y > -this.scrollerHeight ) {
                        this.pages[i][l] = {
                            x: Math.max(x, this.maxScrollX),
                            y: Math.max(y, this.maxScrollY),
                            width: stepX,
                            height: stepY,
                            cx: x - cx,
                            cy: y - cy
                        };

                        y -= stepY;
                        l++;
                    }

                    x -= stepX;
                    i++;
                }
            } else {
                el = this.options.snap;
                l = el.length;
                n = -1;

                for ( ; i < l; i++ ) {
                    if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
                        m = 0;
                        n++;
                    }

                    if ( !this.pages[m] ) {
                        this.pages[m] = [];
                    }

                    x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                    y = Math.max(-el[i].offsetTop, this.maxScrollY);
                    cx = x - Math.round(el[i].offsetWidth / 2);
                    cy = y - Math.round(el[i].offsetHeight / 2);

                    this.pages[m][n] = {
                        x: x,
                        y: y,
                        width: el[i].offsetWidth,
                        height: el[i].offsetHeight,
                        cx: cx,
                        cy: cy
                    };

                    if ( x > this.maxScrollX ) {
                        m++;
                    }
                }
            }

            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

            // Update snap threshold if needed
            if ( this.options.snapThreshold % 1 === 0 ) {
                this.snapThresholdX = this.options.snapThreshold;
                this.snapThresholdY = this.options.snapThreshold;
            } else {
                this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
            }
        });

        this.on('flick', function () {
            var time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(this.x - this.startX), 1000),
                        Math.min(Math.abs(this.y - this.startY), 1000)
                    ), 300);

            this.goToPage(
                this.currentPage.pageX + this.directionX,
                this.currentPage.pageY + this.directionY,
                time
            );
        });
    },

    _nearestSnap: function (x, y) {
        if ( !this.pages.length ) {
            return { x: 0, y: 0, pageX: 0, pageY: 0 };
        }

        var i = 0,
            l = this.pages.length,
            m = 0;

        // Check if we exceeded the snap threshold
        if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
            Math.abs(y - this.absStartY) < this.snapThresholdY ) {
            return this.currentPage;
        }

        if ( x > 0 ) {
            x = 0;
        } else if ( x < this.maxScrollX ) {
            x = this.maxScrollX;
        }

        if ( y > 0 ) {
            y = 0;
        } else if ( y < this.maxScrollY ) {
            y = this.maxScrollY;
        }

        for ( ; i < l; i++ ) {
            if ( x >= this.pages[i][0].cx ) {
                x = this.pages[i][0].x;
                break;
            }
        }

        l = this.pages[i].length;

        for ( ; m < l; m++ ) {
            if ( y >= this.pages[0][m].cy ) {
                y = this.pages[0][m].y;
                break;
            }
        }

        if ( i == this.currentPage.pageX ) {
            i += this.directionX;

            if ( i < 0 ) {
                i = 0;
            } else if ( i >= this.pages.length ) {
                i = this.pages.length - 1;
            }

            x = this.pages[i][0].x;
        }

        if ( m == this.currentPage.pageY ) {
            m += this.directionY;

            if ( m < 0 ) {
                m = 0;
            } else if ( m >= this.pages[0].length ) {
                m = this.pages[0].length - 1;
            }

            y = this.pages[0][m].y;
        }

        return {
            x: x,
            y: y,
            pageX: i,
            pageY: m
        };
    },

    goToPage: function (x, y, time, easing) {
        easing = easing || this.options.bounceEasing;

        if ( x >= this.pages.length ) {
            x = this.pages.length - 1;
        } else if ( x < 0 ) {
            x = 0;
        }

        if ( y >= this.pages[x].length ) {
            y = this.pages[x].length - 1;
        } else if ( y < 0 ) {
            y = 0;
        }

        var posX = this.pages[x][y].x,
            posY = this.pages[x][y].y;

        time = time === undefined ? this.options.snapSpeed || Math.max(
            Math.max(
                Math.min(Math.abs(posX - this.x), 1000),
                Math.min(Math.abs(posY - this.y), 1000)
            ), 300) : time;

        this.currentPage = {
            x: posX,
            y: posY,
            pageX: x,
            pageY: y
        };

        this.scrollTo(posX, posY, time, easing);
    },

    next: function (time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x++;

        if ( x >= this.pages.length && this.hasVerticalScroll ) {
            x = 0;
            y++;
        }

        this.goToPage(x, y, time, easing);
    },

    prev: function (time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x--;

        if ( x < 0 && this.hasVerticalScroll ) {
            x = 0;
            y--;
        }

        this.goToPage(x, y, time, easing);
    },

    _initKeys: function (e) {
        // default key bindings
        var keys = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        var i;

        // if you give me characters I give you keycode
        if ( typeof this.options.keyBindings == 'object' ) {
            for ( i in this.options.keyBindings ) {
                if ( typeof this.options.keyBindings[i] == 'string' ) {
                    this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                }
            }
        } else {
            this.options.keyBindings = {};
        }

        for ( i in keys ) {
            this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
        }

        utils.addEvent(window, 'keydown', this);

        this.on('destroy', function () {
            utils.removeEvent(window, 'keydown', this);
        });
    },

    _key: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var snap = this.options.snap,   // we are using this alot, better to cache it
            newX = snap ? this.currentPage.pageX : this.x,
            newY = snap ? this.currentPage.pageY : this.y,
            now = utils.getTime(),
            prevTime = this.keyTime || 0,
            acceleration = 0.250,
            pos;

        if ( this.options.useTransition && this.isInTransition ) {
            pos = this.getComputedPosition();

            this._translate(Math.round(pos.x), Math.round(pos.y));
            this.isInTransition = false;
        }

        this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

        switch ( e.keyCode ) {
            case this.options.keyBindings.pageUp:
                if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
                    newX += snap ? 1 : this.wrapperWidth;
                } else {
                    newY += snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.pageDown:
                if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
                    newX -= snap ? 1 : this.wrapperWidth;
                } else {
                    newY -= snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.end:
                newX = snap ? this.pages.length-1 : this.maxScrollX;
                newY = snap ? this.pages[0].length-1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                newX = 0;
                newY = 0;
                break;
            case this.options.keyBindings.left:
                newX += snap ? -1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.up:
                newY += snap ? 1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.right:
                newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.down:
                newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
                break;
            default:
                return;
        }

        if ( snap ) {
            this.goToPage(newX, newY);
            return;
        }

        if ( newX > 0 ) {
            newX = 0;
            this.keyAcceleration = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
            this.keyAcceleration = 0;
        }

        if ( newY > 0 ) {
            newY = 0;
            this.keyAcceleration = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
            this.keyAcceleration = 0;
        }

        this.scrollTo(newX, newY, 0);

        this.keyTime = now;
    },

    _animate: function (destX, destY, duration, easingFn) {
        var that = this,
            startX = this.x,
            startY = this.y,
            startTime = utils.getTime(),
            destTime = startTime + duration;

        function step () {
            var now = utils.getTime(),
                newX, newY,
                easing;

            if ( now >= destTime ) {
                that.isAnimating = false;
                that._translate(destX, destY);

                if ( !that.resetPosition(that.options.bounceTime) ) {
                    that._execEvent('scrollEnd');
                }

                return;
            }

            now = ( now - startTime ) / duration;
            easing = easingFn(now);
            newX = ( destX - startX ) * easing + startX;
            newY = ( destY - startY ) * easing + startY;
            that._translate(newX, newY);

            if ( that.isAnimating ) {
                rAF(step);
            }
        }

        this.isAnimating = true;
        step();
    },
    handleEvent: function (e) {
        switch ( e.type ) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                this._wheel(e);
                break;
            case 'keydown':
                this._key(e);
                break;
            case 'click':
                if ( this.enabled && !e._constructed ) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
        }
    }
};
function createDefaultScrollbar (direction, interactive, type) {
    var scrollbar = document.createElement('div'),
        indicator = document.createElement('div');

    if ( type === true ) {
        scrollbar.style.cssText = 'position:absolute;z-index:9999';
        indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
    }

    indicator.className = 'iScrollIndicator';

    if ( direction == 'h' ) {
        if ( type === true ) {
            scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
            indicator.style.height = '100%';
        }
        scrollbar.className = 'iScrollHorizontalScrollbar';
    } else {
        if ( type === true ) {
            scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
            indicator.style.width = '100%';
        }
        scrollbar.className = 'iScrollVerticalScrollbar';
    }

    scrollbar.style.cssText += ';overflow:hidden';

    if ( !interactive ) {
        scrollbar.style.pointerEvents = 'none';
    }

    scrollbar.appendChild(indicator);

    return scrollbar;
}

function Indicator (scroller, options) {
    this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;

    this.options = {
        listenX: true,
        listenY: true,
        interactive: false,
        resize: true,
        defaultScrollbars: false,
        shrink: false,
        fade: false,
        speedRatioX: 0,
        speedRatioY: 0
    };

    for ( var i in options ) {
        this.options[i] = options[i];
    }

    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;

    if ( this.options.interactive ) {
        if ( !this.options.disableTouch ) {
            utils.addEvent(this.indicator, 'touchstart', this);
            utils.addEvent(window, 'touchend', this);
        }
        if ( !this.options.disablePointer ) {
            utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
            utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
        }
        if ( !this.options.disableMouse ) {
            utils.addEvent(this.indicator, 'mousedown', this);
            utils.addEvent(window, 'mouseup', this);
        }
    }

    if ( this.options.fade ) {
        this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }
        this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
        // remove 0.0001ms
        var self = this;
        if(utils.isBadAndroid) {
            rAF(function() {
                if(self.wrapperStyle[durationProp] === '0.0001ms') {
                    self.wrapperStyle[durationProp] = '0s';
                }
            });
        }
        this.wrapperStyle.opacity = '0';
    }
}

Indicator.prototype = {
    handleEvent: function (e) {
        switch ( e.type ) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
        }
    },

    destroy: function () {
        if ( this.options.fadeScrollbars ) {
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
        }
        if ( this.options.interactive ) {
            utils.removeEvent(this.indicator, 'touchstart', this);
            utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
            utils.removeEvent(this.indicator, 'mousedown', this);

            utils.removeEvent(window, 'touchmove', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
            utils.removeEvent(window, 'mousemove', this);

            utils.removeEvent(window, 'touchend', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
            utils.removeEvent(window, 'mouseup', this);
        }

        if ( this.options.defaultScrollbars ) {
            this.wrapper.parentNode.removeChild(this.wrapper);
        }
    },

    _start: function (e) {
        var point = e.touches ? e.touches[0] : e;

        e.preventDefault();
        e.stopPropagation();

        this.transitionTime();

        this.initiated = true;
        this.moved = false;
        this.lastPointX = point.pageX;
        this.lastPointY = point.pageY;

        this.startTime  = utils.getTime();

        if ( !this.options.disableTouch ) {
            utils.addEvent(window, 'touchmove', this);
        }
        if ( !this.options.disablePointer ) {
            utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
        }
        if ( !this.options.disableMouse ) {
            utils.addEvent(window, 'mousemove', this);
        }

        this.scroller._execEvent('beforeScrollStart');
    },

    _move: function (e) {
        var point = e.touches ? e.touches[0] : e,
            deltaX, deltaY,
            newX, newY,
            timestamp = utils.getTime();

        if ( !this.moved ) {
            this.scroller._execEvent('scrollStart');
        }

        this.moved = true;

        deltaX = point.pageX - this.lastPointX;
        this.lastPointX = point.pageX;

        deltaY = point.pageY - this.lastPointY;
        this.lastPointY = point.pageY;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        this._pos(newX, newY);

// INSERT POINT: indicator._move

        e.preventDefault();
        e.stopPropagation();
    },

    _end: function (e) {
        if ( !this.initiated ) {
            return;
        }

        this.initiated = false;

        e.preventDefault();
        e.stopPropagation();

        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);

        if ( this.scroller.options.snap ) {
            var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

            var time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(this.scroller.x - snap.x), 1000),
                        Math.min(Math.abs(this.scroller.y - snap.y), 1000)
                    ), 300);

            if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
                this.scroller.directionX = 0;
                this.scroller.directionY = 0;
                this.scroller.currentPage = snap;
                this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
            }
        }

        if ( this.moved ) {
            this.scroller._execEvent('scrollEnd');
        }
    },

    transitionTime: function (time) {
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }

        this.indicatorStyle[durationProp] = time + 'ms';

        if ( !time && utils.isBadAndroid ) {
            this.indicatorStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            var self = this;
            rAF(function() {
                if(self.indicatorStyle[durationProp] === '0.0001ms') {
                    self.indicatorStyle[durationProp] = '0s';
                }
            });
        }
    },

    transitionTimingFunction: function (easing) {
        this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },

    refresh: function () {
        this.transitionTime();

        if ( this.options.listenX && !this.options.listenY ) {
            this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
        } else if ( this.options.listenY && !this.options.listenX ) {
            this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
        } else {
            this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
        }

        if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
            utils.addClass(this.wrapper, 'iScrollBothScrollbars');
            utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

            if ( this.options.defaultScrollbars && this.options.customStyle ) {
                if ( this.options.listenX ) {
                    this.wrapper.style.right = '8px';
                } else {
                    this.wrapper.style.bottom = '8px';
                }
            }
        } else {
            utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
            utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

            if ( this.options.defaultScrollbars && this.options.customStyle ) {
                if ( this.options.listenX ) {
                    this.wrapper.style.right = '2px';
                } else {
                    this.wrapper.style.bottom = '2px';
                }
            }
        }

        var r = this.wrapper.offsetHeight;  // force refresh

        if ( this.options.listenX ) {
            this.wrapperWidth = this.wrapper.clientWidth;
            if ( this.options.resize ) {
                this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                this.indicatorStyle.width = this.indicatorWidth + 'px';
            } else {
                this.indicatorWidth = this.indicator.clientWidth;
            }

            this.maxPosX = this.wrapperWidth - this.indicatorWidth;

            if ( this.options.shrink == 'clip' ) {
                this.minBoundaryX = -this.indicatorWidth + 8;
                this.maxBoundaryX = this.wrapperWidth - 8;
            } else {
                this.minBoundaryX = 0;
                this.maxBoundaryX = this.maxPosX;
            }

            this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
        }

        if ( this.options.listenY ) {
            this.wrapperHeight = this.wrapper.clientHeight;
            if ( this.options.resize ) {
                this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                this.indicatorStyle.height = this.indicatorHeight + 'px';
            } else {
                this.indicatorHeight = this.indicator.clientHeight;
            }

            this.maxPosY = this.wrapperHeight - this.indicatorHeight;

            if ( this.options.shrink == 'clip' ) {
                this.minBoundaryY = -this.indicatorHeight + 8;
                this.maxBoundaryY = this.wrapperHeight - 8;
            } else {
                this.minBoundaryY = 0;
                this.maxBoundaryY = this.maxPosY;
            }

            this.maxPosY = this.wrapperHeight - this.indicatorHeight;
            this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
        }

        this.updatePosition();
    },

    updatePosition: function () {
        var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

        if ( !this.options.ignoreBoundaries ) {
            if ( x < this.minBoundaryX ) {
                if ( this.options.shrink == 'scale' ) {
                    this.width = Math.max(this.indicatorWidth + x, 8);
                    this.indicatorStyle.width = this.width + 'px';
                }
                x = this.minBoundaryX;
            } else if ( x > this.maxBoundaryX ) {
                if ( this.options.shrink == 'scale' ) {
                    this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                    this.indicatorStyle.width = this.width + 'px';
                    x = this.maxPosX + this.indicatorWidth - this.width;
                } else {
                    x = this.maxBoundaryX;
                }
            } else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
                this.width = this.indicatorWidth;
                this.indicatorStyle.width = this.width + 'px';
            }

            if ( y < this.minBoundaryY ) {
                if ( this.options.shrink == 'scale' ) {
                    this.height = Math.max(this.indicatorHeight + y * 3, 8);
                    this.indicatorStyle.height = this.height + 'px';
                }
                y = this.minBoundaryY;
            } else if ( y > this.maxBoundaryY ) {
                if ( this.options.shrink == 'scale' ) {
                    this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                    this.indicatorStyle.height = this.height + 'px';
                    y = this.maxPosY + this.indicatorHeight - this.height;
                } else {
                    y = this.maxBoundaryY;
                }
            } else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
                this.height = this.indicatorHeight;
                this.indicatorStyle.height = this.height + 'px';
            }
        }

        this.x = x;
        this.y = y;

        if ( this.scroller.options.useTransform ) {
            this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
        } else {
            this.indicatorStyle.left = x + 'px';
            this.indicatorStyle.top = y + 'px';
        }
    },

    _pos: function (x, y) {
        if ( x < 0 ) {
            x = 0;
        } else if ( x > this.maxPosX ) {
            x = this.maxPosX;
        }

        if ( y < 0 ) {
            y = 0;
        } else if ( y > this.maxPosY ) {
            y = this.maxPosY;
        }

        x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
        y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

        this.scroller.scrollTo(x, y);
    },

    fade: function (val, hold) {
        if ( hold && !this.visible ) {
            return;
        }

        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;

        var time = val ? 250 : 500,
            delay = val ? 0 : 300;

        val = val ? '1' : '0';

        this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

        this.fadeTimeout = setTimeout((function (val) {
            this.wrapperStyle.opacity = val;
            this.visible = +val;
        }).bind(this, val), delay);
    }
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
    module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
    window.IScroll = IScroll;
}

})(window, document, Math);
$(document).ready(function() {

    var arrowRight = $('.page3_arrow-right'),//стрелочка вправо
        arrowLeft = $('.page3_arrow-left'),//стрелочка влево

        dottedLeft = $('.page3_dotatedLeft'),//пунктир полосы
        dottedRight = $('.page3_dotatedRight'),
        dottedCenter = $('.page3_dotatedCenter'),

        allCloud = $('.page3_content_absoluteBlock'),//все облака
        conteiner = $('.page3_content'),//контейнер где лежат все облака
        t = 1;//порядковый номер

    arrowRight.on('click', function () {
        var center = t - 1,
            left = t - 2,
            leftOut = t - 3,
            RightOut = t + 1;

        if (t < 0) {
            t = allCloud.length - 1;
        }//обнуляем коефициент t когда выше кол-ва облаков

        if (center == -1) {
            center = allCloud.length - 1;
        }

        if (left == -1) {
            left = allCloud.length - 1;
        }//редактируем коефициент чтоб не был выше чем колтчество облачков
        if (left == -2) {
            left = allCloud.length - 2;
        }

        if (leftOut == -1) {
            leftOut = allCloud.length - 1;
        }
        if (leftOut == -2) {
            leftOut = allCloud.length - 2;
        }
        if (leftOut == -3) {
            leftOut = allCloud.length - 3;
        }

        if (RightOut == allCloud.length) {
            RightOut = 0;
        }
        if (RightOut == allCloud.length + 1) {
            RightOut = 1;
        }

        dottedLeft.css('opacity', 0);
        dottedRight.css('opacity', 0);
        dottedCenter.css('opacity', 0);

        if ($(window).width() > 768) {
            console.log('разрешение больше 768');
            allCloud.eq(t).css({'left': '75%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(RightOut).css({'left': '100%', 'opacity': 0});
            allCloud.eq(center).css({'left': '50%', 'opacity': 1});
            allCloud.eq(left).css({'left': '25%', 'opacity': 1});
            allCloud.eq(leftOut).css({'left': '-10%', 'opacity': 0});
        } else {
            console.log('разрешение меньше 768');
            allCloud.eq(t).css({'top': '55%', 'left': '50%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(RightOut).css({'top': '200%', 'left': '50%', 'opacity': 0});
            allCloud.eq(center).css({'top': '20%', 'left': '50%', 'opacity': 1});
            allCloud.eq(left).css({'top': '-20%', 'left': '50%', 'opacity': 1});
            allCloud.eq(leftOut).css({'top': '-100%', 'left': '50%', 'opacity': 0});
        }

        console.log('движение вправо leftOut: ' + leftOut + ' left: ' + left + ' center: ' + center + ' t: ' + t + ' RightOut: ' + RightOut);

        dottedLeft.stop(true).animate({opacity: 1}, 2000);
        dottedRight.stop(true).animate({opacity: 1}, 2000);
        dottedCenter.stop(true).animate({opacity: 1}, 2000);

        // dottedLeft.css('opacity', 1);
        // dottedRight.css('opacity', 1);
        // dottedCenter.css('opacity', 1);

        t--;
    });

    arrowLeft.on('click', function () {
        if (t == allCloud.length) {
            t = 0;
        }
        var rightOut1 = t + 3,
            right1 = t + 2,
            center1 = t + 1,
            left1 = t - 1,
            leftOut1 = t - 2;

        if (left1 == -1) {
            left1 = allCloud.length - 1;
        }

        if (leftOut1 == -1) {
            leftOut1 = allCloud.length - 1;
        }
        if (leftOut1 == -2) {
            leftOut1 = allCloud.length - 2;
        }

        if (center1 == allCloud.length) {
            center1 = 0;
        }

        if (right1 == allCloud.length) {
            right1 = 0;
        }
        if (right1 == allCloud.length + 1) {
            right1 = 1;
        }
        if (right1 == allCloud.length + 2) {
            right1 = 2;
        }

        if (rightOut1 == allCloud.length) {
            rightOut1 = 0;
        }
        if (rightOut1 == allCloud.length + 1) {
            rightOut1 = 1;
        }
        if (rightOut1 == allCloud.length + 2) {
            rightOut1 = 2;
        }
        if (rightOut1 == allCloud.length + 3) {
            rightOut1 = 3;
        }

        dottedLeft.css('opacity', 0);
        dottedRight.css('opacity', 0);
        dottedCenter.css('opacity', 0);

        if ($(window).width() > 768) {
            console.log('разрешение меньше 768');
            allCloud.eq(t).css({'left': '25%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(left1).css({'left': '-10%', 'opacity': 0});
            allCloud.eq(center1).css({'left': '50%', 'opacity': 1});
            allCloud.eq(right1).css({'left': '75%', 'opacity': 1});
            allCloud.eq(rightOut1).css({'left': '100%', 'opacity': 0});
        } else {
            console.log('разрешение меньше 768');
            allCloud.eq(t).css({'top': '-20%', 'left': '50%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(left1).css({'top': '-100%', 'left': '50%', 'opacity': 0});
            allCloud.eq(center1).css({'top': '20%', 'left': '50%', 'opacity': 1});
            allCloud.eq(right1).css({'top': '55%', 'left': '50%', 'opacity': 1});
            allCloud.eq(rightOut1).css({'top': '100%', 'left': '50%', 'opacity': 0});
        }

        console.log('движение влево leftOut1: ' + leftOut1 + ' left1: ' + left1 + ' t: ' + t + ' center1: ' + center1 + ' right1: ' + right1 + ' rightOut1: ' + rightOut1);

        dottedLeft.stop(true).animate({opacity: 1}, 2000);
        dottedRight.stop(true).animate({opacity: 1}, 2000);
        dottedCenter.stop(true).animate({opacity: 1}, 2000);

        t++;
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3RNYXAuanMiLCJleGFtcGxlcy5qcyIsImpxdWVyeS5mdWxsUGFnZS5qcyIsIm1haW4uanMiLCJtb3ZlX2Fycm93LmpzIiwic2Nyb2xsb3ZlcmZsb3cuanMiLCJzbGlkZXJfY2xvdWRzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWRkTWFya2VyIiwibWFya2VycyIsInB1c2giLCJnb29nbGUiLCJtYXBzIiwiTWFya2VyIiwicG9zaXRpb24iLCJtYXJrZXIxIiwicmFpc2VPbkRyYWciLCJpY29uIiwiaW1hZ2UiLCJtYXAiLCJkcmFnZ2FibGUiLCJhZGRNYXJrZXIyIiwibWFya2VyMiIsImltYWdlMiIsImFkZE1hcmtlcjMiLCJtYXJrZXIzIiwiaW1hZ2UzIiwiaW5pdGlhbGl6ZSIsIm1hcE9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6b29tIiwiZGlzYWJsZURlZmF1bHRVSSIsImNlbnRlciIsIm1hcENvb3JkaW5hdGVzIiwibWFwVHlwZUlkIiwiTWFwVHlwZUlkIiwiUk9BRE1BUCIsInN0eWxlcyIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwidmlzaWJpbGl0eSIsIk1hcCIsImdldEVsZW1lbnRCeUlkIiwiTGF0TG5nIiwiTWFya2VySW1hZ2UiLCJTaXplIiwiUG9pbnQiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwid2luZG93IiwiaGVhZGVyTG9nbyIsImhlYWRCdXR0b24iLCJhY3RpdmVMaW5rIiwiaGVhZGVyTmF2IiwiZnVsbHBhZ2UiLCJhbmNob3JzIiwiY3NzMyIsImFmdGVyTG9hZCIsImFuY2hvckxpbmsiLCJpbmRleCIsImF0dHIiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJlcSIsImFkZENsYXNzIiwiZ2xvYmFsIiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIk1hdGgiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImpRdWVyeSIsInRoaXMiLCJ1bmRlZmluZWQiLCJXUkFQUEVSIiwiV1JBUFBFUl9TRUwiLCJTQ1JPTExBQkxFIiwiU0NST0xMQUJMRV9TRUwiLCJSRVNQT05TSVZFIiwiTk9fVFJBTlNJVElPTiIsIkRFU1RST1lFRCIsIkVOQUJMRUQiLCJWSUVXSU5HX1BSRUZJWCIsIkFDVElWRSIsIkFDVElWRV9TRUwiLCJDT01QTEVURUxZIiwiQ09NUExFVEVMWV9TRUwiLCJTRUNUSU9OX0RFRkFVTFRfU0VMIiwiU0VDVElPTiIsIlNFQ1RJT05fU0VMIiwiU0VDVElPTl9BQ1RJVkVfU0VMIiwiU0VDVElPTl9GSVJTVF9TRUwiLCJTRUNUSU9OX0xBU1RfU0VMIiwiVEFCTEVfQ0VMTCIsIlRBQkxFX0NFTExfU0VMIiwiQVVUT19IRUlHSFQiLCJOT1JNQUxfU0NST0xMIiwiU0VDVElPTl9OQVYiLCJTRUNUSU9OX05BVl9TRUwiLCJTRUNUSU9OX05BVl9UT09MVElQIiwiU0VDVElPTl9OQVZfVE9PTFRJUF9TRUwiLCJTSE9XX0FDVElWRV9UT09MVElQIiwiU0xJREVfREVGQVVMVF9TRUwiLCJTTElERSIsIlNMSURFX1NFTCIsIlNMSURFX0FDVElWRV9TRUwiLCJTTElERVNfV1JBUFBFUiIsIlNMSURFU19XUkFQUEVSX1NFTCIsIlNMSURFU19DT05UQUlORVIiLCJTTElERVNfQ09OVEFJTkVSX1NFTCIsIlRBQkxFIiwiU0xJREVTX05BViIsIlNMSURFU19OQVZfU0VMIiwiU0xJREVTX05BVl9MSU5LX1NFTCIsIlNMSURFU19BUlJPVyIsIlNMSURFU19BUlJPV19TRUwiLCJTTElERVNfUFJFViIsIlNMSURFU19QUkVWX1NFTCIsIlNMSURFU19BUlJPV19QUkVWIiwiU0xJREVTX0FSUk9XX1BSRVZfU0VMIiwiU0xJREVTX05FWFQiLCJTTElERVNfTkVYVF9TRUwiLCJTTElERVNfQVJST1dfTkVYVCIsIlNMSURFU19BUlJPV19ORVhUX1NFTCIsIiR3aW5kb3ciLCIkZG9jdW1lbnQiLCJpc2Nyb2xsT3B0aW9ucyIsInNjcm9sbGJhcnMiLCJtb3VzZVdoZWVsIiwiaGlkZVNjcm9sbGJhcnMiLCJmYWRlU2Nyb2xsYmFycyIsImRpc2FibGVNb3VzZSIsImludGVyYWN0aXZlU2Nyb2xsYmFycyIsImZuIiwib3B0aW9ucyIsInNldEF1dG9TY3JvbGxpbmciLCJ2YWx1ZSIsInR5cGUiLCJzZXRWYXJpYWJsZVN0YXRlIiwiZWxlbWVudCIsImF1dG9TY3JvbGxpbmciLCJzY3JvbGxCYXIiLCIkaHRtbEJvZHkiLCJjc3MiLCJvdmVyZmxvdyIsImhlaWdodCIsInNldFJlY29yZEhpc3RvcnkiLCJvcmlnaW5hbHMiLCJyZWNvcmRIaXN0b3J5IiwiY29udGFpbmVyIiwiLW1zLXRvdWNoLWFjdGlvbiIsInRvdWNoLWFjdGlvbiIsImxlbmd0aCIsInNpbGVudFNjcm9sbCIsInRvcCIsInNjcm9sbFRvcCIsInNldFNjcm9sbGluZ1NwZWVkIiwiZmFkaW5nRWZmZWN0IiwiRlAiLCJ1cGRhdGUiLCJzZXRGaXRUb1NlY3Rpb24iLCJzZXRMb2NrQW5jaG9ycyIsImxvY2tBbmNob3JzIiwic2V0TW91c2VXaGVlbFNjcm9sbGluZyIsImFkZE1vdXNlV2hlZWxIYW5kbGVyIiwiYWRkTWlkZGxlV2hlZWxIYW5kbGVyIiwicmVtb3ZlTW91c2VXaGVlbEhhbmRsZXIiLCJyZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIiLCJzZXRBbGxvd1Njcm9sbGluZyIsImRpcmVjdGlvbnMiLCJyZXBsYWNlIiwic3BsaXQiLCJlYWNoIiwiZGlyZWN0aW9uIiwic2V0SXNTY3JvbGxBbGxvd2VkIiwiYWRkVG91Y2hIYW5kbGVyIiwicmVtb3ZlVG91Y2hIYW5kbGVyIiwic2V0S2V5Ym9hcmRTY3JvbGxpbmciLCJrZXlib2FyZFNjcm9sbGluZyIsIm1vdmVTZWN0aW9uVXAiLCJwcmV2IiwibG9vcFRvcCIsImNvbnRpbnVvdXNWZXJ0aWNhbCIsImxhc3QiLCJzY3JvbGxQYWdlIiwibW92ZVNlY3Rpb25Eb3duIiwibmV4dCIsImxvb3BCb3R0b20iLCJmaXJzdCIsInNpbGVudE1vdmVUbyIsInNlY3Rpb25BbmNob3IiLCJzbGlkZUFuY2hvciIsIm1vdmVUbyIsInNjcm9sbGluZ1NwZWVkIiwiZGVzdGlueSIsImdldFNlY3Rpb25CeUFuY2hvciIsInNjcm9sbFBhZ2VBbmRTbGlkZSIsIm1vdmVTbGlkZVJpZ2h0Iiwic2VjdGlvbiIsIm1vdmVTbGlkZSIsIm1vdmVTbGlkZUxlZnQiLCJyZUJ1aWxkIiwicmVzaXppbmciLCJoYXNDbGFzcyIsImlzUmVzaXppbmciLCJ3aW5kb3dzSGVpZ2h0Iiwic2xpZGVzV3JhcCIsInNsaWRlcyIsInZlcnRpY2FsQ2VudGVyZWQiLCJnZXRUYWJsZUhlaWdodCIsInNjcm9sbE92ZXJmbG93IiwiY3JlYXRlU2Nyb2xsQmFyIiwibGFuZHNjYXBlU2Nyb2xsIiwiYWN0aXZlU2VjdGlvbiIsInNlY3Rpb25JbmRleCIsImlzRnVuY3Rpb24iLCJhZnRlclJlc2l6ZSIsImNhbGwiLCJhZnRlclJlQnVpbGQiLCJzZXRSZXNwb25zaXZlIiwiYWN0aXZlIiwiaXNSZXNwb25zaXZlIiwiJGJvZHkiLCJoaWRlIiwiYWZ0ZXJSZXNwb25zaXZlIiwicmVzcG9uc2l2ZVNsaWRlcyIsInRvU2VjdGlvbnMiLCJzaG93IiwidG9TbGlkZXMiLCJnZXRGdWxscGFnZURhdGEiLCJpbnRlcm5hbHMiLCJnZXRYbW92ZW1lbnQiLCJyZW1vdmVBbmltYXRpb24iLCJnZXRUcmFuc2Zvcm1zIiwibGF6eUxvYWQiLCJhZGRBbmltYXRpb24iLCJwZXJmb3JtSG9yaXpvbnRhbE1vdmUiLCJzaWxlbnRMYW5kc2NhcGVTY3JvbGwiLCJrZWVwU2xpZGVzUG9zaXRpb24iLCJzdHlsZVNsaWRlcyIsImluaXQiLCJzdXBwb3J0M2QiLCJoeWJyaWQiLCJzZXRPcHRpb25zRnJvbURPTSIsInByZXBhcmVEb20iLCJhY3RpdmVTbGlkZSIsInJlc3BvbnNpdmUiLCJzZXRCb2R5Q2xhc3MiLCJyZWFkeVN0YXRlIiwic2Nyb2xsVG9BbmNob3IiLCJvbiIsImJpbmRFdmVudHMiLCJzY3JvbGxIYW5kbGVyIiwiaGFzaENoYW5nZUhhbmRsZXIiLCJibHVyIiwiYmx1ckhhbmRsZXIiLCJyZXNpemUiLCJyZXNpemVIYW5kbGVyIiwia2V5ZG93biIsImtleWRvd25IYW5kbGVyIiwia2V5dXAiLCJrZXlVcEhhbmRsZXIiLCJzZWN0aW9uQnVsbGV0SGFuZGxlciIsInNsaWRlQnVsbGV0SGFuZGxlciIsInRvb2x0aXBUZXh0SGFuZGxlciIsInNsaWRlQXJyb3dIYW5kbGVyIiwibm9ybWFsU2Nyb2xsRWxlbWVudHMiLCJsb2FkRXh0ZW5zaW9uIiwiaW50ZXJuYWxOYW1lIiwiZXh0ZXJuYWxOYW1lIiwic2VjdGlvbnMiLCJzZWN0aW9uU2VsZWN0b3IiLCJmaWx0ZXIiLCJkYXRhIiwidG9TdHJpbmciLCJnZXQiLCJuYXZpZ2F0aW9uVG9vbHRpcHMiLCJhZGRJbnRlcm5hbFNlbGVjdG9ycyIsIm51bVNsaWRlcyIsInN0eWxlU2VjdGlvbiIsInN0eWxlTWVudSIsImFkZFRhYmxlQ2xhc3MiLCJmaXhlZEVsZW1lbnRzIiwiYXBwZW5kVG8iLCJuYXZpZ2F0aW9uIiwiYWRkVmVydGljYWxOYXZpZ2F0aW9uIiwiZW5hYmxlWW91dHViZUFQSSIsImVuYWJsZVZpZGVtb0FQSSIsImFwcGx5IiwiY3JlYXRlU2Nyb2xsQmFySGFuZGxlciIsImFmdGVyUmVuZGVyQWN0aW9ucyIsInNsaWRlcldpZHRoIiwic2xpZGVXaWR0aCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwiY29udHJvbEFycm93cyIsImNyZWF0ZVNsaWRlQXJyb3dzIiwic2xpZGVzTmF2aWdhdGlvbiIsImFkZFNsaWRlc05hdmlnYXRpb24iLCJzdGFydGluZ1NsaWRlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJzZWN0aW9uc0NvbG9yIiwiYWN0aXZhdGVNZW51QW5kTmF2IiwibWVudSIsImNsb3Nlc3QiLCJzbGlkZVNlbGVjdG9yIiwiYWZ0ZXIiLCJjb250cm9sQXJyb3dDb2xvciIsImxvb3BIb3Jpem9udGFsIiwiYXBwZW5kIiwibmF2Iiwic2hvd0FjdGl2ZVRvb2x0aXAiLCJuYXZpZ2F0aW9uUG9zaXRpb24iLCJpIiwibGluayIsImxpIiwidG9vbHRpcCIsImFkZFVSTFBhcmFtIiwibmV3UGFyYW0iLCJvcmlnaW5hbFNyYyIsImdldFVybFBhcmFtU2lnbiIsInVybCIsInRlc3QiLCJzY3JvbGxPdmVyZmxvd0hhbmRsZXIiLCJhZnRlclJlbmRlciIsInBsYXlNZWRpYSIsImN1cnJlbnRTZWN0aW9uIiwiY3VycmVudFNjcm9sbCIsInNjcm9sbERpcmVjdGlvbiIsImdldFNjcm9sbERpcmVjdGlvbiIsInZpc2libGVTZWN0aW9uSW5kZXgiLCJzY3JlZW5fbWlkIiwiaXNBdEJvdHRvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvZmZzZXRUb3AiLCJpc0NvbXBsZXRlbHlJblZpZXdQb3J0Iiwic2libGluZ3MiLCJpc1Njcm9sbGluZyIsImxlYXZpbmdTZWN0aW9uIiwibGVhdmluZ1NlY3Rpb25JbmRleCIsInlNb3ZlbWVudCIsImdldFltb3ZlbWVudCIsInNsaWRlQW5jaG9yTGluayIsInNsaWRlSW5kZXgiLCJjYW5TY3JvbGwiLCJvbkxlYXZlIiwic3RvcE1lZGlhIiwibGFzdFNjcm9sbGVkRGVzdGlueSIsInNldFN0YXRlIiwiY2xlYXJUaW1lb3V0Iiwic2Nyb2xsSWQiLCJzZXRUaW1lb3V0IiwiZml0VG9TZWN0aW9uIiwic2Nyb2xsSWQyIiwiaXMiLCJmaXRUb1NlY3Rpb25EZWxheSIsIm1vdmVtZW50IiwiYm90dG9tIiwibGFzdFNjcm9sbCIsInByZXZpb3VzRGVzdFRvcCIsInNjcm9sbGluZyIsInNjcm9sbGFibGUiLCJpc1Njcm9sbEFsbG93ZWQiLCJtIiwiY2hlY2siLCJzY3JvbGxTZWN0aW9uIiwic2Nyb2xsSG9yaXpvbnRhbGx5IiwiZ2V0U2Nyb2xsU2VjdGlvbiIsImlzU2Nyb2xsZWQiLCJ0b3VjaE1vdmVIYW5kbGVyIiwiZSIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQiLCJpc1JlYWxseVRvdWNoIiwicHJldmVudERlZmF1bHQiLCJzbGlkZU1vdmluZyIsInRvdWNoRXZlbnRzIiwiZ2V0RXZlbnRzUGFnZSIsInRvdWNoRW5kWSIsInkiLCJ0b3VjaEVuZFgiLCJ4IiwiYWJzIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsIm91dGVyV2lkdGgiLCJ0b3VjaFNlbnNpdGl2aXR5IiwicmlnaHQiLCJsZWZ0IiwiZWwiLCJob3AiLCJub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQiLCJwb2ludGVyVHlwZSIsInRvdWNoU3RhcnRIYW5kbGVyIiwic3RvcCIsImdldEF2ZXJhZ2UiLCJlbGVtZW50cyIsIm51bWJlciIsInN1bSIsImxhc3RFbGVtZW50cyIsInNsaWNlIiwibWF4IiwiY2VpbCIsIk1vdXNlV2hlZWxIYW5kbGVyIiwiY3VyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiaXNOb3JtYWxTY3JvbGwiLCJjb250cm9sUHJlc3NlZCIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJkZXRhaWwiLCJkZWx0YSIsIm1pbiIsImhvcml6b250YWxEZXRlY3Rpb24iLCJ3aGVlbERlbHRhWCIsImRlbHRhWCIsImlzU2Nyb2xsaW5nVmVydGljYWxseSIsInNjcm9sbGluZ3MiLCJzaGlmdCIsInJldHVyblZhbHVlIiwidGltZURpZmYiLCJwcmV2VGltZSIsImF2ZXJhZ2VFbmQiLCJhdmVyYWdlTWlkZGxlIiwiaXNBY2NlbGVyYXRpbmciLCJjdXJyZW50U2xpZGUiLCJnZXREZXN0aW5hdGlvblBvc2l0aW9uIiwiZWxlbVBvc2l0aW9uIiwiaXNTY3JvbGxpbmdEb3duIiwic2VjdGlvbkJvdHRvbSIsIm91dGVySGVpZ2h0IiwiYmlnU2VjdGlvbnNEZXN0aW5hdGlvbiIsImNhbGxiYWNrIiwiaXNNb3ZlbWVudFVwIiwiZHRvcCIsInYiLCJsb2NhbElzUmVzaXppbmciLCJjcmVhdGVJbmZpbml0ZVNlY3Rpb25zIiwicGVyZm9ybU1vdmVtZW50IiwidHJhbnNsYXRlM2QiLCJ0cmFuc2Zvcm1Db250YWluZXIiLCJhZnRlclNlY3Rpb25Mb2Fkc0lkIiwiYWZ0ZXJTZWN0aW9uTG9hZHMiLCJzY3JvbGxTZXR0aW5ncyIsImdldFNjcm9sbFNldHRpbmdzIiwiYW5pbWF0ZSIsImVhc2luZyIsInByb21pc2UiLCJkb25lIiwic2Nyb2xsIiwiYmVmb3JlIiwibmV4dEFsbCIsInByZXZBbGwiLCJyZXZlcnNlIiwid3JhcEFyb3VuZEVsZW1lbnRzIiwiY29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyIiwicmVzZXRTbGlkZXJzIiwiZ2V0U2xpZGVPclNlY3Rpb24iLCJyZW1vdmVBdHRyIiwibG9hZCIsImhhc0F0dHJpYnV0ZSIsInBsYXkiLCJwbGF5WW91dHViZSIsIm9ubG9hZCIsImNvbnRlbnRXaW5kb3ciLCJwb3N0TWVzc2FnZSIsInBhdXNlIiwic2xpZGUiLCJsb2NhdGlvbiIsImhhc2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJhbmltYXRlQW5jaG9yIiwiaXNGaXJzdFNsaWRlTW92ZSIsImlzRmlyc3RTY3JvbGxNb3ZlIiwibGFzdFNjcm9sbGVkU2xpZGUiLCJrZXlkb3duSWQiLCJhY3RpdmVFbGVtZW50Iiwia2V5Q29kZSIsIndoaWNoIiwia2V5Q29udHJvbHMiLCJpbkFycmF5IiwiY3RybEtleSIsIm9ua2V5ZG93biIsInRyaWdnZXIiLCJpc1dpbmRvd0ZvY3VzZWQiLCJtb3VzZURvd25IYW5kbGVyIiwib2xkUGFnZVkiLCJwYWdlWSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsIm9mZiIsInNoaWZ0UHJlc3NlZCIsInNoaWZ0S2V5IiwiayIsInVwIiwiZG93biIsImRlc3RpbnlQb3MiLCJzbGlkZXNOYXYiLCJnZXRBbmNob3IiLCJwcmV2U2xpZGUiLCJwcmV2U2xpZGVJbmRleCIsInhNb3ZlbWVudCIsIm9uU2xpZGVMZWF2ZSIsInRvZ2dsZSIsImNvbnRpbnVvdXNIb3Jpem9udGFsIiwiaW50ZXJsb2NrZWRTbGlkZXMiLCJhZnRlclNsaWRlTG9hZHMiLCJhY3RpdmVTbGlkZXNOYXZpZ2F0aW9uIiwiYWZ0ZXJTbGlkZUxvYWQiLCJmaXJlQ2FsbGJhY2siLCJyb3VuZCIsImFmdGVyU2xpZGVMb2Fkc0lkIiwic2Nyb2xsTGVmdCIsImlzVG91Y2hEZXZpY2UiLCJjdXJyZW50SGVpZ2h0IiwicHJldmlvdXNIZWlnaHQiLCJyZXNpemVJZCIsIndpZHRoTGltaXQiLCJyZXNwb25zaXZlV2lkdGgiLCJoZWlnaHRMaW1pdCIsInJlc3BvbnNpdmVIZWlnaHQiLCJpc0JyZWFraW5nUG9pbnRXaWR0aCIsImlzQnJlYWtpbmdQb2ludEhlaWdodCIsInRyYW5zaXRpb24iLCJlYXNpbmdjc3MzIiwiLXdlYmtpdC10cmFuc2l0aW9uIiwiYWN0aXZhdGVOYXZEb3RzIiwibmFtZSIsImFjdGl2YXRlTWVudUVsZW1lbnQiLCJhbmNob3IiLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwiY29udGVudEhlaWdodCIsIndyYXBDb250ZW50Iiwic2Nyb2xsSGVpZ2h0IiwicGFyc2VJbnQiLCJ3cmFwSW5uZXIiLCJjcmVhdGUiLCJyZW1vdmUiLCJzZWN0aW9uSGVpZ2h0IiwicGFkZGluZ3MiLCJhbmltYXRlZCIsImdldFNsaWRlQnlBbmNob3IiLCJzY3JvbGxTbGlkZXIiLCJzbGlkZXNOYXZQb3NpdGlvbiIsIndpZHRoIiwic2VjdGlvbkhhc2giLCJzZXRVcmxIYXNoIiwiaXNUb3VjaCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJiYXNlVXJsIiwiaHJlZiIsInRleHQiLCJTdHJpbmciLCJjbGFzc1JlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwiaGFzM2QiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNmb3JtcyIsIndlYmtpdFRyYW5zZm9ybSIsIk9UcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsIk1velRyYW5zZm9ybSIsInRyYW5zZm9ybSIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJ0Iiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInJlbW92ZUNoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsIl9hZGRFdmVudExpc3RlbmVyIiwicHJlZml4Iiwic3VwcG9ydCIsIm9ubW91c2V3aGVlbCIsIk1TUG9pbnRlciIsImdldE1TUG9pbnRlciIsIm1vdmUiLCJwb2ludGVyIiwiUG9pbnRlckV2ZW50IiwiZXZlbnRzIiwicGFnZVgiLCJ0b3VjaGVzIiwibm9DYWxsYmFja3MiLCItd2Via2l0LXRyYW5zZm9ybSIsIi1tb3otdHJhbnNmb3JtIiwiLW1zLXRyYW5zZm9ybSIsImRlc3Ryb3kiLCJhbGwiLCJkZXN0cm95U3RydWN0dXJlIiwiYmFja2dyb3VuZC1jb2xvciIsInBhZGRpbmciLCJpbmRleE9mIiwicmVwbGFjZVdpdGgiLCJjaGlsZE5vZGVzIiwidXNlZFNlbGVjdG9ycyIsInZhcmlhYmxlIiwiZGlzcGxheVdhcm5pbmdzIiwic2hvd0Vycm9yIiwibmFtZUF0dHIiLCJ0b0xvd2VyQ2FzZSIsImlkQXR0ciIsImNvbnNvbGUiLCJleHRlbmQiLCJpc2Nyb2xsSGFuZGxlciIsInNjcm9sbE92ZXJmbG93T3B0aW9ucyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwibXNNYXhUb3VjaFBvaW50cyIsImNsaWNrIiwiZWFzZUluT3V0Q3ViaWMiLCJiIiwiYyIsImQiLCJJU2Nyb2xsIiwicHJvdG90eXBlIiwid2hlZWxPbiIsIndyYXBwZXIiLCJ3aGVlbE9mZiIsInJlZnJlc2hJZCIsImlTY3JvbGxJbnN0YW5jZXMiLCJzY3JvbGxlciIsIiR0aGlzIiwiaVNjcm9sbEluc3RhbmNlIiwiaW5uZXJIZWlnaHQiLCJjaGlsZHJlbiIsInVud3JhcCIsInJlZnJlc2giLCJsb2ciLCJpdGVtTWVudSIsInRleHRNZW51IiwicGFnZTQiLCJhY3RpdkJsb2NrVGV4dCIsImFjdGl2QmxvY2tUaXRsZSIsImJpZ0Fycm93IiwiYXJyb3dCbG9jayIsIm1hcmdpbkJvdHRvbSIsIm9wYWNpdHkiLCJzbWFsbEFycm93Iiwic2V0SW50ZXJ2YWwiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsZXJTdHlsZSIsInJlc2l6ZVNjcm9sbGJhcnMiLCJtb3VzZVdoZWVsU3BlZWQiLCJzbmFwVGhyZXNob2xkIiwiZGlzYWJsZVBvaW50ZXIiLCJ1dGlscyIsImhhc1BvaW50ZXIiLCJkaXNhYmxlVG91Y2giLCJoYXNUb3VjaCIsInN0YXJ0WCIsInN0YXJ0WSIsInNjcm9sbFkiLCJkaXJlY3Rpb25Mb2NrVGhyZXNob2xkIiwibW9tZW50dW0iLCJib3VuY2UiLCJib3VuY2VUaW1lIiwiYm91bmNlRWFzaW5nIiwicHJldmVudERlZmF1bHRFeGNlcHRpb24iLCJ0YWdOYW1lIiwiSFdDb21wb3NpdGluZyIsInVzZVRyYW5zaXRpb24iLCJ1c2VUcmFuc2Zvcm0iLCJiaW5kVG9XcmFwcGVyIiwib25tb3VzZWRvd24iLCJ0cmFuc2xhdGVaIiwiaGFzUGVyc3BlY3RpdmUiLCJoYXNUcmFuc2l0aW9uIiwiaGFzVHJhbnNmb3JtIiwiZXZlbnRQYXNzdGhyb3VnaCIsInNjcm9sbFgiLCJmcmVlU2Nyb2xsIiwiZWFzZSIsImNpcmN1bGFyIiwicmVzaXplUG9sbGluZyIsInRhcCIsInNocmlua1Njcm9sbGJhcnMiLCJpbnZlcnRXaGVlbERpcmVjdGlvbiIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiX2V2ZW50cyIsIl9pbml0Iiwic2Nyb2xsVG8iLCJlbmFibGUiLCJjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyIiwiaW50ZXJhY3RpdmUiLCJzY3JvbGxiYXIiLCJpbmRpY2F0b3IiLCJjc3NUZXh0IiwicG9pbnRlckV2ZW50cyIsImFwcGVuZENoaWxkIiwiSW5kaWNhdG9yIiwid3JhcHBlclN0eWxlIiwiaW5kaWNhdG9yU3R5bGUiLCJsaXN0ZW5YIiwibGlzdGVuWSIsImRlZmF1bHRTY3JvbGxiYXJzIiwic2hyaW5rIiwiZmFkZSIsInNwZWVkUmF0aW9YIiwic3BlZWRSYXRpb1kiLCJzaXplUmF0aW9YIiwic2l6ZVJhdGlvWSIsIm1heFBvc1giLCJtYXhQb3NZIiwiYWRkRXZlbnQiLCJwcmVmaXhQb2ludGVyRXZlbnQiLCJkdXJhdGlvblByb3AiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJpc0JhZEFuZHJvaWQiLCJzZWxmIiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3ByZWZpeFN0eWxlIiwiX3ZlbmRvciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwibWUiLCJfZWxlbWVudFN0eWxlIiwidmVuZG9ycyIsImwiLCJub3ciLCJvYmoiLCJjYXB0dXJlIiwicmVtb3ZlRXZlbnQiLCJwb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsImN1cnJlbnQiLCJzdGFydCIsInRpbWUiLCJsb3dlck1hcmdpbiIsIndyYXBwZXJTaXplIiwiZGVjZWxlcmF0aW9uIiwiZGVzdGluYXRpb24iLCJkdXJhdGlvbiIsImRpc3RhbmNlIiwic3BlZWQiLCJfdHJhbnNmb3JtIiwiYXBwVmVyc2lvbiIsInNhZmFyaVZlcnNpb24iLCJwYXJzZUZsb2F0IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwidHJhbnNmb3JtT3JpZ2luIiwicmUiLCJuZXdjbGFzcyIsImpvaW4iLCJvZmZzZXQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiZXhjZXB0aW9ucyIsImV2ZW50VHlwZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNldXAiLCJwb2ludGVyZG93biIsInBvaW50ZXJtb3ZlIiwicG9pbnRlcnVwIiwiTVNQb2ludGVyRG93biIsIk1TUG9pbnRlck1vdmUiLCJNU1BvaW50ZXJVcCIsInF1YWRyYXRpYyIsInNxcnQiLCJiYWNrIiwiZWxhc3RpYyIsImYiLCJwb3ciLCJzaW4iLCJQSSIsImV2ZW50TmFtZSIsImV2IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsInZpZXciLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiYWx0S2V5IiwibWV0YUtleSIsImJ1dHRvbiIsInJlbGF0ZWRUYXJnZXQiLCJfY29uc3RydWN0ZWQiLCJ2ZXJzaW9uIiwiX2luaXRFdmVudHMiLCJpbmRpY2F0b3JzIiwiX2luaXRJbmRpY2F0b3JzIiwiX2luaXRXaGVlbCIsInNuYXAiLCJfaW5pdFNuYXAiLCJrZXlCaW5kaW5ncyIsIl9pbml0S2V5cyIsInJlc2l6ZVRpbWVvdXQiLCJfZXhlY0V2ZW50IiwiX3RyYW5zaXRpb25FbmQiLCJpc0luVHJhbnNpdGlvbiIsIl90cmFuc2l0aW9uVGltZSIsInJlc2V0UG9zaXRpb24iLCJfc3RhcnQiLCJlbmFibGVkIiwiaW5pdGlhdGVkIiwicG9zIiwicG9pbnQiLCJtb3ZlZCIsImRpc3RYIiwiZGlzdFkiLCJkaXJlY3Rpb25Mb2NrZWQiLCJzdGFydFRpbWUiLCJnZXRDb21wdXRlZFBvc2l0aW9uIiwiX3RyYW5zbGF0ZSIsImlzQW5pbWF0aW5nIiwiYWJzU3RhcnRYIiwiYWJzU3RhcnRZIiwicG9pbnRYIiwicG9pbnRZIiwiX21vdmUiLCJuZXdYIiwibmV3WSIsImFic0Rpc3RYIiwiYWJzRGlzdFkiLCJ0aW1lc3RhbXAiLCJlbmRUaW1lIiwiaGFzSG9yaXpvbnRhbFNjcm9sbCIsImhhc1ZlcnRpY2FsU2Nyb2xsIiwibWF4U2Nyb2xsWCIsIm1heFNjcm9sbFkiLCJfZW5kIiwibW9tZW50dW1YIiwibW9tZW50dW1ZIiwiY2hhbmdlZFRvdWNoZXMiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJmbGljayIsIndyYXBwZXJXaWR0aCIsIndyYXBwZXJIZWlnaHQiLCJfbmVhcmVzdFNuYXAiLCJjdXJyZW50UGFnZSIsInNuYXBTcGVlZCIsIl9yZXNpemUiLCJ0aGF0IiwiZGlzYWJsZSIsIm9mZnNldEhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsZXJIZWlnaHQiLCJ3cmFwcGVyT2Zmc2V0Iiwic3BsaWNlIiwiYXJndW1lbnRzIiwic2Nyb2xsQnkiLCJ0cmFuc2l0aW9uVHlwZSIsIl90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJfYW5pbWF0ZSIsInNjcm9sbFRvRWxlbWVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwibm9kZVR5cGUiLCJ0cmFuc2l0aW9uVGltZSIsInVwZGF0ZVBvc2l0aW9uIiwibWF0cml4IiwiX2luZGljYXRvcnNNYXAiLCJjdXN0b21TdHlsZSIsImNvbmNhdCIsIndoZWVsVGltZW91dCIsIl93aGVlbCIsIndoZWVsRGVsdGFZIiwiZGVsdGFNb2RlIiwiZ29Ub1BhZ2UiLCJuIiwiY3giLCJjeSIsInN0ZXBYIiwic25hcFN0ZXBYIiwic3RlcFkiLCJzbmFwU3RlcFkiLCJwYWdlcyIsInNuYXBUaHJlc2hvbGRYIiwic25hcFRocmVzaG9sZFkiLCJwb3NYIiwicG9zWSIsImtleXMiLCJwYWdlVXAiLCJwYWdlRG93biIsImVuZCIsImhvbWUiLCJjaGFyQ29kZUF0IiwiX2tleSIsImtleVRpbWUiLCJhY2NlbGVyYXRpb24iLCJrZXlBY2NlbGVyYXRpb24iLCJkZXN0WCIsImRlc3RZIiwiZWFzaW5nRm4iLCJzdGVwIiwiZGVzdFRpbWUiLCJoYW5kbGVFdmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZhZGVUaW1lb3V0IiwicGFyZW50Tm9kZSIsImxhc3RQb2ludFgiLCJsYXN0UG9pbnRZIiwiX3BvcyIsImRpc3BsYXkiLCJpbmRpY2F0b3JXaWR0aCIsIm1pbkJvdW5kYXJ5WCIsIm1heEJvdW5kYXJ5WCIsImluZGljYXRvckhlaWdodCIsIm1pbkJvdW5kYXJ5WSIsIm1heEJvdW5kYXJ5WSIsImlnbm9yZUJvdW5kYXJpZXMiLCJ2YWwiLCJob2xkIiwidmlzaWJsZSIsImRlbGF5IiwiYmluZCIsImFycm93UmlnaHQiLCJhcnJvd0xlZnQiLCJkb3R0ZWRMZWZ0IiwiZG90dGVkUmlnaHQiLCJkb3R0ZWRDZW50ZXIiLCJhbGxDbG91ZCIsImxlZnRPdXQiLCJSaWdodE91dCIsInJpZ2h0T3V0MSIsInJpZ2h0MSIsImNlbnRlcjEiLCJsZWZ0MSIsImxlZnRPdXQxIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQUMsVUFBQUMsTUFBQSxXQStCQSxRQUFBQyxLQUVBQyxFQUFBQyxLQUFBLEdBQUFDLFFBQUFDLEtBQUFDLFFBQ0FDLFNBQUFDLEVBQ0FDLGFBQUEsRUFDQUMsS0FBQUMsRUFDQUMsSUFBQUEsRUFDQUMsV0FBQSxLQUlBLFFBQUFDLEtBR0FaLEVBQUFDLEtBQUEsR0FBQUMsUUFBQUMsS0FBQUMsUUFDQUMsU0FBQVEsRUFDQU4sYUFBQSxFQUNBQyxLQUFBTSxFQUNBSixJQUFBQSxFQUNBQyxXQUFBLEtBSUEsUUFBQUksS0FFQWYsRUFBQUMsS0FBQSxHQUFBQyxRQUFBQyxLQUFBQyxRQUNBQyxTQUFBVyxFQUNBVCxhQUFBLEVBQ0FDLEtBQUFTLEVBQ0FQLElBQUFBLEVBQ0FDLFdBQUEsS0FLQSxRQUFBTyxLQUNBLEdBQUFDLElBQ0FDLGdCQUFBLFVBQ0FDLEtBQUEsR0FDQUMsa0JBQUEsRUFDQUMsT0FBQUMsRUFDQUMsVUFBQXZCLE9BQUFDLEtBQUF1QixVQUFBQyxRQUNBQyxTQUVBQyxZQUFBLGlCQUNBQyxZQUFBLFdBQ0FDLFVBRUFDLFdBQUEsVUFLQUgsWUFBQSw2QkFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLDhCQUNBRSxVQUVBQyxXQUFBLFVBS0FILFlBQUEsTUFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE1BQ0FDLFlBQUEsY0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE9BQ0FDLFlBQUEsU0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLE9BQ0FDLFlBQUEsY0FDQUMsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLGdCQUNBRSxVQUVBQyxXQUFBLFVBS0FILFlBQUEsZUFDQUMsWUFBQSxTQUNBQyxVQUVBQyxXQUFBLFVBS0FILFlBQUEsYUFDQUUsVUFFQUMsV0FBQSxVQUtBSCxZQUFBLFVBQ0FFLFVBRUFDLFdBQUEsVUFLQUgsWUFBQSxRQUNBQyxZQUFBLGNBQ0FDLFVBRUFDLFdBQUEsVUFPQXRCLEdBQUEsR0FBQVIsUUFBQUMsS0FBQThCLElBQUFwQyxTQUFBcUMsZUFBQSxjQUFBZixHQUNBcEIsSUFDQWEsSUFDQUcsSUFyTEEsR0FBQUwsR0FFQWMsR0FEQSxHQUFBdEIsUUFBQUMsS0FBQWdDLE9BQUEsaUJBQUEsbUJBQ0EsR0FBQWpDLFFBQUFDLEtBQUFnQyxPQUFBLGlCQUFBLG9CQUNBN0IsRUFBQSxHQUFBSixRQUFBQyxLQUFBZ0MsT0FBQSxVQUFBLFdBQ0F0QixFQUFBLEdBQUFYLFFBQUFDLEtBQUFnQyxPQUFBLFVBQUEsV0FDQW5CLEVBQUEsR0FBQWQsUUFBQUMsS0FBQWdDLE9BQUEsVUFBQSxXQUlBbkMsS0FFQVMsRUFBQSxHQUFBUCxRQUFBQyxLQUFBaUMsWUFDQSwyQkFDQSxHQUFBbEMsUUFBQUMsS0FBQWtDLEtBQUEsSUFBQSxJQUNBLEdBQUFuQyxRQUFBQyxLQUFBbUMsTUFBQSxFQUFBLEdBQ0EsR0FBQXBDLFFBQUFDLEtBQUFtQyxNQUFBLEdBQUEsS0FFQXhCLEVBQUEsR0FBQVosUUFBQUMsS0FBQWlDLFlBQ0EsZ0NBQ0EsR0FBQWxDLFFBQUFDLEtBQUFrQyxLQUFBLElBQUEsS0FDQSxHQUFBbkMsUUFBQUMsS0FBQW1DLE1BQUEsRUFBQSxHQUNBLEdBQUFwQyxRQUFBQyxLQUFBbUMsTUFBQSxHQUFBLEtBRUFyQixFQUFBLEdBQUFmLFFBQUFDLEtBQUFpQyxZQUNBLDhCQUNBLEdBQUFsQyxRQUFBQyxLQUFBa0MsS0FBQSxJQUFBLEtBQ0EsR0FBQW5DLFFBQUFDLEtBQUFtQyxNQUFBLEVBQUEsR0FDQSxHQUFBcEMsUUFBQUMsS0FBQW1DLE1BQUEsR0FBQSxJQTZKQXBDLFFBQUFDLEtBQUFvQyxNQUFBQyxlQUFBQyxPQUFBLE9BQUF2QixLQ3pMQXRCLEVBQUFDLFVBQUFDLE1BQUEsV0FDQSxHQUFBNEMsR0FBQTlDLEVBQUEsZ0JBQ0ErQyxFQUFBL0MsRUFBQSx5QkFDQWdELEVBQUFoRCxFQUFBLG9CQUNBaUQsRUFBQWpELEVBQUEsY0FFQUEsR0FBQSxhQUFBa0QsVUFDQUMsU0FBQSxPQUFBLFFBQUEsTUFBQSxVQUFBLFlBRUFDLE1BQUEsRUFPQUMsVUFBQSxTQUFBQyxFQUFBQyxHQUlBLEdBQUFBLElBQ0FULEVBQUFVLEtBQUEsTUFBQSx3QkFDQVQsRUFBQVUsWUFBQSxjQUNBUixFQUFBUyxLQUFBLFdBQUFELFlBQUEsVUFDQVQsRUFBQVcsR0FBQSxHQUFBQyxTQUFBLFdBRUEsR0FBQUwsSUFFQVQsRUFBQVUsS0FBQSxNQUFBLHVCQUNBVCxFQUFBYSxTQUFBLGNBQ0FYLEVBQUFTLEtBQUEsV0FBQUQsWUFBQSxVQUNBVCxFQUFBVyxHQUFBLEdBQUFDLFNBQUEsV0FFQSxHQUFBTCxJQUVBVCxFQUFBVSxLQUFBLE1BQUEsd0JBQ0FULEVBQUFVLFlBQUEsY0FDQVIsRUFBQVMsS0FBQSxXQUFBRCxZQUFBLFVBQ0FULEVBQUFXLEdBQUEsR0FBQUMsU0FBQSxXQUVBLEdBQUFMLElBRUFULEVBQUFVLEtBQUEsTUFBQSx1QkFDQVQsRUFBQWEsU0FBQSxjQUNBWCxFQUFBUyxLQUFBLFdBQUFELFlBQUEsVUFDQVQsRUFBQVcsR0FBQSxHQUFBQyxTQUFBLFdBRUEsR0FBQUwsSUFFQVQsRUFBQVUsS0FBQSxNQUFBLHdCQUNBVCxFQUFBVSxZQUFBLGNBQ0FSLEVBQUFTLEtBQUEsV0FBQUQsWUFBQSxVQUNBVCxFQUFBVyxHQUFBLEdBQUFDLFNBQUEsZ0JDN0NBLFNBQUFDLEVBQUFDLEdBQ0EsWUFDQSxtQkFBQUMsU0FBQUEsT0FBQUMsSUFDQUQsUUFBQSxVQUFBLFNBQUEvRCxHQUNBLE1BQUE4RCxHQUFBOUQsRUFBQTZELEVBQUFBLEVBQUE1RCxTQUFBNEQsRUFBQUksUUFFQSxnQkFBQUMsVUFBQUEsUUFDQUMsT0FBQUQsUUFBQUosRUFBQU0sUUFBQSxVQUFBUCxFQUFBQSxFQUFBNUQsU0FBQTRELEVBQUFJLE1BRUFILEVBQUFPLE9BQUFSLEVBQUFBLEVBQUE1RCxTQUFBNEQsRUFBQUksT0FFQSxtQkFBQXBCLFFBQUFBLE9BQUF5QixLQUFBLFNBQUF0RSxFQUFBNkMsRUFBQTVDLEVBQUFnRSxFQUFBTSxHQUNBLFlBR0EsSUFBQUMsR0FBQSxtQkFDQUMsRUFBQSxJQUFBRCxFQUdBRSxFQUFBLGdCQUNBQyxFQUFBLElBQUFELEVBR0FFLEVBQUEsZ0JBQ0FDLEVBQUEsa0JBQ0FDLEVBQUEsZUFDQUMsRUFBQSxhQUNBQyxFQUFBLGFBQ0FDLEVBQUEsU0FDQUMsRUFBQSxJQUFBRCxFQUNBRSxFQUFBLGdCQUNBQyxFQUFBLElBQUFELEVBR0FFLEVBQUEsV0FDQUMsRUFBQSxhQUNBQyxFQUFBLElBQUFELEVBQ0FFLEVBQUFELEVBQUFMLEVBQ0FPLEVBQUFGLEVBQUEsU0FDQUcsRUFBQUgsRUFBQSxRQUNBSSxFQUFBLGVBQ0FDLEVBQUEsSUFBQUQsRUFDQUUsRUFBQSxpQkFFQUMsRUFBQSxtQkFJQUMsRUFBQSxTQUNBQyxFQUFBLElBQUFELEVBQ0FFLEVBQUEsYUFDQUMsRUFBQSxJQUFBRCxFQUNBRSxFQUFBLGlCQUdBQyxFQUFBLFNBQ0FDLEVBQUEsV0FDQUMsRUFBQSxJQUFBRCxFQUNBRSxFQUFBRCxFQUFBcEIsRUFDQXNCLEVBQUEsWUFDQUMsRUFBQSxJQUFBRCxFQUNBRSxFQUFBLHFCQUNBQyxFQUFBLElBQUFELEVBQ0FFLEVBQUEsV0FHQUMsRUFBQSxlQUNBQyxFQUFBLElBQUFELEVBQ0FFLEVBQUFELEVBQUEsS0FDQUUsRUFBQSxrQkFDQUMsRUFBQSxJQUFBRCxFQUNBRSxFQUFBLFVBQ0FDLEVBQUEsSUFBQUQsRUFDQUUsRUFBQUosRUFBQSxJQUFBRSxFQUNBRyxFQUFBSixFQUFBRSxFQUNBRyxFQUFBLFVBQ0FDLEVBQUEsSUFBQUQsRUFDQUUsRUFBQVIsRUFBQSxJQUFBTSxFQUNBRyxHQUFBUixFQUFBTSxFQUVBRyxHQUFBMUgsRUFBQTZDLEdBQ0E4RSxHQUFBM0gsRUFBQUMsR0FHQTJILElBQ0FDLFlBQUEsRUFDQUMsWUFBQSxFQUNBQyxnQkFBQSxFQUNBQyxnQkFBQSxFQUNBQyxjQUFBLEVBQ0FDLHVCQUFBLEVBR0FsSSxHQUFBbUksR0FBQWpGLFNBQUEsU0FBQWtGLEdBOEhBLFFBQUFDLEdBQUFDLEVBQUFDLEdBQ0FDLEdBQUEsZ0JBQUFGLEVBQUFDLEVBRUEsSUFBQUUsR0FBQXpJLEVBQUF3RixFQUVBNEMsR0FBQU0sZ0JBQUFOLEVBQUFPLFdBQ0FDLEdBQUFDLEtBQ0FDLFNBQUEsU0FDQUMsT0FBQSxTQUdBQyxFQUFBQyxHQUFBQyxjQUFBLFlBR0FDLEdBQUFOLEtBQ0FPLG1CQUFBLE9BQ0FDLGVBQUEsU0FHQVosRUFBQWEsUUFFQUMsR0FBQWQsRUFBQWhJLFdBQUErSSxPQUlBWixHQUFBQyxLQUNBQyxTQUFBLFVBQ0FDLE9BQUEsWUFHQUMsR0FBQSxFQUFBLFlBR0FHLEdBQUFOLEtBQ0FPLG1CQUFBLEdBQ0FDLGVBQUEsS0FHQUUsR0FBQSxHQUdBZCxFQUFBYSxRQUNBVixHQUFBYSxVQUFBaEIsRUFBQWhJLFdBQUErSSxNQVFBLFFBQUFSLEdBQUFWLEVBQUFDLEdBQ0FDLEdBQUEsZ0JBQUFGLEVBQUFDLEdBTUEsUUFBQW1CLEdBQUFwQixFQUFBQyxHQUNBLGFBQUFBLEdBQUFILEVBQUF1QixjQUFBQyxHQUFBRCxjQUNBQyxHQUFBRCxhQUFBRSxPQUFBdkIsR0FFQUUsR0FBQSxpQkFBQUYsRUFBQUMsR0FNQSxRQUFBdUIsR0FBQXhCLEVBQUFDLEdBQ0FDLEdBQUEsZUFBQUYsRUFBQUMsR0FNQSxRQUFBd0IsR0FBQXpCLEdBQ0FGLEVBQUE0QixZQUFBMUIsRUFNQSxRQUFBMkIsSUFBQTNCLEdBQ0FBLEdBQ0E0QixLQUNBQyxPQUVBQyxLQUNBQyxNQVVBLFFBQUFDLElBQUFoQyxFQUFBaUMsR0FDQSxtQkFBQUEsSUFDQUEsRUFBQUEsRUFBQUMsUUFBQSxLQUFBLElBQUFDLE1BQUEsS0FFQXpLLEVBQUEwSyxLQUFBSCxFQUFBLFNBQUFoSCxFQUFBb0gsR0FDQUMsR0FBQXRDLEVBQUFxQyxFQUFBLFFBR0FyQyxHQUNBMkIsSUFBQSxHQUNBWSxPQUVBWixJQUFBLEdBQ0FhLE1BT0EsUUFBQUMsSUFBQXpDLEVBQUFpQyxHQUNBLG1CQUFBQSxJQUNBQSxFQUFBQSxFQUFBQyxRQUFBLEtBQUEsSUFBQUMsTUFBQSxLQUVBekssRUFBQTBLLEtBQUFILEVBQUEsU0FBQWhILEVBQUFvSCxHQUNBQyxHQUFBdEMsRUFBQXFDLEVBQUEsUUFHQXZDLEVBQUE0QyxrQkFBQTFDLEVBT0EsUUFBQTJDLE1BQ0EsR0FBQUMsR0FBQWxMLEVBQUF3RixHQUFBMEYsS0FBQTNGLEVBR0EyRixHQUFBNUIsU0FBQWxCLEVBQUErQyxVQUFBL0MsRUFBQWdELHFCQUNBRixFQUFBbEwsRUFBQXVGLEdBQUE4RixRQUdBSCxFQUFBNUIsUUFDQWdDLEdBQUFKLEVBQUEsTUFBQSxHQU9BLFFBQUFLLE1BQ0EsR0FBQUMsR0FBQXhMLEVBQUF3RixHQUFBZ0csS0FBQWpHLEVBR0FpRyxHQUFBbEMsU0FDQWxCLEVBQUFxRCxhQUFBckQsRUFBQWdELHFCQUNBSSxFQUFBeEwsRUFBQXVGLEdBQUFtRyxTQUdBRixFQUFBbEMsUUFDQWdDLEdBQUFFLEVBQUEsTUFBQSxHQVFBLFFBQUFHLElBQUFDLEVBQUFDLEdBQ0FuQyxFQUFBLEVBQUEsWUFDQW9DLEdBQUFGLEVBQUFDLEdBQ0FuQyxFQUFBVCxHQUFBOEMsZUFBQSxZQU9BLFFBQUFELElBQUFGLEVBQUFDLEdBQ0EsR0FBQUcsR0FBQUMsR0FBQUwsRUFFQSxvQkFBQUMsR0FDQUssR0FBQU4sRUFBQUMsR0FDQUcsRUFBQTFDLE9BQUEsR0FDQWdDLEdBQUFVLEdBUUEsUUFBQUcsSUFBQUMsR0FDQUMsR0FBQSxRQUFBRCxHQU9BLFFBQUFFLElBQUFGLEdBQ0FDLEdBQUEsT0FBQUQsR0FNQSxRQUFBRyxJQUFBQyxHQUNBLElBQUFyRCxHQUFBc0QsU0FBQTNILEdBQUEsQ0FFQTRILElBQUEsRUFFQUMsR0FBQWpGLEdBQUFxQixTQUVBL0ksRUFBQXVGLEdBQUFtRixLQUFBLFdBQ0EsR0FBQWtDLEdBQUE1TSxFQUFBc0UsTUFBQVosS0FBQStDLEdBQ0FvRyxFQUFBN00sRUFBQXNFLE1BQUFaLEtBQUE0QyxFQUdBOEIsR0FBQTBFLGtCQUNBOU0sRUFBQXNFLE1BQUFaLEtBQUFrQyxHQUFBaUQsSUFBQSxTQUFBa0UsR0FBQS9NLEVBQUFzRSxPQUFBLE1BR0F0RSxFQUFBc0UsTUFBQXVFLElBQUEsU0FBQThELEdBQUEsTUFHQXZFLEVBQUE0RSxpQkFDQUgsRUFBQXZELE9BQ0F1RCxFQUFBbkMsS0FBQSxXQUNBdUMsR0FBQWpOLEVBQUFzRSxTQUdBMkksR0FBQWpOLEVBQUFzRSxRQUtBdUksRUFBQXZELE9BQUEsR0FDQTRELEdBQUFOLEVBQUFBLEVBQUFsSixLQUFBNkMsS0FJQSxJQUFBNEcsR0FBQW5OLEVBQUF3RixHQUNBNEgsRUFBQUQsRUFBQTVKLE1BQUFnQyxFQUdBNkgsSUFFQXpCLEdBQUF5QixFQUFBLEdBR0FWLElBQUEsRUFDQTFNLEVBQUFxTixXQUFBakYsRUFBQWtGLGNBQUFkLEdBQUFwRSxFQUFBa0YsWUFBQUMsS0FBQXBFLElBQ0FuSixFQUFBcU4sV0FBQWpGLEVBQUFvRixnQkFBQWhCLEdBQUFwRSxFQUFBb0YsYUFBQUQsS0FBQXBFLEtBT0EsUUFBQXNFLElBQUFDLEdBQ0EsR0FBQUMsR0FBQUMsR0FBQW5CLFNBQUE3SCxFQUVBOEksR0FDQUMsSUFDQXRGLEdBQUEsRUFBQSxZQUNBeUIsR0FBQSxFQUFBLFlBQ0E5SixFQUFBZ0csR0FBQTZILE9BQ0FELEdBQUFoSyxTQUFBZ0IsR0FDQTVFLEVBQUFxTixXQUFBakYsRUFBQTBGLGtCQUFBMUYsRUFBQTBGLGdCQUFBUCxLQUFBcEUsR0FBQXVFLEdBRUF0RixFQUFBMkYsa0JBQUFuRSxHQUFBbUUsa0JBQ0FuRSxHQUFBbUUsaUJBQUFDLGNBSUFMLElBQ0F0RixFQUFBWSxHQUFBUCxjQUFBLFlBQ0FvQixFQUFBYixHQUFBUCxjQUFBLFlBQ0ExSSxFQUFBZ0csR0FBQWlJLE9BQ0FMLEdBQUFuSyxZQUFBbUIsR0FDQTVFLEVBQUFxTixXQUFBakYsRUFBQTBGLGtCQUFBMUYsRUFBQTBGLGdCQUFBUCxLQUFBcEUsR0FBQXVFLEdBRUF0RixFQUFBMkYsa0JBQUFuRSxHQUFBbUUsa0JBQ0FuRSxHQUFBbUUsaUJBQUFHLFlBS0EsUUFBQUMsTUFDQSxPQUNBL0YsUUFBQUEsRUFDQWdHLFdBQ0FDLGFBQUFBLEdBQ0FDLGdCQUFBQSxHQUNBQyxjQUFBQSxHQUNBQyxTQUFBQSxHQUNBQyxhQUFBQSxHQUNBQyxzQkFBQUEsR0FDQUMsc0JBQUFBLEdBQ0FDLG1CQUFBQSxHQUNBckYsYUFBQUEsR0FDQXNGLFlBQUFBLEtBdUNBLFFBQUFDLE1BRUExRyxFQUFBaEYsT0FDQWdGLEVBQUFoRixLQUFBMkwsTUFHQTNHLEVBQUFPLFVBQUFQLEVBQUFPLFdBQUFQLEVBQUE0RyxPQUVBQyxLQUVBQyxLQUNBNUUsSUFBQSxHQUVBakMsRUFBQUQsRUFBQU0sY0FBQSxXQUdBLElBQUF5RyxHQUFBblAsRUFBQXdGLEdBQUE5QixLQUFBNkMsRUFHQTRJLEdBQUE3RixTQUFBLElBQUF0SixFQUFBd0YsR0FBQWpDLE1BQUFnQyxJQUFBLElBQUF2RixFQUFBd0YsR0FBQWpDLE1BQUFnQyxJQUFBLElBQUE0SixFQUFBNUwsVUFDQW9MLEdBQUFRLEdBR0FDLEtBR0FDLEtBRUEsYUFBQXBQLEVBQUFxUCxZQUNBQyxLQUVBN0gsR0FBQThILEdBQUEsT0FBQUQsSUFHQSxRQUFBRSxNQUNBL0gsR0FFQThILEdBQUEsU0FBQUUsSUFJQUYsR0FBQSxhQUFBRyxJQUdBQyxLQUFBQyxJQUdBQyxPQUFBQyxJQUVBcEksR0FFQXFJLFFBQUFDLElBR0FDLE1BQUFDLElBR0FYLEdBQUEsbUJBQUF4SixFQUFBLEtBQUFvSyxJQUdBWixHQUFBLG1CQUFBekksRUFBQXNKLElBRUFiLEdBQUEsUUFBQXRKLEVBQUFvSyxJQUdBdFEsRUFBQXVGLEdBQUFpSyxHQUFBLG1CQUFBdkksRUFBQXNKLElBTUFuSSxFQUFBb0ksdUJBQ0E3SSxHQUFBNkgsR0FBQSxhQUFBcEgsRUFBQW9JLHFCQUFBLFdBQ0F2RyxJQUFBLEtBR0F0QyxHQUFBNkgsR0FBQSxhQUFBcEgsRUFBQW9JLHFCQUFBLFdBQ0F2RyxJQUFBLE1BU0EsUUFBQXdHLElBQUFDLEdBQ0EsR0FBQUMsR0FBQSxNQUFBRCxFQUFBLFdBQ0E5RyxJQUFBOEcsR0FBQSxtQkFBQTdOLEdBQUE4TixHQUFBLEdBQUE5TixHQUFBOE4sR0FBQSxLQU1BLFFBQUExQixNQUNBLEdBQUEyQixHQUFBekgsR0FBQXpGLEtBQUEwRSxFQUFBeUksZ0JBR0F6SSxHQUFBakYsUUFBQW1HLFNBQ0FsQixFQUFBakYsUUFBQXlOLEVBQUFFLE9BQUEsaUJBQUFoUSxJQUFBLFdBQ0EsTUFBQWQsR0FBQXNFLE1BQUF5TSxLQUFBLFVBQUFDLGFBQ0FDLE9BSUE3SSxFQUFBOEksbUJBQUE1SCxTQUNBbEIsRUFBQThJLG1CQUFBTixFQUFBRSxPQUFBLGtCQUFBaFEsSUFBQSxXQUNBLE1BQUFkLEdBQUFzRSxNQUFBeU0sS0FBQSxXQUFBQyxhQUNBQyxPQU9BLFFBQUEvQixNQUNBL0YsR0FBQU4sS0FDQUUsT0FBQSxPQUNBdEksU0FBQSxhQUlBMEksR0FBQXZGLFNBQUFZLEdBQ0F4RSxFQUFBLFFBQUE0RCxTQUFBbUIsR0FHQTRILEdBQUFqRixHQUFBcUIsU0FFQUksR0FBQTFGLFlBQUFxQixHQUVBcU0sS0FHQW5SLEVBQUF1RixHQUFBbUYsS0FBQSxTQUFBbkgsR0FDQSxHQUFBNkksR0FBQXBNLEVBQUFzRSxNQUNBdUksRUFBQVQsRUFBQTFJLEtBQUE0QyxHQUNBOEssRUFBQXZFLEVBQUF2RCxNQUVBK0gsSUFBQWpGLEVBQUE3SSxHQUNBK04sR0FBQWxGLEVBQUE3SSxHQUdBNk4sRUFBQSxFQUNBdkMsR0FBQXpDLEVBQUFTLEVBQUF1RSxHQUVBaEosRUFBQTBFLGtCQUNBeUUsR0FBQW5GLEtBTUFoRSxFQUFBb0osZUFBQXBKLEVBQUFoRixNQUNBcEQsRUFBQW9JLEVBQUFvSixlQUFBQyxTQUFBN0QsSUFJQXhGLEVBQUFzSixZQUNBQyxLQUdBQyxLQUNBQyxLQUVBekosRUFBQXVCLGNBQUFDLEdBQUFELGNBQ0FDLEdBQUFELGFBQUFtSSxRQUdBMUosRUFBQTRFLGdCQUNBLGFBQUEvTSxFQUFBcVAsWUFDQXlDLEtBR0FySyxHQUFBOEgsR0FBQSxPQUFBdUMsS0FFQUMsS0FPQSxRQUFBbkQsSUFBQXpDLEVBQUFTLEVBQUF1RSxHQUNBLEdBQUFhLEdBQUEsSUFBQWIsRUFDQWMsRUFBQSxJQUFBZCxDQUVBdkUsR0FBQXNGLFFBQUEsZUFBQXpMLEVBQUEsUUFDQW1HLEVBQUF1RixTQUFBQyxLQUFBLGVBQUE3TCxFQUFBLFFBRUE0RixFQUFBMUksS0FBQWlELEdBQUFrQyxJQUFBLFFBQUFvSixFQUFBLEtBRUFiLEVBQUEsSUFDQWhKLEVBQUFrSyxlQUNBQyxHQUFBbkcsR0FHQWhFLEVBQUFvSyxrQkFDQUMsR0FBQXJHLEVBQUFnRixJQUlBdkUsRUFBQW5DLEtBQUEsU0FBQW5ILEdBQ0F2RCxFQUFBc0UsTUFBQXVFLElBQUEsUUFBQXFKLEVBQUEsS0FFQTlKLEVBQUEwRSxrQkFDQXlFLEdBQUF2UixFQUFBc0UsUUFJQSxJQUFBb08sR0FBQXRHLEVBQUExSSxLQUFBNkMsRUFJQW1NLEdBQUFwSixTQUFBLElBQUF0SixFQUFBd0YsR0FBQWpDLE1BQUFnQyxJQUFBLElBQUF2RixFQUFBd0YsR0FBQWpDLE1BQUFnQyxJQUFBLElBQUFtTixFQUFBblAsU0FDQW9MLEdBQUErRCxHQUVBN0YsRUFBQWxKLEdBQUEsR0FBQUMsU0FBQXFCLEdBT0EsUUFBQW9NLElBQUFqRixFQUFBN0ksR0FFQUEsR0FBQSxJQUFBdkQsRUFBQXdGLEdBQUE4RCxRQUNBOEMsRUFBQXhJLFNBQUFxQixHQUdBbUgsRUFBQXZELElBQUEsU0FBQThELEdBQUEsTUFFQXZFLEVBQUF1SyxZQUNBdkcsRUFBQXZELElBQUEsY0FBQVQsRUFBQXVLLFlBR0F2SyxFQUFBd0ssZUFDQXhHLEVBQUF2RCxJQUFBLGlCQUFBVCxFQUFBd0ssZUFHQSxtQkFBQXhLLEdBQUF5SyxjQUFBdFAsSUFDQTZJLEVBQUF2RCxJQUFBLG1CQUFBVCxFQUFBeUssY0FBQXRQLElBR0EsbUJBQUE2RSxHQUFBakYsUUFBQUksSUFDQTZJLEVBQUE1SSxLQUFBLGNBQUE0RSxFQUFBakYsUUFBQUksSUFPQSxRQUFBK04sSUFBQWxGLEVBQUE3SSxHQUNBLG1CQUFBNkUsR0FBQWpGLFFBQUFJLElBRUE2SSxFQUFBSyxTQUFBeEgsSUFDQTZOLEdBQUExSyxFQUFBakYsUUFBQUksR0FBQUEsR0FLQTZFLEVBQUEySyxNQUFBM0ssRUFBQWhGLE1BQUFwRCxFQUFBb0ksRUFBQTJLLE1BQUFDLFFBQUF2TyxHQUFBNkUsUUFDQXRKLEVBQUFvSSxFQUFBMkssTUFBQXRCLFNBQUE3RCxJQVFBLFFBQUF1RCxNQUNBaEksR0FBQXpGLEtBQUEwRSxFQUFBeUksaUJBQUFqTixTQUFBMEIsR0FDQTZELEdBQUF6RixLQUFBMEUsRUFBQTZLLGVBQUFyUCxTQUFBeUMsR0FNQSxRQUFBa00sSUFBQW5HLEdBQ0FBLEVBQUExSSxLQUFBK0MsR0FBQXlNLE1BQUEsZUFBQTlMLEVBQUEsdUJBQUFJLEVBQUEsWUFFQSxRQUFBWSxFQUFBK0ssb0JBQ0EvRyxFQUFBMUksS0FBQStELElBQUFvQixJQUFBLGVBQUEsdUNBQUFULEVBQUErSyxtQkFDQS9HLEVBQUExSSxLQUFBMkQsR0FBQXdCLElBQUEsZUFBQSxlQUFBVCxFQUFBK0ssa0JBQUEsNkJBR0EvSyxFQUFBZ0wsZ0JBQ0FoSCxFQUFBMUksS0FBQTJELEdBQUF3RyxPQU9BLFFBQUE4RCxNQUNBL0QsR0FBQXlGLE9BQUEsWUFBQXROLEVBQUEsb0JBQ0EsSUFBQXVOLEdBQUF0VCxFQUFBZ0csRUFFQXNOLEdBQUExUCxTQUFBLFdBQ0EsTUFBQXdFLEdBQUFtTCxrQkFBQXBOLEVBQUEsSUFBQWlDLEVBQUFvTCxtQkFBQXBMLEVBQUFvTCxvQkFHQSxLQUFBLEdBQUFDLEdBQUEsRUFBQUEsRUFBQXpULEVBQUF1RixHQUFBK0QsT0FBQW1LLElBQUEsQ0FDQSxHQUFBQyxHQUFBLEVBQ0F0TCxHQUFBakYsUUFBQW1HLFNBQ0FvSyxFQUFBdEwsRUFBQWpGLFFBQUFzUSxHQUdBLElBQUFFLEdBQUEsaUJBQUFELEVBQUEsc0JBR0FFLEVBQUF4TCxFQUFBOEksbUJBQUF1QyxFQUVBLG9CQUFBRyxJQUFBLEtBQUFBLElBQ0FELEdBQUEsZUFBQTFOLEVBQUEsSUFBQW1DLEVBQUFvTCxtQkFBQSxLQUFBSSxFQUFBLFVBR0FELEdBQUEsUUFFQUwsRUFBQTVQLEtBQUEsTUFBQTJQLE9BQUFNLEdBSUEzVCxFQUFBZ0csR0FBQTZDLElBQUEsYUFBQSxJQUFBN0ksRUFBQWdHLEdBQUErQyxTQUFBLEVBQUEsTUFHQS9JLEVBQUFnRyxHQUFBdEMsS0FBQSxNQUFBQyxHQUFBM0QsRUFBQXdGLEdBQUFqQyxNQUFBZ0MsSUFBQTdCLEtBQUEsS0FBQUUsU0FBQXFCLEdBTUEsUUFBQThNLE1BQ0EvUixFQUFBdUYsR0FBQW1GLEtBQUEsV0FDQSxHQUFBbUMsR0FBQTdNLEVBQUFzRSxNQUFBWixLQUFBNEMsRUFFQXVHLEdBQUF2RCxPQUNBdUQsRUFBQW5DLEtBQUEsV0FDQXVDLEdBQUFqTixFQUFBc0UsU0FHQTJJLEdBQUFqTixFQUFBc0UsU0FJQTBOLEtBTUEsUUFBQUosTUFDQXpJLEdBQUF6RixLQUFBLHFDQUFBZ0gsS0FBQSxXQUNBbUosR0FBQTdULEVBQUFzRSxNQUFBLG1CQU9BLFFBQUF1TixNQUNBMUksR0FBQXpGLEtBQUEsb0NBQUFnSCxLQUFBLFdBQ0FtSixHQUFBN1QsRUFBQXNFLE1BQUEsV0FPQSxRQUFBdVAsSUFBQXBMLEVBQUFxTCxHQUNBLEdBQUFDLEdBQUF0TCxFQUFBakYsS0FBQSxNQUNBaUYsR0FBQWpGLEtBQUEsTUFBQXVRLEVBQUFDLEdBQUFELEdBQUFELEdBUUEsUUFBQUUsSUFBQUMsR0FDQSxNQUFBLEtBQUFDLEtBQUFELEdBQUEsSUFBQSxJQU1BLFFBQUFqQyxNQUNBLEdBQUE1RixHQUFBcE0sRUFBQXdGLEVBRUE0RyxHQUFBeEksU0FBQXVCLEdBRUFpRCxFQUFBK0wsc0JBQUFDLGFBQ0FoTSxFQUFBK0wsc0JBQUFDLFlBQUFoSSxHQUVBb0MsR0FBQXBDLEdBQ0FpSSxHQUFBakksR0FFQXBNLEVBQUFxTixXQUFBakYsRUFBQS9FLFlBQUErRSxFQUFBL0UsVUFBQWtLLEtBQUFuQixFQUFBQSxFQUFBMkUsS0FBQSxVQUFBM0UsRUFBQTdJLE1BQUFnQyxHQUFBLEdBQ0F2RixFQUFBcU4sV0FBQWpGLEVBQUFnTSxjQUFBaE0sRUFBQWdNLFlBQUE3RyxLQUFBcEUsSUFRQSxRQUFBdUcsTUFDQSxHQUFBNEUsRUFFQSxLQUFBbE0sRUFBQU0sZUFBQU4sRUFBQU8sVUFBQSxDQUNBLEdBQUE0TCxHQUFBN00sR0FBQStCLFlBQ0ErSyxFQUFBQyxHQUFBRixHQUNBRyxFQUFBLEVBQ0FDLEVBQUFKLEVBQUE3TSxHQUFBcUIsU0FBQSxFQUNBNkwsRUFBQWhILEdBQUE3RSxTQUFBckIsR0FBQXFCLFdBQUF3TCxFQUNBM0QsRUFBQTNRLEVBQUE0VSxpQkFBQXRQLEVBR0EsSUFBQXFQLEVBQ0FGLEVBQUE5RCxFQUFBdEgsT0FBQSxNQUtBLEtBQUEsR0FBQW1LLEdBQUEsRUFBQUEsRUFBQTdDLEVBQUF0SCxTQUFBbUssRUFBQSxDQUNBLEdBQUFySCxHQUFBd0UsRUFBQTZDLEVBR0FySCxHQUFBMEksV0FBQUgsSUFFQUQsRUFBQWpCLEdBZ0JBLEdBWEFzQixHQUFBUCxLQUNBeFUsRUFBQXdGLEdBQUFpSCxTQUFBdEgsSUFDQW5GLEVBQUF3RixHQUFBNUIsU0FBQXVCLEdBQUE2UCxXQUFBdlIsWUFBQTBCLElBS0FtUCxFQUFBdFUsRUFBQTRRLEdBQUFqTixHQUFBK1EsSUFJQUosRUFBQTdILFNBQUF4SCxHQUFBLENBQ0FnUSxJQUFBLENBQ0EsSUFBQUMsR0FBQWxWLEVBQUF3RixHQUNBMlAsRUFBQUQsRUFBQTNSLE1BQUFnQyxHQUFBLEVBQ0E2UCxFQUFBQyxHQUFBZixHQUNBaFIsRUFBQWdSLEVBQUF2RCxLQUFBLFVBQ0EzRCxFQUFBa0gsRUFBQS9RLE1BQUFnQyxHQUFBLEVBQ0E0SixFQUFBbUYsRUFBQTVRLEtBQUE2QyxFQUVBLElBQUE0SSxFQUFBN0YsT0FDQSxHQUFBZ00sR0FBQW5HLEVBQUE0QixLQUFBLFVBQ0F3RSxFQUFBcEcsRUFBQTVMLE9BR0FpUyxNQUNBbEIsRUFBQTFRLFNBQUFxQixHQUFBK1AsV0FBQXZSLFlBQUF3QixHQUVBakYsRUFBQXFOLFdBQUFqRixFQUFBcU4sVUFBQXJOLEVBQUFxTixRQUFBbEksS0FBQTJILEVBQUFDLEVBQUEvSCxFQUFBZ0ksR0FDQXBWLEVBQUFxTixXQUFBakYsRUFBQS9FLFlBQUErRSxFQUFBL0UsVUFBQWtLLEtBQUErRyxFQUFBaFIsRUFBQThKLEdBRUFzSSxHQUFBUixHQUNBMUcsR0FBQThGLEdBQ0FELEdBQUFDLEdBRUF4QixHQUFBeFAsRUFBQThKLEVBQUEsR0FFQWhGLEVBQUFqRixRQUFBbUcsU0FFQXFNLEdBQUFyUyxHQUVBc1MsR0FBQUwsRUFBQUQsRUFBQWhTLEVBQUE4SixJQUlBeUksYUFBQUMsSUFDQUEsR0FBQUMsV0FBQSxXQUNBZCxJQUFBLEdBQ0EsS0FHQTdNLEVBQUE0TixlQUVBSCxhQUFBSSxJQUVBQSxHQUFBRixXQUFBLFdBRUFQLElBQUFwTixFQUFBNE4sZUFHQWhXLEVBQUF3RixHQUFBMFEsR0FBQTVCLEtBQ0E1SCxJQUFBLEdBRUFwQixHQUFBdEwsRUFBQXdGLElBRUFrSCxJQUFBLElBRUF0RSxFQUFBK04scUJBUUEsUUFBQXBCLElBQUFxQixHQUNBLEdBQUE1TSxHQUFBeEosRUFBQXdGLEdBQUEvRSxXQUFBK0ksSUFDQTZNLEVBQUE3TSxFQUFBOUIsR0FBQXFCLFFBRUEsT0FBQSxNQUFBcU4sRUFDQUMsR0FBQTNPLEdBQUErQixZQUFBL0IsR0FBQXFCLFNBRUFTLEdBQUE5QixHQUFBK0IsWUFNQSxRQUFBZ0wsSUFBQUYsR0FDQSxHQUFBNUosR0FBQTRKLEVBQUErQixHQUFBLE9BQUEsSUFPQSxPQUxBQSxJQUFBL0IsRUFHQWdDLEdBQUFoQyxFQUVBNUosRUFPQSxRQUFBNkwsSUFBQWpPLEVBQUFrTyxHQUNBLEdBQUFDLEdBQUFDLEVBQUFwTyxHQUFBLENBR0EsR0FBQXFPLEdBQUEsU0FBQXJPLEVBQUEsU0FBQSxNQUNBc08sRUFBQSxTQUFBdE8sRUFBQWdELEdBQUFOLEVBTUEsSUFKQXJCLEdBQUFrTixxQkFDQUQsRUFBQWpOLEdBQUFrTixtQkFBQUMsaUJBQUF4TyxFQUFBc08sSUFHQUosRUFBQW5OLE9BQUEsRUFBQSxDQUVBLElBQUFsQixFQUFBK0wsc0JBQUE2QyxXQUFBSixFQUFBSCxHQUdBLE9BQUEsQ0FGQUksU0FNQUEsTUFnQkEsUUFBQUksSUFBQXRVLEdBQ0EsR0FBQXVVLEdBQUF2VSxFQUFBd1UsY0FDQWhLLEVBQUFuTixFQUFBa1gsRUFBQUUsUUFBQXBFLFFBQUF6TixFQUdBLEtBQUE4UixHQUFBMVUsRUFBQXlVLFNBQUFFLEdBQUFKLEdBQUEsQ0FFQTlPLEVBQUFNLGVBRUEvRixFQUFBNFUsZ0JBR0EsSUFBQWQsR0FBQXJPLEVBQUErTCxzQkFBQXNDLFdBQUF0SixFQUVBLElBQUFxSSxLQUFBZ0MsR0FBQSxDQUNBLEdBQUFDLEdBQUFDLEdBQUFSLEVBRUFTLElBQUFGLEVBQUFHLEVBQ0FDLEdBQUFKLEVBQUFLLEVBR0EzSyxFQUFBekosS0FBQStDLEdBQUE2QyxRQUFBckYsRUFBQThULElBQUFDLEdBQUFILElBQUE1VCxFQUFBOFQsSUFBQUUsR0FBQU4sSUFHQTFULEVBQUE4VCxJQUFBQyxHQUFBSCxJQUFBblEsR0FBQXdRLGFBQUEsSUFBQTlQLEVBQUErUCxtQkFDQUgsR0FBQUgsR0FDQW5CLEdBQUFDLEVBQUF5QixPQUNBak0sR0FBQWdCLEdBR0F1SixHQUFBQyxFQUFBMEIsTUFDQS9MLEdBQUFhLElBT0EvRSxFQUFBTSxlQUdBekUsRUFBQThULElBQUFFLEdBQUFOLElBQUFqUSxHQUFBcUIsU0FBQSxJQUFBWCxFQUFBK1AsbUJBQ0FGLEdBQUFOLEdBQ0FuQixHQUFBLE9BQUFDLEdBQ0FrQixHQUFBTSxJQUNBekIsR0FBQSxLQUFBQyxNQWdCQSxRQUFBWSxJQUFBaUIsRUFBQUMsR0FDQUEsRUFBQUEsR0FBQSxDQUNBLElBQUFuRyxHQUFBcFMsRUFBQXNZLEdBQUFsRyxRQUVBLFVBQUFtRyxFQUFBblEsRUFBQW9RLG1DQUNBcEcsRUFBQThELEdBQUE5TixFQUFBb0ksd0JBRUErSCxHQUFBblEsRUFBQW9RLG1DQUdBbkIsR0FBQWpGLElBQUFtRyxHQVFBLFFBQUFqQixJQUFBSixHQUVBLE1BQUEsbUJBQUFBLEdBQUF1QixhQUFBLFNBQUF2QixFQUFBdUIsWUFNQSxRQUFBQyxJQUFBL1YsR0FDQSxHQUFBdVUsR0FBQXZVLEVBQUF3VSxhQU9BLElBSkEvTyxFQUFBNE4sY0FDQXBOLEdBQUErUCxPQUdBckIsR0FBQUosR0FBQSxDQUNBLEdBQUFPLEdBQUFDLEdBQUFSLEVBQ0FlLElBQUFSLEVBQUFHLEVBQ0FJLEdBQUFQLEVBQUFLLEdBT0EsUUFBQWMsSUFBQUMsRUFBQUMsR0FNQSxJQUFBLEdBTEFDLEdBQUEsRUFHQUMsRUFBQUgsRUFBQUksTUFBQWhWLEVBQUFpVixJQUFBTCxFQUFBdlAsT0FBQXdQLEVBQUEsSUFFQXJGLEVBQUEsRUFBQUEsRUFBQXVGLEVBQUExUCxPQUFBbUssSUFDQXNGLEdBQUFDLEVBQUF2RixFQUdBLE9BQUF4UCxHQUFBa1YsS0FBQUosRUFBQUQsR0FXQSxRQUFBTSxJQUFBbEMsR0FDQSxHQUFBbUMsSUFBQSxHQUFBQyxPQUFBQyxVQUNBQyxFQUFBeFosRUFBQW9GLEdBQUFxSCxTQUFBM0csRUFHQSxJQUFBc0MsRUFBQU0sZ0JBQUErUSxLQUFBRCxFQUFBLENBRUF0QyxFQUFBQSxHQUFBclUsRUFBQUYsS0FDQSxJQUFBMkYsR0FBQTRPLEVBQUF3QyxhQUFBeEMsRUFBQXlDLFNBQUF6QyxFQUFBMEMsT0FDQUMsRUFBQTVWLEVBQUFpVixLQUFBLEVBQUFqVixFQUFBNlYsSUFBQSxFQUFBeFIsSUFFQXlSLEVBQUEsbUJBQUE3QyxHQUFBOEMsYUFBQSxtQkFBQTlDLEdBQUErQyxPQUNBQyxFQUFBalcsRUFBQThULElBQUFiLEVBQUE4QyxhQUFBL1YsRUFBQThULElBQUFiLEVBQUF3QyxhQUFBelYsRUFBQThULElBQUFiLEVBQUErQyxRQUFBaFcsRUFBQThULElBQUFiLEVBQUF5QyxVQUFBSSxDQUdBSSxJQUFBN1EsT0FBQSxLQUNBNlEsR0FBQUMsUUFJQUQsR0FBQTlaLEtBQUE0RCxFQUFBOFQsSUFBQXpQLElBR0FGLEVBQUFPLFlBQ0F1TyxFQUFBSyxlQUFBTCxFQUFBSyxpQkFBQUwsRUFBQW1ELGFBQUEsRUFHQSxJQUFBbE4sR0FBQW5OLEVBQUF3RixHQUNBaVIsRUFBQXJPLEVBQUErTCxzQkFBQXNDLFdBQUF0SixHQUdBbU4sRUFBQWpCLEVBQUFrQixFQVVBLElBVEFBLEdBQUFsQixFQUlBaUIsRUFBQSxNQUVBSCxPQUdBM0UsR0FBQSxDQUNBLEdBQUFnRixHQUFBNUIsR0FBQXVCLEdBQUEsSUFDQU0sRUFBQTdCLEdBQUF1QixHQUFBLElBQ0FPLEVBQUFGLEdBQUFDLENBR0FDLElBQUFSLElBRUFMLEVBQUEsRUFDQXJELEdBQUEsT0FBQUMsR0FJQUQsR0FBQSxLQUFBQyxJQUtBLE9BQUEsRUFHQXJPLEVBQUE0TixjQUVBcE4sR0FBQStQLE9BUUEsUUFBQXRNLElBQUExQixFQUFBeUIsR0FDQSxHQUFBZSxHQUFBLG1CQUFBZixHQUFBcE0sRUFBQXdGLEdBQUE0RyxFQUNBUyxFQUFBTSxFQUFBekosS0FBQStDLEdBQ0EySyxFQUFBdkUsRUFBQW5KLEtBQUE0QyxHQUFBZ0QsTUFHQSxPQUFBdUQsRUFBQXZELFFBQUFrTyxJQUFBcEcsRUFBQSxHQUFBLENBSUEsR0FBQXVKLEdBQUE5TixFQUFBbkosS0FBQTZDLEdBQ0F5RixFQUFBLElBU0EsSUFOQUEsRUFEQSxTQUFBckIsRUFDQWdRLEVBQUF6UCxLQUFBNUUsR0FFQXFVLEVBQUFuUCxLQUFBbEYsSUFJQTBGLEVBQUExQyxPQUFBLENBRUEsSUFBQWxCLEVBQUFnTCxlQUFBLE1BR0FwSCxHQURBLFNBQUFyQixFQUNBZ1EsRUFBQTNGLFNBQUEsU0FFQTJGLEVBQUEzRixTQUFBLFVBSUF3QyxJQUFBLEVBRUF0SyxHQUFBTCxFQUFBYixFQUFBckIsSUFPQSxRQUFBaUUsTUFDQTVPLEVBQUF1RyxHQUFBbUUsS0FBQSxXQUNBaUUsR0FBQTNPLEVBQUFzRSxNQUFBLGNBU0EsUUFBQXNXLElBQUFuUyxHQUNBLEdBQUFvUyxHQUFBcFMsRUFBQWhJLFdBR0FBLEVBQUFvYSxFQUFBclIsSUFDQXNSLEVBQUFELEVBQUFyUixJQUFBK00sR0FDQXdFLEVBQUF0YSxFQUFBa00sR0FBQWxFLEVBQUF1UyxjQUNBQyxFQUFBN1MsRUFBQTZTLHNCQXVCQSxPQXBCQXhTLEdBQUF1UyxjQUFBck8sSUFFQW1PLEdBQUFHLElBQUEsV0FBQUEsSUFDQXhhLEVBQUFzYSxJQUtBRCxHQUFBcE8sSUFBQWpFLEVBQUF5TixHQUFBLGtCQUVBelYsRUFBQXNhLEdBU0F4RSxHQUFBOVYsRUFDQUEsRUFNQSxRQUFBNkssSUFBQTdDLEVBQUF5UyxFQUFBQyxHQUNBLEdBQUEsbUJBQUExUyxHQUFBLENBRUEsR0FBQTJTLEdBQUFSLEdBQUFuUyxHQUdBNFMsR0FDQTVTLFFBQUFBLEVBQ0F5UyxTQUFBQSxFQUNBQyxhQUFBQSxFQUNBQyxLQUFBQSxFQUNBaEcsVUFBQUMsR0FBQTVNLEdBQ0FuRixXQUFBbUYsRUFBQXNJLEtBQUEsVUFDQTNELGFBQUEzRSxFQUFBbEYsTUFBQWdDLEdBQ0E0SixZQUFBMUcsRUFBQS9FLEtBQUE2QyxHQUNBNEcsY0FBQW5OLEVBQUF3RixHQUNBMFAsZUFBQWxWLEVBQUF3RixHQUFBakMsTUFBQWdDLEdBQUEsRUFJQStWLGdCQUFBNU8sR0FJQSxNQUFBMk8sRUFBQWxPLGNBQUErSSxHQUFBek4sS0FBQWlFLElBQUF0RSxFQUFBTyxXQUFBakIsR0FBQStCLGNBQUE0UixFQUFBRCxPQUFBM1MsRUFBQWdFLFNBQUE1RyxJQUFBLENBRUEsR0FBQXdWLEVBQUFsTSxZQUFBN0YsT0FDQSxHQUFBZ00sR0FBQStGLEVBQUFsTSxZQUFBNEIsS0FBQSxVQUNBd0UsRUFBQThGLEVBQUFsTSxZQUFBNUwsT0FJQTZFLEdBQUFNLGVBQUFOLEVBQUFnRCxvQkFBQSxtQkFBQWlRLEdBQUEsZ0JBQ0FBLEVBQUFGLGNBQUEsTUFBQUUsRUFBQWpHLFdBQ0FpRyxFQUFBRixjQUFBLFFBQUFFLEVBQUFqRyxhQUVBaUcsRUFBQUUsR0FBQUYsSUFJQXJiLEVBQUFxTixXQUFBakYsRUFBQXFOLFdBQUE0RixFQUFBQyxpQkFDQWxULEVBQUFxTixRQUFBbEksS0FBQThOLEVBQUFsTyxjQUFBa08sRUFBQW5HLGVBQUFtRyxFQUFBak8sYUFBQSxFQUFBaU8sRUFBQWpHLGNBQUEsSUFLQU0sR0FBQTJGLEVBQUFsTyxlQUVBMUUsRUFBQTdFLFNBQUFxQixHQUFBK1AsV0FBQXZSLFlBQUF3QixHQUNBdUosR0FBQS9GLEdBQ0FMLEVBQUErTCxzQkFBQXNCLFVBS0FELElBQUEsRUFFQUksR0FBQUwsRUFBQUQsRUFBQStGLEVBQUEvWCxXQUFBK1gsRUFBQWpPLGNBRUFvTyxHQUFBSCxHQUdBMUYsR0FBQTBGLEVBQUEvWCxXQUdBd1AsR0FBQXVJLEVBQUEvWCxXQUFBK1gsRUFBQWpPLGlCQU1BLFFBQUFvTyxJQUFBSCxHQUVBLEdBQUFqVCxFQUFBaEYsTUFBQWdGLEVBQUFNLGdCQUFBTixFQUFBTyxVQUFBLENBQ0EsR0FBQThTLEdBQUEscUJBQUFKLEVBQUFELEtBQUEsVUFDQU0sSUFBQUQsR0FBQSxHQUlBclQsRUFBQTJELGVBQ0E0UCxHQUFBNUYsV0FBQSxXQUNBNkYsR0FBQVAsSUFDQWpULEVBQUEyRCxnQkFFQTZQLEdBQUFQLE9BS0EsQ0FDQSxHQUFBUSxHQUFBQyxHQUFBVCxFQUVBcmIsR0FBQTZiLEVBQUFwVCxTQUFBc1QsUUFDQUYsRUFBQXpULFFBQ0FBLEVBQUEyRCxlQUFBM0QsRUFBQTRULFFBQUFDLFVBQUFDLEtBQUEsV0FDQTlULEVBQUFPLFVBUUFvTixXQUFBLFdBQ0E2RixHQUFBUCxJQUNBLElBRUFPLEdBQUFQLE1BU0EsUUFBQVMsSUFBQVQsR0FDQSxHQUFBYyxLQVVBLE9BUkEvVCxHQUFBTSxnQkFBQU4sRUFBQU8sV0FDQXdULEVBQUEvVCxTQUFBb0IsS0FBQTZSLEVBQUFELE1BQ0FlLEVBQUExVCxRQUFBaEUsSUFFQTBYLEVBQUEvVCxTQUFBcUIsVUFBQTRSLEVBQUFELE1BQ0FlLEVBQUExVCxRQUFBLGNBR0EwVCxFQU1BLFFBQUFaLElBQUFGLEdBd0JBLE1BdEJBQSxHQUFBRixhQU1BbmIsRUFBQXdGLEdBQUE0VyxPQUFBZixFQUFBbE8sY0FBQWtQLFFBQUE5VyxJQUpBdkYsRUFBQXdGLEdBQUEwTixNQUFBbUksRUFBQWxPLGNBQUFtUCxRQUFBL1csR0FBQTBMLE1BQUFzTCxXQVFBaFQsR0FBQXZKLEVBQUF3RixHQUFBL0UsV0FBQStJLEtBR0FvRixLQUdBeU0sRUFBQW1CLG1CQUFBbkIsRUFBQWxPLGNBR0FrTyxFQUFBRCxLQUFBQyxFQUFBNVMsUUFBQWhJLFdBQUErSSxJQUNBNlIsRUFBQWpHLFVBQUFDLEdBQUFnRyxFQUFBNVMsU0FFQTRTLEVBTUEsUUFBQW9CLElBQUFwQixHQUdBQSxFQUFBbUIsb0JBQUFuQixFQUFBbUIsbUJBQUFsVCxTQUlBK1IsRUFBQUYsYUFDQW5iLEVBQUF5RixHQUFBMlcsT0FBQWYsRUFBQW1CLG9CQUdBeGMsRUFBQTBGLEdBQUF3TixNQUFBbUksRUFBQW1CLG9CQUdBalQsR0FBQXZKLEVBQUF3RixHQUFBL0UsV0FBQStJLEtBR0FvRixNQU9BLFFBQUFnTixJQUFBUCxHQUNBb0IsR0FBQXBCLEdBR0FyYixFQUFBcU4sV0FBQWpGLEVBQUEvRSxhQUFBZ1ksRUFBQUMsaUJBQUFsVCxFQUFBL0UsVUFBQWtLLEtBQUE4TixFQUFBNVMsUUFBQTRTLEVBQUEvWCxXQUFBK1gsRUFBQWpPLGFBQUEsR0FDQWhGLEVBQUErTCxzQkFBQTlRLFlBRUErRSxFQUFBc1UsY0FBQTlTLEdBQUE4UyxjQUNBOVMsR0FBQThTLGFBQUE1SyxNQUFBdUosR0FHQWhILEdBQUFnSCxFQUFBNVMsU0FDQTRTLEVBQUE1UyxRQUFBN0UsU0FBQXVCLEdBQUE2UCxXQUFBdlIsWUFBQTBCLEdBRUFxUSxJQUFBLEVBRUF4VixFQUFBcU4sV0FBQWdPLEVBQUFILFdBQUFHLEVBQUFILFNBQUEzTixLQUFBakosTUFNQSxRQUFBa0ssSUFBQXhDLEdBQ0EsR0FBQUEsR0FBQTJRLEdBQUEzUSxFQUVBQSxHQUFBdEksS0FBQSxzRUFBQWdILEtBQUEsV0FDQTFLLEVBQUFzRSxNQUFBZCxLQUFBLE1BQUF4RCxFQUFBc0UsTUFBQXlNLEtBQUEsUUFDQS9RLEVBQUFzRSxNQUFBc1ksV0FBQSxZQUVBNWMsRUFBQXNFLE1BQUE0UixHQUFBLFdBQ0FsVyxFQUFBc0UsTUFBQTBPLFFBQUEsU0FBQS9CLElBQUEsR0FBQTRMLFNBUUEsUUFBQXhJLElBQUFySSxHQUNBLEdBQUFBLEdBQUEyUSxHQUFBM1EsRUFHQUEsR0FBQXRJLEtBQUEsZ0JBQUFnSCxLQUFBLFdBQ0EsR0FBQWpDLEdBQUF6SSxFQUFBc0UsTUFBQTJNLElBQUEsRUFFQXhJLEdBQUFxVSxhQUFBLGtCQUFBLGtCQUFBclUsR0FBQXNVLE1BQ0F0VSxFQUFBc1UsU0FLQS9RLEVBQUF0SSxLQUFBLHFDQUFBZ0gsS0FBQSxXQUNBLEdBQUFqQyxHQUFBekksRUFBQXNFLE1BQUEyTSxJQUFBLEVBRUF4SSxHQUFBcVUsYUFBQSxrQkFDQUUsR0FBQXZVLEdBSUFBLEVBQUF3VSxPQUFBLFdBQ0F4VSxFQUFBcVUsYUFBQSxrQkFDQUUsR0FBQXZVLE1BU0EsUUFBQXVVLElBQUF2VSxHQUNBQSxFQUFBeVUsY0FBQUMsWUFBQSxtREFBQSxLQU1BLFFBQUF6SCxJQUFBMUosR0FDQSxHQUFBQSxHQUFBMlEsR0FBQTNRLEVBR0FBLEdBQUF0SSxLQUFBLGdCQUFBZ0gsS0FBQSxXQUNBLEdBQUFqQyxHQUFBekksRUFBQXNFLE1BQUEyTSxJQUFBLEVBRUF4SSxHQUFBcVUsYUFBQSxxQkFBQSxrQkFBQXJVLEdBQUEyVSxPQUNBM1UsRUFBQTJVLFVBS0FwUixFQUFBdEksS0FBQSxxQ0FBQWdILEtBQUEsV0FDQSxHQUFBakMsR0FBQXpJLEVBQUFzRSxNQUFBMk0sSUFBQSxFQUVBLHlCQUFBaUQsS0FBQWxVLEVBQUFzRSxNQUFBZCxLQUFBLFVBQUFpRixFQUFBcVUsYUFBQSxxQkFDQTljLEVBQUFzRSxNQUFBMk0sSUFBQSxHQUFBaU0sY0FBQUMsWUFBQSxvREFBQSxPQVFBLFFBQUFSLElBQUEzUSxHQUNBLEdBQUFxUixHQUFBclIsRUFBQXRJLEtBQUE2QyxFQUtBLE9BSkE4VyxHQUFBL1QsU0FDQTBDLEVBQUFoTSxFQUFBcWQsSUFHQXJSLEVBTUEsUUFBQXVELE1BRUEsR0FBQWpILEdBQUF6RixFQUFBeWEsU0FBQUMsS0FBQS9TLFFBQUEsSUFBQSxJQUFBQyxNQUFBLEtBQ0EyQixFQUFBb1IsbUJBQUFsVixFQUFBLElBQ0ErVSxFQUFBRyxtQkFBQWxWLEVBQUEsR0FFQThELEtBQ0FoRSxFQUFBcVYsY0FDQXZSLEdBQUFFLEVBQUFpUixHQUVBMVIsR0FBQVMsRUFBQWlSLElBU0EsUUFBQTFOLE1BQ0EsSUFBQXNGLEtBQUE3TSxFQUFBNEIsWUFBQSxDQUNBLEdBQUExQixHQUFBekYsRUFBQXlhLFNBQUFDLEtBQUEvUyxRQUFBLElBQUEsSUFBQUMsTUFBQSxLQUNBMkIsRUFBQW9SLG1CQUFBbFYsRUFBQSxJQUNBK1UsRUFBQUcsbUJBQUFsVixFQUFBLElBR0FvVixFQUFBLG1CQUFBL0gsSUFDQWdJLEVBQUEsbUJBQUFoSSxLQUFBLG1CQUFBMEgsS0FBQTdGLEVBR0FwTCxHQUFBOUMsU0FJQThDLEdBQUFBLElBQUF1SixLQUFBK0gsR0FBQUMsSUFBQW5HLElBQUFvRyxJQUFBUCxJQUNBblIsR0FBQUUsRUFBQWlSLElBT0EsUUFBQXBOLElBQUFpSCxHQUVBckIsYUFBQWdJLEdBRUEsSUFBQUMsR0FBQTlkLEVBQUEsU0FFQSxLQUFBOGQsRUFBQTVILEdBQUEsY0FBQTRILEVBQUE1SCxHQUFBLFdBQUE0SCxFQUFBNUgsR0FBQSxXQUNBLFNBQUE0SCxFQUFBdGEsS0FBQSxvQkFBQSxLQUFBc2EsRUFBQXRhLEtBQUEsb0JBQ0E0RSxFQUFBNEMsbUJBQUE1QyxFQUFBTSxjQUFBLENBQ0EsR0FBQXFWLEdBQUE3RyxFQUFBOEcsTUFHQUMsR0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBLEdBQ0FqZSxHQUFBa2UsUUFBQUgsRUFBQUUsSUFBQSxHQUNBL0csRUFBQUssaUJBR0FrQyxHQUFBdkMsRUFBQWlILFFBRUFOLEdBQUE5SCxXQUFBLFdBQ0FxSSxHQUFBbEgsSUFDQSxNQUlBLFFBQUE1RyxNQUNBdFEsRUFBQXNFLE1BQUE0RyxPQUFBbVQsUUFBQSxTQUlBLFFBQUFsTyxJQUFBK0csR0FDQW9ILEtBQ0E3RSxHQUFBdkMsRUFBQWlILFNBS0EsUUFBQUksSUFBQXJILEdBRUEsR0FBQUEsRUFBQThHLFFBQ0FRLEdBQUF0SCxFQUFBdUgsTUFDQXRWLEdBQUFxRyxHQUFBLFlBQUFrUCxLQUtBLFFBQUFDLElBQUF6SCxHQUVBLEdBQUFBLEVBQUE4RyxPQUNBN1UsR0FBQXlWLElBQUEsYUFLQSxRQUFBck8sTUFDQSxHQUFBbkUsR0FBQXBNLEVBQUFzRSxNQUFBME8sUUFBQXpOLEVBRUF2RixHQUFBc0UsTUFBQW1JLFNBQUF2RixHQUNBd1AsR0FBQUMsRUFBQTBCLE1BQ0EvTCxHQUFBRixHQUdBc0ssR0FBQUMsRUFBQXlCLE9BQ0FqTSxHQUFBQyxHQU1BLFFBQUF5RCxNQUNBeU8sSUFBQSxFQUNBN0UsSUFBQSxFQUlBLFFBQUFySixJQUFBOEcsR0FDQUEsRUFBQUssZ0JBQ0EsSUFBQWhVLEdBQUF2RCxFQUFBc0UsTUFBQThOLFNBQUE3TyxPQUNBK0gsSUFBQXRMLEVBQUF1RixHQUFBNUIsR0FBQUosSUFJQSxRQUFBOE0sSUFBQTZHLEdBQ0FBLEVBQUFLLGdCQUNBLElBQUExSyxHQUFBN00sRUFBQXNFLE1BQUEwTyxRQUFBek4sR0FBQTdCLEtBQUErQyxHQUNBdUYsRUFBQWEsRUFBQW5KLEtBQUE0QyxHQUFBM0MsR0FBQTNELEVBQUFzRSxNQUFBME8sUUFBQSxNQUFBelAsUUFFQTJKLElBQUFMLEVBQUFiLEdBTUEsUUFBQW9TLElBQUFsSCxHQUNBLEdBQUEySCxHQUFBM0gsRUFBQTRILFFBRUEsUUFBQTVILEVBQUE4RyxPQUVBLElBQUEsSUFDQSxJQUFBLElBQ0F0SCxHQUFBcUksRUFBQUMsSUFDQS9ULElBRUEsTUFHQSxLQUFBLElBQ0EsR0FBQTRULEdBQUFuSSxHQUFBcUksRUFBQUMsR0FBQSxDQUNBL1QsSUFDQSxPQUVBLElBQUEsSUFDQSxJQUFBLElBQ0F5TCxHQUFBcUksRUFBQUUsTUFDQTFULElBRUEsTUFHQSxLQUFBLElBQ0FtTCxHQUFBcUksRUFBQUMsSUFDQWxULEdBQUEsRUFFQSxNQUdBLEtBQUEsSUFDQTRLLEdBQUFxSSxFQUFBRSxNQUNBblQsR0FBQTlMLEVBQUF1RixHQUFBK0QsT0FFQSxNQUdBLEtBQUEsSUFDQW9OLEdBQUFxSSxFQUFBMUcsTUFDQS9MLElBRUEsTUFHQSxLQUFBLElBQ0FvSyxHQUFBcUksRUFBQTNHLE9BQ0FqTSxJQUVBLE1BRUEsU0FDQSxRQVNBLFFBQUF1UyxJQUFBeEgsR0FDQTFCLEtBRUEwQixFQUFBdUgsTUFBQUQsSUFBQTlILEdBQUFDLEVBQUFxSSxHQUNBL1QsS0FJQWlNLEVBQUF1SCxNQUFBRCxJQUFBOUgsR0FBQUMsRUFBQXNJLE1BQ0ExVCxNQUdBaVQsR0FBQXRILEVBQUF1SCxNQU1BLFFBQUF2UixJQUFBTCxFQUFBYixFQUFBckIsR0FDQSxHQUFBeUIsR0FBQVMsRUFBQW1HLFFBQUF6TixHQUNBOFYsR0FDQXhPLE9BQUFBLEVBQ0FiLFFBQUFBLEVBQ0FyQixVQUFBQSxFQUNBdVUsV0FBQWxULEVBQUF2TCxXQUNBOFUsV0FBQXZKLEVBQUF6SSxRQUNBNkksUUFBQUEsRUFDQWdCLGFBQUFoQixFQUFBN0ksTUFBQWdDLEdBQ0FqQyxXQUFBOEksRUFBQTJFLEtBQUEsVUFDQW9PLFVBQUEvUyxFQUFBMUksS0FBQW9ELEdBQ0ErRSxZQUFBdVQsR0FBQXBULEdBQ0FxVCxVQUFBalQsRUFBQTFJLEtBQUE2QyxHQUNBK1ksZUFBQWxULEVBQUExSSxLQUFBNkMsR0FBQWhELFFBSUErWCxnQkFBQTVPLEdBVUEsT0FSQTJPLEdBQUFrRSxVQUFBbFIsR0FBQWdOLEVBQUFpRSxlQUFBakUsRUFBQTlGLFlBR0E4RixFQUFBQyxrQkFFQTlGLElBQUEsR0FHQXBOLEVBQUFvWCxlQUdBbkUsRUFBQUMsaUJBQUEsU0FBQUQsRUFBQWtFLFdBQ0F2ZixFQUFBcU4sV0FBQWpGLEVBQUFvWCxlQUNBcFgsRUFBQW9YLGFBQUFqUyxLQUFBOE4sRUFBQWdFLFVBQUFoRSxFQUFBL1gsV0FBQStYLEVBQUFqTyxhQUFBLEVBQUFpTyxFQUFBaUUsZUFBQWpFLEVBQUFrRSxVQUFBbEUsRUFBQTlGLGVBQUEsT0FDQWlDLElBQUEsSUFNQTlCLEdBQUEyRixFQUFBZ0UsV0FFQXJULEVBQUFwSSxTQUFBcUIsR0FBQStQLFdBQUF2UixZQUFBd0IsR0FDQW9XLEVBQUFDLGlCQUNBOU0sR0FBQXhDLElBR0E1RCxFQUFBZ0wsZ0JBQUFoTCxFQUFBa0ssZ0JBRUFsRyxFQUFBMUksS0FBQTJELEdBQUFvWSxPQUFBLElBQUFwRSxFQUFBOUYsWUFHQW5KLEVBQUExSSxLQUFBK0QsSUFBQWdZLFFBQUF6VCxFQUFBa0ssR0FBQSxpQkFJQTlKLEVBQUFLLFNBQUF4SCxJQUNBMlEsR0FBQXlGLEVBQUE5RixXQUFBOEYsRUFBQXhQLFlBQUF3UCxFQUFBL1gsV0FBQStYLEVBQUFqTyxjQUdBeEQsR0FBQThWLHNCQUNBOVYsR0FBQThWLHFCQUFBNU4sTUFBQXVKLEdBR0EzTSxHQUFBN0IsRUFBQXdPLEdBQUEsUUFFQWpULEVBQUF1WCxtQkFBQS9WLEdBQUErVixtQkFDQS9WLEdBQUErVixrQkFBQTdOLE1BQUF1SixLQUtBLFFBQUF1RSxJQUFBdkUsR0FDQXpSLEdBQUE4VixzQkFDQTlWLEdBQUE4VixxQkFBQUUsZ0JBQUF2RSxHQUVBd0UsR0FBQXhFLEVBQUE4RCxVQUFBOUQsRUFBQTlGLFlBR0E4RixFQUFBQyxrQkFDQXRiLEVBQUFxTixXQUFBakYsRUFBQTBYLGlCQUFBMVgsRUFBQTBYLGVBQUF2UyxLQUFBOE4sRUFBQXJQLFFBQUFxUCxFQUFBL1gsV0FBQStYLEVBQUFqTyxhQUFBLEVBQUFpTyxFQUFBeFAsWUFBQXdQLEVBQUE5RixZQUlBQyxJQUFBLEdBR0FuQixHQUFBZ0gsRUFBQXJQLFNBR0F3TCxJQUFBLEVBRUE1TixHQUFBK1YsbUJBQ0EvVixHQUFBK1Ysa0JBQUE3TixNQUFBdUosR0FTQSxRQUFBM00sSUFBQTdCLEVBQUF3TyxFQUFBMEUsR0FDQSxHQUFBYixHQUFBN0QsRUFBQTZELFVBRUEsSUFBQTlXLEVBQUFoRixLQUFBLENBQ0EsR0FBQXFZLEdBQUEsZ0JBQUF4WCxFQUFBK2IsTUFBQWQsRUFBQTdHLE1BQUEsZUFFQTVKLElBQUE1QixFQUFBbkosS0FBQWlELElBQUFrQyxJQUFBMEYsR0FBQWtOLElBRUF3RSxHQUFBbEssV0FBQSxXQUNBZ0ssR0FBQUgsR0FBQXZFLElBQ0FqVCxFQUFBMkQsZUFBQTNELEVBQUE0VCxZQUVBblAsR0FBQWtQLFNBQ0FtRSxXQUFBamMsRUFBQStiLE1BQUFkLEVBQUE3RyxPQUNBalEsRUFBQTJELGVBQUEzRCxFQUFBNFQsT0FBQSxXQUVBK0QsR0FBQUgsR0FBQXZFLEtBUUEsUUFBQXdFLElBQUFWLEVBQUE1SixHQUNBNEosRUFBQXpiLEtBQUF3QixHQUFBekIsWUFBQXdCLEdBQ0FrYSxFQUFBemIsS0FBQSxNQUFBQyxHQUFBNFIsR0FBQTdSLEtBQUEsS0FBQUUsU0FBQXFCLEdBTUEsUUFBQThLLE1BS0EsR0FIQVgsS0FHQStRLEdBQUEsQ0FDQSxHQUFBckMsR0FBQTlkLEVBQUFDLEVBQUE2ZCxjQUdBLEtBQUFBLEVBQUE1SCxHQUFBLGNBQUE0SCxFQUFBNUgsR0FBQSxXQUFBNEgsRUFBQTVILEdBQUEsVUFBQSxDQUNBLEdBQUFrSyxHQUFBMVksR0FBQXFCLFFBR0E5RSxHQUFBOFQsSUFBQXFJLEVBQUFDLElBQUEsR0FBQXBjLEVBQUFpVixJQUFBbUgsR0FBQUQsR0FBQSxNQUNBN1QsSUFBQSxHQUNBOFQsR0FBQUQsUUFNQXZLLGNBQUF5SyxJQUVBQSxHQUFBdkssV0FBQSxXQUNBeEosSUFBQSxJQUNBLEtBUUEsUUFBQTZDLE1BQ0EsR0FBQW1SLEdBQUFuWSxFQUFBZ0gsWUFBQWhILEVBQUFvWSxnQkFDQUMsRUFBQXJZLEVBQUFzWSxpQkFHQUMsRUFBQUosR0FBQTdZLEdBQUF3USxhQUFBcUksRUFDQUssRUFBQUgsR0FBQS9ZLEdBQUFxQixTQUFBMFgsQ0FFQUYsSUFBQUUsRUFDQWhULEdBQUFrVCxHQUFBQyxHQUVBTCxFQUNBOVMsR0FBQWtULEdBRUFGLEdBQ0FoVCxHQUFBbVQsR0FPQSxRQUFBblMsSUFBQWhHLEdBQ0EsR0FBQW9ZLEdBQUEsT0FBQXpZLEVBQUEyRCxlQUFBLE1BQUEzRCxFQUFBMFksVUFHQSxPQURBclksR0FBQWhGLFlBQUFvQixHQUNBNEQsRUFBQUksS0FDQWtZLHFCQUFBRixFQUNBQSxXQUFBQSxJQU9BLFFBQUF2UyxJQUFBN0YsR0FDQSxNQUFBQSxHQUFBN0UsU0FBQWlCLEdBTUEsUUFBQW1jLElBQUFDLEVBQUE3VCxHQUNBaEYsRUFBQXNKLGFBQ0ExUixFQUFBZ0csR0FBQXRDLEtBQUF3QixHQUFBekIsWUFBQXdCLEdBQ0FnYyxFQUNBamhCLEVBQUFnRyxHQUFBdEMsS0FBQSxZQUFBdWQsRUFBQSxNQUFBcmQsU0FBQXFCLEdBRUFqRixFQUFBZ0csR0FBQXRDLEtBQUEsTUFBQUMsR0FBQXlKLEdBQUExSixLQUFBLEtBQUFFLFNBQUFxQixJQVFBLFFBQUFpYyxJQUFBRCxHQUNBN1ksRUFBQTJLLE9BQ0EvUyxFQUFBb0ksRUFBQTJLLE1BQUFyUCxLQUFBd0IsR0FBQXpCLFlBQUF3QixHQUNBakYsRUFBQW9JLEVBQUEySyxNQUFBclAsS0FBQSxxQkFBQXVkLEVBQUEsTUFBQXJkLFNBQUFxQixJQU9BLFFBQUE2TixJQUFBcU8sRUFBQTVkLEdBQ0EyZCxHQUFBQyxHQUNBSCxHQUFBRyxFQUFBNWQsR0FPQSxRQUFBOFIsSUFBQXJKLEdBQ0EsR0FBQW9WLEdBQUFwaEIsRUFBQXdGLEdBQUFqQyxNQUFBZ0MsR0FDQThiLEVBQUFyVixFQUFBekksTUFBQWdDLEVBQ0EsT0FBQTZiLElBQUFDLEVBQ0EsT0FFQUQsRUFBQUMsRUFDQSxLQUVBLE9BT0EsUUFBQWhULElBQUErUyxFQUFBQyxHQUNBLE1BQUFELElBQUFDLEVBQ0EsT0FFQUQsRUFBQUMsRUFDQSxPQUVBLFFBU0EsUUFBQXBVLElBQUF4RSxHQUVBLElBQUFBLEVBQUFnRSxTQUFBLGVBQUEsQ0FHQWhFLEVBQUFJLElBQUEsV0FBQSxTQUVBLElBS0F5WSxHQUxBbk4sRUFBQS9MLEVBQUErTCxzQkFDQTlCLEVBQUE4QixFQUFBb04sY0FFQW5WLEVBQUEzRCxFQUFBdUssUUFBQXpOLEdBQ0FrUixFQUFBdEMsRUFBQXNDLFdBQUFoTyxFQUlBZ08sR0FBQW5OLE9BQ0FnWSxFQUFBbk4sRUFBQXFOLGFBQUEvWSxJQUVBNlksRUFBQTdZLEVBQUF3SSxJQUFBLEdBQUF1USxhQUNBcFosRUFBQTBFLG1CQUNBd1UsRUFBQTdZLEVBQUEvRSxLQUFBa0MsR0FBQXFMLElBQUEsR0FBQXVRLGNBSUEsSUFBQUEsR0FBQTdVLEdBQUE4VSxTQUFBclYsRUFBQXZELElBQUEsbUJBQUE0WSxTQUFBclYsRUFBQXZELElBQUEsZUFHQXlZLEdBQUFFLEVBRUEvSyxFQUFBbk4sT0FDQTZLLEVBQUF0SyxPQUFBcEIsRUFBQStZLElBSUFwWixFQUFBMEUsaUJBQ0FyRSxFQUFBL0UsS0FBQWtDLEdBQUE4YixVQUFBclAsR0FFQTVKLEVBQUFpWixVQUFBclAsR0FFQThCLEVBQUF3TixPQUFBbFosRUFBQStZLElBS0FyTixFQUFBeU4sT0FBQW5aLEdBSUFBLEVBQUFJLElBQUEsV0FBQSxLQUdBLFFBQUEwSSxJQUFBOUksR0FFQUEsRUFBQWdFLFNBQUE3RixJQUNBNkIsRUFBQTdFLFNBQUFnRCxHQUFBOGEsVUFBQSxlQUFBL2IsRUFBQSxtQkFBQW9ILEdBQUF0RSxHQUFBLFdBSUEsUUFBQXNFLElBQUF0RSxHQUNBLEdBQUFvWixHQUFBbFYsRUFFQSxJQUFBdkUsRUFBQXVLLFlBQUF2SyxFQUFBd0ssY0FBQSxDQUNBLEdBQUF4RyxHQUFBM0QsQ0FDQTJELEdBQUFLLFNBQUFuSCxLQUNBOEcsRUFBQTNELEVBQUF1SyxRQUFBek4sR0FHQSxJQUFBdWMsR0FBQUwsU0FBQXJWLEVBQUF2RCxJQUFBLGdCQUFBNFksU0FBQXJWLEVBQUF2RCxJQUFBLGtCQUNBZ1osR0FBQWxWLEdBQUFtVixFQUdBLE1BQUFELEdBTUEsUUFBQW5HLElBQUFELEVBQUFzRyxHQUNBQSxFQUNBdFQsR0FBQXRGLElBRUFtRixHQUFBbkYsSUFHQUEsR0FBQU4sSUFBQTBGLEdBQUFrTixJQUdBMUYsV0FBQSxXQUNBNU0sR0FBQTFGLFlBQUFvQixJQUNBLElBTUEsUUFBQW9ILElBQUFMLEdBRUEsR0FBQVEsR0FBQWpELEdBQUF6RixLQUFBNkIsRUFBQSxpQkFBQXFHLEVBQUEsS0FLQSxPQUpBUSxHQUFBOUMsU0FDQThDLEVBQUFwTSxFQUFBdUYsR0FBQTVCLEdBQUFpSSxFQUFBLElBR0FRLEVBTUEsUUFBQTRWLElBQUFuVyxFQUFBTyxHQUNBLEdBQUFTLEdBQUFULEVBQUExSSxLQUFBK0MsR0FDQTRXLEVBQUF4USxFQUFBbkosS0FBQTRDLEVBQUEsaUJBQUF1RixFQUFBLEtBTUEsT0FKQXdSLEdBQUEvVCxTQUNBK1QsRUFBQXhRLEVBQUFuSixLQUFBNEMsR0FBQTNDLEdBQUFrSSxJQUdBd1IsRUFNQSxRQUFBblIsSUFBQUYsRUFBQXFSLEdBQ0EsR0FBQWpSLEdBQUFILEdBQUFELEVBR0Esb0JBQUFxUixLQUNBQSxFQUFBLEdBSUFyUixJQUFBMkosSUFBQXZKLEVBQUFLLFNBQUF4SCxHQU9BZ2QsR0FBQTdWLEVBQUFpUixHQU5BL1IsR0FBQWMsRUFBQSxXQUNBNlYsR0FBQTdWLEVBQUFpUixLQVlBLFFBQUE0RSxJQUFBN1YsRUFBQVAsR0FDQSxHQUFBLG1CQUFBQSxHQUFBLENBQ0EsR0FBQWdCLEdBQUFULEVBQUExSSxLQUFBK0MsR0FDQXVGLEVBQUFnVyxHQUFBblcsRUFBQU8sRUFFQUosR0FBQTFDLFFBQ0E0RCxHQUFBTCxFQUFBYixJQVFBLFFBQUF5RyxJQUFBckcsRUFBQWdGLEdBQ0FoRixFQUFBaUgsT0FBQSxlQUFBeE0sRUFBQSxvQkFDQSxJQUFBeU0sR0FBQWxILEVBQUExSSxLQUFBb0QsRUFHQXdNLEdBQUExUCxTQUFBd0UsRUFBQThaLGtCQUVBLEtBQUEsR0FBQXpPLEdBQUEsRUFBQUEsRUFBQXJDLEVBQUFxQyxJQUNBSCxFQUFBNVAsS0FBQSxNQUFBMlAsT0FBQSx5Q0FJQUMsR0FBQXpLLElBQUEsY0FBQSxJQUFBeUssRUFBQTZPLFFBQUEsRUFBQSxNQUVBN08sRUFBQTVQLEtBQUEsTUFBQWdJLFFBQUFoSSxLQUFBLEtBQUFFLFNBQUFxQixHQVFBLFFBQUEyUSxJQUFBTCxFQUFBMUosRUFBQXZJLEVBQUE4SixHQUNBLEdBQUFnVixHQUFBLEVBRUFoYSxHQUFBakYsUUFBQW1HLFNBQUFsQixFQUFBNEIsY0FHQXVMLEdBQ0EsbUJBQUFqUyxLQUNBOGUsRUFBQTllLEdBSUEsbUJBQUF1SSxLQUNBQSxFQUFBMEosR0FHQXFJLEdBQUEvUixFQUNBd1csR0FBQUQsRUFBQSxJQUFBdlcsSUFHQSxtQkFBQTBKLElBQ0FxSSxHQUFBL1IsRUFDQXdXLEdBQUEvZSxJQUtBK2UsR0FBQS9lLElBSUErTCxLQU1BLFFBQUFnVCxJQUFBcE8sR0FDQSxHQUFBN0wsRUFBQWMsY0FDQW9VLFNBQUFDLEtBQUF0SixNQUdBLElBQUFrTSxJQUFBbUMsR0FDQXpmLEVBQUEwZixRQUFBQyxhQUFBamUsRUFBQUEsRUFBQSxJQUFBMFAsT0FDQSxDQUNBLEdBQUF3TyxHQUFBNWYsRUFBQXlhLFNBQUFvRixLQUFBalksTUFBQSxLQUFBLEVBQ0E1SCxHQUFBeWEsU0FBQTlTLFFBQUFpWSxFQUFBLElBQUF4TyxJQVFBLFFBQUFtTCxJQUFBM1csR0FDQSxHQUFBMFksR0FBQTFZLEVBQUFzSSxLQUFBLFVBQ0F4TixFQUFBa0YsRUFBQWxGLE9BT0EsT0FKQSxtQkFBQTRkLEtBQ0FBLEVBQUE1ZCxHQUdBNGQsRUFNQSxRQUFBOVIsTUFDQSxHQUFBakQsR0FBQXBNLEVBQUF3RixHQUNBNlgsRUFBQWpSLEVBQUExSSxLQUFBNkMsR0FFQXFGLEVBQUF3VCxHQUFBaFQsR0FDQVAsRUFBQXVULEdBQUEvQixHQUVBc0YsRUFBQUMsT0FBQWhYLEVBRUF5UixHQUFBL1QsU0FDQXFaLEVBQUFBLEVBQUEsSUFBQTlXLEdBSUE4VyxFQUFBQSxFQUFBblksUUFBQSxJQUFBLEtBQUFBLFFBQUEsSUFBQSxHQUdBLElBQUFxWSxHQUFBLEdBQUFDLFFBQUEsVUFBQTlkLEVBQUEsY0FBQSxJQUNBNEksSUFBQSxHQUFBbVYsVUFBQW5WLEdBQUEsR0FBQW1WLFVBQUF2WSxRQUFBcVksRUFBQSxJQUdBalYsR0FBQWhLLFNBQUFvQixFQUFBLElBQUEyZCxHQVFBLFFBQUE1VCxNQUNBLEdBQ0FpVSxHQURBMUssRUFBQXJZLEVBQUFnakIsY0FBQSxLQUVBQyxHQUNBQyxnQkFBQSxvQkFDQUMsV0FBQSxlQUNBQyxZQUFBLGdCQUNBQyxhQUFBLGlCQUNBQyxVQUFBLFlBSUF0akIsR0FBQXVqQixLQUFBQyxhQUFBbkwsRUFBQSxLQUVBLEtBQUEsR0FBQW9MLEtBQUFSLEdBQ0E1SyxFQUFBcUwsTUFBQUQsS0FBQW5mLElBQ0ErVCxFQUFBcUwsTUFBQUQsR0FBQSwyQkFDQVYsRUFBQW5nQixFQUFBK2dCLGlCQUFBdEwsR0FBQXVMLGlCQUFBWCxFQUFBUSxJQU1BLE9BRkF6akIsR0FBQXVqQixLQUFBTSxZQUFBeEwsR0FFQTBLLElBQUF6ZSxHQUFBeWUsRUFBQTFaLE9BQUEsR0FBQSxTQUFBMFosRUFPQSxRQUFBNVksTUFDQW5LLEVBQUE4akIsa0JBQ0E5akIsRUFBQStqQixvQkFBQSxhQUFBNUssSUFBQSxHQUNBblosRUFBQStqQixvQkFBQSxRQUFBNUssSUFBQSxHQUNBblosRUFBQStqQixvQkFBQSxzQkFBQTVLLElBQUEsSUFFQW5aLEVBQUFna0IsWUFBQSxlQUFBN0ssSUFTQSxRQUFBbFAsTUFDQSxHQUNBZ2EsR0FEQUMsRUFBQSxFQUdBdGhCLEdBQUFraEIsaUJBQ0FHLEVBQUEsb0JBRUFBLEVBQUEsY0FDQUMsRUFBQSxLQUlBLElBQUFDLEdBQUEsV0FBQW5rQixHQUFBZ2pCLGNBQUEsT0FBQSxRQUNBaGpCLEVBQUFva0IsZUFBQTlmLEVBQUEsYUFDQSxnQkFHQSxtQkFBQTZmLEVBQ0Fua0IsRUFBQWlrQixHQUFBQyxFQUFBLHNCQUFBL0ssSUFBQSxHQUtBblosRUFBQWlrQixHQUFBQyxFQUFBQyxFQUFBaEwsSUFBQSxHQU9BLFFBQUFqUCxNQUNBaEIsR0FDQXFHLEdBQUEsWUFBQStPLElBQ0EvTyxHQUFBLFVBQUFtUCxJQU1BLFFBQUF0VSxNQUNBbEIsR0FDQXlWLElBQUEsWUFBQUwsSUFDQUssSUFBQSxVQUFBRCxJQU1BLFFBQUE5VCxNQUNBLEdBQUFzVixJQUFBbUMsR0FBQSxDQUVBLEdBQUFnQyxHQUFBQyxJQUVBdmtCLEdBQUF5RSxHQUNBbWEsSUFBQSxjQUFBMEYsRUFBQXJGLE1BQUF6UCxHQUFBLGNBQUE4VSxFQUFBckYsS0FBQXZHLElBQ0FrRyxJQUFBLGFBQUEwRixFQUFBRSxNQUFBaFYsR0FBQSxhQUFBOFUsRUFBQUUsS0FBQXZOLEtBT0EsUUFBQW5NLE1BQ0EsR0FBQXFWLElBQUFtQyxHQUFBLENBRUEsR0FBQWdDLEdBQUFDLElBRUF2a0IsR0FBQXlFLEdBQ0FtYSxJQUFBLGNBQUEwRixFQUFBckYsTUFDQUwsSUFBQSxhQUFBMEYsRUFBQUUsT0FRQSxRQUFBRCxNQUNBLEdBQUFFLEVBWUEsT0FSQUEsR0FEQTVoQixFQUFBNmhCLGNBQ0F6RixLQUFBLGNBQUF1RixLQUFBLGdCQUtBdkYsS0FBQSxnQkFBQXVGLEtBQUEsaUJBVUEsUUFBQTlNLElBQUFSLEdBQ0EsR0FBQXlOLEtBV0EsT0FUQUEsR0FBQS9NLEVBQUEsbUJBQUFWLEdBQUF1SCxRQUFBdkgsRUFBQXVILE9BQUF2SCxFQUFBME4sT0FBQTFOLEVBQUF1SCxNQUFBdkgsRUFBQTJOLFFBQUEsR0FBQXBHLE1BQ0FrRyxFQUFBN00sRUFBQSxtQkFBQVosR0FBQTBOLFFBQUExTixFQUFBdUgsT0FBQXZILEVBQUEwTixPQUFBMU4sRUFBQTBOLE1BQUExTixFQUFBMk4sUUFBQSxHQUFBRCxNQUdBdEMsSUFBQWhMLEdBQUFKLElBQUE5TyxFQUFBTyxZQUNBZ2MsRUFBQS9NLEVBQUFWLEVBQUEyTixRQUFBLEdBQUFwRyxNQUNBa0csRUFBQTdNLEVBQUFaLEVBQUEyTixRQUFBLEdBQUFELE9BR0FELEVBT0EsUUFBQWhXLElBQUFRLEVBQUEyVixHQUNBcGIsRUFBQSxFQUFBLFlBRUEsbUJBQUFvYixLQUVBcFksSUFBQSxHQUdBUSxHQUFBaUMsRUFBQTZELFFBQUF2TSxHQUFBMEksR0FFQSxtQkFBQTJWLEtBQ0FwWSxJQUFBLEdBR0FoRCxFQUFBVCxHQUFBOEMsZUFBQSxZQU1BLFFBQUF4QyxJQUFBQyxHQUNBLEdBQUFwQixFQUFBTyxVQUNBUSxHQUFBTSxVQUFBRCxPQUVBLElBQUFwQixFQUFBaEYsS0FBQSxDQUNBLEdBQUFxWSxHQUFBLHFCQUFBalMsRUFBQSxVQUNBa1MsSUFBQUQsR0FBQSxPQUdBdFMsSUFBQU4sSUFBQSxPQUFBVyxHQU9BLFFBQUErRSxJQUFBa04sR0FDQSxPQUNBc0osb0JBQUF0SixFQUNBdUosaUJBQUF2SixFQUNBd0osZ0JBQUF4SixFQUNBOEgsVUFBQTlILEdBUUEsUUFBQTdRLElBQUF0QyxFQUFBcUMsRUFBQXBDLEdBQ0EsT0FBQW9DLEdBQ0EsSUFBQSxLQUFBK0wsR0FBQW5PLEdBQUF5VyxHQUFBMVcsQ0FBQSxNQUNBLEtBQUEsT0FBQW9PLEdBQUFuTyxHQUFBMFcsS0FBQTNXLENBQUEsTUFDQSxLQUFBLE9BQUFvTyxHQUFBbk8sR0FBQThQLEtBQUEvUCxDQUFBLE1BQ0EsS0FBQSxRQUFBb08sR0FBQW5PLEdBQUE2UCxNQUFBOVAsQ0FBQSxNQUNBLEtBQUEsTUFDQSxLQUFBQyxFQUNBK0IsR0FBQWhDLEdBRUF5QyxHQUFBekMsSUFRQSxRQUFBNGMsSUFBQUMsR0FDQTljLEdBQUEsRUFBQSxZQUNBaUMsSUFBQSxHQUNBUyxJQUFBLEdBQ0E1QixHQUFBdkYsU0FBQWtCLEdBRUErUSxhQUFBb0ssSUFDQXBLLGFBQUE4RixJQUNBOUYsYUFBQXlLLElBQ0F6SyxhQUFBQyxJQUNBRCxhQUFBSSxJQUVBdk8sR0FDQWtYLElBQUEsU0FBQWxQLElBQ0FrUCxJQUFBLGFBQUFqUCxJQUNBaVAsSUFBQSxTQUFBN08sSUFFQXBJLEdBQ0FpWCxJQUFBLFFBQUE1WSxFQUFBLE1BQ0E0WSxJQUFBLGFBQUE1WSxFQUFBLE9BQ0E0WSxJQUFBLGFBQUE1WSxFQUFBLE9BQ0E0WSxJQUFBLFFBQUE3WCxHQUNBNlgsSUFBQSxZQUFBeFcsRUFBQW9JLHNCQUNBb08sSUFBQSxXQUFBeFcsRUFBQW9JLHNCQUVBeFEsRUFBQXVGLEdBQ0FxWixJQUFBLFFBQUEzWCxHQUVBNE8sYUFBQW9LLElBQ0FwSyxhQUFBOEYsSUFHQXdKLEdBQ0FDLEtBT0EsUUFBQUEsTUFFQTdiLEdBQUEsR0FHQUosR0FBQXpGLEtBQUEsc0VBQUFnSCxLQUFBLFdBQ0ExSyxFQUFBc0UsTUFBQWQsS0FBQSxNQUFBeEQsRUFBQXNFLE1BQUF5TSxLQUFBLFFBQ0EvUSxFQUFBc0UsTUFBQXNZLFdBQUEsY0FHQTVjLEVBQUFnRyxFQUFBLEtBQUFjLEVBQUEsS0FBQUcsR0FBQTJhLFNBR0E1aEIsRUFBQXVGLEdBQUFzRCxLQUNBRSxPQUFBLEdBQ0FzYyxtQkFBQSxHQUNBQyxRQUFBLEtBR0F0bEIsRUFBQXNHLEdBQUF1QyxLQUNBc1osTUFBQSxLQUdBaFosR0FBQU4sS0FDQUUsT0FBQSxHQUNBdEksU0FBQSxHQUNBMkksbUJBQUEsR0FDQUMsZUFBQSxLQUdBVCxHQUFBQyxLQUNBQyxTQUFBLEdBQ0FDLE9BQUEsS0FJQS9JLEVBQUEsUUFBQXlELFlBQUFzQixHQUdBNkksR0FBQW5LLFlBQUFtQixHQUdBNUUsRUFBQTBLLEtBQUFrRCxHQUFBcUQsSUFBQSxHQUFBOFIsVUFBQXRZLE1BQUEsT0FBQSxTQUFBbEgsRUFBQXdmLEdBQ0EsSUFBQUEsRUFBQXdDLFFBQUF2Z0IsSUFDQTRJLEdBQUFuSyxZQUFBc2YsS0FLQS9pQixFQUFBdUYsRUFBQSxLQUFBZSxHQUFBb0UsS0FBQSxXQUNBdEMsRUFBQStMLHNCQUFBeU4sT0FBQTVoQixFQUFBc0UsT0FDQXRFLEVBQUFzRSxNQUFBYixZQUFBbUQsRUFBQSxJQUFBM0IsS0FHQXFKLEdBQUFuRixJQUdBQSxHQUFBekYsS0FBQWtDLEVBQUEsS0FBQWUsRUFBQSxLQUFBRixHQUFBaUUsS0FBQSxXQUVBMUssRUFBQXNFLE1BQUFraEIsWUFBQWxoQixLQUFBbWhCLGNBSUE3YyxHQUFBYSxVQUFBLEVBR0EsSUFBQWljLElBQUFwZ0IsRUFBQWUsRUFBQUssRUFDQTFHLEdBQUEwSyxLQUFBZ2IsRUFBQSxTQUFBbmlCLEVBQUErRSxHQUNBdEksRUFBQSxJQUFBc0ksR0FBQTdFLFlBQUE2RSxLQVVBLFFBQUFFLElBQUFtZCxFQUFBcmQsRUFBQUMsR0FDQUgsRUFBQXVkLEdBQUFyZCxFQUNBLGFBQUFDLElBQ0FVLEdBQUEwYyxHQUFBcmQsR0FPQSxRQUFBc2QsTUFDQSxNQUFBNWxCLEdBQUEsUUFBQXlNLFNBQUExSCxPQUNBOGdCLElBQUEsUUFBQSxrRkFLQXpkLEVBQUFnRCxxQkFDQWhELEVBQUErQyxTQUFBL0MsRUFBQXFELGNBQ0FyRCxFQUFBZ0Qsb0JBQUEsRUFDQXlhLEdBQUEsT0FBQSwrR0FHQXpkLEVBQUFPLFdBQUFQLEVBQUE0RSxnQkFDQTZZLEdBQUEsT0FBQSwrSEFHQXpkLEVBQUFnRCxvQkFBQWhELEVBQUFPLFlBQ0FQLEVBQUFnRCxvQkFBQSxFQUNBeWEsR0FBQSxPQUFBLDBHQUlBN2xCLEdBQUEwSyxLQUFBdEMsRUFBQWpGLFFBQUEsU0FBQUksRUFBQTBkLEdBR0EsR0FBQTZFLEdBQUFuZSxHQUFBakUsS0FBQSxVQUFBb04sT0FBQSxXQUNBLE1BQUE5USxHQUFBc0UsTUFBQWQsS0FBQSxTQUFBeEQsRUFBQXNFLE1BQUFkLEtBQUEsUUFBQXVpQixlQUFBOUUsRUFBQThFLGdCQUdBQyxFQUFBcmUsR0FBQWpFLEtBQUEsUUFBQW9OLE9BQUEsV0FDQSxNQUFBOVEsR0FBQXNFLE1BQUFkLEtBQUEsT0FBQXhELEVBQUFzRSxNQUFBZCxLQUFBLE1BQUF1aUIsZUFBQTlFLEVBQUE4RSxpQkFHQUMsRUFBQTFjLFFBQUF3YyxFQUFBeGMsVUFDQXVjLEdBQUEsUUFBQSw0R0FDQUcsRUFBQTFjLFFBQUF1YyxHQUFBLFFBQUEsSUFBQTVFLEVBQUEsdURBQ0E2RSxFQUFBeGMsUUFBQXVjLEdBQUEsUUFBQSxJQUFBNUUsRUFBQSw2REFRQSxRQUFBNEUsSUFBQXRkLEVBQUFvYSxHQUNBc0QsU0FBQUEsUUFBQTFkLElBQUEwZCxRQUFBMWQsR0FBQSxhQUFBb2EsR0F6dUZBLEdBQUEzaUIsRUFBQSxRQUFBeU0sU0FBQTFILEdBQUEsV0FBQTZnQixLQUdBLElBQUFoZCxJQUFBNUksRUFBQSxjQUNBNE4sR0FBQTVOLEVBQUEsUUFFQTRKLEdBQUE1SixFQUFBbUksR0FBQWpGLFFBR0FrRixHQUFBcEksRUFBQWttQixRQUVBblQsTUFBQSxFQUNBNVAsV0FDQTZHLGFBQUEsRUFDQTBILFlBQUEsRUFDQThCLG1CQUFBLFFBQ0F0QyxzQkFDQXFDLG1CQUFBLEVBQ0FmLGtCQUFBLEVBQ0EwUCxrQkFBQSxTQUNBdlosV0FBQSxFQUNBcUcsUUFBQSxFQUdBNUwsTUFBQSxFQUNBMkksZUFBQSxJQUNBckQsZUFBQSxFQUNBc04sY0FBQSxFQUNBRyxrQkFBQSxJQUNBNkYsT0FBQSxpQkFDQThFLFdBQUEsT0FDQXJWLFlBQUEsRUFDQU4sU0FBQSxFQUNBaUksZ0JBQUEsRUFDQWhJLG9CQUFBLEVBQ0FzVSxzQkFBQSxFQUNBNUksb0JBQUEsRUFDQTZJLG1CQUFBLEVBQ0FqRCxjQUFBLEVBQ0EvUyxjQUFBLEVBQ0E2RyxxQkFBQSxLQUNBeEQsZ0JBQUEsRUFDQW1ILHNCQUFBZ1MsR0FDQUMsc0JBQUEsS0FDQWpPLGlCQUFBLEVBQ0FLLGtDQUFBLEVBQ0F5Qyx1QkFBQSxLQUdBalEsbUJBQUEsRUFDQXlTLGVBQUEsRUFDQXZVLGVBQUEsRUFHQW9KLGVBQUEsRUFDQWEsa0JBQUEsT0FDQXJHLGtCQUFBLEVBQ0ErRixpQkFDQUYsV0FBQSxFQUNBQyxjQUFBLEVBQ0FwQixjQUFBLEtBQ0FwQyxXQUFBLEVBQ0FvUixnQkFBQSxFQUNBRSxpQkFBQSxFQUNBM1Msa0JBQUEsRUFHQThDLGdCQUFBeEwsRUFDQTROLGNBQUE3TSxFQUlBL0MsVUFBQSxLQUNBb1MsUUFBQSxLQUNBckIsWUFBQSxLQUNBOUcsWUFBQSxLQUNBRSxhQUFBLEtBQ0FzUyxlQUFBLEtBQ0FOLGFBQUEsS0FDQTFSLGdCQUFBLE1BQ0ExRixFQUdBLElBUUF1TixJQUNBaUksR0FHQW5FLEdBWkFqQyxJQUFBLEVBRUEySSxHQUFBa0csVUFBQUMsVUFBQUMsTUFBQSwrR0FDQWpFLEdBQUEsZ0JBQUF6ZixJQUFBd2pCLFVBQUFHLGlCQUFBLEdBQUFILFVBQUEsZUFDQWxkLEdBQUFuSixFQUFBc0UsTUFDQXFJLEdBQUFqRixHQUFBcUIsU0FDQTJELElBQUEsRUFDQTRSLElBQUEsRUFHQTlJLElBQUEsRUFDQTJFLE1BRUF6RCxLQUNBQSxJQUFBQyxHQUFBcUksSUFBQSxFQUFBQyxNQUFBLEVBQUE1RyxNQUFBLEVBQUFELE9BQUEsR0FDQTFCLEdBQUFxSSxFQUFBL2UsRUFBQWttQixRQUFBLEtBQUF4UCxHQUFBQyxFQUdBLElBQUEySixJQUNBM0UsR0FDQXNFLEdBQ0FuSyxHQUNBRyxHQUNBNEgsR0FDQTVVLEdBQUFqSixFQUFBa21CLFFBQUEsS0FBQTlkLEVBRUF3ZCxNQUdBaGUsR0FBQTZlLE1BQUFuRSxHQUdBMWEsR0FBQTVILEVBQUFrbUIsT0FBQXRlLEdBQUFRLEVBQUFnZSx1QkFHQXBtQixFQUFBa21CLE9BQUFsbUIsRUFBQWdjLFFBQUEwSyxlQUFBLFNBQUE1TyxFQUFBNEwsRUFBQWlELEVBQUFDLEVBQUFDLEdBQUEsT0FBQW5ELEdBQUFtRCxFQUFBLEdBQUEsRUFBQUQsRUFBQSxFQUFBbEQsRUFBQUEsRUFBQUEsRUFBQWlELEVBQUFDLEVBQUEsSUFBQWxELEdBQUEsR0FBQUEsRUFBQUEsRUFBQSxHQUFBaUQsS0F1VEEzbUIsRUFBQXNFLE1BQUFnRixTQUVBTSxHQUFBdkIsaUJBQUFBLEVBQ0F1QixHQUFBWixpQkFBQUEsRUFDQVksR0FBQUYsa0JBQUFBLEVBQ0FFLEdBQUFFLGdCQUFBQSxFQUNBRixHQUFBRyxlQUFBQSxFQUNBSCxHQUFBSyx1QkFBQUEsR0FDQUwsR0FBQVUsa0JBQUFBLEdBQ0FWLEdBQUFtQixxQkFBQUEsR0FDQW5CLEdBQUFxQixjQUFBQSxHQUNBckIsR0FBQTJCLGdCQUFBQSxHQUNBM0IsR0FBQStCLGFBQUFBLEdBQ0EvQixHQUFBa0MsT0FBQUEsR0FDQWxDLEdBQUF1QyxlQUFBQSxHQUNBdkMsR0FBQTBDLGNBQUFBLEdBQ0ExQyxHQUFBMkMsUUFBQUEsR0FDQTNDLEdBQUE2RCxjQUFBQSxHQUNBN0QsR0FBQXVFLGdCQUFBQSxHQUNBdkUsR0FBQXNiLFFBQUFBLEdBR0F6VSxHQUFBLHdCQUNBQSxHQUFBLHNCQUNBQSxHQUFBLGdCQUNBQSxHQUFBLHFCQUNBQSxHQUFBLG9CQUNBQSxHQUFBLGdCQUVBM0IsS0FFQVcsS0FvWkEsSUFBQXdGLEtBQUEsRUFDQXFCLEdBQUEsRUFnS0EyQixHQUFBLEVBQ0FELEdBQUEsRUFDQUwsR0FBQSxFQUNBRSxHQUFBLEVBb0lBMEMsSUFBQSxHQUFBakIsT0FBQUMsVUF3SEFoRCxHQUFBLEVBMmhCQWlJLEdBQUEsRUFzSkE2QixHQUFBMVQsSUE2ekJBLG1CQUFBbWEsV0FLQUEsUUFBQUMsVUFBQUMsUUFBQSxXQUNBMWlCLEtBQUEyaUIsUUFBQWxELGlCQUFBLFFBQUF6ZixNQUNBQSxLQUFBMmlCLFFBQUFsRCxpQkFBQSxhQUFBemYsTUFDQUEsS0FBQTJpQixRQUFBbEQsaUJBQUEsaUJBQUF6ZixPQU9Bd2lCLFFBQUFDLFVBQUFHLFNBQUEsV0FDQTVpQixLQUFBMmlCLFFBQUFqRCxvQkFBQSxRQUFBMWYsTUFDQUEsS0FBQTJpQixRQUFBakQsb0JBQUEsYUFBQTFmLE1BQ0FBLEtBQUEyaUIsUUFBQWpELG9CQUFBLGlCQUFBMWYsT0FhQSxJQUFBNmhCLEtBQ0FnQixVQUFBLEtBQ0FDLG9CQU9BM1IsUUFBQSxXQUNBLEdBQUE0UixHQUFBcm5CLEVBQUF3RixHQUFBOUIsS0FBQWlCLEdBQUFvTSxLQUFBLGtCQUNBLG9CQUFBc1csSUFBQUEsR0FDQUEsRUFBQUgsWUFLQTdqQixVQUFBLFdBQ0EsR0FBQWdrQixHQUFBcm5CLEVBQUF3RixHQUFBOUIsS0FBQWlCLEdBQUFvTSxLQUFBLGtCQUNBLG9CQUFBc1csSUFBQUEsR0FDQUEsRUFBQUwsV0FVQXJGLE9BQUEsU0FBQWxaLEVBQUErWSxHQUNBLEdBQUEvSyxHQUFBaE8sRUFBQS9FLEtBQUFpQixFQUVBOFIsR0FBQTFOLE9BQUF5WSxHQUNBL0ssRUFBQS9MLEtBQUEsV0FDQSxHQUFBNGMsR0FBQWpqQixPQUFBQyxNQUNBaWpCLEVBQUFELEVBQUF2VyxLQUFBLGtCQUNBd1csSUFDQXZuQixFQUFBMEssS0FBQXliLEdBQUFpQixpQkFBQSxXQUNBcG5CLEVBQUFzRSxNQUFBNGdCLFlBSUFxQyxFQUFBLEdBQUFULFNBQUFRLEVBQUFyVyxJQUFBLEdBQUFySixJQUNBdWUsR0FBQWlCLGlCQUFBL21CLEtBQUFrbkI7QUFDQUQsRUFBQXZXLEtBQUEsa0JBQUF3VyxNQVlBdlEsV0FBQSxTQUFBek8sRUFBQWtPLEdBQ0EsR0FBQTRRLEdBQUE1USxFQUFBMUYsS0FBQSxrQkFHQSxRQUFBc1csSUFJQSxRQUFBOWUsRUFDQThlLEVBQUF6UCxHQUFBLElBQUFuQixFQUFBaE4sWUFDQSxXQUFBbEIsRUFDQSxFQUFBOGUsRUFBQXpQLEVBQUFuQixFQUFBaE4sWUFBQSxFQUFBZ04sRUFBQStRLGVBQUEvUSxFQUFBLEdBQUErSyxhQURBLFNBYUEvSyxXQUFBLFNBQUF0SixHQUVBLE1BQUFBLEdBQUF6SixLQUFBK0MsR0FBQTZDLE9BQ0E2RCxFQUFBekosS0FBQTZDLEdBQUE3QyxLQUFBaUIsR0FFQXdJLEVBQUF6SixLQUFBaUIsSUFXQTZjLGFBQUEsU0FBQS9ZLEdBQ0EsTUFBQUEsR0FBQS9FLEtBQUFpQixHQUFBOGlCLFdBQUEvYixRQUFBdUYsSUFBQSxHQUFBdVEsY0FRQUksT0FBQSxTQUFBblosR0FDQSxHQUFBZ08sR0FBQWhPLEVBQUEvRSxLQUFBaUIsRUFDQSxJQUFBOFIsRUFBQW5OLE9BQUEsQ0FDQSxHQUFBaWUsR0FBQTlRLEVBQUExRixLQUFBLGtCQUNBd1csR0FBQXJDLFVBRUF6TyxFQUFBMUYsS0FBQSxrQkFBQSxNQUVBdEksRUFBQS9FLEtBQUFpQixHQUFBOGlCLFdBQUEvYixRQUFBK2IsV0FBQS9iLFFBQUFnYyxTQUFBQSxVQVVBN2QsT0FBQSxTQUFBcEIsRUFBQStZLEdBSUEzTCxhQUFBc1EsR0FBQWdCLFdBQ0FoQixHQUFBZ0IsVUFBQXBSLFdBQUEsV0FDQS9WLEVBQUEwSyxLQUFBeWIsR0FBQWlCLGlCQUFBLFdBQ0FwbkIsRUFBQXNFLE1BQUEyTSxJQUFBLEdBQUEwVyxhQUVBLEtBR0FsZixFQUFBL0UsS0FBQWlCLEdBQUFrRSxJQUFBLFNBQUEyWSxFQUFBLE1BQUFwUCxTQUFBdkosSUFBQSxTQUFBMlksRUFBQSxPQVVBRCxZQUFBLFdBQ0EsTUFBQSxlQUFBN2MsRUFBQSw4Q0NyZ0dBMUUsRUFBQUMsVUFBQUMsTUFBQSxXQUNBK2xCLFFBQUEyQixJQUFBLGtDQUlBLElBQUFDLFVBQUE3bkIsRUFBQSxvQkFDQThuQixTQUFBRCxTQUFBbmtCLEtBQUEsbUJBRUFta0IsVUFBQXJZLEdBQUEsUUFBQSxXQUNBLEdBQUE4WCxHQUFBdG5CLEVBQUFzRSxNQUNBeWpCLEVBQUFULEVBQUFsVixPQUFBLDBCQUNBNFYsRUFBQUQsRUFBQXJrQixLQUFBLDBCQUNBdWtCLEVBQUFGLEVBQUFya0IsS0FBQSwwQkFFQXVrQixHQUFBeGtCLFlBQUEsMEJBQ0F1a0IsRUFBQXZrQixZQUFBLHlCQUNBNmpCLEVBQUE1akIsS0FBQSxvQkFBQUUsU0FBQSx5QkFDQTBqQixFQUFBNWpCLEtBQUEscUJBQUFFLFNBQUEsNEJDakJBNUQsRUFBQUMsVUFBQUMsTUFBQSxXQUtBLFFBQUFnb0IsS0FFQUMsRUFBQXBNLFNBQ0FxTSxhQUFBLE1BQ0FqRyxNQUFBLE9BQ0FrRyxRQUFBLEVBQ0F0ZixPQUFBLFFBQ0EsS0FDQWdOLFdBQUEsV0FDQXVTLEtBQ0EsS0FHQSxRQUFBQSxLQUVBSCxFQUFBcE0sU0FDQXFNLGFBQUEsRUFDQWpHLE1BQUEsT0FDQWtHLFFBQUEsR0FDQXRmLE9BQUEsUUFDQSxLQXhCQWtkLFFBQUEyQixJQUFBLHFCQUNBLElBQUFPLEdBQUFub0IsRUFBQSw4QkE0QkF1b0IsYUFBQUwsRUFBQSxRQzdCQSxTQUFBcmxCLEVBQUE1QyxFQUFBZ0UsR0F5UkEsUUFBQTZpQixHQUFBeE8sRUFBQWxRLEdBQ0E5RCxLQUFBMmlCLFFBQUEsZ0JBQUEzTyxHQUFBclksRUFBQXVvQixjQUFBbFEsR0FBQUEsRUFDQWhVLEtBQUEraUIsU0FBQS9pQixLQUFBMmlCLFFBQUFRLFNBQUEsR0FDQW5qQixLQUFBbWtCLGNBQUFua0IsS0FBQStpQixTQUFBMUQsTUFFQXJmLEtBQUE4RCxTQUVBc2dCLGtCQUFBLEVBRUFDLGdCQUFBLEdBRUFDLGNBQUEsS0FHQUMsZ0JBQUFDLEVBQUFDLFdBQ0FDLGFBQUFGLEVBQUFDLGFBQUFELEVBQUFHLFNBQ0FoaEIsYUFBQTZnQixFQUFBQyxZQUFBRCxFQUFBRyxTQUNBQyxPQUFBLEVBQ0FDLE9BQUEsRUFDQUMsU0FBQSxFQUNBQyx1QkFBQSxFQUNBQyxVQUFBLEVBRUFDLFFBQUEsRUFDQUMsV0FBQSxJQUNBQyxhQUFBLEdBRUFsUyxnQkFBQSxFQUNBbVMseUJBQUFDLFFBQUEsb0NBRUFDLGVBQUEsRUFDQUMsZUFBQSxFQUNBQyxjQUFBLEVBQ0FDLGNBQUEsbUJBQUFsbkIsR0FBQW1uQixZQUdBLEtBQUEsR0FBQXZXLEtBQUFyTCxHQUNBOUQsS0FBQThELFFBQUFxTCxHQUFBckwsRUFBQXFMLEVBSUFuUCxNQUFBMmxCLFdBQUEzbEIsS0FBQThELFFBQUF3aEIsZUFBQWQsRUFBQW9CLGVBQUEsaUJBQUEsR0FFQTVsQixLQUFBOEQsUUFBQXloQixjQUFBZixFQUFBcUIsZUFBQTdsQixLQUFBOEQsUUFBQXloQixjQUNBdmxCLEtBQUE4RCxRQUFBMGhCLGFBQUFoQixFQUFBc0IsY0FBQTlsQixLQUFBOEQsUUFBQTBoQixhQUVBeGxCLEtBQUE4RCxRQUFBaWlCLGlCQUFBL2xCLEtBQUE4RCxRQUFBaWlCLG9CQUFBLEVBQUEsV0FBQS9sQixLQUFBOEQsUUFBQWlpQixpQkFDQS9sQixLQUFBOEQsUUFBQW1QLGdCQUFBalQsS0FBQThELFFBQUFpaUIsa0JBQUEvbEIsS0FBQThELFFBQUFtUCxlQUdBalQsS0FBQThELFFBQUFnaEIsUUFBQSxZQUFBOWtCLEtBQUE4RCxRQUFBaWlCLGtCQUFBL2xCLEtBQUE4RCxRQUFBZ2hCLFFBQ0E5a0IsS0FBQThELFFBQUFraUIsUUFBQSxjQUFBaG1CLEtBQUE4RCxRQUFBaWlCLGtCQUFBL2xCLEtBQUE4RCxRQUFBa2lCLFFBR0FobUIsS0FBQThELFFBQUFtaUIsV0FBQWptQixLQUFBOEQsUUFBQW1pQixhQUFBam1CLEtBQUE4RCxRQUFBaWlCLGlCQUNBL2xCLEtBQUE4RCxRQUFBaWhCLHVCQUFBL2tCLEtBQUE4RCxRQUFBaWlCLGlCQUFBLEVBQUEvbEIsS0FBQThELFFBQUFpaEIsdUJBRUEva0IsS0FBQThELFFBQUFxaEIsYUFBQSxnQkFBQW5sQixNQUFBOEQsUUFBQXFoQixhQUFBWCxFQUFBMEIsS0FBQWxtQixLQUFBOEQsUUFBQXFoQixlQUFBWCxFQUFBMEIsS0FBQUMsU0FBQW5tQixLQUFBOEQsUUFBQXFoQixhQUVBbmxCLEtBQUE4RCxRQUFBc2lCLGNBQUFubUIsU0FBQUQsS0FBQThELFFBQUFzaUIsY0FBQSxHQUFBcG1CLEtBQUE4RCxRQUFBc2lCLGNBRUFwbUIsS0FBQThELFFBQUF1aUIsT0FBQSxJQUNBcm1CLEtBQUE4RCxRQUFBdWlCLElBQUEsT0FJQXJtQixLQUFBOEQsUUFBQXloQixlQUFBdmxCLEtBQUE4RCxRQUFBMGhCLGNBQ0EscUJBQUE1VixLQUFBNVAsS0FBQW1rQixjQUFBaG9CLFlBQ0E2RCxLQUFBbWtCLGNBQUFob0IsU0FBQSxZQUlBLFNBQUE2RCxLQUFBOEQsUUFBQXdpQixtQkFDQXRtQixLQUFBOEQsUUFBQXloQixlQUFBLEdBR0F2bEIsS0FBQThELFFBQUF5aUIscUJBQUF2bUIsS0FBQThELFFBQUF5aUIsc0JBQUEsRUFBQSxFQUtBdm1CLEtBQUF3VCxFQUFBLEVBQ0F4VCxLQUFBc1QsRUFBQSxFQUNBdFQsS0FBQXdtQixXQUFBLEVBQ0F4bUIsS0FBQXltQixXQUFBLEVBQ0F6bUIsS0FBQTBtQixXQUlBMW1CLEtBQUEybUIsUUFDQTNtQixLQUFBcWpCLFVBRUFyakIsS0FBQTRtQixTQUFBNW1CLEtBQUE4RCxRQUFBOGdCLE9BQUE1a0IsS0FBQThELFFBQUErZ0IsUUFDQTdrQixLQUFBNm1CLFNBbXdDQSxRQUFBQyxHQUFBemdCLEVBQUEwZ0IsRUFBQTlpQixHQUNBLEdBQUEraUIsR0FBQXJyQixFQUFBZ2pCLGNBQUEsT0FDQXNJLEVBQUF0ckIsRUFBQWdqQixjQUFBLE1BK0JBLE9BN0JBMWEsTUFBQSxJQUNBK2lCLEVBQUEzSCxNQUFBNkgsUUFBQSxpQ0FDQUQsRUFBQTVILE1BQUE2SCxRQUFBLHdMQUdBRCxFQUFBeEksVUFBQSxtQkFFQSxLQUFBcFksR0FDQXBDLEtBQUEsSUFDQStpQixFQUFBM0gsTUFBQTZILFNBQUEsMENBQ0FELEVBQUE1SCxNQUFBNWEsT0FBQSxRQUVBdWlCLEVBQUF2SSxVQUFBLCtCQUVBeGEsS0FBQSxJQUNBK2lCLEVBQUEzSCxNQUFBNkgsU0FBQSwwQ0FDQUQsRUFBQTVILE1BQUF4QixNQUFBLFFBRUFtSixFQUFBdkksVUFBQSw0QkFHQXVJLEVBQUEzSCxNQUFBNkgsU0FBQSxtQkFFQUgsSUFDQUMsRUFBQTNILE1BQUE4SCxjQUFBLFFBR0FILEVBQUFJLFlBQUFILEdBRUFELEVBR0EsUUFBQUssR0FBQXRFLEVBQUFqZixHQUNBOUQsS0FBQTJpQixRQUFBLGdCQUFBN2UsR0FBQWtRLEdBQUFyWSxFQUFBdW9CLGNBQUFwZ0IsRUFBQWtRLElBQUFsUSxFQUFBa1EsR0FDQWhVLEtBQUFzbkIsYUFBQXRuQixLQUFBMmlCLFFBQUF0RCxNQUNBcmYsS0FBQWluQixVQUFBam5CLEtBQUEyaUIsUUFBQVEsU0FBQSxHQUNBbmpCLEtBQUF1bkIsZUFBQXZuQixLQUFBaW5CLFVBQUE1SCxNQUNBcmYsS0FBQStpQixTQUFBQSxFQUVBL2lCLEtBQUE4RCxTQUNBMGpCLFNBQUEsRUFDQUMsU0FBQSxFQUNBVixhQUFBLEVBQ0F2YixRQUFBLEVBQ0FrYyxtQkFBQSxFQUNBQyxRQUFBLEVBQ0FDLE1BQUEsRUFDQUMsWUFBQSxFQUNBQyxZQUFBLEVBR0EsS0FBQSxHQUFBM1ksS0FBQXJMLEdBQ0E5RCxLQUFBOEQsUUFBQXFMLEdBQUFyTCxFQUFBcUwsRUF1QkEsSUFwQkFuUCxLQUFBK25CLFdBQUEsRUFDQS9uQixLQUFBZ29CLFdBQUEsRUFDQWhvQixLQUFBaW9CLFFBQUEsRUFDQWpvQixLQUFBa29CLFFBQUEsRUFFQWxvQixLQUFBOEQsUUFBQWlqQixjQUNBL21CLEtBQUE4RCxRQUFBNGdCLGVBQ0FGLEVBQUEyRCxTQUFBbm9CLEtBQUFpbkIsVUFBQSxhQUFBam5CLE1BQ0F3a0IsRUFBQTJELFNBQUE1cEIsRUFBQSxXQUFBeUIsT0FFQUEsS0FBQThELFFBQUF5Z0IsaUJBQ0FDLEVBQUEyRCxTQUFBbm9CLEtBQUFpbkIsVUFBQXpDLEVBQUE0RCxtQkFBQSxlQUFBcG9CLE1BQ0F3a0IsRUFBQTJELFNBQUE1cEIsRUFBQWltQixFQUFBNEQsbUJBQUEsYUFBQXBvQixPQUVBQSxLQUFBOEQsUUFBQUgsZUFDQTZnQixFQUFBMkQsU0FBQW5vQixLQUFBaW5CLFVBQUEsWUFBQWpuQixNQUNBd2tCLEVBQUEyRCxTQUFBNXBCLEVBQUEsVUFBQXlCLFFBSUFBLEtBQUE4RCxRQUFBOGpCLEtBQUEsQ0FDQTVuQixLQUFBc25CLGFBQUE5QyxFQUFBbkYsTUFBQUosV0FBQWpmLEtBQUEraUIsU0FBQTRDLFVBQ0EsSUFBQTBDLEdBQUE3RCxFQUFBbkYsTUFBQWlKLGtCQUNBLEtBQUFELEVBQ0EsTUFFQXJvQixNQUFBc25CLGFBQUFlLEdBQUE3RCxFQUFBK0QsYUFBQSxXQUFBLEtBRUEsSUFBQUMsR0FBQXhvQixJQUNBd2tCLEdBQUErRCxjQUNBRSxFQUFBLFdBQ0EsYUFBQUQsRUFBQWxCLGFBQUFlLEtBQ0FHLEVBQUFsQixhQUFBZSxHQUFBLFFBSUFyb0IsS0FBQXNuQixhQUFBdkQsUUFBQSxLQXZ0REEsR0FBQTBFLEdBQUFscUIsRUFBQW1xQix1QkFDQW5xQixFQUFBb3FCLDZCQUNBcHFCLEVBQUFxcUIsMEJBQ0FycUIsRUFBQXNxQix3QkFDQXRxQixFQUFBdXFCLHlCQUNBLFNBQUFsUyxHQUFBclksRUFBQWtULFdBQUFtRixFQUFBLElBQUEsS0FFQTROLEVBQUEsV0FrQkEsUUFBQXVFLEdBQUExSixHQUNBLE1BQUEySixNQUFBLElBQ0EsS0FBQUEsRUFBQTNKLEVBQ0EySixFQUFBM0osRUFBQTRKLE9BQUEsR0FBQUMsY0FBQTdKLEVBQUE4SixPQUFBLElBcEJBLEdBQUFDLE1BRUFDLEVBQUExdEIsRUFBQWdqQixjQUFBLE9BQUFVLE1BQ0EySixFQUFBLFdBTUEsSUFMQSxHQUNBL0osR0FEQXFLLEdBQUEsSUFBQSxVQUFBLE9BQUEsTUFBQSxNQUVBbmEsRUFBQSxFQUNBb2EsRUFBQUQsRUFBQXRrQixPQUVBbUssRUFBQW9hLEVBQUFwYSxJQUVBLEdBREE4UCxFQUFBcUssRUFBQW5hLEdBQUEsV0FDQThQLElBQUFvSyxHQUFBLE1BQUFDLEdBQUFuYSxHQUFBZ2EsT0FBQSxFQUFBRyxFQUFBbmEsR0FBQW5LLE9BQUEsRUFHQSxRQUFBLElBU0Fva0IsR0FBQW5VLFFBQUFELEtBQUF3VSxLQUFBLFdBQUEsT0FBQSxHQUFBeFUsT0FBQUMsV0FFQW1VLEVBQUF4SCxPQUFBLFNBQUE5TyxFQUFBMlcsR0FDQSxJQUFBLEdBQUF0YSxLQUFBc2EsR0FDQTNXLEVBQUEzRCxHQUFBc2EsRUFBQXRhLElBSUFpYSxFQUFBakIsU0FBQSxTQUFBblUsRUFBQS9QLEVBQUFKLEVBQUE2bEIsR0FDQTFWLEVBQUF5TCxpQkFBQXhiLEVBQUFKLElBQUE2bEIsSUFHQU4sRUFBQU8sWUFBQSxTQUFBM1YsRUFBQS9QLEVBQUFKLEVBQUE2bEIsR0FDQTFWLEVBQUEwTCxvQkFBQXpiLEVBQUFKLElBQUE2bEIsSUFHQU4sRUFBQWhCLG1CQUFBLFNBQUF3QixHQUNBLE1BQUFyckIsR0FBQXNyQixlQUNBLFlBQUFELEVBQUFYLE9BQUEsR0FBQUMsY0FBQVUsRUFBQVQsT0FBQSxHQUNBUyxHQUdBUixFQUFBcEUsU0FBQSxTQUFBOEUsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FDQSxHQUVBQyxHQUNBQyxFQUhBQyxFQUFBUixFQUFBQyxFQUNBUSxFQUFBNXFCLEVBQUE4VCxJQUFBNlcsR0FBQU4sQ0FtQkEsT0FmQUcsR0FBQWxxQixTQUFBa3FCLEVBQUEsS0FBQUEsRUFFQUMsRUFBQU4sRUFBQVMsRUFBQUEsR0FBQSxFQUFBSixJQUFBRyxFQUFBLEdBQUEsRUFBQSxHQUNBRCxFQUFBRSxFQUFBSixFQUVBQyxFQUFBSCxHQUNBRyxFQUFBRixFQUFBRCxFQUFBQyxFQUFBLEtBQUFLLEVBQUEsR0FBQU4sRUFDQUssRUFBQTNxQixFQUFBOFQsSUFBQTJXLEVBQUFOLEdBQ0FPLEVBQUFDLEVBQUFDLEdBQ0FILEVBQUEsSUFDQUEsRUFBQUYsRUFBQUEsRUFBQSxLQUFBSyxFQUFBLEdBQUEsRUFDQUQsRUFBQTNxQixFQUFBOFQsSUFBQXFXLEdBQUFNLEVBQ0FDLEVBQUFDLEVBQUFDLElBSUFILFlBQUF6cUIsRUFBQStiLE1BQUEwTyxHQUNBQyxTQUFBQSxHQUlBLElBQUFHLEdBQUF6QixFQUFBLFlBc01BLE9BcE1BSyxHQUFBeEgsT0FBQXdILEdBQ0F0RCxhQUFBMEUsS0FBQSxFQUNBNUUsZUFBQW1ELEVBQUEsZ0JBQUFNLEdBQ0ExRSxTQUFBLGdCQUFBcG1CLEdBQ0FrbUIsY0FBQWxtQixFQUFBNmhCLGVBQUE3aEIsRUFBQXNyQixnQkFDQWhFLGNBQUFrRCxFQUFBLGVBQUFNLEtBaUJBRCxFQUFBYixhQUFBLFdBQ0EsR0FBQWtDLEdBQUFsc0IsRUFBQXdqQixVQUFBMEksVUFFQSxJQUFBLFVBQUE3YSxLQUFBNmEsS0FBQSxhQUFBN2EsS0FBQTZhLEdBQUEsQ0FDQSxHQUFBQyxHQUFBRCxFQUFBeEksTUFBQSxtQkFDQSxTQUFBeUksR0FBQSxnQkFBQUEsSUFBQUEsRUFBQTFsQixRQUFBLElBQ0EybEIsV0FBQUQsRUFBQSxJQUFBLE9BS0EsT0FBQSxLQUlBdEIsRUFBQXhILE9BQUF3SCxFQUFBL0osVUFDQUosVUFBQXVMLEVBQ0FJLHlCQUFBN0IsRUFBQSw0QkFDQVQsbUJBQUFTLEVBQUEsc0JBQ0E4QixnQkFBQTlCLEVBQUEsbUJBQ0ErQixnQkFBQS9CLEVBQUEscUJBR0FLLEVBQUFqaEIsU0FBQSxTQUFBeUssRUFBQTBQLEdBQ0EsR0FBQXlJLEdBQUEsR0FBQXZNLFFBQUEsVUFBQThELEVBQUEsVUFDQSxPQUFBeUksR0FBQW5iLEtBQUFnRCxFQUFBNkwsWUFHQTJLLEVBQUE5cEIsU0FBQSxTQUFBc1QsRUFBQTBQLEdBQ0EsSUFBQThHLEVBQUFqaEIsU0FBQXlLLEVBQUEwUCxHQUFBLENBSUEsR0FBQTBJLEdBQUFwWSxFQUFBNkwsVUFBQXRZLE1BQUEsSUFDQTZrQixHQUFBanZCLEtBQUF1bUIsR0FDQTFQLEVBQUE2TCxVQUFBdU0sRUFBQUMsS0FBQSxPQUdBN0IsRUFBQWpxQixZQUFBLFNBQUF5VCxFQUFBMFAsR0FDQSxHQUFBOEcsRUFBQWpoQixTQUFBeUssRUFBQTBQLEdBQUEsQ0FJQSxHQUFBeUksR0FBQSxHQUFBdk0sUUFBQSxVQUFBOEQsRUFBQSxVQUFBLElBQ0ExUCxHQUFBNkwsVUFBQTdMLEVBQUE2TCxVQUFBdlksUUFBQTZrQixFQUFBLE9BR0EzQixFQUFBOEIsT0FBQSxTQUFBbFgsR0FLQSxJQUpBLEdBQUFELElBQUFDLEVBQUFtWCxXQUNBam1CLEdBQUE4TyxFQUFBeEQsVUFHQXdELEVBQUFBLEVBQUFvWCxjQUNBclgsR0FBQUMsRUFBQW1YLFdBQ0FqbUIsR0FBQThPLEVBQUF4RCxTQUlBLFFBQ0F1RCxLQUFBQSxFQUNBN08sSUFBQUEsSUFJQWtrQixFQUFBaEUsd0JBQUEsU0FBQXBSLEVBQUFxWCxHQUNBLElBQUEsR0FBQWxjLEtBQUFrYyxHQUNBLEdBQUFBLEVBQUFsYyxHQUFBUyxLQUFBb0UsRUFBQTdFLElBQ0EsT0FBQSxDQUlBLFFBQUEsR0FHQWlhLEVBQUF4SCxPQUFBd0gsRUFBQWtDLGNBQ0FDLFdBQUEsRUFDQUMsVUFBQSxFQUNBQyxTQUFBLEVBRUFDLFVBQUEsRUFDQUMsVUFBQSxFQUNBQyxRQUFBLEVBRUFDLFlBQUEsRUFDQUMsWUFBQSxFQUNBQyxVQUFBLEVBRUFDLGNBQUEsRUFDQUMsY0FBQSxFQUNBQyxZQUFBLElBR0E5QyxFQUFBeEgsT0FBQXdILEVBQUFsRCxTQUNBaUcsV0FDQTlNLE1BQUEsdUNBQ0F4YixHQUFBLFNBQUE0VyxHQUNBLE1BQUFBLElBQUEsRUFBQUEsS0FHQTBMLFVBQ0E5RyxNQUFBLGtDQUNBeGIsR0FBQSxTQUFBNFcsR0FDQSxNQUFBOWEsR0FBQXlzQixLQUFBLEtBQUEzUixFQUFBQSxLQUdBNFIsTUFDQWhOLE1BQUEsMENBQ0F4YixHQUFBLFNBQUE0VyxHQUNBLEdBQUE0SCxHQUFBLENBQ0EsUUFBQTVILEdBQUEsR0FBQUEsSUFBQTRILEVBQUEsR0FBQTVILEVBQUE0SCxHQUFBLElBR0E0QyxRQUNBNUYsTUFBQSxHQUNBeGIsR0FBQSxTQUFBNFcsR0FDQSxPQUFBQSxHQUFBLEdBQUEsRUFBQSxLQUNBLE9BQUFBLEVBQUFBLEVBQ0FBLEVBQUEsRUFBQSxLQUNBLFFBQUFBLEdBQUEsSUFBQSxNQUFBQSxFQUFBLElBQ0FBLEVBQUEsSUFBQSxLQUNBLFFBQUFBLEdBQUEsS0FBQSxNQUFBQSxFQUFBLE1BRUEsUUFBQUEsR0FBQSxNQUFBLE1BQUFBLEVBQUEsVUFJQTZSLFNBQ0FqTixNQUFBLEdBQ0F4YixHQUFBLFNBQUE0VyxHQUNBLEdBQUE4UixHQUFBLElBQ0EzWixFQUFBLEVBRUEsT0FBQSxLQUFBNkgsRUFBQSxFQUNBLEdBQUFBLEVBQUEsRUFFQTdILEVBQUFqVCxFQUFBNnNCLElBQUEsR0FBQSxHQUFBL1IsR0FBQTlhLEVBQUE4c0IsS0FBQWhTLEVBQUE4UixFQUFBLElBQUEsRUFBQTVzQixFQUFBK3NCLElBQUFILEdBQUEsTUFLQW5ELEVBQUEvQyxJQUFBLFNBQUF6VCxFQUFBK1osR0FDQSxHQUFBQyxHQUFBanhCLEVBQUFreEIsWUFBQSxRQUNBRCxHQUFBRSxVQUFBSCxHQUFBLEdBQUEsR0FDQUMsRUFBQXRNLE1BQUExTixFQUFBME4sTUFDQXNNLEVBQUF6UyxNQUFBdkgsRUFBQXVILE1BQ0F2SCxFQUFBRSxPQUFBaWEsY0FBQUgsSUFHQXhELEVBQUFqSCxNQUFBLFNBQUF2UCxHQUNBLEdBQ0FnYSxHQURBOVosRUFBQUYsRUFBQUUsTUFHQSw0QkFBQWxELEtBQUFrRCxFQUFBdVMsV0FHQXVILEVBQUFqeEIsRUFBQWt4QixZQUFBdHVCLEVBQUF5dUIsV0FBQSxjQUFBLFNBQ0FKLEVBQUFFLFVBQUEsU0FBQSxHQUFBLEdBQ0FGLEVBQUFLLEtBQUFyYSxFQUFBcWEsTUFBQTF1QixFQUNBcXVCLEVBQUF0WCxPQUFBLEVBQ0FzWCxFQUFBTSxRQUFBcGEsRUFBQW9hLFNBQUEsRUFDQU4sRUFBQU8sUUFBQXJhLEVBQUFxYSxTQUFBLEVBQ0FQLEVBQUFRLFFBQUF0YSxFQUFBc2EsU0FBQSxFQUNBUixFQUFBUyxRQUFBdmEsRUFBQXVhLFNBQUEsRUFDQVQsRUFBQS9TLFVBQUFqSCxFQUFBaUgsUUFDQStTLEVBQUFVLFNBQUExYSxFQUFBMGEsT0FDQVYsRUFBQXBTLFdBQUE1SCxFQUFBNEgsU0FDQW9TLEVBQUFXLFVBQUEzYSxFQUFBMmEsUUFDQVgsRUFBQVksT0FBQSxFQUNBWixFQUFBYSxjQUFBLEtBQ0FiLEVBQUFjLGNBQUEsRUFDQTVhLEVBQUFpYSxjQUFBSCxLQUlBeEQsSUFrR0E1RyxHQUFBQyxXQUNBa0wsUUFBQSxRQUVBaEgsTUFBQSxXQUNBM21CLEtBQUE0dEIsZUFFQTV0QixLQUFBOEQsUUFBQVAsWUFBQXZELEtBQUE4RCxRQUFBK3BCLGFBQ0E3dEIsS0FBQTh0QixrQkFHQTl0QixLQUFBOEQsUUFBQU4sWUFDQXhELEtBQUErdEIsYUFHQS90QixLQUFBOEQsUUFBQWtxQixNQUNBaHVCLEtBQUFpdUIsWUFHQWp1QixLQUFBOEQsUUFBQW9xQixhQUNBbHVCLEtBQUFtdUIsYUFPQXZOLFFBQUEsV0FDQTVnQixLQUFBNHRCLGFBQUEsR0FDQXJjLGFBQUF2UixLQUFBb3VCLGVBQ0FwdUIsS0FBQW91QixjQUFBLEtBQ0FwdUIsS0FBQXF1QixXQUFBLFlBR0FDLGVBQUEsU0FBQTFiLEdBQ0FBLEVBQUFFLFFBQUE5UyxLQUFBK2lCLFVBQUEvaUIsS0FBQXV1QixpQkFJQXZ1QixLQUFBd3VCLGtCQUNBeHVCLEtBQUF5dUIsY0FBQXp1QixLQUFBOEQsUUFBQW9oQixjQUNBbGxCLEtBQUF1dUIsZ0JBQUEsRUFDQXZ1QixLQUFBcXVCLFdBQUEsZ0JBSUFLLE9BQUEsU0FBQTliLEdBRUEsR0FBQSxHQUFBNFIsRUFBQThHLFVBQUExWSxFQUFBM08sTUFBQSxDQUdBLEdBQUF1cEIsRUFTQSxJQUZBQSxFQU5BNWEsRUFBQThHLE1BTUE5RyxFQUFBNGEsT0FKQTVhLEVBQUE0YSxPQUFBLEVBQUEsRUFDQSxHQUFBNWEsRUFBQTRhLE9BQUEsRUFBQSxFQUtBLElBQUFBLEVBQ0EsT0FJQSxHQUFBeHRCLEtBQUEydUIsV0FBQTN1QixLQUFBNHVCLFdBQUFwSyxFQUFBOEcsVUFBQTFZLEVBQUEzTyxRQUFBakUsS0FBQTR1QixXQUFBLEVBSUE1dUIsS0FBQThELFFBQUFtUCxnQkFBQXVSLEVBQUErRCxjQUFBL0QsRUFBQVksd0JBQUF4UyxFQUFBRSxPQUFBOVMsS0FBQThELFFBQUFzaEIsMEJBQ0F4UyxFQUFBSyxnQkFHQSxJQUNBNGIsR0FEQUMsRUFBQWxjLEVBQUEyTixRQUFBM04sRUFBQTJOLFFBQUEsR0FBQTNOLENBR0E1UyxNQUFBNHVCLFVBQUFwSyxFQUFBOEcsVUFBQTFZLEVBQUEzTyxNQUNBakUsS0FBQSt1QixPQUFBLEVBQ0EvdUIsS0FBQWd2QixNQUFBLEVBQ0FodkIsS0FBQWl2QixNQUFBLEVBQ0FqdkIsS0FBQXdtQixXQUFBLEVBQ0F4bUIsS0FBQXltQixXQUFBLEVBQ0F6bUIsS0FBQWt2QixnQkFBQSxFQUVBbHZCLEtBQUFtdkIsVUFBQTNLLEVBQUF2UCxVQUVBalYsS0FBQThELFFBQUF5aEIsZUFBQXZsQixLQUFBdXVCLGdCQUNBdnVCLEtBQUF3dUIsa0JBQ0F4dUIsS0FBQXV1QixnQkFBQSxFQUNBTSxFQUFBN3VCLEtBQUFvdkIsc0JBQ0FwdkIsS0FBQXF2QixXQUFBMXZCLEVBQUErYixNQUFBbVQsRUFBQXJiLEdBQUE3VCxFQUFBK2IsTUFBQW1ULEVBQUF2YixJQUNBdFQsS0FBQXF1QixXQUFBLGVBQ0FydUIsS0FBQThELFFBQUF5aEIsZUFBQXZsQixLQUFBc3ZCLGNBQ0F0dkIsS0FBQXN2QixhQUFBLEVBQ0F0dkIsS0FBQXF1QixXQUFBLGNBR0FydUIsS0FBQTRrQixPQUFBNWtCLEtBQUF3VCxFQUNBeFQsS0FBQTZrQixPQUFBN2tCLEtBQUFzVCxFQUNBdFQsS0FBQXV2QixVQUFBdnZCLEtBQUF3VCxFQUNBeFQsS0FBQXd2QixVQUFBeHZCLEtBQUFzVCxFQUNBdFQsS0FBQXl2QixPQUFBWCxFQUFBeE8sTUFDQXRnQixLQUFBMHZCLE9BQUFaLEVBQUEzVSxNQUVBbmEsS0FBQXF1QixXQUFBLHVCQUdBc0IsTUFBQSxTQUFBL2MsR0FDQSxHQUFBNVMsS0FBQTJ1QixTQUFBbkssRUFBQThHLFVBQUExWSxFQUFBM08sUUFBQWpFLEtBQUE0dUIsVUFBQSxDQUlBNXVCLEtBQUE4RCxRQUFBbVAsZ0JBQ0FMLEVBQUFLLGdCQUdBLElBSUEyYyxHQUFBQyxFQUNBQyxFQUFBQyxFQUxBakIsRUFBQWxjLEVBQUEyTixRQUFBM04sRUFBQTJOLFFBQUEsR0FBQTNOLEVBQ0ErQyxFQUFBbVosRUFBQXhPLE1BQUF0Z0IsS0FBQXl2QixPQUNBcGEsRUFBQXlaLEVBQUEzVSxNQUFBbmEsS0FBQTB2QixPQUNBTSxFQUFBeEwsRUFBQXZQLFNBYUEsSUFUQWpWLEtBQUF5dkIsT0FBQVgsRUFBQXhPLE1BQ0F0Z0IsS0FBQTB2QixPQUFBWixFQUFBM1UsTUFFQW5hLEtBQUFndkIsT0FBQXJaLEVBQ0EzVixLQUFBaXZCLE9BQUE1WixFQUNBeWEsRUFBQW53QixFQUFBOFQsSUFBQXpULEtBQUFndkIsT0FDQWUsRUFBQXB3QixFQUFBOFQsSUFBQXpULEtBQUFpdkIsU0FHQWUsRUFBQWh3QixLQUFBaXdCLFFBQUEsS0FBQUgsRUFBQSxJQUFBQyxFQUFBLElBQUEsQ0FlQSxHQVZBL3ZCLEtBQUFrdkIsaUJBQUFsdkIsS0FBQThELFFBQUFtaUIsYUFDQTZKLEVBQUFDLEVBQUEvdkIsS0FBQThELFFBQUFpaEIsdUJBQ0Eva0IsS0FBQWt2QixnQkFBQSxJQUNBYSxHQUFBRCxFQUFBOXZCLEtBQUE4RCxRQUFBaWhCLHVCQUNBL2tCLEtBQUFrdkIsZ0JBQUEsSUFFQWx2QixLQUFBa3ZCLGdCQUFBLEtBSUEsS0FBQWx2QixLQUFBa3ZCLGdCQUFBLENBQ0EsR0FBQSxZQUFBbHZCLEtBQUE4RCxRQUFBaWlCLGlCQUNBblQsRUFBQUsscUJBQ0EsSUFBQSxjQUFBalQsS0FBQThELFFBQUFpaUIsaUJBRUEsWUFEQS9sQixLQUFBNHVCLFdBQUEsRUFJQXZaLEdBQUEsTUFDQSxJQUFBLEtBQUFyVixLQUFBa3ZCLGdCQUFBLENBQ0EsR0FBQSxjQUFBbHZCLEtBQUE4RCxRQUFBaWlCLGlCQUNBblQsRUFBQUsscUJBQ0EsSUFBQSxZQUFBalQsS0FBQThELFFBQUFpaUIsaUJBRUEsWUFEQS9sQixLQUFBNHVCLFdBQUEsRUFJQWpaLEdBQUEsRUFHQUEsRUFBQTNWLEtBQUFrd0Isb0JBQUF2YSxFQUFBLEVBQ0FOLEVBQUFyVixLQUFBbXdCLGtCQUFBOWEsRUFBQSxFQUVBdWEsRUFBQTV2QixLQUFBd1QsRUFBQW1DLEVBQ0FrYSxFQUFBN3ZCLEtBQUFzVCxFQUFBK0IsR0FHQXVhLEVBQUEsR0FBQUEsRUFBQTV2QixLQUFBb3dCLGNBQ0FSLEVBQUE1dkIsS0FBQThELFFBQUFtaEIsT0FBQWpsQixLQUFBd1QsRUFBQW1DLEVBQUEsRUFBQWlhLEVBQUEsRUFBQSxFQUFBNXZCLEtBQUFvd0IsYUFFQVAsRUFBQSxHQUFBQSxFQUFBN3ZCLEtBQUFxd0IsY0FDQVIsRUFBQTd2QixLQUFBOEQsUUFBQW1oQixPQUFBamxCLEtBQUFzVCxFQUFBK0IsRUFBQSxFQUFBd2EsRUFBQSxFQUFBLEVBQUE3dkIsS0FBQXF3QixZQUdBcndCLEtBQUF3bUIsV0FBQTdRLEVBQUEsR0FBQSxFQUFBQSxFQUFBLEVBQUEsRUFBQSxFQUNBM1YsS0FBQXltQixXQUFBcFIsRUFBQSxHQUFBLEVBQUFBLEVBQUEsRUFBQSxFQUFBLEVBRUFyVixLQUFBK3VCLE9BQ0EvdUIsS0FBQXF1QixXQUFBLGVBR0FydUIsS0FBQSt1QixPQUFBLEVBRUEvdUIsS0FBQXF2QixXQUFBTyxFQUFBQyxHQUlBRyxFQUFBaHdCLEtBQUFtdkIsVUFBQSxNQUNBbnZCLEtBQUFtdkIsVUFBQWEsRUFDQWh3QixLQUFBNGtCLE9BQUE1a0IsS0FBQXdULEVBQ0F4VCxLQUFBNmtCLE9BQUE3a0IsS0FBQXNULE1BT0FnZCxLQUFBLFNBQUExZCxHQUNBLEdBQUE1UyxLQUFBMnVCLFNBQUFuSyxFQUFBOEcsVUFBQTFZLEVBQUEzTyxRQUFBakUsS0FBQTR1QixVQUFBLENBSUE1dUIsS0FBQThELFFBQUFtUCxpQkFBQXVSLEVBQUFZLHdCQUFBeFMsRUFBQUUsT0FBQTlTLEtBQUE4RCxRQUFBc2hCLDBCQUNBeFMsRUFBQUssZ0JBR0EsSUFDQXNkLEdBQ0FDLEVBQ0FuRyxHQUhBelgsRUFBQTZkLGVBQUE3ZCxFQUFBNmQsZUFBQSxHQUFBN2QsRUFHQTRSLEVBQUF2UCxVQUFBalYsS0FBQW12QixXQUNBUyxFQUFBandCLEVBQUErYixNQUFBMWIsS0FBQXdULEdBQ0FxYyxFQUFBbHdCLEVBQUErYixNQUFBMWIsS0FBQXNULEdBQ0FvZCxFQUFBL3dCLEVBQUE4VCxJQUFBbWMsRUFBQTV2QixLQUFBNGtCLFFBQ0ErTCxFQUFBaHhCLEVBQUE4VCxJQUFBb2MsRUFBQTd2QixLQUFBNmtCLFFBQ0FtRixFQUFBLEVBQ0F0UyxFQUFBLEVBT0EsSUFMQTFYLEtBQUF1dUIsZUFBQSxFQUNBdnVCLEtBQUE0dUIsVUFBQSxFQUNBNXVCLEtBQUFpd0IsUUFBQXpMLEVBQUF2UCxXQUdBalYsS0FBQXl1QixjQUFBenVCLEtBQUE4RCxRQUFBb2hCLFlBQUEsQ0FPQSxHQUhBbGxCLEtBQUE0bUIsU0FBQWdKLEVBQUFDLElBR0E3dkIsS0FBQSt1QixNQVVBLE1BVEEvdUIsTUFBQThELFFBQUF1aUIsS0FDQTdCLEVBQUE2QixJQUFBelQsRUFBQTVTLEtBQUE4RCxRQUFBdWlCLEtBR0FybUIsS0FBQThELFFBQUFxZSxPQUNBcUMsRUFBQXJDLE1BQUF2UCxPQUdBNVMsTUFBQXF1QixXQUFBLGVBSUEsSUFBQXJ1QixLQUFBMG1CLFFBQUFrSyxPQUFBdkcsRUFBQSxLQUFBcUcsRUFBQSxLQUFBQyxFQUFBLElBRUEsV0FEQTN3QixNQUFBcXVCLFdBQUEsUUFlQSxJQVZBcnVCLEtBQUE4RCxRQUFBa2hCLFVBQUFxRixFQUFBLE1BQ0FrRyxFQUFBdndCLEtBQUFrd0Isb0JBQUExTCxFQUFBUSxTQUFBaGxCLEtBQUF3VCxFQUFBeFQsS0FBQTRrQixPQUFBeUYsRUFBQXJxQixLQUFBb3dCLFdBQUFwd0IsS0FBQThELFFBQUFtaEIsT0FBQWpsQixLQUFBNndCLGFBQUEsRUFBQTd3QixLQUFBOEQsUUFBQXFtQixlQUFBQyxZQUFBd0YsRUFBQXZGLFNBQUEsR0FDQW1HLEVBQUF4d0IsS0FBQW13QixrQkFBQTNMLEVBQUFRLFNBQUFobEIsS0FBQXNULEVBQUF0VCxLQUFBNmtCLE9BQUF3RixFQUFBcnFCLEtBQUFxd0IsV0FBQXJ3QixLQUFBOEQsUUFBQW1oQixPQUFBamxCLEtBQUE4d0IsY0FBQSxFQUFBOXdCLEtBQUE4RCxRQUFBcW1CLGVBQUFDLFlBQUF5RixFQUFBeEYsU0FBQSxHQUNBdUYsRUFBQVcsRUFBQW5HLFlBQ0F5RixFQUFBVyxFQUFBcEcsWUFDQUosRUFBQXJxQixFQUFBaVYsSUFBQTJiLEVBQUFsRyxTQUFBbUcsRUFBQW5HLFVBQ0FycUIsS0FBQXV1QixlQUFBLEdBSUF2dUIsS0FBQThELFFBQUFrcUIsS0FBQSxDQUNBLEdBQUFBLEdBQUFodUIsS0FBQSt3QixhQUFBbkIsRUFBQUMsRUFDQTd2QixNQUFBZ3hCLFlBQUFoRCxFQUNBaEUsRUFBQWhxQixLQUFBOEQsUUFBQW10QixXQUFBdHhCLEVBQUFpVixJQUNBalYsRUFBQWlWLElBQ0FqVixFQUFBNlYsSUFBQTdWLEVBQUE4VCxJQUFBbWMsRUFBQTVCLEVBQUF4YSxHQUFBLEtBQ0E3VCxFQUFBNlYsSUFBQTdWLEVBQUE4VCxJQUFBb2MsRUFBQTdCLEVBQUExYSxHQUFBLE1BQ0EsS0FDQXNjLEVBQUE1QixFQUFBeGEsRUFDQXFjLEVBQUE3QixFQUFBMWEsRUFFQXRULEtBQUF3bUIsV0FBQSxFQUNBeG1CLEtBQUF5bUIsV0FBQSxFQUNBL08sRUFBQTFYLEtBQUE4RCxRQUFBcWhCLGFBS0EsTUFBQXlLLElBQUE1dkIsS0FBQXdULEdBQUFxYyxHQUFBN3ZCLEtBQUFzVCxJQUVBc2MsRUFBQSxHQUFBQSxFQUFBNXZCLEtBQUFvd0IsWUFBQVAsRUFBQSxHQUFBQSxFQUFBN3ZCLEtBQUFxd0IsY0FDQTNZLEVBQUE4TSxFQUFBMEIsS0FBQWlHLGVBR0Fuc0IsTUFBQTRtQixTQUFBZ0osRUFBQUMsRUFBQTdGLEVBQUF0UyxRQUlBMVgsTUFBQXF1QixXQUFBLGdCQUdBNkMsUUFBQSxXQUNBLEdBQUFDLEdBQUFueEIsSUFFQXVSLGNBQUF2UixLQUFBb3VCLGVBRUFwdUIsS0FBQW91QixjQUFBM2MsV0FBQSxXQUNBMGYsRUFBQTlOLFdBQ0FyakIsS0FBQThELFFBQUFzaUIsZ0JBR0FxSSxjQUFBLFNBQUF6RSxHQUNBLEdBQUF4VyxHQUFBeFQsS0FBQXdULEVBQ0FGLEVBQUF0VCxLQUFBc1QsQ0FnQkEsT0FkQTBXLEdBQUFBLEdBQUEsR0FFQWhxQixLQUFBa3dCLHFCQUFBbHdCLEtBQUF3VCxFQUFBLEVBQ0FBLEVBQUEsRUFDQXhULEtBQUF3VCxFQUFBeFQsS0FBQW93QixhQUNBNWMsRUFBQXhULEtBQUFvd0IsYUFHQXB3QixLQUFBbXdCLG1CQUFBbndCLEtBQUFzVCxFQUFBLEVBQ0FBLEVBQUEsRUFDQXRULEtBQUFzVCxFQUFBdFQsS0FBQXF3QixhQUNBL2MsRUFBQXRULEtBQUFxd0IsYUFHQTdjLEdBQUF4VCxLQUFBd1QsR0FBQUYsR0FBQXRULEtBQUFzVCxLQUlBdFQsS0FBQTRtQixTQUFBcFQsRUFBQUYsRUFBQTBXLEVBQUFocUIsS0FBQThELFFBQUFxaEIsZUFFQSxJQUdBaU0sUUFBQSxXQUNBcHhCLEtBQUEydUIsU0FBQSxHQUdBOUgsT0FBQSxXQUNBN21CLEtBQUEydUIsU0FBQSxHQUdBdEwsUUFBQSxXQUNBcmpCLEtBQUEyaUIsUUFBQTBPLFlBRUFyeEIsTUFBQTZ3QixhQUFBN3dCLEtBQUEyaUIsUUFBQTJPLFlBQ0F0eEIsS0FBQTh3QixjQUFBOXdCLEtBQUEyaUIsUUFBQTRPLGFBSUF2eEIsS0FBQXd4QixjQUFBeHhCLEtBQUEraUIsU0FBQTBPLFlBQ0F6eEIsS0FBQTB4QixlQUFBMXhCLEtBQUEraUIsU0FBQXNPLGFBRUFyeEIsS0FBQW93QixXQUFBcHdCLEtBQUE2d0IsYUFBQTd3QixLQUFBd3hCLGNBQ0F4eEIsS0FBQXF3QixXQUFBcndCLEtBQUE4d0IsY0FBQTl3QixLQUFBMHhCLGVBSUExeEIsS0FBQWt3QixvQkFBQWx3QixLQUFBOEQsUUFBQWtpQixTQUFBaG1CLEtBQUFvd0IsV0FBQSxFQUNBcHdCLEtBQUFtd0Isa0JBQUFud0IsS0FBQThELFFBQUFnaEIsU0FBQTlrQixLQUFBcXdCLFdBQUEsRUFFQXJ3QixLQUFBa3dCLHNCQUNBbHdCLEtBQUFvd0IsV0FBQSxFQUNBcHdCLEtBQUF3eEIsY0FBQXh4QixLQUFBNndCLGNBR0E3d0IsS0FBQW13QixvQkFDQW53QixLQUFBcXdCLFdBQUEsRUFDQXJ3QixLQUFBMHhCLGVBQUExeEIsS0FBQTh3QixlQUdBOXdCLEtBQUFpd0IsUUFBQSxFQUNBandCLEtBQUF3bUIsV0FBQSxFQUNBeG1CLEtBQUF5bUIsV0FBQSxFQUVBem1CLEtBQUEyeEIsY0FBQW5OLEVBQUEwRyxPQUFBbHJCLEtBQUEyaUIsU0FFQTNpQixLQUFBcXVCLFdBQUEsV0FFQXJ1QixLQUFBeXVCLGlCQU1BdmpCLEdBQUEsU0FBQWpILEVBQUFKLEdBQ0E3RCxLQUFBMG1CLFFBQUF6aUIsS0FDQWpFLEtBQUEwbUIsUUFBQXppQixPQUdBakUsS0FBQTBtQixRQUFBemlCLEdBQUFsSSxLQUFBOEgsSUFHQXlXLElBQUEsU0FBQXJXLEVBQUFKLEdBQ0EsR0FBQTdELEtBQUEwbUIsUUFBQXppQixHQUFBLENBSUEsR0FBQWhGLEdBQUFlLEtBQUEwbUIsUUFBQXppQixHQUFBZ2QsUUFBQXBkLEVBRUE1RSxJQUFBLEdBQ0FlLEtBQUEwbUIsUUFBQXppQixHQUFBMnRCLE9BQUEzeUIsRUFBQSxLQUlBb3ZCLFdBQUEsU0FBQXBxQixHQUNBLEdBQUFqRSxLQUFBMG1CLFFBQUF6aUIsR0FBQSxDQUlBLEdBQUFrTCxHQUFBLEVBQ0FvYSxFQUFBdnBCLEtBQUEwbUIsUUFBQXppQixHQUFBZSxNQUVBLElBQUF1a0IsRUFJQSxLQUFBcGEsRUFBQW9hLEVBQUFwYSxJQUNBblAsS0FBQTBtQixRQUFBemlCLEdBQUFrTCxHQUFBM0IsTUFBQXhOLFFBQUEyVSxNQUFBMUwsS0FBQTRvQixVQUFBLE1BSUFDLFNBQUEsU0FBQXRlLEVBQUFGLEVBQUEwVyxFQUFBdFMsR0FDQWxFLEVBQUF4VCxLQUFBd1QsRUFBQUEsRUFDQUYsRUFBQXRULEtBQUFzVCxFQUFBQSxFQUNBMFcsRUFBQUEsR0FBQSxFQUVBaHFCLEtBQUE0bUIsU0FBQXBULEVBQUFGLEVBQUEwVyxFQUFBdFMsSUFHQWtQLFNBQUEsU0FBQXBULEVBQUFGLEVBQUEwVyxFQUFBdFMsR0FDQUEsRUFBQUEsR0FBQThNLEVBQUEwQixLQUFBQyxTQUVBbm1CLEtBQUF1dUIsZUFBQXZ1QixLQUFBOEQsUUFBQXloQixlQUFBeUUsRUFBQSxDQUNBLElBQUErSCxHQUFBL3hCLEtBQUE4RCxRQUFBeWhCLGVBQUE3TixFQUFBMkgsT0FDQTJLLEdBQUErSCxHQUNBQSxJQUNBL3hCLEtBQUFneUIsMEJBQUF0YSxFQUFBMkgsT0FDQXJmLEtBQUF3dUIsZ0JBQUF4RSxJQUVBaHFCLEtBQUFxdkIsV0FBQTdiLEVBQUFGLElBRUF0VCxLQUFBaXlCLFNBQUF6ZSxFQUFBRixFQUFBMFcsRUFBQXRTLEVBQUE3VCxLQUlBcXVCLGdCQUFBLFNBQUFsZSxFQUFBZ1csRUFBQW1JLEVBQUFDLEVBQUExYSxHQUdBLEdBRkExRCxFQUFBQSxFQUFBcWUsU0FBQXJlLEVBQUFoVSxLQUFBK2lCLFNBQUFtQixjQUFBbFEsR0FFQSxDQUlBLEdBQUE2YSxHQUFBckssRUFBQTBHLE9BQUFsWCxFQUVBNmEsR0FBQTlhLE1BQUEvVCxLQUFBMnhCLGNBQUE1ZCxLQUNBOGEsRUFBQTNwQixLQUFBbEYsS0FBQTJ4QixjQUFBenNCLElBR0FpdEIsS0FBQSxJQUNBQSxFQUFBeHlCLEVBQUErYixNQUFBMUgsRUFBQXlkLFlBQUEsRUFBQXp4QixLQUFBMmlCLFFBQUE4TyxZQUFBLElBRUFXLEtBQUEsSUFDQUEsRUFBQXp5QixFQUFBK2IsTUFBQTFILEVBQUFxZCxhQUFBLEVBQUFyeEIsS0FBQTJpQixRQUFBME8sYUFBQSxJQUdBeEMsRUFBQTlhLE1BQUFvZSxHQUFBLEVBQ0F0RCxFQUFBM3BCLEtBQUFrdEIsR0FBQSxFQUVBdkQsRUFBQTlhLEtBQUE4YSxFQUFBOWEsS0FBQSxFQUFBLEVBQUE4YSxFQUFBOWEsS0FBQS9ULEtBQUFvd0IsV0FBQXB3QixLQUFBb3dCLFdBQUF2QixFQUFBOWEsS0FDQThhLEVBQUEzcEIsSUFBQTJwQixFQUFBM3BCLElBQUEsRUFBQSxFQUFBMnBCLEVBQUEzcEIsSUFBQWxGLEtBQUFxd0IsV0FBQXJ3QixLQUFBcXdCLFdBQUF4QixFQUFBM3BCLElBRUE4a0IsRUFBQS9wQixTQUFBK3BCLEdBQUEsT0FBQUEsR0FBQSxTQUFBQSxFQUFBcnFCLEVBQUFpVixJQUFBalYsRUFBQThULElBQUF6VCxLQUFBd1QsRUFBQXFiLEVBQUE5YSxNQUFBcFUsRUFBQThULElBQUF6VCxLQUFBc1QsRUFBQXViLEVBQUEzcEIsTUFBQThrQixFQUVBaHFCLEtBQUE0bUIsU0FBQWlJLEVBQUE5YSxLQUFBOGEsRUFBQTNwQixJQUFBOGtCLEVBQUF0UyxLQUdBOFcsZ0JBQUEsU0FBQXhFLEdBQ0EsR0FBQWhxQixLQUFBOEQsUUFBQXloQixjQUFBLENBR0F5RSxFQUFBQSxHQUFBLENBQ0EsSUFBQTNCLEdBQUE3RCxFQUFBbkYsTUFBQWlKLGtCQUNBLElBQUFELEVBQUEsQ0FNQSxHQUZBcm9CLEtBQUFta0IsY0FBQWtFLEdBQUEyQixFQUFBLE1BRUFBLEdBQUF4RixFQUFBK0QsYUFBQSxDQUNBdm9CLEtBQUFta0IsY0FBQWtFLEdBQUEsVUFFQSxJQUFBRyxHQUFBeG9CLElBQ0F5b0IsR0FBQSxXQUNBLGFBQUFELEVBQUFyRSxjQUFBa0UsS0FDQUcsRUFBQXJFLGNBQUFrRSxHQUFBLFFBTUEsR0FBQXJvQixLQUFBNnRCLFdBQ0EsSUFBQSxHQUFBMWUsR0FBQW5QLEtBQUE2dEIsV0FBQTdvQixPQUFBbUssS0FDQW5QLEtBQUE2dEIsV0FBQTFlLEdBQUFtakIsZUFBQXRJLE1BU0FnSSwwQkFBQSxTQUFBdGEsR0FJQSxHQUhBMVgsS0FBQW1rQixjQUFBSyxFQUFBbkYsTUFBQXVMLDBCQUFBbFQsRUFHQTFYLEtBQUE2dEIsV0FDQSxJQUFBLEdBQUExZSxHQUFBblAsS0FBQTZ0QixXQUFBN29CLE9BQUFtSyxLQUNBblAsS0FBQTZ0QixXQUFBMWUsR0FBQXliLHlCQUFBbFQsSUFTQTJYLFdBQUEsU0FBQTdiLEVBQUFGLEdBb0JBLEdBbkJBdFQsS0FBQThELFFBQUEwaEIsYUFJQXhsQixLQUFBbWtCLGNBQUFLLEVBQUFuRixNQUFBSixXQUFBLGFBQUF6TCxFQUFBLE1BQUFGLEVBQUEsTUFBQXRULEtBQUEybEIsWUFLQW5TLEVBQUE3VCxFQUFBK2IsTUFBQWxJLEdBQ0FGLEVBQUEzVCxFQUFBK2IsTUFBQXBJLEdBQ0F0VCxLQUFBbWtCLGNBQUFwUSxLQUFBUCxFQUFBLEtBQ0F4VCxLQUFBbWtCLGNBQUFqZixJQUFBb08sRUFBQSxNQUdBdFQsS0FBQXdULEVBQUFBLEVBQ0F4VCxLQUFBc1QsRUFBQUEsRUFHQXRULEtBQUE2dEIsV0FDQSxJQUFBLEdBQUExZSxHQUFBblAsS0FBQTZ0QixXQUFBN29CLE9BQUFtSyxLQUNBblAsS0FBQTZ0QixXQUFBMWUsR0FBQW9qQixrQkFTQTNFLFlBQUEsU0FBQXRRLEdBQ0EsR0FBQWdPLEdBQUFoTyxFQUFBa0gsRUFBQW1GLFlBQUFuRixFQUFBMkQsU0FDQXJWLEVBQUE5UyxLQUFBOEQsUUFBQTJoQixjQUFBemxCLEtBQUEyaUIsUUFBQXBrQixDQUVBK3NCLEdBQUEvc0IsRUFBQSxvQkFBQXlCLE1BQ0FzckIsRUFBQS9zQixFQUFBLFNBQUF5QixNQUVBQSxLQUFBOEQsUUFBQXFlLE9BQ0FtSixFQUFBdHJCLEtBQUEyaUIsUUFBQSxRQUFBM2lCLE1BQUEsR0FHQUEsS0FBQThELFFBQUFILGVBQ0EybkIsRUFBQXRyQixLQUFBMmlCLFFBQUEsWUFBQTNpQixNQUNBc3JCLEVBQUF4WSxFQUFBLFlBQUE5UyxNQUNBc3JCLEVBQUF4WSxFQUFBLGNBQUE5UyxNQUNBc3JCLEVBQUF4WSxFQUFBLFVBQUE5UyxPQUdBd2tCLEVBQUFDLGFBQUF6a0IsS0FBQThELFFBQUF5Z0IsaUJBQ0ErRyxFQUFBdHJCLEtBQUEyaUIsUUFBQTZCLEVBQUE0RCxtQkFBQSxlQUFBcG9CLE1BQ0FzckIsRUFBQXhZLEVBQUEwUixFQUFBNEQsbUJBQUEsZUFBQXBvQixNQUNBc3JCLEVBQUF4WSxFQUFBMFIsRUFBQTRELG1CQUFBLGlCQUFBcG9CLE1BQ0FzckIsRUFBQXhZLEVBQUEwUixFQUFBNEQsbUJBQUEsYUFBQXBvQixPQUdBd2tCLEVBQUFHLFdBQUEza0IsS0FBQThELFFBQUE0Z0IsZUFDQTRHLEVBQUF0ckIsS0FBQTJpQixRQUFBLGFBQUEzaUIsTUFDQXNyQixFQUFBeFksRUFBQSxZQUFBOVMsTUFDQXNyQixFQUFBeFksRUFBQSxjQUFBOVMsTUFDQXNyQixFQUFBeFksRUFBQSxXQUFBOVMsT0FHQXNyQixFQUFBdHJCLEtBQUEraUIsU0FBQSxnQkFBQS9pQixNQUNBc3JCLEVBQUF0ckIsS0FBQStpQixTQUFBLHNCQUFBL2lCLE1BQ0FzckIsRUFBQXRyQixLQUFBK2lCLFNBQUEsaUJBQUEvaUIsTUFDQXNyQixFQUFBdHJCLEtBQUEraUIsU0FBQSxrQkFBQS9pQixPQUdBb3ZCLG9CQUFBLFdBQ0EsR0FDQTViLEdBQUFGLEVBREFrZixFQUFBajBCLEVBQUErZ0IsaUJBQUF0ZixLQUFBK2lCLFNBQUEsS0FZQSxPQVRBL2lCLE1BQUE4RCxRQUFBMGhCLGNBQ0FnTixFQUFBQSxFQUFBaE8sRUFBQW5GLE1BQUFKLFdBQUE5WSxNQUFBLEtBQUEsR0FBQUEsTUFBQSxNQUNBcU4sSUFBQWdmLEVBQUEsS0FBQUEsRUFBQSxJQUNBbGYsSUFBQWtmLEVBQUEsS0FBQUEsRUFBQSxNQUVBaGYsR0FBQWdmLEVBQUF6ZSxLQUFBN04sUUFBQSxXQUFBLElBQ0FvTixHQUFBa2YsRUFBQXR0QixJQUFBZ0IsUUFBQSxXQUFBLE1BR0FzTixFQUFBQSxFQUFBRixFQUFBQSxJQUVBd2EsZ0JBQUEsV0F3REEsUUFBQTJFLEdBQUE1dUIsR0FDQSxHQUFBc3RCLEVBQUF0RCxXQUNBLElBQUEsR0FBQTFlLEdBQUFnaUIsRUFBQXRELFdBQUE3b0IsT0FBQW1LLEtBQ0F0TCxFQUFBb0YsS0FBQWtvQixFQUFBdEQsV0FBQTFlLElBMURBLEdBR0E4WCxHQUhBRixFQUFBL21CLEtBQUE4RCxRQUFBRixzQkFDQTh1QixFQUFBLGdCQUFBMXlCLE1BQUE4RCxRQUFBUCxXQUNBc3FCLEtBR0FzRCxFQUFBbnhCLElBRUFBLE1BQUE2dEIsY0FFQTd0QixLQUFBOEQsUUFBQVAsYUFFQXZELEtBQUE4RCxRQUFBZ2hCLFVBQ0FtQyxHQUNBalQsR0FBQThTLEVBQUEsSUFBQUMsRUFBQS9tQixLQUFBOEQsUUFBQVAsWUFDQXdqQixZQUFBQSxFQUNBVyxtQkFBQSxFQUNBZ0wsWUFBQUEsRUFDQWxuQixPQUFBeEwsS0FBQThELFFBQUFzZ0IsaUJBQ0F1RCxPQUFBM25CLEtBQUE4RCxRQUFBd2lCLGlCQUNBc0IsS0FBQTVuQixLQUFBOEQsUUFBQUosZUFDQThqQixTQUFBLEdBR0F4bkIsS0FBQTJpQixRQUFBeUUsWUFBQUgsRUFBQWpULElBQ0E2WixFQUFBOXhCLEtBQUFrckIsSUFJQWpuQixLQUFBOEQsUUFBQWtpQixVQUNBaUIsR0FDQWpULEdBQUE4UyxFQUFBLElBQUFDLEVBQUEvbUIsS0FBQThELFFBQUFQLFlBQ0F3akIsWUFBQUEsRUFDQVcsbUJBQUEsRUFDQWdMLFlBQUFBLEVBQ0FsbkIsT0FBQXhMLEtBQUE4RCxRQUFBc2dCLGlCQUNBdUQsT0FBQTNuQixLQUFBOEQsUUFBQXdpQixpQkFDQXNCLEtBQUE1bkIsS0FBQThELFFBQUFKLGVBQ0ErakIsU0FBQSxHQUdBem5CLEtBQUEyaUIsUUFBQXlFLFlBQUFILEVBQUFqVCxJQUNBNlosRUFBQTl4QixLQUFBa3JCLEtBSUFqbkIsS0FBQThELFFBQUErcEIsYUFFQUEsRUFBQUEsRUFBQThFLE9BQUEzeUIsS0FBQThELFFBQUErcEIsWUFHQSxLQUFBLEdBQUExZSxHQUFBMGUsRUFBQTdvQixPQUFBbUssS0FDQW5QLEtBQUE2dEIsV0FBQTl4QixLQUFBLEdBQUFzckIsR0FBQXJuQixLQUFBNnRCLEVBQUExZSxJQVlBblAsTUFBQThELFFBQUFKLGlCQUNBMUQsS0FBQWtMLEdBQUEsWUFBQSxXQUNBdW5CLEVBQUEsV0FDQXp5QixLQUFBNG5CLFdBSUE1bkIsS0FBQWtMLEdBQUEsZUFBQSxXQUNBdW5CLEVBQUEsV0FDQXp5QixLQUFBNG5CLFdBSUE1bkIsS0FBQWtMLEdBQUEsY0FBQSxXQUNBdW5CLEVBQUEsV0FDQXp5QixLQUFBNG5CLEtBQUEsT0FJQTVuQixLQUFBa0wsR0FBQSxvQkFBQSxXQUNBdW5CLEVBQUEsV0FDQXp5QixLQUFBNG5CLEtBQUEsR0FBQSxRQU1BNW5CLEtBQUFrTCxHQUFBLFVBQUEsV0FDQXVuQixFQUFBLFdBQ0F6eUIsS0FBQXFqQixjQUlBcmpCLEtBQUFrTCxHQUFBLFVBQUEsV0FDQXVuQixFQUFBLFdBQ0F6eUIsS0FBQTRnQixrQkFHQTVnQixNQUFBNnRCLGNBSUFFLFdBQUEsV0FDQXZKLEVBQUEyRCxTQUFBbm9CLEtBQUEyaUIsUUFBQSxRQUFBM2lCLE1BQ0F3a0IsRUFBQTJELFNBQUFub0IsS0FBQTJpQixRQUFBLGFBQUEzaUIsTUFDQXdrQixFQUFBMkQsU0FBQW5vQixLQUFBMmlCLFFBQUEsaUJBQUEzaUIsTUFFQUEsS0FBQWtMLEdBQUEsVUFBQSxXQUNBcUcsYUFBQXZSLEtBQUE0eUIsY0FDQTV5QixLQUFBNHlCLGFBQUEsS0FDQXBPLEVBQUFtRixZQUFBM3BCLEtBQUEyaUIsUUFBQSxRQUFBM2lCLE1BQ0F3a0IsRUFBQW1GLFlBQUEzcEIsS0FBQTJpQixRQUFBLGFBQUEzaUIsTUFDQXdrQixFQUFBbUYsWUFBQTNwQixLQUFBMmlCLFFBQUEsaUJBQUEzaUIsU0FJQTZ5QixPQUFBLFNBQUFqZ0IsR0FDQSxHQUFBNVMsS0FBQTJ1QixRQUFBLENBSUEsR0FBQWpaLEdBQUFvZCxFQUNBbEQsRUFBQUMsRUFDQXNCLEVBQUFueEIsSUFlQSxJQWJBQyxTQUFBRCxLQUFBNHlCLGNBQ0F6QixFQUFBOUMsV0FBQSxlQUlBOWMsYUFBQXZSLEtBQUE0eUIsY0FDQTV5QixLQUFBNHlCLGFBQUFuaEIsV0FBQSxXQUNBMGYsRUFBQXJ0QixRQUFBa3FCLE1BQ0FtRCxFQUFBOUMsV0FBQSxhQUVBOEMsRUFBQXlCLGFBQUEzeUIsUUFDQSxLQUVBLFVBQUEyUyxHQUNBLElBQUFBLEVBQUFtZ0IsV0FDQXJkLEdBQUE5QyxFQUFBK0MsT0FBQTNWLEtBQUE4RCxRQUFBdWdCLGdCQUNBeU8sR0FBQWxnQixFQUFBeUMsT0FBQXJWLEtBQUE4RCxRQUFBdWdCLGtCQUVBM08sR0FBQTlDLEVBQUErQyxPQUNBbWQsR0FBQWxnQixFQUFBeUMsWUFFQSxJQUFBLGVBQUF6QyxHQUNBOEMsRUFBQTlDLEVBQUE4QyxZQUFBLElBQUExVixLQUFBOEQsUUFBQXVnQixnQkFDQXlPLEVBQUFsZ0IsRUFBQWtnQixZQUFBLElBQUE5eUIsS0FBQThELFFBQUF1Z0Isb0JBQ0EsSUFBQSxjQUFBelIsR0FDQThDLEVBQUFvZCxFQUFBbGdCLEVBQUF3QyxXQUFBLElBQUFwVixLQUFBOEQsUUFBQXVnQixvQkFDQSxDQUFBLEtBQUEsVUFBQXpSLElBR0EsTUFGQThDLEdBQUFvZCxHQUFBbGdCLEVBQUEwQyxPQUFBLEVBQUF0VixLQUFBOEQsUUFBQXVnQixnQkFhQSxHQVJBM08sR0FBQTFWLEtBQUE4RCxRQUFBeWlCLHFCQUNBdU0sR0FBQTl5QixLQUFBOEQsUUFBQXlpQixxQkFFQXZtQixLQUFBbXdCLG9CQUNBemEsRUFBQW9kLEVBQ0FBLEVBQUEsR0FHQTl5QixLQUFBOEQsUUFBQWtxQixLQWtCQSxNQWpCQTRCLEdBQUE1dkIsS0FBQWd4QixZQUFBMVEsTUFDQXVQLEVBQUE3dkIsS0FBQWd4QixZQUFBN1csTUFFQXpFLEVBQUEsRUFDQWthLElBQ0FsYSxFQUFBLEdBQ0FrYSxJQUdBa0QsRUFBQSxFQUNBakQsSUFDQWlELEVBQUEsR0FDQWpELFFBR0E3dkIsTUFBQWd6QixTQUFBcEQsRUFBQUMsRUFLQUQsR0FBQTV2QixLQUFBd1QsRUFBQTdULEVBQUErYixNQUFBMWIsS0FBQWt3QixvQkFBQXhhLEVBQUEsR0FDQW1hLEVBQUE3dkIsS0FBQXNULEVBQUEzVCxFQUFBK2IsTUFBQTFiLEtBQUFtd0Isa0JBQUEyQyxFQUFBLEdBRUE5eUIsS0FBQXdtQixXQUFBOVEsRUFBQSxHQUFBLEVBQUFBLEVBQUEsRUFBQSxFQUFBLEVBQ0ExVixLQUFBeW1CLFdBQUFxTSxFQUFBLEdBQUEsRUFBQUEsRUFBQSxFQUFBLEVBQUEsRUFFQWxELEVBQUEsRUFDQUEsRUFBQSxFQUNBQSxFQUFBNXZCLEtBQUFvd0IsYUFDQVIsRUFBQTV2QixLQUFBb3dCLFlBR0FQLEVBQUEsRUFDQUEsRUFBQSxFQUNBQSxFQUFBN3ZCLEtBQUFxd0IsYUFDQVIsRUFBQTd2QixLQUFBcXdCLFlBR0Fyd0IsS0FBQTRtQixTQUFBZ0osRUFBQUMsRUFBQSxLQUtBNUIsVUFBQSxXQUNBanVCLEtBQUFneEIsZUFFQSxnQkFBQWh4QixNQUFBOEQsUUFBQWtxQixPQUNBaHVCLEtBQUE4RCxRQUFBa3FCLEtBQUFodUIsS0FBQStpQixTQUFBeFMsaUJBQUF2USxLQUFBOEQsUUFBQWtxQixPQUdBaHVCLEtBQUFrTCxHQUFBLFVBQUEsV0FDQSxHQUFBcWUsR0FDQTBKLEVBQ0FDLEVBQUFDLEVBQ0E3ZixFQUdBVSxFQU5BN0UsRUFBQSxFQUNBa0QsRUFBQSxFQUVBbUIsRUFBQSxFQUNBNGYsRUFBQXB6QixLQUFBOEQsUUFBQXV2QixXQUFBcnpCLEtBQUE2d0IsYUFDQXlDLEVBQUF0ekIsS0FBQThELFFBQUF5dkIsV0FBQXZ6QixLQUFBOHdCLGFBS0EsSUFGQTl3QixLQUFBd3pCLFNBRUF4ekIsS0FBQTZ3QixjQUFBN3dCLEtBQUE4d0IsZUFBQTl3QixLQUFBd3hCLGVBQUF4eEIsS0FBQTB4QixlQUFBLENBSUEsR0FBQTF4QixLQUFBOEQsUUFBQWtxQixRQUFBLEVBSUEsSUFIQWtGLEVBQUF2ekIsRUFBQStiLE1BQUEwWCxFQUFBLEdBQ0FELEVBQUF4ekIsRUFBQStiLE1BQUE0WCxFQUFBLEdBRUE5ZixHQUFBeFQsS0FBQXd4QixlQUFBLENBS0EsSUFKQXh4QixLQUFBd3pCLE1BQUFya0IsTUFDQW9hLEVBQUEsRUFDQWpXLEVBQUEsRUFFQUEsR0FBQXRULEtBQUEweEIsZ0JBQ0ExeEIsS0FBQXd6QixNQUFBcmtCLEdBQUFvYSxJQUNBL1YsRUFBQTdULEVBQUFpVixJQUFBcEIsRUFBQXhULEtBQUFvd0IsWUFDQTljLEVBQUEzVCxFQUFBaVYsSUFBQXRCLEVBQUF0VCxLQUFBcXdCLFlBQ0F4UyxNQUFBdVYsRUFDQTN1QixPQUFBNnVCLEVBQ0FKLEdBQUExZixFQUFBMGYsRUFDQUMsR0FBQTdmLEVBQUE2ZixHQUdBN2YsR0FBQWdnQixFQUNBL0osR0FHQS9WLElBQUE0ZixFQUNBamtCLFFBT0EsS0FKQTZFLEVBQUFoVSxLQUFBOEQsUUFBQWtxQixLQUNBekUsRUFBQXZWLEVBQUFoUCxPQUNBaXVCLEdBQUEsRUFFQTlqQixFQUFBb2EsRUFBQXBhLEtBQ0EsSUFBQUEsR0FBQTZFLEVBQUE3RSxHQUFBZ2MsWUFBQW5YLEVBQUE3RSxFQUFBLEdBQUFnYyxjQUNBOVksRUFBQSxFQUNBNGdCLEtBR0FqekIsS0FBQXd6QixNQUFBbmhCLEtBQ0FyUyxLQUFBd3pCLE1BQUFuaEIsT0FHQW1CLEVBQUE3VCxFQUFBaVYsS0FBQVosRUFBQTdFLEdBQUFnYyxXQUFBbnJCLEtBQUFvd0IsWUFDQTljLEVBQUEzVCxFQUFBaVYsS0FBQVosRUFBQTdFLEdBQUFxQixVQUFBeFEsS0FBQXF3QixZQUNBNkMsRUFBQTFmLEVBQUE3VCxFQUFBK2IsTUFBQTFILEVBQUE3RSxHQUFBc2lCLFlBQUEsR0FDQTBCLEVBQUE3ZixFQUFBM1QsRUFBQStiLE1BQUExSCxFQUFBN0UsR0FBQWtpQixhQUFBLEdBRUFyeEIsS0FBQXd6QixNQUFBbmhCLEdBQUE0Z0IsSUFDQXpmLEVBQUFBLEVBQ0FGLEVBQUFBLEVBQ0F1SyxNQUFBN0osRUFBQTdFLEdBQUFzaUIsWUFDQWh0QixPQUFBdVAsRUFBQTdFLEdBQUFraUIsYUFDQTZCLEdBQUFBLEVBQ0FDLEdBQUFBLEdBR0EzZixFQUFBeFQsS0FBQW93QixZQUNBL2QsR0FLQXJTLE1BQUFnekIsU0FBQWh6QixLQUFBZ3hCLFlBQUExUSxPQUFBLEVBQUF0Z0IsS0FBQWd4QixZQUFBN1csT0FBQSxFQUFBLEdBR0FuYSxLQUFBOEQsUUFBQXdnQixjQUFBLElBQUEsR0FDQXRrQixLQUFBeXpCLGVBQUF6ekIsS0FBQThELFFBQUF3Z0IsY0FDQXRrQixLQUFBMHpCLGVBQUExekIsS0FBQThELFFBQUF3Z0IsZ0JBRUF0a0IsS0FBQXl6QixlQUFBOXpCLEVBQUErYixNQUFBMWIsS0FBQXd6QixNQUFBeHpCLEtBQUFneEIsWUFBQTFRLE9BQUF0Z0IsS0FBQWd4QixZQUFBN1csT0FBQTBELE1BQUE3ZCxLQUFBOEQsUUFBQXdnQixlQUNBdGtCLEtBQUEwekIsZUFBQS96QixFQUFBK2IsTUFBQTFiLEtBQUF3ekIsTUFBQXh6QixLQUFBZ3hCLFlBQUExUSxPQUFBdGdCLEtBQUFneEIsWUFBQTdXLE9BQUExVixPQUFBekUsS0FBQThELFFBQUF3Z0IsbUJBSUF0a0IsS0FBQWtMLEdBQUEsUUFBQSxXQUNBLEdBQUE4ZSxHQUFBaHFCLEtBQUE4RCxRQUFBbXRCLFdBQUF0eEIsRUFBQWlWLElBQ0FqVixFQUFBaVYsSUFDQWpWLEVBQUE2VixJQUFBN1YsRUFBQThULElBQUF6VCxLQUFBd1QsRUFBQXhULEtBQUE0a0IsUUFBQSxLQUNBamxCLEVBQUE2VixJQUFBN1YsRUFBQThULElBQUF6VCxLQUFBc1QsRUFBQXRULEtBQUE2a0IsUUFBQSxNQUNBLElBRUE3a0IsTUFBQWd6QixTQUNBaHpCLEtBQUFneEIsWUFBQTFRLE1BQUF0Z0IsS0FBQXdtQixXQUNBeG1CLEtBQUFneEIsWUFBQTdXLE1BQUFuYSxLQUFBeW1CLFdBQ0F1RCxNQUtBK0csYUFBQSxTQUFBdmQsRUFBQUYsR0FDQSxJQUFBdFQsS0FBQXd6QixNQUFBeHVCLE9BQ0EsT0FBQXdPLEVBQUEsRUFBQUYsRUFBQSxFQUFBZ04sTUFBQSxFQUFBbkcsTUFBQSxFQUdBLElBQUFoTCxHQUFBLEVBQ0FvYSxFQUFBdnBCLEtBQUF3ekIsTUFBQXh1QixPQUNBcU4sRUFBQSxDQUdBLElBQUExUyxFQUFBOFQsSUFBQUQsRUFBQXhULEtBQUF1dkIsV0FBQXZ2QixLQUFBeXpCLGdCQUNBOXpCLEVBQUE4VCxJQUFBSCxFQUFBdFQsS0FBQXd2QixXQUFBeHZCLEtBQUEwekIsZUFDQSxNQUFBMXpCLE1BQUFneEIsV0FlQSxLQVpBeGQsRUFBQSxFQUNBQSxFQUFBLEVBQ0FBLEVBQUF4VCxLQUFBb3dCLGFBQ0E1YyxFQUFBeFQsS0FBQW93QixZQUdBOWMsRUFBQSxFQUNBQSxFQUFBLEVBQ0FBLEVBQUF0VCxLQUFBcXdCLGFBQ0EvYyxFQUFBdFQsS0FBQXF3QixZQUdBbGhCLEVBQUFvYSxFQUFBcGEsSUFDQSxHQUFBcUUsR0FBQXhULEtBQUF3ekIsTUFBQXJrQixHQUFBLEdBQUErakIsR0FBQSxDQUNBMWYsRUFBQXhULEtBQUF3ekIsTUFBQXJrQixHQUFBLEdBQUFxRSxDQUNBLE9BTUEsSUFGQStWLEVBQUF2cEIsS0FBQXd6QixNQUFBcmtCLEdBQUFuSyxPQUVBcU4sRUFBQWtYLEVBQUFsWCxJQUNBLEdBQUFpQixHQUFBdFQsS0FBQXd6QixNQUFBLEdBQUFuaEIsR0FBQThnQixHQUFBLENBQ0E3ZixFQUFBdFQsS0FBQXd6QixNQUFBLEdBQUFuaEIsR0FBQWlCLENBQ0EsT0E0QkEsTUF4QkFuRSxJQUFBblAsS0FBQWd4QixZQUFBMVEsUUFDQW5SLEdBQUFuUCxLQUFBd21CLFdBRUFyWCxFQUFBLEVBQ0FBLEVBQUEsRUFDQUEsR0FBQW5QLEtBQUF3ekIsTUFBQXh1QixTQUNBbUssRUFBQW5QLEtBQUF3ekIsTUFBQXh1QixPQUFBLEdBR0F3TyxFQUFBeFQsS0FBQXd6QixNQUFBcmtCLEdBQUEsR0FBQXFFLEdBR0FuQixHQUFBclMsS0FBQWd4QixZQUFBN1csUUFDQTlILEdBQUFyUyxLQUFBeW1CLFdBRUFwVSxFQUFBLEVBQ0FBLEVBQUEsRUFDQUEsR0FBQXJTLEtBQUF3ekIsTUFBQSxHQUFBeHVCLFNBQ0FxTixFQUFBclMsS0FBQXd6QixNQUFBLEdBQUF4dUIsT0FBQSxHQUdBc08sRUFBQXRULEtBQUF3ekIsTUFBQSxHQUFBbmhCLEdBQUFpQixJQUlBRSxFQUFBQSxFQUNBRixFQUFBQSxFQUNBZ04sTUFBQW5SLEVBQ0FnTCxNQUFBOUgsSUFJQTJnQixTQUFBLFNBQUF4ZixFQUFBRixFQUFBMFcsRUFBQXRTLEdBQ0FBLEVBQUFBLEdBQUExWCxLQUFBOEQsUUFBQXFoQixhQUVBM1IsR0FBQXhULEtBQUF3ekIsTUFBQXh1QixPQUNBd08sRUFBQXhULEtBQUF3ekIsTUFBQXh1QixPQUFBLEVBQ0F3TyxFQUFBLElBQ0FBLEVBQUEsR0FHQUYsR0FBQXRULEtBQUF3ekIsTUFBQWhnQixHQUFBeE8sT0FDQXNPLEVBQUF0VCxLQUFBd3pCLE1BQUFoZ0IsR0FBQXhPLE9BQUEsRUFDQXNPLEVBQUEsSUFDQUEsRUFBQSxFQUdBLElBQUFxZ0IsR0FBQTN6QixLQUFBd3pCLE1BQUFoZ0IsR0FBQUYsR0FBQUUsRUFDQW9nQixFQUFBNXpCLEtBQUF3ekIsTUFBQWhnQixHQUFBRixHQUFBQSxDQUVBMFcsR0FBQS9wQixTQUFBK3BCLEVBQUFocUIsS0FBQThELFFBQUFtdEIsV0FBQXR4QixFQUFBaVYsSUFDQWpWLEVBQUFpVixJQUNBalYsRUFBQTZWLElBQUE3VixFQUFBOFQsSUFBQWtnQixFQUFBM3pCLEtBQUF3VCxHQUFBLEtBQ0E3VCxFQUFBNlYsSUFBQTdWLEVBQUE4VCxJQUFBbWdCLEVBQUE1ekIsS0FBQXNULEdBQUEsTUFDQSxLQUFBMFcsRUFFQWhxQixLQUFBZ3hCLGFBQ0F4ZCxFQUFBbWdCLEVBQ0FyZ0IsRUFBQXNnQixFQUNBdFQsTUFBQTlNLEVBQ0EyRyxNQUFBN0csR0FHQXRULEtBQUE0bUIsU0FBQStNLEVBQUFDLEVBQUE1SixFQUFBdFMsSUFHQXhRLEtBQUEsU0FBQThpQixFQUFBdFMsR0FDQSxHQUFBbEUsR0FBQXhULEtBQUFneEIsWUFBQTFRLE1BQ0FoTixFQUFBdFQsS0FBQWd4QixZQUFBN1csS0FFQTNHLEtBRUFBLEdBQUF4VCxLQUFBd3pCLE1BQUF4dUIsUUFBQWhGLEtBQUFtd0Isb0JBQ0EzYyxFQUFBLEVBQ0FGLEtBR0F0VCxLQUFBZ3pCLFNBQUF4ZixFQUFBRixFQUFBMFcsRUFBQXRTLElBR0E5USxLQUFBLFNBQUFvakIsRUFBQXRTLEdBQ0EsR0FBQWxFLEdBQUF4VCxLQUFBZ3hCLFlBQUExUSxNQUNBaE4sRUFBQXRULEtBQUFneEIsWUFBQTdXLEtBRUEzRyxLQUVBQSxFQUFBLEdBQUF4VCxLQUFBbXdCLG9CQUNBM2MsRUFBQSxFQUNBRixLQUdBdFQsS0FBQWd6QixTQUFBeGYsRUFBQUYsRUFBQTBXLEVBQUF0UyxJQUdBeVcsVUFBQSxTQUFBdmIsR0FFQSxHQVVBekQsR0FWQTBrQixHQUNBQyxPQUFBLEdBQ0FDLFNBQUEsR0FDQUMsSUFBQSxHQUNBQyxLQUFBLEdBQ0FsZ0IsS0FBQSxHQUNBMkcsR0FBQSxHQUNBNUcsTUFBQSxHQUNBNkcsS0FBQSxHQUtBLElBQUEsZ0JBQUEzYSxNQUFBOEQsUUFBQW9xQixZQUNBLElBQUEvZSxJQUFBblAsTUFBQThELFFBQUFvcUIsWUFDQSxnQkFBQWx1QixNQUFBOEQsUUFBQW9xQixZQUFBL2UsS0FDQW5QLEtBQUE4RCxRQUFBb3FCLFlBQUEvZSxHQUFBblAsS0FBQThELFFBQUFvcUIsWUFBQS9lLEdBQUErWixjQUFBZ0wsV0FBQSxRQUlBbDBCLE1BQUE4RCxRQUFBb3FCLGNBR0EsS0FBQS9lLElBQUEwa0IsR0FDQTd6QixLQUFBOEQsUUFBQW9xQixZQUFBL2UsR0FBQW5QLEtBQUE4RCxRQUFBb3FCLFlBQUEvZSxJQUFBMGtCLEVBQUExa0IsRUFHQXFWLEdBQUEyRCxTQUFBNXBCLEVBQUEsVUFBQXlCLE1BRUFBLEtBQUFrTCxHQUFBLFVBQUEsV0FDQXNaLEVBQUFtRixZQUFBcHJCLEVBQUEsVUFBQXlCLFNBSUFtMEIsS0FBQSxTQUFBdmhCLEdBQ0EsR0FBQTVTLEtBQUEydUIsUUFBQSxDQUlBLEdBTUFFLEdBTkFiLEVBQUFodUIsS0FBQThELFFBQUFrcUIsS0FDQTRCLEVBQUE1QixFQUFBaHVCLEtBQUFneEIsWUFBQTFRLE1BQUF0Z0IsS0FBQXdULEVBQ0FxYyxFQUFBN0IsRUFBQWh1QixLQUFBZ3hCLFlBQUE3VyxNQUFBbmEsS0FBQXNULEVBQ0FrVyxFQUFBaEYsRUFBQXZQLFVBQ0FnQixFQUFBalcsS0FBQW8wQixTQUFBLEVBQ0FDLEVBQUEsR0FZQSxRQVRBcjBCLEtBQUE4RCxRQUFBeWhCLGVBQUF2bEIsS0FBQXV1QixpQkFDQU0sRUFBQTd1QixLQUFBb3ZCLHNCQUVBcHZCLEtBQUFxdkIsV0FBQTF2QixFQUFBK2IsTUFBQW1ULEVBQUFyYixHQUFBN1QsRUFBQStiLE1BQUFtVCxFQUFBdmIsSUFDQXRULEtBQUF1dUIsZ0JBQUEsR0FHQXZ1QixLQUFBczBCLGdCQUFBOUssRUFBQXZULEVBQUEsSUFBQXRXLEVBQUE2VixJQUFBeFYsS0FBQXMwQixnQkFBQUQsRUFBQSxJQUFBLEVBRUF6aEIsRUFBQTZHLFNBQ0EsSUFBQXpaLE1BQUE4RCxRQUFBb3FCLFlBQUE0RixPQUNBOXpCLEtBQUFrd0Isc0JBQUFsd0IsS0FBQW13QixrQkFDQVAsR0FBQTVCLEVBQUEsRUFBQWh1QixLQUFBNndCLGFBRUFoQixHQUFBN0IsRUFBQSxFQUFBaHVCLEtBQUE4d0IsYUFFQSxNQUNBLEtBQUE5d0IsTUFBQThELFFBQUFvcUIsWUFBQTZGLFNBQ0EvekIsS0FBQWt3QixzQkFBQWx3QixLQUFBbXdCLGtCQUNBUCxHQUFBNUIsRUFBQSxFQUFBaHVCLEtBQUE2d0IsYUFFQWhCLEdBQUE3QixFQUFBLEVBQUFodUIsS0FBQTh3QixhQUVBLE1BQ0EsS0FBQTl3QixNQUFBOEQsUUFBQW9xQixZQUFBOEYsSUFDQXBFLEVBQUE1QixFQUFBaHVCLEtBQUF3ekIsTUFBQXh1QixPQUFBLEVBQUFoRixLQUFBb3dCLFdBQ0FQLEVBQUE3QixFQUFBaHVCLEtBQUF3ekIsTUFBQSxHQUFBeHVCLE9BQUEsRUFBQWhGLEtBQUFxd0IsVUFDQSxNQUNBLEtBQUFyd0IsTUFBQThELFFBQUFvcUIsWUFBQStGLEtBQ0FyRSxFQUFBLEVBQ0FDLEVBQUEsQ0FDQSxNQUNBLEtBQUE3dkIsTUFBQThELFFBQUFvcUIsWUFBQW5hLEtBQ0E2YixHQUFBNUIsR0FBQSxFQUFBLEVBQUFodUIsS0FBQXMwQixpQkFBQSxDQUNBLE1BQ0EsS0FBQXQwQixNQUFBOEQsUUFBQW9xQixZQUFBeFQsR0FDQW1WLEdBQUE3QixFQUFBLEVBQUEsRUFBQWh1QixLQUFBczBCLGlCQUFBLENBQ0EsTUFDQSxLQUFBdDBCLE1BQUE4RCxRQUFBb3FCLFlBQUFwYSxNQUNBOGIsR0FBQTVCLEdBQUEsRUFBQSxFQUFBaHVCLEtBQUFzMEIsaUJBQUEsQ0FDQSxNQUNBLEtBQUF0MEIsTUFBQThELFFBQUFvcUIsWUFBQXZULEtBQ0FrVixHQUFBN0IsRUFBQSxFQUFBLEVBQUFodUIsS0FBQXMwQixpQkFBQSxDQUNBLE1BQ0EsU0FDQSxPQUdBLEdBQUF0RyxFQUVBLFdBREFodUIsTUFBQWd6QixTQUFBcEQsRUFBQUMsRUFJQUQsR0FBQSxHQUNBQSxFQUFBLEVBQ0E1dkIsS0FBQXMwQixnQkFBQSxHQUNBMUUsRUFBQTV2QixLQUFBb3dCLGFBQ0FSLEVBQUE1dkIsS0FBQW93QixXQUNBcHdCLEtBQUFzMEIsZ0JBQUEsR0FHQXpFLEVBQUEsR0FDQUEsRUFBQSxFQUNBN3ZCLEtBQUFzMEIsZ0JBQUEsR0FDQXpFLEVBQUE3dkIsS0FBQXF3QixhQUNBUixFQUFBN3ZCLEtBQUFxd0IsV0FDQXJ3QixLQUFBczBCLGdCQUFBLEdBR0F0MEIsS0FBQTRtQixTQUFBZ0osRUFBQUMsRUFBQSxHQUVBN3ZCLEtBQUFvMEIsUUFBQTVLLElBR0F5SSxTQUFBLFNBQUFzQyxFQUFBQyxFQUFBbkssRUFBQW9LLEdBT0EsUUFBQUMsS0FDQSxHQUNBOUUsR0FBQUMsRUFDQW5ZLEVBRkE4UixFQUFBaEYsRUFBQXZQLFNBSUEsT0FBQXVVLElBQUFtTCxHQUNBeEQsRUFBQTdCLGFBQUEsRUFDQTZCLEVBQUE5QixXQUFBa0YsRUFBQUMsUUFFQXJELEVBQUExQyxjQUFBMEMsRUFBQXJ0QixRQUFBb2hCLGFBQ0FpTSxFQUFBOUMsV0FBQSxnQkFNQTdFLEdBQUFBLEVBQUEyRixHQUFBOUUsRUFDQTNTLEVBQUErYyxFQUFBakwsR0FDQW9HLEdBQUEyRSxFQUFBM1AsR0FBQWxOLEVBQUFrTixFQUNBaUwsR0FBQTJFLEVBQUEzUCxHQUFBbk4sRUFBQW1OLEVBQ0FzTSxFQUFBOUIsV0FBQU8sRUFBQUMsUUFFQXNCLEVBQUE3QixhQUNBN0csRUFBQWlNLEtBN0JBLEdBQUF2RCxHQUFBbnhCLEtBQ0E0a0IsRUFBQTVrQixLQUFBd1QsRUFDQXFSLEVBQUE3a0IsS0FBQXNULEVBQ0E2YixFQUFBM0ssRUFBQXZQLFVBQ0EwZixFQUFBeEYsRUFBQTlFLENBNkJBcnFCLE1BQUFzdkIsYUFBQSxFQUNBb0YsS0FFQUUsWUFBQSxTQUFBaGlCLEdBQ0EsT0FBQUEsRUFBQTNPLE1BQ0EsSUFBQSxhQUNBLElBQUEsY0FDQSxJQUFBLGdCQUNBLElBQUEsWUFDQWpFLEtBQUEwdUIsT0FBQTliLEVBQ0EsTUFDQSxLQUFBLFlBQ0EsSUFBQSxjQUNBLElBQUEsZ0JBQ0EsSUFBQSxZQUNBNVMsS0FBQTJ2QixNQUFBL2MsRUFDQSxNQUNBLEtBQUEsV0FDQSxJQUFBLFlBQ0EsSUFBQSxjQUNBLElBQUEsVUFDQSxJQUFBLGNBQ0EsSUFBQSxnQkFDQSxJQUFBLGtCQUNBLElBQUEsY0FDQTVTLEtBQUFzd0IsS0FBQTFkLEVBQ0EsTUFDQSxLQUFBLG9CQUNBLElBQUEsU0FDQTVTLEtBQUFreEIsU0FDQSxNQUNBLEtBQUEsZ0JBQ0EsSUFBQSxzQkFDQSxJQUFBLGlCQUNBLElBQUEsa0JBQ0FseEIsS0FBQXN1QixlQUFBMWIsRUFDQSxNQUNBLEtBQUEsUUFDQSxJQUFBLGlCQUNBLElBQUEsYUFDQTVTLEtBQUE2eUIsT0FBQWpnQixFQUNBLE1BQ0EsS0FBQSxVQUNBNVMsS0FBQW0wQixLQUFBdmhCLEVBQ0EsTUFDQSxLQUFBLFFBQ0E1UyxLQUFBMnVCLFVBQUEvYixFQUFBOGEsZUFDQTlhLEVBQUFLLGlCQUNBTCxFQUFBaWlCLHNCQXlHQXhOLEVBQUE1RSxXQUNBbVMsWUFBQSxTQUFBaGlCLEdBQ0EsT0FBQUEsRUFBQTNPLE1BQ0EsSUFBQSxhQUNBLElBQUEsY0FDQSxJQUFBLGdCQUNBLElBQUEsWUFDQWpFLEtBQUEwdUIsT0FBQTliLEVBQ0EsTUFDQSxLQUFBLFlBQ0EsSUFBQSxjQUNBLElBQUEsZ0JBQ0EsSUFBQSxZQUNBNVMsS0FBQTJ2QixNQUFBL2MsRUFDQSxNQUNBLEtBQUEsV0FDQSxJQUFBLFlBQ0EsSUFBQSxjQUNBLElBQUEsVUFDQSxJQUFBLGNBQ0EsSUFBQSxnQkFDQSxJQUFBLGtCQUNBLElBQUEsY0FDQTVTLEtBQUFzd0IsS0FBQTFkLEtBS0FnTyxRQUFBLFdBQ0E1Z0IsS0FBQThELFFBQUFKLGlCQUNBNk4sYUFBQXZSLEtBQUE4MEIsYUFDQTkwQixLQUFBODBCLFlBQUEsTUFFQTkwQixLQUFBOEQsUUFBQWlqQixjQUNBdkMsRUFBQW1GLFlBQUEzcEIsS0FBQWluQixVQUFBLGFBQUFqbkIsTUFDQXdrQixFQUFBbUYsWUFBQTNwQixLQUFBaW5CLFVBQUF6QyxFQUFBNEQsbUJBQUEsZUFBQXBvQixNQUNBd2tCLEVBQUFtRixZQUFBM3BCLEtBQUFpbkIsVUFBQSxZQUFBam5CLE1BRUF3a0IsRUFBQW1GLFlBQUFwckIsRUFBQSxZQUFBeUIsTUFDQXdrQixFQUFBbUYsWUFBQXByQixFQUFBaW1CLEVBQUE0RCxtQkFBQSxlQUFBcG9CLE1BQ0F3a0IsRUFBQW1GLFlBQUFwckIsRUFBQSxZQUFBeUIsTUFFQXdrQixFQUFBbUYsWUFBQXByQixFQUFBLFdBQUF5QixNQUNBd2tCLEVBQUFtRixZQUFBcHJCLEVBQUFpbUIsRUFBQTRELG1CQUFBLGFBQUFwb0IsTUFDQXdrQixFQUFBbUYsWUFBQXByQixFQUFBLFVBQUF5QixPQUdBQSxLQUFBOEQsUUFBQTRqQixtQkFDQTFuQixLQUFBMmlCLFFBQUFvUyxXQUFBdlYsWUFBQXhmLEtBQUEyaUIsVUFJQStMLE9BQUEsU0FBQTliLEdBQ0EsR0FBQWtjLEdBQUFsYyxFQUFBMk4sUUFBQTNOLEVBQUEyTixRQUFBLEdBQUEzTixDQUVBQSxHQUFBSyxpQkFDQUwsRUFBQWlpQixrQkFFQTcwQixLQUFBc3lCLGlCQUVBdHlCLEtBQUE0dUIsV0FBQSxFQUNBNXVCLEtBQUErdUIsT0FBQSxFQUNBL3VCLEtBQUFnMUIsV0FBQWxHLEVBQUF4TyxNQUNBdGdCLEtBQUFpMUIsV0FBQW5HLEVBQUEzVSxNQUVBbmEsS0FBQW12QixVQUFBM0ssRUFBQXZQLFVBRUFqVixLQUFBOEQsUUFBQTRnQixjQUNBRixFQUFBMkQsU0FBQTVwQixFQUFBLFlBQUF5QixNQUVBQSxLQUFBOEQsUUFBQXlnQixnQkFDQUMsRUFBQTJELFNBQUE1cEIsRUFBQWltQixFQUFBNEQsbUJBQUEsZUFBQXBvQixNQUVBQSxLQUFBOEQsUUFBQUgsY0FDQTZnQixFQUFBMkQsU0FBQTVwQixFQUFBLFlBQUF5QixNQUdBQSxLQUFBK2lCLFNBQUFzTCxXQUFBLHNCQUdBc0IsTUFBQSxTQUFBL2MsR0FDQSxHQUNBK0MsR0FBQU4sRUFDQXVhLEVBQUFDLEVBRkFmLEVBQUFsYyxFQUFBMk4sUUFBQTNOLEVBQUEyTixRQUFBLEdBQUEzTixDQUdBNFIsR0FBQXZQLFNBRUFqVixNQUFBK3VCLE9BQ0EvdUIsS0FBQStpQixTQUFBc0wsV0FBQSxlQUdBcnVCLEtBQUErdUIsT0FBQSxFQUVBcFosRUFBQW1aLEVBQUF4TyxNQUFBdGdCLEtBQUFnMUIsV0FDQWgxQixLQUFBZzFCLFdBQUFsRyxFQUFBeE8sTUFFQWpMLEVBQUF5WixFQUFBM1UsTUFBQW5hLEtBQUFpMUIsV0FDQWoxQixLQUFBaTFCLFdBQUFuRyxFQUFBM1UsTUFFQXlWLEVBQUE1dkIsS0FBQXdULEVBQUFtQyxFQUNBa2EsRUFBQTd2QixLQUFBc1QsRUFBQStCLEVBRUFyVixLQUFBazFCLEtBQUF0RixFQUFBQyxHQUlBamQsRUFBQUssaUJBQ0FMLEVBQUFpaUIsbUJBR0F2RSxLQUFBLFNBQUExZCxHQUNBLEdBQUE1UyxLQUFBNHVCLFVBQUEsQ0FhQSxHQVRBNXVCLEtBQUE0dUIsV0FBQSxFQUVBaGMsRUFBQUssaUJBQ0FMLEVBQUFpaUIsa0JBRUFyUSxFQUFBbUYsWUFBQXByQixFQUFBLFlBQUF5QixNQUNBd2tCLEVBQUFtRixZQUFBcHJCLEVBQUFpbUIsRUFBQTRELG1CQUFBLGVBQUFwb0IsTUFDQXdrQixFQUFBbUYsWUFBQXByQixFQUFBLFlBQUF5QixNQUVBQSxLQUFBK2lCLFNBQUFqZixRQUFBa3FCLEtBQUEsQ0FDQSxHQUFBQSxHQUFBaHVCLEtBQUEraUIsU0FBQWdPLGFBQUEvd0IsS0FBQStpQixTQUFBdlAsRUFBQXhULEtBQUEraUIsU0FBQXpQLEdBRUEwVyxFQUFBaHFCLEtBQUE4RCxRQUFBbXRCLFdBQUF0eEIsRUFBQWlWLElBQ0FqVixFQUFBaVYsSUFDQWpWLEVBQUE2VixJQUFBN1YsRUFBQThULElBQUF6VCxLQUFBK2lCLFNBQUF2UCxFQUFBd2EsRUFBQXhhLEdBQUEsS0FDQTdULEVBQUE2VixJQUFBN1YsRUFBQThULElBQUF6VCxLQUFBK2lCLFNBQUF6UCxFQUFBMGEsRUFBQTFhLEdBQUEsTUFDQSxJQUVBdFQsTUFBQStpQixTQUFBdlAsR0FBQXdhLEVBQUF4YSxHQUFBeFQsS0FBQStpQixTQUFBelAsR0FBQTBhLEVBQUExYSxJQUNBdFQsS0FBQStpQixTQUFBeUQsV0FBQSxFQUNBeG1CLEtBQUEraUIsU0FBQTBELFdBQUEsRUFDQXptQixLQUFBK2lCLFNBQUFpTyxZQUFBaEQsRUFDQWh1QixLQUFBK2lCLFNBQUE2RCxTQUFBb0gsRUFBQXhhLEVBQUF3YSxFQUFBMWEsRUFBQTBXLEVBQUFocUIsS0FBQStpQixTQUFBamYsUUFBQXFoQixlQUlBbmxCLEtBQUErdUIsT0FDQS91QixLQUFBK2lCLFNBQUFzTCxXQUFBLGVBSUFpRSxlQUFBLFNBQUF0SSxHQUNBQSxFQUFBQSxHQUFBLENBQ0EsSUFBQTNCLEdBQUE3RCxFQUFBbkYsTUFBQWlKLGtCQUNBLElBQUFELElBSUFyb0IsS0FBQXVuQixlQUFBYyxHQUFBMkIsRUFBQSxNQUVBQSxHQUFBeEYsRUFBQStELGNBQUEsQ0FDQXZvQixLQUFBdW5CLGVBQUFjLEdBQUEsVUFFQSxJQUFBRyxHQUFBeG9CLElBQ0F5b0IsR0FBQSxXQUNBLGFBQUFELEVBQUFqQixlQUFBYyxLQUNBRyxFQUFBakIsZUFBQWMsR0FBQSxVQU1BdUMseUJBQUEsU0FBQWxULEdBQ0ExWCxLQUFBdW5CLGVBQUEvQyxFQUFBbkYsTUFBQXVMLDBCQUFBbFQsR0FHQTJMLFFBQUEsV0FDQXJqQixLQUFBc3lCLGlCQUVBdHlCLEtBQUE4RCxRQUFBMGpCLFVBQUF4bkIsS0FBQThELFFBQUEyakIsUUFDQXpuQixLQUFBdW5CLGVBQUE0TixRQUFBbjFCLEtBQUEraUIsU0FBQW1OLG9CQUFBLFFBQUEsT0FDQWx3QixLQUFBOEQsUUFBQTJqQixVQUFBem5CLEtBQUE4RCxRQUFBMGpCLFFBQ0F4bkIsS0FBQXVuQixlQUFBNE4sUUFBQW4xQixLQUFBK2lCLFNBQUFvTixrQkFBQSxRQUFBLE9BRUFud0IsS0FBQXVuQixlQUFBNE4sUUFBQW4xQixLQUFBK2lCLFNBQUFtTixxQkFBQWx3QixLQUFBK2lCLFNBQUFvTixrQkFBQSxRQUFBLE9BR0Fud0IsS0FBQStpQixTQUFBbU4scUJBQUFsd0IsS0FBQStpQixTQUFBb04sbUJBQ0EzTCxFQUFBbGxCLFNBQUFVLEtBQUEyaUIsUUFBQSx5QkFDQTZCLEVBQUFybEIsWUFBQWEsS0FBQTJpQixRQUFBLHdCQUVBM2lCLEtBQUE4RCxRQUFBNGpCLG1CQUFBMW5CLEtBQUE4RCxRQUFBNHVCLGNBQ0ExeUIsS0FBQThELFFBQUEwakIsUUFDQXhuQixLQUFBMmlCLFFBQUF0RCxNQUFBdkwsTUFBQSxNQUVBOVQsS0FBQTJpQixRQUFBdEQsTUFBQXROLE9BQUEsU0FJQXlTLEVBQUFybEIsWUFBQWEsS0FBQTJpQixRQUFBLHlCQUNBNkIsRUFBQWxsQixTQUFBVSxLQUFBMmlCLFFBQUEsd0JBRUEzaUIsS0FBQThELFFBQUE0akIsbUJBQUExbkIsS0FBQThELFFBQUE0dUIsY0FDQTF5QixLQUFBOEQsUUFBQTBqQixRQUNBeG5CLEtBQUEyaUIsUUFBQXRELE1BQUF2TCxNQUFBLE1BRUE5VCxLQUFBMmlCLFFBQUF0RCxNQUFBdE4sT0FBQSxPQUtBL1IsTUFBQTJpQixRQUFBME8sWUFFQXJ4QixNQUFBOEQsUUFBQTBqQixVQUNBeG5CLEtBQUE2d0IsYUFBQTd3QixLQUFBMmlCLFFBQUEyTyxZQUNBdHhCLEtBQUE4RCxRQUFBMEgsUUFDQXhMLEtBQUFvMUIsZUFBQXoxQixFQUFBaVYsSUFBQWpWLEVBQUErYixNQUFBMWIsS0FBQTZ3QixhQUFBN3dCLEtBQUE2d0IsY0FBQTd3QixLQUFBK2lCLFNBQUF5TyxlQUFBeHhCLEtBQUE2d0IsY0FBQSxJQUFBLEdBQ0E3d0IsS0FBQXVuQixlQUFBMUosTUFBQTdkLEtBQUFvMUIsZUFBQSxNQUVBcDFCLEtBQUFvMUIsZUFBQXAxQixLQUFBaW5CLFVBQUFxSyxZQUdBdHhCLEtBQUFpb0IsUUFBQWpvQixLQUFBNndCLGFBQUE3d0IsS0FBQW8xQixlQUVBLFFBQUFwMUIsS0FBQThELFFBQUE2akIsUUFDQTNuQixLQUFBcTFCLGNBQUFyMUIsS0FBQW8xQixlQUFBLEVBQ0FwMUIsS0FBQXMxQixhQUFBdDFCLEtBQUE2d0IsYUFBQSxJQUVBN3dCLEtBQUFxMUIsYUFBQSxFQUNBcjFCLEtBQUFzMUIsYUFBQXQxQixLQUFBaW9CLFNBR0Fqb0IsS0FBQStuQixXQUFBL25CLEtBQUE4RCxRQUFBK2pCLGFBQUE3bkIsS0FBQStpQixTQUFBcU4sWUFBQXB3QixLQUFBaW9CLFFBQUFqb0IsS0FBQStpQixTQUFBcU47QUFHQXB3QixLQUFBOEQsUUFBQTJqQixVQUNBem5CLEtBQUE4d0IsY0FBQTl3QixLQUFBMmlCLFFBQUE0TyxhQUNBdnhCLEtBQUE4RCxRQUFBMEgsUUFDQXhMLEtBQUF1MUIsZ0JBQUE1MUIsRUFBQWlWLElBQUFqVixFQUFBK2IsTUFBQTFiLEtBQUE4d0IsY0FBQTl3QixLQUFBOHdCLGVBQUE5d0IsS0FBQStpQixTQUFBMk8sZ0JBQUExeEIsS0FBQTh3QixlQUFBLElBQUEsR0FDQTl3QixLQUFBdW5CLGVBQUE5aUIsT0FBQXpFLEtBQUF1MUIsZ0JBQUEsTUFFQXYxQixLQUFBdTFCLGdCQUFBdjFCLEtBQUFpbkIsVUFBQXNLLGFBR0F2eEIsS0FBQWtvQixRQUFBbG9CLEtBQUE4d0IsY0FBQTl3QixLQUFBdTFCLGdCQUVBLFFBQUF2MUIsS0FBQThELFFBQUE2akIsUUFDQTNuQixLQUFBdzFCLGNBQUF4MUIsS0FBQXUxQixnQkFBQSxFQUNBdjFCLEtBQUF5MUIsYUFBQXoxQixLQUFBOHdCLGNBQUEsSUFFQTl3QixLQUFBdzFCLGFBQUEsRUFDQXgxQixLQUFBeTFCLGFBQUF6MUIsS0FBQWtvQixTQUdBbG9CLEtBQUFrb0IsUUFBQWxvQixLQUFBOHdCLGNBQUE5d0IsS0FBQXUxQixnQkFDQXYxQixLQUFBZ29CLFdBQUFob0IsS0FBQThELFFBQUFna0IsYUFBQTluQixLQUFBK2lCLFNBQUFzTixZQUFBcndCLEtBQUFrb0IsUUFBQWxvQixLQUFBK2lCLFNBQUFzTixZQUdBcndCLEtBQUF1eUIsa0JBR0FBLGVBQUEsV0FDQSxHQUFBL2UsR0FBQXhULEtBQUE4RCxRQUFBMGpCLFNBQUE3bkIsRUFBQStiLE1BQUExYixLQUFBK25CLFdBQUEvbkIsS0FBQStpQixTQUFBdlAsSUFBQSxFQUNBRixFQUFBdFQsS0FBQThELFFBQUEyakIsU0FBQTluQixFQUFBK2IsTUFBQTFiLEtBQUFnb0IsV0FBQWhvQixLQUFBK2lCLFNBQUF6UCxJQUFBLENBRUF0VCxNQUFBOEQsUUFBQTR4QixtQkFDQWxpQixFQUFBeFQsS0FBQXExQixjQUNBLFNBQUFyMUIsS0FBQThELFFBQUE2akIsU0FDQTNuQixLQUFBNmQsTUFBQWxlLEVBQUFpVixJQUFBNVUsS0FBQW8xQixlQUFBNWhCLEVBQUEsR0FDQXhULEtBQUF1bkIsZUFBQTFKLE1BQUE3ZCxLQUFBNmQsTUFBQSxNQUVBckssRUFBQXhULEtBQUFxMUIsY0FDQTdoQixFQUFBeFQsS0FBQXMxQixhQUNBLFNBQUF0MUIsS0FBQThELFFBQUE2akIsUUFDQTNuQixLQUFBNmQsTUFBQWxlLEVBQUFpVixJQUFBNVUsS0FBQW8xQixnQkFBQTVoQixFQUFBeFQsS0FBQWlvQixTQUFBLEdBQ0Fqb0IsS0FBQXVuQixlQUFBMUosTUFBQTdkLEtBQUE2ZCxNQUFBLEtBQ0FySyxFQUFBeFQsS0FBQWlvQixRQUFBam9CLEtBQUFvMUIsZUFBQXAxQixLQUFBNmQsT0FFQXJLLEVBQUF4VCxLQUFBczFCLGFBRUEsU0FBQXQxQixLQUFBOEQsUUFBQTZqQixRQUFBM25CLEtBQUE2ZCxPQUFBN2QsS0FBQW8xQixpQkFDQXAxQixLQUFBNmQsTUFBQTdkLEtBQUFvMUIsZUFDQXAxQixLQUFBdW5CLGVBQUExSixNQUFBN2QsS0FBQTZkLE1BQUEsTUFHQXZLLEVBQUF0VCxLQUFBdzFCLGNBQ0EsU0FBQXgxQixLQUFBOEQsUUFBQTZqQixTQUNBM25CLEtBQUF5RSxPQUFBOUUsRUFBQWlWLElBQUE1VSxLQUFBdTFCLGdCQUFBLEVBQUFqaUIsRUFBQSxHQUNBdFQsS0FBQXVuQixlQUFBOWlCLE9BQUF6RSxLQUFBeUUsT0FBQSxNQUVBNk8sRUFBQXRULEtBQUF3MUIsY0FDQWxpQixFQUFBdFQsS0FBQXkxQixhQUNBLFNBQUF6MUIsS0FBQThELFFBQUE2akIsUUFDQTNuQixLQUFBeUUsT0FBQTlFLEVBQUFpVixJQUFBNVUsS0FBQXUxQixnQkFBQSxHQUFBamlCLEVBQUF0VCxLQUFBa29CLFNBQUEsR0FDQWxvQixLQUFBdW5CLGVBQUE5aUIsT0FBQXpFLEtBQUF5RSxPQUFBLEtBQ0E2TyxFQUFBdFQsS0FBQWtvQixRQUFBbG9CLEtBQUF1MUIsZ0JBQUF2MUIsS0FBQXlFLFFBRUE2TyxFQUFBdFQsS0FBQXkxQixhQUVBLFNBQUF6MUIsS0FBQThELFFBQUE2akIsUUFBQTNuQixLQUFBeUUsUUFBQXpFLEtBQUF1MUIsa0JBQ0F2MUIsS0FBQXlFLE9BQUF6RSxLQUFBdTFCLGdCQUNBdjFCLEtBQUF1bkIsZUFBQTlpQixPQUFBekUsS0FBQXlFLE9BQUEsT0FJQXpFLEtBQUF3VCxFQUFBQSxFQUNBeFQsS0FBQXNULEVBQUFBLEVBRUF0VCxLQUFBK2lCLFNBQUFqZixRQUFBMGhCLGFBQ0F4bEIsS0FBQXVuQixlQUFBL0MsRUFBQW5GLE1BQUFKLFdBQUEsYUFBQXpMLEVBQUEsTUFBQUYsRUFBQSxNQUFBdFQsS0FBQStpQixTQUFBNEMsWUFFQTNsQixLQUFBdW5CLGVBQUF4VCxLQUFBUCxFQUFBLEtBQ0F4VCxLQUFBdW5CLGVBQUFyaUIsSUFBQW9PLEVBQUEsT0FJQTRoQixLQUFBLFNBQUExaEIsRUFBQUYsR0FDQUUsRUFBQSxFQUNBQSxFQUFBLEVBQ0FBLEVBQUF4VCxLQUFBaW9CLFVBQ0F6VSxFQUFBeFQsS0FBQWlvQixTQUdBM1UsRUFBQSxFQUNBQSxFQUFBLEVBQ0FBLEVBQUF0VCxLQUFBa29CLFVBQ0E1VSxFQUFBdFQsS0FBQWtvQixTQUdBMVUsRUFBQXhULEtBQUE4RCxRQUFBMGpCLFFBQUE3bkIsRUFBQStiLE1BQUFsSSxFQUFBeFQsS0FBQStuQixZQUFBL25CLEtBQUEraUIsU0FBQXZQLEVBQ0FGLEVBQUF0VCxLQUFBOEQsUUFBQTJqQixRQUFBOW5CLEVBQUErYixNQUFBcEksRUFBQXRULEtBQUFnb0IsWUFBQWhvQixLQUFBK2lCLFNBQUF6UCxFQUVBdFQsS0FBQStpQixTQUFBNkQsU0FBQXBULEVBQUFGLElBR0FzVSxLQUFBLFNBQUErTixFQUFBQyxHQUNBLElBQUFBLEdBQUE1MUIsS0FBQTYxQixRQUFBLENBSUF0a0IsYUFBQXZSLEtBQUE4MEIsYUFDQTkwQixLQUFBODBCLFlBQUEsSUFFQSxJQUFBOUssR0FBQTJMLEVBQUEsSUFBQSxJQUNBRyxFQUFBSCxFQUFBLEVBQUEsR0FFQUEsR0FBQUEsRUFBQSxJQUFBLElBRUEzMUIsS0FBQXNuQixhQUFBOUMsRUFBQW5GLE1BQUFpSixvQkFBQTBCLEVBQUEsS0FFQWhxQixLQUFBODBCLFlBQUFyakIsV0FBQSxTQUFBa2tCLEdBQ0EzMUIsS0FBQXNuQixhQUFBdkQsUUFBQTRSLEVBQ0EzMUIsS0FBQTYxQixTQUFBRixHQUNBSSxLQUFBLzFCLEtBQUEyMUIsR0FBQUcsTUFJQXRULEVBQUFnQyxNQUFBQSxFQUVBLG1CQUFBM2tCLFNBQUFBLE9BQUFELFFBQ0FDLE9BQUFELFFBQUE0aUIsRUFDQSxrQkFBQS9pQixTQUFBQSxPQUFBQyxJQUNBRCxPQUFBLFdBQUEsTUFBQStpQixLQUVBamtCLEVBQUFpa0IsUUFBQUEsR0FHQWprQixPQUFBNUMsU0FBQWdFLE1DdGtFQWpFLEVBQUFDLFVBQUFDLE1BQUEsV0FFQSxHQUFBbzZCLEdBQUF0NkIsRUFBQSxzQkFDQXU2QixFQUFBdjZCLEVBQUEscUJBRUF3NkIsRUFBQXg2QixFQUFBLHNCQUNBeTZCLEVBQUF6NkIsRUFBQSx1QkFDQTA2QixFQUFBMTZCLEVBQUEsd0JBRUEyNkIsRUFBQTM2QixFQUFBLGdDQUVBMGpCLEdBREExakIsRUFBQSxrQkFDQSxFQUVBczZCLEdBQUE5cUIsR0FBQSxRQUFBLFdBQ0EsR0FBQTdOLEdBQUEraEIsRUFBQSxFQUNBckwsRUFBQXFMLEVBQUEsRUFDQWtYLEVBQUFsWCxFQUFBLEVBQ0FtWCxFQUFBblgsRUFBQSxDQUVBQSxHQUFBLElBQ0FBLEVBQUFpWCxFQUFBcnhCLE9BQUEsR0FHQTNILElBQUEsSUFDQUEsRUFBQWc1QixFQUFBcnhCLE9BQUEsR0FHQStPLElBQUEsSUFDQUEsRUFBQXNpQixFQUFBcnhCLE9BQUEsR0FFQStPLElBQUEsSUFDQUEsRUFBQXNpQixFQUFBcnhCLE9BQUEsR0FHQXN4QixJQUFBLElBQ0FBLEVBQUFELEVBQUFyeEIsT0FBQSxHQUVBc3hCLElBQUEsSUFDQUEsRUFBQUQsRUFBQXJ4QixPQUFBLEdBRUFzeEIsSUFBQSxJQUNBQSxFQUFBRCxFQUFBcnhCLE9BQUEsR0FHQXV4QixHQUFBRixFQUFBcnhCLFNBQ0F1eEIsRUFBQSxHQUVBQSxHQUFBRixFQUFBcnhCLE9BQUEsSUFDQXV4QixFQUFBLEdBR0FMLEVBQUEzeEIsSUFBQSxVQUFBLEdBQ0E0eEIsRUFBQTV4QixJQUFBLFVBQUEsR0FDQTZ4QixFQUFBN3hCLElBQUEsVUFBQSxHQUVBN0ksRUFBQTZDLFFBQUFzZixRQUFBLEtBQ0E4RCxRQUFBMkIsSUFBQSx5QkFDQStTLEVBQUFoM0IsR0FBQStmLEdBQUE3YSxLQUFBd1AsS0FBQSxNQUFBZ1EsUUFBQSxJQUNBc1MsRUFBQWgzQixHQUFBazNCLEdBQUFoeUIsS0FBQXdQLEtBQUEsT0FBQWdRLFFBQUEsSUFDQXNTLEVBQUFoM0IsR0FBQWhDLEdBQUFrSCxLQUFBd1AsS0FBQSxNQUFBZ1EsUUFBQSxJQUNBc1MsRUFBQWgzQixHQUFBMFUsR0FBQXhQLEtBQUF3UCxLQUFBLE1BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFpM0IsR0FBQS94QixLQUFBd1AsS0FBQSxPQUFBZ1EsUUFBQSxNQUVBcEMsUUFBQTJCLElBQUEseUJBQ0ErUyxFQUFBaDNCLEdBQUErZixHQUFBN2EsS0FBQVcsSUFBQSxNQUFBNk8sS0FBQSxNQUFBZ1EsUUFBQSxJQUNBc1MsRUFBQWgzQixHQUFBazNCLEdBQUFoeUIsS0FBQVcsSUFBQSxPQUFBNk8sS0FBQSxNQUFBZ1EsUUFBQSxJQUNBc1MsRUFBQWgzQixHQUFBaEMsR0FBQWtILEtBQUFXLElBQUEsTUFBQTZPLEtBQUEsTUFBQWdRLFFBQUEsSUFDQXNTLEVBQUFoM0IsR0FBQTBVLEdBQUF4UCxLQUFBVyxJQUFBLE9BQUE2TyxLQUFBLE1BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFpM0IsR0FBQS94QixLQUFBVyxJQUFBLFFBQUE2TyxLQUFBLE1BQUFnUSxRQUFBLEtBR0FwQyxRQUFBMkIsSUFBQSw0QkFBQWdULEVBQUEsVUFBQXZpQixFQUFBLFlBQUExVyxFQUFBLE9BQUEraEIsRUFBQSxjQUFBbVgsR0FFQUwsRUFBQTdoQixNQUFBLEdBQUFvRCxTQUFBc00sUUFBQSxHQUFBLEtBQ0FvUyxFQUFBOWhCLE1BQUEsR0FBQW9ELFNBQUFzTSxRQUFBLEdBQUEsS0FDQXFTLEVBQUEvaEIsTUFBQSxHQUFBb0QsU0FBQXNNLFFBQUEsR0FBQSxLQU1BM0UsTUFHQTZXLEVBQUEvcUIsR0FBQSxRQUFBLFdBQ0FrVSxHQUFBaVgsRUFBQXJ4QixTQUNBb2EsRUFBQSxFQUVBLElBQUFvWCxHQUFBcFgsRUFBQSxFQUNBcVgsRUFBQXJYLEVBQUEsRUFDQXNYLEVBQUF0WCxFQUFBLEVBQ0F1WCxFQUFBdlgsRUFBQSxFQUNBd1gsRUFBQXhYLEVBQUEsQ0FFQXVYLEtBQUEsSUFDQUEsRUFBQU4sRUFBQXJ4QixPQUFBLEdBR0E0eEIsSUFBQSxJQUNBQSxFQUFBUCxFQUFBcnhCLE9BQUEsR0FFQTR4QixJQUFBLElBQ0FBLEVBQUFQLEVBQUFyeEIsT0FBQSxHQUdBMHhCLEdBQUFMLEVBQUFyeEIsU0FDQTB4QixFQUFBLEdBR0FELEdBQUFKLEVBQUFyeEIsU0FDQXl4QixFQUFBLEdBRUFBLEdBQUFKLEVBQUFyeEIsT0FBQSxJQUNBeXhCLEVBQUEsR0FFQUEsR0FBQUosRUFBQXJ4QixPQUFBLElBQ0F5eEIsRUFBQSxHQUdBRCxHQUFBSCxFQUFBcnhCLFNBQ0F3eEIsRUFBQSxHQUVBQSxHQUFBSCxFQUFBcnhCLE9BQUEsSUFDQXd4QixFQUFBLEdBRUFBLEdBQUFILEVBQUFyeEIsT0FBQSxJQUNBd3hCLEVBQUEsR0FFQUEsR0FBQUgsRUFBQXJ4QixPQUFBLElBQ0F3eEIsRUFBQSxHQUdBTixFQUFBM3hCLElBQUEsVUFBQSxHQUNBNHhCLEVBQUE1eEIsSUFBQSxVQUFBLEdBQ0E2eEIsRUFBQTd4QixJQUFBLFVBQUEsR0FFQTdJLEVBQUE2QyxRQUFBc2YsUUFBQSxLQUNBOEQsUUFBQTJCLElBQUEseUJBQ0ErUyxFQUFBaDNCLEdBQUErZixHQUFBN2EsS0FBQXdQLEtBQUEsTUFBQWdRLFFBQUEsSUFDQXNTLEVBQUFoM0IsR0FBQXMzQixHQUFBcHlCLEtBQUF3UCxLQUFBLE9BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFxM0IsR0FBQW55QixLQUFBd1AsS0FBQSxNQUFBZ1EsUUFBQSxJQUNBc1MsRUFBQWgzQixHQUFBbzNCLEdBQUFseUIsS0FBQXdQLEtBQUEsTUFBQWdRLFFBQUEsSUFDQXNTLEVBQUFoM0IsR0FBQW0zQixHQUFBanlCLEtBQUF3UCxLQUFBLE9BQUFnUSxRQUFBLE1BRUFwQyxRQUFBMkIsSUFBQSx5QkFDQStTLEVBQUFoM0IsR0FBQStmLEdBQUE3YSxLQUFBVyxJQUFBLE9BQUE2TyxLQUFBLE1BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFzM0IsR0FBQXB5QixLQUFBVyxJQUFBLFFBQUE2TyxLQUFBLE1BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFxM0IsR0FBQW55QixLQUFBVyxJQUFBLE1BQUE2TyxLQUFBLE1BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFvM0IsR0FBQWx5QixLQUFBVyxJQUFBLE1BQUE2TyxLQUFBLE1BQUFnUSxRQUFBLElBQ0FzUyxFQUFBaDNCLEdBQUFtM0IsR0FBQWp5QixLQUFBVyxJQUFBLE9BQUE2TyxLQUFBLE1BQUFnUSxRQUFBLEtBR0FwQyxRQUFBMkIsSUFBQSw0QkFBQXNULEVBQUEsV0FBQUQsRUFBQSxPQUFBdlgsRUFBQSxhQUFBc1gsRUFBQSxZQUFBRCxFQUFBLGVBQUFELEdBRUFOLEVBQUE3aEIsTUFBQSxHQUFBb0QsU0FBQXNNLFFBQUEsR0FBQSxLQUNBb1MsRUFBQTloQixNQUFBLEdBQUFvRCxTQUFBc00sUUFBQSxHQUFBLEtBQ0FxUyxFQUFBL2hCLE1BQUEsR0FBQW9ELFNBQUFzTSxRQUFBLEdBQUEsS0FFQTNFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgdmFyIG1hcDtcclxuICAgIHZhciBlZ2dsYWJzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC40NTA0OTk2NjAyMzU2LCAzMC41MTEwMjg3NjY2MzIwOCk7XHJcbiAgICB2YXIgbWFwQ29vcmRpbmF0ZXMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjQ1MDQ5OTY2MDIzNTYsIDMwLjUxMTAyODc2NjYzMjA4KSxcclxuICAgICAgICBtYXJrZXIxPW5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTAuNDYxMzUzLCAzMC41MTAwMTkpLFxyXG4gICAgICAgIG1hcmtlcjI9bmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MC40NTgzODMsIDMwLjQwNTUxMyksXHJcbiAgICAgICAgbWFya2VyMz1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUwLjQ0MjAzOSwgMzAuNDczODc5KTtcclxuXHJcblxyXG5cclxuICAgIHZhciBtYXJrZXJzID0gW107XHJcblxyXG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXJJbWFnZShcclxuICAgICAgICAgICAgJy4uL2ltYWdlL21hcmtlckhhcm1zLnBuZycsXHJcbiAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5TaXplKDMyMCw4MCksXHJcbiAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLDApLFxyXG4gICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTAsMTApXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXIgaW1hZ2UyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlckltYWdlKFxyXG4gICAgICAgICAgICAnLi4vaW1hZ2UvbWFya2VyQmlibGlvdGVrYS5wbmcnLFxyXG4gICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMjAsMTYwKSxcclxuICAgICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsMCksXHJcbiAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgxMCwxMClcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBpbWFnZTMgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VySW1hZ2UoXHJcbiAgICAgICAgICAgICcuLi9pbWFnZS9tYXJrZXJBbnRvc2hrYS5wbmcnLFxyXG4gICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMjAsMTYwKSxcclxuICAgICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsMCksXHJcbiAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgxMCwxMClcclxuICAgICAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE1hcmtlcigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFya2Vycy5wdXNoKG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyMSxcclxuICAgICAgICAgICAgcmFpc2VPbkRyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiBpbWFnZSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWFya2VyMigpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIG1hcmtlcnMucHVzaChuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IG1hcmtlcjIsXHJcbiAgICAgICAgICAgIHJhaXNlT25EcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgaWNvbjogaW1hZ2UyLFxyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYXJrZXIzKClcclxuICAgIHtcclxuICAgICAgICBtYXJrZXJzLnB1c2gobmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBtYXJrZXIzLFxyXG4gICAgICAgICAgICByYWlzZU9uRHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb246IGltYWdlMyxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIHpvb206IDEzLFxyXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgICBjZW50ZXI6IG1hcENvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubmVpZ2hib3Job29kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jYW52YXMnKSxtYXBPcHRpb25zKTtcclxuICAgICAgICBhZGRNYXJrZXIoKTtcclxuICAgICAgICBhZGRNYXJrZXIyKCk7XHJcbiAgICAgICAgYWRkTWFya2VyMygpO1xyXG5cclxuICAgIH1cclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0aWFsaXplKTtcclxuXHJcbn0pO1xyXG5cclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHR2YXIgaGVhZGVyTG9nbz0kKCcuaGVhZGVyX2xvZ28nKSwvL9C60LDRgNGC0LjQvdC60LAg0LvQvtCz0L7RgtC40L/QsFxyXG5cdFx0aGVhZEJ1dHRvbj0kKCcuaGVhZGVyX19jb2luc19idXR0b24nKSwvL9C60L3QvtC/0LrQsCDQutGD0L/QuNGC0Ywg0LIg0YjQsNC/0LrQtVxyXG5cdFx0YWN0aXZlTGluaz0kKCcuaGVhZGVyX25hdi10ZXh0JyksLy/QstGL0LHQuNGA0LDQtdC8INGB0YHRi9C70LrQuCDQvdCwINGN0LrRgNCw0L3RiyzRh9GC0L7QsSDRgdC00LXQu9Cw0YLRjCDQsNC60YLQuNCy0L3Ri9C8XHJcblx0XHRoZWFkZXJOYXY9JCgnLmhlYWRlcl9uYXYnKTsvL9Cx0LvQvtC6INCz0LTQtSDRgdGB0YvQu9C60Lgg0L3QsCDRgdGC0YDQsNC90LjRhtGLXHJcblxyXG5cdCQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcclxuXHQgICBhbmNob3JzOiBbJ21haW4nLCAnYWJvdXQnLCAnYm94JywgJ2RldGFpbHMnLCAnY29udGFjdHMnXSxcclxuXHJcblx0ICAgY3NzMzogdHJ1ZSxcclxuXHQgICAvLyBuYXZpZ2F0aW9uOiB0cnVlLFxyXG5cdCAgIC8vIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHQgICAvLyBuYXZpZ2F0aW9uVG9vbHRpcHM6IFsn0JPQu9Cw0LLQvdCw0Y8nLCAn0J4g0L3QsNGBJywgJ9CQINGH0YLQviDQstC90YPRgtGA0Lg/JywgJ9Cd0LAg0YHQstGP0LfQuCcsICfQmtC+0L3RgtCw0LrRgtGLJ10sXHJcblxyXG5cclxuXHRcdC8v0LzQtdC90Y/QtdC8INGG0LLQtdGC0LAg0YXRjdC00LXRgNCwXHJcblx0ICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbiAoYW5jaG9yTGluaywgaW5kZXgpIHtcclxuXHRcdCAgIC8vdXNpbmcgaW5kZXhcclxuXHJcblxyXG5cdFx0ICAgaWYgKGluZGV4ID09IDEpIHtcclxuXHRcdFx0ICAgaGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvdmVjdG9yLnBuZycpO1xyXG5cdFx0XHQgICBoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XHJcblx0XHRcdCAgIGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcblx0XHRcdCAgIGFjdGl2ZUxpbmsuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcclxuXHRcdCAgIH1cclxuXHRcdCAgIGlmIChpbmRleCA9PSAyKSB7XHJcblxyXG5cdFx0XHQgICBoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJ2ltYWdlL2xvZ29XaGl0ZS5wbmcnKTtcclxuXHRcdFx0ICAgaGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xyXG5cdFx0XHQgICBoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG5cdFx0XHQgICBhY3RpdmVMaW5rLmVxKDEpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHQgICB9XHJcblx0XHQgICBpZiAoaW5kZXggPT0gMykge1xyXG5cclxuXHRcdFx0ICAgaGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvdmVjdG9yLnBuZycpO1xyXG5cdFx0XHQgICBoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XHJcblx0XHRcdCAgIGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcblx0XHRcdCAgIGFjdGl2ZUxpbmsuZXEoMikuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcclxuXHRcdCAgIH1cclxuXHRcdCAgIGlmIChpbmRleCA9PSA0KSB7XHJcblxyXG5cdFx0XHQgICBoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJ2ltYWdlL2xvZ29XaGl0ZS5wbmcnKTtcclxuXHRcdFx0ICAgaGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xyXG5cdFx0XHQgICBoZWFkZXJOYXYuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsvL9GD0LTQsNC70Y/QtdC8INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG5cdFx0XHQgICBhY3RpdmVMaW5rLmVxKDMpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBINGB0YHRi9C70LrQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHQgICB9XHJcblx0XHQgICBpZiAoaW5kZXggPT0gNSkge1xyXG5cdFx0XHQgICBcclxuXHRcdFx0ICAgaGVhZGVyTG9nby5hdHRyKCdzcmMnLCdpbWFnZS9sb2dvdmVjdG9yLnBuZycpO1xyXG5cdFx0XHQgICBoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XHJcblx0XHRcdCAgIGhlYWRlck5hdi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8v0YPQtNCw0LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcblx0XHRcdCAgIGFjdGl2ZUxpbmsuZXEoNCkuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C5INC60LvQsNGB0YEg0YHRgdGL0LvQutC1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcclxuXHRcdCAgIH1cclxuXHQgICB9XHJcbiAgIH0pO1xyXG59KTsiLCIvKiFcclxuICogZnVsbFBhZ2UgMi44LjZcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzXHJcbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgYWx2YXJvdHJpZ28uY29tIC0gQSBwcm9qZWN0IGJ5IEFsdmFybyBUcmlnb1xyXG4gKi9cclxuKGZ1bmN0aW9uKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFjdG9yeSgkLCBnbG9iYWwsIGdsb2JhbC5kb2N1bWVudCwgZ2xvYmFsLk1hdGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiBleHBvcnRzKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCBnbG9iYWwsIGdsb2JhbC5kb2N1bWVudCwgZ2xvYmFsLk1hdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmYWN0b3J5KGpRdWVyeSwgZ2xvYmFsLCBnbG9iYWwuZG9jdW1lbnQsIGdsb2JhbC5NYXRoKTtcclxuICAgIH1cclxufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBNYXRoLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBrZWVwaW5nIGNlbnRyYWwgc2V0IG9mIGNsYXNzbmFtZXMgYW5kIHNlbGVjdG9yc1xyXG4gICAgdmFyIFdSQVBQRVIgPSAgICAgICAgICAgICAgICdmdWxscGFnZS13cmFwcGVyJztcclxuICAgIHZhciBXUkFQUEVSX1NFTCA9ICAgICAgICAgICAnLicgKyBXUkFQUEVSO1xyXG5cclxuICAgIC8vIHNsaW1zY3JvbGxcclxuICAgIHZhciBTQ1JPTExBQkxFID0gICAgICAgICAgICAnZnAtc2Nyb2xsYWJsZSc7XHJcbiAgICB2YXIgU0NST0xMQUJMRV9TRUwgPSAgICAgICAgJy4nICsgU0NST0xMQUJMRTtcclxuXHJcbiAgICAvLyB1dGlsXHJcbiAgICB2YXIgUkVTUE9OU0lWRSA9ICAgICAgICAgICAgJ2ZwLXJlc3BvbnNpdmUnO1xyXG4gICAgdmFyIE5PX1RSQU5TSVRJT04gPSAgICAgICAgICdmcC1ub3RyYW5zaXRpb24nO1xyXG4gICAgdmFyIERFU1RST1lFRCA9ICAgICAgICAgICAgICdmcC1kZXN0cm95ZWQnO1xyXG4gICAgdmFyIEVOQUJMRUQgPSAgICAgICAgICAgICAgICdmcC1lbmFibGVkJztcclxuICAgIHZhciBWSUVXSU5HX1BSRUZJWCA9ICAgICAgICAnZnAtdmlld2luZyc7XHJcbiAgICB2YXIgQUNUSVZFID0gICAgICAgICAgICAgICAgJ2FjdGl2ZSc7XHJcbiAgICB2YXIgQUNUSVZFX1NFTCA9ICAgICAgICAgICAgJy4nICsgQUNUSVZFO1xyXG4gICAgdmFyIENPTVBMRVRFTFkgPSAgICAgICAgICAgICdmcC1jb21wbGV0ZWx5JztcclxuICAgIHZhciBDT01QTEVURUxZX1NFTCA9ICAgICAgICAnLicgKyBDT01QTEVURUxZO1xyXG5cclxuICAgIC8vIHNlY3Rpb25cclxuICAgIHZhciBTRUNUSU9OX0RFRkFVTFRfU0VMID0gICAnLnNlY3Rpb24nO1xyXG4gICAgdmFyIFNFQ1RJT04gPSAgICAgICAgICAgICAgICdmcC1zZWN0aW9uJztcclxuICAgIHZhciBTRUNUSU9OX1NFTCA9ICAgICAgICAgICAnLicgKyBTRUNUSU9OO1xyXG4gICAgdmFyIFNFQ1RJT05fQUNUSVZFX1NFTCA9ICAgIFNFQ1RJT05fU0VMICsgQUNUSVZFX1NFTDtcclxuICAgIHZhciBTRUNUSU9OX0ZJUlNUX1NFTCA9ICAgICBTRUNUSU9OX1NFTCArICc6Zmlyc3QnO1xyXG4gICAgdmFyIFNFQ1RJT05fTEFTVF9TRUwgPSAgICAgIFNFQ1RJT05fU0VMICsgJzpsYXN0JztcclxuICAgIHZhciBUQUJMRV9DRUxMID0gICAgICAgICAgICAnZnAtdGFibGVDZWxsJztcclxuICAgIHZhciBUQUJMRV9DRUxMX1NFTCA9ICAgICAgICAnLicgKyBUQUJMRV9DRUxMO1xyXG4gICAgdmFyIEFVVE9fSEVJR0hUID0gICAgICAgICAgICdmcC1hdXRvLWhlaWdodCc7XHJcbiAgICB2YXIgQVVUT19IRUlHSFRfU0VMID0gICAgICAgJy5mcC1hdXRvLWhlaWdodCc7XHJcbiAgICB2YXIgTk9STUFMX1NDUk9MTCA9ICAgICAgICAgJ2ZwLW5vcm1hbC1zY3JvbGwnO1xyXG4gICAgdmFyIE5PUk1BTF9TQ1JPTExfU0VMID0gICAgICcuZnAtbm9ybWFsLXNjcm9sbCc7XHJcblxyXG4gICAgLy8gc2VjdGlvbiBuYXZcclxuICAgIHZhciBTRUNUSU9OX05BViA9ICAgICAgICAgICAnZnAtbmF2JztcclxuICAgIHZhciBTRUNUSU9OX05BVl9TRUwgPSAgICAgICAnIycgKyBTRUNUSU9OX05BVjtcclxuICAgIHZhciBTRUNUSU9OX05BVl9UT09MVElQID0gICAnZnAtdG9vbHRpcCc7XHJcbiAgICB2YXIgU0VDVElPTl9OQVZfVE9PTFRJUF9TRUw9Jy4nK1NFQ1RJT05fTkFWX1RPT0xUSVA7XHJcbiAgICB2YXIgU0hPV19BQ1RJVkVfVE9PTFRJUCA9ICAgJ2ZwLXNob3ctYWN0aXZlJztcclxuXHJcbiAgICAvLyBzbGlkZVxyXG4gICAgdmFyIFNMSURFX0RFRkFVTFRfU0VMID0gICAgICcuc2xpZGUnO1xyXG4gICAgdmFyIFNMSURFID0gICAgICAgICAgICAgICAgICdmcC1zbGlkZSc7XHJcbiAgICB2YXIgU0xJREVfU0VMID0gICAgICAgICAgICAgJy4nICsgU0xJREU7XHJcbiAgICB2YXIgU0xJREVfQUNUSVZFX1NFTCA9ICAgICAgU0xJREVfU0VMICsgQUNUSVZFX1NFTDtcclxuICAgIHZhciBTTElERVNfV1JBUFBFUiA9ICAgICAgICAnZnAtc2xpZGVzJztcclxuICAgIHZhciBTTElERVNfV1JBUFBFUl9TRUwgPSAgICAnLicgKyBTTElERVNfV1JBUFBFUjtcclxuICAgIHZhciBTTElERVNfQ09OVEFJTkVSID0gICAgICAnZnAtc2xpZGVzQ29udGFpbmVyJztcclxuICAgIHZhciBTTElERVNfQ09OVEFJTkVSX1NFTCA9ICAnLicgKyBTTElERVNfQ09OVEFJTkVSO1xyXG4gICAgdmFyIFRBQkxFID0gICAgICAgICAgICAgICAgICdmcC10YWJsZSc7XHJcblxyXG4gICAgLy8gc2xpZGUgbmF2XHJcbiAgICB2YXIgU0xJREVTX05BViA9ICAgICAgICAgICAgJ2ZwLXNsaWRlc05hdic7XHJcbiAgICB2YXIgU0xJREVTX05BVl9TRUwgPSAgICAgICAgJy4nICsgU0xJREVTX05BVjtcclxuICAgIHZhciBTTElERVNfTkFWX0xJTktfU0VMID0gICBTTElERVNfTkFWX1NFTCArICcgYSc7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XID0gICAgICAgICAgJ2ZwLWNvbnRyb2xBcnJvdyc7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX1NFTCA9ICAgICAgJy4nICsgU0xJREVTX0FSUk9XO1xyXG4gICAgdmFyIFNMSURFU19QUkVWID0gICAgICAgICAgICdmcC1wcmV2JztcclxuICAgIHZhciBTTElERVNfUFJFVl9TRUwgPSAgICAgICAnLicgKyBTTElERVNfUFJFVjtcclxuICAgIHZhciBTTElERVNfQVJST1dfUFJFViA9ICAgICBTTElERVNfQVJST1cgKyAnICcgKyBTTElERVNfUFJFVjtcclxuICAgIHZhciBTTElERVNfQVJST1dfUFJFVl9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX1BSRVZfU0VMO1xyXG4gICAgdmFyIFNMSURFU19ORVhUID0gICAgICAgICAgICdmcC1uZXh0JztcclxuICAgIHZhciBTTElERVNfTkVYVF9TRUwgPSAgICAgICAnLicgKyBTTElERVNfTkVYVDtcclxuICAgIHZhciBTTElERVNfQVJST1dfTkVYVCA9ICAgICBTTElERVNfQVJST1cgKyAnICcgKyBTTElERVNfTkVYVDtcclxuICAgIHZhciBTTElERVNfQVJST1dfTkVYVF9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX05FWFRfU0VMO1xyXG5cclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgdmFyICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgb3B0aW9ucyBmb3IgaVNjcm9sbC5qcyB1c2VkIHdoZW4gdXNpbmcgc2Nyb2xsT3ZlcmZsb3dcclxuICAgIHZhciBpc2Nyb2xsT3B0aW9ucyA9IHtcclxuICAgICAgICBzY3JvbGxiYXJzOiB0cnVlLFxyXG4gICAgICAgIG1vdXNlV2hlZWw6IHRydWUsXHJcbiAgICAgICAgaGlkZVNjcm9sbGJhcnM6IGZhbHNlLFxyXG4gICAgICAgIGZhZGVTY3JvbGxiYXJzOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlTW91c2U6IHRydWUsXHJcbiAgICAgICAgaW50ZXJhY3RpdmVTY3JvbGxiYXJzOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4uZnVsbHBhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgLy9vbmx5IG9uY2UgbXkgZnJpZW5kIVxyXG4gICAgICAgIGlmKCQoJ2h0bWwnKS5oYXNDbGFzcyhFTkFCTEVEKSl7IGRpc3BsYXlXYXJuaW5ncygpOyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgLy8gY29tbW9uIGpRdWVyeSBvYmplY3RzXHJcbiAgICAgICAgdmFyICRodG1sQm9keSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHZhciBGUCA9ICQuZm4uZnVsbHBhZ2U7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBzb21lIGRlZmF1bHRzLCBleHRlbmRpbmcgdGhlbSB3aXRoIGFueSBvcHRpb25zIHRoYXQgd2VyZSBwcm92aWRlZFxyXG4gICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIC8vbmF2aWdhdGlvblxyXG4gICAgICAgICAgICBtZW51OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5jaG9yczpbXSxcclxuICAgICAgICAgICAgbG9ja0FuY2hvcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvblBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uVG9vbHRpcHM6IFtdLFxyXG4gICAgICAgICAgICBzaG93QWN0aXZlVG9vbHRpcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc05hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNOYXZQb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIHNjcm9sbEJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGh5YnJpZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvL3Njcm9sbGluZ1xyXG4gICAgICAgICAgICBjc3MzOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxpbmdTcGVlZDogNzAwLFxyXG4gICAgICAgICAgICBhdXRvU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXRUb1NlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIGZpdFRvU2VjdGlvbkRlbGF5OiAxMDAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXHJcbiAgICAgICAgICAgIGVhc2luZ2NzczM6ICdlYXNlJyxcclxuICAgICAgICAgICAgbG9vcEJvdHRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BUb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wSG9yaXpvbnRhbDogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGludW91c1ZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGludW91c0hvcml6b250YWw6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseTogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJsb2NrZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNldFNsaWRlcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBmYWRpbmdFZmZlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBub3JtYWxTY3JvbGxFbGVtZW50czogbnVsbCxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXI6IGlzY3JvbGxIYW5kbGVyLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvd09wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgICAgIHRvdWNoU2Vuc2l0aXZpdHk6IDUsXHJcbiAgICAgICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZDogNSxcclxuICAgICAgICAgICAgYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjogbnVsbCxcclxuXHJcbiAgICAgICAgICAgIC8vQWNjZXNzaWJpbGl0eVxyXG4gICAgICAgICAgICBrZXlib2FyZFNjcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0ZUFuY2hvcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVjb3JkSGlzdG9yeTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIC8vZGVzaWduXHJcbiAgICAgICAgICAgIGNvbnRyb2xBcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xBcnJvd0NvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQ2VudGVyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNlY3Rpb25zQ29sb3IgOiBbXSxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgICAgICAgICAgZml4ZWRFbGVtZW50czogbnVsbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogMCwgLy9iYWNrd2FyZHMgY29tcGFiaXRpbGl0eSB3aXRoIHJlc3BvbnNpdmVXaWRkdGhcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlU2xpZGVzOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vQ3VzdG9tIHNlbGVjdG9yc1xyXG4gICAgICAgICAgICBzZWN0aW9uU2VsZWN0b3I6IFNFQ1RJT05fREVGQVVMVF9TRUwsXHJcbiAgICAgICAgICAgIHNsaWRlU2VsZWN0b3I6IFNMSURFX0RFRkFVTFRfU0VMLFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vZXZlbnRzXHJcbiAgICAgICAgICAgIGFmdGVyTG9hZDogbnVsbCxcclxuICAgICAgICAgICAgb25MZWF2ZTogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZW5kZXI6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVzaXplOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlQnVpbGQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyU2xpZGVMb2FkOiBudWxsLFxyXG4gICAgICAgICAgICBvblNsaWRlTGVhdmU6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVzcG9uc2l2ZTogbnVsbFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL2ZsYWcgdG8gYXZvaWQgdmVyeSBmYXN0IHNsaWRpbmcgZm9yIGxhbmRzY2FwZSBzbGlkZXJzXHJcbiAgICAgICAgdmFyIHNsaWRlTW92aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBpc1RvdWNoRGV2aWNlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxwbGF5Ym9va3xzaWxrfEJsYWNrQmVycnl8QkIxMHxXaW5kb3dzIFBob25lfFRpemVufEJhZGF8d2ViT1N8SUVNb2JpbGV8T3BlcmEgTWluaSkvKTtcclxuICAgICAgICB2YXIgaXNUb3VjaCA9ICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKSB8fCAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSk7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHdpbmRvd3NIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzV2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZERlc3Rpbnk7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZFNsaWRlO1xyXG4gICAgICAgIHZhciBjYW5TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzY3JvbGxpbmdzID0gW107XHJcbiAgICAgICAgdmFyIGNvbnRyb2xQcmVzc2VkO1xyXG4gICAgICAgIHZhciBpc1Njcm9sbEFsbG93ZWQgPSB7fTtcclxuICAgICAgICBpc1Njcm9sbEFsbG93ZWQubSA9IHsgICd1cCc6dHJ1ZSwgJ2Rvd24nOnRydWUsICdsZWZ0Jzp0cnVlLCAncmlnaHQnOnRydWUgfTtcclxuICAgICAgICBpc1Njcm9sbEFsbG93ZWQuayA9ICQuZXh0ZW5kKHRydWUse30sIGlzU2Nyb2xsQWxsb3dlZC5tKTtcclxuXHJcbiAgICAgICAgLy90aW1lb3V0c1xyXG4gICAgICAgIHZhciByZXNpemVJZDtcclxuICAgICAgICB2YXIgYWZ0ZXJTZWN0aW9uTG9hZHNJZDtcclxuICAgICAgICB2YXIgYWZ0ZXJTbGlkZUxvYWRzSWQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbElkO1xyXG4gICAgICAgIHZhciBzY3JvbGxJZDI7XHJcbiAgICAgICAgdmFyIGtleWRvd25JZDtcclxuICAgICAgICB2YXIgb3JpZ2luYWxzID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpOyAvL2RlZXAgY29weVxyXG5cclxuICAgICAgICBkaXNwbGF5V2FybmluZ3MoKTtcclxuXHJcbiAgICAgICAgLy9maXhpbmcgYnVnIGluIGlTY3JvbGwgd2l0aCBsaW5rczogaHR0cHM6Ly9naXRodWIuY29tL2N1YmlxL2lzY3JvbGwvaXNzdWVzLzc4M1xyXG4gICAgICAgIGlzY3JvbGxPcHRpb25zLmNsaWNrID0gaXNUb3VjaDsgLy8gc2VlICMyMDM1XHJcblxyXG4gICAgICAgIC8vZXh0ZW5kaW5nIGlTY3JvbGwgb3B0aW9ucyB3aXRoIHRoZSB1c2VyIGN1c3RvbSBvbmVzXHJcbiAgICAgICAgaXNjcm9sbE9wdGlvbnMgPSAkLmV4dGVuZChpc2Nyb2xsT3B0aW9ucywgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd09wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL2Vhc2VJbk91dEN1YmljIGFuaW1hdGlvbiBpbmNsdWRlZCBpbiB0aGUgcGx1Z2luXHJcbiAgICAgICAgJC5leHRlbmQoJC5lYXNpbmcseyBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtyZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO319KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBhdXRvU2Nyb2xsIG9wdGlvbi5cclxuICAgICAgICAqIEl0IGNoYW5nZXMgdGhlIHNjcm9sbCBiYXIgdmlzaWJpbGl0eSBhbmQgdGhlIGhpc3Rvcnkgb2YgdGhlIHNpdGUgYXMgYSByZXN1bHQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRBdXRvU2Nyb2xsaW5nKHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnYXV0b1Njcm9sbGluZycsIHZhbHVlLCB0eXBlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICAkaHRtbEJvZHkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnIDogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcgOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFJlY29yZEhpc3Rvcnkob3JpZ2luYWxzLnJlY29yZEhpc3RvcnksICdpbnRlcm5hbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZm9yIElFIHRvdWNoIGRldmljZXNcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3VjaC1hY3Rpb24nOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAvL21vdmluZyB0aGUgY29udGFpbmVyIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgc2lsZW50U2Nyb2xsKGVsZW1lbnQucG9zaXRpb24oKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkaHRtbEJvZHkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnIDogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnIDogJ2luaXRpYWwnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRSZWNvcmRIaXN0b3J5KGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciBJRSB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRvdWNoLWFjdGlvbic6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3VjaC1hY3Rpb24nOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2lsZW50U2Nyb2xsKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSBzZWN0aW9uIHdpdGggbm8gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkaHRtbEJvZHkuc2Nyb2xsVG9wKGVsZW1lbnQucG9zaXRpb24oKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZWZpbmVzIHdoZXRlciB0byByZWNvcmQgdGhlIGhpc3RvcnkgZm9yIGVhY2ggaGFzaCBjaGFuZ2UgaW4gdGhlIFVSTC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFJlY29yZEhpc3RvcnkodmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBzZXRWYXJpYWJsZVN0YXRlKCdyZWNvcmRIaXN0b3J5JywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGVmaW5lcyB0aGUgc2Nyb2xsaW5nIHNwZWVkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmdTcGVlZCh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgIT09ICdpbnRlcm5hbCcgJiYgb3B0aW9ucy5mYWRpbmdFZmZlY3QgJiYgRlAuZmFkaW5nRWZmZWN0ICl7XHJcbiAgICAgICAgICAgICAgICBGUC5mYWRpbmdFZmZlY3QudXBkYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRWYXJpYWJsZVN0YXRlKCdzY3JvbGxpbmdTcGVlZCcsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgZml0VG9TZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRGaXRUb1NlY3Rpb24odmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBzZXRWYXJpYWJsZVN0YXRlKCdmaXRUb1NlY3Rpb24nLCB2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGxvY2tBbmNob3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRMb2NrQW5jaG9ycyh2YWx1ZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubG9ja0FuY2hvcnMgPSB2YWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbCBvciB0aGUgdHJhY2twYWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgYWRkTW91c2VXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkZE1pZGRsZVdoZWVsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmxpdHkgb2Ygc2Nyb2xsaW5nIHRocm91Z2ggc2VjdGlvbnMgYnkgdXNpbmcgdGhlIG1vdXNlIHdoZWVsL3RyYWNrcGFkIG9yIHRvdWNoIGdlc3R1cmVzLlxyXG4gICAgICAgICogT3B0aW9uYWxseSBhIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGUgZGlyZWN0aW9uIGZvciB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgYXBwbGllZC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0gZGlyZWN0aW9ucyBzdHJpbmcgY29udGFpbmluZyB0aGUgZGlyZWN0aW9uIG9yIGRpcmVjdGlvbnMgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QWxsb3dTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkaXJlY3Rpb25zLCBmdW5jdGlvbiAoaW5kZXgsIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdtJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb3VjaEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVRvdWNoSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2libGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUga2V5Ym9hcmQgYXJyb3cga2V5c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0S2V5Ym9hcmRTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChkaXJlY3Rpb25zLCBmdW5jdGlvbiAoaW5kZXgsIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdrJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmtleWJvYXJkU2Nyb2xsaW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBwYWdlIHVwIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25VcCgpe1xyXG4gICAgICAgICAgICB2YXIgcHJldiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5wcmV2KFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9vcGluZyB0byB0aGUgYm90dG9tIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzZWN0aW9ucyBhYm92ZVxyXG4gICAgICAgICAgICBpZiAoIXByZXYubGVuZ3RoICYmIChvcHRpb25zLmxvb3BUb3AgfHwgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2ID0gJChTRUNUSU9OX1NFTCkubGFzdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJldi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2UocHJldiwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBwYWdlIGRvd24gb25lIHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2VjdGlvbkRvd24oKXtcclxuICAgICAgICAgICAgdmFyIG5leHQgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCkubmV4dChTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2xvb3BpbmcgdG8gdGhlIHRvcCBpZiB0aGVyZSdzIG5vIG1vcmUgc2VjdGlvbnMgYmVsb3dcclxuICAgICAgICAgICAgaWYoIW5leHQubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5sb29wQm90dG9tIHx8IG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsKSl7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gJChTRUNUSU9OX1NFTCkuZmlyc3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYobmV4dC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShuZXh0LCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBwYWdlIHRvIHRoZSBnaXZlbiBzZWN0aW9uIGFuZCBzbGlkZSB3aXRoIG5vIGFuaW1hdGlvbi5cclxuICAgICAgICAqIEFuY2hvcnMgb3IgaW5kZXggcG9zaXRpb25zIGNhbiBiZSB1c2VkIGFzIHBhcmFtcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNpbGVudE1vdmVUbyhzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcil7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkICgwLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgbW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKTtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nU3BlZWQgKG9yaWdpbmFscy5zY3JvbGxpbmdTcGVlZCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUuXHJcbiAgICAgICAgKiBBbmNob3JzIG9yIGluZGV4IHBvc2l0aW9ucyBjYW4gYmUgdXNlZCBhcyBwYXJhbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVBbmNob3IgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGRlc3RpbnkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgcmlnaHQgdGhlIHNsaWRlciBvZiB0aGUgYWN0aXZlIHNlY3Rpb24uXHJcbiAgICAgICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGVSaWdodChzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCdyaWdodCcsIHNlY3Rpb24pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIGxlZnQgdGhlIHNsaWRlciBvZiB0aGUgYWN0aXZlIHNlY3Rpb24uXHJcbiAgICAgICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGVMZWZ0KHNlY3Rpb24pe1xyXG4gICAgICAgICAgICBtb3ZlU2xpZGUoJ2xlZnQnLCBzZWN0aW9uKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHJlc2l6aW5nIGlzIGZpbmlzaGVkLCB3ZSBhZGp1c3QgdGhlIHNsaWRlcyBzaXplcyBhbmQgcG9zaXRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVCdWlsZChyZXNpemluZyl7XHJcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lci5oYXNDbGFzcyhERVNUUk9ZRUQpKXsgcmV0dXJuOyB9ICAvL25vdGhpbmcgdG8gZG8gaWYgdGhlIHBsdWdpbiB3YXMgZGVzdHJveWVkXHJcblxyXG4gICAgICAgICAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvd3NIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpOyAgLy91cGRhdGluZyBnbG9iYWwgdmFyXHJcblxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzV3JhcCA9ICQodGhpcykuZmluZChTTElERVNfV1JBUFBFUl9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQodGhpcykuZmluZChTTElERV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlLWNlbGwgZm9yIElFIGFuZCBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZChUQUJMRV9DRUxMX1NFTCkuY3NzKCdoZWlnaHQnLCBnZXRUYWJsZUhlaWdodCgkKHRoaXMpKSArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCB3aW5kb3dzSGVpZ2h0ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9yZXNpemluZyB0aGUgc2Nyb2xsaW5nIGRpdnNcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNsaWRlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2Nyb2xsQmFyKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2Nyb2xsQmFyKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgcG9zaXRpb24gZm8gdGhlIEZVTEwgV0lEVEggc2xpZGVzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzV3JhcCwgc2xpZGVzV3JhcC5maW5kKFNMSURFX0FDVElWRV9TRUwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKTtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IGFjdGl2ZVNlY3Rpb24uaW5kZXgoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy9pc24ndCBpdCB0aGUgZmlyc3Qgc2VjdGlvbj9cclxuICAgICAgICAgICAgaWYoc2VjdGlvbkluZGV4KXtcclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBwb3NpdGlvbiBmb3IgdGhlIGN1cnJlbnQgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgc2lsZW50TW92ZVRvKHNlY3Rpb25JbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlc2l6ZSApICYmIHJlc2l6aW5nICYmIG9wdGlvbnMuYWZ0ZXJSZXNpemUuY2FsbChjb250YWluZXIpO1xyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZUJ1aWxkICkgJiYgIXJlc2l6aW5nICYmIG9wdGlvbnMuYWZ0ZXJSZUJ1aWxkLmNhbGwoY29udGFpbmVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFR1cm5zIGZ1bGxQYWdlLmpzIHRvIG5vcm1hbCBzY3JvbGxpbmcgbW9kZSB3aGVuIHRoZSB2aWV3cG9ydCBgd2lkdGhgIG9yIGBoZWlnaHRgXHJcbiAgICAgICAgKiBhcmUgc21hbGxlciB0aGFuIHRoZSBzZXQgbGltaXQgdmFsdWVzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UmVzcG9uc2l2ZShhY3RpdmUpe1xyXG4gICAgICAgICAgICB2YXIgaXNSZXNwb25zaXZlID0gJGJvZHkuaGFzQ2xhc3MoUkVTUE9OU0lWRSk7XHJcblxyXG4gICAgICAgICAgICBpZihhY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWlzUmVzcG9uc2l2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXV0b1Njcm9sbGluZyhmYWxzZSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rml0VG9TZWN0aW9uKGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKFJFU1BPTlNJVkUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUgKSAmJiBvcHRpb25zLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKCBjb250YWluZXIsIGFjdGl2ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMucmVzcG9uc2l2ZVNsaWRlcyAmJiBGUC5yZXNwb25zaXZlU2xpZGVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRlAucmVzcG9uc2l2ZVNsaWRlcy50b1NlY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNSZXNwb25zaXZlKXtcclxuICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcob3JpZ2luYWxzLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0Rml0VG9TZWN0aW9uKG9yaWdpbmFscy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyhSRVNQT05TSVZFKTtcclxuICAgICAgICAgICAgICAgICQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUgKSAmJiBvcHRpb25zLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKCBjb250YWluZXIsIGFjdGl2ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5yZXNwb25zaXZlU2xpZGVzICYmIEZQLnJlc3BvbnNpdmVTbGlkZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZQLnJlc3BvbnNpdmVTbGlkZXMudG9TbGlkZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEZ1bGxwYWdlRGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGludGVybmFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFhtb3ZlbWVudDogZ2V0WG1vdmVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbjogcmVtb3ZlQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldFRyYW5zZm9ybXM6IGdldFRyYW5zZm9ybXMsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6IGxhenlMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZEFuaW1hdGlvbjogYWRkQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1Ib3Jpem9udGFsTW92ZTogcGVyZm9ybUhvcml6b250YWxNb3ZlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbDogc2lsZW50TGFuZHNjYXBlU2Nyb2xsLFxyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBTbGlkZXNQb3NpdGlvbjoga2VlcFNsaWRlc1Bvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbGVudFNjcm9sbDogc2lsZW50U2Nyb2xsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2xpZGVzOiBzdHlsZVNsaWRlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCQodGhpcykubGVuZ3RoKXtcclxuICAgICAgICAgICAgLy9wdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIEZQLnNldEF1dG9TY3JvbGxpbmcgPSBzZXRBdXRvU2Nyb2xsaW5nO1xyXG4gICAgICAgICAgICBGUC5zZXRSZWNvcmRIaXN0b3J5ID0gc2V0UmVjb3JkSGlzdG9yeTtcclxuICAgICAgICAgICAgRlAuc2V0U2Nyb2xsaW5nU3BlZWQgPSBzZXRTY3JvbGxpbmdTcGVlZDtcclxuICAgICAgICAgICAgRlAuc2V0Rml0VG9TZWN0aW9uID0gc2V0Rml0VG9TZWN0aW9uO1xyXG4gICAgICAgICAgICBGUC5zZXRMb2NrQW5jaG9ycyA9IHNldExvY2tBbmNob3JzO1xyXG4gICAgICAgICAgICBGUC5zZXRNb3VzZVdoZWVsU2Nyb2xsaW5nID0gc2V0TW91c2VXaGVlbFNjcm9sbGluZztcclxuICAgICAgICAgICAgRlAuc2V0QWxsb3dTY3JvbGxpbmcgPSBzZXRBbGxvd1Njcm9sbGluZztcclxuICAgICAgICAgICAgRlAuc2V0S2V5Ym9hcmRTY3JvbGxpbmcgPSBzZXRLZXlib2FyZFNjcm9sbGluZztcclxuICAgICAgICAgICAgRlAubW92ZVNlY3Rpb25VcCA9IG1vdmVTZWN0aW9uVXA7XHJcbiAgICAgICAgICAgIEZQLm1vdmVTZWN0aW9uRG93biA9IG1vdmVTZWN0aW9uRG93bjtcclxuICAgICAgICAgICAgRlAuc2lsZW50TW92ZVRvID0gc2lsZW50TW92ZVRvO1xyXG4gICAgICAgICAgICBGUC5tb3ZlVG8gPSBtb3ZlVG87XHJcbiAgICAgICAgICAgIEZQLm1vdmVTbGlkZVJpZ2h0ID0gbW92ZVNsaWRlUmlnaHQ7XHJcbiAgICAgICAgICAgIEZQLm1vdmVTbGlkZUxlZnQgPSBtb3ZlU2xpZGVMZWZ0O1xyXG4gICAgICAgICAgICBGUC5yZUJ1aWxkID0gcmVCdWlsZDtcclxuICAgICAgICAgICAgRlAuc2V0UmVzcG9uc2l2ZSA9IHNldFJlc3BvbnNpdmU7XHJcbiAgICAgICAgICAgIEZQLmdldEZ1bGxwYWdlRGF0YSA9IGdldEZ1bGxwYWdlRGF0YTtcclxuICAgICAgICAgICAgRlAuZGVzdHJveSA9IGRlc3Ryb3k7XHJcblxyXG4gICAgICAgICAgICAvL0xvYWRpbmcgZXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICBsb2FkRXh0ZW5zaW9uKCdjb250aW51b3VzSG9yaXpvbnRhbCcpO1xyXG4gICAgICAgICAgICBsb2FkRXh0ZW5zaW9uKCdzY3JvbGxIb3Jpem9udGFsbHknKTtcclxuICAgICAgICAgICAgbG9hZEV4dGVuc2lvbigncmVzZXRTbGlkZXJzJyk7XHJcbiAgICAgICAgICAgIGxvYWRFeHRlbnNpb24oJ2ludGVybG9ja2VkU2xpZGVzJyk7XHJcbiAgICAgICAgICAgIGxvYWRFeHRlbnNpb24oJ3Jlc3BvbnNpdmVTbGlkZXMnKTtcclxuICAgICAgICAgICAgbG9hZEV4dGVuc2lvbignZmFkaW5nRWZmZWN0Jyk7XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIC8vaWYgY3NzMyBpcyBub3Qgc3VwcG9ydGVkLCBpdCB3aWxsIHVzZSBqUXVlcnkgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jc3MzID0gc3VwcG9ydDNkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsQmFyID0gb3B0aW9ucy5zY3JvbGxCYXIgfHwgb3B0aW9ucy5oeWJyaWQ7XHJcblxyXG4gICAgICAgICAgICBzZXRPcHRpb25zRnJvbURPTSgpO1xyXG5cclxuICAgICAgICAgICAgcHJlcGFyZURvbSgpO1xyXG4gICAgICAgICAgICBzZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcob3B0aW9ucy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhlIHN0YXJ0aW5nIHBvaW50IGlzIGEgc2xpZGU/XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy90aGUgYWN0aXZlIHNlY3Rpb24gaXNuJ3QgdGhlIGZpcnN0IG9uZT8gSXMgbm90IHRoZSBmaXJzdCBzbGlkZSBvZiB0aGUgZmlyc3Qgc2VjdGlvbj8gVGhlbiB3ZSBsb2FkIHRoYXQgc2VjdGlvbi9zbGlkZSBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICBpZiggYWN0aXZlU2xpZGUubGVuZ3RoICYmICAoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSAhPT0gMCB8fCAoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSA9PT0gMCAmJiBhY3RpdmVTbGlkZS5pbmRleCgpICE9PSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKGFjdGl2ZVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9zZXR0aW5nIHRoZSBjbGFzcyBmb3IgdGhlIGJvZHkgZWxlbWVudFxyXG4gICAgICAgICAgICBzZXRCb2R5Q2xhc3MoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9BbmNob3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkd2luZG93Lm9uKCdsb2FkJywgc2Nyb2xsVG9BbmNob3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50cygpe1xyXG4gICAgICAgICAgICAkd2luZG93XHJcbiAgICAgICAgICAgICAgICAvL3doZW4gc2Nyb2xsaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAub24oJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9kZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXHJcbiAgICAgICAgICAgICAgICAub24oJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21taW5nIGJhY2suXHJcbiAgICAgICAgICAgICAgICAuYmx1cihibHVySGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cclxuICAgICAgICAgICAgICAgIC5yZXNpemUocmVzaXplSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAkZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC8vU2xpZGluZyB3aXRoIGFycm93IGtleXMsIGJvdGgsIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICAua2V5ZG93bihrZXlkb3duSGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RvIHByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIHpvb21pbmdcclxuICAgICAgICAgICAgICAgIC5rZXl1cChrZXlVcEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TY3JvbGxzIHRvIHRoZSBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgdGhlIG5hdmlnYXRpb24gYnVsbGV0XHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBTRUNUSU9OX05BVl9TRUwgKyAnIGEnLCBzZWN0aW9uQnVsbGV0SGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICAvL1Njcm9sbHMgdGhlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUgZGVzdGluYXRpb24gZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBTTElERVNfTkFWX0xJTktfU0VMLCBzbGlkZUJ1bGxldEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIFNFQ1RJT05fTkFWX1RPT0xUSVBfU0VMLCB0b29sdGlwVGV4dEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9TY3JvbGxpbmcgaG9yaXpvbnRhbGx5IHdoZW4gY2xpY2tpbmcgb24gdGhlIHNsaWRlciBjb250cm9scy5cclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBTTElERVNfQVJST1dfU0VMLCBzbGlkZUFycm93SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgKiBBcHBseWluZyBub3JtYWxTY3JvbGwgZWxlbWVudHMuXHJcbiAgICAgICAgICAgICogSWdub3JpbmcgdGhlIHNjcm9sbHMgb3ZlciB0aGUgc3BlY2lmaWVkIHNlbGVjdG9ycy5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cyl7XHJcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oJ21vdXNlZW50ZXInLCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW91c2VXaGVlbFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZG9jdW1lbnQub24oJ21vdXNlbGVhdmUnLCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGEgcHVibGljIGludGVybmFsIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBleHRlbnNpb24gbmFtZS5cclxuICAgICAgICAqIEBwYXJhbSBleHRlcm5hbE5hbWUge1N0cmluZ30gRXh0ZW5zaW9uIG5hbWUgd2l0aCB0aGUgZm9ybSBmcF9bTkFNRV1FeHRlbnNpb24gcmVmZXJyaW5nIHRvIGFuIGV4dGVybmFsIGZ1bmN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZEV4dGVuc2lvbihpbnRlcm5hbE5hbWUpe1xyXG4gICAgICAgICAgICB2YXIgZXh0ZXJuYWxOYW1lID0gJ2ZwXycgKyBpbnRlcm5hbE5hbWUgKyAnRXh0ZW5zaW9uJztcclxuICAgICAgICAgICAgRlBbaW50ZXJuYWxOYW1lXSA9IHR5cGVvZiB3aW5kb3dbZXh0ZXJuYWxOYW1lXSAhPT0ndW5kZWZpbmVkJyA/IG5ldyB3aW5kb3dbZXh0ZXJuYWxOYW1lXSgpIDogbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0dGluZyBvcHRpb25zIGZyb20gRE9NIGVsZW1lbnRzIGlmIHRoZXkgYXJlIG5vdCBwcm92aWRlZC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldE9wdGlvbnNGcm9tRE9NKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IGNvbnRhaW5lci5maW5kKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vbm8gYW5jaG9ycyBvcHRpb24/IENoZWNraW5nIGZvciB0aGVtIGluIHRoZSBET00gYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5hbmNob3JzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFuY2hvcnMgPSBzZWN0aW9ucy5maWx0ZXIoJ1tkYXRhLWFuY2hvcl0nKS5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKCdhbmNob3InKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbm8gdG9vbHRpcG9zIG9wdGlvbj8gQ2hlY2tpbmcgZm9yIHRoZW0gaW4gdGhlIERPTSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5uYXZpZ2F0aW9uVG9vbHRpcHMgPSBzZWN0aW9ucy5maWx0ZXIoJ1tkYXRhLXRvb2x0aXBdJykubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykuZGF0YSgndG9vbHRpcCcpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5nZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBXb3JrcyBvdmVyIHRoZSBET00gc3RydWN0dXJlIHRvIHNldCBpdCB1cCBmb3IgdGhlIGN1cnJlbnQgZnVsbHBhZ2Ugb3B0aW9uc3MuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwcmVwYXJlRG9tKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2FkZGluZyBhIGNsYXNzIHRvIHJlY29nbml6ZSB0aGUgY29udGFpbmVyIGludGVybmFsbHkgaW4gdGhlIGNvZGVcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKFdSQVBQRVIpO1xyXG4gICAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoRU5BQkxFRCk7XHJcblxyXG4gICAgICAgICAgICAvL2R1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE1MDJcclxuICAgICAgICAgICAgd2luZG93c0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoREVTVFJPWUVEKTsgLy9pbiBjYXNlIGl0IHdhcyBkZXN0cm95ZWQgYmVmb3JlIGluaXRpbGl6aW5nIGl0IGFnYWluXHJcblxyXG4gICAgICAgICAgICBhZGRJbnRlcm5hbFNlbGVjdG9ycygpO1xyXG5cclxuICAgICAgICAgICAgIC8vc3R5bGluZyB0aGUgc2VjdGlvbnMgLyBzbGlkZXMgLyBtZW51XHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9IHNlY3Rpb24uZmluZChTTElERV9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bVNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHN0eWxlTWVudShzZWN0aW9uLCBpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBhbnkgc2xpZGVcclxuICAgICAgICAgICAgICAgIGlmIChudW1TbGlkZXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTbGlkZXMoc2VjdGlvbiwgc2xpZGVzLCBudW1TbGlkZXMpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVGFibGVDbGFzcyhzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9maXhlZCBlbGVtZW50cyBuZWVkIHRvIGJlIG1vdmVkIG91dCBvZiB0aGUgcGx1Z2luIGNvbnRhaW5lciBkdWUgdG8gcHJvYmxlbXMgd2l0aCBDU1MzLlxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZpeGVkRWxlbWVudHMgJiYgb3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgICQob3B0aW9ucy5maXhlZEVsZW1lbnRzKS5hcHBlbmRUbygkYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vdmVydGljYWwgY2VudGVyZWQgb2YgdGhlIG5hdmlnYXRpb24gKyBhY3RpdmUgYnVsbGV0XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubmF2aWdhdGlvbil7XHJcbiAgICAgICAgICAgICAgICBhZGRWZXJ0aWNhbE5hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZW5hYmxlWW91dHViZUFQSSgpO1xyXG4gICAgICAgICAgICBlbmFibGVWaWRlbW9BUEkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZmFkaW5nRWZmZWN0ICYmIEZQLmZhZGluZ0VmZmVjdCl7XHJcbiAgICAgICAgICAgICAgICBGUC5mYWRpbmdFZmZlY3QuYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JvbGxCYXJIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2FmdGVyIERPTSBhbmQgaW1hZ2VzIGFyZSBsb2FkZWRcclxuICAgICAgICAgICAgICAgICR3aW5kb3cub24oJ2xvYWQnLCBjcmVhdGVTY3JvbGxCYXJIYW5kbGVyKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhZnRlclJlbmRlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdHlsZXMgdGhlIGhvcml6b250YWwgc2xpZGVzIGZvciBhIHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZVNsaWRlcyhzZWN0aW9uLCBzbGlkZXMsIG51bVNsaWRlcyl7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IG51bVNsaWRlcyAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIHNsaWRlV2lkdGggPSAxMDAgLyBudW1TbGlkZXM7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfQ09OVEFJTkVSICsgJ1wiIC8+Jyk7XHJcbiAgICAgICAgICAgIHNsaWRlcy5wYXJlbnQoKS53cmFwKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19XUkFQUEVSICsgJ1wiIC8+Jyk7XHJcblxyXG4gICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0NPTlRBSU5FUl9TRUwpLmNzcygnd2lkdGgnLCBzbGlkZXJXaWR0aCArICclJyk7XHJcblxyXG4gICAgICAgICAgICBpZihudW1TbGlkZXMgPiAxKXtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udHJvbEFycm93cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zbGlkZXNOYXZpZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRTbGlkZXNOYXZpZ2F0aW9uKHNlY3Rpb24sIG51bVNsaWRlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnd2lkdGgnLCBzbGlkZVdpZHRoICsgJyUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRhYmxlQ2xhc3MoJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0aW5nU2xpZGUgPSBzZWN0aW9uLmZpbmQoU0xJREVfQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZSBzbGlkZSB3b24ndCBiZSBhbiBzdGFydGluZyBwb2ludCwgdGhlIGRlZmF1bHQgd2lsbCBiZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgICAgIC8vdGhlIGFjdGl2ZSBzZWN0aW9uIGlzbid0IHRoZSBmaXJzdCBvbmU/IElzIG5vdCB0aGUgZmlyc3Qgc2xpZGUgb2YgdGhlIGZpcnN0IHNlY3Rpb24/IFRoZW4gd2UgbG9hZCB0aGF0IHNlY3Rpb24vc2xpZGUgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgaWYoIHN0YXJ0aW5nU2xpZGUubGVuZ3RoICYmICAoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSAhPT0gMCB8fCAoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSA9PT0gMCAmJiBzdGFydGluZ1NsaWRlLmluZGV4KCkgIT09IDApKSl7XHJcbiAgICAgICAgICAgICAgICBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoc3RhcnRpbmdTbGlkZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzLmVxKDApLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU3R5bGluZyB2ZXJ0aWNhbCBzZWN0aW9uc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3R5bGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KXtcclxuICAgICAgICAgICAgLy9pZiBubyBhY3RpdmUgc2VjdGlvbiBpcyBkZWZpbmVkLCB0aGUgMXN0IG9uZSB3aWxsIGJlIHRoZSBkZWZhdWx0IG9uZVxyXG4gICAgICAgICAgICBpZighaW5kZXggJiYgJChTRUNUSU9OX0FDVElWRV9TRUwpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWN0aW9uLmNzcygnaGVpZ2h0Jywgd2luZG93c0hlaWdodCArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nVG9wKXtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uY3NzKCdwYWRkaW5nLXRvcCcsIG9wdGlvbnMucGFkZGluZ1RvcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFkZGluZ0JvdHRvbSl7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmNzcygncGFkZGluZy1ib3R0b20nLCBvcHRpb25zLnBhZGRpbmdCb3R0b20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2VjdGlvbnNDb2xvcltpbmRleF0gIT09ICAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBvcHRpb25zLnNlY3Rpb25zQ29sb3JbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFuY2hvcnNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5hdHRyKCdkYXRhLWFuY2hvcicsIG9wdGlvbnMuYW5jaG9yc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZXMgdG8gdGhlIG1lbnUgZWxlbWVudHMgYW5kIGFjdGl2YXRlcyB0aGUgY3VycmVudCBvbmUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZU1lbnUoc2VjdGlvbiwgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYW5jaG9yc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvL2FjdGl2YXRpbmcgdGhlIG1lbnUgLyBuYXYgZWxlbWVudCBvbiBsb2FkXHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uLmhhc0NsYXNzKEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdihvcHRpb25zLmFuY2hvcnNbaW5kZXhdLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbW92aW5nIHRoZSBtZW51IG91dHNpZGUgdGhlIG1haW4gY29udGFpbmVyIGlmIGl0IGlzIGluc2lkZSAoYXZvaWQgcHJvYmxlbXMgd2l0aCBmaXhlZCBwb3NpdGlvbnMgd2hlbiB1c2luZyBDU1MzIHRyYW5mb3JtcylcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5tZW51ICYmIG9wdGlvbnMuY3NzMyAmJiAkKG9wdGlvbnMubWVudSkuY2xvc2VzdChXUkFQUEVSX1NFTCkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICQob3B0aW9ucy5tZW51KS5hcHBlbmRUbygkYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBpbnRlcm5hbCBjbGFzc2VzIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBjdXN0b21pemFibGUgc2VsZWN0b3JzXHJcbiAgICAgICAgKiBrZWVwaW5nIHRoZSBsaW5rIHdpdGggdGhlIHN0eWxlIHNoZWV0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSW50ZXJuYWxTZWxlY3RvcnMoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQob3B0aW9ucy5zZWN0aW9uU2VsZWN0b3IpLmFkZENsYXNzKFNFQ1RJT04pO1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZChvcHRpb25zLnNsaWRlU2VsZWN0b3IpLmFkZENsYXNzKFNMSURFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyB0aGUgY29udHJvbCBhcnJvd3MgZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTbGlkZUFycm93cyhzZWN0aW9uKXtcclxuICAgICAgICAgICAgc2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCkuYWZ0ZXIoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX0FSUk9XX1BSRVYgKyAnXCI+PC9kaXY+PGRpdiBjbGFzcz1cIicgKyBTTElERVNfQVJST1dfTkVYVCArICdcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udHJvbEFycm93Q29sb3IhPScjZmZmJyl7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0FSUk9XX05FWFRfU0VMKS5jc3MoJ2JvcmRlci1jb2xvcicsICd0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAnK29wdGlvbnMuY29udHJvbEFycm93Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5maW5kKFNMSURFU19BUlJPV19QUkVWX1NFTCkuY3NzKCdib3JkZXItY29sb3InLCAndHJhbnNwYXJlbnQgJysgb3B0aW9ucy5jb250cm9sQXJyb3dDb2xvciArICcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwpe1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5maW5kKFNMSURFU19BUlJPV19QUkVWX1NFTCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgYSB2ZXJ0aWNhbCBuYXZpZ2F0aW9uIGJhci5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFZlcnRpY2FsTmF2aWdhdGlvbigpe1xyXG4gICAgICAgICAgICAkYm9keS5hcHBlbmQoJzxkaXYgaWQ9XCInICsgU0VDVElPTl9OQVYgKyAnXCI+PHVsPjwvdWw+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKFNFQ1RJT05fTkFWX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBuYXYuYWRkQ2xhc3MoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5zaG93QWN0aXZlVG9vbHRpcCA/IFNIT1dfQUNUSVZFX1RPT0xUSVAgKyAnICcgKyBvcHRpb25zLm5hdmlnYXRpb25Qb3NpdGlvbiA6IG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJChTRUNUSU9OX1NFTCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hbmNob3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBvcHRpb25zLmFuY2hvcnNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJzxsaT48YSBocmVmPVwiIycgKyBsaW5rICsgJ1wiPjxzcGFuPjwvc3Bhbj48L2E+JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCB0b29sdGlwIGlmIG5lZWRlZCAoZGVmaW5lZCBieSB1c2VyKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvb2x0aXAgPSBvcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvb2x0aXAgIT09ICd1bmRlZmluZWQnICYmIHRvb2x0aXAgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgKz0gJzxkaXYgY2xhc3M9XCInICsgU0VDVElPTl9OQVZfVE9PTFRJUCArICcgJyArIG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uICsgJ1wiPicgKyB0b29sdGlwICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkgKz0gJzwvbGk+JztcclxuXHJcbiAgICAgICAgICAgICAgICBuYXYuZmluZCgndWwnKS5hcHBlbmQobGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NlbnRlcmluZyBpdCB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5jc3MoJ21hcmdpbi10b3AnLCAnLScgKyAoJChTRUNUSU9OX05BVl9TRUwpLmhlaWdodCgpLzIpICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICAvL2FjdGl2YXRpbmcgdGhlIGN1cnJlbnQgYWN0aXZlIHNlY3Rpb25cclxuICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLmZpbmQoJ2xpJykuZXEoJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSkuZmluZCgnYScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgdGhlIHNsaW0gc2Nyb2xsIHNjcm9sbGJhciBmb3IgdGhlIHNlY3Rpb25zIGFuZCBzbGlkZXMgaW5zaWRlIHRoZW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTY3JvbGxCYXJIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKHRoaXMpLmZpbmQoU0xJREVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzbGlkZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JvbGxCYXIoJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JvbGxCYXIoJCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWZ0ZXJSZW5kZXJBY3Rpb25zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRW5hYmxlcyB0aGUgWW91dHViZSB2aWRlb3MgQVBJIHNvIHdlIGNhbiBjb250cm9sIHRoZWlyIGZsb3cgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlWW91dHViZUFQSSgpe1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBhZGRVUkxQYXJhbSgkKHRoaXMpLCAnZW5hYmxlanNhcGk9MScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBFbmFibGVzIHRoZSBWaW1lbyB2aWRlb3MgQVBJIHNvIHdlIGNhbiBjb250cm9sIHRoZWlyIGZsb3cgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlVmlkZW1vQVBJKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCdpZnJhbWVbc3JjKj1cInBsYXllci52aW1lby5jb20vXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgYWRkVVJMUGFyYW0oJCh0aGlzKSwgJ2FwaT0xJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGEgbmV3IHBhcmFtZXRlciBhbmQgaXRzIHZhbHVlIHRvIHRoZSBgc3JjYCBvZiBhIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFVSTFBhcmFtKGVsZW1lbnQsIG5ld1BhcmFtKXtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3JjID0gZWxlbWVudC5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdzcmMnLCBvcmlnaW5hbFNyYyArIGdldFVybFBhcmFtU2lnbihvcmlnaW5hbFNyYykgKyBuZXdQYXJhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogUmV0dXJucyB0aGUgcHJlZml4IHNpZ24gdG8gdXNlIGZvciBhIG5ldyBwYXJhbWV0ZXIgaW4gYW4gZXhpc3RlbiBVUkwuXHJcbiAgICAgICAgKlxyXG4gICAgICAgICogQHJldHVybiB7U3RyaW5nfSAgPyB8ICZcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFVybFBhcmFtU2lnbih1cmwpe1xyXG4gICAgICAgICAgICByZXR1cm4gKCAhL1xcPy8udGVzdCggdXJsICkgKSA/ICc/JyA6ICcmJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWN0aW9ucyBhbmQgY2FsbGJhY2tzIHRvIGZpcmUgYWZ0ZXJSZW5kZXJcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyUmVuZGVyQWN0aW9ucygpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoQ09NUExFVEVMWSk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlclJlbmRlcil7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlclJlbmRlcihzZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXp5TG9hZChzZWN0aW9uKTtcclxuICAgICAgICAgICAgcGxheU1lZGlhKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyTG9hZCApICYmIG9wdGlvbnMuYWZ0ZXJMb2FkLmNhbGwoc2VjdGlvbiwgc2VjdGlvbi5kYXRhKCdhbmNob3InKSwgKHNlY3Rpb24uaW5kZXgoU0VDVElPTl9TRUwpICsgMSkpO1xyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZW5kZXIgKSAmJiBvcHRpb25zLmFmdGVyUmVuZGVyLmNhbGwoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbGFzdFNjcm9sbCA9IDA7XHJcblxyXG4gICAgICAgIC8vd2hlbiBzY3JvbGxpbmcuLi5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmF1dG9TY3JvbGxpbmcgfHwgb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbERpcmVjdGlvbiA9IGdldFNjcm9sbERpcmVjdGlvbihjdXJyZW50U2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgIHZhciB2aXNpYmxlU2VjdGlvbkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JlZW5fbWlkID0gY3VycmVudFNjcm9sbCArICgkd2luZG93LmhlaWdodCgpIC8gMi4wKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0F0Qm90dG9tID0gJGJvZHkuaGVpZ2h0KCkgLSAkd2luZG93LmhlaWdodCgpID09PSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2hlbiB1c2luZyBgYXV0by1oZWlnaHRgIGZvciBhIHNtYWxsIGxhc3Qgc2VjdGlvbiBpdCB3b24ndCB0YWtlIG1vc3Qgb2YgdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBpZihpc0F0Qm90dG9tKXtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gc2VjdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3Rha2luZyB0aGUgc2VjdGlvbiB3aGljaCBpcyBzaG93aW5nIG1vcmUgY29udGVudCBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGljayB0aGUgdGhlIGxhc3Qgc2VjdGlvbiB3aGljaCBwYXNzZXMgdGhlIG1pZGRsZSBsaW5lIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLm9mZnNldFRvcCA8PSBzY3JlZW5fbWlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc0NvbXBsZXRlbHlJblZpZXdQb3J0KHNjcm9sbERpcmVjdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEkKFNFQ1RJT05fQUNUSVZFX1NFTCkuaGFzQ2xhc3MoQ09NUExFVEVMWSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuYWRkQ2xhc3MoQ09NUExFVEVMWSkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9nZXRpbmcgdGhlIGxhc3Qgb25lLCB0aGUgY3VycmVudCBvbmUgb24gdGhlIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb24gPSAkKHNlY3Rpb25zKS5lcSh2aXNpYmxlU2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NldHRpbmcgdGhlIHZpc2libGUgc2VjdGlvbiBhcyBhY3RpdmUgd2hlbiBtYW51YWxseSBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICAgIC8vZXhlY3V0aW5nIG9ubHkgb25jZSB0aGUgZmlyc3QgdGltZSB3ZSByZWFjaCB0aGUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnRTZWN0aW9uLmhhc0NsYXNzKEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVhdmluZ1NlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uSW5kZXggPSBsZWF2aW5nU2VjdGlvbi5pbmRleChTRUNUSU9OX1NFTCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQoY3VycmVudFNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmNob3JMaW5rICA9IGN1cnJlbnRTZWN0aW9uLmRhdGEoJ2FuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBjdXJyZW50U2VjdGlvbi5pbmRleChTRUNUSU9OX1NFTCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IGN1cnJlbnRTZWN0aW9uLmZpbmQoU0xJREVfQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbmsgPSBhY3RpdmVTbGlkZS5kYXRhKCdhbmNob3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb24uYWRkQ2xhc3MoQUNUSVZFKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKEFDVElWRSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMub25MZWF2ZSApICYmIG9wdGlvbnMub25MZWF2ZS5jYWxsKCBsZWF2aW5nU2VjdGlvbiwgbGVhdmluZ1NlY3Rpb25JbmRleCwgc2VjdGlvbkluZGV4LCB5TW92ZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJMb2FkICkgJiYgb3B0aW9ucy5hZnRlckxvYWQuY2FsbCggY3VycmVudFNlY3Rpb24sIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wTWVkaWEobGVhdmluZ1NlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZChjdXJyZW50U2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlNZWRpYShjdXJyZW50U2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZU1lbnVBbmROYXYoYW5jaG9yTGluaywgc2VjdGlvbkluZGV4IC0gMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLmFuY2hvcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmVlZGVkIHRvIGVudGVyIGluIGhhc2hDaGFuZ2UgZXZlbnQgd2hlbiB1c2luZyB0aGUgbWVudSB3aXRoIGFuY2hvciBsaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNjcm9sbGVkRGVzdGlueSA9IGFuY2hvckxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3JMaW5rLCBhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zbWFsbCB0aW1lb3V0IGluIG9yZGVyIHRvIGF2b2lkIGVudGVyaW5nIGluIGhhc2hDaGFuZ2UgZXZlbnQgd2hlbiBzY3JvbGxpbmcgaXMgbm90IGZpbmlzaGVkIHlldFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmZpdFRvU2VjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9mb3IgdGhlIGF1dG8gYWRqdXN0IG9mIHRoZSB2aWV3cG9ydCB0byBmaXQgYSB3aG9sZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbElkMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbElkMiA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja2luZyBmaXRUb1NlY3Rpb24gYWdhaW4gaW4gY2FzZSBpdCB3YXMgc2V0IHRvIGZhbHNlIGJlZm9yZSB0aGUgdGltZW91dCBkZWxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYW5TY3JvbGwgJiYgb3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hbGxvd3MgdG8gc2Nyb2xsIHRvIGFuIGFjdGl2ZSBzZWN0aW9uIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgc2VjdGlvbiBpcyBhbHJlYWR5IGFjdGl2ZSwgd2UgcHJldmVudCBmaXJpbmcgY2FsbGJhY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkKFNFQ1RJT05fQUNUSVZFX1NFTCkuaXMoY3VycmVudFNlY3Rpb24pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2UoJChTRUNUSU9OX0FDVElWRV9TRUwpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmZpdFRvU2VjdGlvbkRlbGF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGFjdGl2ZSBzZWN0aW9uIGhhcyBzZWVuIGluIGl0cyB3aG9sZSBvciBub3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc0NvbXBsZXRlbHlJblZpZXdQb3J0KG1vdmVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHRvcCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5wb3NpdGlvbigpLnRvcDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArICR3aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihtb3ZlbWVudCA9PSAndXAnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3R0b20gPj0gKCR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9wIDw9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGRpcmVjdG9uIG9mIHRoZSB0aGUgc2Nyb2xsaW5nIGZpcmVkIGJ5IHRoZSBzY3JvbGwgZXZlbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTY3JvbGxEaXJlY3Rpb24oY3VycmVudFNjcm9sbCl7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCA/ICdkb3duJyA6ICd1cCc7XHJcblxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcclxuXHJcbiAgICAgICAgICAgIC8vbmVlZGVkIGZvciBhdXRvLWhlaWdodCBzZWN0aW9ucyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBzY3JvbGwgdG8gdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IGN1cnJlbnRTY3JvbGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHRoZSB3YXkgb2Ygc2Nyb2xsaW5nIHVwIG9yIGRvd246XHJcbiAgICAgICAgKiBieSAnYXV0b21hdGljYWxseScgc2Nyb2xsaW5nIGEgc2VjdGlvbiBvciBieSB1c2luZyB0aGUgZGVmYXVsdCBhbmQgbm9ybWFsIHNjcm9sbGluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbGluZyh0eXBlLCBzY3JvbGxhYmxlKXtcclxuICAgICAgICAgICAgaWYgKCFpc1Njcm9sbEFsbG93ZWQubVt0eXBlXSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNoZWNrID0gKHR5cGUgPT09ICdkb3duJykgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsU2VjdGlvbiA9ICh0eXBlID09PSAnZG93bicpID8gbW92ZVNlY3Rpb25Eb3duIDogbW92ZVNlY3Rpb25VcDtcclxuXHJcbiAgICAgICAgICAgIGlmKEZQLnNjcm9sbEhvcml6b250YWxseSl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uID0gRlAuc2Nyb2xsSG9yaXpvbnRhbGx5LmdldFNjcm9sbFNlY3Rpb24odHlwZSwgc2Nyb2xsU2VjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbGFibGUubGVuZ3RoID4gMCApe1xyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGUgc2Nyb2xsYmFyIGF0IHRoZSBzdGFydC9lbmQgb2YgdGhlIHNjcm9sbD9cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmlzU2Nyb2xsZWQoY2hlY2ssIHNjcm9sbGFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlZCB1cC9kb3duXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgdG91Y2hTdGFydFkgPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICAgICAgdmFyIHRvdWNoRW5kWSA9IDA7XHJcbiAgICAgICAgdmFyIHRvdWNoRW5kWCA9IDA7XHJcblxyXG4gICAgICAgIC8qIERldGVjdGluZyB0b3VjaCBldmVudHNcclxuXHJcbiAgICAgICAgKiBBcyB3ZSBhcmUgY2hhbmdpbmcgdGhlIHRvcCBwcm9wZXJ0eSBvZiB0aGUgcGFnZSBvbiBzY3JvbGxpbmcsIHdlIGNhbiBub3QgdXNlIHRoZSB0cmFkaXRpb25hbCB3YXkgdG8gZGV0ZWN0IGl0LlxyXG4gICAgICAgICogVGhpcyB3YXksIHRoZSB0b3VjaHN0YXJ0IGFuZCB0aGUgdG91Y2ggbW92ZXMgc2hvd3MgYW4gc21hbGwgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW0gd2hpY2ggaXMgdGhlXHJcbiAgICAgICAgKiB1c2VkIG9uZSB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgZSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdChTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsOiBpZiBvbmUgb2YgdGhlIG5vcm1hbFNjcm9sbEVsZW1lbnRzIGlzbid0IHdpdGhpbiBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZCBob3BzIHVwIHRoZSBET00gY2hhaW5cclxuICAgICAgICAgICAgaWYgKCFjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQoZXZlbnQudGFyZ2V0KSAmJiBpc1JlYWxseVRvdWNoKGUpICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBlYXNpbmcgb24gaU9TIGRldmljZXNcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2Nyb2xsYWJsZShhY3RpdmVTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuU2Nyb2xsICYmICFzbGlkZU1vdmluZykgeyAvL2lmIHRoZXJlcyBhbnkgI1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaEV2ZW50cyA9IGdldEV2ZW50c1BhZ2UoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRW5kWSA9IHRvdWNoRXZlbnRzLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gdG91Y2hFdmVudHMueDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBtb3ZlbWVudCBpbiB0aGUgWCBheHlzIGlzIGdyZWF0ZXIgdGhhbiBpbiB0aGUgWSBhbmQgdGhlIGN1cnJlY3Qgc2VjdGlvbiBoYXMgc2xpZGVzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24uZmluZChTTElERVNfV1JBUFBFUl9TRUwpLmxlbmd0aCAmJiBNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyB0aGUgbW92ZW1lbnQgZ3JlYXRlciB0aGFuIHRoZSBtaW5pbXVtIHJlc2lzdGFuY2UgdG8gc2Nyb2xsP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModG91Y2hTdGFydFggLSB0b3VjaEVuZFgpID4gKCR3aW5kb3cub3V0ZXJXaWR0aCgpIC8gMTAwICogb3B0aW9ucy50b3VjaFNlbnNpdGl2aXR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoU3RhcnRYID4gdG91Y2hFbmRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVSaWdodChhY3RpdmVTZWN0aW9uKTsgLy9uZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5sZWZ0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlTGVmdChhY3RpdmVTZWN0aW9uKTsgLy9wcmV2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsIHNjcm9sbGluZyAob25seSB3aGVuIGF1dG9TY3JvbGxpbmcgaXMgZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0b3VjaFN0YXJ0WSAtIHRvdWNoRW5kWSkgPiAoJHdpbmRvdy5oZWlnaHQoKSAvIDEwMCAqIG9wdGlvbnMudG91Y2hTZW5zaXRpdml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaFN0YXJ0WSA+IHRvdWNoRW5kWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygnZG93bicsIHNjcm9sbGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaEVuZFkgPiB0b3VjaFN0YXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygndXAnLCBzY3JvbGxhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBsb29wIHVwIHRoZSBwYXJlbnQgbm9kZXMgdG8gY2hlY2sgaWYgb25lIG9mIHRoZW0gZXhpc3RzIGluIG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHNcclxuICAgICAgICAgKiBDdXJyZW50bHkgd29ya3Mgd2VsbCBmb3IgaU9TIC0gQW5kcm9pZCBtaWdodCBuZWVkIHNvbWUgdGVzdGluZ1xyXG4gICAgICAgICAqIEBwYXJhbSAge0VsZW1lbnR9IGVsICB0YXJnZXQgZWxlbWVudCAvIGpxdWVyeSBzZWxlY3RvciAoaW4gc3Vic2VxdWVudCBub2RlcylcclxuICAgICAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICBob3AgY3VycmVudCBob3AgY29tcGFyZWQgdG8gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGRcclxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZXJlIGlzIGEgbWF0Y2ggdG8gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUGFyZW50Rm9yTm9ybWFsU2Nyb2xsRWxlbWVudCAoZWwsIGhvcCkge1xyXG4gICAgICAgICAgICBob3AgPSBob3AgfHwgMDtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQoZWwpLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvcCA8IG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkICYmXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaXMob3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cykgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3AgPT0gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQocGFyZW50LCArK2hvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQXMgSUUgPj0gMTAgZmlyZXMgYm90aCB0b3VjaCBhbmQgbW91c2UgZXZlbnRzIHdoZW4gdXNpbmcgYSBtb3VzZSBpbiBhIHRvdWNoc2NyZWVuXHJcbiAgICAgICAgKiB0aGlzIHdheSB3ZSBtYWtlIHN1cmUgdGhhdCBpcyByZWFsbHkgYSB0b3VjaCBldmVudCB3aGF0IElFIGlzIGRldGVjdGluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzUmVhbGx5VG91Y2goZSl7XHJcbiAgICAgICAgICAgIC8vaWYgaXMgbm90IElFICAgfHwgIElFIGlzIGRldGVjdGluZyBgdG91Y2hgIG9yIGBwZW5gXHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZS5wb2ludGVyVHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgZS5wb2ludGVyVHlwZSAhPSAnbW91c2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBIYW5kbGVyIGZvciB0aGUgdG91Y2ggc3RhcnQgZXZlbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCl7XHJcbiAgICAgICAgICAgIHZhciBlID0gZXZlbnQub3JpZ2luYWxFdmVudDtcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcHBpbmcgdGhlIGF1dG8gc2Nyb2xsIHRvIGFkanVzdCB0byBhIHNlY3Rpb25cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNSZWFsbHlUb3VjaChlKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFkgPSB0b3VjaEV2ZW50cy55O1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaEV2ZW50cy54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGxhc3QgYG51bWJlcmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QXZlcmFnZShlbGVtZW50cywgbnVtYmVyKXtcclxuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL3Rha2luZyBgbnVtYmVyYCBlbGVtZW50cyBmcm9tIHRoZSBlbmQgdG8gbWFrZSB0aGUgYXZlcmFnZSwgaWYgdGhlcmUgYXJlIG5vdCBlbm91Z2h0LCAxXHJcbiAgICAgICAgICAgIHZhciBsYXN0RWxlbWVudHMgPSBlbGVtZW50cy5zbGljZShNYXRoLm1heChlbGVtZW50cy5sZW5ndGggLSBudW1iZXIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXN0RWxlbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc3VtID0gc3VtICsgbGFzdEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHN1bS9udW1iZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZWN0aW5nIG1vdXNld2hlZWwgc2Nyb2xsaW5nXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBodHRwOi8vYmxvZ3Muc2l0ZXBvaW50c3RhdGljLmNvbS9leGFtcGxlcy90ZWNoL21vdXNlLXdoZWVsL2luZGV4Lmh0bWxcclxuICAgICAgICAgKiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vaHRtbDUtamF2YXNjcmlwdC1tb3VzZS13aGVlbC9cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gTW91c2VXaGVlbEhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGwgPSAkKENPTVBMRVRFTFlfU0VMKS5oYXNDbGFzcyhOT1JNQUxfU0NST0xMKTtcclxuXHJcbiAgICAgICAgICAgIC8vYXV0b3Njcm9sbGluZyBhbmQgbm90IHpvb21pbmc/XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhY29udHJvbFByZXNzZWQgJiYgIWlzTm9ybWFsU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8vIGNyb3NzLWJyb3dzZXIgd2hlZWwgZGVsdGFcclxuICAgICAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVkgfHwgLWUuZGV0YWlsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGhvcml6b250YWxEZXRlY3Rpb24gPSB0eXBlb2YgZS53aGVlbERlbHRhWCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGUuZGVsdGFYICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICAgICAgICAgIHZhciBpc1Njcm9sbGluZ1ZlcnRpY2FsbHkgPSAoTWF0aC5hYnMoZS53aGVlbERlbHRhWCkgPCBNYXRoLmFicyhlLndoZWVsRGVsdGEpKSB8fCAoTWF0aC5hYnMoZS5kZWx0YVggKSA8IE1hdGguYWJzKGUuZGVsdGFZKSB8fCAhaG9yaXpvbnRhbERldGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9MaW1pdGluZyB0aGUgYXJyYXkgdG8gMTUwIChsZXRzIG5vdCB3YXN0ZSBtZW1vcnkhKVxyXG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsaW5ncy5sZW5ndGggPiAxNDkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ3Muc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2tlZXBpbmcgcmVjb3JkIG9mIHRoZSBwcmV2aW91cyBzY3JvbGxpbmdzXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdzLnB1c2goTWF0aC5hYnModmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgdG8gc2Nyb2xsIHRoZSBzaXRlIG9uIG1vdXNlIHdoZWVsIHdoZW4gc2Nyb2xsYmFyIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbGFibGUgPSBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxhYmxlKGFjdGl2ZVNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3Qgc2Nyb2xsIGFuZCB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IGN1clRpbWUtcHJldlRpbWU7XHJcbiAgICAgICAgICAgICAgICBwcmV2VGltZSA9IGN1clRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9oYXZlbid0IHRoZXkgc2Nyb2xsZWQgaW4gYSB3aGlsZT9cclxuICAgICAgICAgICAgICAgIC8vKGVub3VnaCB0byBiZSBjb25zaWRlciBhIGRpZmZlcmVudCBzY3JvbGxpbmcgYWN0aW9uIHRvIHNjcm9sbCBhbm90aGVyIHNlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICBpZih0aW1lRGlmZiA+IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbXB0eWluZyB0aGUgYXJyYXksIHdlIGRvbnQgY2FyZSBhYm91dCBvbGQgc2Nyb2xsaW5ncyBmb3Igb3VyIGF2ZXJhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VFbmQgPSBnZXRBdmVyYWdlKHNjcm9sbGluZ3MsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZU1pZGRsZSA9IGdldEF2ZXJhZ2Uoc2Nyb2xsaW5ncywgNzApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FjY2VsZXJhdGluZyA9IGF2ZXJhZ2VFbmQgPj0gYXZlcmFnZU1pZGRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90byBhdm9pZCBkb3VibGUgc3dpcGVzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNBY2NlbGVyYXRpbmcgJiYgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93bj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJywgc2Nyb2xsYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCd1cCcsIHNjcm9sbGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgLy9zdG9wcGluZyB0aGUgYXV0byBzY3JvbGwgdG8gYWRqdXN0IHRvIGEgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgYSBzbGlkZXIgdG8gdGhlIGdpdmVuIGRpcmVjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShkaXJlY3Rpb24sIHNlY3Rpb24pe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IHR5cGVvZiBzZWN0aW9uID09PSAndW5kZWZpbmVkJyA/ICQoU0VDVElPTl9BQ1RJVkVfU0VMKSA6IHNlY3Rpb247XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSBhY3RpdmVTZWN0aW9uLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKTtcclxuICAgICAgICAgICAgdmFyIG51bVNsaWRlcyA9IHNsaWRlcy5maW5kKFNMSURFX1NFTCkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIG9uZSBzbGlkZSBuZWVkZWQgYW5kIG5vdGhpbmcgc2hvdWxkIGJlIHNsaWRpbmdcclxuICAgICAgICAgICAgaWYgKCFzbGlkZXMubGVuZ3RoIHx8IHNsaWRlTW92aW5nIHx8IG51bVNsaWRlcyA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9IHNsaWRlcy5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLnByZXYoU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLm5leHQoU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pc24ndCB0aGVyZSBhIG5leHQgc2xpZGUgaW4gdGhlIHNlY3VlbmNlP1xyXG4gICAgICAgICAgICBpZighZGVzdGlueS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgLy9yZXNwZWN0IGxvb3BIb3Jpem9udGFsIHNldHRpblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxvb3BIb3Jpem9udGFsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnbGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbnkgPSBjdXJyZW50U2xpZGUuc2libGluZ3MoJzpsYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLnNpYmxpbmdzKCc6Zmlyc3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTWFpbnRhaW5zIHRoZSBhY3RpdmUgc2xpZGVzIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICogKEJlY2F1c2UgdGhlIGBzY3JvbGxgIGFuaW1hdGlvbiBtaWdodCBnZXQgbG9zdCB3aXRoIHNvbWUgYWN0aW9ucywgc3VjaCBhcyB3aGVuIHVzaW5nIGNvbnRpbnVvdXNWZXJ0aWNhbClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGtlZXBTbGlkZXNQb3NpdGlvbigpe1xyXG4gICAgICAgICAgICAkKFNMSURFX0FDVElWRV9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbCgkKHRoaXMpLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNEZXN0VG9wID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIFkgcG9zaXRpb24gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24gYW5kXHJcbiAgICAgICAgKiB0aGUgaGVpZ2h0IG9mIHRoZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVzdGluYXRpb25Qb3NpdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIGVsZW1Qb3NpdGlvbiA9IGVsZW1lbnQucG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIG9mIHRoZSBkZXNpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbVBvc2l0aW9uLnRvcDtcclxuICAgICAgICAgICAgdmFyIGlzU2Nyb2xsaW5nRG93biA9ICBlbGVtUG9zaXRpb24udG9wID4gcHJldmlvdXNEZXN0VG9wO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkJvdHRvbSA9IHBvc2l0aW9uIC0gd2luZG93c0hlaWdodCArIGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgdmFyIGJpZ1NlY3Rpb25zRGVzdGluYXRpb24gPSBvcHRpb25zLmJpZ1NlY3Rpb25zRGVzdGluYXRpb247XHJcblxyXG4gICAgICAgICAgICAvL2lzIHRoZSBkZXN0aW5hdGlvbiBlbGVtZW50IGJpZ2dlciB0aGFuIHRoZSB2aWV3cG9ydD9cclxuICAgICAgICAgICAgaWYoZWxlbWVudC5vdXRlckhlaWdodCgpID4gd2luZG93c0hlaWdodCl7XHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cD8gXHJcbiAgICAgICAgICAgICAgICBpZighaXNTY3JvbGxpbmdEb3duICYmICFiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uIHx8IGJpZ1NlY3Rpb25zRGVzdGluYXRpb24gPT09ICdib3R0b20nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBzZWN0aW9uQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3NlY3Rpb25zIGVxdWFsIG9yIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgaGVpZ2h0ICYmIHNjcm9sbGluZyBkb3duPyB8fCAgaXMgcmVzaXppbmcgYW5kIGl0cyBpbiB0aGUgbGFzdCBzZWN0aW9uXHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNTY3JvbGxpbmdEb3duIHx8IChpc1Jlc2l6aW5nICYmIGVsZW1lbnQuaXMoJzpsYXN0LWNoaWxkJykpICl7XHJcbiAgICAgICAgICAgICAgICAvL1RoZSBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgS2VlcGluZyByZWNvcmQgb2YgdGhlIGxhc3Qgc2Nyb2xsZWQgcG9zaXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLlxyXG4gICAgICAgICAgICBObyBjb252ZW50aW9uYWwgbWV0aG9kcyBjYW4gYmUgdXNlZCBhcyB0aGUgc2Nyb2xsIGJhciBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICBBTkQgdGhlIHNlY3Rpb24gbWlnaHQgbm90IGJlIGFjdGl2ZSBpZiBpdCBpcyBhdXRvLWhlaWdodCBhbmQgZGlkbnQgcmVhY2ggdGhlIG1pZGRsZVxyXG4gICAgICAgICAgICBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdGhlIHNpdGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHNjcm9sbHMgdG8gdGhlIHNsaWRlIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxQYWdlKGVsZW1lbnQsIGNhbGxiYWNrLCBpc01vdmVtZW50VXApe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcpeyByZXR1cm47IH0gLy90aGVyZSdzIG5vIGVsZW1lbnQgdG8gc2Nyb2xsLCBsZWF2aW5nIHRoZSBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgdmFyIGR0b3AgPSBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy9sb2NhbCB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdmFyIHYgPSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgaXNNb3ZlbWVudFVwOiBpc01vdmVtZW50VXAsXHJcbiAgICAgICAgICAgICAgICBkdG9wOiBkdG9wLFxyXG4gICAgICAgICAgICAgICAgeU1vdmVtZW50OiBnZXRZbW92ZW1lbnQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBlbGVtZW50LmRhdGEoJ2FuY2hvcicpLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBlbGVtZW50LmluZGV4KFNFQ1RJT05fU0VMKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlOiBlbGVtZW50LmZpbmQoU0xJREVfQUNUSVZFX1NFTCksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uOiAkKFNFQ1RJT05fQUNUSVZFX1NFTCksXHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nU2VjdGlvbjogJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKSArIDEsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYWNoaW5nIHRoZSB2YWx1ZSBvZiBpc1Jlc2l6aW5nIGF0IHRoZSBtb21tZW50IHRoZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuICAgICAgICAgICAgICAgIC8vYmVjYXVzZSBpdCB3aWxsIGJlIGNoZWNrZWQgbGF0ZXIgaW5zaWRlIGEgc2V0VGltZW91dCBhbmQgdGhlIHZhbHVlIG1pZ2h0IGNoYW5nZVxyXG4gICAgICAgICAgICAgICAgbG9jYWxJc1Jlc2l6aW5nOiBpc1Jlc2l6aW5nXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL3F1aXRpbmcgd2hlbiBkZXN0aW5hdGlvbiBzY3JvbGwgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgb25lXHJcbiAgICAgICAgICAgIGlmKCh2LmFjdGl2ZVNlY3Rpb24uaXMoZWxlbWVudCkgJiYgIWlzUmVzaXppbmcpIHx8IChvcHRpb25zLnNjcm9sbEJhciAmJiAkd2luZG93LnNjcm9sbFRvcCgpID09PSB2LmR0b3AgJiYgIWVsZW1lbnQuaGFzQ2xhc3MoQVVUT19IRUlHSFQpICkpeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGlmKHYuYWN0aXZlU2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbmsgPSB2LmFjdGl2ZVNsaWRlLmRhdGEoJ2FuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlSW5kZXggPSB2LmFjdGl2ZVNsaWRlLmluZGV4KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB3ZSBuZWVkIHRvIHdyYXAgYXJvdW5kXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgdHlwZW9mICh2LmlzTW92ZW1lbnRVcCkgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgICAgICgoIXYuaXNNb3ZlbWVudFVwICYmIHYueU1vdmVtZW50ID09ICd1cCcpIHx8IC8vIEludGVuZGluZyB0byBzY3JvbGwgZG93biBidXQgYWJvdXQgdG8gZ28gdXAgb3JcclxuICAgICAgICAgICAgICAgICh2LmlzTW92ZW1lbnRVcCAmJiB2LnlNb3ZlbWVudCA9PSAnZG93bicpKSkgeyAvLyBpbnRlbmRpbmcgdG8gc2Nyb2xsIHVwIGJ1dCBhYm91dCB0byBnbyBkb3duXHJcblxyXG4gICAgICAgICAgICAgICAgdiA9IGNyZWF0ZUluZmluaXRlU2VjdGlvbnModik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2FsbGJhY2sgKG9uTGVhdmUpIGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgIGlmKCQuaXNGdW5jdGlvbihvcHRpb25zLm9uTGVhdmUpICYmICF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLm9uTGVhdmUuY2FsbCh2LmFjdGl2ZVNlY3Rpb24sIHYubGVhdmluZ1NlY3Rpb24sICh2LnNlY3Rpb25JbmRleCArIDEpLCB2LnlNb3ZlbWVudCkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0b3BNZWRpYSh2LmFjdGl2ZVNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhBQ1RJVkUpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgbGF6eUxvYWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLm9uTGVhdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ByZXZlbnRpbmcgZnJvbSBhY3RpdmF0aW5nIHRoZSBNb3VzZVdoZWVsSGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAvL21vcmUgdGhhbiBvbmNlIGlmIHRoZSBwYWdlIGlzIHNjcm9sbGluZ1xyXG4gICAgICAgICAgICBjYW5TY3JvbGwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yTGluaywgdi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAgICAgICBwZXJmb3JtTW92ZW1lbnQodik7XHJcblxyXG4gICAgICAgICAgICAvL2ZsYWcgdG8gYXZvaWQgY2FsbGluZ24gYHNjcm9sbFBhZ2UoKWAgdHdpY2UgaW4gY2FzZSBvZiB1c2luZyBhbmNob3IgbGlua3NcclxuICAgICAgICAgICAgbGFzdFNjcm9sbGVkRGVzdGlueSA9IHYuYW5jaG9yTGluaztcclxuXHJcbiAgICAgICAgICAgIC8vYXZvaWQgZmlyaW5nIGl0IHR3aWNlIChhcyBpdCBkb2VzIGFsc28gb24gc2Nyb2xsKVxyXG4gICAgICAgICAgICBhY3RpdmF0ZU1lbnVBbmROYXYodi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBlcmZvcm1zIHRoZSB2ZXJ0aWNhbCBtb3ZlbWVudCAoYnkgQ1NTMyBvciBieSBqUXVlcnkpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwZXJmb3JtTW92ZW1lbnQodil7XHJcbiAgICAgICAgICAgIC8vIHVzaW5nIENTUzMgdHJhbnNsYXRlIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY3NzMyAmJiBvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIHYuZHRvcCArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZXZlbiB3aGVuIHRoZSBzY3JvbGxpbmdTcGVlZCBpcyAwIHRoZXJlJ3MgYSBsaXR0bGUgZGVsYXksIHdoaWNoIG1pZ2h0IGNhdXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmdTcGVlZCB0byBjaGFuZ2UgaW4gY2FzZSBvZiB1c2luZyBzaWxlbnRNb3ZlVG8oKTtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXNpbmcgalF1ZXJ5IGFuaW1hdGVcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxTZXR0aW5ncyA9IGdldFNjcm9sbFNldHRpbmdzKHYpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCkuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZXR0aW5ncy5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgb3B0aW9ucy5lYXNpbmcpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uICgpIHsgLy9vbmx5IG9uZSBzaW5nbGUgY2FsbGJhY2sgaW4gY2FzZSBvZiBhbmltYXRpbmcgIGBodG1sLCBib2R5YFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhhY2shXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0aW1lb3V0IHByZXZlbnRzIHNldHRpbmcgdGhlIG1vc3QgZG9taW5hbnQgc2VjdGlvbiBpbiB0aGUgdmlld3BvcnQgYXMgXCJhY3RpdmVcIiB3aGVuIHRoZSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGVkIHRvIGEgc21hbGxlciBzZWN0aW9uIGJ5IHVzaW5nIHRoZSBtb3VzZXdoZWVsIChhdXRvIHNjcm9sbGluZykgcmF0aGVyIHRoYW4gZHJhZ2luZyB0aGUgc2Nyb2xsIGJhci5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdXNpbmcgc2Nyb2xsQmFyOnRydWUgSXQgc2VlbXMgbGlrZSB0aGUgc2Nyb2xsIGV2ZW50cyBzdGlsbCBnZXR0aW5nIHByb3BhZ2F0ZWQgZXZlbiBhZnRlciB0aGUgc2Nyb2xsaW5nIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LDMwKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgc2Nyb2xsaW5nIHNldHRpbmdzIGRlcGVuZGluZyBvbiB0aGUgcGx1Z2luIGF1dG9TY3JvbGxpbmcgb3B0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTY3JvbGxTZXR0aW5ncyh2KXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwub3B0aW9ucyA9IHsgJ3RvcCc6IC12LmR0b3B9O1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSBXUkFQUEVSX1NFTDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwub3B0aW9ucyA9IHsgJ3Njcm9sbFRvcCc6IHYuZHRvcH07XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwuZWxlbWVudCA9ICdodG1sLCBib2R5JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNjcm9sbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBzZWN0aW9ucyBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lIHRvIGNyZWF0ZSB0aGUgaW5maW5pdGUgZWZmZWN0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5maW5pdGVTZWN0aW9ucyh2KXtcclxuICAgICAgICAgICAgLy8gU2Nyb2xsaW5nIGRvd25cclxuICAgICAgICAgICAgaWYgKCF2LmlzTW92ZW1lbnRVcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBhbGwgcHJldmlvdXMgc2VjdGlvbnMgdG8gYWZ0ZXIgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuYWZ0ZXIodi5hY3RpdmVTZWN0aW9uLnByZXZBbGwoU0VDVElPTl9TRUwpLmdldCgpLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IC8vIFNjcm9sbGluZyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBhbGwgbmV4dCBzZWN0aW9ucyB0byBiZWZvcmUgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuYmVmb3JlKHYuYWN0aXZlU2VjdGlvbi5uZXh0QWxsKFNFQ1RJT05fU0VMKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBkaXNwbGF5ZWQgcG9zaXRpb24gKG5vdyB0aGF0IHdlIGNoYW5nZWQgdGhlIGVsZW1lbnQgb3JkZXIpXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgkKFNFQ1RJT05fQUNUSVZFX1NFTCkucG9zaXRpb24oKS50b3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzYXZlIGZvciBsYXRlciB0aGUgZWxlbWVudHMgdGhhdCBzdGlsbCBuZWVkIHRvIGJlIHJlb3JkZXJlZFxyXG4gICAgICAgICAgICB2LndyYXBBcm91bmRFbGVtZW50cyA9IHYuYWN0aXZlU2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFuaW1hdGlvbiB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdi5kdG9wID0gdi5lbGVtZW50LnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICB2LnlNb3ZlbWVudCA9IGdldFltb3ZlbWVudCh2LmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEZpeCBzZWN0aW9uIG9yZGVyIGFmdGVyIGNvbnRpbnVvdXNWZXJ0aWNhbCBjaGFuZ2VzIGhhdmUgYmVlbiBhbmltYXRlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyICh2KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCBpcyBpbiBlZmZlY3QgKGFuZCBhdXRvU2Nyb2xsaW5nIHdvdWxkIGFsc28gYmUgaW4gZWZmZWN0IHRoZW4pLFxyXG4gICAgICAgICAgICAvLyBmaW5pc2ggbW92aW5nIHRoZSBlbGVtZW50cyBhcm91bmQgc28gdGhlIGRpcmVjdCBuYXZpZ2F0aW9uIHdpbGwgZnVuY3Rpb24gbW9yZSBzaW1wbHlcclxuICAgICAgICAgICAgaWYgKCF2LndyYXBBcm91bmRFbGVtZW50cyB8fCAhdi53cmFwQXJvdW5kRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2LmlzTW92ZW1lbnRVcCkge1xyXG4gICAgICAgICAgICAgICAgJChTRUNUSU9OX0ZJUlNUX1NFTCkuYmVmb3JlKHYud3JhcEFyb3VuZEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoU0VDVElPTl9MQVNUX1NFTCkuYWZ0ZXIodi53cmFwQXJvdW5kRWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaWxlbnRTY3JvbGwoJChTRUNUSU9OX0FDVElWRV9TRUwpLnBvc2l0aW9uKCkudG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBhY3RpdmUgc2xpZGVzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGtlZXBTbGlkZXNQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWN0aW9ucyB0byBkbyBvbmNlIHRoZSBzZWN0aW9uIGlzIGxvYWRlZC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyU2VjdGlvbkxvYWRzICh2KXtcclxuICAgICAgICAgICAgY29udGludW91c1ZlcnRpY2FsRml4U2VjdGlvbk9yZGVyKHYpO1xyXG5cclxuICAgICAgICAgICAgLy9jYWxsYmFjayAoYWZ0ZXJMb2FkKSBpZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlckxvYWQpICYmICF2LmxvY2FsSXNSZXNpemluZyAmJiBvcHRpb25zLmFmdGVyTG9hZC5jYWxsKHYuZWxlbWVudCwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmFmdGVyTG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5yZXNldFNsaWRlcnMgJiYgRlAucmVzZXRTbGlkZXJzKXtcclxuICAgICAgICAgICAgICAgIEZQLnJlc2V0U2xpZGVycy5hcHBseSh2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxheU1lZGlhKHYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHYuZWxlbWVudC5hZGRDbGFzcyhDT01QTEVURUxZKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKENPTVBMRVRFTFkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FuU2Nyb2xsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICQuaXNGdW5jdGlvbih2LmNhbGxiYWNrKSAmJiB2LmNhbGxiYWNrLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIExhenkgbG9hZHMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxhenlMb2FkKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgZGVzdGlueS5maW5kKCdpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY10nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsICQodGhpcykuZGF0YSgnc3JjJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuaXMoJ3NvdXJjZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3ZpZGVvJykuZ2V0KDApLmxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBsYXlzIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlNZWRpYShkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vcGxheWluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xyXG4gICAgICAgICAgICBkZXN0aW55LmZpbmQoJ3ZpZGVvLCBhdWRpbycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKS5nZXQoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgJiYgdHlwZW9mIGVsZW1lbnQucGxheSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3lvdXR1YmUgdmlkZW9zXHJcbiAgICAgICAgICAgIGRlc3RpbnkuZmluZCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXknKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlZb3V0dWJlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9pbiBjYXNlIHRoZSBVUkwgd2FzIG5vdCBsb2FkZWQgeWV0LiBPbiBwYWdlIGxvYWQgd2UgbmVlZCB0aW1lIGZvciB0aGUgbmV3IFVSTCAod2l0aCB0aGUgQVBJIHN0cmluZykgdG8gbG9hZC5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlZb3V0dWJlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQbGF5cyBhIHlvdXR1YmUgdmlkZW9cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlZb3V0dWJlKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBlbGVtZW50LmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwbGF5VmlkZW9cIixcImFyZ3NcIjpcIlwifScsICcqJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdG9wcyB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdG9wTWVkaWEoZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW55ID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAvL3N0b3BwaW5nIEhUTUw1IG1lZGlhIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIGRlc3RpbnkuZmluZCgndmlkZW8sIGF1ZGlvJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWtlZXBwbGF5aW5nJykgJiYgdHlwZW9mIGVsZW1lbnQucGF1c2UgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8veW91dHViZSB2aWRlb3NcclxuICAgICAgICAgICAgZGVzdGlueS5maW5kKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKS5nZXQoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIC95b3V0dWJlXFwuY29tXFwvZW1iZWRcXC8vLnRlc3QoJCh0aGlzKS5hdHRyKCdzcmMnKSkgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWtlZXBwbGF5aW5nJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZ2V0KDApLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCcqJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhY3RpdmUgc2xpZGUgKG9yIHNlY3Rpb24pIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9IGRlc3RpbnkuZmluZChTTElERV9BQ1RJVkVfU0VMKTtcclxuICAgICAgICAgICAgaWYoIHNsaWRlLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbnkgPSAkKHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlc3Rpbnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdG8gdGhlIGFuY2hvciBpbiB0aGUgVVJMIHdoZW4gbG9hZGluZyB0aGUgc2l0ZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IoKXtcclxuICAgICAgICAgICAgLy9nZXR0aW5nIHRoZSBhbmNob3IgbGluayBpbiB0aGUgVVJMIGFuZCBkZWxldGluZyB0aGUgYCNgXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlWzBdKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb24peyAgLy9pZiB0aGVyZXMgYW55ICNcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYW5pbWF0ZUFuY2hvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb24sIHNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbGVudE1vdmVUbyhzZWN0aW9uLCBzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZWN0aW5nIGFueSBjaGFuZ2Ugb24gdGhlIFVSTCB0byBzY3JvbGwgdG8gdGhlIGdpdmVuIGFuY2hvciBsaW5rXHJcbiAgICAgICAgKiAoYSB3YXkgdG8gZGV0ZWN0IGJhY2sgaGlzdG9yeSBidXR0b24gYXMgd2UgcGxheSB3aXRoIHRoZSBoYXNoZXMgb24gdGhlIFVSTClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhc2hDaGFuZ2VIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmKCFpc1Njcm9sbGluZyAmJiAhb3B0aW9ucy5sb2NrQW5jaG9ycyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAgd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlWzFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIG1vdmluZyB0byBhIHNsaWRlIGluIHRoZSBmaXJzdCBzZWN0aW9uIGZvciB0aGUgZmlyc3QgdGltZSAoZmlyc3QgdGltZSB0byBhZGQgYW4gYW5jaG9yIHRvIHRoZSBVUkwpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRmlyc3RTbGlkZU1vdmUgPSAgKHR5cGVvZiBsYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRmlyc3RTY3JvbGxNb3ZlID0gKHR5cGVvZiBsYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2xpZGUgPT09ICd1bmRlZmluZWQnICYmICFzbGlkZU1vdmluZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb24ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAvKmluIG9yZGVyIHRvIGNhbGwgc2Nyb2xscGFnZSgpIG9ubHkgb25jZSBmb3IgZWFjaCBkZXN0aW5hdGlvbiBhdCBhIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICBJdCBpcyBjYWxsZWQgdHdpY2UgZm9yIGVhY2ggc2Nyb2xsIG90aGVyd2lzZSwgYXMgaW4gY2FzZSBvZiB1c2luZyBhbmNob3JsaW5rcyBgaGFzaENoYW5nZWBcclxuICAgICAgICAgICAgICAgICAgICBldmVudCBpcyBmaXJlZCBvbiBldmVyeSBzY3JvbGwgdG9vLiovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChzZWN0aW9uICYmIHNlY3Rpb24gIT09IGxhc3RTY3JvbGxlZERlc3RpbnkpICYmICFpc0ZpcnN0U2xpZGVNb3ZlIHx8IGlzRmlyc3RTY3JvbGxNb3ZlIHx8ICghc2xpZGVNb3ZpbmcgJiYgbGFzdFNjcm9sbGVkU2xpZGUgIT0gc2xpZGUgKSkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb24sIHNsaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2xpZGluZyB3aXRoIGFycm93IGtleXMsIGJvdGgsIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXHJcbiAgICAgICAgZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZSkge1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGtleWRvd25JZCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQoJzpmb2N1cycpO1xyXG5cclxuICAgICAgICAgICAgaWYoIWFjdGl2ZUVsZW1lbnQuaXMoJ3RleHRhcmVhJykgJiYgIWFjdGl2ZUVsZW1lbnQuaXMoJ2lucHV0JykgJiYgIWFjdGl2ZUVsZW1lbnQuaXMoJ3NlbGVjdCcpICYmXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmF0dHIoJ2NvbnRlbnRFZGl0YWJsZScpICE9PSBcInRydWVcIiAmJiBhY3RpdmVFbGVtZW50LmF0dHIoJ2NvbnRlbnRFZGl0YWJsZScpICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlib2FyZFNjcm9sbGluZyAmJiBvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleUNvZGUgPSBlLndoaWNoO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgc2Nyb2xsIHdpdGggYXJyb3cga2V5cyAmIHNwYWNlYmFyICYgUGFnZSBVcCAmIERvd24ga2V5c1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleUNvbnRyb2xzID0gWzQwLCAzOCwgMzIsIDMzLCAzNF07XHJcbiAgICAgICAgICAgICAgICBpZigkLmluQXJyYXkoa2V5Q29kZSwga2V5Q29udHJvbHMpID4gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sUHJlc3NlZCA9IGUuY3RybEtleTtcclxuXHJcbiAgICAgICAgICAgICAgICBrZXlkb3duSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgb25rZXlkb3duKGUpO1xyXG4gICAgICAgICAgICAgICAgfSwxNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b29sdGlwVGV4dEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdG8gcHJldmVudCBzY3JvbGxpbmcgd2hpbGUgem9vbWluZ1xyXG4gICAgICAgIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgaWYoaXNXaW5kb3dGb2N1c2VkKXsgLy90aGUga2V5dXAgZ2V0cyBmaXJlZCBvbiBuZXcgdGFiIGN0cmwgKyB0IGluIEZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xQcmVzc2VkID0gZS5jdHJsS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcclxuICAgICAgICBmdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICAvL21pZGRsZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMil7XHJcbiAgICAgICAgICAgICAgICBvbGRQYWdlWSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3VuYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICAvL21pZGRsZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMil7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub2ZmKCdtb3VzZW1vdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TY3JvbGxpbmcgaG9yaXpvbnRhbGx5IHdoZW4gY2xpY2tpbmcgb24gdGhlIHNsaWRlciBjb250cm9scy5cclxuICAgICAgICBmdW5jdGlvbiBzbGlkZUFycm93SGFuZGxlcigpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQodGhpcykuY2xvc2VzdChTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhTTElERVNfUFJFVikpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5tLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZUxlZnQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vd2hlbiBvcGVuaW5nIGEgbmV3IHRhYiAoY3RybCArIHQpLCBgY29udHJvbGAgd29uJ3QgYmUgcHJlc3NlZCB3aGVuIGNvbW1pbmcgYmFjay5cclxuICAgICAgICBmdW5jdGlvbiBibHVySGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpc1dpbmRvd0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29udHJvbFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2Nyb2xscyB0byB0aGUgc2VjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBuYXZpZ2F0aW9uIGJ1bGxldFxyXG4gICAgICAgIGZ1bmN0aW9uIHNlY3Rpb25CdWxsZXRIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoKTtcclxuICAgICAgICAgICAgc2Nyb2xsUGFnZSgkKFNFQ1RJT05fU0VMKS5lcShpbmRleCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlQnVsbGV0SGFuZGxlcihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gJCh0aGlzKS5jbG9zZXN0KFNFQ1RJT05fU0VMKS5maW5kKFNMSURFU19XUkFQUEVSX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW55ID0gc2xpZGVzLmZpbmQoU0xJREVfU0VMKS5lcSgkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuaW5kZXgoKSk7XHJcblxyXG4gICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogS2V5ZG93biBldmVudFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25rZXlkb3duKGUpe1xyXG4gICAgICAgICAgICB2YXIgc2hpZnRQcmVzc2VkID0gZS5zaGlmdEtleTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgLy91cFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzM6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsudXApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZG93blxyXG4gICAgICAgICAgICAgICAgY2FzZSAzMjogLy9zcGFjZWJhclxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaWZ0UHJlc3NlZCAmJiBpc1Njcm9sbEFsbG93ZWQuay51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsuZG93bil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uRG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0hvbWVcclxuICAgICAgICAgICAgICAgIGNhc2UgMzY6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsudXApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlVG8oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vRW5kXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM1OlxyXG4gICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5kb3duKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvKCAkKFNFQ1RJT05fU0VMKS5sZW5ndGggKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9sZWZ0XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmlnaHRcclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZXhpdCB0aGlzIGhhbmRsZXIgZm9yIG90aGVyIGtleXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlY3RpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgbW91c2UgbW92ZW1lbnQuXHJcbiAgICAgICAgKiBVc2VkIG9ubHkgZm9yIHRoZSBtaWRkbGUgYnV0dG9uIG9mIHRoZSBtb3VzZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIHZhciBvbGRQYWdlWSA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmluZyB1cFxyXG4gICAgICAgICAgICAgICAgaWYgKGUucGFnZVkgPCBvbGRQYWdlWSAmJiBpc1Njcm9sbEFsbG93ZWQubS51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25VcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG1vdmluZyBkb3duXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGUucGFnZVkgPiBvbGRQYWdlWSAmJiBpc1Njcm9sbEFsbG93ZWQubS5kb3duKXtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbGRQYWdlWSA9IGUucGFnZVk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgaG9yaXpvbnRhbCBzbGlkZXJzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSwgZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzbGlkZXMuY2xvc2VzdChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzOiBzbGlkZXMsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW55OiBkZXN0aW55LFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBkZXN0aW55UG9zOiBkZXN0aW55LnBvc2l0aW9uKCksXHJcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4OiBkZXN0aW55LmluZGV4KCksXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBzZWN0aW9uLmluZGV4KFNFQ1RJT05fU0VMKSxcclxuICAgICAgICAgICAgICAgIGFuY2hvckxpbms6IHNlY3Rpb24uZGF0YSgnYW5jaG9yJyksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNOYXY6IHNlY3Rpb24uZmluZChTTElERVNfTkFWX1NFTCksXHJcbiAgICAgICAgICAgICAgICBzbGlkZUFuY2hvcjogIGdldEFuY2hvcihkZXN0aW55KSxcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZTogc2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpLFxyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlSW5kZXg6IHNlY3Rpb24uZmluZChTTElERV9BQ1RJVkVfU0VMKS5pbmRleCgpLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FjaGluZyB0aGUgdmFsdWUgb2YgaXNSZXNpemluZyBhdCB0aGUgbW9tbWVudCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAvL2JlY2F1c2UgaXQgd2lsbCBiZSBjaGVja2VkIGxhdGVyIGluc2lkZSBhIHNldFRpbWVvdXQgYW5kIHRoZSB2YWx1ZSBtaWdodCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsSXNSZXNpemluZzogaXNSZXNpemluZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2LnhNb3ZlbWVudCA9IGdldFhtb3ZlbWVudCh2LnByZXZTbGlkZUluZGV4LCB2LnNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy9pbXBvcnRhbnQhISBPbmx5IGRvIGl0IHdoZW4gbm90IHJlc2l6aW5nXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgZnJvbSBzY3JvbGxpbmcgdG8gdGhlIG5leHQvcHJldiBzZWN0aW9uIHdoZW4gdXNpbmcgc2Nyb2xsSG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgICAgICBjYW5TY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5vblNsaWRlTGVhdmUpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyAmJiB2LnhNb3ZlbWVudCE9PSdub25lJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoJC5pc0Z1bmN0aW9uKCBvcHRpb25zLm9uU2xpZGVMZWF2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5vblNsaWRlTGVhdmUuY2FsbCggdi5wcmV2U2xpZGUsIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSksIHYucHJldlNsaWRlSW5kZXgsIHYueE1vdmVtZW50LCB2LnNsaWRlSW5kZXggKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdG9wTWVkaWEodi5wcmV2U2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgZGVzdGlueS5hZGRDbGFzcyhBQ1RJVkUpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5sb29wSG9yaXpvbnRhbCAmJiBvcHRpb25zLmNvbnRyb2xBcnJvd3Mpe1xyXG4gICAgICAgICAgICAgICAgLy9oaWRkaW5nIGl0IGZvciB0aGUgZmlzdCBzbGlkZSwgc2hvd2luZyBmb3IgdGhlIHJlc3RcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfQVJST1dfUFJFVl9TRUwpLnRvZ2dsZSh2LnNsaWRlSW5kZXghPT0wKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2hpZGRpbmcgaXQgZm9yIHRoZSBsYXN0IHNsaWRlLCBzaG93aW5nIGZvciB0aGUgcmVzdFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5maW5kKFNMSURFU19BUlJPV19ORVhUX1NFTCkudG9nZ2xlKCFkZXN0aW55LmlzKCc6bGFzdC1jaGlsZCcpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9vbmx5IGNoYW5naW5nIHRoZSBVUkwgaWYgdGhlIHNsaWRlcyBhcmUgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbiAobm90IGZvciByZXNpemUgcmUtYWRqdXN0aW5nKVxyXG4gICAgICAgICAgICBpZihzZWN0aW9uLmhhc0NsYXNzKEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUodi5zbGlkZUluZGV4LCB2LnNsaWRlQW5jaG9yLCB2LmFuY2hvckxpbmssIHYuc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoRlAuY29udGludW91c0hvcml6b250YWwpe1xyXG4gICAgICAgICAgICAgICAgRlAuY29udGludW91c0hvcml6b250YWwuYXBwbHkodik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBlcmZvcm1Ib3Jpem9udGFsTW92ZShzbGlkZXMsIHYsIHRydWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5pbnRlcmxvY2tlZFNsaWRlcyAmJiBGUC5pbnRlcmxvY2tlZFNsaWRlcyl7XHJcbiAgICAgICAgICAgICAgICBGUC5pbnRlcmxvY2tlZFNsaWRlcy5hcHBseSh2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyU2xpZGVMb2Fkcyh2KXtcclxuICAgICAgICAgICAgaWYoRlAuY29udGludW91c0hvcml6b250YWwpe1xyXG4gICAgICAgICAgICAgICAgRlAuY29udGludW91c0hvcml6b250YWwuYWZ0ZXJTbGlkZUxvYWRzKHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjdGl2ZVNsaWRlc05hdmlnYXRpb24odi5zbGlkZXNOYXYsIHYuc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJTbGlkZUxvYWQgKSAmJiBvcHRpb25zLmFmdGVyU2xpZGVMb2FkLmNhbGwoIHYuZGVzdGlueSwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi5zbGlkZUFuY2hvciwgdi5zbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL25lZWRzIHRvIGJlIGluc2lkZSB0aGUgY29uZGl0aW9uIHRvIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBjb250aW51b3VzVmVydGljYWwgYW5kIHNjcm9sbEhvcml6b250YWxseVxyXG4gICAgICAgICAgICAgICAgLy9hbmQgdG8gcHJldmVudCBkb3VibGUgc2Nyb2xsIHJpZ2h0IGFmdGVyIGEgd2luZG93cyByZXNpemVcclxuICAgICAgICAgICAgICAgIGNhblNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXlNZWRpYSh2LmRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgLy9sZXR0aW5nIHRoZW0gc2xpZGUgYWdhaW5cclxuICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSBmYWxzZTsgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYoRlAuaW50ZXJsb2NrZWRTbGlkZXMpe1xyXG4gICAgICAgICAgICAgICAgRlAuaW50ZXJsb2NrZWRTbGlkZXMuYXBwbHkodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGVyZm9ybXMgdGhlIGhvcml6b250YWwgbW92ZW1lbnQuIChDU1MzIG9yIGpRdWVyeSlcclxuICAgICAgICAqIFxyXG4gICAgICAgICogQHBhcmFtIGZpcmVDYWxsYmFjayB7Qm9vbH0gLSBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGZpcmUgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwZXJmb3JtSG9yaXpvbnRhbE1vdmUoc2xpZGVzLCB2LCBmaXJlQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueVBvcyA9IHYuZGVzdGlueVBvcztcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY3NzMyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoLScgKyBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdCkgKyAncHgsIDBweCwgMHB4KSc7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkQW5pbWF0aW9uKHNsaWRlcy5maW5kKFNMSURFU19DT05UQUlORVJfU0VMKSkuY3NzKGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2QpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZHNJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2sgJiYgYWZ0ZXJTbGlkZUxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgb3B0aW9ucy5lYXNpbmcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNsaWRlcy5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0IDogTWF0aC5yb3VuZChkZXN0aW55UG9zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnNjcm9sbGluZ1NwZWVkLCBvcHRpb25zLmVhc2luZywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjayAmJiBhZnRlclNsaWRlTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBzdGF0ZSBmb3IgdGhlIGhvcml6b250YWwgYnVsbGV0IG5hdmlnYXRpb25zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZlU2xpZGVzTmF2aWdhdGlvbihzbGlkZXNOYXYsIHNsaWRlSW5kZXgpe1xyXG4gICAgICAgICAgICBzbGlkZXNOYXYuZmluZChBQ1RJVkVfU0VMKS5yZW1vdmVDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICBzbGlkZXNOYXYuZmluZCgnbGknKS5lcShzbGlkZUluZGV4KS5maW5kKCdhJykuYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcmV2aW91c0hlaWdodCA9IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vd2hlbiByZXNpemluZyB0aGUgc2l0ZSwgd2UgYWRqdXN0IHRoZSBoZWlnaHRzIG9mIHRoZSBzZWN0aW9ucywgc2xpbVNjcm9sbC4uLlxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKXtcclxuICAgICAgICAgICAgLy9jaGVja2luZyBpZiBpdCBuZWVkcyB0byBnZXQgcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICByZXNwb25zaXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZWJ1aWxkIGltbWVkaWF0ZWx5IG9uIHRvdWNoIGRldmljZXNcclxuICAgICAgICAgICAgaWYgKGlzVG91Y2hEZXZpY2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBrZXlib2FyZCBpcyBOT1QgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVFbGVtZW50LmlzKCd0ZXh0YXJlYScpICYmICFhY3RpdmVFbGVtZW50LmlzKCdpbnB1dCcpICYmICFhY3RpdmVFbGVtZW50LmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtpbmcgc3VyZSB0aGUgY2hhbmdlIGluIHRoZSB2aWV3cG9ydCBzaXplIGlzIGVub3VnaCB0byBmb3JjZSBhIHJlYnVpbGQuICgyMCAlIG9mIHRoZSB3aW5kb3cgdG8gYXZvaWQgcHJvYmxlbXMgd2hlbiBoaWRkaW5nIHNjcm9sbCBiYXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBNYXRoLmFicyhjdXJyZW50SGVpZ2h0IC0gcHJldmlvdXNIZWlnaHQpID4gKDIwICogTWF0aC5tYXgocHJldmlvdXNIZWlnaHQsIGN1cnJlbnRIZWlnaHQpIC8gMTAwKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZUJ1aWxkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0hlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vaW4gb3JkZXIgdG8gY2FsbCB0aGUgZnVuY3Rpb25zIG9ubHkgd2hlbiB0aGUgcmVzaXplIGlzIGZpbmlzaGVkXHJcbiAgICAgICAgICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI5ODYxMi9qcXVlcnktaG93LXRvLWNhbGwtcmVzaXplLWV2ZW50LW9ubHktb25jZS1pdHMtZmluaXNoZWQtcmVzaXppbmdcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzaXplSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVCdWlsZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sIDM1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ2hlY2tzIGlmIHRoZSBzaXRlIG5lZWRzIHRvIGdldCByZXNwb25zaXZlIGFuZCBkaXNhYmxlcyBhdXRvU2Nyb2xsaW5nIGlmIHNvLlxyXG4gICAgICAgICogQSBjbGFzcyBgZnAtcmVzcG9uc2l2ZWAgaXMgYWRkZWQgdG8gdGhlIHBsdWdpbidzIGNvbnRhaW5lciBpbiBjYXNlIHRoZSB1c2VyIHdhbnRzIHRvIHVzZSBpdCBmb3IgaGlzIG93biByZXNwb25zaXZlIENTUy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNpdmUoKXtcclxuICAgICAgICAgICAgdmFyIHdpZHRoTGltaXQgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgb3B0aW9ucy5yZXNwb25zaXZlV2lkdGg7IC8vYmFja3dhcmRzIGNvbXBhdGlibGl0eVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0TGltaXQgPSBvcHRpb25zLnJlc3BvbnNpdmVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvL29ubHkgY2FsY3VsYXRpbmcgd2hhdCB3ZSBuZWVkLiBSZW1lbWJlciBpdHMgY2FsbGVkIG9uIHRoZSByZXNpemUgZXZlbnQuXHJcbiAgICAgICAgICAgIHZhciBpc0JyZWFraW5nUG9pbnRXaWR0aCA9IHdpZHRoTGltaXQgJiYgJHdpbmRvdy5vdXRlcldpZHRoKCkgPCB3aWR0aExpbWl0O1xyXG4gICAgICAgICAgICB2YXIgaXNCcmVha2luZ1BvaW50SGVpZ2h0ID0gaGVpZ2h0TGltaXQgJiYgJHdpbmRvdy5oZWlnaHQoKSA8IGhlaWdodExpbWl0O1xyXG5cclxuICAgICAgICAgICAgaWYod2lkdGhMaW1pdCAmJiBoZWlnaHRMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludFdpZHRoIHx8IGlzQnJlYWtpbmdQb2ludEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih3aWR0aExpbWl0KXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50V2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaGVpZ2h0TGltaXQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgdHJhbnNpdGlvbiBhbmltYXRpb25zIGZvciB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9ICdhbGwgJyArIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQgKyAnbXMgJyArIG9wdGlvbnMuZWFzaW5nY3NzMztcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoTk9fVFJBTlNJVElPTik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogdHJhbnNpdGlvbixcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmVtb3ZlIHRyYW5zaXRpb24gYW5pbWF0aW9ucyBmb3IgdGhlIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYWRkQ2xhc3MoTk9fVFJBTlNJVElPTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGl2YXRpbmcgdGhlIHZlcnRpY2FsIG5hdmlnYXRpb24gYnVsbGV0cyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIHNsaWRlIG5hbWUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZU5hdkRvdHMobmFtZSwgc2VjdGlvbkluZGV4KXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5uYXZpZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5maW5kKEFDVElWRV9TRUwpLnJlbW92ZUNsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuZmluZCgnYVtocmVmPVwiIycgKyBuYW1lICsgJ1wiXScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuZmluZCgnbGknKS5lcShzZWN0aW9uSW5kZXgpLmZpbmQoJ2EnKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGl2YXRpbmcgdGhlIHdlYnNpdGUgbWFpbiBtZW51IGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gc2xpZGUgbmFtZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTWVudUVsZW1lbnQobmFtZSl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubWVudSl7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbnMubWVudSkuZmluZChBQ1RJVkVfU0VMKS5yZW1vdmVDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmZpbmQoJ1tkYXRhLW1lbnVhbmNob3I9XCInK25hbWUrJ1wiXScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0byBhY3RpdmUgdGhlIGN1cnJlbnQgbWVudSBhbmQgdmVydGljYWwgbmF2IGl0ZW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVNZW51QW5kTmF2KGFuY2hvciwgaW5kZXgpe1xyXG4gICAgICAgICAgICBhY3RpdmF0ZU1lbnVFbGVtZW50KGFuY2hvcik7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlTmF2RG90cyhhbmNob3IsIGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dW5zIGB1cGAgb3IgYGRvd25gIGRlcGVuZGluZyBvbiB0aGUgc2Nyb2xsaW5nIG1vdmVtZW50IHRvIHJlYWNoIGl0cyBkZXN0aW5hdGlvblxyXG4gICAgICAgICogZnJvbSB0aGUgY3VycmVudCBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0WW1vdmVtZW50KGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgZnJvbUluZGV4ID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmluZGV4KFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgdmFyIHRvSW5kZXggPSBkZXN0aW55LmluZGV4KFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgaWYoIGZyb21JbmRleCA9PSB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZnJvbUluZGV4ID4gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZXR1bnMgYHJpZ2h0YCBvciBgbGVmdGAgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGxpbmcgbW92ZW1lbnQgdG8gcmVhY2ggaXRzIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgKiBmcm9tIHRoZSBjdXJyZW50IHNsaWRlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0WG1vdmVtZW50KGZyb21JbmRleCwgdG9JbmRleCl7XHJcbiAgICAgICAgICAgIGlmKCBmcm9tSW5kZXggPT0gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZyb21JbmRleCA+IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ2hlY2tzIGlmIHRoZSBlbGVtZW50IG5lZWRzIHNjcm9sbGJhciBhbmQgaWYgdGhlIHVzZXIgd2FudHMgdG8gYXBwbHkgaXQuXHJcbiAgICAgICAgKiBJZiBzbyBpdCBjcmVhdGVzIGl0LlxyXG4gICAgICAgICpcclxuICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50ICAgalF1ZXJ5IG9iamVjdCBvZiB0aGUgc2VjdGlvbiBvciBzbGlkZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2Nyb2xsQmFyKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAvL1VzZXIgZG9lc24ndCB3YW50IHNjcm9sbGJhciBoZXJlPyBTYXlvbmFyYSBiYWJ5IVxyXG4gICAgICAgICAgICBpZihlbGVtZW50Lmhhc0NsYXNzKCdmcC1ub3Njcm9sbCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvL25lZWRlZCB0byBtYWtlIGBzY3JvbGxIZWlnaHRgIHdvcmsgdW5kZXIgT3BlcmEgMTJcclxuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcm9sbE92ZXJmbG93SGFuZGxlciA9IG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgd3JhcCA9IHNjcm9sbE92ZXJmbG93SGFuZGxlci53cmFwQ29udGVudCgpO1xyXG4gICAgICAgICAgICAvL2luIGNhc2UgZWxlbWVudCBpcyBhIHNsaWRlXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZWxlbWVudC5jbG9zZXN0KFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGFibGUgPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2Nyb2xsYWJsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZXJlIHdhcyBzY3JvbGwsIHRoZSBjb250ZW50SGVpZ2h0IHdpbGwgYmUgdGhlIG9uZSBpbiB0aGUgc2Nyb2xsYWJsZSBzZWN0aW9uXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbGFibGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQgPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2Nyb2xsSGVpZ2h0KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LmdldCgwKS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LmZpbmQoVEFCTEVfQ0VMTF9TRUwpLmdldCgwKS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSB3aW5kb3dzSGVpZ2h0IC0gcGFyc2VJbnQoc2VjdGlvbi5jc3MoJ3BhZGRpbmctYm90dG9tJykpIC0gcGFyc2VJbnQoc2VjdGlvbi5jc3MoJ3BhZGRpbmctdG9wJykpO1xyXG5cclxuICAgICAgICAgICAgLy9uZWVkcyBzY3JvbGw/XHJcbiAgICAgICAgICAgIGlmICggY29udGVudEhlaWdodCA+IHNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy9kaWQgd2UgYWxyZWFkeSBoYXZlIGFuIHNjcm9sbGJhciA/IFVwZGF0aW5nIGl0XHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxhYmxlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnVwZGF0ZShlbGVtZW50LCBzY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jcmVhdGluZyB0aGUgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMudmVydGljYWxDZW50ZXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZChUQUJMRV9DRUxMX1NFTCkud3JhcElubmVyKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LndyYXBJbm5lcih3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmNyZWF0ZShlbGVtZW50LCBzY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIHNjcm9sbGluZyB3aGVuIGl0IGlzIG5vdCBuZWNlc3NhcnkgYW55bW9yZVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnJlbW92ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy91bmRvXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdycsICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRhYmxlQ2xhc3MoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIC8vSW4gY2FzZSB3ZSBhcmUgc3R5bGluZyBmb3IgdGhlIDJuZCB0aW1lIGFzIGluIHdpdGggcmVwb25zaXZlU2xpZGVzXHJcbiAgICAgICAgICAgIGlmKCFlbGVtZW50Lmhhc0NsYXNzKFRBQkxFKSl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFRBQkxFKS53cmFwSW5uZXIoJzxkaXYgY2xhc3M9XCInICsgVEFCTEVfQ0VMTCArICdcIiBzdHlsZT1cImhlaWdodDonICsgZ2V0VGFibGVIZWlnaHQoZWxlbWVudCkgKyAncHg7XCIgLz4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGFibGVIZWlnaHQoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSGVpZ2h0ID0gd2luZG93c0hlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFkZGluZ1RvcCB8fCBvcHRpb25zLnBhZGRpbmdCb3R0b20pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYoIXNlY3Rpb24uaGFzQ2xhc3MoU0VDVElPTikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24gPSBlbGVtZW50LmNsb3Nlc3QoU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYWRkaW5ncyA9IHBhcnNlSW50KHNlY3Rpb24uY3NzKCdwYWRkaW5nLXRvcCcpKSArIHBhcnNlSW50KHNlY3Rpb24uY3NzKCdwYWRkaW5nLWJvdHRvbScpKTtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25IZWlnaHQgPSAod2luZG93c0hlaWdodCAtIHBhZGRpbmdzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25IZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgYSBjc3MzIHRyYW5zZm9ybSBwcm9wZXJ0eSB0byB0aGUgY29udGFpbmVyIGNsYXNzIHdpdGggb3Igd2l0aG91dCBhbmltYXRpb24gZGVwZW5kaW5nIG9uIHRoZSBhbmltYXRlZCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgYW5pbWF0ZWQpe1xyXG4gICAgICAgICAgICBpZihhbmltYXRlZCl7XHJcbiAgICAgICAgICAgICAgICBhZGRBbmltYXRpb24oY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbmltYXRpb24oY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmNzcyhnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKSk7XHJcblxyXG4gICAgICAgICAgICAvL3N5bmNyb25vdXNseSByZW1vdmluZyB0aGUgY2xhc3MgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBoYXMgYmVlbiBhcHBsaWVkLlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoTk9fVFJBTlNJVElPTik7XHJcbiAgICAgICAgICAgIH0sMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIGEgc2VjdGlvbiBieSBpdHMgYW5jaG9yIC8gaW5kZXhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKXtcclxuICAgICAgICAgICAgLy9zZWN0aW9uXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gY29udGFpbmVyLmZpbmQoU0VDVElPTl9TRUwgKyAnW2RhdGEtYW5jaG9yPVwiJytzZWN0aW9uQW5jaG9yKydcIl0nKTtcclxuICAgICAgICAgICAgaWYoIXNlY3Rpb24ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24gPSAkKFNFQ1RJT05fU0VMKS5lcSggKHNlY3Rpb25BbmNob3IgLTEpICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIGEgc2xpZGUgaW5zaWRlIGEgZ2l2ZW4gc2VjdGlvbiBieSBpdHMgYW5jaG9yIC8gaW5kZXhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNsaWRlQnlBbmNob3Ioc2xpZGVBbmNob3IsIHNlY3Rpb24pe1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gc2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9ICBzbGlkZXMuZmluZChTTElERV9TRUwgKyAnW2RhdGEtYW5jaG9yPVwiJytzbGlkZUFuY2hvcisnXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZighc2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNsaWRlID0gc2xpZGVzLmZpbmQoU0xJREVfU0VMKS5lcShzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUgYW5jaG9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsUGFnZUFuZFNsaWRlKGRlc3RpbnksIHNsaWRlKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBnZXRTZWN0aW9uQnlBbmNob3IoZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAvL2RlZmF1bHQgc2xpZGVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy93ZSBuZWVkIHRvIHNjcm9sbCB0byB0aGUgc2VjdGlvbiBhbmQgdGhlbiB0byB0aGUgc2xpZGVcclxuICAgICAgICAgICAgaWYgKGRlc3RpbnkgIT09IGxhc3RTY3JvbGxlZERlc3RpbnkgJiYgIXNlY3Rpb24uaGFzQ2xhc3MoQUNUSVZFKSl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKHNlY3Rpb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2xpZGVyKHNlY3Rpb24sIHNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vaWYgd2Ugd2VyZSBhbHJlYWR5IGluIHRoZSBzZWN0aW9uXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTbGlkZXIoc2VjdGlvbiwgc2xpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdGhlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUgZGVzdGluYXRpb24gZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxTbGlkZXIoc2VjdGlvbiwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2xpZGVBbmNob3IgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSBzZWN0aW9uLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKTtcclxuICAgICAgICAgICAgICAgIHZhciBkZXN0aW55ID0gIGdldFNsaWRlQnlBbmNob3Ioc2xpZGVBbmNob3IsIHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRlc3RpbnkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDcmVhdGVzIGEgbGFuZHNjYXBlIG5hdmlnYXRpb24gYmFyIHdpdGggZG90cyBmb3IgaG9yaXpvbnRhbCBzbGlkZXJzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVzTmF2aWdhdGlvbihzZWN0aW9uLCBudW1TbGlkZXMpe1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZCgnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfTkFWICsgJ1wiPjx1bD48L3VsPjwvZGl2PicpO1xyXG4gICAgICAgICAgICB2YXIgbmF2ID0gc2VjdGlvbi5maW5kKFNMSURFU19OQVZfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIG9yIGJvdHRvbVxyXG4gICAgICAgICAgICBuYXYuYWRkQ2xhc3Mob3B0aW9ucy5zbGlkZXNOYXZQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwgbnVtU2xpZGVzOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbmF2LmZpbmQoJ3VsJykuYXBwZW5kKCc8bGk+PGEgaHJlZj1cIiNcIj48c3Bhbj48L3NwYW4+PC9hPjwvbGk+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2VudGVyaW5nIGl0XHJcbiAgICAgICAgICAgIG5hdi5jc3MoJ21hcmdpbi1sZWZ0JywgJy0nICsgKG5hdi53aWR0aCgpLzIpICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICBuYXYuZmluZCgnbGknKS5maXJzdCgpLmZpbmQoJ2EnKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgb2YgdGhlIHdlYnNpdGUgZGVwZW5kaW5nIG9uIHRoZSBhY3RpdmUgc2VjdGlvbi9zbGlkZS5cclxuICAgICAgICAqIEl0IGNoYW5nZXMgdGhlIFVSTCBoYXNoIHdoZW4gbmVlZGVkIGFuZCB1cGRhdGVzIHRoZSBib2R5IGNsYXNzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3IsIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSGFzaCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hbmNob3JzLmxlbmd0aCAmJiAhb3B0aW9ucy5sb2NrQW5jaG9ycyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pc24ndCBpdCB0aGUgZmlyc3Qgc2xpZGU/XHJcbiAgICAgICAgICAgICAgICBpZihzbGlkZUluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgYW5jaG9yTGluayAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSGFzaCA9IGFuY2hvckxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NsaWRlIHdpdGhvdXQgYW5jaG9yIGxpbms/IFdlIHRha2UgdGhlIGluZGV4IGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHNsaWRlQW5jaG9yID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQW5jaG9yID0gc2xpZGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxlZFNsaWRlID0gc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXJsSGFzaChzZWN0aW9uSGFzaCArICcvJyArIHNsaWRlQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZpcnN0IHNsaWRlIHdvbid0IGhhdmUgc2xpZGUgYW5jaG9yLCBqdXN0IHRoZSBzZWN0aW9uIG9uZVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIHNsaWRlSW5kZXggIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWRTbGlkZSA9IHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zZWN0aW9uIHdpdGhvdXQgc2xpZGVzXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEJvZHlDbGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBVUkwgaGFzaC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFVybEhhc2godXJsKXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5yZWNvcmRIaXN0b3J5KXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9Nb2JpbGUgQ2hyb21lIGRvZXNuJ3Qgd29yayB0aGUgbm9ybWFsIHdheSwgc28uLi4gbGV0cyB1c2UgSFRNTDUgZm9yIHBob25lcyA6KVxyXG4gICAgICAgICAgICAgICAgaWYoaXNUb3VjaERldmljZSB8fCBpc1RvdWNoKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsICcjJyArIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoIGJhc2VVcmwgKyAnIycgKyB1cmwgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhbmNob3IgZm9yIHRoZSBnaXZlbiBzbGlkZSAvIHNlY3Rpb24uIEl0cyBpbmRleCB3aWxsIGJlIHVzZWQgaWYgdGhlcmUncyBub25lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QW5jaG9yKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gZWxlbWVudC5kYXRhKCdhbmNob3InKTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWxlbWVudC5pbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgLy9TbGlkZSB3aXRob3V0IGFuY2hvciBsaW5rPyBXZSB0YWtlIHRoZSBpbmRleCBpbnN0ZWFkLlxyXG4gICAgICAgICAgICBpZih0eXBlb2YgYW5jaG9yID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBhbmNob3IgPSBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuY2hvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBhIGNsYXNzIGZvciB0aGUgYm9keSBvZiB0aGUgcGFnZSBkZXBlbmRpbmcgb24gdGhlIGFjdGl2ZSBzZWN0aW9uIC8gc2xpZGVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJvZHlDbGFzcygpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gc2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25BbmNob3IgPSBnZXRBbmNob3Ioc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvciA9IGdldEFuY2hvcihzbGlkZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICctJyArIHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NoYW5naW5nIHNsYXNoIGZvciBkYXNoIHRvIG1ha2UgaXQgYSB2YWxpZCBDU1Mgc3R5bGVcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgnLycsICctJykucmVwbGFjZSgnIycsJycpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBwcmV2aW91cyBhbmNob3IgY2xhc3Nlc1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NSZSA9IG5ldyBSZWdFeHAoJ1xcXFxiXFxcXHM/JyArIFZJRVdJTkdfUFJFRklYICsgJy1bXlxcXFxzXStcXFxcYicsIFwiZ1wiKTtcclxuICAgICAgICAgICAgJGJvZHlbMF0uY2xhc3NOYW1lID0gJGJvZHlbMF0uY2xhc3NOYW1lLnJlcGxhY2UoY2xhc3NSZSwgJycpO1xyXG5cclxuICAgICAgICAgICAgLy9hZGRpbmcgdGhlIGN1cnJlbnQgYW5jaG9yXHJcbiAgICAgICAgICAgICRib2R5LmFkZENsYXNzKFZJRVdJTkdfUFJFRklYICsgJy0nICsgdGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBmb3IgdHJhbnNsYXRlM2Qgc3VwcG9ydFxyXG4gICAgICAgICogQHJldHVybiBib29sZWFuXHJcbiAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2NjE2NzEvZGV0ZWN0aW5nLXRyYW5zZm9ybS10cmFuc2xhdGUzZC1zdXBwb3J0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdXBwb3J0M2QoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgICAgICAgICAgICAgIGhhczNkLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnd2Via2l0VHJhbnNmb3JtJzonLXdlYmtpdC10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdPVHJhbnNmb3JtJzonLW8tdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnbXNUcmFuc2Zvcm0nOictbXMtdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW96VHJhbnNmb3JtJzonLW1vei10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOid0cmFuc2Zvcm0nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGUuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHQgaW4gdHJhbnNmb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVt0XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhczNkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodHJhbnNmb3Jtc1t0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChoYXMzZCAhPT0gdW5kZWZpbmVkICYmIGhhczNkLmxlbmd0aCA+IDAgJiYgaGFzM2QgIT09ICdub25lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZXMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmaXJlZCBieSB0aGUgbW91c2Ugd2hlZWwgYW5kIHRyYWNrcGFkLlxyXG4gICAgICAgICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBtb3VzZXdoZWVsIGFuZCB0cmFja3BhZCBtb3ZlbWVudHMgd29uJ3Qgc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vSUU5LCBDaHJvbWUsIFNhZmFyaSwgT3BlclxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL0ZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL29sZCBGaXJlZm94XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25tb3VzZXdoZWVsJywgTW91c2VXaGVlbEhhbmRsZXIpOyAvL0lFIDYvNy84XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0aGUgYXV0byBzY3JvbGxpbmcgYWN0aW9uIGZvciB0aGUgbW91c2Ugd2hlZWwgYW5kIHRyYWNrcGFkLlxyXG4gICAgICAgICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBtb3VzZXdoZWVsIGFuZCB0cmFja3BhZCBtb3ZlbWVudHMgd2lsbCBzY3JvbGwgdGhyb3VnaCBzZWN0aW9uc1xyXG4gICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRNb3VzZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBfYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYWRkRXZlbnRMaXN0ZW5lclwiO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhdHRhY2hFdmVudFwiO1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gJ29uJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIC8vIGRldGVjdCBhdmFpbGFibGUgd2hlZWwgZXZlbnRcclxuICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSAnb253aGVlbCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgPyAnd2hlZWwnIDogLy8gTW9kZXJuIGJyb3dzZXJzIHN1cHBvcnQgXCJ3aGVlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNld2hlZWwgIT09IHVuZGVmaW5lZCA/ICdtb3VzZXdoZWVsJyA6IC8vIFdlYmtpdCBhbmQgSUUgc3VwcG9ydCBhdCBsZWFzdCBcIm1vdXNld2hlZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgJ0RPTU1vdXNlU2Nyb2xsJzsgLy8gbGV0J3MgYXNzdW1lIHRoYXQgcmVtYWluaW5nIGJyb3dzZXJzIGFyZSBvbGRlciBGaXJlZm94XHJcblxyXG5cclxuICAgICAgICAgICAgaWYoc3VwcG9ydCA9PSAnRE9NTW91c2VTY3JvbGwnKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50WyBfYWRkRXZlbnRMaXN0ZW5lciBdKHByZWZpeCArICdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9oYW5kbGUgTW96TW91c2VQaXhlbFNjcm9sbCBpbiBvbGRlciBGaXJlZm94XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFsgX2FkZEV2ZW50TGlzdGVuZXIgXShwcmVmaXggKyBzdXBwb3J0LCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEJpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcHJlc3NlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkTWlkZGxlV2hlZWxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBtb3VzZURvd25IYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBVbmJpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZU1pZGRsZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIHRoZSBwb3NzaWJpbGl0eSB0byBhdXRvIHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zIG9uIHRvdWNoIGRldmljZXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRUb3VjaEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaWYoaXNUb3VjaERldmljZSB8fCBpc1RvdWNoKXtcclxuICAgICAgICAgICAgICAgIC8vTWljcm9zb2Z0IHBvaW50ZXJzXHJcbiAgICAgICAgICAgICAgICB2YXIgTVNQb2ludGVyID0gZ2V0TVNQb2ludGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChXUkFQUEVSX1NFTClcclxuICAgICAgICAgICAgICAgICAgICAub2ZmKCd0b3VjaHN0YXJ0ICcgKyAgTVNQb2ludGVyLmRvd24pLm9uKCd0b3VjaHN0YXJ0ICcgKyBNU1BvaW50ZXIuZG93biwgdG91Y2hTdGFydEhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9mZigndG91Y2htb3ZlICcgKyBNU1BvaW50ZXIubW92ZSkub24oJ3RvdWNobW92ZSAnICsgTVNQb2ludGVyLm1vdmUsIHRvdWNoTW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZXMgdGhlIGF1dG8gc2Nyb2xsaW5nIGZvciB0b3VjaCBkZXZpY2VzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVG91Y2hIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCl7XHJcbiAgICAgICAgICAgICAgICAvL01pY3Jvc29mdCBwb2ludGVyc1xyXG4gICAgICAgICAgICAgICAgdmFyIE1TUG9pbnRlciA9IGdldE1TUG9pbnRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoV1JBUFBFUl9TRUwpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9mZigndG91Y2hzdGFydCAnICsgTVNQb2ludGVyLmRvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgLm9mZigndG91Y2htb3ZlICcgKyBNU1BvaW50ZXIubW92ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZXR1cm5zIGFuZCBvYmplY3Qgd2l0aCBNaWNyb3NvZnQgcG9pbnRlcnMgKGZvciBJRTwxMSBhbmQgZm9yIElFID49IDExKVxyXG4gICAgICAgICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2RuMzA0ODg2KHY9dnMuODUpLmFzcHhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldE1TUG9pbnRlcigpe1xyXG4gICAgICAgICAgICB2YXIgcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC8vSUUgPj0gMTEgJiByZXN0IG9mIGJyb3dzZXJzXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5Qb2ludGVyRXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHsgZG93bjogJ3BvaW50ZXJkb3duJywgbW92ZTogJ3BvaW50ZXJtb3ZlJ307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vSUUgPCAxMVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHsgZG93bjogJ01TUG9pbnRlckRvd24nLCBtb3ZlOiAnTVNQb2ludGVyTW92ZSd9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgcGFnZVggYW5kIHBhZ2VZIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzL2lzc3Vlcy8xOTQjaXNzdWVjb21tZW50LTM0MDY5ODU0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRFdmVudHNQYWdlKGUpe1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBldmVudHMueSA9ICh0eXBlb2YgZS5wYWdlWSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGUucGFnZVkgfHwgZS5wYWdlWCkgPyBlLnBhZ2VZIDogZS50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgICAgICAgICAgZXZlbnRzLnggPSAodHlwZW9mIGUucGFnZVggIT09ICd1bmRlZmluZWQnICYmIChlLnBhZ2VZIHx8IGUucGFnZVgpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWCk7XHJcblxyXG4gICAgICAgICAgICAvL2luIHRvdWNoIGRldmljZXMgd2l0aCBzY3JvbGxCYXI6dHJ1ZSwgZS5wYWdlWSBpcyBkZXRlY3RlZCwgYnV0IHdlIGhhdmUgdG8gZGVhbCB3aXRoIHRvdWNoIGV2ZW50cy4gIzEwMDhcclxuICAgICAgICAgICAgaWYoaXNUb3VjaCAmJiBpc1JlYWxseVRvdWNoKGUpICYmIG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy55ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBhY3RpdmUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZS5cclxuICAgICAgICAqIEBwYXJhbSBub0NhbGxiYWNrIHtib29sfSB0cnVlIG9yIGRlZmluZWQgLT4gbm8gY2FsbGJhY2tzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoYWN0aXZlU2xpZGUsIG5vQ2FsbGJhY2tzKXtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nU3BlZWQgKDAsICdpbnRlcm5hbCcpO1xyXG5cclxuICAgICAgICAgICAgaWYodHlwZW9mIG5vQ2FsbGJhY2tzICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgZmlyaW5nIGNhbGxiYWNrcyBhZnRlclNsaWRlTG9hZCBldGMuXHJcbiAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKGFjdGl2ZVNsaWRlLmNsb3Nlc3QoU0xJREVTX1dSQVBQRVJfU0VMKSwgYWN0aXZlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYodHlwZW9mIG5vQ2FsbGJhY2tzICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkKG9yaWdpbmFscy5zY3JvbGxpbmdTcGVlZCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgc2lsZW50bHkgKHdpdGggbm8gYW5pbWF0aW9uKSB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gWSBwb3NpdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNpbGVudFNjcm9sbCh0b3Ape1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wKHRvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5jc3MzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIHRvcCArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jc3MoJ3RvcCcsIC10b3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVybnMgdGhlIGNyb3NzLWJyb3dzZXIgdHJhbnNmb3JtIHN0cmluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2Qpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNsYXRlM2QsXHJcbiAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzp0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBbGxvd2luZyBvciBkaXNhbGxvd2luZyB0aGUgbW91c2Uvc3dpcGUgc2Nyb2xsIGluIGEgZ2l2ZW4gZGlyZWN0aW9uLiAobm90IGZvciBrZXlib2FyZClcclxuICAgICAgICAqIEB0eXBlICBtIChtb3VzZSkgb3IgayAoa2V5Ym9hcmQpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsIGRpcmVjdGlvbiwgdHlwZSl7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzogaXNTY3JvbGxBbGxvd2VkW3R5cGVdLnVwID0gdmFsdWU7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6IGlzU2Nyb2xsQWxsb3dlZFt0eXBlXS5kb3duID0gdmFsdWU7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6IGlzU2Nyb2xsQWxsb3dlZFt0eXBlXS5sZWZ0ID0gdmFsdWU7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOiBpc1Njcm9sbEFsbG93ZWRbdHlwZV0ucmlnaHQgPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhbGwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ20nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWxsb3dTY3JvbGxpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXlib2FyZFNjcm9sbGluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRGVzdHJveXMgZnVsbHBhZ2UuanMgcGx1Z2luIGV2ZW50cyBhbmQgb3B0aW5hbGx5IGl0cyBodG1sIG1hcmt1cCBhbmQgc3R5bGVzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KGFsbCl7XHJcbiAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICBzZXRBbGxvd1Njcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEtleWJvYXJkU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKERFU1RST1lFRCk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYWZ0ZXJTbGlkZUxvYWRzSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoYWZ0ZXJTZWN0aW9uTG9hZHNJZCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVJZCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxJZCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxJZDIpO1xyXG5cclxuICAgICAgICAgICAgJHdpbmRvd1xyXG4gICAgICAgICAgICAgICAgLm9mZignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcilcclxuICAgICAgICAgICAgICAgIC5vZmYoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcilcclxuICAgICAgICAgICAgICAgIC5vZmYoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgJGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycsIFNFQ1RJT05fTkFWX1NFTCArICcgYScpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyJywgU0VDVElPTl9OQVZfU0VMICsgJyBsaScpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlJywgU0VDVElPTl9OQVZfU0VMICsgJyBsaScpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycsIFNMSURFU19OQVZfTElOS19TRUwpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZW92ZXInLCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VvdXQnLCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycsIFNMSURFU19BUlJPV19TRUwpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2xpZGVMb2Fkc0lkKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2VjdGlvbkxvYWRzSWQpO1xyXG5cclxuICAgICAgICAgICAgLy9sZXRzIG1ha2UgYSBtZXNzIVxyXG4gICAgICAgICAgICBpZihhbGwpe1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveVN0cnVjdHVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJlbW92ZXMgaW5saW5lIHN0eWxlcyBhZGRlZCBieSBmdWxscGFnZS5qc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveVN0cnVjdHVyZSgpe1xyXG4gICAgICAgICAgICAvL3Jlc2V0aW5nIHRoZSBgdG9wYCBvciBgdHJhbnNsYXRlYCBwcm9wZXJ0aWVzIHRvIDBcclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKDApO1xyXG5cclxuICAgICAgICAgICAgLy9sb2FkaW5nIGFsbCB0aGUgbGF6eSBsb2FkIGNvbnRlbnRcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3JjJywgJCh0aGlzKS5kYXRhKCdzcmMnKSk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtc3JjJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwgKyAnLCAnICsgU0xJREVTX05BVl9TRUwgKyAgJywgJyArIFNMSURFU19BUlJPV19TRUwpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBpbmxpbmUgc3R5bGVzXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwpLmNzcygge1xyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InIDogJycsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChTTElERV9TRUwpLmNzcygge1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnJyxcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICcnLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICd0b3VjaC1hY3Rpb24nOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRodG1sQm9keS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ292ZXJmbG93JzogJycsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgLmZwLWVuYWJsZWQgY2xhc3NcclxuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKEVOQUJMRUQpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIC5mcC1yZXNwb25zaXZlIGNsYXNzXHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKFJFU1BPTlNJVkUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBvZiB0aGUgLmZwLXZpZXdpbmctIGNsYXNzZXNcclxuICAgICAgICAgICAgJC5lYWNoKCRib2R5LmdldCgwKS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSwgZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZihWSUVXSU5HX1BSRUZJWCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgYWRkZWQgY2xhc3Nlc1xyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMICsgJywgJyArIFNMSURFX1NFTCkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIucmVtb3ZlKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhUQUJMRSArICcgJyArIEFDVElWRSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQW5pbWF0aW9uKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAvL1Vud3JhcHBpbmcgY29udGVudFxyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZChUQUJMRV9DRUxMX1NFTCArICcsICcgKyBTTElERVNfQ09OVEFJTkVSX1NFTCArICcsICcgKyBTTElERVNfV1JBUFBFUl9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdW53cmFwIG5vdCBiZWluZyB1c2UgaW4gY2FzZSB0aGVyZSdzIG5vIGNoaWxkIGVsZW1lbnQgaW5zaWRlIGFuZCBpdHMganVzdCB0ZXh0XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9zY3JvbGxpbmcgdGhlIHBhZ2UgdG8gdGhlIHRvcCB3aXRoIG5vIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAkaHRtbEJvZHkuc2Nyb2xsVG9wKDApO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBzZWxlY3RvcnNcclxuICAgICAgICAgICAgdmFyIHVzZWRTZWxlY3RvcnMgPSBbU0VDVElPTiwgU0xJREUsIFNMSURFU19DT05UQUlORVJdO1xyXG4gICAgICAgICAgICAkLmVhY2godXNlZFNlbGVjdG9ycywgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICQoJy4nICsgdmFsdWUpLnJlbW92ZUNsYXNzKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIGEgdmFyaWFibGUgd2l0aCBtdWx0aXBsZSBzdGF0ZXMgKG9yaWdpbmFsLCBhbmQgdGVtcG9yYWwpXHJcbiAgICAgICAgKiBTb21lIHZhcmlhYmxlcyBzdWNoIGFzIGBhdXRvU2Nyb2xsaW5nYCBvciBgcmVjb3JkSGlzdG9yeWAgbWlnaHQgY2hhbmdlIGF1dG9tYXRpY2FsbHkgaXRzIHN0YXRlIHdoZW4gdXNpbmcgYHJlc3BvbnNpdmVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYC5cclxuICAgICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGJvdGggc3RhdGVzLCB0aGUgb3JpZ2luYWwgYW5kIHRoZSB0ZW1wb3JhbCBvbmUuXHJcbiAgICAgICAgKiBJZiB0eXBlIGlzIG5vdCAnaW50ZXJuYWwnLCB0aGVuIHdlIGFzc3VtZSB0aGUgdXNlciBpcyBnbG9iYWxseSBjaGFuZ2luZyB0aGUgdmFyaWFibGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRWYXJpYWJsZVN0YXRlKHZhcmlhYmxlLCB2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnNbdmFyaWFibGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgIT09ICdpbnRlcm5hbCcpe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxzW3ZhcmlhYmxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERpc3BsYXlzIHdhcm5pbmdzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5V2FybmluZ3MoKXtcclxuICAgICAgICAgICAgaWYoJCgnaHRtbCcpLmhhc0NsYXNzKEVOQUJMRUQpKXtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcignZXJyb3InLCAnRnVsbHBhZ2UuanMgY2FuIG9ubHkgYmUgaW5pdGlhbGl6ZWQgb25jZSBhbmQgeW91IGFyZSBkb2luZyBpdCBtdWx0aXBsZSB0aW1lcyEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBtdXR1YWxseSBleGNsdXNpdmUgc2V0dGluZ3NcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5sb29wVG9wIHx8IG9wdGlvbnMubG9vcEJvdHRvbSkpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9uIGBsb29wVG9wL2xvb3BCb3R0b21gIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbEJhciAmJiBvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcignd2FybicsICdPcHRpb24gYHNjcm9sbEJhcmAgaXMgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggYHNjcm9sbE92ZXJmbG93YC4gU2VjdGlvbnMgd2l0aCBzY3JvbGxPdmVyZmxvdyBtaWdodCBub3Qgd29yayB3ZWxsIGluIEZpcmVmb3gnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcignd2FybicsICdPcHRpb24gYHNjcm9sbEJhcmAgaXMgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggYGNvbnRpbnVvdXNWZXJ0aWNhbGA7IGBjb250aW51b3VzVmVydGljYWxgIGRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vYW5jaG9ycyBjYW4gbm90IGhhdmUgdGhlIHNhbWUgdmFsdWUgYXMgYW55IGVsZW1lbnQgSUQgb3IgTkFNRVxyXG4gICAgICAgICAgICAkLmVhY2gob3B0aW9ucy5hbmNob3JzLCBmdW5jdGlvbihpbmRleCwgbmFtZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYXNlIGluc2Vuc2l0aXZlIHNlbGVjdG9ycyAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk0NjUxODcvMTA4MTM5NilcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lQXR0ciA9ICRkb2N1bWVudC5maW5kKCdbbmFtZV0nKS5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykuYXR0cignbmFtZScpICYmICQodGhpcykuYXR0cignbmFtZScpLnRvTG93ZXJDYXNlKCkgPT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkQXR0ciA9ICRkb2N1bWVudC5maW5kKCdbaWRdJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoJ2lkJykgJiYgJCh0aGlzKS5hdHRyKCdpZCcpLnRvTG93ZXJDYXNlKCkgPT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaWRBdHRyLmxlbmd0aCB8fCBuYW1lQXR0ci5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ2RhdGEtYW5jaG9yIHRhZ3MgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBgaWRgIGVsZW1lbnQgb24gdGhlIHNpdGUgKG9yIGBuYW1lYCBlbGVtZW50IGZvciBJRSkuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRBdHRyLmxlbmd0aCAmJiBzaG93RXJyb3IoJ2Vycm9yJywgJ1wiJyArIG5hbWUgKyAnXCIgaXMgaXMgYmVpbmcgdXNlZCBieSBhbm90aGVyIGVsZW1lbnQgYGlkYCBwcm9wZXJ0eScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVBdHRyLmxlbmd0aCAmJiBzaG93RXJyb3IoJ2Vycm9yJywgJ1wiJyArIG5hbWUgKyAnXCIgaXMgaXMgYmVpbmcgdXNlZCBieSBhbm90aGVyIGVsZW1lbnQgYG5hbWVgIHByb3BlcnR5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTaG93cyBhIG1lc3NhZ2UgaW4gdGhlIGNvbnNvbGUgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaG93RXJyb3IodHlwZSwgdGV4dCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSAmJiBjb25zb2xlW3R5cGVdKCdmdWxsUGFnZTogJyArIHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07IC8vZW5kIG9mICQuZm4uZnVsbHBhZ2VcclxuXHJcbiAgICBpZih0eXBlb2YgSVNjcm9sbCAhPT0gJ3VuZGVmaW5lZCcpeyBcclxuICAgICAgICAvKlxyXG4gICAgICAgICogVHVybnMgaVNjcm9sbCBgbW91c2V3aGVlbGAgb3B0aW9uIG9mZiBkeW5hbWljYWxseVxyXG4gICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2N1YmlxL2lzY3JvbGwvaXNzdWVzLzEwMzZcclxuICAgICAgICAqL1xyXG4gICAgICAgIElTY3JvbGwucHJvdG90eXBlLndoZWVsT24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogVHVybnMgaVNjcm9sbCBgbW91c2V3aGVlbGAgb3B0aW9uIG9uIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vY3ViaXEvaXNjcm9sbC9pc3N1ZXMvMTAzNlxyXG4gICAgICAgICovXHJcbiAgICAgICAgSVNjcm9sbC5wcm90b3R5cGUud2hlZWxPZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IHRvIGhhbmRsZSBvdmVyZmxvdyBzY3JvbGxpbmcuXHJcbiAgICAgKiBUaGlzIHVzZXMganF1ZXJ5LnNsaW1TY3JvbGwgdG8gYWNjb21wbGlzaCBvdmVyZmxvdyBzY3JvbGxpbmcuXHJcbiAgICAgKiBJdCBpcyBwb3NzaWJsZSB0byBwYXNzIGluIGFuIGFsdGVybmF0ZSBzY3JvbGxPdmVyZmxvd0hhbmRsZXJcclxuICAgICAqIHRvIHRoZSBmdWxscGFnZS5qcyBvcHRpb24gdGhhdCBpbXBsZW1lbnRzIHRoZSBzYW1lIGZ1bmN0aW9uc1xyXG4gICAgICogYXMgdGhpcyBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHZhciBpc2Nyb2xsSGFuZGxlciA9IHtcclxuICAgICAgICByZWZyZXNoSWQ6IG51bGwsXHJcbiAgICAgICAgaVNjcm9sbEluc3RhbmNlczogW10sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVHVybnMgb2ZmIGlTY3JvbGwgZm9yIHRoZSBkZXN0aW5hdGlvbiBzZWN0aW9uLlxyXG4gICAgICAgICogV2hlbiBzY3JvbGxpbmcgdmVyeSBmYXN0IG9uIHNvbWUgdHJhY2twYWRzIChhbmQgQXBwbGUgbGFwdG9wcykgdGhlIGluZXJ0aWFsIHNjcm9sbGluZyB3b3VsZFxyXG4gICAgICAgICogc2Nyb2xsIHRoZSBkZXN0aW5hdGlvbiBzZWN0aW9uL3NsaWRlIGJlZm9yZSB0aGUgc2VjdGlvbnMgYW5pbWF0aW9ucyBlbmRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpLmRhdGEoJ2lzY3JvbGxJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnICYmIHNjcm9sbGVyKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbGVyLndoZWVsT2ZmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBUdXJucyBvbiBpU2Nyb2xsIG9uIHNlY3Rpb24gbG9hZFxyXG4gICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpLmRhdGEoJ2lzY3JvbGxJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnICYmIHNjcm9sbGVyKXtcclxuICAgICAgICAgICAgICAgICAgc2Nyb2xsZXIud2hlZWxPbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gb3ZlcmZsb3cgc2Nyb2xsaW5nIGlzIG5lZWRlZCBmb3IgYSBzZWN0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50ICAgICAgalF1ZXJ5IG9iamVjdCBjb250YWluaW5nIGN1cnJlbnQgc2VjdGlvblxyXG4gICAgICAgICAqIEBwYXJhbSAge051bWJlcn0gc2Nyb2xsSGVpZ2h0IEN1cnJlbnQgd2luZG93IGhlaWdodCBpbiBwaXhlbHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQsIHNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IGVsZW1lbnQuZmluZChTQ1JPTExBQkxFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBzY3JvbGxhYmxlLmhlaWdodChzY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICBzY3JvbGxhYmxlLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaVNjcm9sbEluc3RhbmNlID0gJHRoaXMuZGF0YSgnaXNjcm9sbEluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaVNjcm9sbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGlzY3JvbGxIYW5kbGVyLmlTY3JvbGxJbnN0YW5jZXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlTY3JvbGxJbnN0YW5jZSA9IG5ldyBJU2Nyb2xsKCR0aGlzLmdldCgwKSwgaXNjcm9sbE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaXNjcm9sbEhhbmRsZXIuaVNjcm9sbEluc3RhbmNlcy5wdXNoKGlTY3JvbGxJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnLCBpU2Nyb2xsSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm4gYSBib29sZWFuIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgaXMgYVxyXG4gICAgICAgICAqIHRoZSBlbmQgb3IgYXQgdGhlIHN0YXJ0IG9mIHRoZSBzY3JvbGxpbmcgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7U3RyaW5nfSAgdHlwZSAgICAgICBFaXRoZXIgJ3RvcCcgb3IgJ2JvdHRvbSdcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBzY3JvbGxhYmxlIGpRdWVyeSBvYmplY3QgZm9yIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnRcclxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzU2Nyb2xsZWQ6IGZ1bmN0aW9uKHR5cGUsIHNjcm9sbGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vbm8gc2Nyb2xsZXI/IFxyXG4gICAgICAgICAgICBpZiAoIXNjcm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Nyb2xsZXIueSA+PSAwICYmICFzY3JvbGxhYmxlLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAgLSBzY3JvbGxlci55KSArIHNjcm9sbGFibGUuc2Nyb2xsVG9wKCkgKyAxICsgc2Nyb2xsYWJsZS5pbm5lckhlaWdodCgpID49IHNjcm9sbGFibGVbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgc2Nyb2xsYWJsZSBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gc2VjdGlvbi5cclxuICAgICAgICAgKiBJZiB0aGVyZSBhcmUgbGFuZHNjYXBlIHNsaWRlcywgd2lsbCBvbmx5IHJldHVybiBhIHNjcm9sbGFibGUgZWxlbWVudFxyXG4gICAgICAgICAqIGlmIGl0IGlzIGluIHRoZSBhY3RpdmUgc2xpZGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBhY3RpdmVTZWN0aW9uIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNjcm9sbGFibGU6IGZ1bmN0aW9uKGFjdGl2ZVNlY3Rpb24pe1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbGFuZHNjYXBlIHNsaWRlcywgd2UgY2hlY2sgaWYgdGhlIHNjcm9sbGluZyBiYXIgaXMgaW4gdGhlIGN1cnJlbnQgb25lIG9yIG5vdFxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVTZWN0aW9uLmZpbmQoU0NST0xMQUJMRV9TRUwpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHNjcm9sbCBoZWlnaHQgb2YgdGhlIHdyYXBwZWQgY29udGVudC5cclxuICAgICAgICAgKiBJZiB0aGlzIGlzIGxhcmdlciB0aGFuIHRoZSB3aW5kb3cgaGVpZ2h0IG1pbnVzIHNlY3Rpb24gcGFkZGluZyxcclxuICAgICAgICAgKiBvdmVyZmxvdyBzY3JvbGxpbmcgaXMgbmVlZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIG92ZXJmbG93IHNjcm9sbGluZyBpcyBubyBsb25nZXIgbmVlZGVkIGZvciBhIHNlY3Rpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgICAgICBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gZWxlbWVudC5maW5kKFNDUk9MTEFCTEVfU0VMKTtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaVNjcm9sbEluc3RhbmNlID0gc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgICAgIGlTY3JvbGxJbnN0YW5jZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpLmZpcnN0KCkudW53cmFwKCkudW53cmFwKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gb3ZlcmZsb3cgc2Nyb2xsaW5nIGhhcyBhbHJlYWR5IGJlZW4gc2V0dXAgYnV0IHRoZVxyXG4gICAgICAgICAqIHdpbmRvdyBoZWlnaHQgaGFzIHBvdGVudGlhbGx5IGNoYW5nZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgICAgICBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICogQHBhcmFtICB7TnVtYmVyfSBzY3JvbGxIZWlnaHQgQ3VycmVudCB3aW5kb3cgaGVpZ2h0IGluIHBpeGVsc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8vdXNpbmcgYSB0aW1lb3V0IGluIG9yZGVyIHRvIGV4ZWN1dGUgdGhlIHJlZnJlc2ggZnVuY3Rpb24gb25seSBvbmNlIHdoZW4gYHVwZGF0ZWAgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIGFcclxuICAgICAgICAgICAgLy9zaG9ydCBwZXJpb2Qgb2YgdGltZS5cclxuICAgICAgICAgICAgLy9pdCBhbHNvIGNvbWVzIG9uIGhhbmR5IGJlY2F1c2UgaVNjcm9sbCByZXF1aXJlcyB0aGUgdXNlIG9mIHRpbWVvdXQgd2hlbiB1c2luZyBgcmVmcmVzaGAuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpc2Nyb2xsSGFuZGxlci5yZWZyZXNoSWQpO1xyXG4gICAgICAgICAgICBpc2Nyb2xsSGFuZGxlci5yZWZyZXNoSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goaXNjcm9sbEhhbmRsZXIuaVNjcm9sbEluc3RhbmNlcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmdldCgwKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRpbmcgdGhlIHdyYXBwZXJzIGhlaWdodFxyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNzcygnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0ICsgJ3B4JykucGFyZW50KCkuY3NzKCdoZWlnaHQnLCBzY3JvbGxIZWlnaHQgKyAncHgnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsZWQgdG8gZ2V0IGFueSBhZGRpdGlvbmFsIGVsZW1lbnRzIG5lZWRlZCB0byB3cmFwIHRoZSBzZWN0aW9uXHJcbiAgICAgICAgICogY29udGVudCBpbiBvcmRlciB0byBmYWNpbGl0YXRlIG92ZXJmbG93IHNjcm9sbGluZy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ3xPYmplY3R9IENhbiBiZSBhIHN0cmluZyBjb250YWluaW5nIEhUTUwsXHJcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgYSBET00gZWxlbWVudCwgb3IgalF1ZXJ5IG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB3cmFwQ29udGVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyBTQ1JPTExBQkxFICsgJ1wiPjxkaXYgY2xhc3M9XCJmcC1zY3JvbGxlclwiPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7IiwiICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LXQvSDQvNC10L3RjiDQv9C10YDQtdC70LjRgdGC0YvQstCw0LXRgiAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRlc2N0b3AgNCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQvNC10L3RjiDQv9C+0Y/QstC70Y/QtdGC0YHRjyDRgtC10LrRgdGCXHJcbiAgICB2YXIgaXRlbU1lbnU9JCgnLnBhZ2U0X21lbnUtaXRlbScpLC8v0L/Rg9C90LrRgiDQvNC10L3RjlxyXG4gICAgICAgIHRleHRNZW51PWl0ZW1NZW51LmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKTsvL9GC0LXQutGB0YIg0LrQvtGC0L7RgNGL0LnQtNC+0LvQttC10L0g0L/QvtGP0LLQuNGC0YzRgdGPXHJcblxyXG4gICAgaXRlbU1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHBhZ2U0PSR0aGlzLnBhcmVudCgnLmNvbnRlbnQtZGVza3RvcF9wYWdlNCcpLC8v0L3QsNGF0L7QtNC40Lwg0LHQu9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgICAgICBhY3RpdkJsb2NrVGV4dD1wYWdlNC5maW5kKCcucGFnZTRfbWVudS10ZXh0X2FjdGl2JyksLy/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC10LrRgdGC0LBcclxuICAgICAgICAgICAgYWN0aXZCbG9ja1RpdGxlPXBhZ2U0LmZpbmQoJy5wYWdlNF9tZW51LXRpdGxlX2FjdGl2Jyk7Ly/QvdCw0YXQvtC00LjQvCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgSDRgyDRgtC40YLRg9C70LBcclxuXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUaXRsZS5yZW1vdmVDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINGD0LTQsNC70Y/QtdC8INGDINGC0LjRgtGD0LvQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40Lkg0LDQutGC0LjQstC90YvQuSDQutC70LDRgdGBXHJcbiAgICAgICAgICAgIGFjdGl2QmxvY2tUZXh0LnJlbW92ZUNsYXNzKCdwYWdlNF9tZW51LXRleHRfYWN0aXYnKTsvLyDRg9C00LDQu9GP0LXQvCDRgyDRgtC10LrRgdGC0LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC5INCw0LrRgtC40LLQvdGL0Lkg0LrQu9Cw0YHRgVxyXG4gICAgICAgICR0aGlzLmZpbmQoJy5wYWdlNF9tZW51LXRleHQnKS5hZGRDbGFzcygncGFnZTRfbWVudS10ZXh0X2FjdGl2Jyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INGC0LXQutGB0YLRgyDQsNCy0YLQuNC60LLQvdGL0Lkg0LrQu9Cw0YHRgSDRjdC70LXQvNC10L3RgtGDINC90LAg0LrQvtGC0L7RgNGL0Lkg0L3QsNC20LDQu9C4XHJcbiAgICAgICAgJHRoaXMuZmluZCgnLnBhZ2U0X21lbnUtdGl0bGUnKS5hZGRDbGFzcygncGFnZTRfbWVudS10aXRsZV9hY3RpdicpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDRgtC40YLRg9C70YMg0LDQstGC0LjQutCy0L3Ri9C5INC60LvQsNGB0YEg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC90LDQttCw0LvQuFxyXG5cclxuICAgIH0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdCBtb3ZlIGFycm93Jyk7XHJcbiAgICB2YXIgYXJyb3dCbG9jaz0gJCgnLmRlc2t0b3AxX2xlYXJuLW1vcmVfX2Fycm93Jyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGJpZ0Fycm93ICgpe1xyXG5cclxuICAgICAgICBhcnJvd0Jsb2NrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjIycHhcIixcclxuICAgICAgICAgICAgb3BhY2l0eToxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICczNHB4J1xyXG4gICAgICAgIH0sODAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNtYWxsQXJyb3coKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzbWFsbEFycm93KCl7XHJcblxyXG4gICAgICAgIGFycm93QmxvY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OjAuNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjhweCdcclxuICAgICAgICB9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoYmlnQXJyb3csMjIwMCk7XHJcblxyXG59KTsiLCIvKiEgaVNjcm9sbCB2NS4yLjAgfiAoYykgMjAwOC0yMDE2IE1hdHRlbyBTcGluZWxsaSB+IGh0dHA6Ly9jdWJpcS5vcmcvbGljZW5zZSAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBNYXRoKSB7XG52YXIgckFGID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgIGZ1bmN0aW9uIChjYWxsYmFjaykgeyB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTsgfTtcblxudmFyIHV0aWxzID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB7fTtcblxuICAgIHZhciBfZWxlbWVudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gICAgdmFyIF92ZW5kb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmVuZG9ycyA9IFsndCcsICd3ZWJraXRUJywgJ01velQnLCAnbXNUJywgJ09UJ10sXG4gICAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGwgPSB2ZW5kb3JzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSB2ZW5kb3JzW2ldICsgJ3JhbnNmb3JtJztcbiAgICAgICAgICAgIGlmICggdHJhbnNmb3JtIGluIF9lbGVtZW50U3R5bGUgKSByZXR1cm4gdmVuZG9yc1tpXS5zdWJzdHIoMCwgdmVuZG9yc1tpXS5sZW5ndGgtMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIF9wcmVmaXhTdHlsZSAoc3R5bGUpIHtcbiAgICAgICAgaWYgKCBfdmVuZG9yID09PSBmYWxzZSApIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCBfdmVuZG9yID09PSAnJyApIHJldHVybiBzdHlsZTtcbiAgICAgICAgcmV0dXJuIF92ZW5kb3IgKyBzdHlsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICBtZS5nZXRUaW1lID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24gZ2V0VGltZSAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcblxuICAgIG1lLmV4dGVuZCA9IGZ1bmN0aW9uICh0YXJnZXQsIG9iaikge1xuICAgICAgICBmb3IgKCB2YXIgaSBpbiBvYmogKSB7XG4gICAgICAgICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbWUuYWRkRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGZuLCBjYXB0dXJlKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sICEhY2FwdHVyZSk7XG4gICAgfTtcblxuICAgIG1lLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuICAgIH07XG5cbiAgICBtZS5wcmVmaXhQb2ludGVyRXZlbnQgPSBmdW5jdGlvbiAocG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuTVNQb2ludGVyRXZlbnQgP1xuICAgICAgICAgICAgJ01TUG9pbnRlcicgKyBwb2ludGVyRXZlbnQuY2hhckF0KDcpLnRvVXBwZXJDYXNlKCkgKyBwb2ludGVyRXZlbnQuc3Vic3RyKDgpOlxuICAgICAgICAgICAgcG9pbnRlckV2ZW50O1xuICAgIH07XG5cbiAgICBtZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChjdXJyZW50LCBzdGFydCwgdGltZSwgbG93ZXJNYXJnaW4sIHdyYXBwZXJTaXplLCBkZWNlbGVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxuICAgICAgICAgICAgc3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lLFxuICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICBkdXJhdGlvbjtcblxuICAgICAgICBkZWNlbGVyYXRpb24gPSBkZWNlbGVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDAuMDAwNiA6IGRlY2VsZXJhdGlvbjtcblxuICAgICAgICBkZXN0aW5hdGlvbiA9IGN1cnJlbnQgKyAoIHNwZWVkICogc3BlZWQgKSAvICggMiAqIGRlY2VsZXJhdGlvbiApICogKCBkaXN0YW5jZSA8IDAgPyAtMSA6IDEgKTtcbiAgICAgICAgZHVyYXRpb24gPSBzcGVlZCAvIGRlY2VsZXJhdGlvbjtcblxuICAgICAgICBpZiAoIGRlc3RpbmF0aW9uIDwgbG93ZXJNYXJnaW4gKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplID8gbG93ZXJNYXJnaW4gLSAoIHdyYXBwZXJTaXplIC8gMi41ICogKCBzcGVlZCAvIDggKSApIDogbG93ZXJNYXJnaW47XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIGRlc3RpbmF0aW9uID4gMCApIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uID0gd3JhcHBlclNpemUgPyB3cmFwcGVyU2l6ZSAvIDIuNSAqICggc3BlZWQgLyA4ICkgOiAwO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50KSArIGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgX3RyYW5zZm9ybSA9IF9wcmVmaXhTdHlsZSgndHJhbnNmb3JtJyk7XG5cbiAgICBtZS5leHRlbmQobWUsIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtOiBfdHJhbnNmb3JtICE9PSBmYWxzZSxcbiAgICAgICAgaGFzUGVyc3BlY3RpdmU6IF9wcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBfZWxlbWVudFN0eWxlLFxuICAgICAgICBoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gd2luZG93LFxuICAgICAgICBoYXNQb2ludGVyOiAhISh3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudCksIC8vIElFMTAgaXMgcHJlZml4ZWRcbiAgICAgICAgaGFzVHJhbnNpdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJykgaW4gX2VsZW1lbnRTdHlsZVxuICAgIH0pO1xuXG4gICAgLypcbiAgICBUaGlzIHNob3VsZCBmaW5kIGFsbCBBbmRyb2lkIGJyb3dzZXJzIGxvd2VyIHRoYW4gYnVpbGQgNTM1LjE5IChib3RoIHN0b2NrIGJyb3dzZXIgYW5kIHdlYnZpZXcpXG4gICAgLSBnYWxheHkgUzIgaXMgb2tcbiAgICAtIDIuMy42IDogYEFwcGxlV2ViS2l0LzUzMy4xIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzMuMWBcbiAgICAtIDQuMC40IDogYEFwcGxlV2ViS2l0LzUzNC4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM0LjMwYFxuICAgLSBnYWxheHkgUzMgaXMgYmFkQW5kcm9pZCAoc3RvY2sgYnJvd2VyLCB3ZWJ2aWV3KVxuICAgICBgQXBwbGVXZWJLaXQvNTM0LjMwIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzQuMzBgXG4gICAtIGdhbGF4eSBTNCBpcyBiYWRBbmRyb2lkIChzdG9jayBicm93ZXIsIHdlYnZpZXcpXG4gICAgIGBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMGBcbiAgIC0gZ2FsYXh5IFM1IGlzIE9LXG4gICAgIGBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNy4zNiAoQ2hyb21lLylgXG4gICAtIGdhbGF4eSBTNiBpcyBPS1xuICAgICBgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzcuMzYgKENocm9tZS8pYFxuICAqL1xuICAgIG1lLmlzQmFkQW5kcm9pZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFwcFZlcnNpb24gPSB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb247XG4gICAgICAgIC8vIEFuZHJvaWQgYnJvd3NlciBpcyBub3QgYSBjaHJvbWUgYnJvd3Nlci5cbiAgICAgICAgaWYgKC9BbmRyb2lkLy50ZXN0KGFwcFZlcnNpb24pICYmICEoL0Nocm9tZVxcL1xcZC8udGVzdChhcHBWZXJzaW9uKSkpIHtcbiAgICAgICAgICAgIHZhciBzYWZhcmlWZXJzaW9uID0gYXBwVmVyc2lvbi5tYXRjaCgvU2FmYXJpXFwvKFxcZCsuXFxkKS8pO1xuICAgICAgICAgICAgaWYoc2FmYXJpVmVyc2lvbiAmJiB0eXBlb2Ygc2FmYXJpVmVyc2lvbiA9PT0gXCJvYmplY3RcIiAmJiBzYWZhcmlWZXJzaW9uLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc2FmYXJpVmVyc2lvblsxXSkgPCA1MzUuMTk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIG1lLmV4dGVuZChtZS5zdHlsZSA9IHt9LCB7XG4gICAgICAgIHRyYW5zZm9ybTogX3RyYW5zZm9ybSxcbiAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicpLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbkR1cmF0aW9uJyksXG4gICAgICAgIHRyYW5zaXRpb25EZWxheTogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRGVsYXknKSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybU9yaWdpbicpXG4gICAgfSk7XG5cbiAgICBtZS5oYXNDbGFzcyA9IGZ1bmN0aW9uIChlLCBjKSB7XG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGMgKyBcIihcXFxcc3wkKVwiKTtcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZS5jbGFzc05hbWUpO1xuICAgIH07XG5cbiAgICBtZS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlLCBjKSB7XG4gICAgICAgIGlmICggbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3Y2xhc3MgPSBlLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBuZXdjbGFzcy5wdXNoKGMpO1xuICAgICAgICBlLmNsYXNzTmFtZSA9IG5ld2NsYXNzLmpvaW4oJyAnKTtcbiAgICB9O1xuXG4gICAgbWUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuICAgICAgICBpZiAoICFtZS5oYXNDbGFzcyhlLCBjKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIGMgKyBcIihcXFxcc3wkKVwiLCAnZycpO1xuICAgICAgICBlLmNsYXNzTmFtZSA9IGUuY2xhc3NOYW1lLnJlcGxhY2UocmUsICcgJyk7XG4gICAgfTtcblxuICAgIG1lLm9mZnNldCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbGVmdCA9IC1lbC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgdG9wID0gLWVsLm9mZnNldFRvcDtcblxuICAgICAgICAvLyBqc2hpbnQgLVcwODRcbiAgICAgICAgd2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICBsZWZ0IC09IGVsLm9mZnNldExlZnQ7XG4gICAgICAgICAgICB0b3AgLT0gZWwub2Zmc2V0VG9wO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzaGludCArVzA4NFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgdG9wOiB0b3BcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbWUucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZWwsIGV4Y2VwdGlvbnMpIHtcbiAgICAgICAgZm9yICggdmFyIGkgaW4gZXhjZXB0aW9ucyApIHtcbiAgICAgICAgICAgIGlmICggZXhjZXB0aW9uc1tpXS50ZXN0KGVsW2ldKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgbWUuZXh0ZW5kKG1lLmV2ZW50VHlwZSA9IHt9LCB7XG4gICAgICAgIHRvdWNoc3RhcnQ6IDEsXG4gICAgICAgIHRvdWNobW92ZTogMSxcbiAgICAgICAgdG91Y2hlbmQ6IDEsXG5cbiAgICAgICAgbW91c2Vkb3duOiAyLFxuICAgICAgICBtb3VzZW1vdmU6IDIsXG4gICAgICAgIG1vdXNldXA6IDIsXG5cbiAgICAgICAgcG9pbnRlcmRvd246IDMsXG4gICAgICAgIHBvaW50ZXJtb3ZlOiAzLFxuICAgICAgICBwb2ludGVydXA6IDMsXG5cbiAgICAgICAgTVNQb2ludGVyRG93bjogMyxcbiAgICAgICAgTVNQb2ludGVyTW92ZTogMyxcbiAgICAgICAgTVNQb2ludGVyVXA6IDNcbiAgICB9KTtcblxuICAgIG1lLmV4dGVuZChtZS5lYXNlID0ge30sIHtcbiAgICAgICAgcXVhZHJhdGljOiB7XG4gICAgICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gayAqICggMiAtIGsgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2lyY3VsYXI6IHtcbiAgICAgICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKScsICAgLy8gTm90IHByb3Blcmx5IFwiY2lyY3VsYXJcIiBidXQgdGhpcyBsb29rcyBiZXR0ZXIsIGl0IHNob3VsZCBiZSAoMC4wNzUsIDAuODIsIDAuMTY1LCAxKVxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCggMSAtICggLS1rICogayApICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IHtcbiAgICAgICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpJyxcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIHZhciBiID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBrID0gayAtIDEgKSAqIGsgKiAoICggYiArIDEgKSAqIGsgKyBiICkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBib3VuY2U6IHtcbiAgICAgICAgICAgIHN0eWxlOiAnJyxcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIGlmICggKCBrIC89IDEgKSA8ICggMSAvIDIuNzUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGsgPCAoIDIgLyAyLjc1ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAxLjUgLyAyLjc1ICkgKSAqIGsgKyAwLjc1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGsgPCAoIDIuNSAvIDIuNzUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDIuMjUgLyAyLjc1ICkgKSAqIGsgKyAwLjkzNzU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDIuNjI1IC8gMi43NSApICkgKiBrICsgMC45ODQzNzU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbGFzdGljOiB7XG4gICAgICAgICAgICBzdHlsZTogJycsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IDAuMjIsXG4gICAgICAgICAgICAgICAgICAgIGUgPSAwLjQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGsgPT09IDAgKSB7IHJldHVybiAwOyB9XG4gICAgICAgICAgICAgICAgaWYgKCBrID09IDEgKSB7IHJldHVybiAxOyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKCBlICogTWF0aC5wb3coIDIsIC0gMTAgKiBrICkgKiBNYXRoLnNpbiggKCBrIC0gZiAvIDQgKSAqICggMiAqIE1hdGguUEkgKSAvIGYgKSArIDEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWUudGFwID0gZnVuY3Rpb24gKGUsIGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXYuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGV2LnBhZ2VYID0gZS5wYWdlWDtcbiAgICAgICAgZXYucGFnZVkgPSBlLnBhZ2VZO1xuICAgICAgICBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICB9O1xuXG4gICAgbWUuY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgICBldjtcblxuICAgICAgICBpZiAoICEoLyhTRUxFQ1R8SU5QVVR8VEVYVEFSRUEpL2kpLnRlc3QodGFyZ2V0LnRhZ05hbWUpICkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01vdXNlRXZlbnQvaW5pdE1vdXNlRXZlbnRcbiAgICAgICAgICAgIC8vIGluaXRNb3VzZUV2ZW50IGlzIGRlcHJlY2F0ZWQuXG4gICAgICAgICAgICBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KHdpbmRvdy5Nb3VzZUV2ZW50ID8gJ01vdXNlRXZlbnRzJyA6ICdFdmVudCcpO1xuICAgICAgICAgICAgZXYuaW5pdEV2ZW50KCdjbGljaycsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZXYudmlldyA9IGUudmlldyB8fCB3aW5kb3c7XG4gICAgICAgICAgICBldi5kZXRhaWwgPSAxO1xuICAgICAgICAgICAgZXYuc2NyZWVuWCA9IHRhcmdldC5zY3JlZW5YIHx8IDA7XG4gICAgICAgICAgICBldi5zY3JlZW5ZID0gdGFyZ2V0LnNjcmVlblkgfHwgMDtcbiAgICAgICAgICAgIGV2LmNsaWVudFggPSB0YXJnZXQuY2xpZW50WCB8fCAwO1xuICAgICAgICAgICAgZXYuY2xpZW50WSA9IHRhcmdldC5jbGllbnRZIHx8IDA7XG4gICAgICAgICAgICBldi5jdHJsS2V5ID0gISFlLmN0cmxLZXk7XG4gICAgICAgICAgICBldi5hbHRLZXkgPSAhIWUuYWx0S2V5O1xuICAgICAgICAgICAgZXYuc2hpZnRLZXkgPSAhIWUuc2hpZnRLZXk7XG4gICAgICAgICAgICBldi5tZXRhS2V5ID0gISFlLm1ldGFLZXk7XG4gICAgICAgICAgICBldi5idXR0b24gPSAwO1xuICAgICAgICAgICAgZXYucmVsYXRlZFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICBldi5fY29uc3RydWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtZTtcbn0pKCk7XG5mdW5jdGlvbiBJU2Nyb2xsIChlbCwgb3B0aW9ucykge1xuICAgIHRoaXMud3JhcHBlciA9IHR5cGVvZiBlbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG4gICAgdGhpcy5zY3JvbGxlciA9IHRoaXMud3JhcHBlci5jaGlsZHJlblswXTtcbiAgICB0aGlzLnNjcm9sbGVyU3R5bGUgPSB0aGlzLnNjcm9sbGVyLnN0eWxlOyAgICAgICAvLyBjYWNoZSBzdHlsZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG5cbiAgICAgICAgcmVzaXplU2Nyb2xsYmFyczogdHJ1ZSxcblxuICAgICAgICBtb3VzZVdoZWVsU3BlZWQ6IDIwLFxuXG4gICAgICAgIHNuYXBUaHJlc2hvbGQ6IDAuMzM0LFxuXG4vLyBJTlNFUlQgUE9JTlQ6IE9QVElPTlNcbiAgICAgICAgZGlzYWJsZVBvaW50ZXIgOiAhdXRpbHMuaGFzUG9pbnRlcixcbiAgICAgICAgZGlzYWJsZVRvdWNoIDogdXRpbHMuaGFzUG9pbnRlciB8fCAhdXRpbHMuaGFzVG91Y2gsXG4gICAgICAgIGRpc2FibGVNb3VzZSA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgdXRpbHMuaGFzVG91Y2gsXG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBzY3JvbGxZOiB0cnVlLFxuICAgICAgICBkaXJlY3Rpb25Mb2NrVGhyZXNob2xkOiA1LFxuICAgICAgICBtb21lbnR1bTogdHJ1ZSxcblxuICAgICAgICBib3VuY2U6IHRydWUsXG4gICAgICAgIGJvdW5jZVRpbWU6IDYwMCxcbiAgICAgICAgYm91bmNlRWFzaW5nOiAnJyxcblxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgcHJldmVudERlZmF1bHRFeGNlcHRpb246IHsgdGFnTmFtZTogL14oSU5QVVR8VEVYVEFSRUF8QlVUVE9OfFNFTEVDVCkkLyB9LFxuXG4gICAgICAgIEhXQ29tcG9zaXRpbmc6IHRydWUsXG4gICAgICAgIHVzZVRyYW5zaXRpb246IHRydWUsXG4gICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgYmluZFRvV3JhcHBlcjogdHlwZW9mIHdpbmRvdy5vbm1vdXNlZG93biA9PT0gXCJ1bmRlZmluZWRcIlxuICAgIH07XG5cbiAgICBmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuICAgICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBvcHRpb25zXG4gICAgdGhpcy50cmFuc2xhdGVaID0gdGhpcy5vcHRpb25zLkhXQ29tcG9zaXRpbmcgJiYgdXRpbHMuaGFzUGVyc3BlY3RpdmUgPyAnIHRyYW5zbGF0ZVooMCknIDogJyc7XG5cbiAgICB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA9IHV0aWxzLmhhc1RyYW5zaXRpb24gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb247XG4gICAgdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSA9IHV0aWxzLmhhc1RyYW5zZm9ybSAmJiB0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtO1xuXG4gICAgdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaDtcbiAgICB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgPSAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0O1xuXG4gICAgLy8gSWYgeW91IHdhbnQgZXZlbnRQYXNzdGhyb3VnaCBJIGhhdmUgdG8gbG9jayBvbmUgb2YgdGhlIGF4ZXNcbiAgICB0aGlzLm9wdGlvbnMuc2Nyb2xsWSA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICd2ZXJ0aWNhbCcgPyBmYWxzZSA6IHRoaXMub3B0aW9ucy5zY3JvbGxZO1xuICAgIHRoaXMub3B0aW9ucy5zY3JvbGxYID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWDtcblxuICAgIC8vIFdpdGggZXZlbnRQYXNzdGhyb3VnaCB3ZSBhbHNvIG5lZWQgbG9ja0RpcmVjdGlvbiBtZWNoYW5pc21cbiAgICB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCA9IHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICYmICF0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaDtcbiAgICB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID8gMCA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xuXG4gICAgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nID09ICdzdHJpbmcnID8gdXRpbHMuZWFzZVt0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nXSB8fCB1dGlscy5lYXNlLmNpcmN1bGFyIDogdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcblxuICAgIHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nID0gdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcgPT09IHVuZGVmaW5lZCA/IDYwIDogdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmc7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy50YXAgPT09IHRydWUgKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50YXAgPSAndGFwJztcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY3ViaXEvaXNjcm9sbC9pc3N1ZXMvMTAyOVxuICAgIGlmICghdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgIXRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0pIHtcbiAgICAgICAgaWYoISgvcmVsYXRpdmV8YWJzb2x1dGUvaSkudGVzdCh0aGlzLnNjcm9sbGVyU3R5bGUucG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyU3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzID09ICdzY2FsZScgKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uID0gdGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uID8gLTEgOiAxO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IE5PUk1BTElaQVRJT05cblxuICAgIC8vIFNvbWUgZGVmYXVsdHNcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5kaXJlY3Rpb25YID0gMDtcbiAgICB0aGlzLmRpcmVjdGlvblkgPSAwO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4vLyBJTlNFUlQgUE9JTlQ6IERFRkFVTFRTXG5cbiAgICB0aGlzLl9pbml0KCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHRoaXMub3B0aW9ucy5zdGFydFgsIHRoaXMub3B0aW9ucy5zdGFydFkpO1xuICAgIHRoaXMuZW5hYmxlKCk7XG59XG5cbklTY3JvbGwucHJvdG90eXBlID0ge1xuICAgIHZlcnNpb246ICc1LjIuMCcsXG5cbiAgICBfaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyB8fCB0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyApIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRJbmRpY2F0b3JzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsICkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFdoZWVsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zbmFwICkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNuYXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzICkge1xuICAgICAgICAgICAgdGhpcy5faW5pdEtleXMoKTtcbiAgICAgICAgfVxuXG4vLyBJTlNFUlQgUE9JTlQ6IF9pbml0XG5cbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9pbml0RXZlbnRzKHRydWUpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdkZXN0cm95Jyk7XG4gICAgfSxcblxuICAgIF90cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIGUudGFyZ2V0ICE9IHRoaXMuc2Nyb2xsZXIgfHwgIXRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuICAgICAgICBpZiAoICF0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuICAgICAgICAgICAgdGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIFJlYWN0IHRvIGxlZnQgbW91c2UgYnV0dG9uIG9ubHlcbiAgICAgICAgaWYgKCB1dGlscy5ldmVudFR5cGVbZS50eXBlXSAhPSAxICkge1xuICAgICAgICAgIC8vIGZvciBidXR0b24gcHJvcGVydHlcbiAgICAgICAgICAvLyBodHRwOi8vdW5peHBhcGEuY29tL2pzL21vdXNlLmh0bWxcbiAgICAgICAgICB2YXIgYnV0dG9uO1xuICAgICAgICBpZiAoIWUud2hpY2gpIHtcbiAgICAgICAgICAvKiBJRSBjYXNlICovXG4gICAgICAgICAgYnV0dG9uID0gKGUuYnV0dG9uIDwgMikgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAoKGUuYnV0dG9uID09IDQpID8gMSA6IDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qIEFsbCBvdGhlcnMgKi9cbiAgICAgICAgICBidXR0b24gPSBlLmJ1dHRvbjtcbiAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBidXR0b24gIT09IDAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhdGhpcy5lbmFibGVkIHx8ICh0aGlzLmluaXRpYXRlZCAmJiB1dGlscy5ldmVudFR5cGVbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgJiYgIXV0aWxzLmlzQmFkQW5kcm9pZCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuICAgICAgICAgICAgcG9zO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhdGVkICA9IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdO1xuICAgICAgICB0aGlzLm1vdmVkICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXN0WCAgICAgID0gMDtcbiAgICAgICAgdGhpcy5kaXN0WSAgICAgID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLmdldENvbXB1dGVkUG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xuICAgICAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcbiAgICAgICAgfSBlbHNlIGlmICggIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNBbmltYXRpbmcgKSB7XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFydFggICAgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuc3RhcnRZICAgID0gdGhpcy55O1xuICAgICAgICB0aGlzLmFic1N0YXJ0WCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5hYnNTdGFydFkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMucG9pbnRYICAgID0gcG9pbnQucGFnZVg7XG4gICAgICAgIHRoaXMucG9pbnRZICAgID0gcG9pbnQucGFnZVk7XG5cbiAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdiZWZvcmVTY3JvbGxTdGFydCcpO1xuICAgIH0sXG5cbiAgICBfbW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICkgeyAgICAvLyBpbmNyZWFzZXMgcGVyZm9ybWFuY2Ugb24gQW5kcm9pZD8gVE9ETzogY2hlY2shXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9pbnQgICAgICAgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuICAgICAgICAgICAgZGVsdGFYICAgICAgPSBwb2ludC5wYWdlWCAtIHRoaXMucG9pbnRYLFxuICAgICAgICAgICAgZGVsdGFZICAgICAgPSBwb2ludC5wYWdlWSAtIHRoaXMucG9pbnRZLFxuICAgICAgICAgICAgdGltZXN0YW1wICAgPSB1dGlscy5nZXRUaW1lKCksXG4gICAgICAgICAgICBuZXdYLCBuZXdZLFxuICAgICAgICAgICAgYWJzRGlzdFgsIGFic0Rpc3RZO1xuXG4gICAgICAgIHRoaXMucG9pbnRYICAgICA9IHBvaW50LnBhZ2VYO1xuICAgICAgICB0aGlzLnBvaW50WSAgICAgPSBwb2ludC5wYWdlWTtcblxuICAgICAgICB0aGlzLmRpc3RYICAgICAgKz0gZGVsdGFYO1xuICAgICAgICB0aGlzLmRpc3RZICAgICAgKz0gZGVsdGFZO1xuICAgICAgICBhYnNEaXN0WCAgICAgICAgPSBNYXRoLmFicyh0aGlzLmRpc3RYKTtcbiAgICAgICAgYWJzRGlzdFkgICAgICAgID0gTWF0aC5hYnModGhpcy5kaXN0WSk7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBtb3ZlIGF0IGxlYXN0IDEwIHBpeGVscyBmb3IgdGhlIHNjcm9sbGluZyB0byBpbml0aWF0ZVxuICAgICAgICBpZiAoIHRpbWVzdGFtcCAtIHRoaXMuZW5kVGltZSA+IDMwMCAmJiAoYWJzRGlzdFggPCAxMCAmJiBhYnNEaXN0WSA8IDEwKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHlvdSBhcmUgc2Nyb2xsaW5nIGluIG9uZSBkaXJlY3Rpb24gbG9jayB0aGUgb3RoZXJcbiAgICAgICAgaWYgKCAhdGhpcy5kaXJlY3Rpb25Mb2NrZWQgJiYgIXRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICkge1xuICAgICAgICAgICAgaWYgKCBhYnNEaXN0WCA+IGFic0Rpc3RZICsgdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnaCc7ICAgICAvLyBsb2NrIGhvcml6b250YWxseVxuICAgICAgICAgICAgfSBlbHNlIGlmICggYWJzRGlzdFkgPj0gYWJzRGlzdFggKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICd2JzsgICAgIC8vIGxvY2sgdmVydGljYWxseVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9ICduJzsgICAgIC8vIG5vIGxvY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ2gnICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnICkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ3YnICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbHRhWCA9IHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IGRlbHRhWCA6IDA7XG4gICAgICAgIGRlbHRhWSA9IHRoaXMuaGFzVmVydGljYWxTY3JvbGwgPyBkZWx0YVkgOiAwO1xuXG4gICAgICAgIG5ld1ggPSB0aGlzLnggKyBkZWx0YVg7XG4gICAgICAgIG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cbiAgICAgICAgLy8gU2xvdyBkb3duIGlmIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKCBuZXdYID4gMCB8fCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuICAgICAgICAgICAgbmV3WCA9IHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLnggKyBkZWx0YVggLyAzIDogbmV3WCA+IDAgPyAwIDogdGhpcy5tYXhTY3JvbGxYO1xuICAgICAgICB9XG4gICAgICAgIGlmICggbmV3WSA+IDAgfHwgbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy55ICsgZGVsdGFZIC8gMyA6IG5ld1kgPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IGRlbHRhWCA+IDAgPyAtMSA6IGRlbHRhWCA8IDAgPyAxIDogMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gZGVsdGFZID4gMCA/IC0xIDogZGVsdGFZIDwgMCA/IDEgOiAwO1xuXG4gICAgICAgIGlmICggIXRoaXMubW92ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbFN0YXJ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2xhdGUobmV3WCwgbmV3WSk7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IF9tb3ZlICovXG5cbiAgICAgICAgaWYgKCB0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IDMwMCApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgdGhpcy5zdGFydFggPSB0aGlzLng7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSA9IHRoaXMueTtcbiAgICAgICAgfVxuXG4vKiBSRVBMQUNFIEVORDogX21vdmUgKi9cblxuICAgIH0sXG5cbiAgICBfZW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoICF0aGlzLmVuYWJsZWQgfHwgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgJiYgIXV0aWxzLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pICkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50ID0gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlLFxuICAgICAgICAgICAgbW9tZW50dW1YLFxuICAgICAgICAgICAgbW9tZW50dW1ZLFxuICAgICAgICAgICAgZHVyYXRpb24gPSB1dGlscy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSxcbiAgICAgICAgICAgIG5ld1ggPSBNYXRoLnJvdW5kKHRoaXMueCksXG4gICAgICAgICAgICBuZXdZID0gTWF0aC5yb3VuZCh0aGlzLnkpLFxuICAgICAgICAgICAgZGlzdGFuY2VYID0gTWF0aC5hYnMobmV3WCAtIHRoaXMuc3RhcnRYKSxcbiAgICAgICAgICAgIGRpc3RhbmNlWSA9IE1hdGguYWJzKG5ld1kgLSB0aGlzLnN0YXJ0WSksXG4gICAgICAgICAgICB0aW1lID0gMCxcbiAgICAgICAgICAgIGVhc2luZyA9ICcnO1xuXG4gICAgICAgIHRoaXMuaXNJblRyYW5zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmluaXRpYXRlZCA9IDA7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHV0aWxzLmdldFRpbWUoKTtcblxuICAgICAgICAvLyByZXNldCBpZiB3ZSBhcmUgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xuICAgICAgICBpZiAoIHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvKG5ld1gsIG5ld1kpOyAgLy8gZW5zdXJlcyB0aGF0IHRoZSBsYXN0IHBvc2l0aW9uIGlzIHJvdW5kZWRcblxuICAgICAgICAvLyB3ZSBzY3JvbGxlZCBsZXNzIHRoYW4gMTAgcGl4ZWxzXG4gICAgICAgIGlmICggIXRoaXMubW92ZWQgKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy50YXAgKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMudGFwKGUsIHRoaXMub3B0aW9ucy50YXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5jbGljayApIHtcbiAgICAgICAgICAgICAgICB1dGlscy5jbGljayhlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxDYW5jZWwnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5fZXZlbnRzLmZsaWNrICYmIGR1cmF0aW9uIDwgMjAwICYmIGRpc3RhbmNlWCA8IDEwMCAmJiBkaXN0YW5jZVkgPCAxMDAgKSB7XG4gICAgICAgICAgICB0aGlzLl9leGVjRXZlbnQoJ2ZsaWNrJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLm1vbWVudHVtICYmIGR1cmF0aW9uIDwgMzAwICkge1xuICAgICAgICAgICAgbW9tZW50dW1YID0gdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy54LCB0aGlzLnN0YXJ0WCwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWCwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlcldpZHRoIDogMCwgdGhpcy5vcHRpb25zLmRlY2VsZXJhdGlvbikgOiB7IGRlc3RpbmF0aW9uOiBuZXdYLCBkdXJhdGlvbjogMCB9O1xuICAgICAgICAgICAgbW9tZW50dW1ZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IHV0aWxzLm1vbWVudHVtKHRoaXMueSwgdGhpcy5zdGFydFksIGR1cmF0aW9uLCB0aGlzLm1heFNjcm9sbFksIHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLndyYXBwZXJIZWlnaHQgOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1ksIGR1cmF0aW9uOiAwIH07XG4gICAgICAgICAgICBuZXdYID0gbW9tZW50dW1YLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgbmV3WSA9IG1vbWVudHVtWS5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIHRpbWUgPSBNYXRoLm1heChtb21lbnR1bVguZHVyYXRpb24sIG1vbWVudHVtWS5kdXJhdGlvbik7XG4gICAgICAgICAgICB0aGlzLmlzSW5UcmFuc2l0aW9uID0gMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcbiAgICAgICAgICAgIHZhciBzbmFwID0gdGhpcy5fbmVhcmVzdFNuYXAobmV3WCwgbmV3WSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gc25hcDtcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKG5ld1ggLSBzbmFwLngpLCAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKG5ld1kgLSBzbmFwLnkpLCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICApLCAzMDApO1xuICAgICAgICAgICAgbmV3WCA9IHNuYXAueDtcbiAgICAgICAgICAgIG5ld1kgPSBzbmFwLnk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSAwO1xuICAgICAgICAgICAgZWFzaW5nID0gdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcbiAgICAgICAgfVxuXG4vLyBJTlNFUlQgUE9JTlQ6IF9lbmRcblxuICAgICAgICBpZiAoIG5ld1ggIT0gdGhpcy54IHx8IG5ld1kgIT0gdGhpcy55ICkge1xuICAgICAgICAgICAgLy8gY2hhbmdlIGVhc2luZyBmdW5jdGlvbiB3aGVuIHNjcm9sbGVyIGdvZXMgb3V0IG9mIHRoZSBib3VuZGFyaWVzXG4gICAgICAgICAgICBpZiAoIG5ld1ggPiAwIHx8IG5ld1ggPCB0aGlzLm1heFNjcm9sbFggfHwgbmV3WSA+IDAgfHwgbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcbiAgICAgICAgICAgICAgICBlYXNpbmcgPSB1dGlscy5lYXNlLnF1YWRyYXRpYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCB0aW1lLCBlYXNpbmcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcbiAgICB9LFxuXG4gICAgX3Jlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LnJlZnJlc2goKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcpO1xuICAgIH0sXG5cbiAgICByZXNldFBvc2l0aW9uOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueCxcbiAgICAgICAgICAgIHkgPSB0aGlzLnk7XG5cbiAgICAgICAgdGltZSA9IHRpbWUgfHwgMDtcblxuICAgICAgICBpZiAoICF0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgfHwgdGhpcy54ID4gMCApIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnggPCB0aGlzLm1heFNjcm9sbFggKSB7XG4gICAgICAgICAgICB4ID0gdGhpcy5tYXhTY3JvbGxYO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCB8fCB0aGlzLnkgPiAwICkge1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMueSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcbiAgICAgICAgICAgIHkgPSB0aGlzLm1heFNjcm9sbFk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHggPT0gdGhpcy54ICYmIHkgPT0gdGhpcy55ICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyh4LCB5LCB0aW1lLCB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJmID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDsgICAgIC8vIEZvcmNlIHJlZmxvd1xuXG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoICAgPSB0aGlzLndyYXBwZXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMud3JhcHBlckhlaWdodCAgPSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4vKiBSRVBMQUNFIFNUQVJUOiByZWZyZXNoICovXG5cbiAgICAgICAgdGhpcy5zY3JvbGxlcldpZHRoICA9IHRoaXMuc2Nyb2xsZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuc2Nyb2xsZXJIZWlnaHQgPSB0aGlzLnNjcm9sbGVyLm9mZnNldEhlaWdodDtcblxuICAgICAgICB0aGlzLm1heFNjcm9sbFggICAgID0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbGVyV2lkdGg7XG4gICAgICAgIHRoaXMubWF4U2Nyb2xsWSAgICAgPSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGVySGVpZ2h0O1xuXG4vKiBSRVBMQUNFIEVORDogcmVmcmVzaCAqL1xuXG4gICAgICAgIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAgICA9IHRoaXMub3B0aW9ucy5zY3JvbGxYICYmIHRoaXMubWF4U2Nyb2xsWCA8IDA7XG4gICAgICAgIHRoaXMuaGFzVmVydGljYWxTY3JvbGwgICAgICA9IHRoaXMub3B0aW9ucy5zY3JvbGxZICYmIHRoaXMubWF4U2Nyb2xsWSA8IDA7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICkge1xuICAgICAgICAgICAgdGhpcy5tYXhTY3JvbGxYID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXJXaWR0aCA9IHRoaXMud3JhcHBlcldpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2Nyb2xsWSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVySGVpZ2h0ID0gdGhpcy53cmFwcGVySGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gMDtcblxuICAgICAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSB1dGlscy5vZmZzZXQodGhpcy53cmFwcGVyKTtcblxuICAgICAgICB0aGlzLl9leGVjRXZlbnQoJ3JlZnJlc2gnKTtcblxuICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfcmVmcmVzaFxuXG4gICAgfSxcblxuICAgIG9uOiBmdW5jdGlvbiAodHlwZSwgZm4pIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW3R5cGVdICkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChmbik7XG4gICAgfSxcblxuICAgIG9mZjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5pbmRleE9mKGZuKTtcblxuICAgICAgICBpZiAoIGluZGV4ID4gLTEgKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfZXhlY0V2ZW50OiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsID0gdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcblxuICAgICAgICBpZiAoICFsICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdW2ldLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2Nyb2xsQnk6IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcbiAgICAgICAgeCA9IHRoaXMueCArIHg7XG4gICAgICAgIHkgPSB0aGlzLnkgKyB5O1xuICAgICAgICB0aW1lID0gdGltZSB8fCAwO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oeCwgeSwgdGltZSwgZWFzaW5nKTtcbiAgICB9LFxuXG4gICAgc2Nyb2xsVG86IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcbiAgICAgICAgZWFzaW5nID0gZWFzaW5nIHx8IHV0aWxzLmVhc2UuY2lyY3VsYXI7XG5cbiAgICAgICAgdGhpcy5pc0luVHJhbnNpdGlvbiA9IHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRpbWUgPiAwO1xuICAgICAgICB2YXIgdHJhbnNpdGlvblR5cGUgPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiBlYXNpbmcuc3R5bGU7XG4gICAgICAgIGlmICggIXRpbWUgfHwgdHJhbnNpdGlvblR5cGUgKSB7XG4gICAgICAgICAgICAgICAgaWYodHJhbnNpdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZy5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lKHRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGUoeCwgeSwgdGltZSwgZWFzaW5nLmZuKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzY3JvbGxUb0VsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgdGltZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgZWFzaW5nKSB7XG4gICAgICAgIGVsID0gZWwubm9kZVR5cGUgPyBlbCA6IHRoaXMuc2Nyb2xsZXIucXVlcnlTZWxlY3RvcihlbCk7XG5cbiAgICAgICAgaWYgKCAhZWwgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTtcblxuICAgICAgICBwb3MubGVmdCAtPSB0aGlzLndyYXBwZXJPZmZzZXQubGVmdDtcbiAgICAgICAgcG9zLnRvcCAgLT0gdGhpcy53cmFwcGVyT2Zmc2V0LnRvcDtcblxuICAgICAgICAvLyBpZiBvZmZzZXRYL1kgYXJlIHRydWUgd2UgY2VudGVyIHRoZSBlbGVtZW50IHRvIHRoZSBzY3JlZW5cbiAgICAgICAgaWYgKCBvZmZzZXRYID09PSB0cnVlICkge1xuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQoZWwub2Zmc2V0V2lkdGggLyAyIC0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBvZmZzZXRZID09PSB0cnVlICkge1xuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQoZWwub2Zmc2V0SGVpZ2h0IC8gMiAtIHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcy5sZWZ0IC09IG9mZnNldFggfHwgMDtcbiAgICAgICAgcG9zLnRvcCAgLT0gb2Zmc2V0WSB8fCAwO1xuXG4gICAgICAgIHBvcy5sZWZ0ID0gcG9zLmxlZnQgPiAwID8gMCA6IHBvcy5sZWZ0IDwgdGhpcy5tYXhTY3JvbGxYID8gdGhpcy5tYXhTY3JvbGxYIDogcG9zLmxlZnQ7XG4gICAgICAgIHBvcy50b3AgID0gcG9zLnRvcCAgPiAwID8gMCA6IHBvcy50b3AgIDwgdGhpcy5tYXhTY3JvbGxZID8gdGhpcy5tYXhTY3JvbGxZIDogcG9zLnRvcDtcblxuICAgICAgICB0aW1lID0gdGltZSA9PT0gdW5kZWZpbmVkIHx8IHRpbWUgPT09IG51bGwgfHwgdGltZSA9PT0gJ2F1dG8nID8gTWF0aC5tYXgoTWF0aC5hYnModGhpcy54LXBvcy5sZWZ0KSwgTWF0aC5hYnModGhpcy55LXBvcy50b3ApKSA6IHRpbWU7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCwgdGltZSwgZWFzaW5nKTtcbiAgICB9LFxuXG4gICAgX3RyYW5zaXRpb25UaW1lOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGltZSA9IHRpbWUgfHwgMDtcbiAgICAgICAgdmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgaWYoIWR1cmF0aW9uUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB0aW1lICsgJ21zJztcblxuICAgICAgICBpZiAoICF0aW1lICYmIHV0aWxzLmlzQmFkQW5kcm9pZCApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID0gJzAuMDAwMW1zJztcbiAgICAgICAgICAgIC8vIHJlbW92ZSAwLjAwMDFtc1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgckFGKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKHNlbGYuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID09PSAnMC4wMDAxbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID0gJzBzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCB0aGlzLmluZGljYXRvcnMgKSB7XG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IHRoaXMuaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzW2ldLnRyYW5zaXRpb25UaW1lKHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNpdGlvblRpbWVcblxuICAgIH0sXG5cbiAgICBfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25dID0gZWFzaW5nO1xuXG5cbiAgICAgICAgaWYgKCB0aGlzLmluZGljYXRvcnMgKSB7XG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IHRoaXMuaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzW2ldLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbihlYXNpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXG5cbiAgICB9LFxuXG4gICAgX3RyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtICkge1xuXG4vKiBSRVBMQUNFIFNUQVJUOiBfdHJhbnNsYXRlICovXG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZSgnICsgeCArICdweCwnICsgeSArICdweCknICsgdGhpcy50cmFuc2xhdGVaO1xuXG4vKiBSRVBMQUNFIEVORDogX3RyYW5zbGF0ZSAqL1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKHkpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxlclN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXJTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG5cblxuICAgIGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuICAgICAgICBmb3IgKCB2YXIgaSA9IHRoaXMuaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvcnNbaV0udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4vLyBJTlNFUlQgUE9JTlQ6IF90cmFuc2xhdGVcblxuICAgIH0sXG5cbiAgICBfaW5pdEV2ZW50czogZnVuY3Rpb24gKHJlbW92ZSkge1xuICAgICAgICB2YXIgZXZlbnRUeXBlID0gcmVtb3ZlID8gdXRpbHMucmVtb3ZlRXZlbnQgOiB1dGlscy5hZGRFdmVudCxcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMub3B0aW9ucy5iaW5kVG9XcmFwcGVyID8gdGhpcy53cmFwcGVyIDogd2luZG93O1xuXG4gICAgICAgIGV2ZW50VHlwZSh3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMpO1xuICAgICAgICBldmVudFR5cGUod2luZG93LCAncmVzaXplJywgdGhpcyk7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuY2xpY2sgKSB7XG4gICAgICAgICAgICBldmVudFR5cGUodGhpcy53cmFwcGVyLCAnY2xpY2snLCB0aGlzLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG4gICAgICAgICAgICBldmVudFR5cGUodGhpcy53cmFwcGVyLCAnbW91c2Vkb3duJywgdGhpcyk7XG4gICAgICAgICAgICBldmVudFR5cGUodGFyZ2V0LCAnbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgICAgICAgICBldmVudFR5cGUodGFyZ2V0LCAnbW91c2VjYW5jZWwnLCB0aGlzKTtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0YXJnZXQsICdtb3VzZXVwJywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHV0aWxzLmhhc1BvaW50ZXIgJiYgIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG4gICAgICAgICAgICBldmVudFR5cGUodGFyZ2V0LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJtb3ZlJyksIHRoaXMpO1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVyY2FuY2VsJyksIHRoaXMpO1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVydXAnKSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHV0aWxzLmhhc1RvdWNoICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaGNhbmNlbCcsIHRoaXMpO1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNoZW5kJywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ3RyYW5zaXRpb25lbmQnLCB0aGlzKTtcbiAgICAgICAgZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdGhpcyk7XG4gICAgICAgIGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnb1RyYW5zaXRpb25FbmQnLCB0aGlzKTtcbiAgICAgICAgZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICdNU1RyYW5zaXRpb25FbmQnLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgZ2V0Q29tcHV0ZWRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWF0cml4ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zY3JvbGxlciwgbnVsbCksXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcbiAgICAgICAgICAgIG1hdHJpeCA9IG1hdHJpeFt1dGlscy5zdHlsZS50cmFuc2Zvcm1dLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG4gICAgICAgICAgICB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG4gICAgICAgICAgICB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gK21hdHJpeC5sZWZ0LnJlcGxhY2UoL1teLVxcZC5dL2csICcnKTtcbiAgICAgICAgICAgIHkgPSArbWF0cml4LnRvcC5yZXBsYWNlKC9bXi1cXGQuXS9nLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG4gICAgfSxcbiAgICBfaW5pdEluZGljYXRvcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGludGVyYWN0aXZlID0gdGhpcy5vcHRpb25zLmludGVyYWN0aXZlU2Nyb2xsYmFycyxcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlID0gdHlwZW9mIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzICE9ICdzdHJpbmcnLFxuICAgICAgICAgICAgaW5kaWNhdG9ycyA9IFtdLFxuICAgICAgICAgICAgaW5kaWNhdG9yO1xuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICB0aGlzLmluZGljYXRvcnMgPSBbXTtcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzICkge1xuICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsYmFyXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zY3JvbGxZICkge1xuICAgICAgICAgICAgICAgIGluZGljYXRvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6IGNyZWF0ZURlZmF1bHRTY3JvbGxiYXIoJ3YnLCBpbnRlcmFjdGl2ZSwgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMpLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTY3JvbGxiYXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21TdHlsZTogY3VzdG9tU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdGhpcy5vcHRpb25zLnNocmlua1Njcm9sbGJhcnMsXG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuWDogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGluZGljYXRvci5lbCk7XG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhvcml6b250YWwgc2Nyb2xsYmFyXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zY3JvbGxYICkge1xuICAgICAgICAgICAgICAgIGluZGljYXRvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWw6IGNyZWF0ZURlZmF1bHRTY3JvbGxiYXIoJ2gnLCBpbnRlcmFjdGl2ZSwgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMpLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTY3JvbGxiYXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21TdHlsZTogY3VzdG9tU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdGhpcy5vcHRpb25zLnNocmlua1Njcm9sbGJhcnMsXG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuWTogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGluZGljYXRvci5lbCk7XG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzICkge1xuICAgICAgICAgICAgLy8gVE9ETzogY2hlY2sgY29uY2F0IGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgIGluZGljYXRvcnMgPSBpbmRpY2F0b3JzLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCB2YXIgaSA9IGluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzLnB1c2goIG5ldyBJbmRpY2F0b3IodGhpcywgaW5kaWNhdG9yc1tpXSkgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHdlIGNhbiB1c2UgYXJyYXkubWFwICh3aWRlIGNvbXBhdGliaWxpdHkgYW5kIHBlcmZvcm1hbmNlIGlzc3VlcylcbiAgICAgICAgZnVuY3Rpb24gX2luZGljYXRvcnNNYXAgKGZuKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAgICAgZm9yICggdmFyIGkgPSB0aGF0LmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgICAgICAgICBmbi5jYWxsKHRoYXQuaW5kaWNhdG9yc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMgKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdzY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKCdzY3JvbGxDYW5jZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKCdzY3JvbGxTdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFkZSgxKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKCdiZWZvcmVTY3JvbGxTdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFkZSgxLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaW5kaWNhdG9ycztcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9pbml0V2hlZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXRpbHMuYWRkRXZlbnQodGhpcy53cmFwcGVyLCAnd2hlZWwnLCB0aGlzKTtcbiAgICAgICAgdXRpbHMuYWRkRXZlbnQodGhpcy53cmFwcGVyLCAnbW91c2V3aGVlbCcsIHRoaXMpO1xuICAgICAgICB1dGlscy5hZGRFdmVudCh0aGlzLndyYXBwZXIsICdET01Nb3VzZVNjcm9sbCcsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy53aGVlbFRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy53aGVlbFRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQodGhpcy53cmFwcGVyLCAnd2hlZWwnLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlciwgJ21vdXNld2hlZWwnLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlciwgJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfd2hlZWw6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICggIXRoaXMuZW5hYmxlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aGVlbERlbHRhWCwgd2hlZWxEZWx0YVksXG4gICAgICAgICAgICBuZXdYLCBuZXdZLFxuICAgICAgICAgICAgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCB0aGlzLndoZWVsVGltZW91dCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgdGhhdC5fZXhlY0V2ZW50KCdzY3JvbGxTdGFydCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgc2Nyb2xsRW5kIGV2ZW50IGFmdGVyIDQwMG1zIHRoZSB3aGVlbCBzdG9wcGVkIHNjcm9sbGluZ1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy53aGVlbFRpbWVvdXQpO1xuICAgICAgICB0aGlzLndoZWVsVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoIXRoYXQub3B0aW9ucy5zbmFwKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQud2hlZWxUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9LCA0MDApO1xuXG4gICAgICAgIGlmICggJ2RlbHRhWCcgaW4gZSApIHtcbiAgICAgICAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHdoZWVsRGVsdGFYID0gLWUuZGVsdGFYICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcbiAgICAgICAgICAgICAgICB3aGVlbERlbHRhWSA9IC1lLmRlbHRhWSAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoZWVsRGVsdGFYID0gLWUuZGVsdGFYO1xuICAgICAgICAgICAgICAgIHdoZWVsRGVsdGFZID0gLWUuZGVsdGFZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCAnd2hlZWxEZWx0YVgnIGluIGUgKSB7XG4gICAgICAgICAgICB3aGVlbERlbHRhWCA9IGUud2hlZWxEZWx0YVggLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuICAgICAgICAgICAgd2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gMTIwICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICggJ3doZWVsRGVsdGEnIGluIGUgKSB7XG4gICAgICAgICAgICB3aGVlbERlbHRhWCA9IHdoZWVsRGVsdGFZID0gZS53aGVlbERlbHRhIC8gMTIwICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICggJ2RldGFpbCcgaW4gZSApIHtcbiAgICAgICAgICAgIHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVkgPSAtZS5kZXRhaWwgLyAzICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoZWVsRGVsdGFYICo9IHRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbjtcbiAgICAgICAgd2hlZWxEZWx0YVkgKj0gdGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uO1xuXG4gICAgICAgIGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG4gICAgICAgICAgICB3aGVlbERlbHRhWCA9IHdoZWVsRGVsdGFZO1xuICAgICAgICAgICAgd2hlZWxEZWx0YVkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcbiAgICAgICAgICAgIG5ld1ggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYO1xuICAgICAgICAgICAgbmV3WSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cbiAgICAgICAgICAgIGlmICggd2hlZWxEZWx0YVggPiAwICkge1xuICAgICAgICAgICAgICAgIG5ld1gtLTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHdoZWVsRGVsdGFYIDwgMCApIHtcbiAgICAgICAgICAgICAgICBuZXdYKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggd2hlZWxEZWx0YVkgPiAwICkge1xuICAgICAgICAgICAgICAgIG5ld1ktLTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHdoZWVsRGVsdGFZIDwgMCApIHtcbiAgICAgICAgICAgICAgICBuZXdZKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UobmV3WCwgbmV3WSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1ggPSB0aGlzLnggKyBNYXRoLnJvdW5kKHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IHdoZWVsRGVsdGFYIDogMCk7XG4gICAgICAgIG5ld1kgPSB0aGlzLnkgKyBNYXRoLnJvdW5kKHRoaXMuaGFzVmVydGljYWxTY3JvbGwgPyB3aGVlbERlbHRhWSA6IDApO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IHdoZWVsRGVsdGFYID4gMCA/IC0xIDogd2hlZWxEZWx0YVggPCAwID8gMSA6IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IHdoZWVsRGVsdGFZID4gMCA/IC0xIDogd2hlZWxEZWx0YVkgPCAwID8gMSA6IDA7XG5cbiAgICAgICAgaWYgKCBuZXdYID4gMCApIHtcbiAgICAgICAgICAgIG5ld1ggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYICkge1xuICAgICAgICAgICAgbmV3WCA9IHRoaXMubWF4U2Nyb2xsWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggbmV3WSA+IDAgKSB7XG4gICAgICAgICAgICBuZXdZID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLm1heFNjcm9sbFk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvKG5ld1gsIG5ld1ksIDApO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IF93aGVlbFxuICAgIH0sXG5cbiAgICBfaW5pdFNuYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHt9O1xuXG4gICAgICAgIGlmICggdHlwZW9mIHRoaXMub3B0aW9ucy5zbmFwID09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNuYXAgPSB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLnNuYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpID0gMCwgbCxcbiAgICAgICAgICAgICAgICBtID0gMCwgbixcbiAgICAgICAgICAgICAgICBjeCwgY3ksXG4gICAgICAgICAgICAgICAgeCA9IDAsIHksXG4gICAgICAgICAgICAgICAgc3RlcFggPSB0aGlzLm9wdGlvbnMuc25hcFN0ZXBYIHx8IHRoaXMud3JhcHBlcldpZHRoLFxuICAgICAgICAgICAgICAgIHN0ZXBZID0gdGhpcy5vcHRpb25zLnNuYXBTdGVwWSB8fCB0aGlzLndyYXBwZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgZWw7XG5cbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKCAhdGhpcy53cmFwcGVyV2lkdGggfHwgIXRoaXMud3JhcHBlckhlaWdodCB8fCAhdGhpcy5zY3JvbGxlcldpZHRoIHx8ICF0aGlzLnNjcm9sbGVySGVpZ2h0ICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc25hcCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICBjeCA9IE1hdGgucm91bmQoIHN0ZXBYIC8gMiApO1xuICAgICAgICAgICAgICAgIGN5ID0gTWF0aC5yb3VuZCggc3RlcFkgLyAyICk7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoIHggPiAtdGhpcy5zY3JvbGxlcldpZHRoICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzW2ldID0gW107XG4gICAgICAgICAgICAgICAgICAgIGwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIHkgPiAtdGhpcy5zY3JvbGxlckhlaWdodCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZXNbaV1bbF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5tYXgoeCwgdGhpcy5tYXhTY3JvbGxYKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLm1heCh5LCB0aGlzLm1heFNjcm9sbFkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzdGVwWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHN0ZXBZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4OiB4IC0gY3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k6IHkgLSBjeVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgeSAtPSBzdGVwWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHggLT0gc3RlcFg7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsID0gdGhpcy5vcHRpb25zLnNuYXA7XG4gICAgICAgICAgICAgICAgbCA9IGVsLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBuID0gLTE7XG5cbiAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggaSA9PT0gMCB8fCBlbFtpXS5vZmZzZXRMZWZ0IDw9IGVsW2ktMV0ub2Zmc2V0TGVmdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5wYWdlc1ttXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZXNbbV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCgtZWxbaV0ub2Zmc2V0TGVmdCwgdGhpcy5tYXhTY3JvbGxYKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWF4KC1lbFtpXS5vZmZzZXRUb3AsIHRoaXMubWF4U2Nyb2xsWSk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0geCAtIE1hdGgucm91bmQoZWxbaV0ub2Zmc2V0V2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSB5IC0gTWF0aC5yb3VuZChlbFtpXS5vZmZzZXRIZWlnaHQgLyAyKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzW21dW25dID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZWxbaV0ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGVsW2ldLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN4OiBjeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN5OiBjeVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggeCA+IHRoaXMubWF4U2Nyb2xsWCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYIHx8IDAsIHRoaXMuY3VycmVudFBhZ2UucGFnZVkgfHwgMCwgMCk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzbmFwIHRocmVzaG9sZCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQgJSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25hcFRocmVzaG9sZFggPSB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYXBUaHJlc2hvbGRZID0gdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc25hcFRocmVzaG9sZFggPSBNYXRoLnJvdW5kKHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZS5wYWdlWF1bdGhpcy5jdXJyZW50UGFnZS5wYWdlWV0ud2lkdGggKiB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbmFwVGhyZXNob2xkWSA9IE1hdGgucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oJ2ZsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKHRoaXMueCAtIHRoaXMuc3RhcnRYKSwgMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLmFicyh0aGlzLnkgLSB0aGlzLnN0YXJ0WSksIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICksIDMwMCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZS5wYWdlWCArIHRoaXMuZGlyZWN0aW9uWCxcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZICsgdGhpcy5kaXJlY3Rpb25ZLFxuICAgICAgICAgICAgICAgIHRpbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfbmVhcmVzdFNuYXA6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICggIXRoaXMucGFnZXMubGVuZ3RoICkge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCwgcGFnZVg6IDAsIHBhZ2VZOiAwIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsID0gdGhpcy5wYWdlcy5sZW5ndGgsXG4gICAgICAgICAgICBtID0gMDtcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBleGNlZWRlZCB0aGUgc25hcCB0aHJlc2hvbGRcbiAgICAgICAgaWYgKCBNYXRoLmFicyh4IC0gdGhpcy5hYnNTdGFydFgpIDwgdGhpcy5zbmFwVGhyZXNob2xkWCAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoeSAtIHRoaXMuYWJzU3RhcnRZKSA8IHRoaXMuc25hcFRocmVzaG9sZFkgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggeCA+IDAgKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggeCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcbiAgICAgICAgICAgIHggPSB0aGlzLm1heFNjcm9sbFg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHkgPiAwICkge1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIHkgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG4gICAgICAgICAgICB5ID0gdGhpcy5tYXhTY3JvbGxZO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgaWYgKCB4ID49IHRoaXMucGFnZXNbaV1bMF0uY3ggKSB7XG4gICAgICAgICAgICAgICAgeCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGwgPSB0aGlzLnBhZ2VzW2ldLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCA7IG0gPCBsOyBtKysgKSB7XG4gICAgICAgICAgICBpZiAoIHkgPj0gdGhpcy5wYWdlc1swXVttXS5jeSApIHtcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5wYWdlc1swXVttXS55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBpID09IHRoaXMuY3VycmVudFBhZ2UucGFnZVggKSB7XG4gICAgICAgICAgICBpICs9IHRoaXMuZGlyZWN0aW9uWDtcblxuICAgICAgICAgICAgaWYgKCBpIDwgMCApIHtcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGkgPj0gdGhpcy5wYWdlcy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeCA9IHRoaXMucGFnZXNbaV1bMF0ueDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggbSA9PSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZICkge1xuICAgICAgICAgICAgbSArPSB0aGlzLmRpcmVjdGlvblk7XG5cbiAgICAgICAgICAgIGlmICggbSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBtID49IHRoaXMucGFnZXNbMF0ubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIG0gPSB0aGlzLnBhZ2VzWzBdLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHkgPSB0aGlzLnBhZ2VzWzBdW21dLnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICBwYWdlWDogaSxcbiAgICAgICAgICAgIHBhZ2VZOiBtXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdvVG9QYWdlOiBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nKSB7XG4gICAgICAgIGVhc2luZyA9IGVhc2luZyB8fCB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nO1xuXG4gICAgICAgIGlmICggeCA+PSB0aGlzLnBhZ2VzLmxlbmd0aCApIHtcbiAgICAgICAgICAgIHggPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoIHggPCAwICkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHkgPj0gdGhpcy5wYWdlc1t4XS5sZW5ndGggKSB7XG4gICAgICAgICAgICB5ID0gdGhpcy5wYWdlc1t4XS5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKCB5IDwgMCApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvc1ggPSB0aGlzLnBhZ2VzW3hdW3ldLngsXG4gICAgICAgICAgICBwb3NZID0gdGhpcy5wYWdlc1t4XVt5XS55O1xuXG4gICAgICAgIHRpbWUgPSB0aW1lID09PSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oTWF0aC5hYnMocG9zWCAtIHRoaXMueCksIDEwMDApLFxuICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKHBvc1kgLSB0aGlzLnkpLCAxMDAwKVxuICAgICAgICAgICAgKSwgMzAwKSA6IHRpbWU7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHtcbiAgICAgICAgICAgIHg6IHBvc1gsXG4gICAgICAgICAgICB5OiBwb3NZLFxuICAgICAgICAgICAgcGFnZVg6IHgsXG4gICAgICAgICAgICBwYWdlWTogeVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zWCwgcG9zWSwgdGltZSwgZWFzaW5nKTtcbiAgICB9LFxuXG4gICAgbmV4dDogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuICAgICAgICB2YXIgeCA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVgsXG4gICAgICAgICAgICB5ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWTtcblxuICAgICAgICB4Kys7XG5cbiAgICAgICAgaWYgKCB4ID49IHRoaXMucGFnZXMubGVuZ3RoICYmIHRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ29Ub1BhZ2UoeCwgeSwgdGltZSwgZWFzaW5nKTtcbiAgICB9LFxuXG4gICAgcHJldjogZnVuY3Rpb24gKHRpbWUsIGVhc2luZykge1xuICAgICAgICB2YXIgeCA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVgsXG4gICAgICAgICAgICB5ID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWTtcblxuICAgICAgICB4LS07XG5cbiAgICAgICAgaWYgKCB4IDwgMCAmJiB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICB5LS07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvVG9QYWdlKHgsIHksIHRpbWUsIGVhc2luZyk7XG4gICAgfSxcblxuICAgIF9pbml0S2V5czogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gZGVmYXVsdCBrZXkgYmluZGluZ3NcbiAgICAgICAgdmFyIGtleXMgPSB7XG4gICAgICAgICAgICBwYWdlVXA6IDMzLFxuICAgICAgICAgICAgcGFnZURvd246IDM0LFxuICAgICAgICAgICAgZW5kOiAzNSxcbiAgICAgICAgICAgIGhvbWU6IDM2LFxuICAgICAgICAgICAgbGVmdDogMzcsXG4gICAgICAgICAgICB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksXG4gICAgICAgICAgICBkb3duOiA0MFxuICAgICAgICB9O1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICAvLyBpZiB5b3UgZ2l2ZSBtZSBjaGFyYWN0ZXJzIEkgZ2l2ZSB5b3Uga2V5Y29kZVxuICAgICAgICBpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MgPT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBmb3IgKCBpIGluIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gPT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXSA9IHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nc1tpXS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBpIGluIGtleXMgKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gPSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gfHwga2V5c1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ2tleWRvd24nLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAna2V5ZG93bicsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2tleTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5lbmFibGVkICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNuYXAgPSB0aGlzLm9wdGlvbnMuc25hcCwgICAvLyB3ZSBhcmUgdXNpbmcgdGhpcyBhbG90LCBiZXR0ZXIgdG8gY2FjaGUgaXRcbiAgICAgICAgICAgIG5ld1ggPSBzbmFwID8gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCA6IHRoaXMueCxcbiAgICAgICAgICAgIG5ld1kgPSBzbmFwID8gdGhpcy5jdXJyZW50UGFnZS5wYWdlWSA6IHRoaXMueSxcbiAgICAgICAgICAgIG5vdyA9IHV0aWxzLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHByZXZUaW1lID0gdGhpcy5rZXlUaW1lIHx8IDAsXG4gICAgICAgICAgICBhY2NlbGVyYXRpb24gPSAwLjI1MCxcbiAgICAgICAgICAgIHBvcztcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG4gICAgICAgICAgICBwb3MgPSB0aGlzLmdldENvbXB1dGVkUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG4gICAgICAgICAgICB0aGlzLmlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmtleUFjY2VsZXJhdGlvbiA9IG5vdyAtIHByZXZUaW1lIDwgMjAwID8gTWF0aC5taW4odGhpcy5rZXlBY2NlbGVyYXRpb24gKyBhY2NlbGVyYXRpb24sIDUwKSA6IDA7XG5cbiAgICAgICAgc3dpdGNoICggZS5rZXlDb2RlICkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZVVwOlxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICYmICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuICAgICAgICAgICAgICAgICAgICBuZXdYICs9IHNuYXAgPyAxIDogdGhpcy53cmFwcGVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3WSArPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlckhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5wYWdlRG93bjpcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3WCAtPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlcldpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1kgLT0gc25hcCA/IDEgOiB0aGlzLndyYXBwZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuZW5kOlxuICAgICAgICAgICAgICAgIG5ld1ggPSBzbmFwID8gdGhpcy5wYWdlcy5sZW5ndGgtMSA6IHRoaXMubWF4U2Nyb2xsWDtcbiAgICAgICAgICAgICAgICBuZXdZID0gc25hcCA/IHRoaXMucGFnZXNbMF0ubGVuZ3RoLTEgOiB0aGlzLm1heFNjcm9sbFk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5ob21lOlxuICAgICAgICAgICAgICAgIG5ld1ggPSAwO1xuICAgICAgICAgICAgICAgIG5ld1kgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MubGVmdDpcbiAgICAgICAgICAgICAgICBuZXdYICs9IHNuYXAgPyAtMSA6IDUgKyB0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnVwOlxuICAgICAgICAgICAgICAgIG5ld1kgKz0gc25hcCA/IDEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5yaWdodDpcbiAgICAgICAgICAgICAgICBuZXdYIC09IHNuYXAgPyAtMSA6IDUgKyB0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmRvd246XG4gICAgICAgICAgICAgICAgbmV3WSAtPSBzbmFwID8gMSA6IDUgKyB0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzbmFwICkge1xuICAgICAgICAgICAgdGhpcy5nb1RvUGFnZShuZXdYLCBuZXdZKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggbmV3WCA+IDAgKSB7XG4gICAgICAgICAgICBuZXdYID0gMDtcbiAgICAgICAgICAgIHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcbiAgICAgICAgICAgIG5ld1ggPSB0aGlzLm1heFNjcm9sbFg7XG4gICAgICAgICAgICB0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG5ld1kgPiAwICkge1xuICAgICAgICAgICAgbmV3WSA9IDA7XG4gICAgICAgICAgICB0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIG5ld1kgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG4gICAgICAgICAgICBuZXdZID0gdGhpcy5tYXhTY3JvbGxZO1xuICAgICAgICAgICAgdGhpcy5rZXlBY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuICAgICAgICB0aGlzLmtleVRpbWUgPSBub3c7XG4gICAgfSxcblxuICAgIF9hbmltYXRlOiBmdW5jdGlvbiAoZGVzdFgsIGRlc3RZLCBkdXJhdGlvbiwgZWFzaW5nRm4pIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgc3RhcnRYID0gdGhpcy54LFxuICAgICAgICAgICAgc3RhcnRZID0gdGhpcy55LFxuICAgICAgICAgICAgc3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcblxuICAgICAgICBmdW5jdGlvbiBzdGVwICgpIHtcbiAgICAgICAgICAgIHZhciBub3cgPSB1dGlscy5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgbmV3WCwgbmV3WSxcbiAgICAgICAgICAgICAgICBlYXNpbmc7XG5cbiAgICAgICAgICAgIGlmICggbm93ID49IGRlc3RUaW1lICkge1xuICAgICAgICAgICAgICAgIHRoYXQuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGF0Ll90cmFuc2xhdGUoZGVzdFgsIGRlc3RZKTtcblxuICAgICAgICAgICAgICAgIGlmICggIXRoYXQucmVzZXRQb3NpdGlvbih0aGF0Lm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3cgPSAoIG5vdyAtIHN0YXJ0VGltZSApIC8gZHVyYXRpb247XG4gICAgICAgICAgICBlYXNpbmcgPSBlYXNpbmdGbihub3cpO1xuICAgICAgICAgICAgbmV3WCA9ICggZGVzdFggLSBzdGFydFggKSAqIGVhc2luZyArIHN0YXJ0WDtcbiAgICAgICAgICAgIG5ld1kgPSAoIGRlc3RZIC0gc3RhcnRZICkgKiBlYXNpbmcgKyBzdGFydFk7XG4gICAgICAgICAgICB0aGF0Ll90cmFuc2xhdGUobmV3WCwgbmV3WSk7XG5cbiAgICAgICAgICAgIGlmICggdGhhdC5pc0FuaW1hdGluZyApIHtcbiAgICAgICAgICAgICAgICByQUYoc3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgc3RlcCgpO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN3aXRjaCAoIGUudHlwZSApIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcmRvd24nOlxuICAgICAgICAgICAgY2FzZSAnTVNQb2ludGVyRG93bic6XG4gICAgICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgICAgIGNhc2UgJ3BvaW50ZXJtb3ZlJzpcbiAgICAgICAgICAgIGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuICAgICAgICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcnVwJzpcbiAgICAgICAgICAgIGNhc2UgJ01TUG9pbnRlclVwJzpcbiAgICAgICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgICAgY2FzZSAndG91Y2hjYW5jZWwnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcmNhbmNlbCc6XG4gICAgICAgICAgICBjYXNlICdNU1BvaW50ZXJDYW5jZWwnOlxuICAgICAgICAgICAgY2FzZSAnbW91c2VjYW5jZWwnOlxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZChlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29yaWVudGF0aW9uY2hhbmdlJzpcbiAgICAgICAgICAgIGNhc2UgJ3Jlc2l6ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0cmFuc2l0aW9uZW5kJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuICAgICAgICAgICAgY2FzZSAnb1RyYW5zaXRpb25FbmQnOlxuICAgICAgICAgICAgY2FzZSAnTVNUcmFuc2l0aW9uRW5kJzpcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uRW5kKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2hlZWwnOlxuICAgICAgICAgICAgY2FzZSAnRE9NTW91c2VTY3JvbGwnOlxuICAgICAgICAgICAgY2FzZSAnbW91c2V3aGVlbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2hlZWwoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrZXlkb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXkoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmVuYWJsZWQgJiYgIWUuX2NvbnN0cnVjdGVkICkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRTY3JvbGxiYXIgKGRpcmVjdGlvbiwgaW50ZXJhY3RpdmUsIHR5cGUpIHtcbiAgICB2YXIgc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKCB0eXBlID09PSB0cnVlICkge1xuICAgICAgICBzY3JvbGxiYXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTknO1xuICAgICAgICBpbmRpY2F0b3Iuc3R5bGUuY3NzVGV4dCA9ICctd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7Ym9yZGVyLXJhZGl1czozcHgnO1xuICAgIH1cblxuICAgIGluZGljYXRvci5jbGFzc05hbWUgPSAnaVNjcm9sbEluZGljYXRvcic7XG5cbiAgICBpZiAoIGRpcmVjdGlvbiA9PSAnaCcgKSB7XG4gICAgICAgIGlmICggdHlwZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHNjcm9sbGJhci5zdHlsZS5jc3NUZXh0ICs9ICc7aGVpZ2h0OjdweDtsZWZ0OjJweDtyaWdodDoycHg7Ym90dG9tOjAnO1xuICAgICAgICAgICAgaW5kaWNhdG9yLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxiYXIuY2xhc3NOYW1lID0gJ2lTY3JvbGxIb3Jpem9udGFsU2Nyb2xsYmFyJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIHR5cGUgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzY3JvbGxiYXIuc3R5bGUuY3NzVGV4dCArPSAnO3dpZHRoOjdweDtib3R0b206MnB4O3RvcDoycHg7cmlnaHQ6MXB4JztcbiAgICAgICAgICAgIGluZGljYXRvci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxiYXIuY2xhc3NOYW1lID0gJ2lTY3JvbGxWZXJ0aWNhbFNjcm9sbGJhcic7XG4gICAgfVxuXG4gICAgc2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJztvdmVyZmxvdzpoaWRkZW4nO1xuXG4gICAgaWYgKCAhaW50ZXJhY3RpdmUgKSB7XG4gICAgICAgIHNjcm9sbGJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHNjcm9sbGJhci5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhcjtcbn1cblxuZnVuY3Rpb24gSW5kaWNhdG9yIChzY3JvbGxlciwgb3B0aW9ucykge1xuICAgIHRoaXMud3JhcHBlciA9IHR5cGVvZiBvcHRpb25zLmVsID09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmVsKSA6IG9wdGlvbnMuZWw7XG4gICAgdGhpcy53cmFwcGVyU3R5bGUgPSB0aGlzLndyYXBwZXIuc3R5bGU7XG4gICAgdGhpcy5pbmRpY2F0b3IgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgdGhpcy5pbmRpY2F0b3JTdHlsZSA9IHRoaXMuaW5kaWNhdG9yLnN0eWxlO1xuICAgIHRoaXMuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgbGlzdGVuWDogdHJ1ZSxcbiAgICAgICAgbGlzdGVuWTogdHJ1ZSxcbiAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICByZXNpemU6IHRydWUsXG4gICAgICAgIGRlZmF1bHRTY3JvbGxiYXJzOiBmYWxzZSxcbiAgICAgICAgc2hyaW5rOiBmYWxzZSxcbiAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgIHNwZWVkUmF0aW9YOiAwLFxuICAgICAgICBzcGVlZFJhdGlvWTogMFxuICAgIH07XG5cbiAgICBmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuICAgICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgIH1cblxuICAgIHRoaXMuc2l6ZVJhdGlvWCA9IDE7XG4gICAgdGhpcy5zaXplUmF0aW9ZID0gMTtcbiAgICB0aGlzLm1heFBvc1ggPSAwO1xuICAgIHRoaXMubWF4UG9zWSA9IDA7XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSApIHtcbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcbiAgICAgICAgICAgIHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuICAgICAgICAgICAgdXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2hlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXIgKSB7XG4gICAgICAgICAgICB1dGlscy5hZGRFdmVudCh0aGlzLmluZGljYXRvciwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVyZG93bicpLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVydXAnKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZSApIHtcbiAgICAgICAgICAgIHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCAnbW91c2Vkb3duJywgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5hZGRFdmVudCh3aW5kb3csICdtb3VzZXVwJywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5mYWRlICkge1xuICAgICAgICB0aGlzLndyYXBwZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2Zvcm1dID0gdGhpcy5zY3JvbGxlci50cmFuc2xhdGVaO1xuICAgICAgICB2YXIgZHVyYXRpb25Qcm9wID0gdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICBpZighZHVyYXRpb25Qcm9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9IHV0aWxzLmlzQmFkQW5kcm9pZCA/ICcwLjAwMDFtcycgOiAnMG1zJztcbiAgICAgICAgLy8gcmVtb3ZlIDAuMDAwMW1zXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYodXRpbHMuaXNCYWRBbmRyb2lkKSB7XG4gICAgICAgICAgICByQUYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYoc2VsZi53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXJTdHlsZVtkdXJhdGlvblByb3BdID0gJzBzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyYXBwZXJTdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIH1cbn1cblxuSW5kaWNhdG9yLnByb3RvdHlwZSA9IHtcbiAgICBoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc3dpdGNoICggZS50eXBlICkge1xuICAgICAgICAgICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICAgICAgICBjYXNlICdwb2ludGVyZG93bic6XG4gICAgICAgICAgICBjYXNlICdNU1BvaW50ZXJEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcm1vdmUnOlxuICAgICAgICAgICAgY2FzZSAnTVNQb2ludGVyTW92ZSc6XG4gICAgICAgICAgICBjYXNlICdtb3VzZW1vdmUnOlxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3VjaGVuZCc6XG4gICAgICAgICAgICBjYXNlICdwb2ludGVydXAnOlxuICAgICAgICAgICAgY2FzZSAnTVNQb2ludGVyVXAnOlxuICAgICAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgICBjYXNlICd0b3VjaGNhbmNlbCc6XG4gICAgICAgICAgICBjYXNlICdwb2ludGVyY2FuY2VsJzpcbiAgICAgICAgICAgIGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG4gICAgICAgICAgICBjYXNlICdtb3VzZWNhbmNlbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMgKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLmZhZGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSApIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLCAndG91Y2hzdGFydCcsIHRoaXMpO1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvciwgJ21vdXNlZG93bicsIHRoaXMpO1xuXG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaGVuZCcsIHRoaXMpO1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNldXAnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzICkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBwb2ludCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUoKTtcblxuICAgICAgICB0aGlzLmluaXRpYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UG9pbnRYID0gcG9pbnQucGFnZVg7XG4gICAgICAgIHRoaXMubGFzdFBvaW50WSA9IHBvaW50LnBhZ2VZO1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lICA9IHV0aWxzLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuICAgICAgICAgICAgdXRpbHMuYWRkRXZlbnQod2luZG93LCAndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuICAgICAgICAgICAgdXRpbHMuYWRkRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJtb3ZlJyksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG4gICAgICAgICAgICB1dGlscy5hZGRFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcbiAgICB9LFxuXG4gICAgX21vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBwb2ludCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG4gICAgICAgICAgICBkZWx0YVgsIGRlbHRhWSxcbiAgICAgICAgICAgIG5ld1gsIG5ld1ksXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSB1dGlscy5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5tb3ZlZCApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xuXG4gICAgICAgIGRlbHRhWCA9IHBvaW50LnBhZ2VYIC0gdGhpcy5sYXN0UG9pbnRYO1xuICAgICAgICB0aGlzLmxhc3RQb2ludFggPSBwb2ludC5wYWdlWDtcblxuICAgICAgICBkZWx0YVkgPSBwb2ludC5wYWdlWSAtIHRoaXMubGFzdFBvaW50WTtcbiAgICAgICAgdGhpcy5sYXN0UG9pbnRZID0gcG9pbnQucGFnZVk7XG5cbiAgICAgICAgbmV3WCA9IHRoaXMueCArIGRlbHRhWDtcbiAgICAgICAgbmV3WSA9IHRoaXMueSArIGRlbHRhWTtcblxuICAgICAgICB0aGlzLl9wb3MobmV3WCwgbmV3WSk7XG5cbi8vIElOU0VSVCBQT0lOVDogaW5kaWNhdG9yLl9tb3ZlXG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sXG5cbiAgICBfZW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoICF0aGlzLmluaXRpYXRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG4gICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScsIHRoaXMpO1xuXG4gICAgICAgIGlmICggdGhpcy5zY3JvbGxlci5vcHRpb25zLnNuYXAgKSB7XG4gICAgICAgICAgICB2YXIgc25hcCA9IHRoaXMuc2Nyb2xsZXIuX25lYXJlc3RTbmFwKHRoaXMuc2Nyb2xsZXIueCwgdGhpcy5zY3JvbGxlci55KTtcblxuICAgICAgICAgICAgdmFyIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKHRoaXMuc2Nyb2xsZXIueCAtIHNuYXAueCksIDEwMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oTWF0aC5hYnModGhpcy5zY3JvbGxlci55IC0gc25hcC55KSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgKSwgMzAwKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLnNjcm9sbGVyLnggIT0gc25hcC54IHx8IHRoaXMuc2Nyb2xsZXIueSAhPSBzbmFwLnkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxlci5kaXJlY3Rpb25YID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyLmRpcmVjdGlvblkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuY3VycmVudFBhZ2UgPSBzbmFwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8oc25hcC54LCBzbmFwLnksIHRpbWUsIHRoaXMuc2Nyb2xsZXIub3B0aW9ucy5ib3VuY2VFYXNpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm1vdmVkICkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0cmFuc2l0aW9uVGltZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgMDtcbiAgICAgICAgdmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgaWYoIWR1cmF0aW9uUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZVtkdXJhdGlvblByb3BdID0gdGltZSArICdtcyc7XG5cbiAgICAgICAgaWYgKCAhdGltZSAmJiB1dGlscy5pc0JhZEFuZHJvaWQgKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIDAuMDAwMW1zXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICByQUYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYoc2VsZi5pbmRpY2F0b3JTdHlsZVtkdXJhdGlvblByb3BdID09PSAnMC4wMDAxbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXSA9IGVhc2luZztcbiAgICB9LFxuXG4gICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lKCk7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCAmJiAhdGhpcy5vcHRpb25zLmxpc3RlblkgKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjcm9sbGVyLmhhc0hvcml6b250YWxTY3JvbGwgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWSAmJiAhdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUuZGlzcGxheSA9IHRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbCB8fCB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsICYmIHRoaXMuc2Nyb2xsZXIuaGFzVmVydGljYWxTY3JvbGwgKSB7XG4gICAgICAgICAgICB1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsQm90aFNjcm9sbGJhcnMnKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlciwgJ2lTY3JvbGxMb25lU2Nyb2xsYmFyJyk7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzICYmIHRoaXMub3B0aW9ucy5jdXN0b21TdHlsZSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5YICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUucmlnaHQgPSAnOHB4JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUuYm90dG9tID0gJzhweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbEJvdGhTY3JvbGxiYXJzJyk7XG4gICAgICAgICAgICB1dGlscy5hZGRDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsTG9uZVNjcm9sbGJhcicpO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICcycHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDsgIC8vIGZvcmNlIHJlZnJlc2hcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5YICkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyV2lkdGggPSB0aGlzLndyYXBwZXIuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5yZXNpemUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JXaWR0aCA9IE1hdGgubWF4KE1hdGgucm91bmQodGhpcy53cmFwcGVyV2lkdGggKiB0aGlzLndyYXBwZXJXaWR0aCAvICh0aGlzLnNjcm9sbGVyLnNjcm9sbGVyV2lkdGggfHwgdGhpcy53cmFwcGVyV2lkdGggfHwgMSkpLCA4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy5pbmRpY2F0b3JXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yV2lkdGggPSB0aGlzLmluZGljYXRvci5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tYXhQb3NYID0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLmluZGljYXRvcldpZHRoO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ2NsaXAnICkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluQm91bmRhcnlYID0gLXRoaXMuaW5kaWNhdG9yV2lkdGggKyA4O1xuICAgICAgICAgICAgICAgIHRoaXMubWF4Qm91bmRhcnlYID0gdGhpcy53cmFwcGVyV2lkdGggLSA4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbkJvdW5kYXJ5WCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhCb3VuZGFyeVggPSB0aGlzLm1heFBvc1g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2l6ZVJhdGlvWCA9IHRoaXMub3B0aW9ucy5zcGVlZFJhdGlvWCB8fCAodGhpcy5zY3JvbGxlci5tYXhTY3JvbGxYICYmICh0aGlzLm1heFBvc1ggLyB0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmxpc3RlblkgKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9ySGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh0aGlzLndyYXBwZXJIZWlnaHQgKiB0aGlzLndyYXBwZXJIZWlnaHQgLyAodGhpcy5zY3JvbGxlci5zY3JvbGxlckhlaWdodCB8fCB0aGlzLndyYXBwZXJIZWlnaHQgfHwgMSkpLCA4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmhlaWdodCA9IHRoaXMuaW5kaWNhdG9ySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JIZWlnaHQgPSB0aGlzLmluZGljYXRvci5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ2NsaXAnICkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluQm91bmRhcnlZID0gLXRoaXMuaW5kaWNhdG9ySGVpZ2h0ICsgODtcbiAgICAgICAgICAgICAgICB0aGlzLm1heEJvdW5kYXJ5WSA9IHRoaXMud3JhcHBlckhlaWdodCAtIDg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWluQm91bmRhcnlZID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1heEJvdW5kYXJ5WSA9IHRoaXMubWF4UG9zWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tYXhQb3NZID0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5pbmRpY2F0b3JIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNpemVSYXRpb1kgPSB0aGlzLm9wdGlvbnMuc3BlZWRSYXRpb1kgfHwgKHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSAmJiAodGhpcy5tYXhQb3NZIC8gdGhpcy5zY3JvbGxlci5tYXhTY3JvbGxZKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy5vcHRpb25zLmxpc3RlblggJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1ggKiB0aGlzLnNjcm9sbGVyLngpIHx8IDAsXG4gICAgICAgICAgICB5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgJiYgTWF0aC5yb3VuZCh0aGlzLnNpemVSYXRpb1kgKiB0aGlzLnNjcm9sbGVyLnkpIHx8IDA7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmlnbm9yZUJvdW5kYXJpZXMgKSB7XG4gICAgICAgICAgICBpZiAoIHggPCB0aGlzLm1pbkJvdW5kYXJ5WCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWF4KHRoaXMuaW5kaWNhdG9yV2lkdGggKyB4LCA4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4ID0gdGhpcy5taW5Cb3VuZGFyeVg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhCb3VuZGFyeVggKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLmluZGljYXRvcldpZHRoIC0gKHggLSB0aGlzLm1heFBvc1gpLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB4ID0gdGhpcy5tYXhQb3NYICsgdGhpcy5pbmRpY2F0b3JXaWR0aCAtIHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMubWF4Qm91bmRhcnlYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyAmJiB0aGlzLndpZHRoICE9IHRoaXMuaW5kaWNhdG9yV2lkdGggKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW5kaWNhdG9yV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHkgPCB0aGlzLm1pbkJvdW5kYXJ5WSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmluZGljYXRvckhlaWdodCArIHkgKiAzLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHkgPSB0aGlzLm1pbkJvdW5kYXJ5WTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHkgPiB0aGlzLm1heEJvdW5kYXJ5WSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmluZGljYXRvckhlaWdodCAtICh5IC0gdGhpcy5tYXhQb3NZKSAqIDMsIDgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRoaXMubWF4UG9zWSArIHRoaXMuaW5kaWNhdG9ySGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRoaXMubWF4Qm91bmRhcnlZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyAmJiB0aGlzLmhlaWdodCAhPSB0aGlzLmluZGljYXRvckhlaWdodCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcblxuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsZXIub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KScgKyB0aGlzLnNjcm9sbGVyLnRyYW5zbGF0ZVo7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3BvczogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgaWYgKCB4IDwgMCApIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCB4ID4gdGhpcy5tYXhQb3NYICkge1xuICAgICAgICAgICAgeCA9IHRoaXMubWF4UG9zWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggeSA8IDAgKSB7XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggeSA+IHRoaXMubWF4UG9zWSApIHtcbiAgICAgICAgICAgIHkgPSB0aGlzLm1heFBvc1k7XG4gICAgICAgIH1cblxuICAgICAgICB4ID0gdGhpcy5vcHRpb25zLmxpc3RlblggPyBNYXRoLnJvdW5kKHggLyB0aGlzLnNpemVSYXRpb1gpIDogdGhpcy5zY3JvbGxlci54O1xuICAgICAgICB5ID0gdGhpcy5vcHRpb25zLmxpc3RlblkgPyBNYXRoLnJvdW5kKHkgLyB0aGlzLnNpemVSYXRpb1kpIDogdGhpcy5zY3JvbGxlci55O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfSxcblxuICAgIGZhZGU6IGZ1bmN0aW9uICh2YWwsIGhvbGQpIHtcbiAgICAgICAgaWYgKCBob2xkICYmICF0aGlzLnZpc2libGUgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dCk7XG4gICAgICAgIHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIHZhciB0aW1lID0gdmFsID8gMjUwIDogNTAwLFxuICAgICAgICAgICAgZGVsYXkgPSB2YWwgPyAwIDogMzAwO1xuXG4gICAgICAgIHZhbCA9IHZhbCA/ICcxJyA6ICcwJztcblxuICAgICAgICB0aGlzLndyYXBwZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb25dID0gdGltZSArICdtcyc7XG5cbiAgICAgICAgdGhpcy5mYWRlVGltZW91dCA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlclN0eWxlLm9wYWNpdHkgPSB2YWw7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSArdmFsO1xuICAgICAgICB9KS5iaW5kKHRoaXMsIHZhbCksIGRlbGF5KTtcbiAgICB9XG59O1xuXG5JU2Nyb2xsLnV0aWxzID0gdXRpbHM7XG5cbmlmICggdHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IElTY3JvbGw7XG59IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAgICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7IHJldHVybiBJU2Nyb2xsOyB9ICk7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5JU2Nyb2xsID0gSVNjcm9sbDtcbn1cblxufSkod2luZG93LCBkb2N1bWVudCwgTWF0aCk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGFycm93UmlnaHQgPSAkKCcucGFnZTNfYXJyb3ctcmlnaHQnKSwvL9GB0YLRgNC10LvQvtGH0LrQsCDQstC/0YDQsNCy0L5cclxuICAgICAgICBhcnJvd0xlZnQgPSAkKCcucGFnZTNfYXJyb3ctbGVmdCcpLC8v0YHRgtGA0LXQu9C+0YfQutCwINCy0LvQtdCy0L5cclxuXHJcbiAgICAgICAgZG90dGVkTGVmdCA9ICQoJy5wYWdlM19kb3RhdGVkTGVmdCcpLC8v0L/Rg9C90LrRgtC40YAg0L/QvtC70L7RgdGLXHJcbiAgICAgICAgZG90dGVkUmlnaHQgPSAkKCcucGFnZTNfZG90YXRlZFJpZ2h0JyksXHJcbiAgICAgICAgZG90dGVkQ2VudGVyID0gJCgnLnBhZ2UzX2RvdGF0ZWRDZW50ZXInKSxcclxuXHJcbiAgICAgICAgYWxsQ2xvdWQgPSAkKCcucGFnZTNfY29udGVudF9hYnNvbHV0ZUJsb2NrJyksLy/QstGB0LUg0L7QsdC70LDQutCwXHJcbiAgICAgICAgY29udGVpbmVyID0gJCgnLnBhZ2UzX2NvbnRlbnQnKSwvL9C60L7QvdGC0LXQudC90LXRgCDQs9C00LUg0LvQtdC20LDRgiDQstGB0LUg0L7QsdC70LDQutCwXHJcbiAgICAgICAgdCA9IDE7Ly/Qv9C+0YDRj9C00LrQvtCy0YvQuSDQvdC+0LzQtdGAXHJcblxyXG4gICAgYXJyb3dSaWdodC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IHQgLSAxLFxyXG4gICAgICAgICAgICBsZWZ0ID0gdCAtIDIsXHJcbiAgICAgICAgICAgIGxlZnRPdXQgPSB0IC0gMyxcclxuICAgICAgICAgICAgUmlnaHRPdXQgPSB0ICsgMTtcclxuXHJcbiAgICAgICAgaWYgKHQgPCAwKSB7XHJcbiAgICAgICAgICAgIHQgPSBhbGxDbG91ZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0vL9C+0LHQvdGD0LvRj9C10Lwg0LrQvtC10YTQuNGG0LjQtdC90YIgdCDQutC+0LPQtNCwINCy0YvRiNC1INC60L7Quy3QstCwINC+0LHQu9Cw0LrQvtCyXHJcblxyXG4gICAgICAgIGlmIChjZW50ZXIgPT0gLTEpIHtcclxuICAgICAgICAgICAgY2VudGVyID0gYWxsQ2xvdWQubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0ID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBhbGxDbG91ZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0vL9GA0LXQtNCw0LrRgtC40YDRg9C10Lwg0LrQvtC10YTQuNGG0LjQtdC90YIg0YfRgtC+0LEg0L3QtSDQsdGL0Lsg0LLRi9GI0LUg0YfQtdC8INC60L7Qu9GC0YfQtdGB0YLQstC+INC+0LHQu9Cw0YfQutC+0LJcclxuICAgICAgICBpZiAobGVmdCA9PSAtMikge1xyXG4gICAgICAgICAgICBsZWZ0ID0gYWxsQ2xvdWQubGVuZ3RoIC0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0T3V0ID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxlZnRPdXQgPSBhbGxDbG91ZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVmdE91dCA9PSAtMikge1xyXG4gICAgICAgICAgICBsZWZ0T3V0ID0gYWxsQ2xvdWQubGVuZ3RoIC0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlZnRPdXQgPT0gLTMpIHtcclxuICAgICAgICAgICAgbGVmdE91dCA9IGFsbENsb3VkLmxlbmd0aCAtIDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUmlnaHRPdXQgPT0gYWxsQ2xvdWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIFJpZ2h0T3V0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFJpZ2h0T3V0ID09IGFsbENsb3VkLmxlbmd0aCArIDEpIHtcclxuICAgICAgICAgICAgUmlnaHRPdXQgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG90dGVkTGVmdC5jc3MoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICBkb3R0ZWRSaWdodC5jc3MoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICBkb3R0ZWRDZW50ZXIuY3NzKCdvcGFjaXR5JywgMCk7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YDQsNC30YDQtdGI0LXQvdC40LUg0LHQvtC70YzRiNC1IDc2OCcpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcSh0KS5jc3MoeydsZWZ0JzogJzc1JScsICdvcGFjaXR5JzogMX0pOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShSaWdodE91dCkuY3NzKHsnbGVmdCc6ICcxMDAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuY3NzKHsnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDF9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEobGVmdCkuY3NzKHsnbGVmdCc6ICcyNSUnLCAnb3BhY2l0eSc6IDF9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEobGVmdE91dCkuY3NzKHsnbGVmdCc6ICctMTAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9GA0LDQt9GA0LXRiNC10L3QuNC1INC80LXQvdGM0YjQtSA3NjgnKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEodCkuY3NzKHsndG9wJzogJzU1JScsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShSaWdodE91dCkuY3NzKHsndG9wJzogJzIwMCUnLCAnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDB9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoY2VudGVyKS5jc3Moeyd0b3AnOiAnMjAlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAxfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGxlZnQpLmNzcyh7J3RvcCc6ICctMjAlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAxfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGxlZnRPdXQpLmNzcyh7J3RvcCc6ICctMTAwJScsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ9C00LLQuNC20LXQvdC40LUg0LLQv9GA0LDQstC+IGxlZnRPdXQ6ICcgKyBsZWZ0T3V0ICsgJyBsZWZ0OiAnICsgbGVmdCArICcgY2VudGVyOiAnICsgY2VudGVyICsgJyB0OiAnICsgdCArICcgUmlnaHRPdXQ6ICcgKyBSaWdodE91dCk7XHJcblxyXG4gICAgICAgIGRvdHRlZExlZnQuc3RvcCh0cnVlKS5hbmltYXRlKHtvcGFjaXR5OiAxfSwgMjAwMCk7XHJcbiAgICAgICAgZG90dGVkUmlnaHQuc3RvcCh0cnVlKS5hbmltYXRlKHtvcGFjaXR5OiAxfSwgMjAwMCk7XHJcbiAgICAgICAgZG90dGVkQ2VudGVyLnN0b3AodHJ1ZSkuYW5pbWF0ZSh7b3BhY2l0eTogMX0sIDIwMDApO1xyXG5cclxuICAgICAgICAvLyBkb3R0ZWRMZWZ0LmNzcygnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgIC8vIGRvdHRlZFJpZ2h0LmNzcygnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgIC8vIGRvdHRlZENlbnRlci5jc3MoJ29wYWNpdHknLCAxKTtcclxuXHJcbiAgICAgICAgdC0tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXJyb3dMZWZ0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodCA9PSBhbGxDbG91ZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByaWdodE91dDEgPSB0ICsgMyxcclxuICAgICAgICAgICAgcmlnaHQxID0gdCArIDIsXHJcbiAgICAgICAgICAgIGNlbnRlcjEgPSB0ICsgMSxcclxuICAgICAgICAgICAgbGVmdDEgPSB0IC0gMSxcclxuICAgICAgICAgICAgbGVmdE91dDEgPSB0IC0gMjtcclxuXHJcbiAgICAgICAgaWYgKGxlZnQxID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxlZnQxID0gYWxsQ2xvdWQubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0T3V0MSA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZWZ0T3V0MSA9IGFsbENsb3VkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZWZ0T3V0MSA9PSAtMikge1xyXG4gICAgICAgICAgICBsZWZ0T3V0MSA9IGFsbENsb3VkLmxlbmd0aCAtIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2VudGVyMSA9PSBhbGxDbG91ZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2VudGVyMSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmlnaHQxID09IGFsbENsb3VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByaWdodDEgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHQxID09IGFsbENsb3VkLmxlbmd0aCArIDEpIHtcclxuICAgICAgICAgICAgcmlnaHQxID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJpZ2h0MSA9PSBhbGxDbG91ZC5sZW5ndGggKyAyKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0MSA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmlnaHRPdXQxID09IGFsbENsb3VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByaWdodE91dDEgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHRPdXQxID09IGFsbENsb3VkLmxlbmd0aCArIDEpIHtcclxuICAgICAgICAgICAgcmlnaHRPdXQxID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJpZ2h0T3V0MSA9PSBhbGxDbG91ZC5sZW5ndGggKyAyKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0T3V0MSA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodE91dDEgPT0gYWxsQ2xvdWQubGVuZ3RoICsgMykge1xyXG4gICAgICAgICAgICByaWdodE91dDEgPSAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG90dGVkTGVmdC5jc3MoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICBkb3R0ZWRSaWdodC5jc3MoJ29wYWNpdHknLCAwKTtcclxuICAgICAgICBkb3R0ZWRDZW50ZXIuY3NzKCdvcGFjaXR5JywgMCk7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YDQsNC30YDQtdGI0LXQvdC40LUg0LzQtdC90YzRiNC1IDc2OCcpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcSh0KS5jc3MoeydsZWZ0JzogJzI1JScsICdvcGFjaXR5JzogMX0pOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0MSkuY3NzKHsnbGVmdCc6ICctMTAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcjEpLmNzcyh7J2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAxfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHJpZ2h0MSkuY3NzKHsnbGVmdCc6ICc3NSUnLCAnb3BhY2l0eSc6IDF9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHRPdXQxKS5jc3MoeydsZWZ0JzogJzEwMCUnLCAnb3BhY2l0eSc6IDB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YDQsNC30YDQtdGI0LXQvdC40LUg0LzQtdC90YzRiNC1IDc2OCcpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcSh0KS5jc3Moeyd0b3AnOiAnLTIwJScsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0MSkuY3NzKHsndG9wJzogJy0xMDAlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcjEpLmNzcyh7J3RvcCc6ICcyMCUnLCAnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDF9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHQxKS5jc3Moeyd0b3AnOiAnNTUlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAxfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHJpZ2h0T3V0MSkuY3NzKHsndG9wJzogJzEwMCUnLCAnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQtNCy0LjQttC10L3QuNC1INCy0LvQtdCy0L4gbGVmdE91dDE6ICcgKyBsZWZ0T3V0MSArICcgbGVmdDE6ICcgKyBsZWZ0MSArICcgdDogJyArIHQgKyAnIGNlbnRlcjE6ICcgKyBjZW50ZXIxICsgJyByaWdodDE6ICcgKyByaWdodDEgKyAnIHJpZ2h0T3V0MTogJyArIHJpZ2h0T3V0MSk7XHJcblxyXG4gICAgICAgIGRvdHRlZExlZnQuc3RvcCh0cnVlKS5hbmltYXRlKHtvcGFjaXR5OiAxfSwgMjAwMCk7XHJcbiAgICAgICAgZG90dGVkUmlnaHQuc3RvcCh0cnVlKS5hbmltYXRlKHtvcGFjaXR5OiAxfSwgMjAwMCk7XHJcbiAgICAgICAgZG90dGVkQ2VudGVyLnN0b3AodHJ1ZSkuYW5pbWF0ZSh7b3BhY2l0eTogMX0sIDIwMDApO1xyXG5cclxuICAgICAgICB0Kys7XHJcbiAgICB9KTtcclxufSk7Il19
