let CUSTOM_COLLECTION = {
    init: function () {
        //Collection Content Collapse Control
        this.collection_content_collapse_control();

        //Collection Sidebar Scroll Control
        this.collection_sidebar_scroll_control();
    },

    // Collection Content Collapse Control
    collection_content_collapse_control: function () {
        jQuery(document).ready(function ($) {
            // Check if the screen width is less than or equal to 768 pixels (adjust as needed)
            if ($(window).width() <= 768) {
                let $description_areas = $('.collection-area .content-area .description-area');

                $description_areas.each(function () {
                    let $this = $(this);
                    let lineHeight = parseInt($this.css("line-height"));
                    let contentHeight = $this.height();
                    let maxLines = 3; // Adjust this value to control the number of lines to display

                    if (contentHeight > lineHeight * maxLines) {
                        $this.addClass('collapse');
                    }
                });

                $('.icon-collapse').on('click', function () {
                    $(this).parent('.description-area').toggleClass('collapse');
                });
            }
        });
    },

    //Collection Sidebar Scroll Control
    collection_sidebar_scroll_control: function () {
        jQuery(document).ready(function ($) {
            // Select relevant elements
            const $sidebar_collection_item = $('.collection-area .sidebar-area .category-item');
            const $group_collection_area = $('.group-collection-area');
            const $first_icon_bar_area = $('.first-bar-icon');
            const $second_icon_bar_area = $('.second-bar-icon');
            const $sunday_overlay = $('.sunday-overlay');


            // Scroll event listener
            $(window).on('scroll', function () {
                const windowScrollTop = $(window).scrollTop();

                $group_collection_area.each(function (index) {
                    const $this = $(this);
                    const $sidebar_item = $sidebar_collection_item.eq(index);

                    if (windowScrollTop > $this.offset().top - 60) {
                        // Remove "active" class from all sidebar items
                        $sidebar_collection_item.removeClass('active');

                        // Add "active" class to the corresponding sidebar item
                        $sidebar_item.addClass('active');
                    }
                });
            });

            // Click event for sidebar items
            $sidebar_collection_item.on('click', function () {
                let $this_id = $(this).children().data('id');
                let $target_element = $('#' + $this_id);

                if ($target_element.length > 0) {
                    let target_element_offset_top = $target_element.offset().top - 50;
                    // Smooth scroll to the clicked element
                    $('html, body').animate({ scrollTop: target_element_offset_top }, 'linear');
                }
            });

            // Click event for icon bar mobile
            function toggleClasses($element, ...classes) {
                $element.toggleClass(...classes);
            }

            // Function to toggle "toggle-open" class on the body element
            function toggleBodyClass() {
                $('body').toggleClass('toggle-open');
            }

            // Click event for icon bar mobile
            $first_icon_bar_area.on('click', function () {
                toggleClasses($(this).parent(), 'toggle-open');
                toggleClasses($(this).parents('.collection-area'), 'toggle-open');
                toggleBodyClass(); // Add "toggle-open" class to body
            });

            $second_icon_bar_area.on('click', function () {
                toggleClasses($(this).parents('.sidebar-area, .collection-area'), 'toggle-open');
                toggleBodyClass(); // Add "toggle-open" class to body
            });

            $sunday_overlay.on('click', function () {
                const $collectionArea = $(this).parents('.collection-area');
                toggleClasses($collectionArea, 'toggle-open');
                toggleClasses($collectionArea.find('.sidebar-area'), 'toggle-open');
                toggleBodyClass(); // Add "toggle-open" class to body
            });

        });
    },
};

CUSTOM_COLLECTION.init();
