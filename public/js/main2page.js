$(document).ready(function(){
    console.log('changhe header');//подключения меню на весь экран зеленое

    //переменные для перемены фона хэдер
    var    footer=$('.footer'),//блок футера
        header=$('.header'),//блок хедер
        headerLogo=$('.header_logo'),//картинка логотипа
        headButton=$('.header__coins_button'),//кнопка купить в шапке
        heightHeader=header.height(),
        topPage2=$('#2').offset().top-heightHeader;//начало верха второй страницы минус высота хедера

    $(document).on('scroll',function() {//функция для смены цвета хедер при скролле страниц
        var scrollTop = $(window).scrollTop();
        //эти условия срабатывают когда прокрутка опускается до нужного блока и беруться параметры из БД и применяются к нужному кружку
        if (scrollTop < topPage2) {//при прокрутке меняем цвет header и footer
            header.css('background', '#4AB7C7');
            headerLogo.attr('src', '../image/logovector.png');
            headButton.removeClass('color_blue');
        }
        if (scrollTop >= topPage2) {//при прокрутке меняем цвет header и footer
            header.css('background', '#eda223');
            headerLogo.attr('src', '../image/logoWhite.png');
            headButton.addClass('color_blue');
        }   
    });

});









$(document).ready(function(){

   $('#fullpage').fullpage({
				anchors: ['Заказать', 'Интересно'],
				//sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				css3: true,
				// navigation: true,
				// navigationPosition: 'right',
				// navigationTooltips: ['Главная', 'Информация'],
	   //меняем цвета хэдера
	   afterLoad: function (anchorLink, index) {//меняем цвета хэдера
		   //using index
		   var headerLogo=$('.header_logo'),//картинка логотипа
			   headButton=$('.header__coins_button');//кнопка купить в шапке
		   if (index == 1) {
			   headerLogo.attr('src','../image/logovector.png');
			   headButton.removeClass('color_blue');

		   }
		   if (index == 2) {
			   console.log('topPage2');
			   headerLogo.attr('src','../image/logoWhite.png');
			   headButton.addClass('color_blue'); 
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
$(document).ready(function(){
 console.log('connect slide blog2page');
    var arrowRight=$('.blogPage2_arrow-right'),//стрелочка вправо
        arrowLeft=$('.blogPage2_arrow-left'),//стрелочка влево

        allCloud=$('.blog2page_content_absoluteBlock'),//все облака
        cont=1;//порядковый номер

    arrowRight.on('click', function () {
        var center = cont - 1,
            left = cont - 2,
            leftOut = cont - 3,
            RightOut = cont + 1;

        if (cont < 0) {
            cont = allCloud.length - 1;
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


        if ($(window).width() > 768) {
            console.log('разрешение больше 768');
            allCloud.eq(cont).css({'left': '75%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(RightOut).css({'left': '200%', 'opacity': 0});
            allCloud.eq(center).css({'left': '50%', 'opacity': 1});
            allCloud.eq(left).css({'left': '25%', 'opacity': 1});
            allCloud.eq(leftOut).css({'left': '-100%', 'opacity': 0});
        } else {
            console.log('разрешение меньше 768');
            allCloud.eq(cont).css({'top': '100%', 'left': '50%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(RightOut).css({'top': '200%', 'left': '50%', 'opacity': 0});
            allCloud.eq(center).css({'top': '50%', 'left': '50%', 'opacity': 1});
            allCloud.eq(left).css({'top': '0', 'left': '50%', 'opacity': 1});
            allCloud.eq(leftOut).css({'top': '-100%', 'left': '50%', 'opacity': 0});
        }

        console.log('движение вправо leftOut: ' + leftOut + ' left: ' + left + ' center: ' + center + ' cont: ' + cont + ' RightOut: ' + RightOut);

        cont--;
    });

    arrowLeft.on('click', function () {
        if (cont == allCloud.length) {
            cont = 0;
        }
        var rightOut1 = cont + 3,
            right1 = cont + 2,
            center1 = cont + 1,
            left1 = cont - 1,
            leftOut1 = cont - 2;

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


        if ($(window).width() > 768) {
            console.log('разрешение меньше 768');
            allCloud.eq(cont).css({'left': '25%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(left1).css({'left': '-100%', 'opacity': 0});
            allCloud.eq(center1).css({'left': '50%', 'opacity': 1});
            allCloud.eq(right1).css({'left': '75%', 'opacity': 1});
            allCloud.eq(rightOut1).css({'left': '100%', 'opacity': 0});
        } else {
            console.log('разрешение меньше 768');
            allCloud.eq(cont).css({'top': '0', 'left': '50%', 'opacity': 1});//добавляем класс который переместит облако в нужное новое положение
            allCloud.eq(left1).css({'top': '-100%', 'left': '50%', 'opacity': 0});
            allCloud.eq(center1).css({'top': '50%', 'left': '50%', 'opacity': 1});
            allCloud.eq(right1).css({'top': '100%', 'left': '50%', 'opacity': 1});
            allCloud.eq(rightOut1).css({'top': '100%', 'left': '50%', 'opacity': 0});
        }

        console.log('движение влево leftOut1: ' + leftOut1 + ' left1: ' + left1 + ' t: ' + cont + ' center1: ' + center1 + ' right1: ' + right1 + ' rightOut1: ' + rightOut1);

        cont++;
    });
});



$(document).ready(function() {
    var inputEmail=$('.js_inputEmail'),
        validIcon=$('.validateIcon');

    inputEmail.keyup(function(){

        var email = inputEmail.val();

        if(email != 0)
        {
            if(isValidEmailAddress(email))
            {
                console.log('yes');
                validIcon.css({
                    "background-image": "url('../image/validYes.png')"
                });
            } else {
                console.log('no');
                validIcon.css({
                    "background-image": "url('../image/validNo.png')"
                });
            }
        } else {
            console.log('none');
            validIcon.css({
                "background-image": "none"
            });
        }

    });

});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.1
 */
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]" 
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),
                        range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
                        range.select());
                })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length,
                firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),
                            begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
                            end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
                            e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),
                            input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                                    p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),
                                tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),
                        clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
                        partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),
                    checkVal();
            });
        }
    });
});

$(document).ready(function(){
console.log('mask telephone');
    $(".js_phoneNumber").mask("+38(999) 999-9999");
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZUhlYWRlckNvbG9yLmpzIiwiZXhhbXBsZXMuanMiLCJqcXVlcnkuZnVsbFBhZ2UuanMiLCJzY3JvbGxvdmVyZmxvdy5qcyIsInNsaWRlQ2xvdWQuanMiLCJ2YWxpZGF0ZUVtYWlsLmpzIiwiX21hc2tGb3JQaG9uZS5qcyJdLCJuYW1lcyI6WyJpc1ZhbGlkRW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwicGF0dGVybiIsIlJlZ0V4cCIsInRlc3QiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJoZWFkZXJMb2dvIiwiaGVhZEJ1dHRvbiIsImhlaWdodEhlYWRlciIsImhlaWdodCIsInRvcFBhZ2UyIiwib2Zmc2V0IiwidG9wIiwib24iLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJjc3MiLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImZ1bGxwYWdlIiwiYW5jaG9ycyIsImNzczMiLCJhZnRlckxvYWQiLCJhbmNob3JMaW5rIiwiaW5kZXgiLCJnbG9iYWwiLCJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiTWF0aCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwialF1ZXJ5IiwidGhpcyIsInVuZGVmaW5lZCIsIldSQVBQRVIiLCJXUkFQUEVSX1NFTCIsIlNDUk9MTEFCTEUiLCJTQ1JPTExBQkxFX1NFTCIsIlJFU1BPTlNJVkUiLCJOT19UUkFOU0lUSU9OIiwiREVTVFJPWUVEIiwiRU5BQkxFRCIsIlZJRVdJTkdfUFJFRklYIiwiQUNUSVZFIiwiQUNUSVZFX1NFTCIsIkNPTVBMRVRFTFkiLCJDT01QTEVURUxZX1NFTCIsIlNFQ1RJT05fREVGQVVMVF9TRUwiLCJTRUNUSU9OIiwiU0VDVElPTl9TRUwiLCJTRUNUSU9OX0FDVElWRV9TRUwiLCJTRUNUSU9OX0ZJUlNUX1NFTCIsIlNFQ1RJT05fTEFTVF9TRUwiLCJUQUJMRV9DRUxMIiwiVEFCTEVfQ0VMTF9TRUwiLCJBVVRPX0hFSUdIVCIsIk5PUk1BTF9TQ1JPTEwiLCJTRUNUSU9OX05BViIsIlNFQ1RJT05fTkFWX1NFTCIsIlNFQ1RJT05fTkFWX1RPT0xUSVAiLCJTRUNUSU9OX05BVl9UT09MVElQX1NFTCIsIlNIT1dfQUNUSVZFX1RPT0xUSVAiLCJTTElERV9ERUZBVUxUX1NFTCIsIlNMSURFIiwiU0xJREVfU0VMIiwiU0xJREVfQUNUSVZFX1NFTCIsIlNMSURFU19XUkFQUEVSIiwiU0xJREVTX1dSQVBQRVJfU0VMIiwiU0xJREVTX0NPTlRBSU5FUiIsIlNMSURFU19DT05UQUlORVJfU0VMIiwiVEFCTEUiLCJTTElERVNfTkFWIiwiU0xJREVTX05BVl9TRUwiLCJTTElERVNfTkFWX0xJTktfU0VMIiwiU0xJREVTX0FSUk9XIiwiU0xJREVTX0FSUk9XX1NFTCIsIlNMSURFU19QUkVWIiwiU0xJREVTX1BSRVZfU0VMIiwiU0xJREVTX0FSUk9XX1BSRVYiLCJTTElERVNfQVJST1dfUFJFVl9TRUwiLCJTTElERVNfTkVYVCIsIlNMSURFU19ORVhUX1NFTCIsIlNMSURFU19BUlJPV19ORVhUIiwiU0xJREVTX0FSUk9XX05FWFRfU0VMIiwiJHdpbmRvdyIsIiRkb2N1bWVudCIsImlzY3JvbGxPcHRpb25zIiwic2Nyb2xsYmFycyIsIm1vdXNlV2hlZWwiLCJoaWRlU2Nyb2xsYmFycyIsImZhZGVTY3JvbGxiYXJzIiwiZGlzYWJsZU1vdXNlIiwiaW50ZXJhY3RpdmVTY3JvbGxiYXJzIiwiZm4iLCJvcHRpb25zIiwic2V0QXV0b1Njcm9sbGluZyIsInZhbHVlIiwidHlwZSIsInNldFZhcmlhYmxlU3RhdGUiLCJlbGVtZW50IiwiYXV0b1Njcm9sbGluZyIsInNjcm9sbEJhciIsIiRodG1sQm9keSIsIm92ZXJmbG93Iiwic2V0UmVjb3JkSGlzdG9yeSIsIm9yaWdpbmFscyIsInJlY29yZEhpc3RvcnkiLCJjb250YWluZXIiLCItbXMtdG91Y2gtYWN0aW9uIiwidG91Y2gtYWN0aW9uIiwibGVuZ3RoIiwic2lsZW50U2Nyb2xsIiwicG9zaXRpb24iLCJzZXRTY3JvbGxpbmdTcGVlZCIsImZhZGluZ0VmZmVjdCIsIkZQIiwidXBkYXRlIiwic2V0Rml0VG9TZWN0aW9uIiwic2V0TG9ja0FuY2hvcnMiLCJsb2NrQW5jaG9ycyIsInNldE1vdXNlV2hlZWxTY3JvbGxpbmciLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImFkZE1pZGRsZVdoZWVsSGFuZGxlciIsInJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyIiwicmVtb3ZlTWlkZGxlV2hlZWxIYW5kbGVyIiwic2V0QWxsb3dTY3JvbGxpbmciLCJkaXJlY3Rpb25zIiwicmVwbGFjZSIsInNwbGl0IiwiZWFjaCIsImRpcmVjdGlvbiIsInNldElzU2Nyb2xsQWxsb3dlZCIsImFkZFRvdWNoSGFuZGxlciIsInJlbW92ZVRvdWNoSGFuZGxlciIsInNldEtleWJvYXJkU2Nyb2xsaW5nIiwia2V5Ym9hcmRTY3JvbGxpbmciLCJtb3ZlU2VjdGlvblVwIiwicHJldiIsImxvb3BUb3AiLCJjb250aW51b3VzVmVydGljYWwiLCJsYXN0Iiwic2Nyb2xsUGFnZSIsIm1vdmVTZWN0aW9uRG93biIsIm5leHQiLCJsb29wQm90dG9tIiwiZmlyc3QiLCJzaWxlbnRNb3ZlVG8iLCJzZWN0aW9uQW5jaG9yIiwic2xpZGVBbmNob3IiLCJtb3ZlVG8iLCJzY3JvbGxpbmdTcGVlZCIsImRlc3RpbnkiLCJnZXRTZWN0aW9uQnlBbmNob3IiLCJzY3JvbGxQYWdlQW5kU2xpZGUiLCJtb3ZlU2xpZGVSaWdodCIsInNlY3Rpb24iLCJtb3ZlU2xpZGUiLCJtb3ZlU2xpZGVMZWZ0IiwicmVCdWlsZCIsInJlc2l6aW5nIiwiaGFzQ2xhc3MiLCJpc1Jlc2l6aW5nIiwid2luZG93c0hlaWdodCIsInNsaWRlc1dyYXAiLCJmaW5kIiwic2xpZGVzIiwidmVydGljYWxDZW50ZXJlZCIsImdldFRhYmxlSGVpZ2h0Iiwic2Nyb2xsT3ZlcmZsb3ciLCJjcmVhdGVTY3JvbGxCYXIiLCJsYW5kc2NhcGVTY3JvbGwiLCJhY3RpdmVTZWN0aW9uIiwic2VjdGlvbkluZGV4IiwiaXNGdW5jdGlvbiIsImFmdGVyUmVzaXplIiwiY2FsbCIsImFmdGVyUmVCdWlsZCIsInNldFJlc3BvbnNpdmUiLCJhY3RpdmUiLCJpc1Jlc3BvbnNpdmUiLCIkYm9keSIsImhpZGUiLCJhZnRlclJlc3BvbnNpdmUiLCJyZXNwb25zaXZlU2xpZGVzIiwidG9TZWN0aW9ucyIsInNob3ciLCJ0b1NsaWRlcyIsImdldEZ1bGxwYWdlRGF0YSIsImludGVybmFscyIsImdldFhtb3ZlbWVudCIsInJlbW92ZUFuaW1hdGlvbiIsImdldFRyYW5zZm9ybXMiLCJsYXp5TG9hZCIsImFkZEFuaW1hdGlvbiIsInBlcmZvcm1Ib3Jpem9udGFsTW92ZSIsInNpbGVudExhbmRzY2FwZVNjcm9sbCIsImtlZXBTbGlkZXNQb3NpdGlvbiIsInN0eWxlU2xpZGVzIiwiaW5pdCIsInN1cHBvcnQzZCIsImh5YnJpZCIsInNldE9wdGlvbnNGcm9tRE9NIiwicHJlcGFyZURvbSIsImFjdGl2ZVNsaWRlIiwicmVzcG9uc2l2ZSIsInNldEJvZHlDbGFzcyIsInJlYWR5U3RhdGUiLCJzY3JvbGxUb0FuY2hvciIsImJpbmRFdmVudHMiLCJzY3JvbGxIYW5kbGVyIiwiaGFzaENoYW5nZUhhbmRsZXIiLCJibHVyIiwiYmx1ckhhbmRsZXIiLCJyZXNpemUiLCJyZXNpemVIYW5kbGVyIiwia2V5ZG93biIsImtleWRvd25IYW5kbGVyIiwia2V5dXAiLCJrZXlVcEhhbmRsZXIiLCJzZWN0aW9uQnVsbGV0SGFuZGxlciIsInNsaWRlQnVsbGV0SGFuZGxlciIsInRvb2x0aXBUZXh0SGFuZGxlciIsInNsaWRlQXJyb3dIYW5kbGVyIiwibm9ybWFsU2Nyb2xsRWxlbWVudHMiLCJsb2FkRXh0ZW5zaW9uIiwiaW50ZXJuYWxOYW1lIiwiZXh0ZXJuYWxOYW1lIiwic2VjdGlvbnMiLCJzZWN0aW9uU2VsZWN0b3IiLCJmaWx0ZXIiLCJtYXAiLCJkYXRhIiwidG9TdHJpbmciLCJnZXQiLCJuYXZpZ2F0aW9uVG9vbHRpcHMiLCJhZGRJbnRlcm5hbFNlbGVjdG9ycyIsIm51bVNsaWRlcyIsInN0eWxlU2VjdGlvbiIsInN0eWxlTWVudSIsImFkZFRhYmxlQ2xhc3MiLCJmaXhlZEVsZW1lbnRzIiwiYXBwZW5kVG8iLCJuYXZpZ2F0aW9uIiwiYWRkVmVydGljYWxOYXZpZ2F0aW9uIiwiZW5hYmxlWW91dHViZUFQSSIsImVuYWJsZVZpZGVtb0FQSSIsImFwcGx5IiwiY3JlYXRlU2Nyb2xsQmFySGFuZGxlciIsImFmdGVyUmVuZGVyQWN0aW9ucyIsInNsaWRlcldpZHRoIiwic2xpZGVXaWR0aCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwiY29udHJvbEFycm93cyIsImNyZWF0ZVNsaWRlQXJyb3dzIiwic2xpZGVzTmF2aWdhdGlvbiIsImFkZFNsaWRlc05hdmlnYXRpb24iLCJzdGFydGluZ1NsaWRlIiwiZXEiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInNlY3Rpb25zQ29sb3IiLCJhY3RpdmF0ZU1lbnVBbmROYXYiLCJtZW51IiwiY2xvc2VzdCIsInNsaWRlU2VsZWN0b3IiLCJhZnRlciIsImNvbnRyb2xBcnJvd0NvbG9yIiwibG9vcEhvcml6b250YWwiLCJhcHBlbmQiLCJuYXYiLCJzaG93QWN0aXZlVG9vbHRpcCIsIm5hdmlnYXRpb25Qb3NpdGlvbiIsImkiLCJsaW5rIiwibGkiLCJ0b29sdGlwIiwiYWRkVVJMUGFyYW0iLCJuZXdQYXJhbSIsIm9yaWdpbmFsU3JjIiwiZ2V0VXJsUGFyYW1TaWduIiwidXJsIiwic2Nyb2xsT3ZlcmZsb3dIYW5kbGVyIiwiYWZ0ZXJSZW5kZXIiLCJwbGF5TWVkaWEiLCJjdXJyZW50U2VjdGlvbiIsImN1cnJlbnRTY3JvbGwiLCJzY3JvbGxEaXJlY3Rpb24iLCJnZXRTY3JvbGxEaXJlY3Rpb24iLCJ2aXNpYmxlU2VjdGlvbkluZGV4Iiwic2NyZWVuX21pZCIsImlzQXRCb3R0b20iLCJxdWVyeVNlbGVjdG9yQWxsIiwib2Zmc2V0VG9wIiwiaXNDb21wbGV0ZWx5SW5WaWV3UG9ydCIsInNpYmxpbmdzIiwiaXNTY3JvbGxpbmciLCJsZWF2aW5nU2VjdGlvbiIsImxlYXZpbmdTZWN0aW9uSW5kZXgiLCJ5TW92ZW1lbnQiLCJnZXRZbW92ZW1lbnQiLCJzbGlkZUFuY2hvckxpbmsiLCJzbGlkZUluZGV4IiwiY2FuU2Nyb2xsIiwib25MZWF2ZSIsInN0b3BNZWRpYSIsImxhc3RTY3JvbGxlZERlc3RpbnkiLCJzZXRTdGF0ZSIsImNsZWFyVGltZW91dCIsInNjcm9sbElkIiwic2V0VGltZW91dCIsImZpdFRvU2VjdGlvbiIsInNjcm9sbElkMiIsImlzIiwiZml0VG9TZWN0aW9uRGVsYXkiLCJtb3ZlbWVudCIsImJvdHRvbSIsImxhc3RTY3JvbGwiLCJwcmV2aW91c0Rlc3RUb3AiLCJzY3JvbGxpbmciLCJzY3JvbGxhYmxlIiwiaXNTY3JvbGxBbGxvd2VkIiwibSIsImNoZWNrIiwic2Nyb2xsU2VjdGlvbiIsInNjcm9sbEhvcml6b250YWxseSIsImdldFNjcm9sbFNlY3Rpb24iLCJpc1Njcm9sbGVkIiwidG91Y2hNb3ZlSGFuZGxlciIsImV2ZW50IiwiZSIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQiLCJpc1JlYWxseVRvdWNoIiwicHJldmVudERlZmF1bHQiLCJzbGlkZU1vdmluZyIsInRvdWNoRXZlbnRzIiwiZ2V0RXZlbnRzUGFnZSIsInRvdWNoRW5kWSIsInkiLCJ0b3VjaEVuZFgiLCJ4IiwiYWJzIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsIm91dGVyV2lkdGgiLCJ0b3VjaFNlbnNpdGl2aXR5IiwicmlnaHQiLCJsZWZ0IiwiZWwiLCJob3AiLCJub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQiLCJwb2ludGVyVHlwZSIsInRvdWNoU3RhcnRIYW5kbGVyIiwic3RvcCIsImdldEF2ZXJhZ2UiLCJlbGVtZW50cyIsIm51bWJlciIsInN1bSIsImxhc3RFbGVtZW50cyIsInNsaWNlIiwibWF4IiwiY2VpbCIsIk1vdXNlV2hlZWxIYW5kbGVyIiwiY3VyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiaXNOb3JtYWxTY3JvbGwiLCJjb250cm9sUHJlc3NlZCIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJkZXRhaWwiLCJkZWx0YSIsIm1pbiIsImhvcml6b250YWxEZXRlY3Rpb24iLCJ3aGVlbERlbHRhWCIsImRlbHRhWCIsImlzU2Nyb2xsaW5nVmVydGljYWxseSIsInNjcm9sbGluZ3MiLCJzaGlmdCIsInB1c2giLCJyZXR1cm5WYWx1ZSIsInRpbWVEaWZmIiwicHJldlRpbWUiLCJhdmVyYWdlRW5kIiwiYXZlcmFnZU1pZGRsZSIsImlzQWNjZWxlcmF0aW5nIiwiY3VycmVudFNsaWRlIiwiZ2V0RGVzdGluYXRpb25Qb3NpdGlvbiIsImVsZW1Qb3NpdGlvbiIsImlzU2Nyb2xsaW5nRG93biIsInNlY3Rpb25Cb3R0b20iLCJvdXRlckhlaWdodCIsImJpZ1NlY3Rpb25zRGVzdGluYXRpb24iLCJjYWxsYmFjayIsImlzTW92ZW1lbnRVcCIsImR0b3AiLCJ2IiwibG9jYWxJc1Jlc2l6aW5nIiwiY3JlYXRlSW5maW5pdGVTZWN0aW9ucyIsInBlcmZvcm1Nb3ZlbWVudCIsInRyYW5zbGF0ZTNkIiwidHJhbnNmb3JtQ29udGFpbmVyIiwiYWZ0ZXJTZWN0aW9uTG9hZHNJZCIsImFmdGVyU2VjdGlvbkxvYWRzIiwic2Nyb2xsU2V0dGluZ3MiLCJnZXRTY3JvbGxTZXR0aW5ncyIsImFuaW1hdGUiLCJlYXNpbmciLCJwcm9taXNlIiwiZG9uZSIsInNjcm9sbCIsImJlZm9yZSIsIm5leHRBbGwiLCJwcmV2QWxsIiwicmV2ZXJzZSIsIndyYXBBcm91bmRFbGVtZW50cyIsImNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlciIsInJlc2V0U2xpZGVycyIsImdldFNsaWRlT3JTZWN0aW9uIiwicmVtb3ZlQXR0ciIsImxvYWQiLCJoYXNBdHRyaWJ1dGUiLCJwbGF5IiwicGxheVlvdXR1YmUiLCJvbmxvYWQiLCJjb250ZW50V2luZG93IiwicG9zdE1lc3NhZ2UiLCJwYXVzZSIsInNsaWRlIiwibG9jYXRpb24iLCJoYXNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYW5pbWF0ZUFuY2hvciIsImlzRmlyc3RTbGlkZU1vdmUiLCJpc0ZpcnN0U2Nyb2xsTW92ZSIsImxhc3RTY3JvbGxlZFNsaWRlIiwia2V5ZG93bklkIiwiYWN0aXZlRWxlbWVudCIsImtleUNvZGUiLCJ3aGljaCIsImtleUNvbnRyb2xzIiwiaW5BcnJheSIsImN0cmxLZXkiLCJvbmtleWRvd24iLCJ0cmlnZ2VyIiwiaXNXaW5kb3dGb2N1c2VkIiwibW91c2VEb3duSGFuZGxlciIsIm9sZFBhZ2VZIiwicGFnZVkiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJvZmYiLCJzaGlmdFByZXNzZWQiLCJzaGlmdEtleSIsImsiLCJ1cCIsImRvd24iLCJkZXN0aW55UG9zIiwic2xpZGVzTmF2IiwiZ2V0QW5jaG9yIiwicHJldlNsaWRlIiwicHJldlNsaWRlSW5kZXgiLCJ4TW92ZW1lbnQiLCJvblNsaWRlTGVhdmUiLCJ0b2dnbGUiLCJjb250aW51b3VzSG9yaXpvbnRhbCIsImludGVybG9ja2VkU2xpZGVzIiwiYWZ0ZXJTbGlkZUxvYWRzIiwiYWN0aXZlU2xpZGVzTmF2aWdhdGlvbiIsImFmdGVyU2xpZGVMb2FkIiwiZmlyZUNhbGxiYWNrIiwicm91bmQiLCJhZnRlclNsaWRlTG9hZHNJZCIsInNjcm9sbExlZnQiLCJpc1RvdWNoRGV2aWNlIiwiY3VycmVudEhlaWdodCIsInByZXZpb3VzSGVpZ2h0IiwicmVzaXplSWQiLCJ3aWR0aExpbWl0IiwicmVzcG9uc2l2ZVdpZHRoIiwiaGVpZ2h0TGltaXQiLCJyZXNwb25zaXZlSGVpZ2h0IiwiaXNCcmVha2luZ1BvaW50V2lkdGgiLCJpc0JyZWFraW5nUG9pbnRIZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZWFzaW5nY3NzMyIsIi13ZWJraXQtdHJhbnNpdGlvbiIsImFjdGl2YXRlTmF2RG90cyIsIm5hbWUiLCJhY3RpdmF0ZU1lbnVFbGVtZW50IiwiYW5jaG9yIiwiZnJvbUluZGV4IiwidG9JbmRleCIsImNvbnRlbnRIZWlnaHQiLCJ3cmFwQ29udGVudCIsInNjcm9sbEhlaWdodCIsInBhcnNlSW50Iiwid3JhcElubmVyIiwiY3JlYXRlIiwicmVtb3ZlIiwic2VjdGlvbkhlaWdodCIsInBhZGRpbmdzIiwiYW5pbWF0ZWQiLCJnZXRTbGlkZUJ5QW5jaG9yIiwic2Nyb2xsU2xpZGVyIiwic2xpZGVzTmF2UG9zaXRpb24iLCJ3aWR0aCIsInNlY3Rpb25IYXNoIiwic2V0VXJsSGFzaCIsImlzVG91Y2giLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiYmFzZVVybCIsImhyZWYiLCJ0ZXh0IiwiU3RyaW5nIiwiY2xhc3NSZSIsImNsYXNzTmFtZSIsImhhczNkIiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybXMiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJNb3pUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJib2R5IiwiaW5zZXJ0QmVmb3JlIiwidCIsInN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJyZW1vdmVDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJfYWRkRXZlbnRMaXN0ZW5lciIsInByZWZpeCIsInN1cHBvcnQiLCJvbm1vdXNld2hlZWwiLCJNU1BvaW50ZXIiLCJnZXRNU1BvaW50ZXIiLCJtb3ZlIiwicG9pbnRlciIsIlBvaW50ZXJFdmVudCIsImV2ZW50cyIsInBhZ2VYIiwidG91Y2hlcyIsIm5vQ2FsbGJhY2tzIiwiLXdlYmtpdC10cmFuc2Zvcm0iLCItbW96LXRyYW5zZm9ybSIsIi1tcy10cmFuc2Zvcm0iLCJkZXN0cm95IiwiYWxsIiwiZGVzdHJveVN0cnVjdHVyZSIsImJhY2tncm91bmQtY29sb3IiLCJwYWRkaW5nIiwiaW5kZXhPZiIsInJlcGxhY2VXaXRoIiwiY2hpbGROb2RlcyIsInVzZWRTZWxlY3RvcnMiLCJ2YXJpYWJsZSIsImRpc3BsYXlXYXJuaW5ncyIsInNob3dFcnJvciIsIm5hbWVBdHRyIiwidG9Mb3dlckNhc2UiLCJpZEF0dHIiLCJleHRlbmQiLCJpc2Nyb2xsSGFuZGxlciIsInNjcm9sbE92ZXJmbG93T3B0aW9ucyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwibXNNYXhUb3VjaFBvaW50cyIsImNsaWNrIiwiZWFzZUluT3V0Q3ViaWMiLCJiIiwiYyIsImQiLCJJU2Nyb2xsIiwicHJvdG90eXBlIiwid2hlZWxPbiIsIndyYXBwZXIiLCJ3aGVlbE9mZiIsInJlZnJlc2hJZCIsImlTY3JvbGxJbnN0YW5jZXMiLCJzY3JvbGxlciIsIiR0aGlzIiwiaVNjcm9sbEluc3RhbmNlIiwiaW5uZXJIZWlnaHQiLCJjaGlsZHJlbiIsInVud3JhcCIsInJlZnJlc2giLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsZXJTdHlsZSIsInJlc2l6ZVNjcm9sbGJhcnMiLCJtb3VzZVdoZWVsU3BlZWQiLCJzbmFwVGhyZXNob2xkIiwiZGlzYWJsZVBvaW50ZXIiLCJ1dGlscyIsImhhc1BvaW50ZXIiLCJkaXNhYmxlVG91Y2giLCJoYXNUb3VjaCIsInN0YXJ0WCIsInN0YXJ0WSIsInNjcm9sbFkiLCJkaXJlY3Rpb25Mb2NrVGhyZXNob2xkIiwibW9tZW50dW0iLCJib3VuY2UiLCJib3VuY2VUaW1lIiwiYm91bmNlRWFzaW5nIiwicHJldmVudERlZmF1bHRFeGNlcHRpb24iLCJ0YWdOYW1lIiwiSFdDb21wb3NpdGluZyIsInVzZVRyYW5zaXRpb24iLCJ1c2VUcmFuc2Zvcm0iLCJiaW5kVG9XcmFwcGVyIiwib25tb3VzZWRvd24iLCJ0cmFuc2xhdGVaIiwiaGFzUGVyc3BlY3RpdmUiLCJoYXNUcmFuc2l0aW9uIiwiaGFzVHJhbnNmb3JtIiwiZXZlbnRQYXNzdGhyb3VnaCIsInNjcm9sbFgiLCJmcmVlU2Nyb2xsIiwiZWFzZSIsImNpcmN1bGFyIiwicmVzaXplUG9sbGluZyIsInRhcCIsInNocmlua1Njcm9sbGJhcnMiLCJpbnZlcnRXaGVlbERpcmVjdGlvbiIsImRpcmVjdGlvblgiLCJkaXJlY3Rpb25ZIiwiX2V2ZW50cyIsIl9pbml0Iiwic2Nyb2xsVG8iLCJlbmFibGUiLCJjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyIiwiaW50ZXJhY3RpdmUiLCJzY3JvbGxiYXIiLCJpbmRpY2F0b3IiLCJjc3NUZXh0IiwicG9pbnRlckV2ZW50cyIsImFwcGVuZENoaWxkIiwiSW5kaWNhdG9yIiwid3JhcHBlclN0eWxlIiwiaW5kaWNhdG9yU3R5bGUiLCJsaXN0ZW5YIiwibGlzdGVuWSIsImRlZmF1bHRTY3JvbGxiYXJzIiwic2hyaW5rIiwiZmFkZSIsInNwZWVkUmF0aW9YIiwic3BlZWRSYXRpb1kiLCJzaXplUmF0aW9YIiwic2l6ZVJhdGlvWSIsIm1heFBvc1giLCJtYXhQb3NZIiwiYWRkRXZlbnQiLCJwcmVmaXhQb2ludGVyRXZlbnQiLCJkdXJhdGlvblByb3AiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJpc0JhZEFuZHJvaWQiLCJzZWxmIiwickFGIiwib3BhY2l0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9wcmVmaXhTdHlsZSIsIl92ZW5kb3IiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsIm1lIiwiX2VsZW1lbnRTdHlsZSIsInZlbmRvcnMiLCJsIiwibm93Iiwib2JqIiwiY2FwdHVyZSIsInJlbW92ZUV2ZW50IiwicG9pbnRlckV2ZW50IiwiTVNQb2ludGVyRXZlbnQiLCJjdXJyZW50Iiwic3RhcnQiLCJ0aW1lIiwibG93ZXJNYXJnaW4iLCJ3cmFwcGVyU2l6ZSIsImRlY2VsZXJhdGlvbiIsImRlc3RpbmF0aW9uIiwiZHVyYXRpb24iLCJkaXN0YW5jZSIsInNwZWVkIiwiX3RyYW5zZm9ybSIsImFwcFZlcnNpb24iLCJzYWZhcmlWZXJzaW9uIiwicGFyc2VGbG9hdCIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zZm9ybU9yaWdpbiIsInJlIiwibmV3Y2xhc3MiLCJqb2luIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsImV4Y2VwdGlvbnMiLCJldmVudFR5cGUiLCJ0b3VjaHN0YXJ0IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJtb3VzZWRvd24iLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwicG9pbnRlcmRvd24iLCJwb2ludGVybW92ZSIsInBvaW50ZXJ1cCIsIk1TUG9pbnRlckRvd24iLCJNU1BvaW50ZXJNb3ZlIiwiTVNQb2ludGVyVXAiLCJxdWFkcmF0aWMiLCJzcXJ0IiwiYmFjayIsImVsYXN0aWMiLCJmIiwicG93Iiwic2luIiwiUEkiLCJldmVudE5hbWUiLCJldiIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIk1vdXNlRXZlbnQiLCJ2aWV3Iiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImFsdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJyZWxhdGVkVGFyZ2V0IiwiX2NvbnN0cnVjdGVkIiwidmVyc2lvbiIsIl9pbml0RXZlbnRzIiwiaW5kaWNhdG9ycyIsIl9pbml0SW5kaWNhdG9ycyIsIl9pbml0V2hlZWwiLCJzbmFwIiwiX2luaXRTbmFwIiwia2V5QmluZGluZ3MiLCJfaW5pdEtleXMiLCJyZXNpemVUaW1lb3V0IiwiX2V4ZWNFdmVudCIsIl90cmFuc2l0aW9uRW5kIiwiaXNJblRyYW5zaXRpb24iLCJfdHJhbnNpdGlvblRpbWUiLCJyZXNldFBvc2l0aW9uIiwiX3N0YXJ0IiwiZW5hYmxlZCIsImluaXRpYXRlZCIsInBvcyIsInBvaW50IiwibW92ZWQiLCJkaXN0WCIsImRpc3RZIiwiZGlyZWN0aW9uTG9ja2VkIiwic3RhcnRUaW1lIiwiZ2V0Q29tcHV0ZWRQb3NpdGlvbiIsIl90cmFuc2xhdGUiLCJpc0FuaW1hdGluZyIsImFic1N0YXJ0WCIsImFic1N0YXJ0WSIsInBvaW50WCIsInBvaW50WSIsIl9tb3ZlIiwibmV3WCIsIm5ld1kiLCJhYnNEaXN0WCIsImFic0Rpc3RZIiwidGltZXN0YW1wIiwiZW5kVGltZSIsImhhc0hvcml6b250YWxTY3JvbGwiLCJoYXNWZXJ0aWNhbFNjcm9sbCIsIm1heFNjcm9sbFgiLCJtYXhTY3JvbGxZIiwiX2VuZCIsIm1vbWVudHVtWCIsIm1vbWVudHVtWSIsImNoYW5nZWRUb3VjaGVzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZmxpY2siLCJ3cmFwcGVyV2lkdGgiLCJ3cmFwcGVySGVpZ2h0IiwiX25lYXJlc3RTbmFwIiwiY3VycmVudFBhZ2UiLCJzbmFwU3BlZWQiLCJfcmVzaXplIiwidGhhdCIsImRpc2FibGUiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbGVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcm9sbGVySGVpZ2h0Iiwid3JhcHBlck9mZnNldCIsInNwbGljZSIsImFyZ3VtZW50cyIsInNjcm9sbEJ5IiwidHJhbnNpdGlvblR5cGUiLCJfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwiX2FuaW1hdGUiLCJzY3JvbGxUb0VsZW1lbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm5vZGVUeXBlIiwidHJhbnNpdGlvblRpbWUiLCJ1cGRhdGVQb3NpdGlvbiIsIm1hdHJpeCIsIl9pbmRpY2F0b3JzTWFwIiwiY3VzdG9tU3R5bGUiLCJjb25jYXQiLCJ3aGVlbFRpbWVvdXQiLCJfd2hlZWwiLCJ3aGVlbERlbHRhWSIsImRlbHRhTW9kZSIsImdvVG9QYWdlIiwibiIsImN4IiwiY3kiLCJzdGVwWCIsInNuYXBTdGVwWCIsInN0ZXBZIiwic25hcFN0ZXBZIiwicGFnZXMiLCJzbmFwVGhyZXNob2xkWCIsInNuYXBUaHJlc2hvbGRZIiwicG9zWCIsInBvc1kiLCJrZXlzIiwicGFnZVVwIiwicGFnZURvd24iLCJlbmQiLCJob21lIiwiY2hhckNvZGVBdCIsIl9rZXkiLCJrZXlUaW1lIiwiYWNjZWxlcmF0aW9uIiwia2V5QWNjZWxlcmF0aW9uIiwiZGVzdFgiLCJkZXN0WSIsImVhc2luZ0ZuIiwic3RlcCIsImRlc3RUaW1lIiwiaGFuZGxlRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmYWRlVGltZW91dCIsInBhcmVudE5vZGUiLCJsYXN0UG9pbnRYIiwibGFzdFBvaW50WSIsIl9wb3MiLCJkaXNwbGF5IiwiaW5kaWNhdG9yV2lkdGgiLCJtaW5Cb3VuZGFyeVgiLCJtYXhCb3VuZGFyeVgiLCJpbmRpY2F0b3JIZWlnaHQiLCJtaW5Cb3VuZGFyeVkiLCJtYXhCb3VuZGFyeVkiLCJpZ25vcmVCb3VuZGFyaWVzIiwidmFsIiwiaG9sZCIsInZpc2libGUiLCJkZWxheSIsImJpbmQiLCJhcnJvd1JpZ2h0IiwiYXJyb3dMZWZ0IiwiYWxsQ2xvdWQiLCJjb250IiwiY2VudGVyIiwibGVmdE91dCIsIlJpZ2h0T3V0IiwicmlnaHRPdXQxIiwicmlnaHQxIiwiY2VudGVyMSIsImxlZnQxIiwibGVmdE91dDEiLCJpbnB1dEVtYWlsIiwidmFsaWRJY29uIiwiZW1haWwiLCJiYWNrZ3JvdW5kLWltYWdlIiwiY2FyZXRUaW1lb3V0SWQiLCJ1YSIsImlQaG9uZSIsImNocm9tZSIsImFuZHJvaWQiLCJtYXNrIiwiZGVmaW5pdGlvbnMiLCI5IiwiYSIsIioiLCJhdXRvY2xlYXIiLCJkYXRhTmFtZSIsInBsYWNlaG9sZGVyIiwiY2FyZXQiLCJiZWdpbiIsInJhbmdlIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJjcmVhdGVUZXh0UmFuZ2UiLCJjb2xsYXBzZSIsIm1vdmVFbmQiLCJtb3ZlU3RhcnQiLCJzZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNlbGVjdGlvbiIsImNyZWF0ZVJhbmdlIiwiZHVwbGljYXRlIiwidW5tYXNrIiwic2V0dGluZ3MiLCJpbnB1dCIsImRlZnMiLCJ0ZXN0cyIsInBhcnRpYWxQb3NpdGlvbiIsImZpcnN0Tm9uTWFza1BvcyIsImxhc3RSZXF1aXJlZE5vbk1hc2tQb3MiLCJsZW4iLCJvbGRWYWwiLCJjb21wbGV0ZWQiLCJ0cnlGaXJlQ29tcGxldGVkIiwiYnVmZmVyIiwiZ2V0UGxhY2Vob2xkZXIiLCJzZWVrTmV4dCIsInNlZWtQcmV2Iiwic2hpZnRMIiwiaiIsIndyaXRlQnVmZmVyIiwic2hpZnRSIiwiYW5kcm9pZElucHV0RXZlbnQiLCJjdXJWYWwiLCJjaGVja1ZhbCIsImJsdXJFdmVudCIsImZvY3VzVGV4dCIsImNoYW5nZSIsImtleWRvd25FdmVudCIsInByb3AiLCJjbGVhckJ1ZmZlciIsImtleXByZXNzRXZlbnQiLCJwIiwiZnJvbUNoYXJDb2RlIiwicHJveHkiLCJhbGxvdyIsImxhc3RNYXRjaCIsImRlZmF1bHRCdWZmZXIiLCJzdWJzdHJpbmciLCJvbmUiLCJyZW1vdmVEYXRhIl0sIm1hcHBpbmdzIjoiQUFrQ0EsUUFBQUEscUJBQUFDLEdBQ0EsR0FBQUMsR0FBQSxHQUFBQyxRQUFBLGtTQUNBLE9BQUFELEdBQUFFLEtBQUFILEdDcENBSSxFQUFBQyxVQUFBQyxNQUFBLFdBQ0FDLFFBQUFDLElBQUEsaUJBR0EsSUFDQUMsSUFEQUwsRUFBQSxXQUNBQSxFQUFBLFlBQ0FNLEVBQUFOLEVBQUEsZ0JBQ0FPLEVBQUFQLEVBQUEseUJBQ0FRLEVBQUFILEVBQUFJLFNBQ0FDLEVBQUFWLEVBQUEsTUFBQVcsU0FBQUMsSUFBQUosQ0FFQVIsR0FBQUMsVUFBQVksR0FBQSxTQUFBLFdBQ0EsR0FBQUMsR0FBQWQsRUFBQWUsUUFBQUQsV0FFQUEsR0FBQUosSUFDQUwsRUFBQVcsSUFBQSxhQUFBLFdBQ0FWLEVBQUFXLEtBQUEsTUFBQSwyQkFDQVYsRUFBQVcsWUFBQSxlQUVBSixHQUFBSixJQUNBTCxFQUFBVyxJQUFBLGFBQUEsV0FDQVYsRUFBQVcsS0FBQSxNQUFBLDBCQUNBVixFQUFBWSxTQUFBLG1CQ3RCQW5CLEVBQUFDLFVBQUFDLE1BQUEsV0FFQUYsRUFBQSxhQUFBb0IsVUFD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eUIsRUFBQXpkLElBQUEsY0FBQTViLEdBQUEsYUFBQXU2QixHQUNBRSxXQU1BdDdCLEVBQUFDLFVBQUFDLE1BQUEsV0FDQUMsUUFBQUMsSUFBQSxrQkFDQUosRUFBQSxtQkFBQTA0QixLQUFBIiwiZmlsZSI6Im1haW4ycGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhbmdoZSBoZWFkZXInKTsvL9C/0L7QtNC60LvRjtGH0LXQvdC40Y8g0LzQtdC90Y4g0L3QsCDQstC10YHRjCDRjdC60YDQsNC9INC30LXQu9C10L3QvtC1XHJcblxyXG4gICAgLy/Qv9C10YDQtdC80LXQvdC90YvQtSDQtNC70Y8g0L/QtdGA0LXQvNC10L3RiyDRhNC+0L3QsCDRhdGN0LTQtdGAXHJcbiAgICB2YXIgICAgZm9vdGVyPSQoJy5mb290ZXInKSwvL9Cx0LvQvtC6INGE0YPRgtC10YDQsFxyXG4gICAgICAgIGhlYWRlcj0kKCcuaGVhZGVyJyksLy/QsdC70L7QuiDRhdC10LTQtdGAXHJcbiAgICAgICAgaGVhZGVyTG9nbz0kKCcuaGVhZGVyX2xvZ28nKSwvL9C60LDRgNGC0LjQvdC60LAg0LvQvtCz0L7RgtC40L/QsFxyXG4gICAgICAgIGhlYWRCdXR0b249JCgnLmhlYWRlcl9fY29pbnNfYnV0dG9uJyksLy/QutC90L7Qv9C60LAg0LrRg9C/0LjRgtGMINCyINGI0LDQv9C60LVcclxuICAgICAgICBoZWlnaHRIZWFkZXI9aGVhZGVyLmhlaWdodCgpLFxyXG4gICAgICAgIHRvcFBhZ2UyPSQoJyMyJykub2Zmc2V0KCkudG9wLWhlaWdodEhlYWRlcjsvL9C90LDRh9Cw0LvQviDQstC10YDRhdCwINCy0YLQvtGA0L7QuSDRgdGC0YDQsNC90LjRhtGLINC80LjQvdGD0YEg0LLRi9GB0L7RgtCwINGF0LXQtNC10YDQsFxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCkgey8v0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LzQtdC90Ysg0YbQstC10YLQsCDRhdC10LTQtdGAINC/0YDQuCDRgdC60YDQvtC70LvQtSDRgdGC0YDQsNC90LjRhlxyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgLy/RjdGC0Lgg0YPRgdC70L7QstC40Y8g0YHRgNCw0LHQsNGC0YvQstCw0Y7RgiDQutC+0LPQtNCwINC/0YDQvtC60YDRg9GC0LrQsCDQvtC/0YPRgdC60LDQtdGC0YHRjyDQtNC+INC90YPQttC90L7Qs9C+INCx0LvQvtC60LAg0Lgg0LHQtdGA0YPRgtGM0YHRjyDQv9Cw0YDQsNC80LXRgtGA0Ysg0LjQtyDQkdCUINC4INC/0YDQuNC80LXQvdGP0Y7RgtGB0Y8g0Log0L3Rg9C20L3QvtC80YMg0LrRgNGD0LbQutGDXHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA8IHRvcFBhZ2UyKSB7Ly/Qv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC80LXQvdGP0LXQvCDRhtCy0LXRgiBoZWFkZXIg0LggZm9vdGVyXHJcbiAgICAgICAgICAgIGhlYWRlci5jc3MoJ2JhY2tncm91bmQnLCAnIzRBQjdDNycpO1xyXG4gICAgICAgICAgICBoZWFkZXJMb2dvLmF0dHIoJ3NyYycsICcuLi9pbWFnZS9sb2dvdmVjdG9yLnBuZycpO1xyXG4gICAgICAgICAgICBoZWFkQnV0dG9uLnJlbW92ZUNsYXNzKCdjb2xvcl9ibHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPj0gdG9wUGFnZTIpIHsvL9C/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LzQtdC90Y/QtdC8INGG0LLQtdGCIGhlYWRlciDQuCBmb290ZXJcclxuICAgICAgICAgICAgaGVhZGVyLmNzcygnYmFja2dyb3VuZCcsICcjZWRhMjIzJyk7XHJcbiAgICAgICAgICAgIGhlYWRlckxvZ28uYXR0cignc3JjJywgJy4uL2ltYWdlL2xvZ29XaGl0ZS5wbmcnKTtcclxuICAgICAgICAgICAgaGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpO1xyXG4gICAgICAgIH0gICBcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcclxuXHRcdFx0XHRhbmNob3JzOiBbJ9CX0LDQutCw0LfQsNGC0YwnLCAn0JjQvdGC0LXRgNC10YHQvdC+J10sXHJcblx0XHRcdFx0Ly9zZWN0aW9uc0NvbG9yOiBbJyNDNjNEMEYnLCAnIzFCQkM5QicsICcjN0U4RjdDJ10sXHJcblx0XHRcdFx0Y3NzMzogdHJ1ZSxcclxuXHRcdFx0XHQvLyBuYXZpZ2F0aW9uOiB0cnVlLFxyXG5cdFx0XHRcdC8vIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHRcdFx0XHQvLyBuYXZpZ2F0aW9uVG9vbHRpcHM6IFsn0JPQu9Cw0LLQvdCw0Y8nLCAn0JjQvdGE0L7RgNC80LDRhtC40Y8nXSxcclxuXHQgICAvL9C80LXQvdGP0LXQvCDRhtCy0LXRgtCwINGF0Y3QtNC10YDQsFxyXG5cdCAgIGFmdGVyTG9hZDogZnVuY3Rpb24gKGFuY2hvckxpbmssIGluZGV4KSB7Ly/QvNC10L3Rj9C10Lwg0YbQstC10YLQsCDRhdGN0LTQtdGA0LBcclxuXHRcdCAgIC8vdXNpbmcgaW5kZXhcclxuXHRcdCAgIHZhciBoZWFkZXJMb2dvPSQoJy5oZWFkZXJfbG9nbycpLC8v0LrQsNGA0YLQuNC90LrQsCDQu9C+0LPQvtGC0LjQv9CwXHJcblx0XHRcdCAgIGhlYWRCdXR0b249JCgnLmhlYWRlcl9fY29pbnNfYnV0dG9uJyk7Ly/QutC90L7Qv9C60LAg0LrRg9C/0LjRgtGMINCyINGI0LDQv9C60LVcclxuXHRcdCAgIGlmIChpbmRleCA9PSAxKSB7XHJcblx0XHRcdCAgIGhlYWRlckxvZ28uYXR0cignc3JjJywnLi4vaW1hZ2UvbG9nb3ZlY3Rvci5wbmcnKTtcclxuXHRcdFx0ICAgaGVhZEJ1dHRvbi5yZW1vdmVDbGFzcygnY29sb3JfYmx1ZScpO1xyXG5cclxuXHRcdCAgIH1cclxuXHRcdCAgIGlmIChpbmRleCA9PSAyKSB7XHJcblx0XHRcdCAgIGNvbnNvbGUubG9nKCd0b3BQYWdlMicpO1xyXG5cdFx0XHQgICBoZWFkZXJMb2dvLmF0dHIoJ3NyYycsJy4uL2ltYWdlL2xvZ29XaGl0ZS5wbmcnKTtcclxuXHRcdFx0ICAgaGVhZEJ1dHRvbi5hZGRDbGFzcygnY29sb3JfYmx1ZScpOyBcclxuXHRcdCAgIH1cclxuXHQgICB9XHJcblxyXG4gICB9KTtcclxufSk7IiwiLyohXHJcbiAqIGZ1bGxQYWdlIDIuOC42XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qc1xyXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDE1IGFsdmFyb3RyaWdvLmNvbSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cclxuICovXHJcbihmdW5jdGlvbihnbG9iYWwsIGZhY3RvcnkpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24oJCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhY3RvcnkoJCwgZ2xvYmFsLCBnbG9iYWwuZG9jdW1lbnQsIGdsb2JhbC5NYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgZXhwb3J0cykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgZ2xvYmFsLCBnbG9iYWwuZG9jdW1lbnQsIGdsb2JhbC5NYXRoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFjdG9yeShqUXVlcnksIGdsb2JhbCwgZ2xvYmFsLmRvY3VtZW50LCBnbG9iYWwuTWF0aCk7XHJcbiAgICB9XHJcbn0pKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgTWF0aCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8ga2VlcGluZyBjZW50cmFsIHNldCBvZiBjbGFzc25hbWVzIGFuZCBzZWxlY3RvcnNcclxuICAgIHZhciBXUkFQUEVSID0gICAgICAgICAgICAgICAnZnVsbHBhZ2Utd3JhcHBlcic7XHJcbiAgICB2YXIgV1JBUFBFUl9TRUwgPSAgICAgICAgICAgJy4nICsgV1JBUFBFUjtcclxuXHJcbiAgICAvLyBzbGltc2Nyb2xsXHJcbiAgICB2YXIgU0NST0xMQUJMRSA9ICAgICAgICAgICAgJ2ZwLXNjcm9sbGFibGUnO1xyXG4gICAgdmFyIFNDUk9MTEFCTEVfU0VMID0gICAgICAgICcuJyArIFNDUk9MTEFCTEU7XHJcblxyXG4gICAgLy8gdXRpbFxyXG4gICAgdmFyIFJFU1BPTlNJVkUgPSAgICAgICAgICAgICdmcC1yZXNwb25zaXZlJztcclxuICAgIHZhciBOT19UUkFOU0lUSU9OID0gICAgICAgICAnZnAtbm90cmFuc2l0aW9uJztcclxuICAgIHZhciBERVNUUk9ZRUQgPSAgICAgICAgICAgICAnZnAtZGVzdHJveWVkJztcclxuICAgIHZhciBFTkFCTEVEID0gICAgICAgICAgICAgICAnZnAtZW5hYmxlZCc7XHJcbiAgICB2YXIgVklFV0lOR19QUkVGSVggPSAgICAgICAgJ2ZwLXZpZXdpbmcnO1xyXG4gICAgdmFyIEFDVElWRSA9ICAgICAgICAgICAgICAgICdhY3RpdmUnO1xyXG4gICAgdmFyIEFDVElWRV9TRUwgPSAgICAgICAgICAgICcuJyArIEFDVElWRTtcclxuICAgIHZhciBDT01QTEVURUxZID0gICAgICAgICAgICAnZnAtY29tcGxldGVseSc7XHJcbiAgICB2YXIgQ09NUExFVEVMWV9TRUwgPSAgICAgICAgJy4nICsgQ09NUExFVEVMWTtcclxuXHJcbiAgICAvLyBzZWN0aW9uXHJcbiAgICB2YXIgU0VDVElPTl9ERUZBVUxUX1NFTCA9ICAgJy5zZWN0aW9uJztcclxuICAgIHZhciBTRUNUSU9OID0gICAgICAgICAgICAgICAnZnAtc2VjdGlvbic7XHJcbiAgICB2YXIgU0VDVElPTl9TRUwgPSAgICAgICAgICAgJy4nICsgU0VDVElPTjtcclxuICAgIHZhciBTRUNUSU9OX0FDVElWRV9TRUwgPSAgICBTRUNUSU9OX1NFTCArIEFDVElWRV9TRUw7XHJcbiAgICB2YXIgU0VDVElPTl9GSVJTVF9TRUwgPSAgICAgU0VDVElPTl9TRUwgKyAnOmZpcnN0JztcclxuICAgIHZhciBTRUNUSU9OX0xBU1RfU0VMID0gICAgICBTRUNUSU9OX1NFTCArICc6bGFzdCc7XHJcbiAgICB2YXIgVEFCTEVfQ0VMTCA9ICAgICAgICAgICAgJ2ZwLXRhYmxlQ2VsbCc7XHJcbiAgICB2YXIgVEFCTEVfQ0VMTF9TRUwgPSAgICAgICAgJy4nICsgVEFCTEVfQ0VMTDtcclxuICAgIHZhciBBVVRPX0hFSUdIVCA9ICAgICAgICAgICAnZnAtYXV0by1oZWlnaHQnO1xyXG4gICAgdmFyIEFVVE9fSEVJR0hUX1NFTCA9ICAgICAgICcuZnAtYXV0by1oZWlnaHQnO1xyXG4gICAgdmFyIE5PUk1BTF9TQ1JPTEwgPSAgICAgICAgICdmcC1ub3JtYWwtc2Nyb2xsJztcclxuICAgIHZhciBOT1JNQUxfU0NST0xMX1NFTCA9ICAgICAnLmZwLW5vcm1hbC1zY3JvbGwnO1xyXG5cclxuICAgIC8vIHNlY3Rpb24gbmF2XHJcbiAgICB2YXIgU0VDVElPTl9OQVYgPSAgICAgICAgICAgJ2ZwLW5hdic7XHJcbiAgICB2YXIgU0VDVElPTl9OQVZfU0VMID0gICAgICAgJyMnICsgU0VDVElPTl9OQVY7XHJcbiAgICB2YXIgU0VDVElPTl9OQVZfVE9PTFRJUCA9ICAgJ2ZwLXRvb2x0aXAnO1xyXG4gICAgdmFyIFNFQ1RJT05fTkFWX1RPT0xUSVBfU0VMPScuJytTRUNUSU9OX05BVl9UT09MVElQO1xyXG4gICAgdmFyIFNIT1dfQUNUSVZFX1RPT0xUSVAgPSAgICdmcC1zaG93LWFjdGl2ZSc7XHJcblxyXG4gICAgLy8gc2xpZGVcclxuICAgIHZhciBTTElERV9ERUZBVUxUX1NFTCA9ICAgICAnLnNsaWRlJztcclxuICAgIHZhciBTTElERSA9ICAgICAgICAgICAgICAgICAnZnAtc2xpZGUnO1xyXG4gICAgdmFyIFNMSURFX1NFTCA9ICAgICAgICAgICAgICcuJyArIFNMSURFO1xyXG4gICAgdmFyIFNMSURFX0FDVElWRV9TRUwgPSAgICAgIFNMSURFX1NFTCArIEFDVElWRV9TRUw7XHJcbiAgICB2YXIgU0xJREVTX1dSQVBQRVIgPSAgICAgICAgJ2ZwLXNsaWRlcyc7XHJcbiAgICB2YXIgU0xJREVTX1dSQVBQRVJfU0VMID0gICAgJy4nICsgU0xJREVTX1dSQVBQRVI7XHJcbiAgICB2YXIgU0xJREVTX0NPTlRBSU5FUiA9ICAgICAgJ2ZwLXNsaWRlc0NvbnRhaW5lcic7XHJcbiAgICB2YXIgU0xJREVTX0NPTlRBSU5FUl9TRUwgPSAgJy4nICsgU0xJREVTX0NPTlRBSU5FUjtcclxuICAgIHZhciBUQUJMRSA9ICAgICAgICAgICAgICAgICAnZnAtdGFibGUnO1xyXG5cclxuICAgIC8vIHNsaWRlIG5hdlxyXG4gICAgdmFyIFNMSURFU19OQVYgPSAgICAgICAgICAgICdmcC1zbGlkZXNOYXYnO1xyXG4gICAgdmFyIFNMSURFU19OQVZfU0VMID0gICAgICAgICcuJyArIFNMSURFU19OQVY7XHJcbiAgICB2YXIgU0xJREVTX05BVl9MSU5LX1NFTCA9ICAgU0xJREVTX05BVl9TRUwgKyAnIGEnO1xyXG4gICAgdmFyIFNMSURFU19BUlJPVyA9ICAgICAgICAgICdmcC1jb250cm9sQXJyb3cnO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19TRUwgPSAgICAgICcuJyArIFNMSURFU19BUlJPVztcclxuICAgIHZhciBTTElERVNfUFJFViA9ICAgICAgICAgICAnZnAtcHJldic7XHJcbiAgICB2YXIgU0xJREVTX1BSRVZfU0VMID0gICAgICAgJy4nICsgU0xJREVTX1BSRVY7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX1BSRVYgPSAgICAgU0xJREVTX0FSUk9XICsgJyAnICsgU0xJREVTX1BSRVY7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX1BSRVZfU0VMID0gU0xJREVTX0FSUk9XX1NFTCArIFNMSURFU19QUkVWX1NFTDtcclxuICAgIHZhciBTTElERVNfTkVYVCA9ICAgICAgICAgICAnZnAtbmV4dCc7XHJcbiAgICB2YXIgU0xJREVTX05FWFRfU0VMID0gICAgICAgJy4nICsgU0xJREVTX05FWFQ7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX05FWFQgPSAgICAgU0xJREVTX0FSUk9XICsgJyAnICsgU0xJREVTX05FWFQ7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX05FWFRfU0VMID0gU0xJREVTX0FSUk9XX1NFTCArIFNMSURFU19ORVhUX1NFTDtcclxuXHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuICAgIHZhciAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IG9wdGlvbnMgZm9yIGlTY3JvbGwuanMgdXNlZCB3aGVuIHVzaW5nIHNjcm9sbE92ZXJmbG93XHJcbiAgICB2YXIgaXNjcm9sbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2Nyb2xsYmFyczogdHJ1ZSxcclxuICAgICAgICBtb3VzZVdoZWVsOiB0cnVlLFxyXG4gICAgICAgIGhpZGVTY3JvbGxiYXJzOiBmYWxzZSxcclxuICAgICAgICBmYWRlU2Nyb2xsYmFyczogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZU1vdXNlOiB0cnVlLFxyXG4gICAgICAgIGludGVyYWN0aXZlU2Nyb2xsYmFyczogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLmZ1bGxwYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIC8vb25seSBvbmNlIG15IGZyaWVuZCFcclxuICAgICAgICBpZigkKCdodG1sJykuaGFzQ2xhc3MoRU5BQkxFRCkpeyBkaXNwbGF5V2FybmluZ3MoKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIC8vIGNvbW1vbiBqUXVlcnkgb2JqZWN0c1xyXG4gICAgICAgIHZhciAkaHRtbEJvZHkgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG5cclxuICAgICAgICB2YXIgRlAgPSAkLmZuLmZ1bGxwYWdlO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc29tZSBkZWZhdWx0cywgZXh0ZW5kaW5nIHRoZW0gd2l0aCBhbnkgb3B0aW9ucyB0aGF0IHdlcmUgcHJvdmlkZWRcclxuICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICAvL25hdmlnYXRpb25cclxuICAgICAgICAgICAgbWVudTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuY2hvcnM6W10sXHJcbiAgICAgICAgICAgIGxvY2tBbmNob3JzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbXSxcclxuICAgICAgICAgICAgc2hvd0FjdGl2ZVRvb2x0aXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNOYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzTmF2UG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBzY3JvbGxCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBoeWJyaWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy9zY3JvbGxpbmdcclxuICAgICAgICAgICAgY3NzMzogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsaW5nU3BlZWQ6IDcwMCxcclxuICAgICAgICAgICAgYXV0b1Njcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXRUb1NlY3Rpb25EZWxheTogMTAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxyXG4gICAgICAgICAgICBlYXNpbmdjc3MzOiAnZWFzZScsXHJcbiAgICAgICAgICAgIGxvb3BCb3R0b206IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wVG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcEhvcml6b250YWw6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNIb3Jpem9udGFsOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHk6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVybG9ja2VkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVzZXRTbGlkZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkaW5nRWZmZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6IG51bGwsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyOiBpc2Nyb2xsSGFuZGxlcixcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dPcHRpb25zOiBudWxsLFxyXG4gICAgICAgICAgICB0b3VjaFNlbnNpdGl2aXR5OiA1LFxyXG4gICAgICAgICAgICBub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQ6IDUsXHJcbiAgICAgICAgICAgIGJpZ1NlY3Rpb25zRGVzdGluYXRpb246IG51bGwsXHJcblxyXG4gICAgICAgICAgICAvL0FjY2Vzc2liaWxpdHlcclxuICAgICAgICAgICAga2V5Ym9hcmRTY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGVBbmNob3I6IHRydWUsXHJcbiAgICAgICAgICAgIHJlY29yZEhpc3Rvcnk6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAvL2Rlc2lnblxyXG4gICAgICAgICAgICBjb250cm9sQXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250cm9sQXJyb3dDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbENlbnRlcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWN0aW9uc0NvbG9yIDogW10sXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICAgICAgICAgIGZpeGVkRWxlbWVudHM6IG51bGwsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IDAsIC8vYmFja3dhcmRzIGNvbXBhYml0aWxpdHkgd2l0aCByZXNwb25zaXZlV2lkZHRoXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVXaWR0aDogMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZUhlaWdodDogMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNsaWRlczogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvL0N1c3RvbSBzZWxlY3RvcnNcclxuICAgICAgICAgICAgc2VjdGlvblNlbGVjdG9yOiBTRUNUSU9OX0RFRkFVTFRfU0VMLFxyXG4gICAgICAgICAgICBzbGlkZVNlbGVjdG9yOiBTTElERV9ERUZBVUxUX1NFTCxcclxuXHJcblxyXG4gICAgICAgICAgICAvL2V2ZW50c1xyXG4gICAgICAgICAgICBhZnRlckxvYWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uTGVhdmU6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVuZGVyOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlc2l6ZTogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZUJ1aWxkOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclNsaWRlTG9hZDogbnVsbCxcclxuICAgICAgICAgICAgb25TbGlkZUxlYXZlOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlc3BvbnNpdmU6IG51bGxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9mbGFnIHRvIGF2b2lkIHZlcnkgZmFzdCBzbGlkaW5nIGZvciBsYW5kc2NhcGUgc2xpZGVyc1xyXG4gICAgICAgIHZhciBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaXNUb3VjaERldmljZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8cGxheWJvb2t8c2lsa3xCbGFja0JlcnJ5fEJCMTB8V2luZG93cyBQaG9uZXxUaXplbnxCYWRhfHdlYk9TfElFTW9iaWxlfE9wZXJhIE1pbmkpLyk7XHJcbiAgICAgICAgdmFyIGlzVG91Y2ggPSAoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkgfHwgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciB3aW5kb3dzSGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcclxuICAgICAgICB2YXIgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1dpbmRvd0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsZWREZXN0aW55O1xyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsZWRTbGlkZTtcclxuICAgICAgICB2YXIgY2FuU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2Nyb2xsaW5ncyA9IFtdO1xyXG4gICAgICAgIHZhciBjb250cm9sUHJlc3NlZDtcclxuICAgICAgICB2YXIgaXNTY3JvbGxBbGxvd2VkID0ge307XHJcbiAgICAgICAgaXNTY3JvbGxBbGxvd2VkLm0gPSB7ICAndXAnOnRydWUsICdkb3duJzp0cnVlLCAnbGVmdCc6dHJ1ZSwgJ3JpZ2h0Jzp0cnVlIH07XHJcbiAgICAgICAgaXNTY3JvbGxBbGxvd2VkLmsgPSAkLmV4dGVuZCh0cnVlLHt9LCBpc1Njcm9sbEFsbG93ZWQubSk7XHJcblxyXG4gICAgICAgIC8vdGltZW91dHNcclxuICAgICAgICB2YXIgcmVzaXplSWQ7XHJcbiAgICAgICAgdmFyIGFmdGVyU2VjdGlvbkxvYWRzSWQ7XHJcbiAgICAgICAgdmFyIGFmdGVyU2xpZGVMb2Fkc0lkO1xyXG4gICAgICAgIHZhciBzY3JvbGxJZDtcclxuICAgICAgICB2YXIgc2Nyb2xsSWQyO1xyXG4gICAgICAgIHZhciBrZXlkb3duSWQ7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFscyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTsgLy9kZWVwIGNvcHlcclxuXHJcbiAgICAgICAgZGlzcGxheVdhcm5pbmdzKCk7XHJcblxyXG4gICAgICAgIC8vZml4aW5nIGJ1ZyBpbiBpU2Nyb2xsIHdpdGggbGlua3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9jdWJpcS9pc2Nyb2xsL2lzc3Vlcy83ODNcclxuICAgICAgICBpc2Nyb2xsT3B0aW9ucy5jbGljayA9IGlzVG91Y2g7IC8vIHNlZSAjMjAzNVxyXG5cclxuICAgICAgICAvL2V4dGVuZGluZyBpU2Nyb2xsIG9wdGlvbnMgd2l0aCB0aGUgdXNlciBjdXN0b20gb25lc1xyXG4gICAgICAgIGlzY3JvbGxPcHRpb25zID0gJC5leHRlbmQoaXNjcm9sbE9wdGlvbnMsIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9lYXNlSW5PdXRDdWJpYyBhbmltYXRpb24gaW5jbHVkZWQgaW4gdGhlIHBsdWdpblxyXG4gICAgICAgICQuZXh0ZW5kKCQuZWFzaW5nLHsgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCArIGI7cmV0dXJuIGMvMiooKHQtPTIpKnQqdCArIDIpICsgYjt9fSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgYXV0b1Njcm9sbCBvcHRpb24uXHJcbiAgICAgICAgKiBJdCBjaGFuZ2VzIHRoZSBzY3JvbGwgYmFyIHZpc2liaWxpdHkgYW5kIHRoZSBoaXN0b3J5IG9mIHRoZSBzaXRlIGFzIGEgcmVzdWx0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QXV0b1Njcm9sbGluZyh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ2F1dG9TY3JvbGxpbmcnLCB2YWx1ZSwgdHlwZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnIDogJzEwMCUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRSZWNvcmRIaXN0b3J5KG9yaWdpbmFscy5yZWNvcmRIaXN0b3J5LCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciBJRSB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRvdWNoLWFjdGlvbic6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb3ZpbmcgdGhlIGNvbnRhaW5lciB1cFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbGVudFNjcm9sbChlbGVtZW50LnBvc2l0aW9uKCkudG9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJGh0bWxCb2R5LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JyA6ICd2aXNpYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6ICdpbml0aWFsJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkSGlzdG9yeShmYWxzZSwgJ2ludGVybmFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mb3IgSUUgdG91Y2ggZGV2aWNlc1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNpbGVudFNjcm9sbCgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB0aGUgcGFnZSB0byB0aGUgc2VjdGlvbiB3aXRoIG5vIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGh0bWxCb2R5LnNjcm9sbFRvcChlbGVtZW50LnBvc2l0aW9uKCkudG9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGVmaW5lcyB3aGV0ZXIgdG8gcmVjb3JkIHRoZSBoaXN0b3J5IGZvciBlYWNoIGhhc2ggY2hhbmdlIGluIHRoZSBVUkwuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRSZWNvcmRIaXN0b3J5KHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgncmVjb3JkSGlzdG9yeScsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERlZmluZXMgdGhlIHNjcm9sbGluZyBzcGVlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U2Nyb2xsaW5nU3BlZWQodmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBpZih0eXBlICE9PSAnaW50ZXJuYWwnICYmIG9wdGlvbnMuZmFkaW5nRWZmZWN0ICYmIEZQLmZhZGluZ0VmZmVjdCApe1xyXG4gICAgICAgICAgICAgICAgRlAuZmFkaW5nRWZmZWN0LnVwZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnc2Nyb2xsaW5nU3BlZWQnLCB2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGZpdFRvU2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Rml0VG9TZWN0aW9uKHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnZml0VG9TZWN0aW9uJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBsb2NrQW5jaG9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TG9ja0FuY2hvcnModmFsdWUpe1xyXG4gICAgICAgICAgICBvcHRpb25zLmxvY2tBbmNob3JzID0gdmFsdWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2libGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUgbW91c2Ugd2hlZWwgb3IgdGhlIHRyYWNrcGFkLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TW91c2VXaGVlbFNjcm9sbGluZyh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGFkZE1vdXNlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRNaWRkbGVXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTWlkZGxlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbC90cmFja3BhZCBvciB0b3VjaCBnZXN0dXJlcy5cclxuICAgICAgICAqIE9wdGlvbmFsbHkgYSBzZWNvbmQgcGFyYW1ldGVyIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGRpcmVjdGlvbiBmb3Igd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGFwcGxpZWQuXHJcbiAgICAgICAgKlxyXG4gICAgICAgICogQHBhcmFtIGRpcmVjdGlvbnMgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGRpcmVjdGlvbiBvciBkaXJlY3Rpb25zIHNlcGFyYXRlZCBieSBjb21tYS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEFsbG93U2Nyb2xsaW5nKHZhbHVlLCBkaXJlY3Rpb25zKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGRpcmVjdGlvbnMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zLnJlcGxhY2UoLyAvZywnJykuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGlyZWN0aW9ucywgZnVuY3Rpb24gKGluZGV4LCBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsQWxsb3dlZCh2YWx1ZSwgZGlyZWN0aW9uLCAnbScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG91Y2hIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0TW91c2VXaGVlbFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVUb3VjaEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmxpdHkgb2Ygc2Nyb2xsaW5nIHRocm91Z2ggc2VjdGlvbnMgYnkgdXNpbmcgdGhlIGtleWJvYXJkIGFycm93IGtleXNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEtleWJvYXJkU2Nyb2xsaW5nKHZhbHVlLCBkaXJlY3Rpb25zKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGRpcmVjdGlvbnMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zLnJlcGxhY2UoLyAvZywnJykuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGlyZWN0aW9ucywgZnVuY3Rpb24gKGluZGV4LCBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsQWxsb3dlZCh2YWx1ZSwgZGlyZWN0aW9uLCAnaycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlib2FyZFNjcm9sbGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB1cCBvbmUgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTZWN0aW9uVXAoKXtcclxuICAgICAgICAgICAgdmFyIHByZXYgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCkucHJldihTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2xvb3BpbmcgdG8gdGhlIGJvdHRvbSBpZiB0aGVyZSdzIG5vIG1vcmUgc2VjdGlvbnMgYWJvdmVcclxuICAgICAgICAgICAgaWYgKCFwcmV2Lmxlbmd0aCAmJiAob3B0aW9ucy5sb29wVG9wIHx8IG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldiA9ICQoU0VDVElPTl9TRUwpLmxhc3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByZXYubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKHByZXYsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSBkb3duIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25Eb3duKCl7XHJcbiAgICAgICAgICAgIHZhciBuZXh0ID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLm5leHQoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy9sb29waW5nIHRvIHRoZSB0b3AgaWYgdGhlcmUncyBubyBtb3JlIHNlY3Rpb25zIGJlbG93XHJcbiAgICAgICAgICAgIGlmKCFuZXh0Lmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMubG9vcEJvdHRvbSB8fCBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCkpe1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9ICQoU0VDVElPTl9TRUwpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG5leHQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2UobmV4dCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUgd2l0aCBubyBhbmltYXRpb24uXHJcbiAgICAgICAgKiBBbmNob3JzIG9yIGluZGV4IHBvc2l0aW9ucyBjYW4gYmUgdXNlZCBhcyBwYXJhbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaWxlbnRNb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZCAoMCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIG1vdmVUbyhzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkIChvcmlnaW5hbHMuc2Nyb2xsaW5nU3BlZWQsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlLlxyXG4gICAgICAgICogQW5jaG9ycyBvciBpbmRleCBwb3NpdGlvbnMgY2FuIGJlIHVzZWQgYXMgcGFyYW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlQW5jaG9yICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihkZXN0aW55Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShkZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIHJpZ2h0IHRoZSBzbGlkZXIgb2YgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICogT3B0aW9uYWwgYHNlY3Rpb25gIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNsaWRlUmlnaHQoc2VjdGlvbil7XHJcbiAgICAgICAgICAgIG1vdmVTbGlkZSgncmlnaHQnLCBzZWN0aW9uKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyBsZWZ0IHRoZSBzbGlkZXIgb2YgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICogT3B0aW9uYWwgYHNlY3Rpb25gIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNsaWRlTGVmdChzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCdsZWZ0Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiByZXNpemluZyBpcyBmaW5pc2hlZCwgd2UgYWRqdXN0IHRoZSBzbGlkZXMgc2l6ZXMgYW5kIHBvc2l0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlQnVpbGQocmVzaXppbmcpe1xyXG4gICAgICAgICAgICBpZihjb250YWluZXIuaGFzQ2xhc3MoREVTVFJPWUVEKSl7IHJldHVybjsgfSAgLy9ub3RoaW5nIHRvIGRvIGlmIHRoZSBwbHVnaW4gd2FzIGRlc3Ryb3llZFxyXG5cclxuICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3dzSGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTsgIC8vdXBkYXRpbmcgZ2xvYmFsIHZhclxyXG5cclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlc1dyYXAgPSAkKHRoaXMpLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKHRoaXMpLmZpbmQoU0xJREVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgaGVpZ2h0IG9mIHRoZSB0YWJsZS1jZWxsIGZvciBJRSBhbmQgRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoVEFCTEVfQ0VMTF9TRUwpLmNzcygnaGVpZ2h0JywgZ2V0VGFibGVIZWlnaHQoJCh0aGlzKSkgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0Jywgd2luZG93c0hlaWdodCArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmVzaXppbmcgdGhlIHNjcm9sbGluZyBkaXZzXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgICAgICBpZihzbGlkZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcm9sbEJhcigkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcm9sbEJhcigkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RpbmcgdGhlIHBvc2l0aW9uIGZvIHRoZSBGVUxMIFdJRFRIIHNsaWRlcy4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlc1dyYXAsIHNsaWRlc1dyYXAuZmluZChTTElERV9BQ1RJVkVfU0VMKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBhY3RpdmVTZWN0aW9uLmluZGV4KFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vaXNuJ3QgaXQgdGhlIGZpcnN0IHNlY3Rpb24/XHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHNpbGVudE1vdmVUbyhzZWN0aW9uSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZXNpemUgKSAmJiByZXNpemluZyAmJiBvcHRpb25zLmFmdGVyUmVzaXplLmNhbGwoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVCdWlsZCApICYmICFyZXNpemluZyAmJiBvcHRpb25zLmFmdGVyUmVCdWlsZC5jYWxsKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBUdXJucyBmdWxsUGFnZS5qcyB0byBub3JtYWwgc2Nyb2xsaW5nIG1vZGUgd2hlbiB0aGUgdmlld3BvcnQgYHdpZHRoYCBvciBgaGVpZ2h0YFxyXG4gICAgICAgICogYXJlIHNtYWxsZXIgdGhhbiB0aGUgc2V0IGxpbWl0IHZhbHVlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFJlc3BvbnNpdmUoYWN0aXZlKXtcclxuICAgICAgICAgICAgdmFyIGlzUmVzcG9uc2l2ZSA9ICRib2R5Lmhhc0NsYXNzKFJFU1BPTlNJVkUpO1xyXG5cclxuICAgICAgICAgICAgaWYoYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGlmKCFpc1Jlc3BvbnNpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpdFRvU2VjdGlvbihmYWxzZSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcyhSRVNQT05TSVZFKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlICkgJiYgb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUuY2FsbCggY29udGFpbmVyLCBhY3RpdmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnJlc3BvbnNpdmVTbGlkZXMgJiYgRlAucmVzcG9uc2l2ZVNsaWRlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZQLnJlc3BvbnNpdmVTbGlkZXMudG9TZWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGlzUmVzcG9uc2l2ZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKG9yaWdpbmFscy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHNldEZpdFRvU2VjdGlvbihvcmlnaW5hbHMuYXV0b1Njcm9sbGluZywgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoUkVTUE9OU0lWRSk7XHJcbiAgICAgICAgICAgICAgICAkLmlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlICkgJiYgb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUuY2FsbCggY29udGFpbmVyLCBhY3RpdmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMucmVzcG9uc2l2ZVNsaWRlcyAmJiBGUC5yZXNwb25zaXZlU2xpZGVzKXtcclxuICAgICAgICAgICAgICAgICAgICBGUC5yZXNwb25zaXZlU2xpZGVzLnRvU2xpZGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRGdWxscGFnZURhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRYbW92ZW1lbnQ6IGdldFhtb3ZlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbmltYXRpb246IHJlbW92ZUFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBnZXRUcmFuc2Zvcm1zOiBnZXRUcmFuc2Zvcm1zLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiBsYXp5TG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBhZGRBbmltYXRpb246IGFkZEFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtSG9yaXpvbnRhbE1vdmU6IHBlcmZvcm1Ib3Jpem9udGFsTW92ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRMYW5kc2NhcGVTY3JvbGw6IHNpbGVudExhbmRzY2FwZVNjcm9sbCxcclxuICAgICAgICAgICAgICAgICAgICBrZWVwU2xpZGVzUG9zaXRpb246IGtlZXBTbGlkZXNQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGw6IHNpbGVudFNjcm9sbCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNsaWRlczogc3R5bGVTbGlkZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZigkKHRoaXMpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIC8vcHVibGljIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICBGUC5zZXRBdXRvU2Nyb2xsaW5nID0gc2V0QXV0b1Njcm9sbGluZztcclxuICAgICAgICAgICAgRlAuc2V0UmVjb3JkSGlzdG9yeSA9IHNldFJlY29yZEhpc3Rvcnk7XHJcbiAgICAgICAgICAgIEZQLnNldFNjcm9sbGluZ1NwZWVkID0gc2V0U2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgICAgIEZQLnNldEZpdFRvU2VjdGlvbiA9IHNldEZpdFRvU2VjdGlvbjtcclxuICAgICAgICAgICAgRlAuc2V0TG9ja0FuY2hvcnMgPSBzZXRMb2NrQW5jaG9ycztcclxuICAgICAgICAgICAgRlAuc2V0TW91c2VXaGVlbFNjcm9sbGluZyA9IHNldE1vdXNlV2hlZWxTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldEFsbG93U2Nyb2xsaW5nID0gc2V0QWxsb3dTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldEtleWJvYXJkU2Nyb2xsaW5nID0gc2V0S2V5Ym9hcmRTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLm1vdmVTZWN0aW9uVXAgPSBtb3ZlU2VjdGlvblVwO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2VjdGlvbkRvd24gPSBtb3ZlU2VjdGlvbkRvd247XHJcbiAgICAgICAgICAgIEZQLnNpbGVudE1vdmVUbyA9IHNpbGVudE1vdmVUbztcclxuICAgICAgICAgICAgRlAubW92ZVRvID0gbW92ZVRvO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2xpZGVSaWdodCA9IG1vdmVTbGlkZVJpZ2h0O1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2xpZGVMZWZ0ID0gbW92ZVNsaWRlTGVmdDtcclxuICAgICAgICAgICAgRlAucmVCdWlsZCA9IHJlQnVpbGQ7XHJcbiAgICAgICAgICAgIEZQLnNldFJlc3BvbnNpdmUgPSBzZXRSZXNwb25zaXZlO1xyXG4gICAgICAgICAgICBGUC5nZXRGdWxscGFnZURhdGEgPSBnZXRGdWxscGFnZURhdGE7XHJcbiAgICAgICAgICAgIEZQLmRlc3Ryb3kgPSBkZXN0cm95O1xyXG5cclxuICAgICAgICAgICAgLy9Mb2FkaW5nIGV4dGVuc2lvbnNcclxuICAgICAgICAgICAgbG9hZEV4dGVuc2lvbignY29udGludW91c0hvcml6b250YWwnKTtcclxuICAgICAgICAgICAgbG9hZEV4dGVuc2lvbignc2Nyb2xsSG9yaXpvbnRhbGx5Jyk7XHJcbiAgICAgICAgICAgIGxvYWRFeHRlbnNpb24oJ3Jlc2V0U2xpZGVycycpO1xyXG4gICAgICAgICAgICBsb2FkRXh0ZW5zaW9uKCdpbnRlcmxvY2tlZFNsaWRlcycpO1xyXG4gICAgICAgICAgICBsb2FkRXh0ZW5zaW9uKCdyZXNwb25zaXZlU2xpZGVzJyk7XHJcbiAgICAgICAgICAgIGxvYWRFeHRlbnNpb24oJ2ZhZGluZ0VmZmVjdCcpO1xyXG5cclxuICAgICAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgICAgICAvL2lmIGNzczMgaXMgbm90IHN1cHBvcnRlZCwgaXQgd2lsbCB1c2UgalF1ZXJ5IGFuaW1hdGlvbnNcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY3NzMyA9IHN1cHBvcnQzZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnNjcm9sbEJhciA9IG9wdGlvbnMuc2Nyb2xsQmFyIHx8IG9wdGlvbnMuaHlicmlkO1xyXG5cclxuICAgICAgICAgICAgc2V0T3B0aW9uc0Zyb21ET00oKTtcclxuXHJcbiAgICAgICAgICAgIHByZXBhcmVEb20oKTtcclxuICAgICAgICAgICAgc2V0QWxsb3dTY3JvbGxpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKG9wdGlvbnMuYXV0b1Njcm9sbGluZywgJ2ludGVybmFsJyk7XHJcblxyXG4gICAgICAgICAgICAvL3RoZSBzdGFydGluZyBwb2ludCBpcyBhIHNsaWRlP1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCkuZmluZChTTElERV9BQ1RJVkVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhlIGFjdGl2ZSBzZWN0aW9uIGlzbid0IHRoZSBmaXJzdCBvbmU/IElzIG5vdCB0aGUgZmlyc3Qgc2xpZGUgb2YgdGhlIGZpcnN0IHNlY3Rpb24/IFRoZW4gd2UgbG9hZCB0aGF0IHNlY3Rpb24vc2xpZGUgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgaWYoIGFjdGl2ZVNsaWRlLmxlbmd0aCAmJiAgKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCkgIT09IDAgfHwgKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCkgPT09IDAgJiYgYWN0aXZlU2xpZGUuaW5kZXgoKSAhPT0gMCkpKXtcclxuICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vc2V0dGluZyB0aGUgY2xhc3MgZm9yIHRoZSBib2R5IGVsZW1lbnRcclxuICAgICAgICAgICAgc2V0Qm9keUNsYXNzKCk7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvQW5jaG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHdpbmRvdy5vbignbG9hZCcsIHNjcm9sbFRvQW5jaG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKXtcclxuICAgICAgICAgICAgJHdpbmRvd1xyXG4gICAgICAgICAgICAgICAgLy93aGVuIHNjcm9sbGluZy4uLlxyXG4gICAgICAgICAgICAgICAgLm9uKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vZGV0ZWN0aW5nIGFueSBjaGFuZ2Ugb24gdGhlIFVSTCB0byBzY3JvbGwgdG8gdGhlIGdpdmVuIGFuY2hvciBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyhhIHdheSB0byBkZXRlY3QgYmFjayBoaXN0b3J5IGJ1dHRvbiBhcyB3ZSBwbGF5IHdpdGggdGhlIGhhc2hlcyBvbiB0aGUgVVJMKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy93aGVuIG9wZW5pbmcgYSBuZXcgdGFiIChjdHJsICsgdCksIGBjb250cm9sYCB3b24ndCBiZSBwcmVzc2VkIHdoZW4gY29tbWluZyBiYWNrLlxyXG4gICAgICAgICAgICAgICAgLmJsdXIoYmx1ckhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy93aGVuIHJlc2l6aW5nIHRoZSBzaXRlLCB3ZSBhZGp1c3QgdGhlIGhlaWdodHMgb2YgdGhlIHNlY3Rpb25zLCBzbGltU2Nyb2xsLi4uXHJcbiAgICAgICAgICAgICAgICAucmVzaXplKHJlc2l6ZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgJGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvL1NsaWRpbmcgd2l0aCBhcnJvdyBrZXlzLCBib3RoLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgLmtleWRvd24oa2V5ZG93bkhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy90byBwcmV2ZW50IHNjcm9sbGluZyB3aGlsZSB6b29taW5nXHJcbiAgICAgICAgICAgICAgICAua2V5dXAoa2V5VXBIYW5kbGVyKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2Nyb2xscyB0byB0aGUgc2VjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBuYXZpZ2F0aW9uIGJ1bGxldFxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgU0VDVElPTl9OQVZfU0VMICsgJyBhJywgc2VjdGlvbkJ1bGxldEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgU0xJREVTX05BVl9MSU5LX1NFTCwgc2xpZGVCdWxsZXRIYW5kbGVyKVxyXG5cclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBTRUNUSU9OX05BVl9UT09MVElQX1NFTCwgdG9vbHRpcFRleHRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2Nyb2xsaW5nIGhvcml6b250YWxseSB3aGVuIGNsaWNraW5nIG9uIHRoZSBzbGlkZXIgY29udHJvbHMuXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgU0xJREVTX0FSUk9XX1NFTCwgc2xpZGVBcnJvd0hhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICogQXBwbHlpbmcgbm9ybWFsU2Nyb2xsIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICAqIElnbm9yaW5nIHRoZSBzY3JvbGxzIG92ZXIgdGhlIHNwZWNpZmllZCBzZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAgICAgJGRvY3VtZW50Lm9uKCdtb3VzZWVudGVyJywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGRvY3VtZW50Lm9uKCdtb3VzZWxlYXZlJywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBhIHB1YmxpYyBpbnRlcm5hbCBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIG5hbWUuXHJcbiAgICAgICAgKiBAcGFyYW0gZXh0ZXJuYWxOYW1lIHtTdHJpbmd9IEV4dGVuc2lvbiBuYW1lIHdpdGggdGhlIGZvcm0gZnBfW05BTUVdRXh0ZW5zaW9uIHJlZmVycmluZyB0byBhbiBleHRlcm5hbCBmdW5jdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRFeHRlbnNpb24oaW50ZXJuYWxOYW1lKXtcclxuICAgICAgICAgICAgdmFyIGV4dGVybmFsTmFtZSA9ICdmcF8nICsgaW50ZXJuYWxOYW1lICsgJ0V4dGVuc2lvbic7XHJcbiAgICAgICAgICAgIEZQW2ludGVybmFsTmFtZV0gPSB0eXBlb2Ygd2luZG93W2V4dGVybmFsTmFtZV0gIT09J3VuZGVmaW5lZCcgPyBuZXcgd2luZG93W2V4dGVybmFsTmFtZV0oKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHRpbmcgb3B0aW9ucyBmcm9tIERPTSBlbGVtZW50cyBpZiB0aGV5IGFyZSBub3QgcHJvdmlkZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRPcHRpb25zRnJvbURPTSgpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBjb250YWluZXIuZmluZChvcHRpb25zLnNlY3Rpb25TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICAvL25vIGFuY2hvcnMgb3B0aW9uPyBDaGVja2luZyBmb3IgdGhlbSBpbiB0aGUgRE9NIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hbmNob3JzID0gc2VjdGlvbnMuZmlsdGVyKCdbZGF0YS1hbmNob3JdJykubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykuZGF0YSgnYW5jaG9yJykudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL25vIHRvb2x0aXBvcyBvcHRpb24/IENoZWNraW5nIGZvciB0aGVtIGluIHRoZSBET00gYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5uYXZpZ2F0aW9uVG9vbHRpcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzID0gc2VjdGlvbnMuZmlsdGVyKCdbZGF0YS10b29sdGlwXScpLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAnKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSkuZ2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogV29ya3Mgb3ZlciB0aGUgRE9NIHN0cnVjdHVyZSB0byBzZXQgaXQgdXAgZm9yIHRoZSBjdXJyZW50IGZ1bGxwYWdlIG9wdGlvbnNzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcHJlcGFyZURvbSgpe1xyXG4gICAgICAgICAgICBjb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9hZGRpbmcgYSBjbGFzcyB0byByZWNvZ25pemUgdGhlIGNvbnRhaW5lciBpbnRlcm5hbGx5IGluIHRoZSBjb2RlXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhXUkFQUEVSKTtcclxuICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKEVOQUJMRUQpO1xyXG5cclxuICAgICAgICAgICAgLy9kdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzL2lzc3Vlcy8xNTAyXHJcbiAgICAgICAgICAgIHdpbmRvd3NIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKERFU1RST1lFRCk7IC8vaW4gY2FzZSBpdCB3YXMgZGVzdHJveWVkIGJlZm9yZSBpbml0aWxpemluZyBpdCBhZ2FpblxyXG5cclxuICAgICAgICAgICAgYWRkSW50ZXJuYWxTZWxlY3RvcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAvL3N0eWxpbmcgdGhlIHNlY3Rpb25zIC8gc2xpZGVzIC8gbWVudVxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSBzZWN0aW9uLmZpbmQoU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgICAgIHZhciBudW1TbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0eWxlU2VjdGlvbihzZWN0aW9uLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZU1lbnUoc2VjdGlvbiwgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgYW55IHNsaWRlXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtU2xpZGVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2xpZGVzKHNlY3Rpb24sIHNsaWRlcywgbnVtU2xpZGVzKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMudmVydGljYWxDZW50ZXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhYmxlQ2xhc3Moc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vZml4ZWQgZWxlbWVudHMgbmVlZCB0byBiZSBtb3ZlZCBvdXQgb2YgdGhlIHBsdWdpbiBjb250YWluZXIgZHVlIHRvIHByb2JsZW1zIHdpdGggQ1NTMy5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXhlZEVsZW1lbnRzICYmIG9wdGlvbnMuY3NzMyl7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbnMuZml4ZWRFbGVtZW50cykuYXBwZW5kVG8oJGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsIGNlbnRlcmVkIG9mIHRoZSBuYXZpZ2F0aW9uICsgYWN0aXZlIGJ1bGxldFxyXG4gICAgICAgICAgICBpZihvcHRpb25zLm5hdmlnYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgYWRkVmVydGljYWxOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVuYWJsZVlvdXR1YmVBUEkoKTtcclxuICAgICAgICAgICAgZW5hYmxlVmlkZW1vQVBJKCk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZhZGluZ0VmZmVjdCAmJiBGUC5mYWRpbmdFZmZlY3Qpe1xyXG4gICAgICAgICAgICAgICAgRlAuZmFkaW5nRWZmZWN0LmFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2Nyb2xsQmFySGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hZnRlciBET00gYW5kIGltYWdlcyBhcmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAkd2luZG93Lm9uKCdsb2FkJywgY3JlYXRlU2Nyb2xsQmFySGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJSZW5kZXJBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU3R5bGVzIHRoZSBob3Jpem9udGFsIHNsaWRlcyBmb3IgYSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3R5bGVTbGlkZXMoc2VjdGlvbiwgc2xpZGVzLCBudW1TbGlkZXMpe1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBudW1TbGlkZXMgKiAxMDA7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZVdpZHRoID0gMTAwIC8gbnVtU2xpZGVzO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX0NPTlRBSU5FUiArICdcIiAvPicpO1xyXG4gICAgICAgICAgICBzbGlkZXMucGFyZW50KCkud3JhcCgnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfV1JBUFBFUiArICdcIiAvPicpO1xyXG5cclxuICAgICAgICAgICAgc2VjdGlvbi5maW5kKFNMSURFU19DT05UQUlORVJfU0VMKS5jc3MoJ3dpZHRoJywgc2xpZGVyV2lkdGggKyAnJScpO1xyXG5cclxuICAgICAgICAgICAgaWYobnVtU2xpZGVzID4gMSl7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmNvbnRyb2xBcnJvd3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNsaWRlQXJyb3dzKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2xpZGVzTmF2aWdhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkU2xpZGVzTmF2aWdhdGlvbihzZWN0aW9uLCBudW1TbGlkZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3dpZHRoJywgc2xpZGVXaWR0aCArICclJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUYWJsZUNsYXNzKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydGluZ1NsaWRlID0gc2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiB0aGUgc2xpZGUgd29uJ3QgYmUgYW4gc3RhcnRpbmcgcG9pbnQsIHRoZSBkZWZhdWx0IHdpbGwgYmUgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAgICAgICAvL3RoZSBhY3RpdmUgc2VjdGlvbiBpc24ndCB0aGUgZmlyc3Qgb25lPyBJcyBub3QgdGhlIGZpcnN0IHNsaWRlIG9mIHRoZSBmaXJzdCBzZWN0aW9uPyBUaGVuIHdlIGxvYWQgdGhhdCBzZWN0aW9uL3NsaWRlIGJ5IGRlZmF1bHQuXHJcbiAgICAgICAgICAgIGlmKCBzdGFydGluZ1NsaWRlLmxlbmd0aCAmJiAgKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCkgIT09IDAgfHwgKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCkgPT09IDAgJiYgc3RhcnRpbmdTbGlkZS5pbmRleCgpICE9PSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKHN0YXJ0aW5nU2xpZGUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNsaWRlcy5lcSgwKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFN0eWxpbmcgdmVydGljYWwgc2VjdGlvbnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlU2VjdGlvbihzZWN0aW9uLCBpbmRleCl7XHJcbiAgICAgICAgICAgIC8vaWYgbm8gYWN0aXZlIHNlY3Rpb24gaXMgZGVmaW5lZCwgdGhlIDFzdCBvbmUgd2lsbCBiZSB0aGUgZGVmYXVsdCBvbmVcclxuICAgICAgICAgICAgaWYoIWluZGV4ICYmICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VjdGlvbi5jc3MoJ2hlaWdodCcsIHdpbmRvd3NIZWlnaHQgKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFkZGluZ1RvcCl7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmNzcygncGFkZGluZy10b3AnLCBvcHRpb25zLnBhZGRpbmdUb3ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnBhZGRpbmdCb3R0b20pe1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5jc3MoJ3BhZGRpbmctYm90dG9tJywgb3B0aW9ucy5wYWRkaW5nQm90dG9tKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNlY3Rpb25zQ29sb3JbaW5kZXhdICE9PSAgJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgb3B0aW9ucy5zZWN0aW9uc0NvbG9yW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbmNob3JzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uYXR0cignZGF0YS1hbmNob3InLCBvcHRpb25zLmFuY2hvcnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGVzIHRvIHRoZSBtZW51IGVsZW1lbnRzIGFuZCBhY3RpdmF0ZXMgdGhlIGN1cnJlbnQgb25lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3R5bGVNZW51KHNlY3Rpb24sIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFuY2hvcnNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgLy9hY3RpdmF0aW5nIHRoZSBtZW51IC8gbmF2IGVsZW1lbnQgb24gbG9hZFxyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5oYXNDbGFzcyhBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZU1lbnVBbmROYXYob3B0aW9ucy5hbmNob3JzW2luZGV4XSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL21vdmluZyB0aGUgbWVudSBvdXRzaWRlIHRoZSBtYWluIGNvbnRhaW5lciBpZiBpdCBpcyBpbnNpZGUgKGF2b2lkIHByb2JsZW1zIHdpdGggZml4ZWQgcG9zaXRpb25zIHdoZW4gdXNpbmcgQ1NTMyB0cmFuZm9ybXMpXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubWVudSAmJiBvcHRpb25zLmNzczMgJiYgJChvcHRpb25zLm1lbnUpLmNsb3Nlc3QoV1JBUFBFUl9TRUwpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbnMubWVudSkuYXBwZW5kVG8oJGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgaW50ZXJuYWwgY2xhc3NlcyB0byBiZSBhYmxlIHRvIHByb3ZpZGUgY3VzdG9taXphYmxlIHNlbGVjdG9yc1xyXG4gICAgICAgICoga2VlcGluZyB0aGUgbGluayB3aXRoIHRoZSBzdHlsZSBzaGVldC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEludGVybmFsU2VsZWN0b3JzKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yKS5hZGRDbGFzcyhTRUNUSU9OKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQob3B0aW9ucy5zbGlkZVNlbGVjdG9yKS5hZGRDbGFzcyhTTElERSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgdGhlIGNvbnRyb2wgYXJyb3dzIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbil7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfV1JBUFBFUl9TRUwpLmFmdGVyKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19BUlJPV19QUkVWICsgJ1wiPjwvZGl2PjxkaXYgY2xhc3M9XCInICsgU0xJREVTX0FSUk9XX05FWFQgKyAnXCI+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yIT0nI2ZmZicpe1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5maW5kKFNMSURFU19BUlJPV19ORVhUX1NFTCkuY3NzKCdib3JkZXItY29sb3InLCAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJytvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yKTtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfQVJST1dfUFJFVl9TRUwpLmNzcygnYm9yZGVyLWNvbG9yJywgJ3RyYW5zcGFyZW50ICcrIG9wdGlvbnMuY29udHJvbEFycm93Q29sb3IgKyAnIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmxvb3BIb3Jpem9udGFsKXtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfQVJST1dfUFJFVl9TRUwpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDcmVhdGVzIGEgdmVydGljYWwgbmF2aWdhdGlvbiBiYXIuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRWZXJ0aWNhbE5hdmlnYXRpb24oKXtcclxuICAgICAgICAgICAgJGJvZHkuYXBwZW5kKCc8ZGl2IGlkPVwiJyArIFNFQ1RJT05fTkFWICsgJ1wiPjx1bD48L3VsPjwvZGl2PicpO1xyXG4gICAgICAgICAgICB2YXIgbmF2ID0gJChTRUNUSU9OX05BVl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgbmF2LmFkZENsYXNzKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuc2hvd0FjdGl2ZVRvb2x0aXAgPyBTSE9XX0FDVElWRV9UT09MVElQICsgJyAnICsgb3B0aW9ucy5uYXZpZ2F0aW9uUG9zaXRpb24gOiBvcHRpb25zLm5hdmlnYXRpb25Qb3NpdGlvbjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICQoU0VDVElPTl9TRUwpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGluayA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0gb3B0aW9ucy5hbmNob3JzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaSA9ICc8bGk+PGEgaHJlZj1cIiMnICsgbGluayArICdcIj48c3Bhbj48L3NwYW4+PC9hPic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT25seSBhZGQgdG9vbHRpcCBpZiBuZWVkZWQgKGRlZmluZWQgYnkgdXNlcilcclxuICAgICAgICAgICAgICAgIHZhciB0b29sdGlwID0gb3B0aW9ucy5uYXZpZ2F0aW9uVG9vbHRpcHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b29sdGlwICE9PSAndW5kZWZpbmVkJyAmJiB0b29sdGlwICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpICs9ICc8ZGl2IGNsYXNzPVwiJyArIFNFQ1RJT05fTkFWX1RPT0xUSVAgKyAnICcgKyBvcHRpb25zLm5hdmlnYXRpb25Qb3NpdGlvbiArICdcIj4nICsgdG9vbHRpcCArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpICs9ICc8L2xpPic7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2LmZpbmQoJ3VsJykuYXBwZW5kKGxpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jZW50ZXJpbmcgaXQgdmVydGljYWxseVxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuY3NzKCdtYXJnaW4tdG9wJywgJy0nICsgKCQoU0VDVElPTl9OQVZfU0VMKS5oZWlnaHQoKS8yKSArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgLy9hY3RpdmF0aW5nIHRoZSBjdXJyZW50IGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMKS5maW5kKCdsaScpLmVxKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCkpLmZpbmQoJ2EnKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDcmVhdGVzIHRoZSBzbGltIHNjcm9sbCBzY3JvbGxiYXIgZm9yIHRoZSBzZWN0aW9ucyBhbmQgc2xpZGVzIGluc2lkZSB0aGVtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2Nyb2xsQmFySGFuZGxlcigpe1xyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzID0gJCh0aGlzKS5maW5kKFNMSURFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2xpZGVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2Nyb2xsQmFyKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2Nyb2xsQmFyKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFmdGVyUmVuZGVyQWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIEVuYWJsZXMgdGhlIFlvdXR1YmUgdmlkZW9zIEFQSSBzbyB3ZSBjYW4gY29udHJvbCB0aGVpciBmbG93IGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZVlvdXR1YmVBUEkoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgYWRkVVJMUGFyYW0oJCh0aGlzKSwgJ2VuYWJsZWpzYXBpPTEnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRW5hYmxlcyB0aGUgVmltZW8gdmlkZW9zIEFQSSBzbyB3ZSBjYW4gY29udHJvbCB0aGVpciBmbG93IGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZVZpZGVtb0FQSSgpe1xyXG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgnaWZyYW1lW3NyYyo9XCJwbGF5ZXIudmltZW8uY29tL1wiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGFkZFVSTFBhcmFtKCQodGhpcyksICdhcGk9MScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBhIG5ldyBwYXJhbWV0ZXIgYW5kIGl0cyB2YWx1ZSB0byB0aGUgYHNyY2Agb2YgYSBnaXZlbiBlbGVtZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRVUkxQYXJhbShlbGVtZW50LCBuZXdQYXJhbSl7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFNyYyA9IGVsZW1lbnQuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0cignc3JjJywgb3JpZ2luYWxTcmMgKyBnZXRVcmxQYXJhbVNpZ24ob3JpZ2luYWxTcmMpICsgbmV3UGFyYW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJldHVybnMgdGhlIHByZWZpeCBzaWduIHRvIHVzZSBmb3IgYSBuZXcgcGFyYW1ldGVyIGluIGFuIGV4aXN0ZW4gVVJMLlxyXG4gICAgICAgICpcclxuICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gID8gfCAmXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRVcmxQYXJhbVNpZ24odXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuICggIS9cXD8vLnRlc3QoIHVybCApICkgPyAnPycgOiAnJic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGlvbnMgYW5kIGNhbGxiYWNrcyB0byBmaXJlIGFmdGVyUmVuZGVyXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclJlbmRlckFjdGlvbnMoKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBzZWN0aW9uLmFkZENsYXNzKENPTVBMRVRFTFkpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYWZ0ZXJSZW5kZXIpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYWZ0ZXJSZW5kZXIoc2VjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF6eUxvYWQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHBsYXlNZWRpYShzZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICQuaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlckxvYWQgKSAmJiBvcHRpb25zLmFmdGVyTG9hZC5jYWxsKHNlY3Rpb24sIHNlY3Rpb24uZGF0YSgnYW5jaG9yJyksIChzZWN0aW9uLmluZGV4KFNFQ1RJT05fU0VMKSArIDEpKTtcclxuICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVuZGVyICkgJiYgb3B0aW9ucy5hZnRlclJlbmRlci5jYWxsKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGwgPSAwO1xyXG5cclxuICAgICAgICAvL3doZW4gc2Nyb2xsaW5nLi4uXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNlY3Rpb247XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5hdXRvU2Nyb2xsaW5nIHx8IG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxEaXJlY3Rpb24gPSBnZXRTY3JvbGxEaXJlY3Rpb24oY3VycmVudFNjcm9sbCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZVNlY3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyZWVuX21pZCA9IGN1cnJlbnRTY3JvbGwgKyAoJHdpbmRvdy5oZWlnaHQoKSAvIDIuMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNBdEJvdHRvbSA9ICRib2R5LmhlaWdodCgpIC0gJHdpbmRvdy5oZWlnaHQoKSA9PT0gY3VycmVudFNjcm9sbDtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gdXNpbmcgYGF1dG8taGVpZ2h0YCBmb3IgYSBzbWFsbCBsYXN0IHNlY3Rpb24gaXQgd29uJ3QgdGFrZSBtb3N0IG9mIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgaWYoaXNBdEJvdHRvbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVNlY3Rpb25JbmRleCA9IHNlY3Rpb25zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90YWtpbmcgdGhlIHNlY3Rpb24gd2hpY2ggaXMgc2hvd2luZyBtb3JlIGNvbnRlbnQgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBpY2sgdGhlIHRoZSBsYXN0IHNlY3Rpb24gd2hpY2ggcGFzc2VzIHRoZSBtaWRkbGUgbGluZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi5vZmZzZXRUb3AgPD0gc2NyZWVuX21pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVNlY3Rpb25JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNDb21wbGV0ZWx5SW5WaWV3UG9ydChzY3JvbGxEaXJlY3Rpb24pKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighJChTRUNUSU9OX0FDVElWRV9TRUwpLmhhc0NsYXNzKENPTVBMRVRFTFkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChTRUNUSU9OX0FDVElWRV9TRUwpLmFkZENsYXNzKENPTVBMRVRFTFkpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoQ09NUExFVEVMWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vZ2V0aW5nIHRoZSBsYXN0IG9uZSwgdGhlIGN1cnJlbnQgb25lIG9uIHRoZSBzY3JlZW5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uID0gJChzZWN0aW9ucykuZXEodmlzaWJsZVNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zZXR0aW5nIHRoZSB2aXNpYmxlIHNlY3Rpb24gYXMgYWN0aXZlIHdoZW4gbWFudWFsbHkgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICAvL2V4ZWN1dGluZyBvbmx5IG9uY2UgdGhlIGZpcnN0IHRpbWUgd2UgcmVhY2ggdGhlIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGlmKCFjdXJyZW50U2VjdGlvbi5oYXNDbGFzcyhBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nU2VjdGlvbkluZGV4ID0gbGVhdmluZ1NlY3Rpb24uaW5kZXgoU0VDVElPTl9TRUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeU1vdmVtZW50ID0gZ2V0WW1vdmVtZW50KGN1cnJlbnRTZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYW5jaG9yTGluayAgPSBjdXJyZW50U2VjdGlvbi5kYXRhKCdhbmNob3InKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbkluZGV4ID0gY3VycmVudFNlY3Rpb24uaW5kZXgoU0VDVElPTl9TRUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBjdXJyZW50U2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihhY3RpdmVTbGlkZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmNob3JMaW5rID0gYWN0aXZlU2xpZGUuZGF0YSgnYW5jaG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUluZGV4ID0gYWN0aXZlU2xpZGUuaW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uLmFkZENsYXNzKEFDVElWRSkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhBQ1RJVkUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLm9uTGVhdmUgKSAmJiBvcHRpb25zLm9uTGVhdmUuY2FsbCggbGVhdmluZ1NlY3Rpb24sIGxlYXZpbmdTZWN0aW9uSW5kZXgsIHNlY3Rpb25JbmRleCwgeU1vdmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyTG9hZCApICYmIG9wdGlvbnMuYWZ0ZXJMb2FkLmNhbGwoIGN1cnJlbnRTZWN0aW9uLCBhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE1lZGlhKGxlYXZpbmdTZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQoY3VycmVudFNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5TWVkaWEoY3VycmVudFNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hbmNob3JzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25lZWRlZCB0byBlbnRlciBpbiBoYXNoQ2hhbmdlIGV2ZW50IHdoZW4gdXNpbmcgdGhlIG1lbnUgd2l0aCBhbmNob3IgbGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxlZERlc3RpbnkgPSBhbmNob3JMaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yTGluaywgYW5jaG9yTGluaywgc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc21hbGwgdGltZW91dCBpbiBvcmRlciB0byBhdm9pZCBlbnRlcmluZyBpbiBoYXNoQ2hhbmdlIGV2ZW50IHdoZW4gc2Nyb2xsaW5nIGlzIG5vdCBmaW5pc2hlZCB5ZXRcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIHRoZSBhdXRvIGFkanVzdCBvZiB0aGUgdmlld3BvcnQgdG8gZml0IGEgd2hvbGUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxJZDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJZDIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgZml0VG9TZWN0aW9uIGFnYWluIGluIGNhc2UgaXQgd2FzIHNldCB0byBmYWxzZSBiZWZvcmUgdGhlIHRpbWVvdXQgZGVsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FuU2Nyb2xsICYmIG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWxsb3dzIHRvIHNjcm9sbCB0byBhbiBhY3RpdmUgc2VjdGlvbiBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHNlY3Rpb24gaXMgYWxyZWFkeSBhY3RpdmUsIHdlIHByZXZlbnQgZmlyaW5nIGNhbGxiYWNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJChTRUNUSU9OX0FDVElWRV9TRUwpLmlzKGN1cnJlbnRTZWN0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKCQoU0VDVElPTl9BQ1RJVkVfU0VMKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5maXRUb1NlY3Rpb25EZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhY3RpdmUgc2VjdGlvbiBoYXMgc2VlbiBpbiBpdHMgd2hvbGUgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNDb21wbGV0ZWx5SW5WaWV3UG9ydChtb3ZlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCkucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgIHZhciBib3R0b20gPSB0b3AgKyAkd2luZG93LmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgaWYobW92ZW1lbnQgPT0gJ3VwJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm90dG9tID49ICgkd2luZG93LnNjcm9sbFRvcCgpICsgJHdpbmRvdy5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvcCA8PSAkd2luZG93LnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBkaXJlY3RvbiBvZiB0aGUgdGhlIHNjcm9sbGluZyBmaXJlZCBieSB0aGUgc2Nyb2xsIGV2ZW50LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2Nyb2xsRGlyZWN0aW9uKGN1cnJlbnRTY3JvbGwpe1xyXG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGwgPyAnZG93bicgOiAndXAnO1xyXG5cclxuICAgICAgICAgICAgbGFzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAvL25lZWRlZCBmb3IgYXV0by1oZWlnaHQgc2VjdGlvbnMgdG8gZGV0ZXJtaW5lIGlmIHdlIHdhbnQgdG8gc2Nyb2xsIHRvIHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSBkZXN0aW5hdGlvblxyXG4gICAgICAgICAgICBwcmV2aW91c0Rlc3RUb3AgPSBjdXJyZW50U2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZXJtaW5lcyB0aGUgd2F5IG9mIHNjcm9sbGluZyB1cCBvciBkb3duOlxyXG4gICAgICAgICogYnkgJ2F1dG9tYXRpY2FsbHknIHNjcm9sbGluZyBhIHNlY3Rpb24gb3IgYnkgdXNpbmcgdGhlIGRlZmF1bHQgYW5kIG5vcm1hbCBzY3JvbGxpbmcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxpbmcodHlwZSwgc2Nyb2xsYWJsZSl7XHJcbiAgICAgICAgICAgIGlmICghaXNTY3JvbGxBbGxvd2VkLm1bdHlwZV0pe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjaGVjayA9ICh0eXBlID09PSAnZG93bicpID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgICAgICAgICAgdmFyIHNjcm9sbFNlY3Rpb24gPSAodHlwZSA9PT0gJ2Rvd24nKSA/IG1vdmVTZWN0aW9uRG93biA6IG1vdmVTZWN0aW9uVXA7XHJcblxyXG4gICAgICAgICAgICBpZihGUC5zY3JvbGxIb3Jpem9udGFsbHkpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbiA9IEZQLnNjcm9sbEhvcml6b250YWxseS5nZXRTY3JvbGxTZWN0aW9uKHR5cGUsIHNjcm9sbFNlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzY3JvbGxhYmxlLmxlbmd0aCA+IDAgKXtcclxuICAgICAgICAgICAgICAgIC8vaXMgdGhlIHNjcm9sbGJhciBhdCB0aGUgc3RhcnQvZW5kIG9mIHRoZSBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5pc1Njcm9sbGVkKGNoZWNrLCBzY3JvbGxhYmxlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZWQgdXAvZG93blxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIHRvdWNoU3RhcnRZID0gMDtcclxuICAgICAgICB2YXIgdG91Y2hTdGFydFggPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaEVuZFkgPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaEVuZFggPSAwO1xyXG5cclxuICAgICAgICAvKiBEZXRlY3RpbmcgdG91Y2ggZXZlbnRzXHJcblxyXG4gICAgICAgICogQXMgd2UgYXJlIGNoYW5naW5nIHRoZSB0b3AgcHJvcGVydHkgb2YgdGhlIHBhZ2Ugb24gc2Nyb2xsaW5nLCB3ZSBjYW4gbm90IHVzZSB0aGUgdHJhZGl0aW9uYWwgd2F5IHRvIGRldGVjdCBpdC5cclxuICAgICAgICAqIFRoaXMgd2F5LCB0aGUgdG91Y2hzdGFydCBhbmQgdGhlIHRvdWNoIG1vdmVzIHNob3dzIGFuIHNtYWxsIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtIHdoaWNoIGlzIHRoZVxyXG4gICAgICAgICogdXNlZCBvbmUgdG8gZGV0ZXJtaW5lIHRoZSBkaXJlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50KXtcclxuICAgICAgICAgICAgdmFyIGUgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbDogaWYgb25lIG9mIHRoZSBub3JtYWxTY3JvbGxFbGVtZW50cyBpc24ndCB3aXRoaW4gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQgaG9wcyB1cCB0aGUgRE9NIGNoYWluXHJcbiAgICAgICAgICAgIGlmICghY2hlY2tQYXJlbnRGb3JOb3JtYWxTY3JvbGxFbGVtZW50KGV2ZW50LnRhcmdldCkgJiYgaXNSZWFsbHlUb3VjaChlKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgZWFzaW5nIG9uIGlPUyBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNjcm9sbGFibGUoYWN0aXZlU2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhblNjcm9sbCAmJiAhc2xpZGVNb3ZpbmcpIHsgLy9pZiB0aGVyZXMgYW55ICNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFkgPSB0b3VjaEV2ZW50cy55O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRW5kWCA9IHRvdWNoRXZlbnRzLng7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbW92ZW1lbnQgaW4gdGhlIFggYXh5cyBpcyBncmVhdGVyIHRoYW4gaW4gdGhlIFkgYW5kIHRoZSBjdXJyZWN0IHNlY3Rpb24gaGFzIHNsaWRlcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVTZWN0aW9uLmZpbmQoU0xJREVTX1dSQVBQRVJfU0VMKS5sZW5ndGggJiYgTWF0aC5hYnModG91Y2hTdGFydFggLSB0b3VjaEVuZFgpID4gKE1hdGguYWJzKHRvdWNoU3RhcnRZIC0gdG91Y2hFbmRZKSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaXMgdGhlIG1vdmVtZW50IGdyZWF0ZXIgdGhhbiB0aGUgbWluaW11bSByZXNpc3RhbmNlIHRvIHNjcm9sbD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRvdWNoU3RhcnRYIC0gdG91Y2hFbmRYKSA+ICgkd2luZG93Lm91dGVyV2lkdGgoKSAvIDEwMCAqIG9wdGlvbnMudG91Y2hTZW5zaXRpdml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaFN0YXJ0WCA+IHRvdWNoRW5kWCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5tLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoYWN0aXZlU2VjdGlvbik7IC8vbmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZUxlZnQoYWN0aXZlU2VjdGlvbik7IC8vcHJldlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy92ZXJ0aWNhbCBzY3JvbGxpbmcgKG9ubHkgd2hlbiBhdXRvU2Nyb2xsaW5nIGlzIGVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyB0aGUgbW92ZW1lbnQgZ3JlYXRlciB0aGFuIHRoZSBtaW5pbXVtIHJlc2lzdGFuY2UgdG8gc2Nyb2xsP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpID4gKCR3aW5kb3cuaGVpZ2h0KCkgLyAxMDAgKiBvcHRpb25zLnRvdWNoU2Vuc2l0aXZpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hTdGFydFkgPiB0b3VjaEVuZFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmcoJ2Rvd24nLCBzY3JvbGxhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2hFbmRZID4gdG91Y2hTdGFydFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmcoJ3VwJywgc2Nyb2xsYWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZWN1cnNpdmUgZnVuY3Rpb24gdG8gbG9vcCB1cCB0aGUgcGFyZW50IG5vZGVzIHRvIGNoZWNrIGlmIG9uZSBvZiB0aGVtIGV4aXN0cyBpbiBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzXHJcbiAgICAgICAgICogQ3VycmVudGx5IHdvcmtzIHdlbGwgZm9yIGlPUyAtIEFuZHJvaWQgbWlnaHQgbmVlZCBzb21lIHRlc3RpbmdcclxuICAgICAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbCAgdGFyZ2V0IGVsZW1lbnQgLyBqcXVlcnkgc2VsZWN0b3IgKGluIHN1YnNlcXVlbnQgbm9kZXMpXHJcbiAgICAgICAgICogQHBhcmFtICB7aW50fSAgICAgaG9wIGN1cnJlbnQgaG9wIGNvbXBhcmVkIHRvIG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkXHJcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSBpcyBhIG1hdGNoIHRvIG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBjaGVja1BhcmVudEZvck5vcm1hbFNjcm9sbEVsZW1lbnQgKGVsLCBob3ApIHtcclxuICAgICAgICAgICAgaG9wID0gaG9wIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKGVsKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChob3AgPCBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZCAmJlxyXG4gICAgICAgICAgICAgICAgcGFyZW50LmlzKG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHMpICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG9wID09IG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudFRvdWNoVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tQYXJlbnRGb3JOb3JtYWxTY3JvbGxFbGVtZW50KHBhcmVudCwgKytob3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFzIElFID49IDEwIGZpcmVzIGJvdGggdG91Y2ggYW5kIG1vdXNlIGV2ZW50cyB3aGVuIHVzaW5nIGEgbW91c2UgaW4gYSB0b3VjaHNjcmVlblxyXG4gICAgICAgICogdGhpcyB3YXkgd2UgbWFrZSBzdXJlIHRoYXQgaXMgcmVhbGx5IGEgdG91Y2ggZXZlbnQgd2hhdCBJRSBpcyBkZXRlY3RpbmcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc1JlYWxseVRvdWNoKGUpe1xyXG4gICAgICAgICAgICAvL2lmIGlzIG5vdCBJRSAgIHx8ICBJRSBpcyBkZXRlY3RpbmcgYHRvdWNoYCBvciBgcGVuYFxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGUucG9pbnRlclR5cGUgPT09ICd1bmRlZmluZWQnIHx8IGUucG9pbnRlclR5cGUgIT0gJ21vdXNlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogSGFuZGxlciBmb3IgdGhlIHRvdWNoIHN0YXJ0IGV2ZW50LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgZSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICAvL3N0b3BwaW5nIHRoZSBhdXRvIHNjcm9sbCB0byBhZGp1c3QgdG8gYSBzZWN0aW9uXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICRodG1sQm9keS5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGlzUmVhbGx5VG91Y2goZSkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoRXZlbnRzID0gZ2V0RXZlbnRzUGFnZShlKTtcclxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnRZID0gdG91Y2hFdmVudHMueTtcclxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gdG91Y2hFdmVudHMueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhdmVyYWdlIG9mIHRoZSBsYXN0IGBudW1iZXJgIGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBhcnJheS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEF2ZXJhZ2UoZWxlbWVudHMsIG51bWJlcil7XHJcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xyXG5cclxuICAgICAgICAgICAgLy90YWtpbmcgYG51bWJlcmAgZWxlbWVudHMgZnJvbSB0aGUgZW5kIHRvIG1ha2UgdGhlIGF2ZXJhZ2UsIGlmIHRoZXJlIGFyZSBub3QgZW5vdWdodCwgMVxyXG4gICAgICAgICAgICB2YXIgbGFzdEVsZW1lbnRzID0gZWxlbWVudHMuc2xpY2UoTWF0aC5tYXgoZWxlbWVudHMubGVuZ3RoIC0gbnVtYmVyLCAxKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGFzdEVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHN1bSA9IHN1bSArIGxhc3RFbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChzdW0vbnVtYmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERldGVjdGluZyBtb3VzZXdoZWVsIHNjcm9sbGluZ1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogaHR0cDovL2Jsb2dzLnNpdGVwb2ludHN0YXRpYy5jb20vZXhhbXBsZXMvdGVjaC9tb3VzZS13aGVlbC9pbmRleC5odG1sXHJcbiAgICAgICAgICogaHR0cDovL3d3dy5zaXRlcG9pbnQuY29tL2h0bWw1LWphdmFzY3JpcHQtbW91c2Utd2hlZWwvXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIHByZXZUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIE1vdXNlV2hlZWxIYW5kbGVyKGUpIHtcclxuICAgICAgICAgICAgdmFyIGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIGlzTm9ybWFsU2Nyb2xsID0gJChDT01QTEVURUxZX1NFTCkuaGFzQ2xhc3MoTk9STUFMX1NDUk9MTCk7XHJcblxyXG4gICAgICAgICAgICAvL2F1dG9zY3JvbGxpbmcgYW5kIG5vdCB6b29taW5nP1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIWNvbnRyb2xQcmVzc2VkICYmICFpc05vcm1hbFNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcbiAgICAgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZIHx8IC1lLmRldGFpbDtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBob3Jpem9udGFsRGV0ZWN0aW9uID0gdHlwZW9mIGUud2hlZWxEZWx0YVggIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlLmRlbHRhWCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5ID0gKE1hdGguYWJzKGUud2hlZWxEZWx0YVgpIDwgTWF0aC5hYnMoZS53aGVlbERlbHRhKSkgfHwgKE1hdGguYWJzKGUuZGVsdGFYICkgPCBNYXRoLmFicyhlLmRlbHRhWSkgfHwgIWhvcml6b250YWxEZXRlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vTGltaXRpbmcgdGhlIGFycmF5IHRvIDE1MCAobGV0cyBub3Qgd2FzdGUgbWVtb3J5ISlcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbGluZ3MubGVuZ3RoID4gMTQ5KXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9rZWVwaW5nIHJlY29yZCBvZiB0aGUgcHJldmlvdXMgc2Nyb2xsaW5nc1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5ncy5wdXNoKE1hdGguYWJzKHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRvIHNjcm9sbCB0aGUgc2l0ZSBvbiBtb3VzZSB3aGVlbCB3aGVuIHNjcm9sbGJhciBpcyBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2Nyb2xsYWJsZShhY3RpdmVTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RpbWUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBsYXN0IHNjcm9sbCBhbmQgdGhlIGN1cnJlbnQgb25lXHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZURpZmYgPSBjdXJUaW1lLXByZXZUaW1lO1xyXG4gICAgICAgICAgICAgICAgcHJldlRpbWUgPSBjdXJUaW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaGF2ZW4ndCB0aGV5IHNjcm9sbGVkIGluIGEgd2hpbGU/XHJcbiAgICAgICAgICAgICAgICAvLyhlbm91Z2ggdG8gYmUgY29uc2lkZXIgYSBkaWZmZXJlbnQgc2Nyb2xsaW5nIGFjdGlvbiB0byBzY3JvbGwgYW5vdGhlciBzZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgaWYodGltZURpZmYgPiAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZW1wdHlpbmcgdGhlIGFycmF5LCB3ZSBkb250IGNhcmUgYWJvdXQgb2xkIHNjcm9sbGluZ3MgZm9yIG91ciBhdmVyYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihjYW5TY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmVyYWdlRW5kID0gZ2V0QXZlcmFnZShzY3JvbGxpbmdzLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VNaWRkbGUgPSBnZXRBdmVyYWdlKHNjcm9sbGluZ3MsIDcwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNBY2NlbGVyYXRpbmcgPSBhdmVyYWdlRW5kID49IGF2ZXJhZ2VNaWRkbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdG8gYXZvaWQgZG91YmxlIHN3aXBlcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzQWNjZWxlcmF0aW5nICYmIGlzU2Nyb2xsaW5nVmVydGljYWxseSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd24/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygnZG93bicsIHNjcm9sbGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygndXAnLCBzY3JvbGxhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIC8vc3RvcHBpbmcgdGhlIGF1dG8gc2Nyb2xsIHRvIGFkanVzdCB0byBhIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICRodG1sQm9keS5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIGEgc2xpZGVyIHRvIHRoZSBnaXZlbiBkaXJlY3Rpb24uXHJcbiAgICAgICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGUoZGlyZWN0aW9uLCBzZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlY3Rpb24gPSB0eXBlb2Ygc2VjdGlvbiA9PT0gJ3VuZGVmaW5lZCcgPyAkKFNFQ1RJT05fQUNUSVZFX1NFTCkgOiBzZWN0aW9uO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciBudW1TbGlkZXMgPSBzbGlkZXMuZmluZChTTElERV9TRUwpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vcmUgdGhhbiBvbmUgc2xpZGUgbmVlZGVkIGFuZCBub3RoaW5nIHNob3VsZCBiZSBzbGlkaW5nXHJcbiAgICAgICAgICAgIGlmICghc2xpZGVzLmxlbmd0aCB8fCBzbGlkZU1vdmluZyB8fCBudW1TbGlkZXMgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSBzbGlkZXMuZmluZChTTElERV9BQ1RJVkVfU0VMKTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnbGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IGN1cnJlbnRTbGlkZS5wcmV2KFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IGN1cnJlbnRTbGlkZS5uZXh0KFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaXNuJ3QgdGhlcmUgYSBuZXh0IHNsaWRlIGluIHRoZSBzZWN1ZW5jZT9cclxuICAgICAgICAgICAgaWYoIWRlc3RpbnkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIC8vcmVzcGVjdCBsb29wSG9yaXpvbnRhbCBzZXR0aW5cclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5sb29wSG9yaXpvbnRhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW55ID0gY3VycmVudFNsaWRlLnNpYmxpbmdzKCc6bGFzdCcpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGlueSA9IGN1cnJlbnRTbGlkZS5zaWJsaW5ncygnOmZpcnN0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlTW92aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnksIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1haW50YWlucyB0aGUgYWN0aXZlIHNsaWRlcyBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAqIChCZWNhdXNlIHRoZSBgc2Nyb2xsYCBhbmltYXRpb24gbWlnaHQgZ2V0IGxvc3Qgd2l0aCBzb21lIGFjdGlvbnMsIHN1Y2ggYXMgd2hlbiB1c2luZyBjb250aW51b3VzVmVydGljYWwpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBrZWVwU2xpZGVzUG9zaXRpb24oKXtcclxuICAgICAgICAgICAgJChTTElERV9BQ1RJVkVfU0VMKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoJCh0aGlzKSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHByZXZpb3VzRGVzdFRvcCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXN0aW5hdGlvbiBZIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uIGFuZFxyXG4gICAgICAgICogdGhlIGhlaWdodCBvZiB0aGUgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldERlc3RpbmF0aW9uUG9zaXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciBlbGVtUG9zaXRpb24gPSBlbGVtZW50LnBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RvcCBvZiB0aGUgZGVzaW5hdGlvbiB3aWxsIGJlIGF0IHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGVsZW1Qb3NpdGlvbi50b3A7XHJcbiAgICAgICAgICAgIHZhciBpc1Njcm9sbGluZ0Rvd24gPSAgZWxlbVBvc2l0aW9uLnRvcCA+IHByZXZpb3VzRGVzdFRvcDtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25Cb3R0b20gPSBwb3NpdGlvbiAtIHdpbmRvd3NIZWlnaHQgKyBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uID0gb3B0aW9ucy5iaWdTZWN0aW9uc0Rlc3RpbmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy9pcyB0aGUgZGVzdGluYXRpb24gZWxlbWVudCBiaWdnZXIgdGhhbiB0aGUgdmlld3BvcnQ/XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQub3V0ZXJIZWlnaHQoKSA+IHdpbmRvd3NIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXA/IFxyXG4gICAgICAgICAgICAgICAgaWYoIWlzU2Nyb2xsaW5nRG93biAmJiAhYmlnU2VjdGlvbnNEZXN0aW5hdGlvbiB8fCBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uID09PSAnYm90dG9tJyApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zZWN0aW9ucyBlcXVhbCBvciBzbWFsbGVyIHRoYW4gdGhlIHZpZXdwb3J0IGhlaWdodCAmJiBzY3JvbGxpbmcgZG93bj8gfHwgIGlzIHJlc2l6aW5nIGFuZCBpdHMgaW4gdGhlIGxhc3Qgc2VjdGlvblxyXG4gICAgICAgICAgICBlbHNlIGlmKGlzU2Nyb2xsaW5nRG93biB8fCAoaXNSZXNpemluZyAmJiBlbGVtZW50LmlzKCc6bGFzdC1jaGlsZCcpKSApe1xyXG4gICAgICAgICAgICAgICAgLy9UaGUgYm90dG9tIG9mIHRoZSBkZXN0aW5hdGlvbiB3aWxsIGJlIGF0IHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHNlY3Rpb25Cb3R0b207XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIEtlZXBpbmcgcmVjb3JkIG9mIHRoZSBsYXN0IHNjcm9sbGVkIHBvc2l0aW9uIHRvIGRldGVybWluZSB0aGUgc2Nyb2xsaW5nIGRpcmVjdGlvbi5cclxuICAgICAgICAgICAgTm8gY29udmVudGlvbmFsIG1ldGhvZHMgY2FuIGJlIHVzZWQgYXMgdGhlIHNjcm9sbCBiYXIgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuICAgICAgICAgICAgQU5EIHRoZSBzZWN0aW9uIG1pZ2h0IG5vdCBiZSBhY3RpdmUgaWYgaXQgaXMgYXV0by1oZWlnaHQgYW5kIGRpZG50IHJlYWNoIHRoZSBtaWRkbGVcclxuICAgICAgICAgICAgb2YgdGhlIHZpZXdwb3J0LlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcmV2aW91c0Rlc3RUb3AgPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRoZSBzaXRlIHRvIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBzY3JvbGxzIHRvIHRoZSBzbGlkZSBpZiBhIGNhbGxiYWNrIGlzIGdpdmVuLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsUGFnZShlbGVtZW50LCBjYWxsYmFjaywgaXNNb3ZlbWVudFVwKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQgPT09ICd1bmRlZmluZWQnKXsgcmV0dXJuOyB9IC8vdGhlcmUncyBubyBlbGVtZW50IHRvIHNjcm9sbCwgbGVhdmluZyB0aGUgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgIHZhciBkdG9wID0gZ2V0RGVzdGluYXRpb25Qb3NpdGlvbihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9jYWwgdmFyaWFibGVzXHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIGlzTW92ZW1lbnRVcDogaXNNb3ZlbWVudFVwLFxyXG4gICAgICAgICAgICAgICAgZHRvcDogZHRvcCxcclxuICAgICAgICAgICAgICAgIHlNb3ZlbWVudDogZ2V0WW1vdmVtZW50KGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yTGluazogZWxlbWVudC5kYXRhKCdhbmNob3InKSxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogZWxlbWVudC5pbmRleChTRUNUSU9OX1NFTCksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZTogZWxlbWVudC5maW5kKFNMSURFX0FDVElWRV9TRUwpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbjogJChTRUNUSU9OX0FDVElWRV9TRUwpLFxyXG4gICAgICAgICAgICAgICAgbGVhdmluZ1NlY3Rpb246ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCkgKyAxLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FjaGluZyB0aGUgdmFsdWUgb2YgaXNSZXNpemluZyBhdCB0aGUgbW9tbWVudCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAvL2JlY2F1c2UgaXQgd2lsbCBiZSBjaGVja2VkIGxhdGVyIGluc2lkZSBhIHNldFRpbWVvdXQgYW5kIHRoZSB2YWx1ZSBtaWdodCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsSXNSZXNpemluZzogaXNSZXNpemluZ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9xdWl0aW5nIHdoZW4gZGVzdGluYXRpb24gc2Nyb2xsIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IG9uZVxyXG4gICAgICAgICAgICBpZigodi5hY3RpdmVTZWN0aW9uLmlzKGVsZW1lbnQpICYmICFpc1Jlc2l6aW5nKSB8fCAob3B0aW9ucy5zY3JvbGxCYXIgJiYgJHdpbmRvdy5zY3JvbGxUb3AoKSA9PT0gdi5kdG9wICYmICFlbGVtZW50Lmhhc0NsYXNzKEFVVE9fSEVJR0hUKSApKXsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBpZih2LmFjdGl2ZVNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmNob3JMaW5rID0gdi5hY3RpdmVTbGlkZS5kYXRhKCdhbmNob3InKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUluZGV4ID0gdi5hY3RpdmVTbGlkZS5pbmRleCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBjb250aW51b3VzVmVydGljYWwgJiYgd2UgbmVlZCB0byB3cmFwIGFyb3VuZFxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmIG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmIHR5cGVvZiAodi5pc01vdmVtZW50VXApICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICAgICAgICAoKCF2LmlzTW92ZW1lbnRVcCAmJiB2LnlNb3ZlbWVudCA9PSAndXAnKSB8fCAvLyBJbnRlbmRpbmcgdG8gc2Nyb2xsIGRvd24gYnV0IGFib3V0IHRvIGdvIHVwIG9yXHJcbiAgICAgICAgICAgICAgICAodi5pc01vdmVtZW50VXAgJiYgdi55TW92ZW1lbnQgPT0gJ2Rvd24nKSkpIHsgLy8gaW50ZW5kaW5nIHRvIHNjcm9sbCB1cCBidXQgYWJvdXQgdG8gZ28gZG93blxyXG5cclxuICAgICAgICAgICAgICAgIHYgPSBjcmVhdGVJbmZpbml0ZVNlY3Rpb25zKHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NhbGxiYWNrIChvbkxlYXZlKSBpZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICBpZigkLmlzRnVuY3Rpb24ob3B0aW9ucy5vbkxlYXZlKSAmJiAhdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5vbkxlYXZlLmNhbGwodi5hY3RpdmVTZWN0aW9uLCB2LmxlYXZpbmdTZWN0aW9uLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi55TW92ZW1lbnQpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdG9wTWVkaWEodi5hY3RpdmVTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoQUNUSVZFKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgIGxhenlMb2FkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5vbkxlYXZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZyb20gYWN0aXZhdGluZyB0aGUgTW91c2VXaGVlbEhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgLy9tb3JlIHRoYW4gb25jZSBpZiB0aGUgcGFnZSBpcyBzY3JvbGxpbmdcclxuICAgICAgICAgICAgY2FuU2Nyb2xsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZShzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIHYuYW5jaG9yTGluaywgdi5zZWN0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgcGVyZm9ybU1vdmVtZW50KHYpO1xyXG5cclxuICAgICAgICAgICAgLy9mbGFnIHRvIGF2b2lkIGNhbGxpbmduIGBzY3JvbGxQYWdlKClgIHR3aWNlIGluIGNhc2Ugb2YgdXNpbmcgYW5jaG9yIGxpbmtzXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxlZERlc3RpbnkgPSB2LmFuY2hvckxpbms7XHJcblxyXG4gICAgICAgICAgICAvL2F2b2lkIGZpcmluZyBpdCB0d2ljZSAoYXMgaXQgZG9lcyBhbHNvIG9uIHNjcm9sbClcclxuICAgICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KHYuYW5jaG9yTGluaywgdi5zZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQZXJmb3JtcyB0aGUgdmVydGljYWwgbW92ZW1lbnQgKGJ5IENTUzMgb3IgYnkgalF1ZXJ5KVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybU1vdmVtZW50KHYpe1xyXG4gICAgICAgICAgICAvLyB1c2luZyBDU1MzIHRyYW5zbGF0ZSBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNzczMgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKDBweCwgLScgKyB2LmR0b3AgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2V2ZW4gd2hlbiB0aGUgc2Nyb2xsaW5nU3BlZWQgaXMgMCB0aGVyZSdzIGEgbGl0dGxlIGRlbGF5LCB3aGljaCBtaWdodCBjYXVzZSB0aGVcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nU3BlZWQgdG8gY2hhbmdlIGluIGNhc2Ugb2YgdXNpbmcgc2lsZW50TW92ZVRvKCk7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbGluZ1NwZWVkKXtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkc0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVzaW5nIGpRdWVyeSBhbmltYXRlXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsU2V0dGluZ3MgPSBnZXRTY3JvbGxTZXR0aW5ncyh2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHNjcm9sbFNldHRpbmdzLmVsZW1lbnQpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQsIG9wdGlvbnMuZWFzaW5nKS5wcm9taXNlKCkuZG9uZShmdW5jdGlvbiAoKSB7IC8vb25seSBvbmUgc2luZ2xlIGNhbGxiYWNrIGluIGNhc2Ugb2YgYW5pbWF0aW5nICBgaHRtbCwgYm9keWBcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbEJhcil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBIYWNrIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgdGltZW91dCBwcmV2ZW50cyBzZXR0aW5nIHRoZSBtb3N0IGRvbWluYW50IHNlY3Rpb24gaW4gdGhlIHZpZXdwb3J0IGFzIFwiYWN0aXZlXCIgd2hlbiB0aGUgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxlZCB0byBhIHNtYWxsZXIgc2VjdGlvbiBieSB1c2luZyB0aGUgbW91c2V3aGVlbCAoYXV0byBzY3JvbGxpbmcpIHJhdGhlciB0aGFuIGRyYWdpbmcgdGhlIHNjcm9sbCBiYXIuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHVzaW5nIHNjcm9sbEJhcjp0cnVlIEl0IHNlZW1zIGxpa2UgdGhlIHNjcm9sbCBldmVudHMgc3RpbGwgZ2V0dGluZyBwcm9wYWdhdGVkIGV2ZW4gYWZ0ZXIgdGhlIHNjcm9sbGluZyBhbmltYXRpb24gaGFzIGZpbmlzaGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIHNjcm9sbGluZyBzZXR0aW5ncyBkZXBlbmRpbmcgb24gdGhlIHBsdWdpbiBhdXRvU2Nyb2xsaW5nIG9wdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2Nyb2xsU2V0dGluZ3Modil7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLm9wdGlvbnMgPSB7ICd0b3AnOiAtdi5kdG9wfTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5lbGVtZW50ID0gV1JBUFBFUl9TRUw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLm9wdGlvbnMgPSB7ICdzY3JvbGxUb3AnOiB2LmR0b3B9O1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSAnaHRtbCwgYm9keSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgc2VjdGlvbnMgYmVmb3JlIG9yIGFmdGVyIHRoZSBjdXJyZW50IG9uZSB0byBjcmVhdGUgdGhlIGluZmluaXRlIGVmZmVjdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUluZmluaXRlU2VjdGlvbnModil7XHJcbiAgICAgICAgICAgIC8vIFNjcm9sbGluZyBkb3duXHJcbiAgICAgICAgICAgIGlmICghdi5pc01vdmVtZW50VXApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgYWxsIHByZXZpb3VzIHNlY3Rpb25zIHRvIGFmdGVyIHRoZSBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgJChTRUNUSU9OX0FDVElWRV9TRUwpLmFmdGVyKHYuYWN0aXZlU2VjdGlvbi5wcmV2QWxsKFNFQ1RJT05fU0VMKS5nZXQoKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAvLyBTY3JvbGxpbmcgdXBcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgYWxsIG5leHQgc2VjdGlvbnMgdG8gYmVmb3JlIHRoZSBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgJChTRUNUSU9OX0FDVElWRV9TRUwpLmJlZm9yZSh2LmFjdGl2ZVNlY3Rpb24ubmV4dEFsbChTRUNUSU9OX1NFTCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNYWludGFpbiB0aGUgZGlzcGxheWVkIHBvc2l0aW9uIChub3cgdGhhdCB3ZSBjaGFuZ2VkIHRoZSBlbGVtZW50IG9yZGVyKVxyXG4gICAgICAgICAgICBzaWxlbnRTY3JvbGwoJChTRUNUSU9OX0FDVElWRV9TRUwpLnBvc2l0aW9uKCkudG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBhY3RpdmUgc2xpZGVzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGtlZXBTbGlkZXNQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2F2ZSBmb3IgbGF0ZXIgdGhlIGVsZW1lbnRzIHRoYXQgc3RpbGwgbmVlZCB0byBiZSByZW9yZGVyZWRcclxuICAgICAgICAgICAgdi53cmFwQXJvdW5kRWxlbWVudHMgPSB2LmFjdGl2ZVNlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSBhbmltYXRpb24gdmFyaWFibGVzXHJcbiAgICAgICAgICAgIHYuZHRvcCA9IHYuZWxlbWVudC5wb3NpdGlvbigpLnRvcDtcclxuICAgICAgICAgICAgdi55TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQodi5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBGaXggc2VjdGlvbiBvcmRlciBhZnRlciBjb250aW51b3VzVmVydGljYWwgY2hhbmdlcyBoYXZlIGJlZW4gYW5pbWF0ZWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlciAodikge1xyXG4gICAgICAgICAgICAvLyBJZiBjb250aW51b3VzVmVydGljYWwgaXMgaW4gZWZmZWN0IChhbmQgYXV0b1Njcm9sbGluZyB3b3VsZCBhbHNvIGJlIGluIGVmZmVjdCB0aGVuKSxcclxuICAgICAgICAgICAgLy8gZmluaXNoIG1vdmluZyB0aGUgZWxlbWVudHMgYXJvdW5kIHNvIHRoZSBkaXJlY3QgbmF2aWdhdGlvbiB3aWxsIGZ1bmN0aW9uIG1vcmUgc2ltcGx5XHJcbiAgICAgICAgICAgIGlmICghdi53cmFwQXJvdW5kRWxlbWVudHMgfHwgIXYud3JhcEFyb3VuZEVsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodi5pc01vdmVtZW50VXApIHtcclxuICAgICAgICAgICAgICAgICQoU0VDVElPTl9GSVJTVF9TRUwpLmJlZm9yZSh2LndyYXBBcm91bmRFbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fTEFTVF9TRUwpLmFmdGVyKHYud3JhcEFyb3VuZEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKS5wb3NpdGlvbigpLnRvcCk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYWludGFpbiB0aGUgYWN0aXZlIHNsaWRlcyB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICBrZWVwU2xpZGVzUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGlvbnMgdG8gZG8gb25jZSB0aGUgc2VjdGlvbiBpcyBsb2FkZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclNlY3Rpb25Mb2FkcyAodil7XHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlcih2KTtcclxuXHJcbiAgICAgICAgICAgIC8vY2FsbGJhY2sgKGFmdGVyTG9hZCkgaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKG9wdGlvbnMuYWZ0ZXJMb2FkKSAmJiAhdi5sb2NhbElzUmVzaXppbmcgJiYgb3B0aW9ucy5hZnRlckxvYWQuY2FsbCh2LmVsZW1lbnQsIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSkpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucmVzZXRTbGlkZXJzICYmIEZQLnJlc2V0U2xpZGVycyl7XHJcbiAgICAgICAgICAgICAgICBGUC5yZXNldFNsaWRlcnMuYXBwbHkodik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXlNZWRpYSh2LmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2LmVsZW1lbnQuYWRkQ2xhc3MoQ09NUExFVEVMWSkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhblNjcm9sbCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAkLmlzRnVuY3Rpb24odi5jYWxsYmFjaykgJiYgdi5jYWxsYmFjay5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBMYXp5IGxvYWRzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsYXp5TG9hZChkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIGRlc3RpbnkuZmluZCgnaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdLCBpZnJhbWVbZGF0YS1zcmNdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCAkKHRoaXMpLmRhdGEoJ3NyYycpKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQXR0cignZGF0YS1zcmMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLmlzKCdzb3VyY2UnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd2aWRlbycpLmdldCgwKS5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQbGF5cyB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwbGF5TWVkaWEoZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW55ID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAvL3BsYXlpbmcgSFRNTDUgbWVkaWEgZWxlbWVudHNcclxuICAgICAgICAgICAgZGVzdGlueS5maW5kKCd2aWRlbywgYXVkaW8nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheScpICYmIHR5cGVvZiBlbGVtZW50LnBsYXkgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy95b3V0dWJlIHZpZGVvc1xyXG4gICAgICAgICAgICBkZXN0aW55LmZpbmQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKHRoaXMpLmdldCgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgKXtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5WW91dHViZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vaW4gY2FzZSB0aGUgVVJMIHdhcyBub3QgbG9hZGVkIHlldC4gT24gcGFnZSBsb2FkIHdlIG5lZWQgdGltZSBmb3IgdGhlIG5ldyBVUkwgKHdpdGggdGhlIEFQSSBzdHJpbmcpIHRvIGxvYWQuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXknKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5WW91dHViZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGxheXMgYSB5b3V0dWJlIHZpZGVvXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwbGF5WW91dHViZShlbGVtZW50KXtcclxuICAgICAgICAgICAgZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGxheVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU3RvcHMgdmlkZW8gYW5kIGF1ZGlvIGVsZW1lbnRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcE1lZGlhKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgLy9zdG9wcGluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xyXG4gICAgICAgICAgICBkZXN0aW55LmZpbmQoJ3ZpZGVvLCBhdWRpbycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKS5nZXQoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rZWVwcGxheWluZycpICYmIHR5cGVvZiBlbGVtZW50LnBhdXNlID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3lvdXR1YmUgdmlkZW9zXHJcbiAgICAgICAgICAgIGRlc3RpbnkuZmluZCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZ2V0KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCAveW91dHViZVxcLmNvbVxcL2VtYmVkXFwvLy50ZXN0KCQodGhpcykuYXR0cignc3JjJykpICYmICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1rZWVwcGxheWluZycpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmdldCgwKS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywnKicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgYWN0aXZlIHNsaWRlIChvciBzZWN0aW9uKSBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNsaWRlT3JTZWN0aW9uKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSBkZXN0aW55LmZpbmQoU0xJREVfQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgIGlmKCBzbGlkZS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gJChzbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0aW55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRvIHRoZSBhbmNob3IgaW4gdGhlIFVSTCB3aGVuIGxvYWRpbmcgdGhlIHNpdGVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvQW5jaG9yKCl7XHJcbiAgICAgICAgICAgIC8vZ2V0dGluZyB0aGUgYW5jaG9yIGxpbmsgaW4gdGhlIFVSTCBhbmQgZGVsZXRpbmcgdGhlIGAjYFxyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAgd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZVswXSk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZVsxXSk7XHJcblxyXG4gICAgICAgICAgICBpZihzZWN0aW9uKXsgIC8vaWYgdGhlcmVzIGFueSAjXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmFuaW1hdGVBbmNob3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uLCBzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRNb3ZlVG8oc2VjdGlvbiwgc2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVjdGluZyBhbnkgY2hhbmdlIG9uIHRoZSBVUkwgdG8gc2Nyb2xsIHRvIHRoZSBnaXZlbiBhbmNob3IgbGlua1xyXG4gICAgICAgICogKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBoYXNoQ2hhbmdlSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZighaXNTY3JvbGxpbmcgJiYgIW9wdGlvbnMubG9ja0FuY2hvcnMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZVsxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vd2hlbiBtb3ZpbmcgdG8gYSBzbGlkZSBpbiB0aGUgZmlyc3Qgc2VjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUgKGZpcnN0IHRpbWUgdG8gYWRkIGFuIGFuY2hvciB0byB0aGUgVVJMKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0ZpcnN0U2xpZGVNb3ZlID0gICh0eXBlb2YgbGFzdFNjcm9sbGVkRGVzdGlueSA9PT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0ZpcnN0U2Nyb2xsTW92ZSA9ICh0eXBlb2YgbGFzdFNjcm9sbGVkRGVzdGlueSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNsaWRlID09PSAndW5kZWZpbmVkJyAmJiAhc2xpZGVNb3ZpbmcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLyppbiBvcmRlciB0byBjYWxsIHNjcm9sbHBhZ2UoKSBvbmx5IG9uY2UgZm9yIGVhY2ggZGVzdGluYXRpb24gYXQgYSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgSXQgaXMgY2FsbGVkIHR3aWNlIGZvciBlYWNoIHNjcm9sbCBvdGhlcndpc2UsIGFzIGluIGNhc2Ugb2YgdXNpbmcgYW5jaG9ybGlua3MgYGhhc2hDaGFuZ2VgXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgaXMgZmlyZWQgb24gZXZlcnkgc2Nyb2xsIHRvby4qL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoc2VjdGlvbiAmJiBzZWN0aW9uICE9PSBsYXN0U2Nyb2xsZWREZXN0aW55KSAmJiAhaXNGaXJzdFNsaWRlTW92ZSB8fCBpc0ZpcnN0U2Nyb2xsTW92ZSB8fCAoIXNsaWRlTW92aW5nICYmIGxhc3RTY3JvbGxlZFNsaWRlICE9IHNsaWRlICkpICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uLCBzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1NsaWRpbmcgd2l0aCBhcnJvdyBrZXlzLCBib3RoLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxyXG4gICAgICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChrZXlkb3duSWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSAkKCc6Zm9jdXMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFhY3RpdmVFbGVtZW50LmlzKCd0ZXh0YXJlYScpICYmICFhY3RpdmVFbGVtZW50LmlzKCdpbnB1dCcpICYmICFhY3RpdmVFbGVtZW50LmlzKCdzZWxlY3QnKSAmJlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5hdHRyKCdjb250ZW50RWRpdGFibGUnKSAhPT0gXCJ0cnVlXCIgJiYgYWN0aXZlRWxlbWVudC5hdHRyKCdjb250ZW50RWRpdGFibGUnKSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMua2V5Ym9hcmRTY3JvbGxpbmcgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS53aGljaDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgdGhlIHNjcm9sbCB3aXRoIGFycm93IGtleXMgJiBzcGFjZWJhciAmIFBhZ2UgVXAgJiBEb3duIGtleXNcclxuICAgICAgICAgICAgICAgIHZhciBrZXlDb250cm9scyA9IFs0MCwgMzgsIDMyLCAzMywgMzRdO1xyXG4gICAgICAgICAgICAgICAgaWYoJC5pbkFycmF5KGtleUNvZGUsIGtleUNvbnRyb2xzKSA+IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbFByZXNzZWQgPSBlLmN0cmxLZXk7XHJcblxyXG4gICAgICAgICAgICAgICAga2V5ZG93bklkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9ua2V5ZG93bihlKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcFRleHRIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgICQodGhpcykucHJldigpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RvIHByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIHpvb21pbmdcclxuICAgICAgICBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGlmKGlzV2luZG93Rm9jdXNlZCl7IC8vdGhlIGtleXVwIGdldHMgZmlyZWQgb24gbmV3IHRhYiBjdHJsICsgdCBpbiBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBjb250cm9sUHJlc3NlZCA9IGUuY3RybEtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgLy9taWRkbGUgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDIpe1xyXG4gICAgICAgICAgICAgICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy91bmJpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcclxuICAgICAgICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgLy9taWRkbGUgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDIpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9mZignbW91c2Vtb3ZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2Nyb2xsaW5nIGhvcml6b250YWxseSB3aGVuIGNsaWNraW5nIG9uIHRoZSBzbGlkZXIgY29udHJvbHMuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVBcnJvd0hhbmRsZXIoKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKHRoaXMpLmNsb3Nlc3QoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoU0xJREVTX1BSRVYpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5sZWZ0KXtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVMZWZ0KHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ucmlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZVJpZ2h0KHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21taW5nIGJhY2suXHJcbiAgICAgICAgZnVuY3Rpb24gYmx1ckhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaXNXaW5kb3dGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnRyb2xQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Njcm9sbHMgdG8gdGhlIHNlY3Rpb24gd2hlbiBjbGlja2luZyB0aGUgbmF2aWdhdGlvbiBidWxsZXRcclxuICAgICAgICBmdW5jdGlvbiBzZWN0aW9uQnVsbGV0SGFuZGxlcihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHNjcm9sbFBhZ2UoJChTRUNUSU9OX1NFTCkuZXEoaW5kZXgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2Nyb2xscyB0aGUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZSBkZXN0aW5hdGlvbiBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICBmdW5jdGlvbiBzbGlkZUJ1bGxldEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQodGhpcykuY2xvc2VzdChTRUNUSU9OX1NFTCkuZmluZChTTElERVNfV1JBUFBFUl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IHNsaWRlcy5maW5kKFNMSURFX1NFTCkuZXEoJCh0aGlzKS5jbG9zZXN0KCdsaScpLmluZGV4KCkpO1xyXG5cclxuICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEtleWRvd24gZXZlbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9ua2V5ZG93bihlKXtcclxuICAgICAgICAgICAgdmFyIHNoaWZ0UHJlc3NlZCA9IGUuc2hpZnRLZXk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIC8vdXBcclxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Rvd25cclxuICAgICAgICAgICAgICAgIGNhc2UgMzI6IC8vc3BhY2ViYXJcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlmdFByZXNzZWQgJiYgaXNTY3JvbGxBbGxvd2VkLmsudXApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLmRvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvbkRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9Ib21lXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM2OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0VuZFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNTpcclxuICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsuZG93bil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUbyggJChTRUNUSU9OX1NFTCkubGVuZ3RoICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5sZWZ0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL3JpZ2h0XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGV4aXQgdGhpcyBoYW5kbGVyIGZvciBvdGhlciBrZXlzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZWN0aW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG1vdXNlIG1vdmVtZW50LlxyXG4gICAgICAgICogVXNlZCBvbmx5IGZvciB0aGUgbWlkZGxlIGJ1dHRvbiBvZiB0aGUgbW91c2UuXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgb2xkUGFnZVkgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZpbmcgdXBcclxuICAgICAgICAgICAgICAgIGlmIChlLnBhZ2VZIDwgb2xkUGFnZVkgJiYgaXNTY3JvbGxBbGxvd2VkLm0udXApe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihlLnBhZ2VZID4gb2xkUGFnZVkgJiYgaXNTY3JvbGxBbGxvd2VkLm0uZG93bil7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIGhvcml6b250YWwgc2xpZGVycy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnksIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gc2xpZGVzLmNsb3Nlc3QoU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgdiA9IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlczogc2xpZGVzLFxyXG4gICAgICAgICAgICAgICAgZGVzdGlueTogZGVzdGlueSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVzdGlueVBvczogZGVzdGlueS5wb3NpdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleDogZGVzdGlueS5pbmRleCgpLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbi5pbmRleChTRUNUSU9OX1NFTCksXHJcbiAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBzZWN0aW9uLmRhdGEoJ2FuY2hvcicpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzTmF2OiBzZWN0aW9uLmZpbmQoU0xJREVTX05BVl9TRUwpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVBbmNob3I6ICBnZXRBbmNob3IoZGVzdGlueSksXHJcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGU6IHNlY3Rpb24uZmluZChTTElERV9BQ1RJVkVfU0VMKSxcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZUluZGV4OiBzZWN0aW9uLmZpbmQoU0xJREVfQUNUSVZFX1NFTCkuaW5kZXgoKSxcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NhY2hpbmcgdGhlIHZhbHVlIG9mIGlzUmVzaXppbmcgYXQgdGhlIG1vbW1lbnQgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgLy9iZWNhdXNlIGl0IHdpbGwgYmUgY2hlY2tlZCBsYXRlciBpbnNpZGUgYSBzZXRUaW1lb3V0IGFuZCB0aGUgdmFsdWUgbWlnaHQgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbElzUmVzaXppbmc6IGlzUmVzaXppbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdi54TW92ZW1lbnQgPSBnZXRYbW92ZW1lbnQodi5wcmV2U2xpZGVJbmRleCwgdi5zbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIC8vaW1wb3J0YW50ISEgT25seSBkbyBpdCB3aGVuIG5vdCByZXNpemluZ1xyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZyb20gc2Nyb2xsaW5nIHRvIHRoZSBuZXh0L3ByZXYgc2VjdGlvbiB3aGVuIHVzaW5nIHNjcm9sbEhvcml6b250YWxseVxyXG4gICAgICAgICAgICAgICAgY2FuU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMub25TbGlkZUxlYXZlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcgJiYgdi54TW92ZW1lbnQhPT0nbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCQuaXNGdW5jdGlvbiggb3B0aW9ucy5vblNsaWRlTGVhdmUgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMub25TbGlkZUxlYXZlLmNhbGwoIHYucHJldlNsaWRlLCB2LmFuY2hvckxpbmssICh2LnNlY3Rpb25JbmRleCArIDEpLCB2LnByZXZTbGlkZUluZGV4LCB2LnhNb3ZlbWVudCwgdi5zbGlkZUluZGV4ICkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RvcE1lZGlhKHYucHJldlNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGRlc3RpbnkuYWRkQ2xhc3MoQUNUSVZFKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBsYXp5TG9hZChkZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwgJiYgb3B0aW9ucy5jb250cm9sQXJyb3dzKXtcclxuICAgICAgICAgICAgICAgIC8vaGlkZGluZyBpdCBmb3IgdGhlIGZpc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmZpbmQoU0xJREVTX0FSUk9XX1BSRVZfU0VMKS50b2dnbGUodi5zbGlkZUluZGV4IT09MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9oaWRkaW5nIGl0IGZvciB0aGUgbGFzdCBzbGlkZSwgc2hvd2luZyBmb3IgdGhlIHJlc3RcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZmluZChTTElERVNfQVJST1dfTkVYVF9TRUwpLnRvZ2dsZSghZGVzdGlueS5pcygnOmxhc3QtY2hpbGQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vb25seSBjaGFuZ2luZyB0aGUgVVJMIGlmIHRoZSBzbGlkZXMgYXJlIGluIHRoZSBjdXJyZW50IHNlY3Rpb24gKG5vdCBmb3IgcmVzaXplIHJlLWFkanVzdGluZylcclxuICAgICAgICAgICAgaWYoc2VjdGlvbi5oYXNDbGFzcyhBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKHYuc2xpZGVJbmRleCwgdi5zbGlkZUFuY2hvciwgdi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKEZQLmNvbnRpbnVvdXNIb3Jpem9udGFsKXtcclxuICAgICAgICAgICAgICAgIEZQLmNvbnRpbnVvdXNIb3Jpem9udGFsLmFwcGx5KHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwZXJmb3JtSG9yaXpvbnRhbE1vdmUoc2xpZGVzLCB2LCB0cnVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuaW50ZXJsb2NrZWRTbGlkZXMgJiYgRlAuaW50ZXJsb2NrZWRTbGlkZXMpe1xyXG4gICAgICAgICAgICAgICAgRlAuaW50ZXJsb2NrZWRTbGlkZXMuYXBwbHkodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclNsaWRlTG9hZHModil7XHJcbiAgICAgICAgICAgIGlmKEZQLmNvbnRpbnVvdXNIb3Jpem9udGFsKXtcclxuICAgICAgICAgICAgICAgIEZQLmNvbnRpbnVvdXNIb3Jpem9udGFsLmFmdGVyU2xpZGVMb2Fkcyh2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZXNOYXZpZ2F0aW9uKHYuc2xpZGVzTmF2LCB2LnNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyU2xpZGVMb2FkICkgJiYgb3B0aW9ucy5hZnRlclNsaWRlTG9hZC5jYWxsKCB2LmRlc3RpbnksIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSksIHYuc2xpZGVBbmNob3IsIHYuc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9uZWVkcyB0byBiZSBpbnNpZGUgdGhlIGNvbmRpdGlvbiB0byBwcmV2ZW50IHByb2JsZW1zIHdpdGggY29udGludW91c1ZlcnRpY2FsIGFuZCBzY3JvbGxIb3Jpem9udGFsbHlcclxuICAgICAgICAgICAgICAgIC8vYW5kIHRvIHByZXZlbnQgZG91YmxlIHNjcm9sbCByaWdodCBhZnRlciBhIHdpbmRvd3MgcmVzaXplXHJcbiAgICAgICAgICAgICAgICBjYW5TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGF5TWVkaWEodi5kZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vbGV0dGluZyB0aGVtIHNsaWRlIGFnYWluXHJcbiAgICAgICAgICAgIHNsaWRlTW92aW5nID0gZmFsc2U7ICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKEZQLmludGVybG9ja2VkU2xpZGVzKXtcclxuICAgICAgICAgICAgICAgIEZQLmludGVybG9ja2VkU2xpZGVzLmFwcGx5KHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBlcmZvcm1zIHRoZSBob3Jpem9udGFsIG1vdmVtZW50LiAoQ1NTMyBvciBqUXVlcnkpXHJcbiAgICAgICAgKiBcclxuICAgICAgICAqIEBwYXJhbSBmaXJlQ2FsbGJhY2sge0Jvb2x9IC0gZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBmaXJlIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybUhvcml6b250YWxNb3ZlKHNsaWRlcywgdiwgZmlyZUNhbGxiYWNrKXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnlQb3MgPSB2LmRlc3RpbnlQb3M7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKC0nICsgTWF0aC5yb3VuZChkZXN0aW55UG9zLmxlZnQpICsgJ3B4LCAwcHgsIDBweCknO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZEFuaW1hdGlvbihzbGlkZXMuZmluZChTTElERVNfQ09OVEFJTkVSX1NFTCkpLmNzcyhnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZUNhbGxiYWNrICYmIGFmdGVyU2xpZGVMb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQsIG9wdGlvbnMuZWFzaW5nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXMuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA6IE1hdGgucm91bmQoZGVzdGlueVBvcy5sZWZ0KVxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgb3B0aW9ucy5lYXNpbmcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2sgJiYgYWZ0ZXJTbGlkZUxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIHRoZSBob3Jpem9udGFsIGJ1bGxldCBuYXZpZ2F0aW9ucy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2ZVNsaWRlc05hdmlnYXRpb24oc2xpZGVzTmF2LCBzbGlkZUluZGV4KXtcclxuICAgICAgICAgICAgc2xpZGVzTmF2LmZpbmQoQUNUSVZFX1NFTCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgc2xpZGVzTmF2LmZpbmQoJ2xpJykuZXEoc2xpZGVJbmRleCkuZmluZCgnYScpLmFkZENsYXNzKEFDVElWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNIZWlnaHQgPSB3aW5kb3dzSGVpZ2h0O1xyXG5cclxuICAgICAgICAvL3doZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgaXQgbmVlZHMgdG8gZ2V0IHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVidWlsZCBpbW1lZGlhdGVseSBvbiB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5Ym9hcmQgaXMgTk9UIHZpc2libGVcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlRWxlbWVudC5pcygndGV4dGFyZWEnKSAmJiAhYWN0aXZlRWxlbWVudC5pcygnaW5wdXQnKSAmJiAhYWN0aXZlRWxlbWVudC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFraW5nIHN1cmUgdGhlIGNoYW5nZSBpbiB0aGUgdmlld3BvcnQgc2l6ZSBpcyBlbm91Z2ggdG8gZm9yY2UgYSByZWJ1aWxkLiAoMjAgJSBvZiB0aGUgd2luZG93IHRvIGF2b2lkIHByb2JsZW1zIHdoZW4gaGlkZGluZyBzY3JvbGwgYmFycylcclxuICAgICAgICAgICAgICAgICAgICBpZiggTWF0aC5hYnMoY3VycmVudEhlaWdodCAtIHByZXZpb3VzSGVpZ2h0KSA+ICgyMCAqIE1hdGgubWF4KHByZXZpb3VzSGVpZ2h0LCBjdXJyZW50SGVpZ2h0KSAvIDEwMCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVCdWlsZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNIZWlnaHQgPSBjdXJyZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL2luIG9yZGVyIHRvIGNhbGwgdGhlIGZ1bmN0aW9ucyBvbmx5IHdoZW4gdGhlIHJlc2l6ZSBpcyBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyOTg2MTIvanF1ZXJ5LWhvdy10by1jYWxsLXJlc2l6ZS1ldmVudC1vbmx5LW9uY2UtaXRzLWZpbmlzaGVkLXJlc2l6aW5nXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2l6ZUlkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlQnVpbGQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAzNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBpZiB0aGUgc2l0ZSBuZWVkcyB0byBnZXQgcmVzcG9uc2l2ZSBhbmQgZGlzYWJsZXMgYXV0b1Njcm9sbGluZyBpZiBzby5cclxuICAgICAgICAqIEEgY2xhc3MgYGZwLXJlc3BvbnNpdmVgIGlzIGFkZGVkIHRvIHRoZSBwbHVnaW4ncyBjb250YWluZXIgaW4gY2FzZSB0aGUgdXNlciB3YW50cyB0byB1c2UgaXQgZm9yIGhpcyBvd24gcmVzcG9uc2l2ZSBDU1MuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZXNwb25zaXZlKCl7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aExpbWl0ID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IG9wdGlvbnMucmVzcG9uc2l2ZVdpZHRoOyAvL2JhY2t3YXJkcyBjb21wYXRpYmxpdHlcclxuICAgICAgICAgICAgdmFyIGhlaWdodExpbWl0ID0gb3B0aW9ucy5yZXNwb25zaXZlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy9vbmx5IGNhbGN1bGF0aW5nIHdoYXQgd2UgbmVlZC4gUmVtZW1iZXIgaXRzIGNhbGxlZCBvbiB0aGUgcmVzaXplIGV2ZW50LlxyXG4gICAgICAgICAgICB2YXIgaXNCcmVha2luZ1BvaW50V2lkdGggPSB3aWR0aExpbWl0ICYmICR3aW5kb3cub3V0ZXJXaWR0aCgpIDwgd2lkdGhMaW1pdDtcclxuICAgICAgICAgICAgdmFyIGlzQnJlYWtpbmdQb2ludEhlaWdodCA9IGhlaWdodExpbWl0ICYmICR3aW5kb3cuaGVpZ2h0KCkgPCBoZWlnaHRMaW1pdDtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpZHRoTGltaXQgJiYgaGVpZ2h0TGltaXQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRXaWR0aCB8fCBpc0JyZWFraW5nUG9pbnRIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYod2lkdGhMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludFdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGhlaWdodExpbWl0KXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIHRyYW5zaXRpb24gYW5pbWF0aW9ucyBmb3IgdGhlIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb24gPSAnYWxsICcgKyBvcHRpb25zLnNjcm9sbGluZ1NwZWVkICsgJ21zICcgKyBvcHRpb25zLmVhc2luZ2NzczM7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6IHRyYW5zaXRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZSB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbmltYXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZENsYXNzKE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBY3RpdmF0aW5nIHRoZSB2ZXJ0aWNhbCBuYXZpZ2F0aW9uIGJ1bGxldHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVOYXZEb3RzKG5hbWUsIHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubmF2aWdhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAkKFNFQ1RJT05fTkFWX1NFTCkuZmluZChBQ1RJVkVfU0VMKS5yZW1vdmVDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgaWYobmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLmZpbmQoJ2FbaHJlZj1cIiMnICsgbmFtZSArICdcIl0nKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJChTRUNUSU9OX05BVl9TRUwpLmZpbmQoJ2xpJykuZXEoc2VjdGlvbkluZGV4KS5maW5kKCdhJykuYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBY3RpdmF0aW5nIHRoZSB3ZWJzaXRlIG1haW4gbWVudSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIHNsaWRlIG5hbWUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZU1lbnVFbGVtZW50KG5hbWUpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLm1lbnUpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmZpbmQoQUNUSVZFX1NFTCkucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgICQob3B0aW9ucy5tZW51KS5maW5kKCdbZGF0YS1tZW51YW5jaG9yPVwiJytuYW1lKydcIl0nKS5hZGRDbGFzcyhBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdG8gYWN0aXZlIHRoZSBjdXJyZW50IG1lbnUgYW5kIHZlcnRpY2FsIG5hdiBpdGVtcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTWVudUFuZE5hdihhbmNob3IsIGluZGV4KXtcclxuICAgICAgICAgICAgYWN0aXZhdGVNZW51RWxlbWVudChhbmNob3IpO1xyXG4gICAgICAgICAgICBhY3RpdmF0ZU5hdkRvdHMoYW5jaG9yLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVucyBgdXBgIG9yIGBkb3duYCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cclxuICAgICAgICAqIGZyb20gdGhlIGN1cnJlbnQgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFltb3ZlbWVudChkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGZyb21JbmRleCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKS5pbmRleChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciB0b0luZGV4ID0gZGVzdGlueS5pbmRleChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIGlmKCBmcm9tSW5kZXggPT0gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZyb21JbmRleCA+IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdkb3duJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dW5zIGByaWdodGAgb3IgYGxlZnRgIGRlcGVuZGluZyBvbiB0aGUgc2Nyb2xsaW5nIG1vdmVtZW50IHRvIHJlYWNoIGl0cyBkZXN0aW5hdGlvblxyXG4gICAgICAgICogZnJvbSB0aGUgY3VycmVudCBzbGlkZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFhtb3ZlbWVudChmcm9tSW5kZXgsIHRvSW5kZXgpe1xyXG4gICAgICAgICAgICBpZiggZnJvbUluZGV4ID09IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmcm9tSW5kZXggPiB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBpZiB0aGUgZWxlbWVudCBuZWVkcyBzY3JvbGxiYXIgYW5kIGlmIHRoZSB1c2VyIHdhbnRzIHRvIGFwcGx5IGl0LlxyXG4gICAgICAgICogSWYgc28gaXQgY3JlYXRlcyBpdC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAgIGpRdWVyeSBvYmplY3Qgb2YgdGhlIHNlY3Rpb24gb3Igc2xpZGVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNjcm9sbEJhcihlbGVtZW50KXtcclxuICAgICAgICAgICAgLy9Vc2VyIGRvZXNuJ3Qgd2FudCBzY3JvbGxiYXIgaGVyZT8gU2F5b25hcmEgYmFieSFcclxuICAgICAgICAgICAgaWYoZWxlbWVudC5oYXNDbGFzcygnZnAtbm9zY3JvbGwnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy9uZWVkZWQgdG8gbWFrZSBgc2Nyb2xsSGVpZ2h0YCB3b3JrIHVuZGVyIE9wZXJhIDEyXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxPdmVyZmxvd0hhbmRsZXIgPSBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIHdyYXAgPSBzY3JvbGxPdmVyZmxvd0hhbmRsZXIud3JhcENvbnRlbnQoKTtcclxuICAgICAgICAgICAgLy9pbiBjYXNlIGVsZW1lbnQgaXMgYSBzbGlkZVxyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGVsZW1lbnQuY2xvc2VzdChTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNjcm9sbGFibGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy9pZiB0aGVyZSB3YXMgc2Nyb2xsLCB0aGUgY29udGVudEhlaWdodCB3aWxsIGJlIHRoZSBvbmUgaW4gdGhlIHNjcm9sbGFibGUgc2VjdGlvblxyXG4gICAgICAgICAgICBpZihzY3JvbGxhYmxlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0ID0gc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNjcm9sbEhlaWdodChlbGVtZW50KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0ID0gZWxlbWVudC5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0ID0gZWxlbWVudC5maW5kKFRBQkxFX0NFTExfU0VMKS5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gd2luZG93c0hlaWdodCAtIHBhcnNlSW50KHNlY3Rpb24uY3NzKCdwYWRkaW5nLWJvdHRvbScpKSAtIHBhcnNlSW50KHNlY3Rpb24uY3NzKCdwYWRkaW5nLXRvcCcpKTtcclxuXHJcbiAgICAgICAgICAgIC8vbmVlZHMgc2Nyb2xsP1xyXG4gICAgICAgICAgICBpZiAoIGNvbnRlbnRIZWlnaHQgPiBzY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vZGlkIHdlIGFscmVhZHkgaGF2ZSBhbiBzY3JvbGxiYXIgPyBVcGRhdGluZyBpdFxyXG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsYWJsZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci51cGRhdGUoZWxlbWVudCwgc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgdGhlIHNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoVEFCTEVfQ0VMTF9TRUwpLndyYXBJbm5lcih3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC53cmFwSW5uZXIod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5jcmVhdGUoZWxlbWVudCwgc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHRoZSBzY3JvbGxpbmcgd2hlbiBpdCBpcyBub3QgbmVjZXNzYXJ5IGFueW1vcmVcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlci5yZW1vdmUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vdW5kb1xyXG4gICAgICAgICAgICBlbGVtZW50LmNzcygnb3ZlcmZsb3cnLCAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRUYWJsZUNsYXNzKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAvL0luIGNhc2Ugd2UgYXJlIHN0eWxpbmcgZm9yIHRoZSAybmQgdGltZSBhcyBpbiB3aXRoIHJlcG9uc2l2ZVNsaWRlc1xyXG4gICAgICAgICAgICBpZighZWxlbWVudC5oYXNDbGFzcyhUQUJMRSkpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhUQUJMRSkud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwiJyArIFRBQkxFX0NFTEwgKyAnXCIgc3R5bGU9XCJoZWlnaHQ6JyArIGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpICsgJ3B4O1wiIC8+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRhYmxlSGVpZ2h0KGVsZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkhlaWdodCA9IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnBhZGRpbmdUb3AgfHwgb3B0aW9ucy5wYWRkaW5nQm90dG9tKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmKCFzZWN0aW9uLmhhc0NsYXNzKFNFQ1RJT04pKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uID0gZWxlbWVudC5jbG9zZXN0KFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ3MgPSBwYXJzZUludChzZWN0aW9uLmNzcygncGFkZGluZy10b3AnKSkgKyBwYXJzZUludChzZWN0aW9uLmNzcygncGFkZGluZy1ib3R0b20nKSk7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSGVpZ2h0ID0gKHdpbmRvd3NIZWlnaHQgLSBwYWRkaW5ncyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGEgY3NzMyB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdGhlIGNvbnRhaW5lciBjbGFzcyB3aXRoIG9yIHdpdGhvdXQgYW5pbWF0aW9uIGRlcGVuZGluZyBvbiB0aGUgYW5pbWF0ZWQgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIGFuaW1hdGVkKXtcclxuICAgICAgICAgICAgaWYoYW5pbWF0ZWQpe1xyXG4gICAgICAgICAgICAgICAgYWRkQW5pbWF0aW9uKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5pbWF0aW9uKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jc3MoZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCkpO1xyXG5cclxuICAgICAgICAgICAgLy9zeW5jcm9ub3VzbHkgcmVtb3ZpbmcgdGhlIGNsYXNzIGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGJlZW4gYXBwbGllZC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgICAgICB9LDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyBhIHNlY3Rpb24gYnkgaXRzIGFuY2hvciAvIGluZGV4XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcil7XHJcbiAgICAgICAgICAgIC8vc2VjdGlvblxyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGNvbnRhaW5lci5maW5kKFNFQ1RJT05fU0VMICsgJ1tkYXRhLWFuY2hvcj1cIicrc2VjdGlvbkFuY2hvcisnXCJdJyk7XHJcbiAgICAgICAgICAgIGlmKCFzZWN0aW9uLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gJChTRUNUSU9OX1NFTCkuZXEoIChzZWN0aW9uQW5jaG9yIC0xKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyBhIHNsaWRlIGluc2lkZSBhIGdpdmVuIHNlY3Rpb24gYnkgaXRzIGFuY2hvciAvIGluZGV4XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTbGlkZUJ5QW5jaG9yKHNsaWRlQW5jaG9yLCBzZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlcyA9IHNlY3Rpb24uZmluZChTTElERVNfV1JBUFBFUl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAgc2xpZGVzLmZpbmQoU0xJREVfU0VMICsgJ1tkYXRhLWFuY2hvcj1cIicrc2xpZGVBbmNob3IrJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZSA9IHNsaWRlcy5maW5kKFNMSURFX1NFTCkuZXEoc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlIGFuY2hvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFBhZ2VBbmRTbGlkZShkZXN0aW55LCBzbGlkZSl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZ2V0U2VjdGlvbkJ5QW5jaG9yKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgLy9kZWZhdWx0IHNsaWRlXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vd2UgbmVlZCB0byBzY3JvbGwgdG8gdGhlIHNlY3Rpb24gYW5kIHRoZW4gdG8gdGhlIHNsaWRlXHJcbiAgICAgICAgICAgIGlmIChkZXN0aW55ICE9PSBsYXN0U2Nyb2xsZWREZXN0aW55ICYmICFzZWN0aW9uLmhhc0NsYXNzKEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShzZWN0aW9uLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNsaWRlcihzZWN0aW9uLCBzbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2lmIHdlIHdlcmUgYWxyZWFkeSBpbiB0aGUgc2VjdGlvblxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2xpZGVyKHNlY3Rpb24sIHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRoZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlIGRlc3RpbmF0aW9uIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsU2xpZGVyKHNlY3Rpb24sIHNsaWRlQW5jaG9yKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHNsaWRlQW5jaG9yICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzID0gc2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVzdGlueSA9ICBnZXRTbGlkZUJ5QW5jaG9yKHNsaWRlQW5jaG9yLCBzZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihkZXN0aW55Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyBhIGxhbmRzY2FwZSBuYXZpZ2F0aW9uIGJhciB3aXRoIGRvdHMgZm9yIGhvcml6b250YWwgc2xpZGVycy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlc05hdmlnYXRpb24oc2VjdGlvbiwgbnVtU2xpZGVzKXtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmQoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX05BViArICdcIj48dWw+PC91bD48L2Rpdj4nKTtcclxuICAgICAgICAgICAgdmFyIG5hdiA9IHNlY3Rpb24uZmluZChTTElERVNfTkFWX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL3RvcCBvciBib3R0b21cclxuICAgICAgICAgICAgbmF2LmFkZENsYXNzKG9wdGlvbnMuc2xpZGVzTmF2UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8IG51bVNsaWRlczsgaSsrKXtcclxuICAgICAgICAgICAgICAgIG5hdi5maW5kKCd1bCcpLmFwcGVuZCgnPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4+PC9zcGFuPjwvYT48L2xpPicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NlbnRlcmluZyBpdFxyXG4gICAgICAgICAgICBuYXYuY3NzKCdtYXJnaW4tbGVmdCcsICctJyArIChuYXYud2lkdGgoKS8yKSArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgbmF2LmZpbmQoJ2xpJykuZmlyc3QoKS5maW5kKCdhJykuYWRkQ2xhc3MoQUNUSVZFKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIHN0YXRlIG9mIHRoZSB3ZWJzaXRlIGRlcGVuZGluZyBvbiB0aGUgYWN0aXZlIHNlY3Rpb24vc2xpZGUuXHJcbiAgICAgICAgKiBJdCBjaGFuZ2VzIHRoZSBVUkwgaGFzaCB3aGVuIG5lZWRlZCBhbmQgdXBkYXRlcyB0aGUgYm9keSBjbGFzcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFN0YXRlKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yLCBhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkhhc2ggPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGggJiYgIW9wdGlvbnMubG9ja0FuY2hvcnMpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaXNuJ3QgaXQgdGhlIGZpcnN0IHNsaWRlP1xyXG4gICAgICAgICAgICAgICAgaWYoc2xpZGVJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGFuY2hvckxpbmsgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkhhc2ggPSBhbmNob3JMaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zbGlkZSB3aXRob3V0IGFuY2hvciBsaW5rPyBXZSB0YWtlIHRoZSBpbmRleCBpbnN0ZWFkLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBzbGlkZUFuY2hvciA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUFuY2hvciA9IHNsaWRlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWRTbGlkZSA9IHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goc2VjdGlvbkhhc2ggKyAnLycgKyBzbGlkZUFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9maXJzdCBzbGlkZSB3b24ndCBoYXZlIHNsaWRlIGFuY2hvciwganVzdCB0aGUgc2VjdGlvbiBvbmVcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZiBzbGlkZUluZGV4ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNjcm9sbGVkU2xpZGUgPSBzbGlkZUFuY2hvcjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxIYXNoKGFuY2hvckxpbmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2VjdGlvbiB3aXRob3V0IHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxIYXNoKGFuY2hvckxpbmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRCb2R5Q2xhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgVVJMIGhhc2guXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRVcmxIYXNoKHVybCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucmVjb3JkSGlzdG9yeSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gdXJsO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vTW9iaWxlIENocm9tZSBkb2Vzbid0IHdvcmsgdGhlIG5vcm1hbCB3YXksIHNvLi4uIGxldHMgdXNlIEhUTUw1IGZvciBwaG9uZXMgOilcclxuICAgICAgICAgICAgICAgIGlmKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnIycgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCBiYXNlVXJsICsgJyMnICsgdXJsICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgYW5jaG9yIGZvciB0aGUgZ2l2ZW4gc2xpZGUgLyBzZWN0aW9uLiBJdHMgaW5kZXggd2lsbCBiZSB1c2VkIGlmIHRoZXJlJ3Mgbm9uZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEFuY2hvcihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IGVsZW1lbnQuZGF0YSgnYW5jaG9yJyk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsZW1lbnQuaW5kZXgoKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2xpZGUgd2l0aG91dCBhbmNob3IgbGluaz8gV2UgdGFrZSB0aGUgaW5kZXggaW5zdGVhZC5cclxuICAgICAgICAgICAgaWYodHlwZW9mIGFuY2hvciA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmNob3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgYSBjbGFzcyBmb3IgdGhlIGJvZHkgb2YgdGhlIHBhZ2UgZGVwZW5kaW5nIG9uIHRoZSBhY3RpdmUgc2VjdGlvbiAvIHNsaWRlXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRCb2R5Q2xhc3MoKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9IHNlY3Rpb24uZmluZChTTElERV9BQ1RJVkVfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uQW5jaG9yID0gZ2V0QW5jaG9yKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBnZXRBbmNob3Ioc2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcoc2VjdGlvbkFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICBpZihzbGlkZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLScgKyBzbGlkZUFuY2hvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jaGFuZ2luZyBzbGFzaCBmb3IgZGFzaCB0byBtYWtlIGl0IGEgdmFsaWQgQ1NTIHN0eWxlXHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoJy8nLCAnLScpLnJlcGxhY2UoJyMnLCcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgcHJldmlvdXMgYW5jaG9yIGNsYXNzZXNcclxuICAgICAgICAgICAgdmFyIGNsYXNzUmUgPSBuZXcgUmVnRXhwKCdcXFxcYlxcXFxzPycgKyBWSUVXSU5HX1BSRUZJWCArICctW15cXFxcc10rXFxcXGInLCBcImdcIik7XHJcbiAgICAgICAgICAgICRib2R5WzBdLmNsYXNzTmFtZSA9ICRib2R5WzBdLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzUmUsICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vYWRkaW5nIHRoZSBjdXJyZW50IGFuY2hvclxyXG4gICAgICAgICAgICAkYm9keS5hZGRDbGFzcyhWSUVXSU5HX1BSRUZJWCArICctJyArIHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDaGVja3MgZm9yIHRyYW5zbGF0ZTNkIHN1cHBvcnRcclxuICAgICAgICAqIEByZXR1cm4gYm9vbGVhblxyXG4gICAgICAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjYxNjcxL2RldGVjdGluZy10cmFuc2Zvcm0tdHJhbnNsYXRlM2Qtc3VwcG9ydFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3VwcG9ydDNkKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgICAgICAgICBoYXMzZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dlYmtpdFRyYW5zZm9ybSc6Jy13ZWJraXQtdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnT1RyYW5zZm9ybSc6Jy1vLXRyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21zVHJhbnNmb3JtJzonLW1zLXRyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01velRyYW5zZm9ybSc6Jy1tb3otdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzondHJhbnNmb3JtJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBpdCB0byB0aGUgYm9keSB0byBnZXQgdGhlIGNvbXB1dGVkIHN0eWxlLlxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlbCwgbnVsbCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB0IGluIHRyYW5zZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVbdF0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJztcclxuICAgICAgICAgICAgICAgICAgICBoYXMzZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHRyYW5zZm9ybXNbdF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoaGFzM2QgIT09IHVuZGVmaW5lZCAmJiBoYXMzZC5sZW5ndGggPiAwICYmIGhhczNkICE9PSAnbm9uZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmVzIHRoZSBhdXRvIHNjcm9sbGluZyBhY3Rpb24gZmlyZWQgYnkgdGhlIG1vdXNlIHdoZWVsIGFuZCB0cmFja3BhZC5cclxuICAgICAgICAqIEFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgbW91c2V3aGVlbCBhbmQgdHJhY2twYWQgbW92ZW1lbnRzIHdvbid0IHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTW91c2VXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL0lFOSwgQ2hyb21lLCBTYWZhcmksIE9wZXJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9GaXJlZm94XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9vbGQgRmlyZWZveFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29ubW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyKTsgLy9JRSA2LzcvOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmb3IgdGhlIG1vdXNlIHdoZWVsIGFuZCB0cmFja3BhZC5cclxuICAgICAgICAqIEFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgbW91c2V3aGVlbCBhbmQgdHJhY2twYWQgbW92ZW1lbnRzIHdpbGwgc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnNcclxuICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkTW91c2VXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgX2FkZEV2ZW50TGlzdGVuZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICAgICAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIgPSBcImFkZEV2ZW50TGlzdGVuZXJcIjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYXR0YWNoRXZlbnRcIjtcclxuICAgICAgICAgICAgICAgIHByZWZpeCA9ICdvbic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAvLyBkZXRlY3QgYXZhaWxhYmxlIHdoZWVsIGV2ZW50XHJcbiAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gJ29ud2hlZWwnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpID8gJ3doZWVsJyA6IC8vIE1vZGVybiBicm93c2VycyBzdXBwb3J0IFwid2hlZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXdoZWVsICE9PSB1bmRlZmluZWQgPyAnbW91c2V3aGVlbCcgOiAvLyBXZWJraXQgYW5kIElFIHN1cHBvcnQgYXQgbGVhc3QgXCJtb3VzZXdoZWVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICdET01Nb3VzZVNjcm9sbCc7IC8vIGxldCdzIGFzc3VtZSB0aGF0IHJlbWFpbmluZyBicm93c2VycyBhcmUgb2xkZXIgRmlyZWZveFxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHN1cHBvcnQgPT0gJ0RPTU1vdXNlU2Nyb2xsJyl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFsgX2FkZEV2ZW50TGlzdGVuZXIgXShwcmVmaXggKyAnTW96TW91c2VQaXhlbFNjcm9sbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIE1vek1vdXNlUGl4ZWxTY3JvbGwgaW4gb2xkZXIgRmlyZWZveFxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbIF9hZGRFdmVudExpc3RlbmVyIF0ocHJlZml4ICsgc3VwcG9ydCwgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBCaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHByZXNzZWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZE1pZGRsZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2Vkb3duJywgbW91c2VEb3duSGFuZGxlcilcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVW5iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWRvd24nLCBtb3VzZURvd25IYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0aGUgcG9zc2liaWxpdHkgdG8gYXV0byBzY3JvbGwgdGhyb3VnaCBzZWN0aW9ucyBvbiB0b3VjaCBkZXZpY2VzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVG91Y2hIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCl7XHJcbiAgICAgICAgICAgICAgICAvL01pY3Jvc29mdCBwb2ludGVyc1xyXG4gICAgICAgICAgICAgICAgdmFyIE1TUG9pbnRlciA9IGdldE1TUG9pbnRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoV1JBUFBFUl9TRUwpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9mZigndG91Y2hzdGFydCAnICsgIE1TUG9pbnRlci5kb3duKS5vbigndG91Y2hzdGFydCAnICsgTVNQb2ludGVyLmRvd24sIHRvdWNoU3RhcnRIYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ3RvdWNobW92ZSAnICsgTVNQb2ludGVyLm1vdmUpLm9uKCd0b3VjaG1vdmUgJyArIE1TUG9pbnRlci5tb3ZlLCB0b3VjaE1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmVzIHRoZSBhdXRvIHNjcm9sbGluZyBmb3IgdG91Y2ggZGV2aWNlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvdWNoSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgLy9NaWNyb3NvZnQgcG9pbnRlcnNcclxuICAgICAgICAgICAgICAgIHZhciBNU1BvaW50ZXIgPSBnZXRNU1BvaW50ZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFdSQVBQRVJfU0VMKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ3RvdWNoc3RhcnQgJyArIE1TUG9pbnRlci5kb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ3RvdWNobW92ZSAnICsgTVNQb2ludGVyLm1vdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogUmV0dXJucyBhbmQgb2JqZWN0IHdpdGggTWljcm9zb2Z0IHBvaW50ZXJzIChmb3IgSUU8MTEgYW5kIGZvciBJRSA+PSAxMSlcclxuICAgICAgICAqIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kbjMwNDg4Nih2PXZzLjg1KS5hc3B4XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRNU1BvaW50ZXIoKXtcclxuICAgICAgICAgICAgdmFyIHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAvL0lFID49IDExICYgcmVzdCBvZiBicm93c2Vyc1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuUG9pbnRlckV2ZW50KXtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB7IGRvd246ICdwb2ludGVyZG93bicsIG1vdmU6ICdwb2ludGVybW92ZSd9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0lFIDwgMTFcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB7IGRvd246ICdNU1BvaW50ZXJEb3duJywgbW92ZTogJ01TUG9pbnRlck1vdmUnfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIHBhZ2VYIGFuZCBwYWdlWSBwcm9wZXJ0aWVzIGRlcGVuZGluZyBvbiB0aGUgYnJvd3Nlci5cclxuICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcy9pc3N1ZXMvMTk0I2lzc3VlY29tbWVudC0zNDA2OTg1NFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RXZlbnRzUGFnZShlKXtcclxuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRzLnkgPSAodHlwZW9mIGUucGFnZVkgIT09ICd1bmRlZmluZWQnICYmIChlLnBhZ2VZIHx8IGUucGFnZVgpID8gZS5wYWdlWSA6IGUudG91Y2hlc1swXS5wYWdlWSk7XHJcbiAgICAgICAgICAgIGV2ZW50cy54ID0gKHR5cGVvZiBlLnBhZ2VYICE9PSAndW5kZWZpbmVkJyAmJiAoZS5wYWdlWSB8fCBlLnBhZ2VYKSA/IGUucGFnZVggOiBlLnRvdWNoZXNbMF0ucGFnZVgpO1xyXG5cclxuICAgICAgICAgICAgLy9pbiB0b3VjaCBkZXZpY2VzIHdpdGggc2Nyb2xsQmFyOnRydWUsIGUucGFnZVkgaXMgZGV0ZWN0ZWQsIGJ1dCB3ZSBoYXZlIHRvIGRlYWwgd2l0aCB0b3VjaCBldmVudHMuICMxMDA4XHJcbiAgICAgICAgICAgIGlmKGlzVG91Y2ggJiYgaXNSZWFsbHlUb3VjaChlKSAmJiBvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBldmVudHMueSA9IGUudG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy54ID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgc2lsZW50bHkgKHdpdGggbm8gYW5pbWF0aW9uKSB0aGUgYWN0aXZlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUuXHJcbiAgICAgICAgKiBAcGFyYW0gbm9DYWxsYmFjayB7Ym9vbH0gdHJ1ZSBvciBkZWZpbmVkIC0+IG5vIGNhbGxiYWNrc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2lsZW50TGFuZHNjYXBlU2Nyb2xsKGFjdGl2ZVNsaWRlLCBub0NhbGxiYWNrcyl7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkICgwLCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBub0NhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZpcmluZyBjYWxsYmFja3MgYWZ0ZXJTbGlkZUxvYWQgZXRjLlxyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZS5jbG9zZXN0KFNMSURFU19XUkFQUEVSX1NFTCksIGFjdGl2ZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBub0NhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZChvcmlnaW5hbHMuc2Nyb2xsaW5nU3BlZWQsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHNpbGVudGx5ICh3aXRoIG5vIGFuaW1hdGlvbikgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIFkgcG9zaXRpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaWxlbnRTY3JvbGwodG9wKXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCh0b3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuY3NzMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKDBweCwgLScgKyB0b3AgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY3NzKCd0b3AnLCAtdG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1icm93c2VyIHRyYW5zZm9ybSBzdHJpbmcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogdHJhbnNsYXRlM2QsXHJcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6dHJhbnNsYXRlM2QsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogdHJhbnNsYXRlM2RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWxsb3dpbmcgb3IgZGlzYWxsb3dpbmcgdGhlIG1vdXNlL3N3aXBlIHNjcm9sbCBpbiBhIGdpdmVuIGRpcmVjdGlvbi4gKG5vdCBmb3Iga2V5Ym9hcmQpXHJcbiAgICAgICAgKiBAdHlwZSAgbSAobW91c2UpIG9yIGsgKGtleWJvYXJkKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sIHR5cGUpe1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6IGlzU2Nyb2xsQWxsb3dlZFt0eXBlXS51cCA9IHZhbHVlOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOiBpc1Njcm9sbEFsbG93ZWRbdHlwZV0uZG93biA9IHZhbHVlOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiBpc1Njcm9sbEFsbG93ZWRbdHlwZV0ubGVmdCA9IHZhbHVlOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogaXNTY3JvbGxBbGxvd2VkW3R5cGVdLnJpZ2h0ID0gdmFsdWU7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWxsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09ICdtJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFsbG93U2Nyb2xsaW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5Ym9hcmRTY3JvbGxpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIERlc3Ryb3lzIGZ1bGxwYWdlLmpzIHBsdWdpbiBldmVudHMgYW5kIG9wdGluYWxseSBpdHMgaHRtbCBtYXJrdXAgYW5kIHN0eWxlc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveShhbGwpe1xyXG4gICAgICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRLZXlib2FyZFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhERVNUUk9ZRUQpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2xpZGVMb2Fkc0lkKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2VjdGlvbkxvYWRzSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQyKTtcclxuXHJcbiAgICAgICAgICAgICR3aW5kb3dcclxuICAgICAgICAgICAgICAgIC5vZmYoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgICRkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snLCBTRUNUSU9OX05BVl9TRUwgKyAnIGEnKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlcicsIFNFQ1RJT05fTkFWX1NFTCArICcgbGknKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZScsIFNFQ1RJT05fTkFWX1NFTCArICcgbGknKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snLCBTTElERVNfTkFWX0xJTktfU0VMKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VvdmVyJywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cylcclxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlb3V0Jywgb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cyk7XHJcblxyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snLCBTTElERVNfQVJST1dfU0VMKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhZnRlclNsaWRlTG9hZHNJZCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhZnRlclNlY3Rpb25Mb2Fkc0lkKTtcclxuXHJcbiAgICAgICAgICAgIC8vbGV0cyBtYWtlIGEgbWVzcyFcclxuICAgICAgICAgICAgaWYoYWxsKXtcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3lTdHJ1Y3R1cmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZW1vdmVzIGlubGluZSBzdHlsZXMgYWRkZWQgYnkgZnVsbHBhZ2UuanNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lTdHJ1Y3R1cmUoKXtcclxuICAgICAgICAgICAgLy9yZXNldGluZyB0aGUgYHRvcGAgb3IgYHRyYW5zbGF0ZWAgcHJvcGVydGllcyB0byAwXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9hZGluZyBhbGwgdGhlIGxhenkgbG9hZCBjb250ZW50XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKCdpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY10nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsICQodGhpcykuZGF0YSgnc3JjJykpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9OQVZfU0VMICsgJywgJyArIFNMSURFU19OQVZfU0VMICsgICcsICcgKyBTTElERVNfQVJST1dfU0VMKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgaW5saW5lIHN0eWxlc1xyXG4gICAgICAgICAgICAkKFNFQ1RJT05fU0VMKS5jc3MoIHtcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnJyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoU0xJREVfU0VMKS5jc3MoIHtcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXHJcbiAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaHRtbEJvZHkuY3NzKHtcclxuICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIC5mcC1lbmFibGVkIGNsYXNzXHJcbiAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcyhFTkFCTEVEKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSAuZnAtcmVzcG9uc2l2ZSBjbGFzc1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyhSRVNQT05TSVZFKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgb2YgdGhlIC5mcC12aWV3aW5nLSBjbGFzc2VzXHJcbiAgICAgICAgICAgICQuZWFjaCgkYm9keS5nZXQoMCkuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksIGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoVklFV0lOR19QUkVGSVgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGFkZGVkIGNsYXNzZXNcclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCArICcsICcgKyBTTElERV9TRUwpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnJlbW92ZSgkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoVEFCTEUgKyAnICcgKyBBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9VbndyYXBwaW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoVEFCTEVfQ0VMTF9TRUwgKyAnLCAnICsgU0xJREVTX0NPTlRBSU5FUl9TRUwgKyAnLCAnICsgU0xJREVTX1dSQVBQRVJfU0VMKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3Vud3JhcCBub3QgYmVpbmcgdXNlIGluIGNhc2UgdGhlcmUncyBubyBjaGlsZCBlbGVtZW50IGluc2lkZSBhbmQgaXRzIGp1c3QgdGV4dFxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBubyBhbmltYXRpb25cclxuICAgICAgICAgICAgJGh0bWxCb2R5LnNjcm9sbFRvcCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3Zpbmcgc2VsZWN0b3JzXHJcbiAgICAgICAgICAgIHZhciB1c2VkU2VsZWN0b3JzID0gW1NFQ1RJT04sIFNMSURFLCBTTElERVNfQ09OVEFJTkVSXTtcclxuICAgICAgICAgICAgJC5lYWNoKHVzZWRTZWxlY3RvcnMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuJyArIHZhbHVlKS5yZW1vdmVDbGFzcyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFNldHMgdGhlIHN0YXRlIGZvciBhIHZhcmlhYmxlIHdpdGggbXVsdGlwbGUgc3RhdGVzIChvcmlnaW5hbCwgYW5kIHRlbXBvcmFsKVxyXG4gICAgICAgICogU29tZSB2YXJpYWJsZXMgc3VjaCBhcyBgYXV0b1Njcm9sbGluZ2Agb3IgYHJlY29yZEhpc3RvcnlgIG1pZ2h0IGNoYW5nZSBhdXRvbWF0aWNhbGx5IGl0cyBzdGF0ZSB3aGVuIHVzaW5nIGByZXNwb25zaXZlYCBvciBgYXV0b1Njcm9sbGluZzpmYWxzZWAuXHJcbiAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBib3RoIHN0YXRlcywgdGhlIG9yaWdpbmFsIGFuZCB0aGUgdGVtcG9yYWwgb25lLlxyXG4gICAgICAgICogSWYgdHlwZSBpcyBub3QgJ2ludGVybmFsJywgdGhlbiB3ZSBhc3N1bWUgdGhlIHVzZXIgaXMgZ2xvYmFsbHkgY2hhbmdpbmcgdGhlIHZhcmlhYmxlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0VmFyaWFibGVTdGF0ZSh2YXJpYWJsZSwgdmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBvcHRpb25zW3ZhcmlhYmxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZih0eXBlICE9PSAnaW50ZXJuYWwnKXtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsc1t2YXJpYWJsZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEaXNwbGF5cyB3YXJuaW5nc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheVdhcm5pbmdzKCl7XHJcbiAgICAgICAgICAgIGlmKCQoJ2h0bWwnKS5oYXNDbGFzcyhFTkFCTEVEKSl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ0Z1bGxwYWdlLmpzIGNhbiBvbmx5IGJlIGluaXRpYWxpemVkIG9uY2UgYW5kIHlvdSBhcmUgZG9pbmcgaXQgbXVsdGlwbGUgdGltZXMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgbXV0dWFsbHkgZXhjbHVzaXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJlxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmxvb3BCb3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxCYXIgJiYgb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9uIGBzY3JvbGxCYXJgIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBzY3JvbGxPdmVyZmxvd2AuIFNlY3Rpb25zIHdpdGggc2Nyb2xsT3ZlcmZsb3cgbWlnaHQgbm90IHdvcmsgd2VsbCBpbiBGaXJlZm94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmIG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9uIGBzY3JvbGxCYXJgIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2FuY2hvcnMgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBlbGVtZW50IElEIG9yIE5BTUVcclxuICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMuYW5jaG9ycywgZnVuY3Rpb24oaW5kZXgsIG5hbWUpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FzZSBpbnNlbnNpdGl2ZSBzZWxlY3RvcnMgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE5NDY1MTg3LzEwODEzOTYpXHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUF0dHIgPSAkZG9jdW1lbnQuZmluZCgnW25hbWVdJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoJ25hbWUnKSAmJiAkKHRoaXMpLmF0dHIoJ25hbWUnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZEF0dHIgPSAkZG9jdW1lbnQuZmluZCgnW2lkXScpLmZpbHRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKCdpZCcpICYmICQodGhpcykuYXR0cignaWQnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlkQXR0ci5sZW5ndGggfHwgbmFtZUF0dHIubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdkYXRhLWFuY2hvciB0YWdzIGNhbiBub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyBhbnkgYGlkYCBlbGVtZW50IG9uIHRoZSBzaXRlIChvciBgbmFtZWAgZWxlbWVudCBmb3IgSUUpLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkQXR0ci5sZW5ndGggJiYgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGBpZGAgcHJvcGVydHknKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lQXR0ci5sZW5ndGggJiYgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGBuYW1lYCBwcm9wZXJ0eScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2hvd3MgYSBtZXNzYWdlIGluIHRoZSBjb25zb2xlIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Vycm9yKHR5cGUsIHRleHQpe1xyXG4gICAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGVbdHlwZV0gJiYgY29uc29sZVt0eXBlXSgnZnVsbFBhZ2U6ICcgKyB0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9OyAvL2VuZCBvZiAkLmZuLmZ1bGxwYWdlXHJcblxyXG4gICAgaWYodHlwZW9mIElTY3JvbGwgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAvKlxyXG4gICAgICAgICogVHVybnMgaVNjcm9sbCBgbW91c2V3aGVlbGAgb3B0aW9uIG9mZiBkeW5hbWljYWxseVxyXG4gICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2N1YmlxL2lzY3JvbGwvaXNzdWVzLzEwMzZcclxuICAgICAgICAqL1xyXG4gICAgICAgIElTY3JvbGwucHJvdG90eXBlLndoZWVsT24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogVHVybnMgaVNjcm9sbCBgbW91c2V3aGVlbGAgb3B0aW9uIG9uIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vY3ViaXEvaXNjcm9sbC9pc3N1ZXMvMTAzNlxyXG4gICAgICAgICovXHJcbiAgICAgICAgSVNjcm9sbC5wcm90b3R5cGUud2hlZWxPZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JqZWN0IHRvIGhhbmRsZSBvdmVyZmxvdyBzY3JvbGxpbmcuXHJcbiAgICAgKiBUaGlzIHVzZXMganF1ZXJ5LnNsaW1TY3JvbGwgdG8gYWNjb21wbGlzaCBvdmVyZmxvdyBzY3JvbGxpbmcuXHJcbiAgICAgKiBJdCBpcyBwb3NzaWJsZSB0byBwYXNzIGluIGFuIGFsdGVybmF0ZSBzY3JvbGxPdmVyZmxvd0hhbmRsZXJcclxuICAgICAqIHRvIHRoZSBmdWxscGFnZS5qcyBvcHRpb24gdGhhdCBpbXBsZW1lbnRzIHRoZSBzYW1lIGZ1bmN0aW9uc1xyXG4gICAgICogYXMgdGhpcyBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHZhciBpc2Nyb2xsSGFuZGxlciA9IHtcclxuICAgICAgICByZWZyZXNoSWQ6IG51bGwsXHJcbiAgICAgICAgaVNjcm9sbEluc3RhbmNlczogW10sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVHVybnMgb2ZmIGlTY3JvbGwgZm9yIHRoZSBkZXN0aW5hdGlvbiBzZWN0aW9uLlxyXG4gICAgICAgICogV2hlbiBzY3JvbGxpbmcgdmVyeSBmYXN0IG9uIHNvbWUgdHJhY2twYWRzIChhbmQgQXBwbGUgbGFwdG9wcykgdGhlIGluZXJ0aWFsIHNjcm9sbGluZyB3b3VsZFxyXG4gICAgICAgICogc2Nyb2xsIHRoZSBkZXN0aW5hdGlvbiBzZWN0aW9uL3NsaWRlIGJlZm9yZSB0aGUgc2VjdGlvbnMgYW5pbWF0aW9ucyBlbmRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpLmRhdGEoJ2lzY3JvbGxJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnICYmIHNjcm9sbGVyKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbGVyLndoZWVsT2ZmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBUdXJucyBvbiBpU2Nyb2xsIG9uIHNlY3Rpb24gbG9hZFxyXG4gICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gJChTRUNUSU9OX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpLmRhdGEoJ2lzY3JvbGxJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2Ygc2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnICYmIHNjcm9sbGVyKXtcclxuICAgICAgICAgICAgICAgICAgc2Nyb2xsZXIud2hlZWxPbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gb3ZlcmZsb3cgc2Nyb2xsaW5nIGlzIG5lZWRlZCBmb3IgYSBzZWN0aW9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50ICAgICAgalF1ZXJ5IG9iamVjdCBjb250YWluaW5nIGN1cnJlbnQgc2VjdGlvblxyXG4gICAgICAgICAqIEBwYXJhbSAge051bWJlcn0gc2Nyb2xsSGVpZ2h0IEN1cnJlbnQgd2luZG93IGhlaWdodCBpbiBwaXhlbHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQsIHNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IGVsZW1lbnQuZmluZChTQ1JPTExBQkxFX1NFTCk7XHJcblxyXG4gICAgICAgICAgICBzY3JvbGxhYmxlLmhlaWdodChzY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICBzY3JvbGxhYmxlLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaVNjcm9sbEluc3RhbmNlID0gJHRoaXMuZGF0YSgnaXNjcm9sbEluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaVNjcm9sbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGlzY3JvbGxIYW5kbGVyLmlTY3JvbGxJbnN0YW5jZXMsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlTY3JvbGxJbnN0YW5jZSA9IG5ldyBJU2Nyb2xsKCR0aGlzLmdldCgwKSwgaXNjcm9sbE9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaXNjcm9sbEhhbmRsZXIuaVNjcm9sbEluc3RhbmNlcy5wdXNoKGlTY3JvbGxJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnLCBpU2Nyb2xsSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm4gYSBib29sZWFuIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgaXMgYVxyXG4gICAgICAgICAqIHRoZSBlbmQgb3IgYXQgdGhlIHN0YXJ0IG9mIHRoZSBzY3JvbGxpbmcgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7U3RyaW5nfSAgdHlwZSAgICAgICBFaXRoZXIgJ3RvcCcgb3IgJ2JvdHRvbSdcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBzY3JvbGxhYmxlIGpRdWVyeSBvYmplY3QgZm9yIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnRcclxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzU2Nyb2xsZWQ6IGZ1bmN0aW9uKHR5cGUsIHNjcm9sbGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbGVyID0gc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vbm8gc2Nyb2xsZXI/IFxyXG4gICAgICAgICAgICBpZiAoIXNjcm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Nyb2xsZXIueSA+PSAwICYmICFzY3JvbGxhYmxlLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAgLSBzY3JvbGxlci55KSArIHNjcm9sbGFibGUuc2Nyb2xsVG9wKCkgKyAxICsgc2Nyb2xsYWJsZS5pbm5lckhlaWdodCgpID49IHNjcm9sbGFibGVbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgc2Nyb2xsYWJsZSBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gc2VjdGlvbi5cclxuICAgICAgICAgKiBJZiB0aGVyZSBhcmUgbGFuZHNjYXBlIHNsaWRlcywgd2lsbCBvbmx5IHJldHVybiBhIHNjcm9sbGFibGUgZWxlbWVudFxyXG4gICAgICAgICAqIGlmIGl0IGlzIGluIHRoZSBhY3RpdmUgc2xpZGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBhY3RpdmVTZWN0aW9uIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNjcm9sbGFibGU6IGZ1bmN0aW9uKGFjdGl2ZVNlY3Rpb24pe1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbGFuZHNjYXBlIHNsaWRlcywgd2UgY2hlY2sgaWYgdGhlIHNjcm9sbGluZyBiYXIgaXMgaW4gdGhlIGN1cnJlbnQgb25lIG9yIG5vdFxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFU19XUkFQUEVSX1NFTCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlU2VjdGlvbi5maW5kKFNMSURFX0FDVElWRV9TRUwpLmZpbmQoU0NST0xMQUJMRV9TRUwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVTZWN0aW9uLmZpbmQoU0NST0xMQUJMRV9TRUwpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHNjcm9sbCBoZWlnaHQgb2YgdGhlIHdyYXBwZWQgY29udGVudC5cclxuICAgICAgICAgKiBJZiB0aGlzIGlzIGxhcmdlciB0aGFuIHRoZSB3aW5kb3cgaGVpZ2h0IG1pbnVzIHNlY3Rpb24gcGFkZGluZyxcclxuICAgICAgICAgKiBvdmVyZmxvdyBzY3JvbGxpbmcgaXMgbmVlZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IGpRdWVyeSBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNoaWxkcmVuKCkuZmlyc3QoKS5nZXQoMCkuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxlZCB3aGVuIG92ZXJmbG93IHNjcm9sbGluZyBpcyBubyBsb25nZXIgbmVlZGVkIGZvciBhIHNlY3Rpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgICAgICBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gZWxlbWVudC5maW5kKFNDUk9MTEFCTEVfU0VMKTtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaVNjcm9sbEluc3RhbmNlID0gc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgICAgIGlTY3JvbGxJbnN0YW5jZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZS5kYXRhKCdpc2Nyb2xsSW5zdGFuY2UnLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpLmZpcnN0KCkudW53cmFwKCkudW53cmFwKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gb3ZlcmZsb3cgc2Nyb2xsaW5nIGhhcyBhbHJlYWR5IGJlZW4gc2V0dXAgYnV0IHRoZVxyXG4gICAgICAgICAqIHdpbmRvdyBoZWlnaHQgaGFzIHBvdGVudGlhbGx5IGNoYW5nZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgICAgICBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICogQHBhcmFtICB7TnVtYmVyfSBzY3JvbGxIZWlnaHQgQ3VycmVudCB3aW5kb3cgaGVpZ2h0IGluIHBpeGVsc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8vdXNpbmcgYSB0aW1lb3V0IGluIG9yZGVyIHRvIGV4ZWN1dGUgdGhlIHJlZnJlc2ggZnVuY3Rpb24gb25seSBvbmNlIHdoZW4gYHVwZGF0ZWAgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIGFcclxuICAgICAgICAgICAgLy9zaG9ydCBwZXJpb2Qgb2YgdGltZS5cclxuICAgICAgICAgICAgLy9pdCBhbHNvIGNvbWVzIG9uIGhhbmR5IGJlY2F1c2UgaVNjcm9sbCByZXF1aXJlcyB0aGUgdXNlIG9mIHRpbWVvdXQgd2hlbiB1c2luZyBgcmVmcmVzaGAuXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpc2Nyb2xsSGFuZGxlci5yZWZyZXNoSWQpO1xyXG4gICAgICAgICAgICBpc2Nyb2xsSGFuZGxlci5yZWZyZXNoSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goaXNjcm9sbEhhbmRsZXIuaVNjcm9sbEluc3RhbmNlcywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmdldCgwKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuXHJcbiAgICAgICAgICAgIC8vdXBkYXRpbmcgdGhlIHdyYXBwZXJzIGhlaWdodFxyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoU0NST0xMQUJMRV9TRUwpLmNzcygnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0ICsgJ3B4JykucGFyZW50KCkuY3NzKCdoZWlnaHQnLCBzY3JvbGxIZWlnaHQgKyAncHgnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsZWQgdG8gZ2V0IGFueSBhZGRpdGlvbmFsIGVsZW1lbnRzIG5lZWRlZCB0byB3cmFwIHRoZSBzZWN0aW9uXHJcbiAgICAgICAgICogY29udGVudCBpbiBvcmRlciB0byBmYWNpbGl0YXRlIG92ZXJmbG93IHNjcm9sbGluZy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ3xPYmplY3R9IENhbiBiZSBhIHN0cmluZyBjb250YWluaW5nIEhUTUwsXHJcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgYSBET00gZWxlbWVudCwgb3IgalF1ZXJ5IG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB3cmFwQ29udGVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicgKyBTQ1JPTExBQkxFICsgJ1wiPjxkaXYgY2xhc3M9XCJmcC1zY3JvbGxlclwiPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7IiwiLyohIGlTY3JvbGwgdjUuMi4wIH4gKGMpIDIwMDgtMjAxNiBNYXR0ZW8gU3BpbmVsbGkgfiBodHRwOi8vY3ViaXEub3JnL2xpY2Vuc2UgKi9cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgTWF0aCkge1xudmFyIHJBRiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSAgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHsgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbnZhciB1dGlscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0ge307XG5cbiAgICB2YXIgX2VsZW1lbnRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICAgIHZhciBfdmVuZG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZlbmRvcnMgPSBbJ3QnLCAnd2Via2l0VCcsICdNb3pUJywgJ21zVCcsICdPVCddLFxuICAgICAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsID0gdmVuZG9ycy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gdmVuZG9yc1tpXSArICdyYW5zZm9ybSc7XG4gICAgICAgICAgICBpZiAoIHRyYW5zZm9ybSBpbiBfZWxlbWVudFN0eWxlICkgcmV0dXJuIHZlbmRvcnNbaV0uc3Vic3RyKDAsIHZlbmRvcnNbaV0ubGVuZ3RoLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBfcHJlZml4U3R5bGUgKHN0eWxlKSB7XG4gICAgICAgIGlmICggX3ZlbmRvciA9PT0gZmFsc2UgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICggX3ZlbmRvciA9PT0gJycgKSByZXR1cm4gc3R5bGU7XG4gICAgICAgIHJldHVybiBfdmVuZG9yICsgc3R5bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZS5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgbWUuZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uIGdldFRpbWUgKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgICBtZS5leHRlbmQgPSBmdW5jdGlvbiAodGFyZ2V0LCBvYmopIHtcbiAgICAgICAgZm9yICggdmFyIGkgaW4gb2JqICkge1xuICAgICAgICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1lLmFkZEV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuICAgIH07XG5cbiAgICBtZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgISFjYXB0dXJlKTtcbiAgICB9O1xuXG4gICAgbWUucHJlZml4UG9pbnRlckV2ZW50ID0gZnVuY3Rpb24gKHBvaW50ZXJFdmVudCkge1xuICAgICAgICByZXR1cm4gd2luZG93Lk1TUG9pbnRlckV2ZW50ID9cbiAgICAgICAgICAgICdNU1BvaW50ZXInICsgcG9pbnRlckV2ZW50LmNoYXJBdCg3KS50b1VwcGVyQ2FzZSgpICsgcG9pbnRlckV2ZW50LnN1YnN0cig4KTpcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudDtcbiAgICB9O1xuXG4gICAgbWUubW9tZW50dW0gPSBmdW5jdGlvbiAoY3VycmVudCwgc3RhcnQsIHRpbWUsIGxvd2VyTWFyZ2luLCB3cmFwcGVyU2l6ZSwgZGVjZWxlcmF0aW9uKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcbiAgICAgICAgICAgIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb247XG5cbiAgICAgICAgZGVjZWxlcmF0aW9uID0gZGVjZWxlcmF0aW9uID09PSB1bmRlZmluZWQgPyAwLjAwMDYgOiBkZWNlbGVyYXRpb247XG5cbiAgICAgICAgZGVzdGluYXRpb24gPSBjdXJyZW50ICsgKCBzcGVlZCAqIHNwZWVkICkgLyAoIDIgKiBkZWNlbGVyYXRpb24gKSAqICggZGlzdGFuY2UgPCAwID8gLTEgOiAxICk7XG4gICAgICAgIGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247XG5cbiAgICAgICAgaWYgKCBkZXN0aW5hdGlvbiA8IGxvd2VyTWFyZ2luICkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZSA/IGxvd2VyTWFyZ2luIC0gKCB3cmFwcGVyU2l6ZSAvIDIuNSAqICggc3BlZWQgLyA4ICkgKSA6IGxvd2VyTWFyZ2luO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhkZXN0aW5hdGlvbiAtIGN1cnJlbnQpO1xuICAgICAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuICAgICAgICB9IGVsc2UgaWYgKCBkZXN0aW5hdGlvbiA+IDAgKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplID8gd3JhcHBlclNpemUgLyAyLjUgKiAoIHNwZWVkIC8gOCApIDogMDtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIF90cmFuc2Zvcm0gPSBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xuXG4gICAgbWUuZXh0ZW5kKG1lLCB7XG4gICAgICAgIGhhc1RyYW5zZm9ybTogX3RyYW5zZm9ybSAhPT0gZmFsc2UsXG4gICAgICAgIGhhc1BlcnNwZWN0aXZlOiBfcHJlZml4U3R5bGUoJ3BlcnNwZWN0aXZlJykgaW4gX2VsZW1lbnRTdHlsZSxcbiAgICAgICAgaGFzVG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyxcbiAgICAgICAgaGFzUG9pbnRlcjogISEod2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpLCAvLyBJRTEwIGlzIHByZWZpeGVkXG4gICAgICAgIGhhc1RyYW5zaXRpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbicpIGluIF9lbGVtZW50U3R5bGVcbiAgICB9KTtcblxuICAgIC8qXG4gICAgVGhpcyBzaG91bGQgZmluZCBhbGwgQW5kcm9pZCBicm93c2VycyBsb3dlciB0aGFuIGJ1aWxkIDUzNS4xOSAoYm90aCBzdG9jayBicm93c2VyIGFuZCB3ZWJ2aWV3KVxuICAgIC0gZ2FsYXh5IFMyIGlzIG9rXG4gICAgLSAyLjMuNiA6IGBBcHBsZVdlYktpdC81MzMuMSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTMzLjFgXG4gICAgLSA0LjAuNCA6IGBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMGBcbiAgIC0gZ2FsYXh5IFMzIGlzIGJhZEFuZHJvaWQgKHN0b2NrIGJyb3dlciwgd2VidmlldylcbiAgICAgYEFwcGxlV2ViS2l0LzUzNC4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM0LjMwYFxuICAgLSBnYWxheHkgUzQgaXMgYmFkQW5kcm9pZCAoc3RvY2sgYnJvd2VyLCB3ZWJ2aWV3KVxuICAgICBgQXBwbGVXZWJLaXQvNTM0LjMwIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzQuMzBgXG4gICAtIGdhbGF4eSBTNSBpcyBPS1xuICAgICBgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzcuMzYgKENocm9tZS8pYFxuICAgLSBnYWxheHkgUzYgaXMgT0tcbiAgICAgYEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IChDaHJvbWUvKWBcbiAgKi9cbiAgICBtZS5pc0JhZEFuZHJvaWQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcHBWZXJzaW9uID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uO1xuICAgICAgICAvLyBBbmRyb2lkIGJyb3dzZXIgaXMgbm90IGEgY2hyb21lIGJyb3dzZXIuXG4gICAgICAgIGlmICgvQW5kcm9pZC8udGVzdChhcHBWZXJzaW9uKSAmJiAhKC9DaHJvbWVcXC9cXGQvLnRlc3QoYXBwVmVyc2lvbikpKSB7XG4gICAgICAgICAgICB2YXIgc2FmYXJpVmVyc2lvbiA9IGFwcFZlcnNpb24ubWF0Y2goL1NhZmFyaVxcLyhcXGQrLlxcZCkvKTtcbiAgICAgICAgICAgIGlmKHNhZmFyaVZlcnNpb24gJiYgdHlwZW9mIHNhZmFyaVZlcnNpb24gPT09IFwib2JqZWN0XCIgJiYgc2FmYXJpVmVyc2lvbi5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHNhZmFyaVZlcnNpb25bMV0pIDwgNTM1LjE5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBtZS5leHRlbmQobWUuc3R5bGUgPSB7fSwge1xuICAgICAgICB0cmFuc2Zvcm06IF90cmFuc2Zvcm0sXG4gICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nKSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxuICAgICAgICB0cmFuc2l0aW9uRGVsYXk6IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbkRlbGF5JyksXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogX3ByZWZpeFN0eWxlKCd0cmFuc2Zvcm1PcmlnaW4nKVxuICAgIH0pO1xuXG4gICAgbWUuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIik7XG4gICAgICAgIHJldHVybiByZS50ZXN0KGUuY2xhc3NOYW1lKTtcbiAgICB9O1xuXG4gICAgbWUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZSwgYykge1xuICAgICAgICBpZiAoIG1lLmhhc0NsYXNzKGUsIGMpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld2NsYXNzID0gZS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgbmV3Y2xhc3MucHVzaChjKTtcbiAgICAgICAgZS5jbGFzc05hbWUgPSBuZXdjbGFzcy5qb2luKCcgJyk7XG4gICAgfTtcblxuICAgIG1lLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcbiAgICAgICAgaWYgKCAhbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIiwgJ2cnKTtcbiAgICAgICAgZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnICcpO1xuICAgIH07XG5cbiAgICBtZS5vZmZzZXQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGxlZnQgPSAtZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHRvcCA9IC1lbC5vZmZzZXRUb3A7XG5cbiAgICAgICAgLy8ganNoaW50IC1XMDg0XG4gICAgICAgIHdoaWxlIChlbCA9IGVsLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgbGVmdCAtPSBlbC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgdG9wIC09IGVsLm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBqc2hpbnQgK1cwODRcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHRvcDogdG9wXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIG1lLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0gZnVuY3Rpb24gKGVsLCBleGNlcHRpb25zKSB7XG4gICAgICAgIGZvciAoIHZhciBpIGluIGV4Y2VwdGlvbnMgKSB7XG4gICAgICAgICAgICBpZiAoIGV4Y2VwdGlvbnNbaV0udGVzdChlbFtpXSkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIG1lLmV4dGVuZChtZS5ldmVudFR5cGUgPSB7fSwge1xuICAgICAgICB0b3VjaHN0YXJ0OiAxLFxuICAgICAgICB0b3VjaG1vdmU6IDEsXG4gICAgICAgIHRvdWNoZW5kOiAxLFxuXG4gICAgICAgIG1vdXNlZG93bjogMixcbiAgICAgICAgbW91c2Vtb3ZlOiAyLFxuICAgICAgICBtb3VzZXVwOiAyLFxuXG4gICAgICAgIHBvaW50ZXJkb3duOiAzLFxuICAgICAgICBwb2ludGVybW92ZTogMyxcbiAgICAgICAgcG9pbnRlcnVwOiAzLFxuXG4gICAgICAgIE1TUG9pbnRlckRvd246IDMsXG4gICAgICAgIE1TUG9pbnRlck1vdmU6IDMsXG4gICAgICAgIE1TUG9pbnRlclVwOiAzXG4gICAgfSk7XG5cbiAgICBtZS5leHRlbmQobWUuZWFzZSA9IHt9LCB7XG4gICAgICAgIHF1YWRyYXRpYzoge1xuICAgICAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGsgKiAoIDIgLSBrICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNpcmN1bGFyOiB7XG4gICAgICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjEsIDAuNTcsIDAuMSwgMSknLCAgIC8vIE5vdCBwcm9wZXJseSBcImNpcmN1bGFyXCIgYnV0IHRoaXMgbG9va3MgYmV0dGVyLCBpdCBzaG91bGQgYmUgKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSlcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoIDEgLSAoIC0tayAqIGsgKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiYWNrOiB7XG4gICAgICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KScsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggayA9IGsgLSAxICkgKiBrICogKCAoIGIgKyAxICkgKiBrICsgYiApICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYm91bmNlOiB7XG4gICAgICAgICAgICBzdHlsZTogJycsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICBpZiAoICggayAvPSAxICkgPCAoIDEgLyAyLjc1ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiBrICogaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBrIDwgKCAyIC8gMi43NSApICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBrIDwgKCAyLjUgLyAyLjc1ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWxhc3RpYzoge1xuICAgICAgICAgICAgc3R5bGU6ICcnLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSAwLjIyLFxuICAgICAgICAgICAgICAgICAgICBlID0gMC40O1xuXG4gICAgICAgICAgICAgICAgaWYgKCBrID09PSAwICkgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgICAgIGlmICggayA9PSAxICkgeyByZXR1cm4gMTsgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICggZSAqIE1hdGgucG93KCAyLCAtIDEwICogayApICogTWF0aC5zaW4oICggayAtIGYgLyA0ICkgKiAoIDIgKiBNYXRoLlBJICkgLyBmICkgKyAxICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG1lLnRhcCA9IGZ1bmN0aW9uIChlLCBldmVudE5hbWUpIHtcbiAgICAgICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgICAgICBldi5wYWdlWCA9IGUucGFnZVg7XG4gICAgICAgIGV2LnBhZ2VZID0gZS5wYWdlWTtcbiAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChldik7XG4gICAgfTtcblxuICAgIG1lLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgICAgZXY7XG5cbiAgICAgICAgaWYgKCAhKC8oU0VMRUNUfElOUFVUfFRFWFRBUkVBKS9pKS50ZXN0KHRhcmdldC50YWdOYW1lKSApIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Nb3VzZUV2ZW50L2luaXRNb3VzZUV2ZW50XG4gICAgICAgICAgICAvLyBpbml0TW91c2VFdmVudCBpcyBkZXByZWNhdGVkLlxuICAgICAgICAgICAgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCh3aW5kb3cuTW91c2VFdmVudCA/ICdNb3VzZUV2ZW50cycgOiAnRXZlbnQnKTtcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY2xpY2snLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGV2LnZpZXcgPSBlLnZpZXcgfHwgd2luZG93O1xuICAgICAgICAgICAgZXYuZGV0YWlsID0gMTtcbiAgICAgICAgICAgIGV2LnNjcmVlblggPSB0YXJnZXQuc2NyZWVuWCB8fCAwO1xuICAgICAgICAgICAgZXYuc2NyZWVuWSA9IHRhcmdldC5zY3JlZW5ZIHx8IDA7XG4gICAgICAgICAgICBldi5jbGllbnRYID0gdGFyZ2V0LmNsaWVudFggfHwgMDtcbiAgICAgICAgICAgIGV2LmNsaWVudFkgPSB0YXJnZXQuY2xpZW50WSB8fCAwO1xuICAgICAgICAgICAgZXYuY3RybEtleSA9ICEhZS5jdHJsS2V5O1xuICAgICAgICAgICAgZXYuYWx0S2V5ID0gISFlLmFsdEtleTtcbiAgICAgICAgICAgIGV2LnNoaWZ0S2V5ID0gISFlLnNoaWZ0S2V5O1xuICAgICAgICAgICAgZXYubWV0YUtleSA9ICEhZS5tZXRhS2V5O1xuICAgICAgICAgICAgZXYuYnV0dG9uID0gMDtcbiAgICAgICAgICAgIGV2LnJlbGF0ZWRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgZXYuX2NvbnN0cnVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbWU7XG59KSgpO1xuZnVuY3Rpb24gSVNjcm9sbCAoZWwsIG9wdGlvbnMpIHtcbiAgICB0aGlzLndyYXBwZXIgPSB0eXBlb2YgZWwgPT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICAgIHRoaXMuc2Nyb2xsZXIgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XG4gICAgdGhpcy5zY3JvbGxlclN0eWxlID0gdGhpcy5zY3JvbGxlci5zdHlsZTsgICAgICAgLy8gY2FjaGUgc3R5bGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuXG4gICAgICAgIHJlc2l6ZVNjcm9sbGJhcnM6IHRydWUsXG5cbiAgICAgICAgbW91c2VXaGVlbFNwZWVkOiAyMCxcblxuICAgICAgICBzbmFwVGhyZXNob2xkOiAwLjMzNCxcblxuLy8gSU5TRVJUIFBPSU5UOiBPUFRJT05TXG4gICAgICAgIGRpc2FibGVQb2ludGVyIDogIXV0aWxzLmhhc1BvaW50ZXIsXG4gICAgICAgIGRpc2FibGVUb3VjaCA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgIXV0aWxzLmhhc1RvdWNoLFxuICAgICAgICBkaXNhYmxlTW91c2UgOiB1dGlscy5oYXNQb2ludGVyIHx8IHV0aWxzLmhhc1RvdWNoLFxuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcbiAgICAgICAgZGlyZWN0aW9uTG9ja1RocmVzaG9sZDogNSxcbiAgICAgICAgbW9tZW50dW06IHRydWUsXG5cbiAgICAgICAgYm91bmNlOiB0cnVlLFxuICAgICAgICBib3VuY2VUaW1lOiA2MDAsXG4gICAgICAgIGJvdW5jZUVhc2luZzogJycsXG5cbiAgICAgICAgcHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgICAgIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uOiB7IHRhZ05hbWU6IC9eKElOUFVUfFRFWFRBUkVBfEJVVFRPTnxTRUxFQ1QpJC8gfSxcblxuICAgICAgICBIV0NvbXBvc2l0aW5nOiB0cnVlLFxuICAgICAgICB1c2VUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgIGJpbmRUb1dyYXBwZXI6IHR5cGVvZiB3aW5kb3cub25tb3VzZWRvd24gPT09IFwidW5kZWZpbmVkXCJcbiAgICB9O1xuXG4gICAgZm9yICggdmFyIGkgaW4gb3B0aW9ucyApIHtcbiAgICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgb3B0aW9uc1xuICAgIHRoaXMudHJhbnNsYXRlWiA9IHRoaXMub3B0aW9ucy5IV0NvbXBvc2l0aW5nICYmIHV0aWxzLmhhc1BlcnNwZWN0aXZlID8gJyB0cmFuc2xhdGVaKDApJyA6ICcnO1xuXG4gICAgdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gPSB1dGlscy5oYXNUcmFuc2l0aW9uICYmIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uO1xuICAgIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gPSB1dGlscy5oYXNUcmFuc2Zvcm0gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybTtcblxuICAgIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT09IHRydWUgPyAndmVydGljYWwnIDogdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g7XG4gICAgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ID0gIXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoICYmIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcblxuICAgIC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXG4gICAgdGhpcy5vcHRpb25zLnNjcm9sbFkgPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAndmVydGljYWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWTtcbiAgICB0aGlzLm9wdGlvbnMuc2Nyb2xsWCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICdob3Jpem9udGFsJyA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnNjcm9sbFg7XG5cbiAgICAvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXG4gICAgdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgPSB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCAmJiAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g7XG4gICAgdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA/IDAgOiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZDtcblxuICAgIHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcgPSB0eXBlb2YgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9PSAnc3RyaW5nJyA/IHV0aWxzLmVhc2VbdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZ10gfHwgdXRpbHMuZWFzZS5jaXJjdWxhciA6IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cbiAgICB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyA9IHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nID09PSB1bmRlZmluZWQgPyA2MCA6IHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMudGFwID09PSB0cnVlICkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudGFwID0gJ3RhcCc7XG4gICAgfVxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2N1YmlxL2lzY3JvbGwvaXNzdWVzLzEwMjlcbiAgICBpZiAoIXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmICF0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtKSB7XG4gICAgICAgIGlmKCEoL3JlbGF0aXZlfGFic29sdXRlL2kpLnRlc3QodGhpcy5zY3JvbGxlclN0eWxlLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxlclN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyA9PSAnc2NhbGUnICkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbiA/IC0xIDogMTtcblxuLy8gSU5TRVJUIFBPSU5UOiBOT1JNQUxJWkFUSU9OXG5cbiAgICAvLyBTb21lIGRlZmF1bHRzXG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMuZGlyZWN0aW9uWCA9IDA7XG4gICAgdGhpcy5kaXJlY3Rpb25ZID0gMDtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuLy8gSU5TRVJUIFBPSU5UOiBERUZBVUxUU1xuXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgdGhpcy5zY3JvbGxUbyh0aGlzLm9wdGlvbnMuc3RhcnRYLCB0aGlzLm9wdGlvbnMuc3RhcnRZKTtcbiAgICB0aGlzLmVuYWJsZSgpO1xufVxuXG5JU2Nyb2xsLnByb3RvdHlwZSA9IHtcbiAgICB2ZXJzaW9uOiAnNS4yLjAnLFxuXG4gICAgX2luaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faW5pdEV2ZW50cygpO1xuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMgfHwgdGhpcy5vcHRpb25zLmluZGljYXRvcnMgKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0SW5kaWNhdG9ycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMubW91c2VXaGVlbCApIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRXaGVlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc25hcCApIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTbmFwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyApIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRLZXlzKCk7XG4gICAgICAgIH1cblxuLy8gSU5TRVJUIFBPSU5UOiBfaW5pdFxuXG4gICAgfSxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faW5pdEV2ZW50cyh0cnVlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG4gICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2V4ZWNFdmVudCgnZGVzdHJveScpO1xuICAgIH0sXG5cbiAgICBfdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCBlLnRhcmdldCAhPSB0aGlzLnNjcm9sbGVyIHx8ICF0aGlzLmlzSW5UcmFuc2l0aW9uICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUoKTtcbiAgICAgICAgaWYgKCAhdGhpcy5yZXNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5ib3VuY2VUaW1lKSApIHtcbiAgICAgICAgICAgIHRoaXMuaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBSZWFjdCB0byBsZWZ0IG1vdXNlIGJ1dHRvbiBvbmx5XG4gICAgICAgIGlmICggdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT0gMSApIHtcbiAgICAgICAgICAvLyBmb3IgYnV0dG9uIHByb3BlcnR5XG4gICAgICAgICAgLy8gaHR0cDovL3VuaXhwYXBhLmNvbS9qcy9tb3VzZS5odG1sXG4gICAgICAgICAgdmFyIGJ1dHRvbjtcbiAgICAgICAgaWYgKCFlLndoaWNoKSB7XG4gICAgICAgICAgLyogSUUgY2FzZSAqL1xuICAgICAgICAgIGJ1dHRvbiA9IChlLmJ1dHRvbiA8IDIpID8gMCA6XG4gICAgICAgICAgICAgICAgICAgKChlLmJ1dHRvbiA9PSA0KSA/IDEgOiAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBBbGwgb3RoZXJzICovXG4gICAgICAgICAgYnV0dG9uID0gZS5idXR0b247XG4gICAgICAgIH1cbiAgICAgICAgICAgIGlmICggYnV0dG9uICE9PSAwICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuZW5hYmxlZCB8fCAodGhpcy5pbml0aWF0ZWQgJiYgdXRpbHMuZXZlbnRUeXBlW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5pc0JhZEFuZHJvaWQgJiYgIXV0aWxzLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pICkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcbiAgICAgICAgICAgIHBvcztcblxuICAgICAgICB0aGlzLmluaXRpYXRlZCAgPSB1dGlscy5ldmVudFR5cGVbZS50eXBlXTtcbiAgICAgICAgdGhpcy5tb3ZlZCAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzdFggICAgICA9IDA7XG4gICAgICAgIHRoaXMuZGlzdFkgICAgICA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gMDtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHV0aWxzLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uICYmIHRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSgpO1xuICAgICAgICAgICAgdGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgcG9zID0gdGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcbiAgICAgICAgICAgIHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoICF0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aGlzLmlzQW5pbWF0aW5nICkge1xuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRYICAgID0gdGhpcy54O1xuICAgICAgICB0aGlzLnN0YXJ0WSAgICA9IHRoaXMueTtcbiAgICAgICAgdGhpcy5hYnNTdGFydFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYWJzU3RhcnRZID0gdGhpcy55O1xuICAgICAgICB0aGlzLnBvaW50WCAgICA9IHBvaW50LnBhZ2VYO1xuICAgICAgICB0aGlzLnBvaW50WSAgICA9IHBvaW50LnBhZ2VZO1xuXG4gICAgICAgIHRoaXMuX2V4ZWNFdmVudCgnYmVmb3JlU2Nyb2xsU3RhcnQnKTtcbiAgICB9LFxuXG4gICAgX21vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICggIXRoaXMuZW5hYmxlZCB8fCB1dGlscy5ldmVudFR5cGVbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCApIHsgICAgLy8gaW5jcmVhc2VzIHBlcmZvcm1hbmNlIG9uIEFuZHJvaWQ/IFRPRE86IGNoZWNrIVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50ICAgICAgID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcbiAgICAgICAgICAgIGRlbHRhWCAgICAgID0gcG9pbnQucGFnZVggLSB0aGlzLnBvaW50WCxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgID0gcG9pbnQucGFnZVkgLSB0aGlzLnBvaW50WSxcbiAgICAgICAgICAgIHRpbWVzdGFtcCAgID0gdXRpbHMuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbmV3WCwgbmV3WSxcbiAgICAgICAgICAgIGFic0Rpc3RYLCBhYnNEaXN0WTtcblxuICAgICAgICB0aGlzLnBvaW50WCAgICAgPSBwb2ludC5wYWdlWDtcbiAgICAgICAgdGhpcy5wb2ludFkgICAgID0gcG9pbnQucGFnZVk7XG5cbiAgICAgICAgdGhpcy5kaXN0WCAgICAgICs9IGRlbHRhWDtcbiAgICAgICAgdGhpcy5kaXN0WSAgICAgICs9IGRlbHRhWTtcbiAgICAgICAgYWJzRGlzdFggICAgICAgID0gTWF0aC5hYnModGhpcy5kaXN0WCk7XG4gICAgICAgIGFic0Rpc3RZICAgICAgICA9IE1hdGguYWJzKHRoaXMuZGlzdFkpO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbW92ZSBhdCBsZWFzdCAxMCBwaXhlbHMgZm9yIHRoZSBzY3JvbGxpbmcgdG8gaW5pdGlhdGVcbiAgICAgICAgaWYgKCB0aW1lc3RhbXAgLSB0aGlzLmVuZFRpbWUgPiAzMDAgJiYgKGFic0Rpc3RYIDwgMTAgJiYgYWJzRGlzdFkgPCAxMCkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB5b3UgYXJlIHNjcm9sbGluZyBpbiBvbmUgZGlyZWN0aW9uIGxvY2sgdGhlIG90aGVyXG4gICAgICAgIGlmICggIXRoaXMuZGlyZWN0aW9uTG9ja2VkICYmICF0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCApIHtcbiAgICAgICAgICAgIGlmICggYWJzRGlzdFggPiBhYnNEaXN0WSArIHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gJ2gnOyAgICAgLy8gbG9jayBob3Jpem9udGFsbHlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFic0Rpc3RZID49IGFic0Rpc3RYICsgdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAndic7ICAgICAvLyBsb2NrIHZlcnRpY2FsbHlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnbic7ICAgICAvLyBubyBsb2NrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMuZGlyZWN0aW9uTG9ja2VkID09ICdoJyApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbHRhWSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuZGlyZWN0aW9uTG9ja2VkID09ICd2JyApIHtcbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnICkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICd2ZXJ0aWNhbCcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyBkZWx0YVggOiAwO1xuICAgICAgICBkZWx0YVkgPSB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gZGVsdGFZIDogMDtcblxuICAgICAgICBuZXdYID0gdGhpcy54ICsgZGVsdGFYO1xuICAgICAgICBuZXdZID0gdGhpcy55ICsgZGVsdGFZO1xuXG4gICAgICAgIC8vIFNsb3cgZG93biBpZiBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXG4gICAgICAgIGlmICggbmV3WCA+IDAgfHwgbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcbiAgICAgICAgICAgIG5ld1ggPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy54ICsgZGVsdGFYIC8gMyA6IG5ld1ggPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIG5ld1kgPiAwIHx8IG5ld1kgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG4gICAgICAgICAgICBuZXdZID0gdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMueSArIGRlbHRhWSAvIDMgOiBuZXdZID4gMCA/IDAgOiB0aGlzLm1heFNjcm9sbFk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSBkZWx0YVggPiAwID8gLTEgOiBkZWx0YVggPCAwID8gMSA6IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IGRlbHRhWSA+IDAgPyAtMSA6IGRlbHRhWSA8IDAgPyAxIDogMDtcblxuICAgICAgICBpZiAoICF0aGlzLm1vdmVkICkge1xuICAgICAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxTdGFydCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG4vKiBSRVBMQUNFIFNUQVJUOiBfbW92ZSAqL1xuXG4gICAgICAgIGlmICggdGltZXN0YW1wIC0gdGhpcy5zdGFydFRpbWUgPiAzMDAgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy54O1xuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSB0aGlzLnk7XG4gICAgICAgIH1cblxuLyogUkVQTEFDRSBFTkQ6IF9tb3ZlICovXG5cbiAgICB9LFxuXG4gICAgX2VuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2ludCA9IGUuY2hhbmdlZFRvdWNoZXMgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZSxcbiAgICAgICAgICAgIG1vbWVudHVtWCxcbiAgICAgICAgICAgIG1vbWVudHVtWSxcbiAgICAgICAgICAgIGR1cmF0aW9uID0gdXRpbHMuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUsXG4gICAgICAgICAgICBuZXdYID0gTWF0aC5yb3VuZCh0aGlzLngpLFxuICAgICAgICAgICAgbmV3WSA9IE1hdGgucm91bmQodGhpcy55KSxcbiAgICAgICAgICAgIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5ld1ggLSB0aGlzLnN0YXJ0WCksXG4gICAgICAgICAgICBkaXN0YW5jZVkgPSBNYXRoLmFicyhuZXdZIC0gdGhpcy5zdGFydFkpLFxuICAgICAgICAgICAgdGltZSA9IDAsXG4gICAgICAgICAgICBlYXNpbmcgPSAnJztcblxuICAgICAgICB0aGlzLmlzSW5UcmFuc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSAwO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSB1dGlscy5nZXRUaW1lKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKCB0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZKTsgIC8vIGVuc3VyZXMgdGhhdCB0aGUgbGFzdCBwb3NpdGlvbiBpcyByb3VuZGVkXG5cbiAgICAgICAgLy8gd2Ugc2Nyb2xsZWQgbGVzcyB0aGFuIDEwIHBpeGVsc1xuICAgICAgICBpZiAoICF0aGlzLm1vdmVkICkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMudGFwICkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnRhcChlLCB0aGlzLm9wdGlvbnMudGFwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuY2xpY2sgKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuY2xpY2soZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsQ2FuY2VsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMuX2V2ZW50cy5mbGljayAmJiBkdXJhdGlvbiA8IDIwMCAmJiBkaXN0YW5jZVggPCAxMDAgJiYgZGlzdGFuY2VZIDwgMTAwICkge1xuICAgICAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdmbGljaycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhcnQgbW9tZW50dW0gYW5pbWF0aW9uIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5tb21lbnR1bSAmJiBkdXJhdGlvbiA8IDMwMCApIHtcbiAgICAgICAgICAgIG1vbWVudHVtWCA9IHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCA/IHV0aWxzLm1vbWVudHVtKHRoaXMueCwgdGhpcy5zdGFydFgsIGR1cmF0aW9uLCB0aGlzLm1heFNjcm9sbFgsIHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLndyYXBwZXJXaWR0aCA6IDAsIHRoaXMub3B0aW9ucy5kZWNlbGVyYXRpb24pIDogeyBkZXN0aW5hdGlvbjogbmV3WCwgZHVyYXRpb246IDAgfTtcbiAgICAgICAgICAgIG1vbWVudHVtWSA9IHRoaXMuaGFzVmVydGljYWxTY3JvbGwgPyB1dGlscy5tb21lbnR1bSh0aGlzLnksIHRoaXMuc3RhcnRZLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxZLCB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy53cmFwcGVySGVpZ2h0IDogMCwgdGhpcy5vcHRpb25zLmRlY2VsZXJhdGlvbikgOiB7IGRlc3RpbmF0aW9uOiBuZXdZLCBkdXJhdGlvbjogMCB9O1xuICAgICAgICAgICAgbmV3WCA9IG1vbWVudHVtWC5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIG5ld1kgPSBtb21lbnR1bVkuZGVzdGluYXRpb247XG4gICAgICAgICAgICB0aW1lID0gTWF0aC5tYXgobW9tZW50dW1YLmR1cmF0aW9uLCBtb21lbnR1bVkuZHVyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5pc0luVHJhbnNpdGlvbiA9IDE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnNuYXAgKSB7XG4gICAgICAgICAgICB2YXIgc25hcCA9IHRoaXMuX25lYXJlc3RTbmFwKG5ld1gsIG5ld1kpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHNuYXA7XG4gICAgICAgICAgICB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLmFicyhuZXdYIC0gc25hcC54KSwgMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLmFicyhuZXdZIC0gc25hcC55KSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgKSwgMzAwKTtcbiAgICAgICAgICAgIG5ld1ggPSBzbmFwLng7XG4gICAgICAgICAgICBuZXdZID0gc25hcC55O1xuXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblggPSAwO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gMDtcbiAgICAgICAgICAgIGVhc2luZyA9IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG4gICAgICAgIH1cblxuLy8gSU5TRVJUIFBPSU5UOiBfZW5kXG5cbiAgICAgICAgaWYgKCBuZXdYICE9IHRoaXMueCB8fCBuZXdZICE9IHRoaXMueSApIHtcbiAgICAgICAgICAgIC8vIGNoYW5nZSBlYXNpbmcgZnVuY3Rpb24gd2hlbiBzY3JvbGxlciBnb2VzIG91dCBvZiB0aGUgYm91bmRhcmllc1xuICAgICAgICAgICAgaWYgKCBuZXdYID4gMCB8fCBuZXdYIDwgdGhpcy5tYXhTY3JvbGxYIHx8IG5ld1kgPiAwIHx8IG5ld1kgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG4gICAgICAgICAgICAgICAgZWFzaW5nID0gdXRpbHMuZWFzZS5xdWFkcmF0aWM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8obmV3WCwgbmV3WSwgdGltZSwgZWFzaW5nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG4gICAgfSxcblxuICAgIF9yZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuXG4gICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5yZWZyZXNoKCk7XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nKTtcbiAgICB9LFxuXG4gICAgcmVzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLngsXG4gICAgICAgICAgICB5ID0gdGhpcy55O1xuXG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsIHx8IHRoaXMueCA+IDAgKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy54IDwgdGhpcy5tYXhTY3JvbGxYICkge1xuICAgICAgICAgICAgeCA9IHRoaXMubWF4U2Nyb2xsWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgfHwgdGhpcy55ID4gMCApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnkgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG4gICAgICAgICAgICB5ID0gdGhpcy5tYXhTY3JvbGxZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB4ID09IHRoaXMueCAmJiB5ID09IHRoaXMueSApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oeCwgeSwgdGltZSwgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZiA9IHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7ICAgICAvLyBGb3JjZSByZWZsb3dcblxuICAgICAgICB0aGlzLndyYXBwZXJXaWR0aCAgID0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgID0gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodDtcblxuLyogUkVQTEFDRSBTVEFSVDogcmVmcmVzaCAqL1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsZXJXaWR0aCAgPSB0aGlzLnNjcm9sbGVyLm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLnNjcm9sbGVySGVpZ2h0ID0gdGhpcy5zY3JvbGxlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5tYXhTY3JvbGxYICAgICA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zY3JvbGxlcldpZHRoO1xuICAgICAgICB0aGlzLm1heFNjcm9sbFkgICAgID0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5zY3JvbGxlckhlaWdodDtcblxuLyogUkVQTEFDRSBFTkQ6IHJlZnJlc2ggKi9cblxuICAgICAgICB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgICAgPSB0aGlzLm9wdGlvbnMuc2Nyb2xsWCAmJiB0aGlzLm1heFNjcm9sbFggPCAwO1xuICAgICAgICB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICAgICAgPSB0aGlzLm9wdGlvbnMuc2Nyb2xsWSAmJiB0aGlzLm1heFNjcm9sbFkgPCAwO1xuXG4gICAgICAgIGlmICggIXRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCApIHtcbiAgICAgICAgICAgIHRoaXMubWF4U2Nyb2xsWCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyV2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG4gICAgICAgICAgICB0aGlzLm1heFNjcm9sbFkgPSAwO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxlckhlaWdodCA9IHRoaXMud3JhcHBlckhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cbiAgICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gdXRpbHMub2Zmc2V0KHRoaXMud3JhcHBlcik7XG5cbiAgICAgICAgdGhpcy5fZXhlY0V2ZW50KCdyZWZyZXNoJyk7XG5cbiAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XG5cbi8vIElOU0VSVCBQT0lOVDogX3JlZnJlc2hcblxuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgICAgIGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2goZm4pO1xuICAgIH0sXG5cbiAgICBvZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgICAgICBpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9ldmVudHNbdHlwZV0uaW5kZXhPZihmbik7XG5cbiAgICAgICAgaWYgKCBpbmRleCA+IC0xICkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2V4ZWNFdmVudDogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5fZXZlbnRzW3R5cGVdICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCAhbCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIDsgaSA8IGw7IGkrKyApIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXVtpXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNjcm9sbEJ5OiBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nKSB7XG4gICAgICAgIHggPSB0aGlzLnggKyB4O1xuICAgICAgICB5ID0gdGhpcy55ICsgeTtcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgMDtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XG4gICAgfSxcblxuICAgIHNjcm9sbFRvOiBmdW5jdGlvbiAoeCwgeSwgdGltZSwgZWFzaW5nKSB7XG4gICAgICAgIGVhc2luZyA9IGVhc2luZyB8fCB1dGlscy5lYXNlLmNpcmN1bGFyO1xuXG4gICAgICAgIHRoaXMuaXNJblRyYW5zaXRpb24gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aW1lID4gMDtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25UeXBlID0gdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgZWFzaW5nLnN0eWxlO1xuICAgICAgICBpZiAoICF0aW1lIHx8IHRyYW5zaXRpb25UeXBlICkge1xuICAgICAgICAgICAgICAgIGlmKHRyYW5zaXRpb25UeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbihlYXNpbmcuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSh0aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlKHgsIHksIHRpbWUsIGVhc2luZy5mbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2Nyb2xsVG9FbGVtZW50OiBmdW5jdGlvbiAoZWwsIHRpbWUsIG9mZnNldFgsIG9mZnNldFksIGVhc2luZykge1xuICAgICAgICBlbCA9IGVsLm5vZGVUeXBlID8gZWwgOiB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXG4gICAgICAgIGlmICggIWVsICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7XG5cbiAgICAgICAgcG9zLmxlZnQgLT0gdGhpcy53cmFwcGVyT2Zmc2V0LmxlZnQ7XG4gICAgICAgIHBvcy50b3AgIC09IHRoaXMud3JhcHBlck9mZnNldC50b3A7XG5cbiAgICAgICAgLy8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXG4gICAgICAgIGlmICggb2Zmc2V0WCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIG9mZnNldFggPSBNYXRoLnJvdW5kKGVsLm9mZnNldFdpZHRoIC8gMiAtIHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggb2Zmc2V0WSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKGVsLm9mZnNldEhlaWdodCAvIDIgLSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBwb3MubGVmdCAtPSBvZmZzZXRYIHx8IDA7XG4gICAgICAgIHBvcy50b3AgIC09IG9mZnNldFkgfHwgMDtcblxuICAgICAgICBwb3MubGVmdCA9IHBvcy5sZWZ0ID4gMCA/IDAgOiBwb3MubGVmdCA8IHRoaXMubWF4U2Nyb2xsWCA/IHRoaXMubWF4U2Nyb2xsWCA6IHBvcy5sZWZ0O1xuICAgICAgICBwb3MudG9wICA9IHBvcy50b3AgID4gMCA/IDAgOiBwb3MudG9wICA8IHRoaXMubWF4U2Nyb2xsWSA/IHRoaXMubWF4U2Nyb2xsWSA6IHBvcy50b3A7XG5cbiAgICAgICAgdGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsIHx8IHRpbWUgPT09ICdhdXRvJyA/IE1hdGgubWF4KE1hdGguYWJzKHRoaXMueC1wb3MubGVmdCksIE1hdGguYWJzKHRoaXMueS1wb3MudG9wKSkgOiB0aW1lO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zLmxlZnQsIHBvcy50b3AsIHRpbWUsIGVhc2luZyk7XG4gICAgfSxcblxuICAgIF90cmFuc2l0aW9uVGltZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG4gICAgICAgIHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgIGlmKCFkdXJhdGlvblByb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID0gdGltZSArICdtcyc7XG5cbiAgICAgICAgaWYgKCAhdGltZSAmJiB1dGlscy5pc0JhZEFuZHJvaWQgKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwLjAwMDFtcyc7XG4gICAgICAgICAgICAvLyByZW1vdmUgMC4wMDAxbXNcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHJBRihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZihzZWxmLnNjcm9sbGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjcm9sbGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuICAgICAgICAgICAgZm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yc1tpXS50cmFuc2l0aW9uVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1lXG5cbiAgICB9LFxuXG4gICAgX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZnVuY3Rpb24gKGVhc2luZykge1xuICAgICAgICB0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXSA9IGVhc2luZztcblxuXG4gICAgICAgIGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuICAgICAgICAgICAgZm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yc1tpXS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuXG4gICAgfSxcblxuICAgIF90cmFuc2xhdGU6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybSApIHtcblxuLyogUkVQTEFDRSBTVEFSVDogX3RyYW5zbGF0ZSAqL1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJyArIHRoaXMudHJhbnNsYXRlWjtcblxuLyogUkVQTEFDRSBFTkQ6IF90cmFuc2xhdGUgKi9cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoeCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZCh5KTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXJTdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyU3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuXG5cbiAgICBpZiAoIHRoaXMuaW5kaWNhdG9ycyApIHtcbiAgICAgICAgZm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzW2ldLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuLy8gSU5TRVJUIFBPSU5UOiBfdHJhbnNsYXRlXG5cbiAgICB9LFxuXG4gICAgX2luaXRFdmVudHM6IGZ1bmN0aW9uIChyZW1vdmUpIHtcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHJlbW92ZSA/IHV0aWxzLnJlbW92ZUV2ZW50IDogdXRpbHMuYWRkRXZlbnQsXG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLm9wdGlvbnMuYmluZFRvV3JhcHBlciA/IHRoaXMud3JhcHBlciA6IHdpbmRvdztcblxuICAgICAgICBldmVudFR5cGUod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzKTtcbiAgICAgICAgZXZlbnRUeXBlKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMpO1xuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmNsaWNrICkge1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ2NsaWNrJywgdGhpcywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ21vdXNlZG93bicsIHRoaXMpO1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNlY2FuY2VsJywgdGhpcyk7XG4gICAgICAgICAgICBldmVudFR5cGUodGFyZ2V0LCAnbW91c2V1cCcsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB1dGlscy5oYXNQb2ludGVyICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXIgKSB7XG4gICAgICAgICAgICBldmVudFR5cGUodGhpcy53cmFwcGVyLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuICAgICAgICAgICAgZXZlbnRUeXBlKHRhcmdldCwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmNhbmNlbCcpLCB0aGlzKTtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB1dGlscy5oYXNUb3VjaCAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0aGlzLndyYXBwZXIsICd0b3VjaHN0YXJ0JywgdGhpcyk7XG4gICAgICAgICAgICBldmVudFR5cGUodGFyZ2V0LCAndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgICAgICAgICBldmVudFR5cGUodGFyZ2V0LCAndG91Y2hjYW5jZWwnLCB0aGlzKTtcbiAgICAgICAgICAgIGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaGVuZCcsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICd0cmFuc2l0aW9uZW5kJywgdGhpcyk7XG4gICAgICAgIGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRoaXMpO1xuICAgICAgICBldmVudFR5cGUodGhpcy5zY3JvbGxlciwgJ29UcmFuc2l0aW9uRW5kJywgdGhpcyk7XG4gICAgICAgIGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnTVNUcmFuc2l0aW9uRW5kJywgdGhpcyk7XG4gICAgfSxcblxuICAgIGdldENvbXB1dGVkUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2Nyb2xsZXIsIG51bGwpLFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG4gICAgICAgICAgICBtYXRyaXggPSBtYXRyaXhbdXRpbHMuc3R5bGUudHJhbnNmb3JtXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xuICAgICAgICAgICAgeCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xuICAgICAgICAgICAgeSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9ICttYXRyaXgubGVmdC5yZXBsYWNlKC9bXi1cXGQuXS9nLCAnJyk7XG4gICAgICAgICAgICB5ID0gK21hdHJpeC50b3AucmVwbGFjZSgvW14tXFxkLl0vZywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xuICAgIH0sXG4gICAgX2luaXRJbmRpY2F0b3JzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnRlcmFjdGl2ZSA9IHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZVNjcm9sbGJhcnMsXG4gICAgICAgICAgICBjdXN0b21TdHlsZSA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyAhPSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGluZGljYXRvcnMgPSBbXSxcbiAgICAgICAgICAgIGluZGljYXRvcjtcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3JzID0gW107XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyApIHtcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsIHNjcm9sbGJhclxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsWSApIHtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyKCd2JywgaW50ZXJhY3RpdmUsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGludGVyYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2Nyb2xsYmFyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU6IGN1c3RvbVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHRoaXMub3B0aW9ucy5yZXNpemVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgICAgICBmYWRlOiB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Rlblg6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbmRpY2F0b3IuZWwpO1xuICAgICAgICAgICAgICAgIGluZGljYXRvcnMucHVzaChpbmRpY2F0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIb3Jpem9udGFsIHNjcm9sbGJhclxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsWCApIHtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyKCdoJywgaW50ZXJhY3RpdmUsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGludGVyYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2Nyb2xsYmFyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU6IGN1c3RvbVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHRoaXMub3B0aW9ucy5yZXNpemVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRoaXMub3B0aW9ucy5zaHJpbmtTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgICAgICBmYWRlOiB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Rlblk6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbmRpY2F0b3IuZWwpO1xuICAgICAgICAgICAgICAgIGluZGljYXRvcnMucHVzaChpbmRpY2F0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyApIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGNoZWNrIGNvbmNhdCBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICBpbmRpY2F0b3JzID0gaW5kaWNhdG9ycy5jb25jYXQodGhpcy5vcHRpb25zLmluZGljYXRvcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSBpbmRpY2F0b3JzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9ycy5wdXNoKCBuZXcgSW5kaWNhdG9yKHRoaXMsIGluZGljYXRvcnNbaV0pICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBjaGVjayBpZiB3ZSBjYW4gdXNlIGFycmF5Lm1hcCAod2lkZSBjb21wYXRpYmlsaXR5IGFuZCBwZXJmb3JtYW5jZSBpc3N1ZXMpXG4gICAgICAgIGZ1bmN0aW9uIF9pbmRpY2F0b3JzTWFwIChmbikge1xuICAgICAgICAgICAgaWYgKHRoYXQuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgICAgIGZvciAoIHZhciBpID0gdGhhdC5pbmRpY2F0b3JzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgICAgICAgICAgICAgZm4uY2FsbCh0aGF0LmluZGljYXRvcnNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzICkge1xuICAgICAgICAgICAgdGhpcy5vbignc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbignc2Nyb2xsQ2FuY2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbignc2Nyb2xsU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGUoMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5vbignYmVmb3JlU2Nyb2xsU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGUoMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5vbigncmVmcmVzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmluZGljYXRvcnM7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfaW5pdFdoZWVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ3doZWVsJywgdGhpcyk7XG4gICAgICAgIHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ21vdXNld2hlZWwnLCB0aGlzKTtcbiAgICAgICAgdXRpbHMuYWRkRXZlbnQodGhpcy53cmFwcGVyLCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMud2hlZWxUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMud2hlZWxUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlciwgJ3doZWVsJywgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICdtb3VzZXdoZWVsJywgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICdET01Nb3VzZVNjcm9sbCcsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX3doZWVsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoICF0aGlzLmVuYWJsZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2hlZWxEZWx0YVgsIHdoZWVsRGVsdGFZLFxuICAgICAgICAgICAgbmV3WCwgbmV3WSxcbiAgICAgICAgICAgIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGlmICggdGhpcy53aGVlbFRpbWVvdXQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIHNjcm9sbEVuZCBldmVudCBhZnRlciA0MDBtcyB0aGUgd2hlZWwgc3RvcHBlZCBzY3JvbGxpbmdcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMud2hlZWxUaW1lb3V0KTtcbiAgICAgICAgdGhpcy53aGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCF0aGF0Lm9wdGlvbnMuc25hcCkge1xuICAgICAgICAgICAgICAgIHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LndoZWVsVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgNDAwKTtcblxuICAgICAgICBpZiAoICdkZWx0YVgnIGluIGUgKSB7XG4gICAgICAgICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB3aGVlbERlbHRhWCA9IC1lLmRlbHRhWCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG4gICAgICAgICAgICAgICAgd2hlZWxEZWx0YVkgPSAtZS5kZWx0YVkgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGVlbERlbHRhWCA9IC1lLmRlbHRhWDtcbiAgICAgICAgICAgICAgICB3aGVlbERlbHRhWSA9IC1lLmRlbHRhWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICggJ3doZWVsRGVsdGFYJyBpbiBlICkge1xuICAgICAgICAgICAgd2hlZWxEZWx0YVggPSBlLndoZWVsRGVsdGFYIC8gMTIwICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcbiAgICAgICAgICAgIHdoZWVsRGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDEyMCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoICd3aGVlbERlbHRhJyBpbiBlICkge1xuICAgICAgICAgICAgd2hlZWxEZWx0YVggPSB3aGVlbERlbHRhWSA9IGUud2hlZWxEZWx0YSAvIDEyMCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoICdkZXRhaWwnIGluIGUgKSB7XG4gICAgICAgICAgICB3aGVlbERlbHRhWCA9IHdoZWVsRGVsdGFZID0gLWUuZGV0YWlsIC8gMyAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGVlbERlbHRhWCAqPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb247XG4gICAgICAgIHdoZWVsRGVsdGFZICo9IHRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbjtcblxuICAgICAgICBpZiAoICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuICAgICAgICAgICAgd2hlZWxEZWx0YVggPSB3aGVlbERlbHRhWTtcbiAgICAgICAgICAgIHdoZWVsRGVsdGFZID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLnNuYXAgKSB7XG4gICAgICAgICAgICBuZXdYID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWDtcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZO1xuXG4gICAgICAgICAgICBpZiAoIHdoZWVsRGVsdGFYID4gMCApIHtcbiAgICAgICAgICAgICAgICBuZXdYLS07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB3aGVlbERlbHRhWCA8IDAgKSB7XG4gICAgICAgICAgICAgICAgbmV3WCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHdoZWVsRGVsdGFZID4gMCApIHtcbiAgICAgICAgICAgICAgICBuZXdZLS07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB3aGVlbERlbHRhWSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgbmV3WSsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdvVG9QYWdlKG5ld1gsIG5ld1kpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBuZXdYID0gdGhpcy54ICsgTWF0aC5yb3VuZCh0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyB3aGVlbERlbHRhWCA6IDApO1xuICAgICAgICBuZXdZID0gdGhpcy55ICsgTWF0aC5yb3VuZCh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsID8gd2hlZWxEZWx0YVkgOiAwKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSB3aGVlbERlbHRhWCA+IDAgPyAtMSA6IHdoZWVsRGVsdGFYIDwgMCA/IDEgOiAwO1xuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSB3aGVlbERlbHRhWSA+IDAgPyAtMSA6IHdoZWVsRGVsdGFZIDwgMCA/IDEgOiAwO1xuXG4gICAgICAgIGlmICggbmV3WCA+IDAgKSB7XG4gICAgICAgICAgICBuZXdYID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcbiAgICAgICAgICAgIG5ld1ggPSB0aGlzLm1heFNjcm9sbFg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG5ld1kgPiAwICkge1xuICAgICAgICAgICAgbmV3WSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIG5ld1kgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG4gICAgICAgICAgICBuZXdZID0gdGhpcy5tYXhTY3JvbGxZO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhuZXdYLCBuZXdZLCAwKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfd2hlZWxcbiAgICB9LFxuXG4gICAgX2luaXRTbmFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB7fTtcblxuICAgICAgICBpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMuc25hcCA9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zbmFwID0gdGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5zbmFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IDAsIGwsXG4gICAgICAgICAgICAgICAgbSA9IDAsIG4sXG4gICAgICAgICAgICAgICAgY3gsIGN5LFxuICAgICAgICAgICAgICAgIHggPSAwLCB5LFxuICAgICAgICAgICAgICAgIHN0ZXBYID0gdGhpcy5vcHRpb25zLnNuYXBTdGVwWCB8fCB0aGlzLndyYXBwZXJXaWR0aCxcbiAgICAgICAgICAgICAgICBzdGVwWSA9IHRoaXMub3B0aW9ucy5zbmFwU3RlcFkgfHwgdGhpcy53cmFwcGVySGVpZ2h0LFxuICAgICAgICAgICAgICAgIGVsO1xuXG4gICAgICAgICAgICB0aGlzLnBhZ2VzID0gW107XG5cbiAgICAgICAgICAgIGlmICggIXRoaXMud3JhcHBlcldpZHRoIHx8ICF0aGlzLndyYXBwZXJIZWlnaHQgfHwgIXRoaXMuc2Nyb2xsZXJXaWR0aCB8fCAhdGhpcy5zY3JvbGxlckhlaWdodCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLnNuYXAgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgY3ggPSBNYXRoLnJvdW5kKCBzdGVwWCAvIDIgKTtcbiAgICAgICAgICAgICAgICBjeSA9IE1hdGgucm91bmQoIHN0ZXBZIC8gMiApO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKCB4ID4gLXRoaXMuc2Nyb2xsZXJXaWR0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlc1tpXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCB5ID4gLXRoaXMuc2Nyb2xsZXJIZWlnaHQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzW2ldW2xdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IE1hdGgubWF4KHgsIHRoaXMubWF4U2Nyb2xsWCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5tYXgoeSwgdGhpcy5tYXhTY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc3RlcFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzdGVwWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeDogeCAtIGN4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5OiB5IC0gY3lcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHkgLT0gc3RlcFk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB4IC09IHN0ZXBYO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbCA9IHRoaXMub3B0aW9ucy5zbmFwO1xuICAgICAgICAgICAgICAgIGwgPSBlbC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbiA9IC0xO1xuXG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGkgPT09IDAgfHwgZWxbaV0ub2Zmc2V0TGVmdCA8PSBlbFtpLTFdLm9mZnNldExlZnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggIXRoaXMucGFnZXNbbV0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzW21dID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoLWVsW2ldLm9mZnNldExlZnQsIHRoaXMubWF4U2Nyb2xsWCk7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1heCgtZWxbaV0ub2Zmc2V0VG9wLCB0aGlzLm1heFNjcm9sbFkpO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IHggLSBNYXRoLnJvdW5kKGVsW2ldLm9mZnNldFdpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0geSAtIE1hdGgucm91bmQoZWxbaV0ub2Zmc2V0SGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlc1ttXVtuXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGVsW2ldLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlbFtpXS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjeDogY3gsXG4gICAgICAgICAgICAgICAgICAgICAgICBjeTogY3lcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHggPiB0aGlzLm1heFNjcm9sbFggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZS5wYWdlWCB8fCAwLCB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZIHx8IDAsIDApO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc25hcCB0aHJlc2hvbGQgaWYgbmVlZGVkXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkICUgMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYXBUaHJlc2hvbGRYID0gdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zbmFwVGhyZXNob2xkWSA9IHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYXBUaHJlc2hvbGRYID0gTWF0aC5yb3VuZCh0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UucGFnZVhdW3RoaXMuY3VycmVudFBhZ2UucGFnZVldLndpZHRoICogdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc25hcFRocmVzaG9sZFkgPSBNYXRoLnJvdW5kKHRoaXMucGFnZXNbdGhpcy5jdXJyZW50UGFnZS5wYWdlWF1bdGhpcy5jdXJyZW50UGFnZS5wYWdlWV0uaGVpZ2h0ICogdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdmbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLmFicyh0aGlzLnggLSB0aGlzLnN0YXJ0WCksIDEwMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oTWF0aC5hYnModGhpcy55IC0gdGhpcy5zdGFydFkpLCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICApLCAzMDApO1xuXG4gICAgICAgICAgICB0aGlzLmdvVG9QYWdlKFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UucGFnZVggKyB0aGlzLmRpcmVjdGlvblgsXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZS5wYWdlWSArIHRoaXMuZGlyZWN0aW9uWSxcbiAgICAgICAgICAgICAgICB0aW1lXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX25lYXJlc3RTbmFwOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoICF0aGlzLnBhZ2VzLmxlbmd0aCApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAsIHBhZ2VYOiAwLCBwYWdlWTogMCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbCA9IHRoaXMucGFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgbSA9IDA7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgZXhjZWVkZWQgdGhlIHNuYXAgdGhyZXNob2xkXG4gICAgICAgIGlmICggTWF0aC5hYnMoeCAtIHRoaXMuYWJzU3RhcnRYKSA8IHRoaXMuc25hcFRocmVzaG9sZFggJiZcbiAgICAgICAgICAgIE1hdGguYWJzKHkgLSB0aGlzLmFic1N0YXJ0WSkgPCB0aGlzLnNuYXBUaHJlc2hvbGRZICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHggPiAwICkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIHggPCB0aGlzLm1heFNjcm9sbFggKSB7XG4gICAgICAgICAgICB4ID0gdGhpcy5tYXhTY3JvbGxYO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB5ID4gMCApIHtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCB5IDwgdGhpcy5tYXhTY3JvbGxZICkge1xuICAgICAgICAgICAgeSA9IHRoaXMubWF4U2Nyb2xsWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIDsgaSA8IGw7IGkrKyApIHtcbiAgICAgICAgICAgIGlmICggeCA+PSB0aGlzLnBhZ2VzW2ldWzBdLmN4ICkge1xuICAgICAgICAgICAgICAgIHggPSB0aGlzLnBhZ2VzW2ldWzBdLng7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsID0gdGhpcy5wYWdlc1tpXS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICggOyBtIDwgbDsgbSsrICkge1xuICAgICAgICAgICAgaWYgKCB5ID49IHRoaXMucGFnZXNbMF1bbV0uY3kgKSB7XG4gICAgICAgICAgICAgICAgeSA9IHRoaXMucGFnZXNbMF1bbV0ueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggaSA9PSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYICkge1xuICAgICAgICAgICAgaSArPSB0aGlzLmRpcmVjdGlvblg7XG5cbiAgICAgICAgICAgIGlmICggaSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBpID49IHRoaXMucGFnZXMubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIGkgPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHggPSB0aGlzLnBhZ2VzW2ldWzBdLng7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG0gPT0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWSApIHtcbiAgICAgICAgICAgIG0gKz0gdGhpcy5kaXJlY3Rpb25ZO1xuXG4gICAgICAgICAgICBpZiAoIG0gPCAwICkge1xuICAgICAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggbSA+PSB0aGlzLnBhZ2VzWzBdLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBtID0gdGhpcy5wYWdlc1swXS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB5ID0gdGhpcy5wYWdlc1swXVttXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgcGFnZVg6IGksXG4gICAgICAgICAgICBwYWdlWTogbVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBnb1RvUGFnZTogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuICAgICAgICBlYXNpbmcgPSBlYXNpbmcgfHwgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZztcblxuICAgICAgICBpZiAoIHggPj0gdGhpcy5wYWdlcy5sZW5ndGggKSB7XG4gICAgICAgICAgICB4ID0gdGhpcy5wYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKCB4IDwgMCApIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB5ID49IHRoaXMucGFnZXNbeF0ubGVuZ3RoICkge1xuICAgICAgICAgICAgeSA9IHRoaXMucGFnZXNbeF0ubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmICggeSA8IDAgKSB7XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NYID0gdGhpcy5wYWdlc1t4XVt5XS54LFxuICAgICAgICAgICAgcG9zWSA9IHRoaXMucGFnZXNbeF1beV0ueTtcblxuICAgICAgICB0aW1lID0gdGltZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKHBvc1ggLSB0aGlzLngpLCAxMDAwKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLmFicyhwb3NZIC0gdGhpcy55KSwgMTAwMClcbiAgICAgICAgICAgICksIDMwMCkgOiB0aW1lO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB7XG4gICAgICAgICAgICB4OiBwb3NYLFxuICAgICAgICAgICAgeTogcG9zWSxcbiAgICAgICAgICAgIHBhZ2VYOiB4LFxuICAgICAgICAgICAgcGFnZVk6IHlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKHBvc1gsIHBvc1ksIHRpbWUsIGVhc2luZyk7XG4gICAgfSxcblxuICAgIG5leHQ6IGZ1bmN0aW9uICh0aW1lLCBlYXNpbmcpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYLFxuICAgICAgICAgICAgeSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cbiAgICAgICAgeCsrO1xuXG4gICAgICAgIGlmICggeCA+PSB0aGlzLnBhZ2VzLmxlbmd0aCAmJiB0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvVG9QYWdlKHgsIHksIHRpbWUsIGVhc2luZyk7XG4gICAgfSxcblxuICAgIHByZXY6IGZ1bmN0aW9uICh0aW1lLCBlYXNpbmcpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYLFxuICAgICAgICAgICAgeSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cbiAgICAgICAgeC0tO1xuXG4gICAgICAgIGlmICggeCA8IDAgJiYgdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgeS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nb1RvUGFnZSh4LCB5LCB0aW1lLCBlYXNpbmcpO1xuICAgIH0sXG5cbiAgICBfaW5pdEtleXM6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGJpbmRpbmdzXG4gICAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAgICAgcGFnZVVwOiAzMyxcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCxcbiAgICAgICAgICAgIGVuZDogMzUsXG4gICAgICAgICAgICBob21lOiAzNixcbiAgICAgICAgICAgIGxlZnQ6IDM3LFxuICAgICAgICAgICAgdXA6IDM4LFxuICAgICAgICAgICAgcmlnaHQ6IDM5LFxuICAgICAgICAgICAgZG93bjogNDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgLy8gaWYgeW91IGdpdmUgbWUgY2hhcmFjdGVycyBJIGdpdmUgeW91IGtleWNvZGVcbiAgICAgICAgaWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzID09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgZm9yICggaSBpbiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID09ICdzdHJpbmcnICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gPSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0udG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggaSBpbiBrZXlzICkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID0gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldIHx8IGtleXNbaV07XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hZGRFdmVudCh3aW5kb3csICdrZXlkb3duJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgJ2tleWRvd24nLCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9rZXk6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICggIXRoaXMuZW5hYmxlZCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzbmFwID0gdGhpcy5vcHRpb25zLnNuYXAsICAgLy8gd2UgYXJlIHVzaW5nIHRoaXMgYWxvdCwgYmV0dGVyIHRvIGNhY2hlIGl0XG4gICAgICAgICAgICBuZXdYID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVggOiB0aGlzLngsXG4gICAgICAgICAgICBuZXdZID0gc25hcCA/IHRoaXMuY3VycmVudFBhZ2UucGFnZVkgOiB0aGlzLnksXG4gICAgICAgICAgICBub3cgPSB1dGlscy5nZXRUaW1lKCksXG4gICAgICAgICAgICBwcmV2VGltZSA9IHRoaXMua2V5VGltZSB8fCAwLFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uID0gMC4yNTAsXG4gICAgICAgICAgICBwb3M7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aGlzLmlzSW5UcmFuc2l0aW9uICkge1xuICAgICAgICAgICAgcG9zID0gdGhpcy5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xuICAgICAgICAgICAgdGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5rZXlBY2NlbGVyYXRpb24gPSBub3cgLSBwcmV2VGltZSA8IDIwMCA/IE1hdGgubWluKHRoaXMua2V5QWNjZWxlcmF0aW9uICsgYWNjZWxlcmF0aW9uLCA1MCkgOiAwO1xuXG4gICAgICAgIHN3aXRjaCAoIGUua2V5Q29kZSApIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnBhZ2VVcDpcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiAhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3WCArPSBzbmFwID8gMSA6IHRoaXMud3JhcHBlcldpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1kgKz0gc25hcCA/IDEgOiB0aGlzLndyYXBwZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZURvd246XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgJiYgIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ggLT0gc25hcCA/IDEgOiB0aGlzLndyYXBwZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdZIC09IHNuYXAgPyAxIDogdGhpcy53cmFwcGVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmVuZDpcbiAgICAgICAgICAgICAgICBuZXdYID0gc25hcCA/IHRoaXMucGFnZXMubGVuZ3RoLTEgOiB0aGlzLm1heFNjcm9sbFg7XG4gICAgICAgICAgICAgICAgbmV3WSA9IHNuYXAgPyB0aGlzLnBhZ2VzWzBdLmxlbmd0aC0xIDogdGhpcy5tYXhTY3JvbGxZO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuaG9tZTpcbiAgICAgICAgICAgICAgICBuZXdYID0gMDtcbiAgICAgICAgICAgICAgICBuZXdZID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmxlZnQ6XG4gICAgICAgICAgICAgICAgbmV3WCArPSBzbmFwID8gLTEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy51cDpcbiAgICAgICAgICAgICAgICBuZXdZICs9IHNuYXAgPyAxIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucmlnaHQ6XG4gICAgICAgICAgICAgICAgbmV3WCAtPSBzbmFwID8gLTEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5kb3duOlxuICAgICAgICAgICAgICAgIG5ld1kgLT0gc25hcCA/IDEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc25hcCApIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UobmV3WCwgbmV3WSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIG5ld1ggPiAwICkge1xuICAgICAgICAgICAgbmV3WCA9IDA7XG4gICAgICAgICAgICB0aGlzLmtleUFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIG5ld1ggPCB0aGlzLm1heFNjcm9sbFggKSB7XG4gICAgICAgICAgICBuZXdYID0gdGhpcy5tYXhTY3JvbGxYO1xuICAgICAgICAgICAgdGhpcy5rZXlBY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBuZXdZID4gMCApIHtcbiAgICAgICAgICAgIG5ld1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5rZXlBY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuICAgICAgICAgICAgbmV3WSA9IHRoaXMubWF4U2Nyb2xsWTtcbiAgICAgICAgICAgIHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8obmV3WCwgbmV3WSwgMCk7XG5cbiAgICAgICAgdGhpcy5rZXlUaW1lID0gbm93O1xuICAgIH0sXG5cbiAgICBfYW5pbWF0ZTogZnVuY3Rpb24gKGRlc3RYLCBkZXN0WSwgZHVyYXRpb24sIGVhc2luZ0ZuKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXJ0WCA9IHRoaXMueCxcbiAgICAgICAgICAgIHN0YXJ0WSA9IHRoaXMueSxcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHV0aWxzLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGRlc3RUaW1lID0gc3RhcnRUaW1lICsgZHVyYXRpb247XG5cbiAgICAgICAgZnVuY3Rpb24gc3RlcCAoKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gdXRpbHMuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgIG5ld1gsIG5ld1ksXG4gICAgICAgICAgICAgICAgZWFzaW5nO1xuXG4gICAgICAgICAgICBpZiAoIG5vdyA+PSBkZXN0VGltZSApIHtcbiAgICAgICAgICAgICAgICB0aGF0LmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhhdC5fdHJhbnNsYXRlKGRlc3RYLCBkZXN0WSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoICF0aGF0LnJlc2V0UG9zaXRpb24odGhhdC5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm93ID0gKCBub3cgLSBzdGFydFRpbWUgKSAvIGR1cmF0aW9uO1xuICAgICAgICAgICAgZWFzaW5nID0gZWFzaW5nRm4obm93KTtcbiAgICAgICAgICAgIG5ld1ggPSAoIGRlc3RYIC0gc3RhcnRYICkgKiBlYXNpbmcgKyBzdGFydFg7XG4gICAgICAgICAgICBuZXdZID0gKCBkZXN0WSAtIHN0YXJ0WSApICogZWFzaW5nICsgc3RhcnRZO1xuICAgICAgICAgICAgdGhhdC5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG4gICAgICAgICAgICBpZiAoIHRoYXQuaXNBbmltYXRpbmcgKSB7XG4gICAgICAgICAgICAgICAgckFGKHN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIHN0ZXAoKTtcbiAgICB9LFxuICAgIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzd2l0Y2ggKCBlLnR5cGUgKSB7XG4gICAgICAgICAgICBjYXNlICd0b3VjaHN0YXJ0JzpcbiAgICAgICAgICAgIGNhc2UgJ3BvaW50ZXJkb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ01TUG9pbnRlckRvd24nOlxuICAgICAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydChlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgICAgICBjYXNlICdwb2ludGVybW92ZSc6XG4gICAgICAgICAgICBjYXNlICdNU1BvaW50ZXJNb3ZlJzpcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNoZW5kJzpcbiAgICAgICAgICAgIGNhc2UgJ3BvaW50ZXJ1cCc6XG4gICAgICAgICAgICBjYXNlICdNU1BvaW50ZXJVcCc6XG4gICAgICAgICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNoY2FuY2VsJzpcbiAgICAgICAgICAgIGNhc2UgJ3BvaW50ZXJjYW5jZWwnOlxuICAgICAgICAgICAgY2FzZSAnTVNQb2ludGVyQ2FuY2VsJzpcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlY2FuY2VsJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmQoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvcmllbnRhdGlvbmNoYW5nZSc6XG4gICAgICAgICAgICBjYXNlICdyZXNpemUnOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndHJhbnNpdGlvbmVuZCc6XG4gICAgICAgICAgICBjYXNlICd3ZWJraXRUcmFuc2l0aW9uRW5kJzpcbiAgICAgICAgICAgIGNhc2UgJ29UcmFuc2l0aW9uRW5kJzpcbiAgICAgICAgICAgIGNhc2UgJ01TVHJhbnNpdGlvbkVuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkVuZChlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3doZWVsJzpcbiAgICAgICAgICAgIGNhc2UgJ0RPTU1vdXNlU2Nyb2xsJzpcbiAgICAgICAgICAgIGNhc2UgJ21vdXNld2hlZWwnOlxuICAgICAgICAgICAgICAgIHRoaXMuX3doZWVsKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAna2V5ZG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5KGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5lbmFibGVkICYmICFlLl9jb25zdHJ1Y3RlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyIChkaXJlY3Rpb24sIGludGVyYWN0aXZlLCB0eXBlKSB7XG4gICAgdmFyIHNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmICggdHlwZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgc2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5JztcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLmNzc1RleHQgPSAnLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpO2JvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO2JvcmRlci1yYWRpdXM6M3B4JztcbiAgICB9XG5cbiAgICBpbmRpY2F0b3IuY2xhc3NOYW1lID0gJ2lTY3JvbGxJbmRpY2F0b3InO1xuXG4gICAgaWYgKCBkaXJlY3Rpb24gPT0gJ2gnICkge1xuICAgICAgICBpZiAoIHR5cGUgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBzY3JvbGxiYXIuc3R5bGUuY3NzVGV4dCArPSAnO2hlaWdodDo3cHg7bGVmdDoycHg7cmlnaHQ6MnB4O2JvdHRvbTowJztcbiAgICAgICAgICAgIGluZGljYXRvci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdpU2Nyb2xsSG9yaXpvbnRhbFNjcm9sbGJhcic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCB0eXBlID09PSB0cnVlICkge1xuICAgICAgICAgICAgc2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJzt3aWR0aDo3cHg7Ym90dG9tOjJweDt0b3A6MnB4O3JpZ2h0OjFweCc7XG4gICAgICAgICAgICBpbmRpY2F0b3Iuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdpU2Nyb2xsVmVydGljYWxTY3JvbGxiYXInO1xuICAgIH1cblxuICAgIHNjcm9sbGJhci5zdHlsZS5jc3NUZXh0ICs9ICc7b3ZlcmZsb3c6aGlkZGVuJztcblxuICAgIGlmICggIWludGVyYWN0aXZlICkge1xuICAgICAgICBzY3JvbGxiYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICB9XG5cbiAgICBzY3JvbGxiYXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcblxuICAgIHJldHVybiBzY3JvbGxiYXI7XG59XG5cbmZ1bmN0aW9uIEluZGljYXRvciAoc2Nyb2xsZXIsIG9wdGlvbnMpIHtcbiAgICB0aGlzLndyYXBwZXIgPSB0eXBlb2Ygb3B0aW9ucy5lbCA9PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5lbCkgOiBvcHRpb25zLmVsO1xuICAgIHRoaXMud3JhcHBlclN0eWxlID0gdGhpcy53cmFwcGVyLnN0eWxlO1xuICAgIHRoaXMuaW5kaWNhdG9yID0gdGhpcy53cmFwcGVyLmNoaWxkcmVuWzBdO1xuICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUgPSB0aGlzLmluZGljYXRvci5zdHlsZTtcbiAgICB0aGlzLnNjcm9sbGVyID0gc2Nyb2xsZXI7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgIGxpc3Rlblg6IHRydWUsXG4gICAgICAgIGxpc3Rlblk6IHRydWUsXG4gICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgcmVzaXplOiB0cnVlLFxuICAgICAgICBkZWZhdWx0U2Nyb2xsYmFyczogZmFsc2UsXG4gICAgICAgIHNocmluazogZmFsc2UsXG4gICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICBzcGVlZFJhdGlvWDogMCxcbiAgICAgICAgc3BlZWRSYXRpb1k6IDBcbiAgICB9O1xuXG4gICAgZm9yICggdmFyIGkgaW4gb3B0aW9ucyApIHtcbiAgICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICB9XG5cbiAgICB0aGlzLnNpemVSYXRpb1ggPSAxO1xuICAgIHRoaXMuc2l6ZVJhdGlvWSA9IDE7XG4gICAgdGhpcy5tYXhQb3NYID0gMDtcbiAgICB0aGlzLm1heFBvc1kgPSAwO1xuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgKSB7XG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2ggKSB7XG4gICAgICAgICAgICB1dGlscy5hZGRFdmVudCh0aGlzLmluZGljYXRvciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ3RvdWNoZW5kJywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuICAgICAgICAgICAgdXRpbHMuYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcmRvd24nKSwgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5hZGRFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcnVwJyksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG4gICAgICAgICAgICB1dGlscy5hZGRFdmVudCh0aGlzLmluZGljYXRvciwgJ21vdXNlZG93bicsIHRoaXMpO1xuICAgICAgICAgICAgdXRpbHMuYWRkRXZlbnQod2luZG93LCAnbW91c2V1cCcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgdGhpcy53cmFwcGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9IHRoaXMuc2Nyb2xsZXIudHJhbnNsYXRlWjtcbiAgICAgICAgdmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgaWYoIWR1cmF0aW9uUHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JhcHBlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB1dGlscy5pc0JhZEFuZHJvaWQgPyAnMC4wMDAxbXMnIDogJzBtcyc7XG4gICAgICAgIC8vIHJlbW92ZSAwLjAwMDFtc1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmKHV0aWxzLmlzQmFkQW5kcm9pZCkge1xuICAgICAgICAgICAgckFGKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKHNlbGYud3JhcHBlclN0eWxlW2R1cmF0aW9uUHJvcF0gPT09ICcwLjAwMDFtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9ICcwcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9XG59XG5cbkluZGljYXRvci5wcm90b3R5cGUgPSB7XG4gICAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN3aXRjaCAoIGUudHlwZSApIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcmRvd24nOlxuICAgICAgICAgICAgY2FzZSAnTVNQb2ludGVyRG93bic6XG4gICAgICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgICAgIGNhc2UgJ3BvaW50ZXJtb3ZlJzpcbiAgICAgICAgICAgIGNhc2UgJ01TUG9pbnRlck1vdmUnOlxuICAgICAgICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG91Y2hlbmQnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcnVwJzpcbiAgICAgICAgICAgIGNhc2UgJ01TUG9pbnRlclVwJzpcbiAgICAgICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgICAgY2FzZSAndG91Y2hjYW5jZWwnOlxuICAgICAgICAgICAgY2FzZSAncG9pbnRlcmNhbmNlbCc6XG4gICAgICAgICAgICBjYXNlICdNU1BvaW50ZXJDYW5jZWwnOlxuICAgICAgICAgICAgY2FzZSAnbW91c2VjYW5jZWwnOlxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZChlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzICkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmFkZVRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5mYWRlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgKSB7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsICdtb3VzZWRvd24nLCB0aGlzKTtcblxuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblxuICAgICAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAndG91Y2hlbmQnLCB0aGlzKTtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVydXAnKSwgdGhpcyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZXVwJywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyApIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvaW50WCA9IHBvaW50LnBhZ2VYO1xuICAgICAgICB0aGlzLmxhc3RQb2ludFkgPSBwb2ludC5wYWdlWTtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZSAgPSB1dGlscy5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcbiAgICAgICAgICAgIHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcbiAgICAgICAgICAgIHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVybW92ZScpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuICAgICAgICAgICAgdXRpbHMuYWRkRXZlbnQod2luZG93LCAnbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbGVyLl9leGVjRXZlbnQoJ2JlZm9yZVNjcm9sbFN0YXJ0Jyk7XG4gICAgfSxcblxuICAgIF9tb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuICAgICAgICAgICAgZGVsdGFYLCBkZWx0YVksXG4gICAgICAgICAgICBuZXdYLCBuZXdZLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gdXRpbHMuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmICggIXRoaXMubW92ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLl9leGVjRXZlbnQoJ3Njcm9sbFN0YXJ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcblxuICAgICAgICBkZWx0YVggPSBwb2ludC5wYWdlWCAtIHRoaXMubGFzdFBvaW50WDtcbiAgICAgICAgdGhpcy5sYXN0UG9pbnRYID0gcG9pbnQucGFnZVg7XG5cbiAgICAgICAgZGVsdGFZID0gcG9pbnQucGFnZVkgLSB0aGlzLmxhc3RQb2ludFk7XG4gICAgICAgIHRoaXMubGFzdFBvaW50WSA9IHBvaW50LnBhZ2VZO1xuXG4gICAgICAgIG5ld1ggPSB0aGlzLnggKyBkZWx0YVg7XG4gICAgICAgIG5ld1kgPSB0aGlzLnkgKyBkZWx0YVk7XG5cbiAgICAgICAgdGhpcy5fcG9zKG5ld1gsIG5ld1kpO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IGluZGljYXRvci5fbW92ZVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuXG4gICAgX2VuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCAhdGhpcy5pbml0aWF0ZWQgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRpYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICAgICAgdXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJtb3ZlJyksIHRoaXMpO1xuICAgICAgICB1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblxuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsZXIub3B0aW9ucy5zbmFwICkge1xuICAgICAgICAgICAgdmFyIHNuYXAgPSB0aGlzLnNjcm9sbGVyLl9uZWFyZXN0U25hcCh0aGlzLnNjcm9sbGVyLngsIHRoaXMuc2Nyb2xsZXIueSk7XG5cbiAgICAgICAgICAgIHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLmFicyh0aGlzLnNjcm9sbGVyLnggLSBzbmFwLngpLCAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGguYWJzKHRoaXMuc2Nyb2xsZXIueSAtIHNuYXAueSksIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICksIDMwMCk7XG5cbiAgICAgICAgICAgIGlmICggdGhpcy5zY3JvbGxlci54ICE9IHNuYXAueCB8fCB0aGlzLnNjcm9sbGVyLnkgIT0gc25hcC55ICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuZGlyZWN0aW9uWCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxlci5kaXJlY3Rpb25ZID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyLmN1cnJlbnRQYWdlID0gc25hcDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKHNuYXAueCwgc25hcC55LCB0aW1lLCB0aGlzLnNjcm9sbGVyLm9wdGlvbnMuYm91bmNlRWFzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdGhpcy5tb3ZlZCApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG4gICAgICAgIHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgIGlmKCFkdXJhdGlvblByb3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9IHRpbWUgKyAnbXMnO1xuXG4gICAgICAgIGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZVtkdXJhdGlvblByb3BdID0gJzAuMDAwMW1zJztcbiAgICAgICAgICAgIC8vIHJlbW92ZSAwLjAwMDFtc1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgckFGKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKHNlbGYuaW5kaWNhdG9yU3R5bGVbZHVyYXRpb25Qcm9wXSA9PT0gJzAuMDAwMW1zJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZnVuY3Rpb24gKGVhc2luZykge1xuICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG4gICAgfSxcblxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZSgpO1xuXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggJiYgIXRoaXMub3B0aW9ucy5saXN0ZW5ZICkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxpc3RlblkgJiYgIXRoaXMub3B0aW9ucy5saXN0ZW5YICkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNWZXJ0aWNhbFNjcm9sbCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXkgPSB0aGlzLnNjcm9sbGVyLmhhc0hvcml6b250YWxTY3JvbGwgfHwgdGhpcy5zY3JvbGxlci5oYXNWZXJ0aWNhbFNjcm9sbCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuICAgICAgICAgICAgdXRpbHMuYWRkQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbEJvdGhTY3JvbGxiYXJzJyk7XG4gICAgICAgICAgICB1dGlscy5yZW1vdmVDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsTG9uZVNjcm9sbGJhcicpO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzhweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICc4cHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHV0aWxzLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlciwgJ2lTY3JvbGxCb3RoU2Nyb2xsYmFycycpO1xuICAgICAgICAgICAgdXRpbHMuYWRkQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbExvbmVTY3JvbGxiYXInKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZGVmYXVsdFNjcm9sbGJhcnMgJiYgdGhpcy5vcHRpb25zLmN1c3RvbVN0eWxlICkge1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5yaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5ib3R0b20gPSAnMnB4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgciA9IHRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQ7ICAvLyBmb3JjZSByZWZyZXNoXG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuWCApIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlcldpZHRoID0gdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMucmVzaXplICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yV2lkdGggPSBNYXRoLm1heChNYXRoLnJvdW5kKHRoaXMud3JhcHBlcldpZHRoICogdGhpcy53cmFwcGVyV2lkdGggLyAodGhpcy5zY3JvbGxlci5zY3JvbGxlcldpZHRoIHx8IHRoaXMud3JhcHBlcldpZHRoIHx8IDEpKSwgOCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aCA9IHRoaXMuaW5kaWNhdG9yV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvcldpZHRoID0gdGhpcy5pbmRpY2F0b3IuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF4UG9zWCA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5pbmRpY2F0b3JXaWR0aDtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdjbGlwJyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbkJvdW5kYXJ5WCA9IC10aGlzLmluZGljYXRvcldpZHRoICsgODtcbiAgICAgICAgICAgICAgICB0aGlzLm1heEJvdW5kYXJ5WCA9IHRoaXMud3JhcHBlcldpZHRoIC0gODtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5Cb3VuZGFyeVggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4Qm91bmRhcnlYID0gdGhpcy5tYXhQb3NYO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNpemVSYXRpb1ggPSB0aGlzLm9wdGlvbnMuc3BlZWRSYXRpb1ggfHwgKHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWCAmJiAodGhpcy5tYXhQb3NYIC8gdGhpcy5zY3JvbGxlci5tYXhTY3JvbGxYKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5ZICkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLnJlc2l6ZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvckhlaWdodCA9IE1hdGgubWF4KE1hdGgucm91bmQodGhpcy53cmFwcGVySGVpZ2h0ICogdGhpcy53cmFwcGVySGVpZ2h0IC8gKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJIZWlnaHQgfHwgdGhpcy53cmFwcGVySGVpZ2h0IHx8IDEpKSwgOCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmluZGljYXRvckhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9ySGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1heFBvc1kgPSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLmluZGljYXRvckhlaWdodDtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdjbGlwJyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbkJvdW5kYXJ5WSA9IC10aGlzLmluZGljYXRvckhlaWdodCArIDg7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhCb3VuZGFyeVkgPSB0aGlzLndyYXBwZXJIZWlnaHQgLSA4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pbkJvdW5kYXJ5WSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhCb3VuZGFyeVkgPSB0aGlzLm1heFBvc1k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF4UG9zWSA9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zaXplUmF0aW9ZID0gdGhpcy5vcHRpb25zLnNwZWVkUmF0aW9ZIHx8ICh0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkgJiYgKHRoaXMubWF4UG9zWSAvIHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IHRoaXMub3B0aW9ucy5saXN0ZW5YICYmIE1hdGgucm91bmQodGhpcy5zaXplUmF0aW9YICogdGhpcy5zY3JvbGxlci54KSB8fCAwLFxuICAgICAgICAgICAgeSA9IHRoaXMub3B0aW9ucy5saXN0ZW5ZICYmIE1hdGgucm91bmQodGhpcy5zaXplUmF0aW9ZICogdGhpcy5zY3JvbGxlci55KSB8fCAwO1xuXG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5pZ25vcmVCb3VuZGFyaWVzICkge1xuICAgICAgICAgICAgaWYgKCB4IDwgdGhpcy5taW5Cb3VuZGFyeVggKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLmluZGljYXRvcldpZHRoICsgeCwgOCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCA9IHRoaXMubWluQm91bmRhcnlYO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggeCA+IHRoaXMubWF4Qm91bmRhcnlYICkge1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JXaWR0aCAtICh4IC0gdGhpcy5tYXhQb3NYKSwgOCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMubWF4UG9zWCArIHRoaXMuaW5kaWNhdG9yV2lkdGggLSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSB0aGlzLm1heEJvdW5kYXJ5WDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgJiYgdGhpcy53aWR0aCAhPSB0aGlzLmluZGljYXRvcldpZHRoICkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmluZGljYXRvcldpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB5IDwgdGhpcy5taW5Cb3VuZGFyeVkgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQgKyB5ICogMywgOCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5taW5Cb3VuZGFyeVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB5ID4gdGhpcy5tYXhCb3VuZGFyeVkgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQgLSAoeSAtIHRoaXMubWF4UG9zWSkgKiAzLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLm1heFBvc1kgKyB0aGlzLmluZGljYXRvckhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLm1heEJvdW5kYXJ5WTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgJiYgdGhpcy5oZWlnaHQgIT0gdGhpcy5pbmRpY2F0b3JIZWlnaHQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmluZGljYXRvckhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG5cbiAgICAgICAgaWYgKCB0aGlzLnNjcm9sbGVyLm9wdGlvbnMudXNlVHJhbnNmb3JtICkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZVt1dGlscy5zdHlsZS50cmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZSgnICsgeCArICdweCwnICsgeSArICdweCknICsgdGhpcy5zY3JvbGxlci50cmFuc2xhdGVaO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JTdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9wb3M6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICggeCA8IDAgKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICggeCA+IHRoaXMubWF4UG9zWCApIHtcbiAgICAgICAgICAgIHggPSB0aGlzLm1heFBvc1g7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHkgPCAwICkge1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIHkgPiB0aGlzLm1heFBvc1kgKSB7XG4gICAgICAgICAgICB5ID0gdGhpcy5tYXhQb3NZO1xuICAgICAgICB9XG5cbiAgICAgICAgeCA9IHRoaXMub3B0aW9ucy5saXN0ZW5YID8gTWF0aC5yb3VuZCh4IC8gdGhpcy5zaXplUmF0aW9YKSA6IHRoaXMuc2Nyb2xsZXIueDtcbiAgICAgICAgeSA9IHRoaXMub3B0aW9ucy5saXN0ZW5ZID8gTWF0aC5yb3VuZCh5IC8gdGhpcy5zaXplUmF0aW9ZKSA6IHRoaXMuc2Nyb2xsZXIueTtcblxuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKHgsIHkpO1xuICAgIH0sXG5cbiAgICBmYWRlOiBmdW5jdGlvbiAodmFsLCBob2xkKSB7XG4gICAgICAgIGlmICggaG9sZCAmJiAhdGhpcy52aXNpYmxlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmFkZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLmZhZGVUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICB2YXIgdGltZSA9IHZhbCA/IDI1MCA6IDUwMCxcbiAgICAgICAgICAgIGRlbGF5ID0gdmFsID8gMCA6IDMwMDtcblxuICAgICAgICB2YWwgPSB2YWwgPyAnMScgOiAnMCc7XG5cbiAgICAgICAgdGhpcy53cmFwcGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXSA9IHRpbWUgKyAnbXMnO1xuXG4gICAgICAgIHRoaXMuZmFkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXJTdHlsZS5vcGFjaXR5ID0gdmFsO1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gK3ZhbDtcbiAgICAgICAgfSkuYmluZCh0aGlzLCB2YWwpLCBkZWxheSk7XG4gICAgfVxufTtcblxuSVNjcm9sbC51dGlscyA9IHV0aWxzO1xuXG5pZiAoIHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBJU2Nyb2xsO1xufSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgICAgIGRlZmluZSggZnVuY3Rpb24gKCkgeyByZXR1cm4gSVNjcm9sbDsgfSApO1xufSBlbHNlIHtcbiAgICB3aW5kb3cuSVNjcm9sbCA9IElTY3JvbGw7XG59XG5cbn0pKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiBjb25zb2xlLmxvZygnY29ubmVjdCBzbGlkZSBibG9nMnBhZ2UnKTtcclxuICAgIHZhciBhcnJvd1JpZ2h0PSQoJy5ibG9nUGFnZTJfYXJyb3ctcmlnaHQnKSwvL9GB0YLRgNC10LvQvtGH0LrQsCDQstC/0YDQsNCy0L5cclxuICAgICAgICBhcnJvd0xlZnQ9JCgnLmJsb2dQYWdlMl9hcnJvdy1sZWZ0JyksLy/RgdGC0YDQtdC70L7Rh9C60LAg0LLQu9C10LLQvlxyXG5cclxuICAgICAgICBhbGxDbG91ZD0kKCcuYmxvZzJwYWdlX2NvbnRlbnRfYWJzb2x1dGVCbG9jaycpLC8v0LLRgdC1INC+0LHQu9Cw0LrQsFxyXG4gICAgICAgIGNvbnQ9MTsvL9C/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YBcclxuXHJcbiAgICBhcnJvd1JpZ2h0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2VudGVyID0gY29udCAtIDEsXHJcbiAgICAgICAgICAgIGxlZnQgPSBjb250IC0gMixcclxuICAgICAgICAgICAgbGVmdE91dCA9IGNvbnQgLSAzLFxyXG4gICAgICAgICAgICBSaWdodE91dCA9IGNvbnQgKyAxO1xyXG5cclxuICAgICAgICBpZiAoY29udCA8IDApIHtcclxuICAgICAgICAgICAgY29udCA9IGFsbENsb3VkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfS8v0L7QsdC90YPQu9GP0LXQvCDQutC+0LXRhNC40YbQuNC10L3RgiB0INC60L7Qs9C00LAg0LLRi9GI0LUg0LrQvtC7LdCy0LAg0L7QsdC70LDQutC+0LJcclxuXHJcbiAgICAgICAgaWYgKGNlbnRlciA9PSAtMSkge1xyXG4gICAgICAgICAgICBjZW50ZXIgPSBhbGxDbG91ZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnQgPT0gLTEpIHtcclxuICAgICAgICAgICAgbGVmdCA9IGFsbENsb3VkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfS8v0YDQtdC00LDQutGC0LjRgNGD0LXQvCDQutC+0LXRhNC40YbQuNC10L3RgiDRh9GC0L7QsSDQvdC1INCx0YvQuyDQstGL0YjQtSDRh9C10Lwg0LrQvtC70YLRh9C10YHRgtCy0L4g0L7QsdC70LDRh9C60L7QslxyXG4gICAgICAgIGlmIChsZWZ0ID09IC0yKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBhbGxDbG91ZC5sZW5ndGggLSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRPdXQgPT0gLTEpIHtcclxuICAgICAgICAgICAgbGVmdE91dCA9IGFsbENsb3VkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZWZ0T3V0ID09IC0yKSB7XHJcbiAgICAgICAgICAgIGxlZnRPdXQgPSBhbGxDbG91ZC5sZW5ndGggLSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVmdE91dCA9PSAtMykge1xyXG4gICAgICAgICAgICBsZWZ0T3V0ID0gYWxsQ2xvdWQubGVuZ3RoIC0gMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChSaWdodE91dCA9PSBhbGxDbG91ZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgUmlnaHRPdXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUmlnaHRPdXQgPT0gYWxsQ2xvdWQubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICBSaWdodE91dCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgNCw0LfRgNC10YjQtdC90LjQtSDQsdC+0LvRjNGI0LUgNzY4Jyk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNvbnQpLmNzcyh7J2xlZnQnOiAnNzUlJywgJ29wYWNpdHknOiAxfSk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKFJpZ2h0T3V0KS5jc3MoeydsZWZ0JzogJzIwMCUnLCAnb3BhY2l0eSc6IDB9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoY2VudGVyKS5jc3MoeydsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0KS5jc3MoeydsZWZ0JzogJzI1JScsICdvcGFjaXR5JzogMX0pO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0T3V0KS5jc3MoeydsZWZ0JzogJy0xMDAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9GA0LDQt9GA0LXRiNC10L3QuNC1INC80LXQvdGM0YjQtSA3NjgnKTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoY29udCkuY3NzKHsndG9wJzogJzEwMCUnLCAnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDF9KTsvL9C00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBINC60L7RgtC+0YDRi9C5INC/0LXRgNC10LzQtdGB0YLQuNGCINC+0LHQu9Cw0LrQviDQsiDQvdGD0LbQvdC+0LUg0L3QvtCy0L7QtSDQv9C+0LvQvtC20LXQvdC40LVcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEoUmlnaHRPdXQpLmNzcyh7J3RvcCc6ICcyMDAlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcikuY3NzKHsndG9wJzogJzUwJScsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0KS5jc3Moeyd0b3AnOiAnMCcsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0T3V0KS5jc3Moeyd0b3AnOiAnLTEwMCUnLCAnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQtNCy0LjQttC10L3QuNC1INCy0L/RgNCw0LLQviBsZWZ0T3V0OiAnICsgbGVmdE91dCArICcgbGVmdDogJyArIGxlZnQgKyAnIGNlbnRlcjogJyArIGNlbnRlciArICcgY29udDogJyArIGNvbnQgKyAnIFJpZ2h0T3V0OiAnICsgUmlnaHRPdXQpO1xyXG5cclxuICAgICAgICBjb250LS07XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcnJvd0xlZnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChjb250ID09IGFsbENsb3VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb250ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJpZ2h0T3V0MSA9IGNvbnQgKyAzLFxyXG4gICAgICAgICAgICByaWdodDEgPSBjb250ICsgMixcclxuICAgICAgICAgICAgY2VudGVyMSA9IGNvbnQgKyAxLFxyXG4gICAgICAgICAgICBsZWZ0MSA9IGNvbnQgLSAxLFxyXG4gICAgICAgICAgICBsZWZ0T3V0MSA9IGNvbnQgLSAyO1xyXG5cclxuICAgICAgICBpZiAobGVmdDEgPT0gLTEpIHtcclxuICAgICAgICAgICAgbGVmdDEgPSBhbGxDbG91ZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRPdXQxID09IC0xKSB7XHJcbiAgICAgICAgICAgIGxlZnRPdXQxID0gYWxsQ2xvdWQubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlZnRPdXQxID09IC0yKSB7XHJcbiAgICAgICAgICAgIGxlZnRPdXQxID0gYWxsQ2xvdWQubGVuZ3RoIC0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjZW50ZXIxID09IGFsbENsb3VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjZW50ZXIxID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyaWdodDEgPT0gYWxsQ2xvdWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0MSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodDEgPT0gYWxsQ2xvdWQubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICByaWdodDEgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHQxID09IGFsbENsb3VkLmxlbmd0aCArIDIpIHtcclxuICAgICAgICAgICAgcmlnaHQxID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyaWdodE91dDEgPT0gYWxsQ2xvdWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0T3V0MSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodE91dDEgPT0gYWxsQ2xvdWQubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICByaWdodE91dDEgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHRPdXQxID09IGFsbENsb3VkLmxlbmd0aCArIDIpIHtcclxuICAgICAgICAgICAgcmlnaHRPdXQxID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJpZ2h0T3V0MSA9PSBhbGxDbG91ZC5sZW5ndGggKyAzKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0T3V0MSA9IDM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRgNCw0LfRgNC10YjQtdC90LjQtSDQvNC10L3RjNGI0LUgNzY4Jyk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNvbnQpLmNzcyh7J2xlZnQnOiAnMjUlJywgJ29wYWNpdHknOiAxfSk7Ly/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQutC+0YLQvtGA0YvQuSDQv9C10YDQtdC80LXRgdGC0LjRgiDQvtCx0LvQsNC60L4g0LIg0L3Rg9C20L3QvtC1INC90L7QstC+0LUg0L/QvtC70L7QttC10L3QuNC1XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGxlZnQxKS5jc3MoeydsZWZ0JzogJy0xMDAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcjEpLmNzcyh7J2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAxfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKHJpZ2h0MSkuY3NzKHsnbGVmdCc6ICc3NSUnLCAnb3BhY2l0eSc6IDF9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHRPdXQxKS5jc3MoeydsZWZ0JzogJzEwMCUnLCAnb3BhY2l0eSc6IDB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YDQsNC30YDQtdGI0LXQvdC40LUg0LzQtdC90YzRiNC1IDc2OCcpO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShjb250KS5jc3Moeyd0b3AnOiAnMCcsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pOy8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvNC10YHRgtC40YIg0L7QsdC70LDQutC+INCyINC90YPQttC90L7QtSDQvdC+0LLQvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShsZWZ0MSkuY3NzKHsndG9wJzogJy0xMDAlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgICAgIGFsbENsb3VkLmVxKGNlbnRlcjEpLmNzcyh7J3RvcCc6ICc1MCUnLCAnbGVmdCc6ICc1MCUnLCAnb3BhY2l0eSc6IDF9KTtcclxuICAgICAgICAgICAgYWxsQ2xvdWQuZXEocmlnaHQxKS5jc3Moeyd0b3AnOiAnMTAwJScsICdsZWZ0JzogJzUwJScsICdvcGFjaXR5JzogMX0pO1xyXG4gICAgICAgICAgICBhbGxDbG91ZC5lcShyaWdodE91dDEpLmNzcyh7J3RvcCc6ICcxMDAlJywgJ2xlZnQnOiAnNTAlJywgJ29wYWNpdHknOiAwfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygn0LTQstC40LbQtdC90LjQtSDQstC70LXQstC+IGxlZnRPdXQxOiAnICsgbGVmdE91dDEgKyAnIGxlZnQxOiAnICsgbGVmdDEgKyAnIHQ6ICcgKyBjb250ICsgJyBjZW50ZXIxOiAnICsgY2VudGVyMSArICcgcmlnaHQxOiAnICsgcmlnaHQxICsgJyByaWdodE91dDE6ICcgKyByaWdodE91dDEpO1xyXG5cclxuICAgICAgICBjb250Kys7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW5wdXRFbWFpbD0kKCcuanNfaW5wdXRFbWFpbCcpLFxyXG4gICAgICAgIHZhbGlkSWNvbj0kKCcudmFsaWRhdGVJY29uJyk7XHJcblxyXG4gICAgaW5wdXRFbWFpbC5rZXl1cChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgZW1haWwgPSBpbnB1dEVtYWlsLnZhbCgpO1xyXG5cclxuICAgICAgICBpZihlbWFpbCAhPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXNWYWxpZEVtYWlsQWRkcmVzcyhlbWFpbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkSWNvbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybCgnLi4vaW1hZ2UvdmFsaWRZZXMucG5nJylcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8nKTtcclxuICAgICAgICAgICAgICAgIHZhbGlkSWNvbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybCgnLi4vaW1hZ2UvdmFsaWROby5wbmcnKVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub25lJyk7XHJcbiAgICAgICAgICAgIHZhbGlkSWNvbi5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsQWRkcmVzcyhlbWFpbEFkZHJlc3MpIHtcclxuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXigoXCJbXFx3LVxcc10rXCIpfChbXFx3LV0rKD86XFwuW1xcdy1dKykqKXwoXCJbXFx3LVxcc10rXCIpKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopKShAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJCl8KEBcXFs/KCgyNVswLTVdXFwufDJbMC00XVswLTldXFwufDFbMC05XXsyfVxcLnxbMC05XXsxLDJ9XFwuKSkoKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFwuKXsyfSgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcXT8kKS9pKTtcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWxBZGRyZXNzKTtcclxufVxyXG4iLCIvKlxyXG4galF1ZXJ5IE1hc2tlZCBJbnB1dCBQbHVnaW5cclxuIENvcHlyaWdodCAoYykgMjAwNyAtIDIwMTUgSm9zaCBCdXNoIChkaWdpdGFsYnVzaC5jb20pXHJcbiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly9kaWdpdGFsYnVzaC5jb20vcHJvamVjdHMvbWFza2VkLWlucHV0LXBsdWdpbi8jbGljZW5zZSlcclxuIFZlcnNpb246IDEuNC4xXHJcbiAqL1xyXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwianF1ZXJ5XCIgXSwgZmFjdG9yeSkgOiBmYWN0b3J5KFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyByZXF1aXJlKFwianF1ZXJ5XCIpIDogalF1ZXJ5KTtcclxufShmdW5jdGlvbigkKSB7XHJcbiAgICB2YXIgY2FyZXRUaW1lb3V0SWQsIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgaVBob25lID0gL2lwaG9uZS9pLnRlc3QodWEpLCBjaHJvbWUgPSAvY2hyb21lL2kudGVzdCh1YSksIGFuZHJvaWQgPSAvYW5kcm9pZC9pLnRlc3QodWEpO1xyXG4gICAgJC5tYXNrID0ge1xyXG4gICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgIFwiOVwiOiBcIlswLTldXCIsXHJcbiAgICAgICAgICAgIGE6IFwiW0EtWmEtel1cIixcclxuICAgICAgICAgICAgXCIqXCI6IFwiW0EtWmEtejAtOV1cIiBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dG9jbGVhcjogITAsXHJcbiAgICAgICAgZGF0YU5hbWU6IFwicmF3TWFza0ZuXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiX1wiXHJcbiAgICB9LCAkLmZuLmV4dGVuZCh7XHJcbiAgICAgICAgY2FyZXQ6IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlO1xyXG4gICAgICAgICAgICBpZiAoMCAhPT0gdGhpcy5sZW5ndGggJiYgIXRoaXMuaXMoXCI6aGlkZGVuXCIpKSByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgYmVnaW4gPyAoZW5kID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgZW5kID8gZW5kIDogYmVnaW4sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSA/IHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoYmVnaW4sIGVuZCkgOiB0aGlzLmNyZWF0ZVRleHRSYW5nZSAmJiAocmFuZ2UgPSB0aGlzLmNyZWF0ZVRleHRSYW5nZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSghMCksIHJhbmdlLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgZW5kKSwgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIGJlZ2luKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgfSkpIDogKHRoaXNbMF0uc2V0U2VsZWN0aW9uUmFuZ2UgPyAoYmVnaW4gPSB0aGlzWzBdLnNlbGVjdGlvblN0YXJ0LCBlbmQgPSB0aGlzWzBdLnNlbGVjdGlvbkVuZCkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChyYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgICAgICAgICAgYmVnaW4gPSAwIC0gcmFuZ2UuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC0xZTUpLCBlbmQgPSBiZWdpbiArIHJhbmdlLnRleHQubGVuZ3RoKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmVnaW46IGJlZ2luLFxyXG4gICAgICAgICAgICAgICAgZW5kOiBlbmRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bm1hc2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKFwidW5tYXNrXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFzazogZnVuY3Rpb24obWFzaywgc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0LCBkZWZzLCB0ZXN0cywgcGFydGlhbFBvc2l0aW9uLCBmaXJzdE5vbk1hc2tQb3MsIGxhc3RSZXF1aXJlZE5vbk1hc2tQb3MsIGxlbiwgb2xkVmFsO1xyXG4gICAgICAgICAgICBpZiAoIW1hc2sgJiYgdGhpcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9ICQodGhpc1swXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBpbnB1dC5kYXRhKCQubWFzay5kYXRhTmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4gPyBmbigpIDogdm9pZCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIGF1dG9jbGVhcjogJC5tYXNrLmF1dG9jbGVhcixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAkLm1hc2sucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IG51bGxcclxuICAgICAgICAgICAgfSwgc2V0dGluZ3MpLCBkZWZzID0gJC5tYXNrLmRlZmluaXRpb25zLCB0ZXN0cyA9IFtdLCBwYXJ0aWFsUG9zaXRpb24gPSBsZW4gPSBtYXNrLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGZpcnN0Tm9uTWFza1BvcyA9IG51bGwsICQuZWFjaChtYXNrLnNwbGl0KFwiXCIpLCBmdW5jdGlvbihpLCBjKSB7XHJcbiAgICAgICAgICAgICAgICBcIj9cIiA9PSBjID8gKGxlbi0tLCBwYXJ0aWFsUG9zaXRpb24gPSBpKSA6IGRlZnNbY10gPyAodGVzdHMucHVzaChuZXcgUmVnRXhwKGRlZnNbY10pKSxcclxuICAgICAgICAgICAgICAgIG51bGwgPT09IGZpcnN0Tm9uTWFza1BvcyAmJiAoZmlyc3ROb25NYXNrUG9zID0gdGVzdHMubGVuZ3RoIC0gMSksIHBhcnRpYWxQb3NpdGlvbiA+IGkgJiYgKGxhc3RSZXF1aXJlZE5vbk1hc2tQb3MgPSB0ZXN0cy5sZW5ndGggLSAxKSkgOiB0ZXN0cy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9KSwgdGhpcy50cmlnZ2VyKFwidW5tYXNrXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0cnlGaXJlQ29tcGxldGVkKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0Tm9uTWFza1BvczsgbGFzdFJlcXVpcmVkTm9uTWFza1BvcyA+PSBpOyBpKyspIGlmICh0ZXN0c1tpXSAmJiBidWZmZXJbaV0gPT09IGdldFBsYWNlaG9sZGVyKGkpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmNvbXBsZXRlZC5jYWxsKGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLnBsYWNlaG9sZGVyLmNoYXJBdChpIDwgc2V0dGluZ3MucGxhY2Vob2xkZXIubGVuZ3RoID8gaSA6IDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2Vla05leHQocG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7Kytwb3MgPCBsZW4gJiYgIXRlc3RzW3Bvc107ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZWVrUHJldihwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDstLXBvcyA+PSAwICYmICF0ZXN0c1twb3NdOyApIDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hpZnRMKGJlZ2luLCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgajtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISgwID4gYmVnaW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGJlZ2luLCBqID0gc2Vla05leHQoZW5kKTsgbGVuID4gaTsgaSsrKSBpZiAodGVzdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGxlbiA+IGogJiYgdGVzdHNbaV0udGVzdChidWZmZXJbal0pKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSBidWZmZXJbal0sIGJ1ZmZlcltqXSA9IGdldFBsYWNlaG9sZGVyKGopLCBqID0gc2Vla05leHQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoKSwgaW5wdXQuY2FyZXQoTWF0aC5tYXgoZmlyc3ROb25NYXNrUG9zLCBiZWdpbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNoaWZ0Uihwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgYywgaiwgdDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBwb3MsIGMgPSBnZXRQbGFjZWhvbGRlcihwb3MpOyBsZW4gPiBpOyBpKyspIGlmICh0ZXN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9IHNlZWtOZXh0KGkpLCB0ID0gYnVmZmVyW2ldLCBidWZmZXJbaV0gPSBjLCAhKGxlbiA+IGogJiYgdGVzdHNbal0udGVzdCh0KSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbmRyb2lkSW5wdXRFdmVudCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyVmFsID0gaW5wdXQudmFsKCksIHBvcyA9IGlucHV0LmNhcmV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbCAmJiBvbGRWYWwubGVuZ3RoICYmIG9sZFZhbC5sZW5ndGggPiBjdXJWYWwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY2hlY2tWYWwoITApOyBwb3MuYmVnaW4gPiAwICYmICF0ZXN0c1twb3MuYmVnaW4gLSAxXTsgKSBwb3MuYmVnaW4tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHBvcy5iZWdpbikgZm9yICg7cG9zLmJlZ2luIDwgZmlyc3ROb25NYXNrUG9zICYmICF0ZXN0c1twb3MuYmVnaW5dOyApIHBvcy5iZWdpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jYXJldChwb3MuYmVnaW4sIHBvcy5iZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjaGVja1ZhbCghMCk7IHBvcy5iZWdpbiA8IGxlbiAmJiAhdGVzdHNbcG9zLmJlZ2luXTsgKSBwb3MuYmVnaW4rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2FyZXQocG9zLmJlZ2luLCBwb3MuYmVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cnlGaXJlQ29tcGxldGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBibHVyRXZlbnQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWwoKSwgaW5wdXQudmFsKCkgIT0gZm9jdXNUZXh0ICYmIGlucHV0LmNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24ga2V5ZG93bkV2ZW50KGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnByb3AoXCJyZWFkb25seVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zLCBiZWdpbiwgZW5kLCBrID0gZS53aGljaCB8fCBlLmtleUNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbCA9IGlucHV0LnZhbCgpLCA4ID09PSBrIHx8IDQ2ID09PSBrIHx8IGlQaG9uZSAmJiAxMjcgPT09IGsgPyAocG9zID0gaW5wdXQuY2FyZXQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luID0gcG9zLmJlZ2luLCBlbmQgPSBwb3MuZW5kLCBlbmQgLSBiZWdpbiA9PT0gMCAmJiAoYmVnaW4gPSA0NiAhPT0gayA/IHNlZWtQcmV2KGJlZ2luKSA6IGVuZCA9IHNlZWtOZXh0KGJlZ2luIC0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSA0NiA9PT0gayA/IHNlZWtOZXh0KGVuZCkgOiBlbmQpLCBjbGVhckJ1ZmZlcihiZWdpbiwgZW5kKSwgc2hpZnRMKGJlZ2luLCBlbmQgLSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKSkgOiAxMyA9PT0gayA/IGJsdXJFdmVudC5jYWxsKHRoaXMsIGUpIDogMjcgPT09IGsgJiYgKGlucHV0LnZhbChmb2N1c1RleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2FyZXQoMCwgY2hlY2tWYWwoKSksIGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24ga2V5cHJlc3NFdmVudChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5wcm9wKFwicmVhZG9ubHlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAsIGMsIG5leHQsIGsgPSBlLndoaWNoIHx8IGUua2V5Q29kZSwgcG9zID0gaW5wdXQuY2FyZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUubWV0YUtleSB8fCAzMiA+IGspICYmIGsgJiYgMTMgIT09IGspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MuZW5kIC0gcG9zLmJlZ2luICE9PSAwICYmIChjbGVhckJ1ZmZlcihwb3MuYmVnaW4sIHBvcy5lbmQpLCBzaGlmdEwocG9zLmJlZ2luLCBwb3MuZW5kIC0gMSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gc2Vla05leHQocG9zLmJlZ2luIC0gMSksIGxlbiA+IHAgJiYgKGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGspLCB0ZXN0c1twXS50ZXN0KGMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlmdFIocCksIGJ1ZmZlcltwXSA9IGMsIHdyaXRlQnVmZmVyKCksIG5leHQgPSBzZWVrTmV4dChwKSwgYW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJveHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQucHJveHkoJC5mbi5jYXJldCwgaW5wdXQsIG5leHQpKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocHJveHksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpbnB1dC5jYXJldChuZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MuYmVnaW4gPD0gbGFzdFJlcXVpcmVkTm9uTWFza1BvcyAmJiB0cnlGaXJlQ29tcGxldGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbGVhckJ1ZmZlcihzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gc3RhcnQ7IGVuZCA+IGkgJiYgbGVuID4gaTsgaSsrKSB0ZXN0c1tpXSAmJiAoYnVmZmVyW2ldID0gZ2V0UGxhY2Vob2xkZXIoaSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGVCdWZmZXIoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsKGJ1ZmZlci5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrVmFsKGFsbG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIGMsIHBvcywgdGVzdCA9IGlucHV0LnZhbCgpLCBsYXN0TWF0Y2ggPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBwb3MgPSAwOyBsZW4gPiBpOyBpKyspIGlmICh0ZXN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGJ1ZmZlcltpXSA9IGdldFBsYWNlaG9sZGVyKGkpOyBwb3MrKyA8IHRlc3QubGVuZ3RoOyApIGlmIChjID0gdGVzdC5jaGFyQXQocG9zIC0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHNbaV0udGVzdChjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gYywgbGFzdE1hdGNoID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiB0ZXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJCdWZmZXIoaSArIDEsIGxlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBidWZmZXJbaV0gPT09IHRlc3QuY2hhckF0KHBvcykgJiYgcG9zKyssIHBhcnRpYWxQb3NpdGlvbiA+IGkgJiYgKGxhc3RNYXRjaCA9IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGxvdyA/IHdyaXRlQnVmZmVyKCkgOiBwYXJ0aWFsUG9zaXRpb24gPiBsYXN0TWF0Y2ggKyAxID8gc2V0dGluZ3MuYXV0b2NsZWFyIHx8IGJ1ZmZlci5qb2luKFwiXCIpID09PSBkZWZhdWx0QnVmZmVyID8gKGlucHV0LnZhbCgpICYmIGlucHV0LnZhbChcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJCdWZmZXIoMCwgbGVuKSkgOiB3cml0ZUJ1ZmZlcigpIDogKHdyaXRlQnVmZmVyKCksIGlucHV0LnZhbChpbnB1dC52YWwoKS5zdWJzdHJpbmcoMCwgbGFzdE1hdGNoICsgMSkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbFBvc2l0aW9uID8gaSA6IGZpcnN0Tm9uTWFza1BvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9ICQodGhpcyksIGJ1ZmZlciA9ICQubWFwKG1hc2suc3BsaXQoXCJcIiksIGZ1bmN0aW9uKGMsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI/XCIgIT0gYyA/IGRlZnNbY10gPyBnZXRQbGFjZWhvbGRlcihpKSA6IGMgOiB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICB9KSwgZGVmYXVsdEJ1ZmZlciA9IGJ1ZmZlci5qb2luKFwiXCIpLCBmb2N1c1RleHQgPSBpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEoJC5tYXNrLmRhdGFOYW1lLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5tYXAoYnVmZmVyLCBmdW5jdGlvbihjLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0c1tpXSAmJiBjICE9IGdldFBsYWNlaG9sZGVyKGkpID8gYyA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0pLCBpbnB1dC5vbmUoXCJ1bm1hc2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQub2ZmKFwiLm1hc2tcIikucmVtb3ZlRGF0YSgkLm1hc2suZGF0YU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSkub24oXCJmb2N1cy5tYXNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXQucHJvcChcInJlYWRvbmx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjYXJldFRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzVGV4dCA9IGlucHV0LnZhbCgpLCBwb3MgPSBjaGVja1ZhbCgpLCBjYXJldFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5nZXQoMCkgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKHdyaXRlQnVmZmVyKCksIHBvcyA9PSBtYXNrLnJlcGxhY2UoXCI/XCIsIFwiXCIpLmxlbmd0aCA/IGlucHV0LmNhcmV0KDAsIHBvcykgOiBpbnB1dC5jYXJldChwb3MpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiYmx1ci5tYXNrXCIsIGJsdXJFdmVudCkub24oXCJrZXlkb3duLm1hc2tcIiwga2V5ZG93bkV2ZW50KS5vbihcImtleXByZXNzLm1hc2tcIiwga2V5cHJlc3NFdmVudCkub24oXCJpbnB1dC5tYXNrIHBhc3RlLm1hc2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQucHJvcChcInJlYWRvbmx5XCIpIHx8IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBjaGVja1ZhbCghMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNhcmV0KHBvcyksIHRyeUZpcmVDb21wbGV0ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pLCBjaHJvbWUgJiYgYW5kcm9pZCAmJiBpbnB1dC5vZmYoXCJpbnB1dC5tYXNrXCIpLm9uKFwiaW5wdXQubWFza1wiLCBhbmRyb2lkSW5wdXRFdmVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuY29uc29sZS5sb2coJ21hc2sgdGVsZXBob25lJyk7XHJcbiAgICAkKFwiLmpzX3Bob25lTnVtYmVyXCIpLm1hc2soXCIrMzgoOTk5KSA5OTktOTk5OVwiKTtcclxufSk7Il19
