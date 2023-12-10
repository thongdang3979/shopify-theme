let CUSTOM_MASTER_PRODUCT_SLIDER_BACKGROUNG = {
    init: function () {
        // Master Product Slider Background Control 
        this.master_product_slider_background_control();
    },

    // Master Product Slider Background Control 
    master_product_slider_background_control: function () {
        function generateSVGArrow(iconPath) {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">${iconPath}</svg>`;
        }

        jQuery(document).ready(function ($) {
            let $product_background_slider = $('.product-background-slider');

            if ($product_background_slider.length > 0) {
                const prevArrowIcon = generateSVGArrow(`
                    <path d="M6.39453 12.5903L15.4019 21.5215C15.478 21.5977 15.5637 21.6548 15.6589 21.6929C15.7542 21.731 15.8398 21.75 15.916 21.75C16.0303 21.75 16.1287 21.731 16.2112 21.6929C16.2937 21.6548 16.3667 21.5977 16.4302 21.5215L17.0205 21.0073C17.1729 20.8677 17.249 20.6868 17.249 20.4646C17.249 20.2424 17.1729 20.0552 17.0205 19.9028L9.11768 12L17.0205 4.17334C17.1729 4.021 17.249 3.83374 17.249 3.61157C17.249 3.3894 17.1729 3.2085 17.0205 3.06885L16.4302 2.55469C16.3667 2.47852 16.2842 2.42139 16.1826 2.3833C16.0811 2.34521 15.9922 2.32617 15.916 2.32617C15.8018 2.32617 15.7065 2.34521 15.6304 2.3833C15.5542 2.42139 15.478 2.47852 15.4019 2.55469L6.4707 11.4858C6.28027 11.6255 6.18188 11.7969 6.17554 12C6.16919 12.2031 6.24219 12.3999 6.39453 12.5903Z" fill="#CA9B63"/>
                `);

                const nextArrowIcon = generateSVGArrow(`
                  <path d="M17.6055 12.5903L8.59814 21.5215C8.52197 21.5977 8.43628 21.6548 8.34106 21.6929C8.24585 21.731 8.16016 21.75 8.08398 21.75C7.96973 21.75 7.87134 21.731 7.78882 21.6929C7.7063 21.6548 7.6333 21.5977 7.56982 21.5215L6.97949 21.0073C6.82715 20.8677 6.75098 20.6868 6.75098 20.4646C6.75098 20.2424 6.82715 20.0552 6.97949 19.9028L14.8823 12L6.97949 4.17334C6.82715 4.021 6.75098 3.83374 6.75098 3.61157C6.75098 3.3894 6.82715 3.2085 6.97949 3.06885L7.56982 2.55469C7.6333 2.47852 7.71582 2.42139 7.81738 2.3833C7.91895 2.34521 8.00781 2.32617 8.08398 2.32617C8.19824 2.32617 8.29346 2.34521 8.36963 2.3833C8.4458 2.42139 8.52197 2.47852 8.59814 2.55469L17.5293 11.4858C17.7197 11.6255 17.8181 11.7969 17.8245 12C17.8308 12.2031 17.7578 12.3999 17.6055 12.5903Z" fill="#CA9B63"/>
                `);

                $product_background_slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: $product_background_slider.data('slider') > 1 ? true : false,
                    arrows: true,
                    prevArrow: `<button class="slick-prev pull-left" aria-label="pull-left">${prevArrowIcon}</button>`,
                    nextArrow: `<button class="slick-next pull-right" aria-label="pull-right">${nextArrowIcon}</button>`,
                    lazyLoad: 'ondemand',
                });
            }
        });
    },
};

CUSTOM_MASTER_PRODUCT_SLIDER_BACKGROUNG.init();
