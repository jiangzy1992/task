module.exports = function enterprise() {
  var i = i || {
  };

  i = {
    init: function () {
      var e = $('.strategy .swiper-wrapper>a').size();
      e > 6 && this.strategy()
    },
    strategy: function () {
      var e = new Swiper('.swiper-strategy', {
        paginationClickable: !0,
        slidesPerView: 6,
        loop: !0
      });
      $('.strategy').hover(function () {
        $('#banner-left3,#banner-right3').fadeIn()
      }, function () {
        $('#banner-left3,#banner-right3').fadeOut()
      }),
      $('#banner-left3').click(function () {
        e.swipePrev()
      }),
      $('#banner-right3').click(function () {
        e.swipeNext()
      })
    }
  };

  i.init();
}();
