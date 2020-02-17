/*
 * @Author: qtx
 * @Date: 2019-08-14 15:15:37
 * @LastEditors: qtx
 * @LastEditTime: 2019-10-17 17:21:24
 * @Description:
 */
$(function() {
  var btn = false
  $('.navbar-toggle').on('click', function() {
    if (!btn) {
      $('#navbar1').removeClass('hidden')
    } else {
      $('#navbar1').addClass('hidden')
    }
    btn = !btn
  })

  $('.backToTop').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500
    )
  })
})

$('#StranLink').click(function() {
  changePic()
})

function refreshRem() {
  var html = $('html')[0]
  var width = window.innerWidth
  var fontSize = 10 * (width / 1920)

  html.style.fontSize = fontSize + 'px'
}

function resize() {
  w = $(window).width()
  h = $(window).height()
  if (w > 767) {
    $('.logo_fan1_a').css('display', 'none')
    $('.logo').css('display', 'none')
    // $('#navbar1').addClass('hidden')
  } else {
    // $('#navbar1').removeClass('hidden')
    $('.logo_fan1_a').css('display', 'none')
    $('.logo').css('display', 'none')
    var logo_w
    logo_w = (180 / 640) * w
    $('.logo_fan1_a').css('width', logo_w)
    $('.logo_fan1_a').css('display', 'inline-block')
    $('.logo').css('display', 'inline-block')
  }
  if (w > 767 && w < 1200) {
    var logo_H
    logo_H = (70 / 768) * w
    $('.logo_fan2').css('height', logo_H)
    $('.logo_fan').css('height', logo_H)
  } else if (w >= 1200) {
    var logo_H
    logo_H = (70 / 768) * 1200
    $('.logo_fan2').css('height', logo_H)
    $('.logo_fan').css('height', logo_H)
  }
}

$(window).scroll(function() {
  // $('#navbar1').addClass('hidden');

  if ($(this).scrollTop() > 300) {
    $('.backToTop').show()
  } else {
    $('.backToTop').hide()
  }
})

$(document).ready(function() {
  $(window).resize()
  $('.backToTop').hide()
  setTimeout(function() {
    resize()
  }, 200)

  setTimeout(function() {
    var t = $('#StranLink').text()
    if (t == '繁體中文') {
      $('.t-logo').addClass('hidden')
      $('.s-logo').removeClass('hidden')
      $('.orgs').removeClass('hidden')
      $('.ft').removeClass('hidden')
    } else if (t == '简体中文') {
      $('.s-logo').addClass('hidden')
      $('.t-logo').removeClass('hidden')
      // $('.orgs').addClass('hidden');
      $('.ft').addClass('hidden')
    }
  }, 50)
})

$(window).resize(function() {
  resize()
  refreshRem()
})
