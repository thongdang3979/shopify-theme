let MASTER_POPUP =
{
    init: function () {
        // Master Popup Control 
        this.master_popup_control();
    },

    // Master Popup Control 
    master_popup_control: function () {
        jQuery(document).ready(function ($) {
            if ($('.sunday-popup-area').length > 0) {
                if (!sessionStorage.getItem('popupShown')) {
                    $('.sunday-popup-area').addClass('popup-show');
                    $('body').css('overflow', 'hidden');
                }

                $(document).on('click', '.popup-close-button-area', function (e) {
                    e.preventDefault();

                    if (!sessionStorage.getItem('popupShown')) {
                        sessionStorage.setItem('popupShown', 'true');
                        $('body').css('overflow', '');
                        $('.sunday-popup-area').removeClass('popup-show');
                    }
                });
            }
        });
    },
};

MASTER_POPUP.init();
