'use strict'
var logoHeaderContent = $('.sidebar .logo-header').html()

function legendClickCallback(e) {
  for (
    var s = (e = e || window.event).target || e.srcElement;
    'LI' !== s.nodeName;

  )
    s = s.parentElement
  var a = s.parentElement,
    o = parseInt(a.classList[0].split('-')[0], 10),
    r = Chart.instances[o],
    l = Array.prototype.slice.call(a.children).indexOf(s)
  r.legend.options.onClick.call(r, e, r.legend.legendItems[l]),
    r.isDatasetVisible(l)
      ? s.classList.remove('hidden')
      : s.classList.add('hidden')
}
function readURL(e) {
  if (e.files && e.files[0]) {
    var s = new FileReader()
      ; (s.onload = function (s) {
        $(e)
          .parent('.input-file-image')
          .find('.img-upload-preview')
          .attr('src', s.target.result)
      }),
        s.readAsDataURL(e.files[0])
  }
}
function showPassword(e) {
  var s = $(e).parent().find('input')
  'password' === s.attr('type')
    ? s.attr('type', 'text')
    : s.attr('type', 'password')
}
$('.main-header .logo-header').html(logoHeaderContent),
  $('.nav-search .input-group > input')
    .focus(function (e) {
      $(this).parents().eq(2).addClass('focus')
    })
    .blur(function (e) {
      $(this).parents().eq(2).removeClass('focus')
    }),
  $(function () {
    let e = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      ;[...e].map(e => new bootstrap.Tooltip(e))
    let s = document.querySelectorAll('[data-bs-toggle="popover"]')
      ;[...s].map(e => new bootstrap.Popover(e)),
        layoutsColors(),
        customBackgroundColor()
  }),
  $(document).ready(function () {
    $('.btn-refresh-card').on('click', function () {
      var e = $(this).parents('.card')
      e.length &&
        (e.addClass('is-loading'),
          setTimeout(function () {
            e.removeClass('is-loading')
          }, 3e3))
    })
    var e = $('.sidebar .scrollbar')
    e.length > 0 && e.scrollbar()
    var s = $('.main-panel .content-scroll')
    s.length > 0 && s.scrollbar()
    var a = $('.messages-scroll')
    a.length > 0 && a.scrollbar()
    var o = $('.tasks-scroll')
    o.length > 0 && o.scrollbar()
    var r = $('.quick-scroll')
    r.length > 0 && r.scrollbar()
    var l = $('.message-notif-scroll')
    l.length > 0 && l.scrollbar()
    var n = $('.notif-scroll')
    n.length > 0 && n.scrollbar()
    var i = $('.quick-actions-scroll')
    i.length > 0 && i.scrollbar()
    var t = $('.dropdown-user-scroll')
    t.length > 0 && t.scrollbar(),
      $('#search-nav').on('shown.bs.collapse', function () {
        $('.nav-search .form-control').focus()
      })
    var c = !1,
      d = !1,
      g = !1,
      u = !1,
      p = !1,
      h = 0,
      m = 0,
      v = 0,
      f = 0,
      b = 0,
      C = 0
    if (!c) {
      var k = $('.sidenav-toggler')
      k.on('click', function () {
        1 == h
          ? ($('html').removeClass('nav_open'),
            k.removeClass('toggled'),
            (h = 0))
          : ($('html').addClass('nav_open'), k.addClass('toggled'), (h = 1))
      }),
        (c = !0)
    }
    if (!m) {
      var k = $('.quick-sidebar-toggler')
      k.on('click', function () {
        1 == h
          ? ($('html').removeClass('quick_sidebar_open'),
            $('.quick-sidebar-overlay').remove(),
            k.removeClass('toggled'),
            (m = 0))
          : ($('html').addClass('quick_sidebar_open'),
            k.addClass('toggled'),
            $('<div class="quick-sidebar-overlay"></div>').insertAfter(
              '.quick-sidebar'
            ),
            (m = 1))
      }),
        $('.wrapper').mouseup(function (e) {
          var s = $('.quick-sidebar')
          e.target.className == s.attr('class') ||
            s.has(e.target).length ||
            ($('html').removeClass('quick_sidebar_open'),
              $('.quick-sidebar-toggler').removeClass('toggled'),
              $('.quick-sidebar-overlay').remove(),
              (m = 0))
        }),
        $('.close-quick-sidebar').on('click', function () {
          $('html').removeClass('quick_sidebar_open'),
            $('.quick-sidebar-toggler').removeClass('toggled'),
            $('.quick-sidebar-overlay').remove(),
            (m = 0)
        }),
        (m = !0)
    }
    if (!d) {
      var w = $('.topbar-toggler')
      w.on('click', function () {
        1 == v
          ? ($('html').removeClass('topbar_open'),
            w.removeClass('toggled'),
            (v = 0))
          : ($('html').addClass('topbar_open'), w.addClass('toggled'), (v = 1))
      }),
        (d = !0)
    }
    if (!g) {
      var _ = $('.toggle-sidebar')
      $('.wrapper').hasClass('sidebar_minimize') &&
        (_.addClass('toggled'),
          _.html('<i class="gg-more-vertical-alt"></i>'),
          (f = 1)),
        _.on('click', function () {
          1 == f
            ? ($('.wrapper').removeClass('sidebar_minimize'),
              _.removeClass('toggled'),
              _.html('<i class="gg-menu-right"></i>'),
              (f = 0))
            : ($('.wrapper').addClass('sidebar_minimize'),
              _.addClass('toggled'),
              _.html('<i class="gg-more-vertical-alt"></i>'),
              (f = 1)),
            $(window).resize()
        }),
        (g = !0),
        (u = !0)
    }
    if (!p) {
      var q = $('.page-sidebar-toggler')
      q.on('click', function () {
        1 == b
          ? ($('html').removeClass('pagesidebar_open'),
            q.removeClass('toggled'),
            (b = 0))
          : ($('html').addClass('pagesidebar_open'),
            q.addClass('toggled'),
            (b = 1))
      }),
        $('.page-sidebar .back').on('click', function () {
          $('html').removeClass('pagesidebar_open'),
            q.removeClass('toggled'),
            (b = 0)
        }),
        (p = !0)
    }
    var y = $('.sidenav-overlay-toggler')
    $('.wrapper').hasClass('is-show') &&
      ((C = 1),
        y.addClass('toggled'),
        y.html('<i class="icon-options-vertical"></i>')),
      y.on('click', function () {
        1 == C
          ? ($('.wrapper').removeClass('is-show'),
            y.removeClass('toggled'),
            y.html('<i class="icon-menu"></i>'),
            (C = 0))
          : ($('.wrapper').addClass('is-show'),
            y.addClass('toggled'),
            y.html('<i class="icon-options-vertical"></i>'),
            (C = 1)),
          $(window).resize()
      }),
      (g = !0),
      $('.sidebar')
        .mouseenter(function () {
          1 != f || u
            ? $('.wrapper').removeClass('sidebar_minimize_hover')
            : ($('.wrapper').addClass('sidebar_minimize_hover'), (u = !0))
        })
        .mouseleave(function () {
          1 == f &&
            u &&
            ($('.wrapper').removeClass('sidebar_minimize_hover'), (u = !1))
        }),
      $('.nav-item a').on('click', function () {
        $(this).parent().find('.collapse').hasClass('show')
          ? $(this).parent().removeClass('submenu')
          : $(this).parent().addClass('submenu')
      }),
      $('.messages-contact .user a').on('click', function () {
        $('.tab-chat').addClass('show-chat')
      }),
      $('.messages-wrapper .return').on('click', function () {
        $('.tab-chat').removeClass('show-chat')
      }),
      $('[data-select="checkbox"]').change(function () {
        var e = $(this).attr('data-target')
        $(e).prop('checked', $(this).prop('checked'))
      }),
      $('.form-group-default .form-control')
        .focus(function () {
          $(this).parent().addClass('active')
        })
        .blur(function () {
          $(this).parent().removeClass('active')
        })

    $('#parent-level').change(function () {
      var selectedValue = $(this).val()

      $('.parent-card')
        .hide()
        .removeClass('green red blue yellow')
        .addClass('default-bg')

      $('.main-panel, .logo-header')
        .removeClass('green red blue yellow')
        .addClass('default-bg')

      if (selectedValue) {
        var selectedClass =
          selectedValue === 'level-1'
            ? 'green'
            : selectedValue === 'level-2'
              ? 'red'
              : selectedValue === 'level-3'
                ? 'blue'
                : selectedValue === 'level-4'
                  ? 'blue'
                  : selectedValue === 'level-5'
                    ? 'yellow'
                    : 'yellow'

        $('.parent-card[data-value="' + selectedValue + '"]')
          .show()
          .removeClass('default-bg')
          .addClass(selectedClass)

        $('.main-panel, .logo-header')
          .removeClass('default-bg')
          .addClass(selectedClass)
      }
    })

    $('#dateList').hide()

    $('#topDate').on('click', function () {
      $('#dateList').toggle()
    })

    // $('.date-list').on('click', function () {
    //   let day = $(this)
    //     .find('.date-div')
    //     .clone()
    //     .children()
    //     .remove()
    //     .end()
    //     .text()
    //     .trim()
    //   let weekday = $(this).find('.status.text-right').text().trim()

    //   $('.hidden-content').hide()

    //   let targetDiv = $(this).data('target')
    //   $(targetDiv).show()

    //   $('#topDate').text(`${day} ${weekday}`)

    //   $('#dateList').hide()
    // })

    $(".date-list").on("click", function() {
      // Get the URL from data-link attribute
      let url = $(this).data("link");

      // Navigate to the specified URL
      window.location.href = url;
  });
  }),
  $('.input-file-image input[type="file"').change(function () {
    readURL(this)
  }),
  $('.show-password').on('click', function () {
    showPassword(this)
  })
var containerSignIn = $('.container-login'),
  containerSignUp = $('.container-signup'),
  showSignIn = !0,
  showSignUp = !1
function changeContainer() {
  !0 == showSignIn
    ? containerSignIn.css('display', 'block')
    : containerSignIn.css('display', 'none'),
    !0 == showSignUp
      ? containerSignUp.css('display', 'block')
      : containerSignUp.css('display', 'none')
}
$('#show-signup').on('click', function () {
  ; (showSignUp = !0), (showSignIn = !1), changeContainer()
}),
  $('#show-signin').on('click', function () {
    ; (showSignUp = !1), (showSignIn = !0), changeContainer()
  }),
  changeContainer(),
  $('.form-floating-label .form-control').keyup(function () {
    '' !== $(this).val()
      ? $(this).addClass('filled')
      : $(this).removeClass('filled')
  })
