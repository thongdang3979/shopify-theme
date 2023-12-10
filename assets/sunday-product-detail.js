let CUSTOM_MASTER_PRODUCT_DETAIL = {
    init: function () {
        // Product Detail Gallery Control 
        this.product_detail_gallery_control();

        // Product Info Collapse Control
        this.product_info_collapse_control();

        // Product Group Description Collapse Control
        this.product_group_description_collapse_control();

        // Product Aside Control
        this.product_aside_control();
    },

    // Product Detail Gallery Control 
    product_detail_gallery_control: function () {
        const fancyThumbsOptions = {
            compact: false,
            idle: false,
            dragToClose: true,
            animated: false,
            showClass: false,
            hideClass: false,
            Hash: false,
            Dots: false,
            Thumbs: {
                type: "classic",
                minCount: 1
            },

            contentClick: "iterateZoom",
            Images: {
                zoom: false,
                Panzoom: {
                    // panMode: 'mousemove',
                    // mouseMoveFactor: 1.1,
                    maxScale: 3,
                },
            },

            Carousel: {
                transition: 'crossfade',
                preload: 3,
            },
        };
        const productPreviewSlider = document.getElementById('productPreviewSlider');
        new Carousel(productPreviewSlider, fancyThumbsOptions, { Thumbs });
        Fancybox.bind('[data-fancybox="gallery"]', fancyThumbsOptions);

        function openLabortestThumb() {
            // Collect all image sources within .product-labortest
            const imageSources = $('.product-labortest img').map(function () {
                return $(this).data('src');
            }).get();

            // Prepare an array of objects with src and thumb properties
            const images = imageSources.map(function (src) {
                return { src: src };
            });

            // Show all images using Fancybox with the specified options
            Fancybox.show(images, fancyThumbsOptions);
        }

        // Attach the function to a button click event or any trigger you prefer
        $('.product-labortest .btn').on('click', function () {
            openLabortestThumb();
        });
    },

    // Product Info Collapse Control
    product_info_collapse_control: function () {
        jQuery(document).ready(function ($) {
            let $descriptionAreas = $('.product-description-area .product__description');
            let parentName = 'product-description-area';
            let maxLines = 10; // Adjust this value to control the number of lines to display
            collapseControl($descriptionAreas, parentName, maxLines);
        });
    },

    // Product Group Description Collapse Control
    product_group_description_collapse_control: function () {
        jQuery(document).ready(function ($) {
            let $groupDescriptionAreas = $('.product-group-content-area:not(.no-read-more-section) .description-area .content__description');
            let parentName = 'description-area';
            let groupMaxLines = 3;
            collapseControl($groupDescriptionAreas, parentName, groupMaxLines);
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

function collapseControl($areas, parentName, maxLines) {
    $areas.each(function () {
        let $area = $(this);
        let lineHeight = parseFloat($area.css("line-height"));
        let contentHeight = $area.height();

        if (contentHeight > lineHeight * maxLines) {
            $area.parent('.' + parentName).addClass('collapse');
        }
    });

    jQuery('.icon-collapse').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $parent = jQuery(this).parent('.' + parentName);
        $parent.toggleClass('collapse uncollapse');
    });
}

CUSTOM_MASTER_PRODUCT_DETAIL.init();
