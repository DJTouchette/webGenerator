/*
	Overflow by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Full screen header?
			fullScreenHeader: true,

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			// parallaxFactor: 10

	};

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1080px)',
		narrow: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		if (skel.vars.touch) {

			settings.parallax = false;
			$body.addClass('is-scroll');

		}

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly-middle').scrolly({
				speed: 1000,
				anchor: 'middle'
			});

			$('.scrolly').scrolly({
				speed: 1000,
				offset: function() { return (skel.breakpoint('mobile').active ? 70 : 190); }
			});

		// Full screen header.
			if (settings.fullScreenHeader) {

				var $header = $('#header');

				if ($header.length > 0) {

					var $header_header = $header.find('header');

					$window
						.on('resize.overflow_fsh', function() {

							if (skel.breakpoint('mobile').active)
								$header.css('padding', '');
							else {

								var p = Math.max(192, ($window.height() - $header_header.outerHeight()) / 2);
								$header.css('padding', p + 'px 0 ' + p + 'px 0');

							}

						})
						.trigger('resize.overflow_fsh');

					$window.load(function() {
						$window.trigger('resize.overflow_fsh');
					});

				}

			}

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (skel.vars.browser == 'ie'
				||	skel.vars.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				var $dummy = $(), $bg;

				$window
					.on('scroll.overflow_parallax', function() {

						// Adjust background position.
							$bg.css('background-position', 'center ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');

					})
					.on('resize.overflow_parallax', function() {

						// If we're in a situation where we need to temporarily disable parallax, do so.
							if (!skel.breakpoint('wide').active
							||	skel.breakpoint('narrow').active) {

								$body.css('background-position', '');
								$bg = $dummy;

							}

						// Otherwise, continue as normal.
							else
								$bg = $body;

						// Trigger scroll handler.
							$window.triggerHandler('scroll.overflow_parallax');

					})
					.trigger('resize.overflow_parallax');

			}

		// Poptrox.
			$('.gallery').poptrox({
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#0a1919',
				overlayOpacity: (skel.vars.IEVersion < 9 ? 0 : 0.75),
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 10,
				usePopupNav: true
			});

		var topOfDiv = $("#contact").offset().top;

		 $(window).scroll(function() {
			 if (window.innerWidth < 500) {
				if($(window).scrollTop() + 500 > topOfDiv) {
					console.log('maade it'); //scrolled past the other div?
          $("#contactUs").hide(); //reached the desired point -- show div
        }
				else {
					$("#contactUs").show();
				}
			 }

			 else {
        if($(window).scrollTop() + 300 > topOfDiv) { //scrolled past the other div?
          $("#contactUs").hide(); //reached the desired point -- show div
        }
				else {
					 $("#contactUs").show();
				}
			 }
    });

		$('#contactUs').click(function(){

			$("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000);

			$('#contactUs').hide();
		});

	function resetForm(form) {
    // clearing inputs
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            // case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;   
        }
    }

		var textForm = document.getElementById('testAreaContact');
		textForm.value = '';
    // clearing selects
    var selects = form.getElementsByTagName('select');
    for (var i = 0; i<selects.length; i++)
        selects[i].selectedIndex = 0;

    // clearing textarea
    var text = form.getElementsByTagName('textarea');
    for (var i = 0; i<text.length; i++)
        text[i].innerHTML= '';

    return false;
}

		function submitForm(data) {
			$.ajax({
				type: "POST",
				url: "https://leadgenapi.com/sendemail",
				// The key needs to match your method's input parameter (case-sensitive).
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(data){console.log(data);},
				failure: function(errMsg) {
						console.log(errMsg);
				}
			});
		}

		function addSuccess() {
			$('#contactMessage')
				.html('Thanks for your interest, one of our team members will contact you shortly.')
				.css('color', '#45c89f');

			var button = document.getElementById('contact-button');
			button.value = 'Message Sent!';
			button.disabled = true;
		}

		$('#contact-button').click(function(event) {
			event.preventDefault();
			
			var elements = document.getElementById("contact-form").elements;
    	var obj ={};

   		for(var i = 0 ; i < elements.length ; i++) {
        var item = elements.item(i);
				if (item.type !== 'checkbox') {
					obj[item.name] = item.value;
				}
        
				if (item.type === 'checkbox') {
					obj[item.name] = item.checked;
				}
    	}
			obj.building = 'Avenue 151';

			submitForm(obj);
			resetForm(document.getElementById("contact-form"));
			addSuccess();

		});

	});

})(jQuery);
