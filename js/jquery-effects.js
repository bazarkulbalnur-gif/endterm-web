/* jquery-effects.js - jQuery selectors, traversal, events and effects */
$(function () {

    // 1) Back-to-top button: element selector + fadeIn/fadeOut + animate
    const $top = $('<button type="button" id="back-to-top" class="btn-wl" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>')
        .hide().appendTo('body');
    $(window).on('scroll', function () {                                  // jQuery event: scroll
        if ($(this).scrollTop() > 300) { $top.fadeIn(200); } else { $top.fadeOut(200); }
    });
    $top.on('click', function () { $('html, body').animate({ scrollTop: 0 }, 500); }); // jQuery event: click

    // 2) Animated counters on the home page: class selector + data attributes + animate()
    $('.stat-number').each(function () {
        const $el = $(this);
        const target = parseFloat($el.data('target'));
        const decimals = parseInt($el.data('decimals') || 0, 10);
        const suffix = $el.data('suffix') || '';
        $({ n: 0 }).animate({ n: target }, {
            duration: 1500,
            step: function (now) { $el.text(now.toFixed(decimals) + suffix); },
            complete: function () { $el.text(target.toFixed(decimals) + suffix); }
        });
    });

    // 3) Discover cards: descendant selector + closest() + find() + slideToggle()
    $('#discover-grid').on('click', '.learn-toggle', function () {
        const $btn = $(this);
        const $details = $btn.closest('.destination-card').find('.destination-details');
        const opening = !$btn.hasClass('is-open');          // state flag: slideToggle changes visibility immediately
        $btn.toggleClass('is-open', opening);
        $details.slideToggle(250);
        $btn.find('.learn-label').text(opening ? 'Show less' : 'Learn more');
    });

    // 4) FAQ accordion: next() + closest() + siblings() + slideToggle()/slideUp()
    $('#faq-list').on('click', '.faq-question', function () {
        const $question = $(this);
        $question.next('.faq-answer').slideToggle(200);
        const $item = $question.closest('.faq-item').toggleClass('open');
        $question.attr('aria-expanded', $item.hasClass('open'));
        $item.siblings('.faq-item').removeClass('open').find('.faq-answer').slideUp(200);
    });

    // 5) Hover lift on cards (delegated, works for cards created from arrays)
    $(document).on('mouseenter mouseleave', '.wl-card', function (event) {
        $(this).toggleClass('card-lift', event.type === 'mouseenter');
    });

    // 6) Attribute selector: external links open safely in a new tab
    $('a[href^="http"]').attr({ target: '_blank', rel: 'noopener noreferrer' });

    // 7) Dismiss the success message: fadeOut()
    $('#form-success').on('click', '.dismiss', function () { $(this).closest('#form-success').fadeOut(250); });
});
