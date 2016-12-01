$(document).ready(function () {

  $('.navbar li a').click(function(){
    $('.collapse').collapse('hide')
  })

  /*
   plugin: ScrollSpy - This plugin highlights linked based on
   which section you are on in a page
  */
  $('body').scrollspy({
    target: '.navbar'
  })

  var windowHeight = $(window).height()

  var windowWidth = $(window).width()

  /*
   If the viewport height is less than 1000px then the slide in animations are
   used for the portfolio and code items.
  */
  if (windowHeight <= 1000) {
    // I'm sure there's amore elegant way to do this but this will have to suffice for now :)
    var portfolioItem = $('.portfolio').find('.panel')

    var codeItem = $('.code').find('.panel')

    var skillItem = $('.skills').find('.panel')

    portfolioItem.css('visibility', 'hidden')

    codeItem.css('visibility', 'hidden')

    skillItem.css('visibility', 'hidden')

    // Makes Elements visible a based how the user is at in the page or navigation item they click on
    $('.navbar li').on('activate.bs.scrollspy', function () {
      var activeNavLink = $(this).find('a')

      if (activeNavLink.attr('href') === '#portfolio') {
        portfolioItem.css('visibility', 'visible').addClass('portfolio-item')
      }

      if (activeNavLink.attr('href') === '#code') {
        codeItem.css('visibility', 'visible').addClass('code-item')
      }

      if (activeNavLink.attr('href') === '#skills') {
        skillItem.css('visibility', 'visible').delay(500).addClass('skill-item')
      }
    })
  }

  // Bumps up the text in the banner image by 50 pixels so it will look right on mobile devices.
  if (windowWidth <= 768) {
    $('.name').attr('y', '200')
    $('.title').attr('y', '250')
  }
})
