var Swiper = function (e, t) {
  function i(e, t) {
    return document.querySelectorAll ? (t || document).querySelectorAll(e)  : jQuery(e, t)
  }
  function n(e) {
    return '[object Array]' === Object.prototype.toString.apply(e) ? !0 : !1
  }
  function r() {
    var e = W - G;
    return t.freeMode && (e = W - G),
    t.slidesPerView > P.slides.length && !t.centeredSlides && (e = 0),
    0 > e && (e = 0),
    e
  }
  function o() {
    function e(e) {
      var i,
      n,
      r = function () {
        'undefined' != typeof P && null !== P && (void 0 !== P.imagesLoaded && P.imagesLoaded++, P.imagesLoaded === P.imagesToLoad.length && (P.reInit(), t.onImagesReady && P.fireCallback(t.onImagesReady, P)))
      };
      e.complete ? r()  : (n = e.currentSrc || e.getAttribute('src'), n ? (i = new Image, i.onload = r, i.onerror = r, i.src = n)  : r())
    }
    var n = P.h.addEventListener,
    r = 'wrapper' === t.eventTarget ? P.wrapper : P.container;
    if (P.browser.ie10 || P.browser.ie11 ? (n(r, P.touchEvents.touchStart, g), n(document, P.touchEvents.touchMove, w), n(document, P.touchEvents.touchEnd, m))  : (P.support.touch && (n(r, 'touchstart', g), n(r, 'touchmove', w), n(r, 'touchend', m)), t.simulateTouch && (n(r, 'mousedown', g), n(document, 'mousemove', w), n(document, 'mouseup', m))), t.autoResize && n(window, 'resize', P.resizeFix), s(), P._wheelEvent = !1, t.mousewheelControl) {
      if (void 0 !== document.onmousewheel && (P._wheelEvent = 'mousewheel'), !P._wheelEvent) try {
        new WheelEvent('wheel'),
        P._wheelEvent = 'wheel'
      } catch (o) {
      }
      P._wheelEvent || (P._wheelEvent = 'DOMMouseScroll'),
      P._wheelEvent && n(P.container, P._wheelEvent, d)
    }
    if (t.keyboardControl && n(document, 'keydown', l), t.updateOnImagesReady) {
      P.imagesToLoad = i('img', P.container);
      for (var a = 0; a < P.imagesToLoad.length; a++) e(P.imagesToLoad[a])
    }
  }
  function s() {
    var e,
    n = P.h.addEventListener;
    if (t.preventLinks) {
      var r = i('a', P.container);
      for (e = 0; e < r.length; e++) n(r[e], 'click', f)
    }
    if (t.releaseFormElements) {
      var o = i('input, textarea, select', P.container);
      for (e = 0; e < o.length; e++) n(o[e], P.touchEvents.touchStart, h, !0),
      P.support.touch && t.simulateTouch && n(o[e], 'mousedown', h, !0)
    }
    if (t.onSlideClick) for (e = 0; e < P.slides.length; e++) n(P.slides[e], 'click', p);
    if (t.onSlideTouch) for (e = 0; e < P.slides.length; e++) n(P.slides[e], P.touchEvents.touchStart, u)
  }
  function a() {
    var e,
    n = P.h.removeEventListener;
    if (t.onSlideClick) for (e = 0; e < P.slides.length; e++) n(P.slides[e], 'click', p);
    if (t.onSlideTouch) for (e = 0; e < P.slides.length; e++) n(P.slides[e], P.touchEvents.touchStart, u);
    if (t.releaseFormElements) {
      var r = i('input, textarea, select', P.container);
      for (e = 0; e < r.length; e++) n(r[e], P.touchEvents.touchStart, h, !0),
      P.support.touch && t.simulateTouch && n(r[e], 'mousedown', h, !0)
    }
    if (t.preventLinks) {
      var o = i('a', P.container);
      for (e = 0; e < o.length; e++) n(o[e], 'click', f)
    }
  }
  function l(e) {
    var t = e.keyCode || e.charCode;
    if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
      if (37 === t || 39 === t || 38 === t || 40 === t) {
        for (var i = !1, n = P.h.getOffset(P.container), r = P.h.windowScroll().left, o = P.h.windowScroll().top, s = P.h.windowWidth(), a = P.h.windowHeight(), l = [
          [n.left,
          n.top],
          [
            n.left + P.width,
            n.top
          ],
          [
            n.left,
            n.top + P.height
          ],
          [
            n.left + P.width,
            n.top + P.height
          ]
        ], d = 0; d < l.length; d++) {
          var p = l[d];
          p[0] >= r && p[0] <= r + s && p[1] >= o && p[1] <= o + a && (i = !0)
        }
        if (!i) return
      }
      V ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1), 39 === t && P.swipeNext(), 37 === t && P.swipePrev())  : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1), 40 === t && P.swipeNext(), 38 === t && P.swipePrev())
    }
  }
  function d(e) {
    var i = P._wheelEvent,
    n = 0;
    if (e.detail) n = - e.detail;
     else if ('mousewheel' === i) if (t.mousewheelControlForceToAxis) if (V) {
      if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
      n = e.wheelDeltaX
    } else {
      if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
      n = e.wheelDeltaY
    } else n = e.wheelDelta;
     else if ('DOMMouseScroll' === i) n = - e.detail;
     else if ('wheel' === i) if (t.mousewheelControlForceToAxis) if (V) {
      if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
      n = - e.deltaX
    } else {
      if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
      n = - e.deltaY
    } else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
    if (t.freeMode) {
      var o = P.getWrapperTranslate() + n;
      if (o > 0 && (o = 0), o < - r() && (o = - r()), P.setWrapperTransition(0), P.setWrapperTranslate(o), P.updateActiveSlide(o), 0 === o || o === - r()) return
    } else (new Date).getTime() - j > 60 && (0 > n ? P.swipeNext()  : P.swipePrev()),
    j = (new Date).getTime();
    return t.autoplay && P.stopAutoplay(!0),
    e.preventDefault ? e.preventDefault()  : e.returnValue = !1,
    !1
  }
  function p(e) {
    P.allowSlideClick && (c(e), P.fireCallback(t.onSlideClick, P, e))
  }
  function u(e) {
    c(e),
    P.fireCallback(t.onSlideTouch, P, e)
  }
  function c(e) {
    if (e.currentTarget) P.clickedSlide = e.currentTarget;
     else {
      var i = e.srcElement;
      do {
        if (i.className.indexOf(t.slideClass) > - 1) break;
        i = i.parentNode
      } while (i);
      P.clickedSlide = i
    }
    P.clickedSlideIndex = P.slides.indexOf(P.clickedSlide),
    P.clickedSlideLoopIndex = P.clickedSlideIndex - (P.loopedSlides || 0)
  }
  function f(e) {
    return P.allowLinks ? void 0 : (e.preventDefault ? e.preventDefault()  : e.returnValue = !1, t.preventLinksPropagation && 'stopPropagation' in e && e.stopPropagation(), !1)
  }
  function h(e) {
    return e.stopPropagation ? e.stopPropagation()  : e.returnValue = !1,
    !1
  }
  function g(e) {
    if (t.preventLinks && (P.allowLinks = !0), P.isTouched || t.onlyExternal) return !1;
    var i = e.target || e.srcElement;
    document.activeElement && document.activeElement !== document.body && document.activeElement !== i && document.activeElement.blur();
    var n = 'input select textarea'.split(' ');
    if (t.noSwiping && i && S(i)) return !1;
    if (J = !1, P.isTouched = !0, $ = 'touchstart' === e.type, !$ && 'which' in e && 3 === e.which) return P.isTouched = !1,
    !1;
    if (!$ || 1 === e.targetTouches.length) {
      P.callPlugins('onTouchStartBegin'),
      !$ && !P.isAndroid && n.indexOf(i.tagName.toLowerCase()) < 0 && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1);
      var r = $ ? e.targetTouches[0].pageX : e.pageX || e.clientX,
      o = $ ? e.targetTouches[0].pageY : e.pageY || e.clientY;
      P.touches.startX = P.touches.currentX = r,
      P.touches.startY = P.touches.currentY = o,
      P.touches.start = P.touches.current = V ? r : o,
      P.setWrapperTransition(0),
      P.positions.start = P.positions.current = P.getWrapperTranslate(),
      P.setWrapperTranslate(P.positions.start),
      P.times.start = (new Date).getTime(),
      H = void 0,
      t.moveStartThreshold > 0 && (Q = !1),
      t.onTouchStart && P.fireCallback(t.onTouchStart, P, e),
      P.callPlugins('onTouchStartEnd')
    }
  }
  function w(e) {
    if (P.isTouched && !t.onlyExternal && (!$ || 'mousemove' !== e.type)) {
      var i = $ ? e.targetTouches[0].pageX : e.pageX || e.clientX,
      n = $ ? e.targetTouches[0].pageY : e.pageY || e.clientY;
      if ('undefined' == typeof H && V && (H = !!(H || Math.abs(n - P.touches.startY) > Math.abs(i - P.touches.startX))), 'undefined' != typeof H || V || (H = !!(H || Math.abs(n - P.touches.startY) < Math.abs(i - P.touches.startX))), H) return void (P.isTouched = !1);
      if (V) {
        if (!t.swipeToNext && i < P.touches.startX || !t.swipeToPrev && i > P.touches.startX) return
      } else if (!t.swipeToNext && n < P.touches.startY || !t.swipeToPrev && n > P.touches.startY) return;
      if (e.assignedToSwiper) return void (P.isTouched = !1);
      if (e.assignedToSwiper = !0, t.preventLinks && (P.allowLinks = !1), t.onSlideClick && (P.allowSlideClick = !1), t.autoplay && P.stopAutoplay(!0), !$ || 1 === e.touches.length) {
        if (P.isMoved || (P.callPlugins('onTouchMoveStart'), t.loop && (P.fixLoop(), P.positions.start = P.getWrapperTranslate()), t.onTouchMoveStart && P.fireCallback(t.onTouchMoveStart, P)), P.isMoved = !0, e.preventDefault ? e.preventDefault()  : e.returnValue = !1, P.touches.current = V ? i : n, P.positions.current = (P.touches.current - P.touches.start) * t.touchRatio + P.positions.start, P.positions.current > 0 && t.onResistanceBefore && P.fireCallback(t.onResistanceBefore, P, P.positions.current), P.positions.current < - r() && t.onResistanceAfter && P.fireCallback(t.onResistanceAfter, P, Math.abs(P.positions.current + r())), t.resistance && '100%' !== t.resistance) {
          var o;
          if (P.positions.current > 0 && (o = 1 - P.positions.current / G / 2, P.positions.current = 0.5 > o ? G / 2 : P.positions.current * o), P.positions.current < - r()) {
            var s = (P.touches.current - P.touches.start) * t.touchRatio + (r() + P.positions.start);
            o = (G + s) / G;
            var a = P.positions.current - s * (1 - o) / 2,
            l = - r() - G / 2;
            P.positions.current = l > a || 0 >= o ? l : a
          }
        }
        if (t.resistance && '100%' === t.resistance && (P.positions.current > 0 && (!t.freeMode || t.freeModeFluid) && (P.positions.current = 0), P.positions.current < - r() && (!t.freeMode || t.freeModeFluid) && (P.positions.current = - r())), !t.followFinger) return;
        if (t.moveStartThreshold) if (Math.abs(P.touches.current - P.touches.start) > t.moveStartThreshold || Q) {
          if (!Q) return Q = !0,
          void (P.touches.start = P.touches.current);
          P.setWrapperTranslate(P.positions.current)
        } else P.positions.current = P.positions.start;
         else P.setWrapperTranslate(P.positions.current);
        return (t.freeMode || t.watchActiveIndex) && P.updateActiveSlide(P.positions.current),
        t.grabCursor && (P.container.style.cursor = 'move', P.container.style.cursor = 'grabbing', P.container.style.cursor = '-moz-grabbin', P.container.style.cursor = '-webkit-grabbing'),
        Z || (Z = P.touches.current),
        U || (U = (new Date).getTime()),
        P.velocity = (P.touches.current - Z) / ((new Date).getTime() - U) / 2,
        Math.abs(P.touches.current - Z) < 2 && (P.velocity = 0),
        Z = P.touches.current,
        U = (new Date).getTime(),
        P.callPlugins('onTouchMoveEnd'),
        t.onTouchMove && P.fireCallback(t.onTouchMove, P, e),
        !1
      }
    }
  }
  function m(e) {
    if (H && P.swipeReset(), !t.onlyExternal && P.isTouched) {
      P.isTouched = !1,
      t.grabCursor && (P.container.style.cursor = 'move', P.container.style.cursor = 'grab', P.container.style.cursor = '-moz-grab', P.container.style.cursor = '-webkit-grab'),
      P.positions.current || 0 === P.positions.current || (P.positions.current = P.positions.start),
      t.followFinger && P.setWrapperTranslate(P.positions.current),
      P.times.end = (new Date).getTime(),
      P.touches.diff = P.touches.current - P.touches.start,
      P.touches.abs = Math.abs(P.touches.diff),
      P.positions.diff = P.positions.current - P.positions.start,
      P.positions.abs = Math.abs(P.positions.diff);
      var i = P.positions.diff,
      n = P.positions.abs,
      o = P.times.end - P.times.start;
      5 > n && 300 > o && P.allowLinks === !1 && (t.freeMode || 0 === n || P.swipeReset(), t.preventLinks && (P.allowLinks = !0), t.onSlideClick && (P.allowSlideClick = !0)),
      setTimeout(function () {
        'undefined' != typeof P && null !== P && (t.preventLinks && (P.allowLinks = !0), t.onSlideClick && (P.allowSlideClick = !0))
      }, 100);
      var s = r();
      if (!P.isMoved && t.freeMode) return P.isMoved = !1,
      t.onTouchEnd && P.fireCallback(t.onTouchEnd, P, e),
      void P.callPlugins('onTouchEnd');
      if (!P.isMoved || P.positions.current > 0 || P.positions.current < - s) return P.swipeReset(),
      t.onTouchEnd && P.fireCallback(t.onTouchEnd, P, e),
      void P.callPlugins('onTouchEnd');
      if (P.isMoved = !1, t.freeMode) {
        if (t.freeModeFluid) {
          var a,
          l = 1000 * t.momentumRatio,
          d = P.velocity * l,
          p = P.positions.current + d,
          u = !1,
          c = 20 * Math.abs(P.velocity) * t.momentumBounceRatio;
          - s > p && (t.momentumBounce && P.support.transitions ? ( - c > p + s && (p = - s - c), a = - s, u = !0, J = !0)  : p = - s),
          p > 0 && (t.momentumBounce && P.support.transitions ? (p > c && (p = c), a = 0, u = !0, J = !0)  : p = 0),
          0 !== P.velocity && (l = Math.abs((p - P.positions.current) / P.velocity)),
          P.setWrapperTranslate(p),
          P.setWrapperTransition(l),
          t.momentumBounce && u && P.wrapperTransitionEnd(function () {
            J && (t.onMomentumBounce && P.fireCallback(t.onMomentumBounce, P), P.callPlugins('onMomentumBounce'), P.setWrapperTranslate(a), P.setWrapperTransition(300))
          }),
          P.updateActiveSlide(p)
        }
        return (!t.freeModeFluid || o >= 300) && P.updateActiveSlide(P.positions.current),
        t.onTouchEnd && P.fireCallback(t.onTouchEnd, P, e),
        void P.callPlugins('onTouchEnd')
      }
      D = 0 > i ? 'toNext' : 'toPrev',
      'toNext' === D && 300 >= o && (30 > n || !t.shortSwipes ? P.swipeReset()  : P.swipeNext(!0, !0)),
      'toPrev' === D && 300 >= o && (30 > n || !t.shortSwipes ? P.swipeReset()  : P.swipePrev(!0, !0));
      var f = 0;
      if ('auto' === t.slidesPerView) {
        for (var h, g = Math.abs(P.getWrapperTranslate()), w = 0, m = 0; m < P.slides.length; m++) if (h = V ? P.slides[m].getWidth(!0, t.roundLengths)  : P.slides[m].getHeight(!0, t.roundLengths), w += h, w > g) {
          f = h;
          break
        }
        f > G && (f = G)
      } else f = I * t.slidesPerView;
      'toNext' === D && o > 300 && (n >= f * t.longSwipesRatio ? P.swipeNext(!0, !0)  : P.swipeReset()),
      'toPrev' === D && o > 300 && (n >= f * t.longSwipesRatio ? P.swipePrev(!0, !0)  : P.swipeReset()),
      t.onTouchEnd && P.fireCallback(t.onTouchEnd, P, e),
      P.callPlugins('onTouchEnd')
    }
  }
  function v(e, t) {
    return e && e.getAttribute('class') && e.getAttribute('class').indexOf(t) > - 1
  }
  function S(e) {
    var i = !1;
    do v(e, t.noSwipingClass) && (i = !0),
    e = e.parentElement;
    while (!i && e.parentElement && !v(e, t.wrapperClass));
    return !i && v(e, t.wrapperClass) && v(e, t.noSwipingClass) && (i = !0),
    i
  }
  function T(e, t) {
    var i,
    n = document.createElement('div');
    return n.innerHTML = t,
    i = n.firstChild,
    i.className += ' ' + e,
    i.outerHTML
  }
  function y(e, i, n) {
    function r() {
      var o = + new Date,
      u = o - s;
      a += l * u / (1000 / 60),
      p = 'toNext' === d ? a > e : e > a,
      p ? (P.setWrapperTranslate(Math.ceil(a)), P._DOMAnimating = !0, window.setTimeout(function () {
        r()
      }, 1000 / 60))  : (t.onSlideChangeEnd && ('to' === i ? n.runCallbacks === !0 && P.fireCallback(t.onSlideChangeEnd, P, d)  : P.fireCallback(t.onSlideChangeEnd, P, d)), P.setWrapperTranslate(e), P._DOMAnimating = !1)
    }
    var o = 'to' === i && n.speed >= 0 ? n.speed : t.speed,
    s = + new Date;
    if (P.support.transitions || !t.DOMAnimation) P.setWrapperTranslate(e),
    P.setWrapperTransition(o);
     else {
      var a = P.getWrapperTranslate(),
      l = Math.ceil((e - a) / o * (1000 / 60)),
      d = a > e ? 'toNext' : 'toPrev',
      p = 'toNext' === d ? a > e : e > a;
      if (P._DOMAnimating) return;
      r()
    }
    P.updateActiveSlide(e),
    t.onSlideNext && 'next' === i && n.runCallbacks === !0 && P.fireCallback(t.onSlideNext, P, e),
    t.onSlidePrev && 'prev' === i && n.runCallbacks === !0 && P.fireCallback(t.onSlidePrev, P, e),
    t.onSlideReset && 'reset' === i && n.runCallbacks === !0 && P.fireCallback(t.onSlideReset, P, e),
    'next' !== i && 'prev' !== i && 'to' !== i || n.runCallbacks !== !0 || x(i)
  }
  function x(e) {
    if (P.callPlugins('onSlideChangeStart'), t.onSlideChangeStart) if (t.queueStartCallbacks && P.support.transitions) {
      if (P._queueStartCallbacks) return;
      P._queueStartCallbacks = !0,
      P.fireCallback(t.onSlideChangeStart, P, e),
      P.wrapperTransitionEnd(function () {
        P._queueStartCallbacks = !1
      })
    } else P.fireCallback(t.onSlideChangeStart, P, e);
    if (t.onSlideChangeEnd) if (P.support.transitions) if (t.queueEndCallbacks) {
      if (P._queueEndCallbacks) return;
      P._queueEndCallbacks = !0,
      P.wrapperTransitionEnd(function (i) {
        P.fireCallback(t.onSlideChangeEnd, i, e)
      })
    } else P.wrapperTransitionEnd(function (i) {
      P.fireCallback(t.onSlideChangeEnd, i, e)
    });
     else t.DOMAnimation || setTimeout(function () {
      P.fireCallback(t.onSlideChangeEnd, P, e)
    }, 10)
  }
  function b() {
    var e = P.paginationButtons;
    if (e) for (var t = 0; t < e.length; t++) P.h.removeEventListener(e[t], 'click', L)
  }
  function C() {
    var e = P.paginationButtons;
    if (e) for (var t = 0; t < e.length; t++) P.h.addEventListener(e[t], 'click', L)
  }
  function L(e) {
    for (var i, n = e.target || e.srcElement, r = P.paginationButtons, o = 0; o < r.length; o++) n === r[o] && (i = o);
    t.autoplay && P.stopAutoplay(!0),
    P.swipeTo(i)
  }
  function M() {
    et = setTimeout(function () {
      t.loop ? (P.fixLoop(), P.swipeNext(!0, !0))  : P.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearTimeout(et), et = void 0)  : P.swipeTo(0)),
      P.wrapperTransitionEnd(function () {
        'undefined' != typeof et && M()
      })
    }, t.autoplay)
  }
  function E() {
    P.calcSlides(),
    t.loader.slides.length > 0 && 0 === P.slides.length && P.loadSlides(),
    t.loop && P.createLoop(),
    P.init(),
    o(),
    t.pagination && P.createPagination(!0),
    t.loop || t.initialSlide > 0 ? P.swipeTo(t.initialSlide, 0, !1)  : P.updateActiveSlide(0),
    t.autoplay && P.startAutoplay(),
    P.centerIndex = P.activeIndex,
    t.onSwiperCreated && P.fireCallback(t.onSwiperCreated, P),
    P.callPlugins('onSwiperCreated')
  }
  if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
    var k = HTMLElement.prototype;
    k.__defineGetter__ && k.__defineGetter__('outerHTML', function () {
      return (new XMLSerializer).serializeToString(this)
    })
  }
  if (window.getComputedStyle || (window.getComputedStyle = function (e) {
    return this.el = e,
    this.getPropertyValue = function (t) {
      var i = /(\-([a-z]){1})/g;
      return 'float' === t && (t = 'styleFloat'),
      i.test(t) && (t = t.replace(i, function () {
        return arguments[2].toUpperCase()
      })),
      e.currentStyle[t] ? e.currentStyle[t] : null
    },
    this
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
    for (var i = t || 0, n = this.length; n > i; i++) if (this[i] === e) return i;
    return - 1
  }), (document.querySelectorAll || window.jQuery) && 'undefined' != typeof e && (e.nodeType || 0 !== i(e).length)) {
    var P = this;
    P.touches = {
      start: 0,
      startX: 0,
      startY: 0,
      current: 0,
      currentX: 0,
      currentY: 0,
      diff: 0,
      abs: 0
    },
    P.positions = {
      start: 0,
      abs: 0,
      diff: 0,
      current: 0
    },
    P.times = {
      start: 0,
      end: 0
    },
    P.id = (new Date).getTime(),
    P.container = e.nodeType ? e : i(e) [0],
    P.isTouched = !1,
    P.isMoved = !1,
    P.activeIndex = 0,
    P.centerIndex = 0,
    P.activeLoaderIndex = 0,
    P.activeLoopIndex = 0,
    P.previousIndex = null,
    P.velocity = 0,
    P.snapGrid = [
    ],
    P.slidesGrid = [
    ],
    P.imagesToLoad = [
    ],
    P.imagesLoaded = 0,
    P.wrapperLeft = 0,
    P.wrapperRight = 0,
    P.wrapperTop = 0,
    P.wrapperBottom = 0,
    P.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
    var A,
    I,
    W,
    D,
    H,
    G,
    N = {
      eventTarget: 'wrapper',
      mode: 'horizontal',
      touchRatio: 1,
      speed: 300,
      freeMode: !1,
      freeModeFluid: !1,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerViewFit: !0,
      simulateTouch: !0,
      followFinger: !0,
      shortSwipes: !0,
      longSwipesRatio: 0.5,
      moveStartThreshold: !1,
      onlyExternal: !1,
      createPagination: !0,
      pagination: !1,
      paginationElement: 'span',
      paginationClickable: !1,
      paginationAsRange: !0,
      resistance: !0,
      scrollContainer: !1,
      preventLinks: !0,
      preventLinksPropagation: !1,
      noSwiping: !1,
      noSwipingClass: 'swiper-no-swiping',
      initialSlide: 0,
      keyboardControl: !1,
      mousewheelControl: !1,
      mousewheelControlForceToAxis: !1,
      useCSS3Transforms: !0,
      autoplay: !1,
      autoplayDisableOnInteraction: !0,
      autoplayStopOnLast: !1,
      loop: !1,
      loopAdditionalSlides: 0,
      roundLengths: !1,
      calculateHeight: !1,
      cssWidthAndHeight: !1,
      updateOnImagesReady: !0,
      releaseFormElements: !0,
      watchActiveIndex: !1,
      visibilityFullFit: !1,
      offsetPxBefore: 0,
      offsetPxAfter: 0,
      offsetSlidesBefore: 0,
      offsetSlidesAfter: 0,
      centeredSlides: !1,
      queueStartCallbacks: !1,
      queueEndCallbacks: !1,
      autoResize: !0,
      resizeReInit: !1,
      DOMAnimation: !0,
      loader: {
        slides: [
        ],
        slidesHTMLType: 'inner',
        surroundGroups: 1,
        logic: 'reload',
        loadAllSlides: !1
      },
      swipeToPrev: !0,
      swipeToNext: !0,
      slideElement: 'div',
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      wrapperClass: 'swiper-wrapper',
      paginationElementClass: 'swiper-pagination-switch',
      paginationActiveClass: 'swiper-active-switch',
      paginationVisibleClass: 'swiper-visible-switch'
    };
    t = t || {
    };
    for (var R in N) if (R in t && 'object' == typeof t[R]) for (var F in N[R]) F in t[R] || (t[R][F] = N[R][F]);
     else R in t || (t[R] = N[R]);
    P.params = t,
    t.scrollContainer && (t.freeMode = !0, t.freeModeFluid = !0),
    t.loop && (t.resistance = '100%');
    var V = 'horizontal' === t.mode,
    O = [
      'mousedown',
      'mousemove',
      'mouseup'
    ];
    P.browser.ie10 && (O = [
      'MSPointerDown',
      'MSPointerMove',
      'MSPointerUp'
    ]),
    P.browser.ie11 && (O = [
      'pointerdown',
      'pointermove',
      'pointerup'
    ]),
    P.touchEvents = {
      touchStart: P.support.touch || !t.simulateTouch ? 'touchstart' : O[0],
      touchMove: P.support.touch || !t.simulateTouch ? 'touchmove' : O[1],
      touchEnd: P.support.touch || !t.simulateTouch ? 'touchend' : O[2]
    };
    for (var z = P.container.childNodes.length - 1; z >= 0; z--) if (P.container.childNodes[z].className) for (var B = P.container.childNodes[z].className.split(/\s+/), _ = 0; _ < B.length; _++) B[_] === t.wrapperClass && (A = P.container.childNodes[z]);
    P.wrapper = A,
    P._extendSwiperSlide = function (e) {
      return e.append = function () {
        return t.loop ? e.insertAfter(P.slides.length - P.loopedSlides)  : (P.wrapper.appendChild(e), P.reInit()),
        e
      },
      e.prepend = function () {
        return t.loop ? (P.wrapper.insertBefore(e, P.slides[P.loopedSlides]), P.removeLoopedSlides(), P.calcSlides(), P.createLoop())  : P.wrapper.insertBefore(e, P.wrapper.firstChild),
        P.reInit(),
        e
      },
      e.insertAfter = function (i) {
        if ('undefined' == typeof i) return !1;
        var n;
        return t.loop ? (n = P.slides[i + 1 + P.loopedSlides], n ? P.wrapper.insertBefore(e, n)  : P.wrapper.appendChild(e), P.removeLoopedSlides(), P.calcSlides(), P.createLoop())  : (n = P.slides[i + 1], P.wrapper.insertBefore(e, n)),
        P.reInit(),
        e
      },
      e.clone = function () {
        return P._extendSwiperSlide(e.cloneNode(!0))
      },
      e.remove = function () {
        P.wrapper.removeChild(e),
        P.reInit()
      },
      e.html = function (t) {
        return 'undefined' == typeof t ? e.innerHTML : (e.innerHTML = t, e)
      },
      e.index = function () {
        for (var t, i = P.slides.length - 1; i >= 0; i--) e === P.slides[i] && (t = i);
        return t
      },
      e.isActive = function () {
        return e.index() === P.activeIndex ? !0 : !1
      },
      e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {
      }),
      e.getData = function (t) {
        return e.swiperSlideDataStorage[t]
      },
      e.setData = function (t, i) {
        return e.swiperSlideDataStorage[t] = i,
        e
      },
      e.data = function (t, i) {
        return 'undefined' == typeof i ? e.getAttribute('data-' + t)  : (e.setAttribute('data-' + t, i), e)
      },
      e.getWidth = function (t, i) {
        return P.h.getWidth(e, t, i)
      },
      e.getHeight = function (t, i) {
        return P.h.getHeight(e, t, i)
      },
      e.getOffset = function () {
        return P.h.getOffset(e)
      },
      e
    },
    P.calcSlides = function (e) {
      var i = P.slides ? P.slides.length : !1;
      P.slides = [
      ],
      P.displaySlides = [
      ];
      for (var n = 0; n < P.wrapper.childNodes.length; n++) if (P.wrapper.childNodes[n].className) for (var r = P.wrapper.childNodes[n].className, o = r.split(/\s+/), l = 0; l < o.length; l++) o[l] === t.slideClass && P.slides.push(P.wrapper.childNodes[n]);
      for (n = P.slides.length - 1; n >= 0; n--) P._extendSwiperSlide(P.slides[n]);
      i !== !1 && (i !== P.slides.length || e) && (a(), s(), P.updateActiveSlide(), P.params.pagination && P.createPagination(), P.callPlugins('numberOfSlidesChanged'))
    },
    P.createSlide = function (e, i, n) {
      i = i || P.params.slideClass,
      n = n || t.slideElement;
      var r = document.createElement(n);
      return r.innerHTML = e || '',
      r.className = i,
      P._extendSwiperSlide(r)
    },
    P.appendSlide = function (e, t, i) {
      return e ? e.nodeType ? P._extendSwiperSlide(e).append()  : P.createSlide(e, t, i).append()  : void 0
    },
    P.prependSlide = function (e, t, i) {
      return e ? e.nodeType ? P._extendSwiperSlide(e).prepend()  : P.createSlide(e, t, i).prepend()  : void 0
    },
    P.insertSlideAfter = function (e, t, i, n) {
      return 'undefined' == typeof e ? !1 : t.nodeType ? P._extendSwiperSlide(t).insertAfter(e)  : P.createSlide(t, i, n).insertAfter(e)
    },
    P.removeSlide = function (e) {
      if (P.slides[e]) {
        if (t.loop) {
          if (!P.slides[e + P.loopedSlides]) return !1;
          P.slides[e + P.loopedSlides].remove(),
          P.removeLoopedSlides(),
          P.calcSlides(),
          P.createLoop()
        } else P.slides[e].remove();
        return !0
      }
      return !1
    },
    P.removeLastSlide = function () {
      return P.slides.length > 0 ? (t.loop ? (P.slides[P.slides.length - 1 - P.loopedSlides].remove(), P.removeLoopedSlides(), P.calcSlides(), P.createLoop())  : P.slides[P.slides.length - 1].remove(), !0)  : !1
    },
    P.removeAllSlides = function () {
      for (var e = P.slides.length, t = P.slides.length - 1; t >= 0; t--) P.slides[t].remove(),
      t === e - 1 && P.setWrapperTranslate(0)
    },
    P.getSlide = function (e) {
      return P.slides[e]
    },
    P.getLastSlide = function () {
      return P.slides[P.slides.length - 1]
    },
    P.getFirstSlide = function () {
      return P.slides[0]
    },
    P.activeSlide = function () {
      return P.slides[P.activeIndex]
    },
    P.fireCallback = function () {
      var e = arguments[0];
      if ('[object Array]' === Object.prototype.toString.call(e)) for (var i = 0; i < e.length; i++) 'function' == typeof e[i] && e[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
       else '[object String]' === Object.prototype.toString.call(e) ? t['on' + e] && P.fireCallback(t['on' + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])  : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    },
    P.addCallback = function (e, t) {
      var i,
      r = this;
      return r.params['on' + e] ? n(this.params['on' + e]) ? this.params['on' + e].push(t)  : 'function' == typeof this.params['on' + e] ? (i = this.params['on' + e], this.params['on' + e] = [
      ], this.params['on' + e].push(i), this.params['on' + e].push(t))  : void 0 : (this.params['on' + e] = [
      ], this.params['on' + e].push(t))
    },
    P.removeCallbacks = function (e) {
      P.params['on' + e] && (P.params['on' + e] = null)
    };
    var Y = [
    ];
    for (var X in P.plugins) if (t[X]) {
      var q = P.plugins[X](P, t[X]);
      q && Y.push(q)
    }
    P.callPlugins = function (e, t) {
      t || (t = {
      });
      for (var i = 0; i < Y.length; i++) e in Y[i] && Y[i][e](t)
    },
    !P.browser.ie10 && !P.browser.ie11 || t.onlyExternal || P.wrapper.classList.add('swiper-wp8-' + (V ? 'horizontal' : 'vertical')),
    t.freeMode && (P.container.className += ' swiper-free-mode'),
    P.initialized = !1,
    P.init = function (e, i) {
      var n = P.h.getWidth(P.container, !1, t.roundLengths),
      r = P.h.getHeight(P.container, !1, t.roundLengths);
      if (n !== P.width || r !== P.height || e) {
        P.width = n,
        P.height = r;
        var o,
        s,
        a,
        l,
        d,
        p,
        u;
        G = V ? n : r;
        var c = P.wrapper;
        if (e && P.calcSlides(i), 'auto' === t.slidesPerView) {
          var f = 0,
          h = 0;
          t.slidesOffset > 0 && (c.style.paddingLeft = '', c.style.paddingRight = '', c.style.paddingTop = '', c.style.paddingBottom = ''),
          c.style.width = '',
          c.style.height = '',
          t.offsetPxBefore > 0 && (V ? P.wrapperLeft = t.offsetPxBefore : P.wrapperTop = t.offsetPxBefore),
          t.offsetPxAfter > 0 && (V ? P.wrapperRight = t.offsetPxAfter : P.wrapperBottom = t.offsetPxAfter),
          t.centeredSlides && (V ? (P.wrapperLeft = (G - this.slides[0].getWidth(!0, t.roundLengths)) / 2, P.wrapperRight = (G - P.slides[P.slides.length - 1].getWidth(!0, t.roundLengths)) / 2)  : (P.wrapperTop = (G - P.slides[0].getHeight(!0, t.roundLengths)) / 2, P.wrapperBottom = (G - P.slides[P.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)),
          V ? (P.wrapperLeft >= 0 && (c.style.paddingLeft = P.wrapperLeft + 'px'), P.wrapperRight >= 0 && (c.style.paddingRight = P.wrapperRight + 'px'))  : (P.wrapperTop >= 0 && (c.style.paddingTop = P.wrapperTop + 'px'), P.wrapperBottom >= 0 && (c.style.paddingBottom = P.wrapperBottom + 'px')),
          p = 0;
          var g = 0;
          for (P.snapGrid = [
          ], P.slidesGrid = [
          ], a = 0, u = 0; u < P.slides.length; u++) {
            o = P.slides[u].getWidth(!0, t.roundLengths),
            s = P.slides[u].getHeight(!0, t.roundLengths),
            t.calculateHeight && (a = Math.max(a, s));
            var w = V ? o : s;
            if (t.centeredSlides) {
              var m = u === P.slides.length - 1 ? 0 : P.slides[u + 1].getWidth(!0, t.roundLengths),
              v = u === P.slides.length - 1 ? 0 : P.slides[u + 1].getHeight(!0, t.roundLengths),
              S = V ? m : v;
              if (w > G) {
                if (t.slidesPerViewFit) P.snapGrid.push(p + P.wrapperLeft),
                P.snapGrid.push(p + w - G + P.wrapperLeft);
                 else for (var T = 0; T <= Math.floor(w / (G + P.wrapperLeft)); T++) P.snapGrid.push(0 === T ? p + P.wrapperLeft : p + P.wrapperLeft + G * T);
                P.slidesGrid.push(p + P.wrapperLeft)
              } else P.snapGrid.push(g),
              P.slidesGrid.push(g);
              g += w / 2 + S / 2
            } else {
              if (w > G) if (t.slidesPerViewFit) P.snapGrid.push(p),
              P.snapGrid.push(p + w - G);
               else if (0 !== G) for (var y = 0; y <= Math.floor(w / G); y++) P.snapGrid.push(p + G * y);
               else P.snapGrid.push(p);
               else P.snapGrid.push(p);
              P.slidesGrid.push(p)
            }
            p += w,
            f += o,
            h += s
          }
          t.calculateHeight && (P.height = a),
          V ? (W = f + P.wrapperRight + P.wrapperLeft, t.cssWidthAndHeight && 'height' !== t.cssWidthAndHeight || (c.style.width = f + 'px'), t.cssWidthAndHeight && 'width' !== t.cssWidthAndHeight || (c.style.height = P.height + 'px'))  : (t.cssWidthAndHeight && 'height' !== t.cssWidthAndHeight || (c.style.width = P.width + 'px'), t.cssWidthAndHeight && 'width' !== t.cssWidthAndHeight || (c.style.height = h + 'px'), W = h + P.wrapperTop + P.wrapperBottom)
        } else if (t.scrollContainer) c.style.width = '',
        c.style.height = '',
        l = P.slides[0].getWidth(!0, t.roundLengths),
        d = P.slides[0].getHeight(!0, t.roundLengths),
        W = V ? l : d,
        c.style.width = l + 'px',
        c.style.height = d + 'px',
        I = V ? l : d;
         else {
          if (t.calculateHeight) {
            for (a = 0, d = 0, V || (P.container.style.height = ''), c.style.height = '', u = 0; u < P.slides.length; u++) P.slides[u].style.height = '',
            a = Math.max(P.slides[u].getHeight(!0), a),
            V || (d += P.slides[u].getHeight(!0));
            s = a,
            P.height = s,
            V ? d = s : (G = s, P.container.style.height = G + 'px')
          } else s = V ? P.height : P.height / t.slidesPerView,
          t.roundLengths && (s = Math.ceil(s)),
          d = V ? P.height : P.slides.length * s;
          for (o = V ? P.width / t.slidesPerView : P.width, t.roundLengths && (o = Math.ceil(o)), l = V ? P.slides.length * o : P.width, I = V ? o : s, t.offsetSlidesBefore > 0 && (V ? P.wrapperLeft = I * t.offsetSlidesBefore : P.wrapperTop = I * t.offsetSlidesBefore), t.offsetSlidesAfter > 0 && (V ? P.wrapperRight = I * t.offsetSlidesAfter : P.wrapperBottom = I * t.offsetSlidesAfter), t.offsetPxBefore > 0 && (V ? P.wrapperLeft = t.offsetPxBefore : P.wrapperTop = t.offsetPxBefore), t.offsetPxAfter > 0 && (V ? P.wrapperRight = t.offsetPxAfter : P.wrapperBottom = t.offsetPxAfter), t.centeredSlides && (V ? (P.wrapperLeft = (G - I) / 2, P.wrapperRight = (G - I) / 2)  : (P.wrapperTop = (G - I) / 2, P.wrapperBottom = (G - I) / 2)), V ? (P.wrapperLeft > 0 && (c.style.paddingLeft = P.wrapperLeft + 'px'), P.wrapperRight > 0 && (c.style.paddingRight = P.wrapperRight + 'px'))  : (P.wrapperTop > 0 && (c.style.paddingTop = P.wrapperTop + 'px'), P.wrapperBottom > 0 && (c.style.paddingBottom = P.wrapperBottom + 'px')), W = V ? l + P.wrapperRight + P.wrapperLeft : d + P.wrapperTop + P.wrapperBottom, parseFloat(l) > 0 && (!t.cssWidthAndHeight || 'height' === t.cssWidthAndHeight) && (c.style.width = l + 'px'), parseFloat(d) > 0 && (!t.cssWidthAndHeight || 'width' === t.cssWidthAndHeight) && (c.style.height = d + 'px'), p = 0, P.snapGrid = [
          ], P.slidesGrid = [
          ], u = 0; u < P.slides.length; u++) P.snapGrid.push(p),
          P.slidesGrid.push(p),
          p += I,
          parseFloat(o) > 0 && (!t.cssWidthAndHeight || 'height' === t.cssWidthAndHeight) && (P.slides[u].style.width = o + 'px'),
          parseFloat(s) > 0 && (!t.cssWidthAndHeight || 'width' === t.cssWidthAndHeight) && (P.slides[u].style.height = s + 'px')
        }
        P.initialized ? (P.callPlugins('onInit'), t.onInit && P.fireCallback(t.onInit, P))  : (P.callPlugins('onFirstInit'), t.onFirstInit && P.fireCallback(t.onFirstInit, P)),
        P.initialized = !0
      }
    },
    P.reInit = function (e) {
      P.init(!0, e)
    },
    P.resizeFix = function (e) {
      P.callPlugins('beforeResizeFix'),
      P.init(t.resizeReInit || e),
      t.freeMode ? P.getWrapperTranslate() < - r() && (P.setWrapperTransition(0), P.setWrapperTranslate( - r()))  : (P.swipeTo(t.loop ? P.activeLoopIndex : P.activeIndex, 0, !1), t.autoplay && (P.support.transitions && 'undefined' != typeof et ? 'undefined' != typeof et && (clearTimeout(et), et = void 0, P.startAutoplay())  : 'undefined' != typeof tt && (clearInterval(tt), tt = void 0, P.startAutoplay()))),
      P.callPlugins('afterResizeFix')
    },
    P.destroy = function (e) {
      var i = P.h.removeEventListener,
      n = 'wrapper' === t.eventTarget ? P.wrapper : P.container;
      if (P.browser.ie10 || P.browser.ie11 ? (i(n, P.touchEvents.touchStart, g), i(document, P.touchEvents.touchMove, w), i(document, P.touchEvents.touchEnd, m))  : (P.support.touch && (i(n, 'touchstart', g), i(n, 'touchmove', w), i(n, 'touchend', m)), t.simulateTouch && (i(n, 'mousedown', g), i(document, 'mousemove', w), i(document, 'mouseup', m))), t.autoResize && i(window, 'resize', P.resizeFix), a(), t.paginationClickable && b(), t.mousewheelControl && P._wheelEvent && i(P.container, P._wheelEvent, d), t.keyboardControl && i(document, 'keydown', l), t.autoplay && P.stopAutoplay(), e) {
        P.wrapper.removeAttribute('style');
        for (var r = 0; r < P.slides.length; r++) P.slides[r].removeAttribute('style')
      }
      P.callPlugins('onDestroy'),
      window.jQuery && window.jQuery(P.container).data('swiper') && window.jQuery(P.container).removeData('swiper'),
      window.Zepto && window.Zepto(P.container).data('swiper') && window.Zepto(P.container).removeData('swiper'),
      P = null
    },
    P.disableKeyboardControl = function () {
      t.keyboardControl = !1,
      P.h.removeEventListener(document, 'keydown', l)
    },
    P.enableKeyboardControl = function () {
      t.keyboardControl = !0,
      P.h.addEventListener(document, 'keydown', l)
    };
    var j = (new Date).getTime();
    if (P.disableMousewheelControl = function () {
      return P._wheelEvent ? (t.mousewheelControl = !1, P.h.removeEventListener(P.container, P._wheelEvent, d), !0)  : !1
    }, P.enableMousewheelControl = function () {
      return P._wheelEvent ? (t.mousewheelControl = !0, P.h.addEventListener(P.container, P._wheelEvent, d), !0)  : !1
    }, t.grabCursor) {
      var K = P.container.style;
      K.cursor = 'move',
      K.cursor = 'grab',
      K.cursor = '-moz-grab',
      K.cursor = '-webkit-grab'
    }
    P.allowSlideClick = !0,
    P.allowLinks = !0;
    var Q,
    Z,
    U,
    $ = !1,
    J = !0;
    P.swipeNext = function (e, i) {
      'undefined' == typeof e && (e = !0),
      !i && t.loop && P.fixLoop(),
      !i && t.autoplay && P.stopAutoplay(!0),
      P.callPlugins('onSwipeNext');
      var n = P.getWrapperTranslate().toFixed(2),
      o = n;
      if ('auto' === t.slidesPerView) {
        for (var s = 0; s < P.snapGrid.length; s++) if ( - n >= P.snapGrid[s].toFixed(2) && - n < P.snapGrid[s + 1].toFixed(2)) {
          o = - P.snapGrid[s + 1];
          break
        }
      } else {
        var a = I * t.slidesPerGroup;
        o = - (Math.floor(Math.abs(n) / Math.floor(a)) * a + a)
      }
      return o < - r() && (o = - r()),
      o === n ? !1 : (y(o, 'next', {
        runCallbacks: e
      }), !0)
    },
    P.swipePrev = function (e, i) {
      'undefined' == typeof e && (e = !0),
      !i && t.loop && P.fixLoop(),
      !i && t.autoplay && P.stopAutoplay(!0),
      P.callPlugins('onSwipePrev');
      var n,
      r = Math.ceil(P.getWrapperTranslate());
      if ('auto' === t.slidesPerView) {
        n = 0;
        for (var o = 1; o < P.snapGrid.length; o++) {
          if ( - r === P.snapGrid[o]) {
            n = - P.snapGrid[o - 1];
            break
          }
          if ( - r > P.snapGrid[o] && - r < P.snapGrid[o + 1]) {
            n = - P.snapGrid[o];
            break
          }
        }
      } else {
        var s = I * t.slidesPerGroup;
        n = - (Math.ceil( - r / s) - 1) * s
      }
      return n > 0 && (n = 0),
      n === r ? !1 : (y(n, 'prev', {
        runCallbacks: e
      }), !0)
    },
    P.swipeReset = function (e) {
      'undefined' == typeof e && (e = !0),
      P.callPlugins('onSwipeReset');
      var i,
      n = P.getWrapperTranslate(),
      o = I * t.slidesPerGroup;
      if ( - r(), 'auto' === t.slidesPerView) {
        i = 0;
        for (var s = 0; s < P.snapGrid.length; s++) {
          if ( - n === P.snapGrid[s]) return;
          if ( - n >= P.snapGrid[s] && - n < P.snapGrid[s + 1]) {
            i = P.positions.diff > 0 ? - P.snapGrid[s + 1] : - P.snapGrid[s];
            break
          }
        }
        - n >= P.snapGrid[P.snapGrid.length - 1] && (i = - P.snapGrid[P.snapGrid.length - 1]),
        n <= - r() && (i = - r())
      } else i = 0 > n ? Math.round(n / o) * o : 0,
      n <= - r() && (i = - r());
      return t.scrollContainer && (i = 0 > n ? n : 0),
      i < - r() && (i = - r()),
      t.scrollContainer && G > I && (i = 0),
      i === n ? !1 : (y(i, 'reset', {
        runCallbacks: e
      }), !0)
    },
    P.swipeTo = function (e, i, n) {
      e = parseInt(e, 10),
      P.callPlugins('onSwipeTo', {
        index: e,
        speed: i
      }),
      t.loop && (e += P.loopedSlides);
      var o = P.getWrapperTranslate();
      if (!(e > P.slides.length - 1 || 0 > e)) {
        var s;
        return s = 'auto' === t.slidesPerView ? - P.slidesGrid[e] : - e * I,
        s < - r() && (s = - r()),
        s === o ? !1 : ('undefined' == typeof n && (n = !0), y(s, 'to', {
          index: e,
          speed: i,
          runCallbacks: n
        }), !0)
      }
    },
    P._queueStartCallbacks = !1,
    P._queueEndCallbacks = !1,
    P.updateActiveSlide = function (e) {
      if (P.initialized && 0 !== P.slides.length) {
        P.previousIndex = P.activeIndex,
        'undefined' == typeof e && (e = P.getWrapperTranslate()),
        e > 0 && (e = 0);
        var i;
        if ('auto' === t.slidesPerView) {
          if (P.activeIndex = P.slidesGrid.indexOf( - e), P.activeIndex < 0) {
            for (i = 0; i < P.slidesGrid.length - 1 && !( - e > P.slidesGrid[i] && - e < P.slidesGrid[i + 1]); i++);
            var n = Math.abs(P.slidesGrid[i] + e),
            r = Math.abs(P.slidesGrid[i + 1] + e);
            P.activeIndex = r >= n ? i : i + 1
          }
        } else P.activeIndex = Math[t.visibilityFullFit ? 'ceil' : 'round']( - e / I);
        if (P.activeIndex === P.slides.length && (P.activeIndex = P.slides.length - 1), P.activeIndex < 0 && (P.activeIndex = 0), P.slides[P.activeIndex]) {
          if (P.calcVisibleSlides(e), P.support.classList) {
            var o;
            for (i = 0; i < P.slides.length; i++) o = P.slides[i],
            o.classList.remove(t.slideActiveClass),
            P.visibleSlides.indexOf(o) >= 0 ? o.classList.add(t.slideVisibleClass)  : o.classList.remove(t.slideVisibleClass);
            P.slides[P.activeIndex].classList.add(t.slideActiveClass)
          } else {
            var s = new RegExp('\\s*' + t.slideActiveClass),
            a = new RegExp('\\s*' + t.slideVisibleClass);
            for (i = 0; i < P.slides.length; i++) P.slides[i].className = P.slides[i].className.replace(s, '').replace(a, ''),
            P.visibleSlides.indexOf(P.slides[i]) >= 0 && (P.slides[i].className += ' ' + t.slideVisibleClass);
            P.slides[P.activeIndex].className += ' ' + t.slideActiveClass
          }
          if (t.loop) {
            var l = P.loopedSlides;
            P.activeLoopIndex = P.activeIndex - l,
            P.activeLoopIndex >= P.slides.length - 2 * l && (P.activeLoopIndex = P.slides.length - 2 * l - P.activeLoopIndex),
            P.activeLoopIndex < 0 && (P.activeLoopIndex = P.slides.length - 2 * l + P.activeLoopIndex),
            P.activeLoopIndex < 0 && (P.activeLoopIndex = 0)
          } else P.activeLoopIndex = P.activeIndex;
          t.pagination && P.updatePagination(e)
        }
      }
    },
    P.createPagination = function (e) {
      if (t.paginationClickable && P.paginationButtons && b(), P.paginationContainer = t.pagination.nodeType ? t.pagination : i(t.pagination) [0], t.createPagination) {
        var n = '',
        r = P.slides.length,
        o = r;
        t.loop && (o -= 2 * P.loopedSlides);
        for (var s = 0; o > s; s++) n += '<' + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + '>';
        P.paginationContainer.innerHTML = n
      }
      P.paginationButtons = i('.' + t.paginationElementClass, P.paginationContainer),
      e || P.updatePagination(),
      P.callPlugins('onCreatePagination'),
      t.paginationClickable && C()
    },
    P.updatePagination = function (e) {
      if (t.pagination && !(P.slides.length < 1)) {
        var n = i('.' + t.paginationActiveClass, P.paginationContainer);
        if (n) {
          var r = P.paginationButtons;
          if (0 !== r.length) {
            for (var o = 0; o < r.length; o++) r[o].className = t.paginationElementClass;
            var s = t.loop ? P.loopedSlides : 0;
            if (t.paginationAsRange) {
              P.visibleSlides || P.calcVisibleSlides(e);
              var a,
              l = [
              ];
              for (a = 0; a < P.visibleSlides.length; a++) {
                var d = P.slides.indexOf(P.visibleSlides[a]) - s;
                t.loop && 0 > d && (d = P.slides.length - 2 * P.loopedSlides + d),
                t.loop && d >= P.slides.length - 2 * P.loopedSlides && (d = P.slides.length - 2 * P.loopedSlides - d, d = Math.abs(d)),
                l.push(d)
              }
              for (a = 0; a < l.length; a++) r[l[a]] && (r[l[a]].className += ' ' + t.paginationVisibleClass);
              t.loop ? void 0 !== r[P.activeLoopIndex] && (r[P.activeLoopIndex].className += ' ' + t.paginationActiveClass)  : r[P.activeIndex] && (r[P.activeIndex].className += ' ' + t.paginationActiveClass)
            } else t.loop ? r[P.activeLoopIndex] && (r[P.activeLoopIndex].className += ' ' + t.paginationActiveClass + ' ' + t.paginationVisibleClass)  : r[P.activeIndex] && (r[P.activeIndex].className += ' ' + t.paginationActiveClass + ' ' + t.paginationVisibleClass)
          }
        }
      }
    },
    P.calcVisibleSlides = function (e) {
      var i = [
      ],
      n = 0,
      r = 0,
      o = 0;
      V && P.wrapperLeft > 0 && (e += P.wrapperLeft),
      !V && P.wrapperTop > 0 && (e += P.wrapperTop);
      for (var s = 0; s < P.slides.length; s++) {
        n += r,
        r = 'auto' === t.slidesPerView ? V ? P.h.getWidth(P.slides[s], !0, t.roundLengths)  : P.h.getHeight(P.slides[s], !0, t.roundLengths)  : I,
        o = n + r;
        var a = !1;
        t.visibilityFullFit ? (n >= - e && - e + G >= o && (a = !0), - e >= n && o >= - e + G && (a = !0))  : (o > - e && - e + G >= o && (a = !0), n >= - e && - e + G > n && (a = !0), - e > n && o > - e + G && (a = !0)),
        a && i.push(P.slides[s])
      }
      0 === i.length && (i = [
        P.slides[P.activeIndex]
      ]),
      P.visibleSlides = i
    };
    var et,
    tt;
    P.startAutoplay = function () {
      if (P.support.transitions) {
        if ('undefined' != typeof et) return !1;
        if (!t.autoplay) return;
        P.callPlugins('onAutoplayStart'),
        t.onAutoplayStart && P.fireCallback(t.onAutoplayStart, P),
        M()
      } else {
        if ('undefined' != typeof tt) return !1;
        if (!t.autoplay) return;
        P.callPlugins('onAutoplayStart'),
        t.onAutoplayStart && P.fireCallback(t.onAutoplayStart, P),
        tt = setInterval(function () {
          t.loop ? (P.fixLoop(), P.swipeNext(!0, !0))  : P.swipeNext(!0, !0) || (t.autoplayStopOnLast ? (clearInterval(tt), tt = void 0)  : P.swipeTo(0))
        }, t.autoplay)
      }
    },
    P.stopAutoplay = function (e) {
      if (P.support.transitions) {
        if (!et) return;
        et && clearTimeout(et),
        et = void 0,
        e && !t.autoplayDisableOnInteraction && P.wrapperTransitionEnd(function () {
          M()
        }),
        P.callPlugins('onAutoplayStop'),
        t.onAutoplayStop && P.fireCallback(t.onAutoplayStop, P)
      } else tt && clearInterval(tt),
      tt = void 0,
      P.callPlugins('onAutoplayStop'),
      t.onAutoplayStop && P.fireCallback(t.onAutoplayStop, P)
    },
    P.loopCreated = !1,
    P.removeLoopedSlides = function () {
      if (P.loopCreated) for (var e = 0; e < P.slides.length; e++) P.slides[e].getData('looped') === !0 && P.wrapper.removeChild(P.slides[e])
    },
    P.createLoop = function () {
      if (0 !== P.slides.length) {
        P.loopedSlides = 'auto' === t.slidesPerView ? t.loopedSlides || 1 : t.slidesPerView + t.loopAdditionalSlides,
        P.loopedSlides > P.slides.length && (P.loopedSlides = P.slides.length);
        var e,
        i = '',
        n = '',
        r = '',
        o = P.slides.length,
        s = Math.floor(P.loopedSlides / o),
        a = P.loopedSlides % o;
        for (e = 0; s * o > e; e++) {
          var l = e;
          if (e >= o) {
            var d = Math.floor(e / o);
            l = e - o * d
          }
          r += P.slides[l].outerHTML
        }
        for (e = 0; a > e; e++) n += T(t.slideDuplicateClass, P.slides[e].outerHTML);
        for (e = o - a; o > e; e++) i += T(t.slideDuplicateClass, P.slides[e].outerHTML);
        var p = i + r + A.innerHTML + r + n;
        for (A.innerHTML = p, P.loopCreated = !0, P.calcSlides(), e = 0; e < P.slides.length; e++) (e < P.loopedSlides || e >= P.slides.length - P.loopedSlides) && P.slides[e].setData('looped', !0);
        P.callPlugins('onCreateLoop')
      }
    },
    P.fixLoop = function () {
      var e;
      P.activeIndex < P.loopedSlides ? (e = P.slides.length - 3 * P.loopedSlides + P.activeIndex, P.swipeTo(e, 0, !1))  : ('auto' === t.slidesPerView && P.activeIndex >= 2 * P.loopedSlides || P.activeIndex > P.slides.length - 2 * t.slidesPerView) && (e = - P.slides.length + P.activeIndex + P.loopedSlides, P.swipeTo(e, 0, !1))
    },
    P.loadSlides = function () {
      var e = '';
      P.activeLoaderIndex = 0;
      for (var i = t.loader.slides, n = t.loader.loadAllSlides ? i.length : t.slidesPerView * (1 + t.loader.surroundGroups), r = 0; n > r; r++) e += 'outer' === t.loader.slidesHTMLType ? i[r] : '<' + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + r + '">' + i[r] + '</' + t.slideElement + '>';
      P.wrapper.innerHTML = e,
      P.calcSlides(!0),
      t.loader.loadAllSlides || P.wrapperTransitionEnd(P.reloadSlides, !0)
    },
    P.reloadSlides = function () {
      var e = t.loader.slides,
      i = parseInt(P.activeSlide().data('swiperindex'), 10);
      if (!(0 > i || i > e.length - 1)) {
        P.activeLoaderIndex = i;
        var n = Math.max(0, i - t.slidesPerView * t.loader.surroundGroups),
        r = Math.min(i + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
        if (i > 0) {
          var o = - I * (i - n);
          P.setWrapperTranslate(o),
          P.setWrapperTransition(0)
        }
        var s;
        if ('reload' === t.loader.logic) {
          P.wrapper.innerHTML = '';
          var a = '';
          for (s = n; r >= s; s++) a += 'outer' === t.loader.slidesHTMLType ? e[s] : '<' + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + s + '">' + e[s] + '</' + t.slideElement + '>';
          P.wrapper.innerHTML = a
        } else {
          var l = 1000,
          d = 0;
          for (s = 0; s < P.slides.length; s++) {
            var p = P.slides[s].data('swiperindex');
            n > p || p > r ? P.wrapper.removeChild(P.slides[s])  : (l = Math.min(p, l), d = Math.max(p, d))
          }
          for (s = n; r >= s; s++) {
            var u;
            l > s && (u = document.createElement(t.slideElement), u.className = t.slideClass, u.setAttribute('data-swiperindex', s), u.innerHTML = e[s], P.wrapper.insertBefore(u, P.wrapper.firstChild)),
            s > d && (u = document.createElement(t.slideElement), u.className = t.slideClass, u.setAttribute('data-swiperindex', s), u.innerHTML = e[s], P.wrapper.appendChild(u))
          }
        }
        P.reInit(!0)
      }
    },
    E()
  }
};

Swiper.prototype = {
  plugins: {
  },
  wrapperTransitionEnd: function (e, t) {
    'use strict';
    function i(a) {
      if (a.target === o && (e(r), r.params.queueEndCallbacks && (r._queueEndCallbacks = !1), !t)) for (n = 0; n < s.length; n++) r.h.removeEventListener(o, s[n], i)
    }
    var n,
    r = this,
    o = r.wrapper,
    s = [
      'webkitTransitionEnd',
      'transitionend',
      'oTransitionEnd',
      'MSTransitionEnd',
      'msTransitionEnd'
    ];
    if (e) for (n = 0; n < s.length; n++) r.h.addEventListener(o, s[n], i)
  },
  getWrapperTranslate: function (e) {
    'use strict';
    var t,
    i,
    n,
    r,
    o = this.wrapper;
    return 'undefined' == typeof e && (e = 'horizontal' === this.params.mode ? 'x' : 'y'),
    this.support.transforms && this.params.useCSS3Transforms ? (n = window.getComputedStyle(o, null), window.WebKitCSSMatrix ? r = new WebKitCSSMatrix('none' === n.webkitTransform ? '' : n.webkitTransform)  : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'), t = r.toString().split(',')), 'x' === e && (i = window.WebKitCSSMatrix ? r.m41 : parseFloat(16 === t.length ? t[12] : t[4])), 'y' === e && (i = window.WebKitCSSMatrix ? r.m42 : parseFloat(16 === t.length ? t[13] : t[5])))  : ('x' === e && (i = parseFloat(o.style.left, 10) || 0), 'y' === e && (i = parseFloat(o.style.top, 10) || 0)),
    i || 0
  },
  setWrapperTranslate: function (e, t, i) {
    'use strict';
    var n,
    r = this.wrapper.style,
    o = {
      x: 0,
      y: 0,
      z: 0
    };
    3 === arguments.length ? (o.x = e, o.y = t, o.z = i)  : ('undefined' == typeof t && (t = 'horizontal' === this.params.mode ? 'x' : 'y'), o[t] = e),
    this.support.transforms && this.params.useCSS3Transforms ? (n = this.support.transforms3d ? 'translate3d(' + o.x + 'px, ' + o.y + 'px, ' + o.z + 'px)' : 'translate(' + o.x + 'px, ' + o.y + 'px)', r.webkitTransform = r.MsTransform = r.msTransform = r.MozTransform = r.OTransform = r.transform = n)  : (r.left = o.x + 'px', r.top = o.y + 'px'),
    this.callPlugins('onSetWrapperTransform', o),
    this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, o)
  },
  setWrapperTransition: function (e) {
    'use strict';
    var t = this.wrapper.style;
    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1000 + 's',
    this.callPlugins('onSetWrapperTransition', {
      duration: e
    }),
    this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
  },
  h: {
    getWidth: function (e, t, i) {
      'use strict';
      var n = window.getComputedStyle(e, null).getPropertyValue('width'),
      r = parseFloat(n);
      return (isNaN(r) || n.indexOf('%') > 0 || 0 > r) && (r = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-right'))),
      t && (r += parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-right'))),
      i ? Math.ceil(r)  : r
    },
    getHeight: function (e, t, i) {
      'use strict';
      if (t) return e.offsetHeight;
      var n = window.getComputedStyle(e, null).getPropertyValue('height'),
      r = parseFloat(n);
      return (isNaN(r) || n.indexOf('%') > 0 || 0 > r) && (r = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-bottom'))),
      t && (r += parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(e, null).getPropertyValue('padding-bottom'))),
      i ? Math.ceil(r)  : r
    },
    getOffset: function (e) {
      'use strict';
      var t = e.getBoundingClientRect(),
      i = document.body,
      n = e.clientTop || i.clientTop || 0,
      r = e.clientLeft || i.clientLeft || 0,
      o = window.pageYOffset || e.scrollTop,
      s = window.pageXOffset || e.scrollLeft;
      return document.documentElement && !window.pageYOffset && (o = document.documentElement.scrollTop, s = document.documentElement.scrollLeft),
      {
        top: t.top + o - n,
        left: t.left + s - r
      }
    },
    windowWidth: function () {
      'use strict';
      return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
    },
    windowHeight: function () {
      'use strict';
      return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
    },
    windowScroll: function () {
      'use strict';
      return 'undefined' != typeof pageYOffset ? {
        left: window.pageXOffset,
        top: window.pageYOffset
      }
       : document.documentElement ? {
        left: document.documentElement.scrollLeft,
        top: document.documentElement.scrollTop
      }
       : void 0
    },
    addEventListener: function (e, t, i, n) {
      'use strict';
      'undefined' == typeof n && (n = !1),
      e.addEventListener ? e.addEventListener(t, i, n)  : e.attachEvent && e.attachEvent('on' + t, i)
    },
    removeEventListener: function (e, t, i, n) {
      'use strict';
      'undefined' == typeof n && (n = !1),
      e.removeEventListener ? e.removeEventListener(t, i, n)  : e.detachEvent && e.detachEvent('on' + t, i)
    }
  },
  setTransform: function (e, t) {
    'use strict';
    var i = e.style;
    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
  },
  setTranslate: function (e, t) {
    'use strict';
    var i = e.style,
    n = {
      x: t.x || 0,
      y: t.y || 0,
      z: t.z || 0
    },
    r = this.support.transforms3d ? 'translate3d(' + n.x + 'px,' + n.y + 'px,' + n.z + 'px)' : 'translate(' + n.x + 'px,' + n.y + 'px)';
    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = r,
    this.support.transforms || (i.left = n.x + 'px', i.top = n.y + 'px')
  },
  setTransition: function (e, t) {
    'use strict';
    var i = e.style;
    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t + 'ms'
  },
  support: {
    touch: window.Modernizr && Modernizr.touch === !0 || function () {
      'use strict';
      return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch)
    }(),
    transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
      'use strict';
      var e = document.createElement('div').style;
      return 'webkitPerspective' in e || 'MozPerspective' in e || 'OPerspective' in e || 'MsPerspective' in e || 'perspective' in e
    }(),
    transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
      'use strict';
      var e = document.createElement('div').style;
      return 'transform' in e || 'WebkitTransform' in e || 'MozTransform' in e || 'msTransform' in e || 'MsTransform' in e || 'OTransform' in e
    }(),
    transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
      'use strict';
      var e = document.createElement('div').style;
      return 'transition' in e || 'WebkitTransition' in e || 'MozTransition' in e || 'msTransition' in e || 'MsTransition' in e || 'OTransition' in e
    }(),
    classList: function () {
      'use strict';
      var e = document.createElement('div');
      return 'classList' in e
    }()
  },
  browser: {
    ie8: function () {
      'use strict';
      var e = - 1;
      if ('Microsoft Internet Explorer' === navigator.appName) {
        var t = navigator.userAgent,
        i = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
        null !== i.exec(t) && (e = parseFloat(RegExp.$1))
      }
      return - 1 !== e && 9 > e
    }(),
    ie10: window.navigator.msPointerEnabled,
    ie11: window.navigator.pointerEnabled
  }
},
(window.jQuery || window.Zepto) && !function (e) {
  'use strict';
  e.fn.swiper = function (t) {
    var i;
    return this.each(function (n) {
      var r = e(this),
      o = new Swiper(r[0], t);
      n || (i = o),
      r.data('swiper', o)
    }),
    i
  }
}(window.jQuery || window.Zepto),
'undefined' != typeof module && (module.exports = Swiper),
'function' == typeof define && define.amd && define([], function () {
  'use strict';
  return Swiper
});

module.exports = Swiper;
