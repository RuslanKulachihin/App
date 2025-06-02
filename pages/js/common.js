$(document).ready(function() {
    var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
    $("a").bind(clickHandler, function(e) {});

    $('.slider_main').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        dots: true,
        // arrows: false
    })
    $('.clientage_slider').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.slider_course').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        dots: true,
    })
    $('.slider_course_md').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });
    $('.slider_course_sm').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });

    $(".arrow_next").click(function() {
        $(".slider_main .slick-next").trigger("click");

    });
    $(".arrow_prev").click(function() {
        $(".slider_main .slick-prev").trigger("click");

    });


    $('.tog_nav').click(function() {
        $('.navigation').addClass('open');
    });
    $('.close_nav').click(function() {
        $('.navigation').removeClass('open');
    });

    $(".form_input").focus(function() {
        $(this).parent('.form_group').addClass('focus');
        $(this).parent('.form_group').addClass('active');

    }).blur(function() {
        if ($(this).val() == "") {
            $(this).parent('.form_group').removeClass('active');
            $(this).parent('.form_group').removeClass('decor');
        } else {
            if ($(this).hasClass('error')) {
                $(this).parent('.form_group').removeClass('decor');
            } else {

                $(this).parent('.form_group').addClass('decor');
            }
        }
        $(this).parent('.form_group').removeClass('focus');

    });

    // $("input[type='tel']").mask("+79 (999) 999-99-99");

    $("form").each(function() { //Change
        var th = $(this);
        th.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                var thisForm = $(form);
                var button = thisForm.find('.btn_st');
                console.log(thisForm.serialize());
 
                button.css('pointer-events', 'none');
                $.ajax({
                    type: "POST",
                    url: "/WebService/WebService.asmx/RequestData", //Change
                    data: th.serialize()
                }).done(function() {
                    // Done Functions
                    button.css('pointer-events', 'auto');
                    $.fancybox.close();
                    $.fancybox.open({
                        src: '#thanks',
                    });

                    // setTimeout(function() {
                    //     //submitForm = false
                    //     $.fancybox.close();
                    // }, 3000);

                    $('.form_group').removeClass('active');
                    $('.form_group').removeClass('decor');
                    th.trigger("reset");
                });
                return false;
            },

            success: function() {},
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

    $('.demo_courses_item a').click(function() {
        var course = $(this).parent().find('h5').text()
        $('.demo_input').val(course);
    });
    $('.section_download_content a').click(function() {
        var course = $('.description_course_text h1').text()
        $('.demo_input').val(course);
    });


    // $("[data-fancybox]").fancybox({
    //     afterClose: function() {
    //         $('input').val('')
    //     }
    // });
    AOS.init({
        duration: 1200,
        disable: 'mobile',
        once: true
    });

    if ($('.st_radio').is(':checked')) {
        var th = $(this);
        var trgt = th.data("target");
        $(".label_list").hide().removeClass('active').closest('.filter_column_item').addClass('hide').removeClass('visible');
        $(".label_list[data-target='" + trgt + "']").fadeIn().addClass('active').closest('.filter_column_item').addClass('visible').removeClass('hide');
    }

    $('.wrap_label').on('change', '.st_radio', function() {
        var th = $(this);
        var trgt = th.data("target");
        $(".label_list").hide().removeClass('active').closest('.filter_column_item').addClass('hide').removeClass('visible');
        $(".label_list[data-target='" + trgt + "']").fadeIn().addClass('active').closest('.filter_column_item').addClass('visible').removeClass('hide');
    })
    $(document).mousemove(function(e) {
        $('.description_section>img').parallax(-25, e);

    });

    if ($('.section_download').length > 0) {
        var StickyElement = function(node) {
            var doc = $(document),
                fixed = false,
                anchor = node.find('.section_download_height'),
                content = node.find('.section_download_fixed');

            var onScroll = function(e) {
                var docTop = doc.scrollTop(),
                    anchorTop = anchor.offset().top;

                console.log('scroll', docTop, anchorTop);
                if (docTop > anchorTop) {
                    if (!fixed) {
                        anchor.height(content.outerHeight());
                        content.addClass('fixed');
                        fixed = true;
                    }
                } else {
                    if (fixed) {
                        anchor.height(0);
                        content.removeClass('fixed');
                        fixed = false;
                    }
                }
            };

            $(window).on('scroll', onScroll);
        };

        var demo = new StickyElement($('.section_download'));
    }




});