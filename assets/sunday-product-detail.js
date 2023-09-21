let CUSTOM_MASTER_PRODUCT_DETAIL = {
    init: function () {
        // Product Detail Gallery Control 
        this.product_detail_gallery_control();

        // Product Description Collapse Control
        this.product_description_collapse_control();

        // Product Aside Control
        this.product_aside_control();
    },

    // Product Detail Gallery Control 
    product_detail_gallery_control: function () {
        const productPreviewSlider = document.getElementById('productPreviewSlider');
        const options = {
            Dots: false,
            Thumbs: {
                type: "classic",
            },
        };

        new Carousel(productPreviewSlider, options, { Thumbs });

        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
                type: "classic",
            },
        });
    },

    // Product Description Collapse Control
    product_description_collapse_control: function () {
        jQuery(document).ready(function ($) {
            if ($(window).width() > 768) {
                let $descriptionAreas = $('.product-description-area .product__description');
                let lineHeight = parseInt($descriptionAreas.css("line-height"));
                let contentHeight = $descriptionAreas.height();
                let maxLines = 3; // Adjust this value to control the number of lines to display

                if (contentHeight > lineHeight * maxLines) {
                    $descriptionAreas.parent('.product-description-area').addClass('collapse');
                }

                $('.icon-collapse').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var $parent = $(this).parent('.product-description-area');
                    if ($parent.hasClass('collapse')) {
                        $parent.removeClass('collapse').addClass('uncollapse');
                    } else {
                        $parent.removeClass('uncollapse').addClass('collapse');
                    }
                });
            }
        });
    },

    // Product Aside Control
    product_aside_control: function () {
        jQuery(document).ready(function ($) {
            const $product_aside = $('.product-aside-area');
            const $product_group_content_area = $('.product-group-content-area');
            const $aside_attribute_item = $('.aside-attribute-item');


            $(window).on('scroll', function () {
                const windowScrollTop = $(window).scrollTop();

                if (windowScrollTop > $product_aside.offset().top - 70) {
                    $product_aside.addClass('sticky');
                    $('.header-wrapper').css({ 'transform': 'translateY(-100px)' });
                } else {
                    $product_aside.removeClass('sticky');
                    $('.header-wrapper').css({ 'transform': 'none' });
                    $aside_attribute_item.removeClass('active');
                }

                $product_group_content_area.each(function (index) {
                    const $this = $(this);
                    const $next = $product_group_content_area.eq(index + 1);

                    const $sidebar_item = $aside_attribute_item.eq(index);

                    if (windowScrollTop > $this.offset().top - 60) {
                        // Remove "active" class from all sidebar items
                        $aside_attribute_item.removeClass('active');

                        // Add "active" class to the corresponding sidebar item
                        $sidebar_item.addClass('active');
                    }
                });
            });

            // Click event for sidebar items
            $aside_attribute_item.on('click', function () {
                let $this_id = $(this).children().data('id');
                let $target_element = $('#' + $this_id);

                if ($target_element.length > 0) {
                    let target_element_offset_top = $target_element.offset().top - 50;
                    // Smooth scroll to the clicked element
                    $('html, body').animate({ scrollTop: target_element_offset_top }, 'linear');
                }
            });
        });
    },
};

CUSTOM_MASTER_PRODUCT_DETAIL.init();
