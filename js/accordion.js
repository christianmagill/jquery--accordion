(function($){

    $.fn.accordion = function (options) {

        var settings = $.extend({
            // Defaults
            slideSpeed: 'fast',
            itemClass: 'accordion__item',
            titleClass: 'accordion__item-title',
            contentClass: 'accordion__item-content',
            itemActiveClass: 'is-active'
        }, options);

        var titleClick = function (e) {
            e.preventDefault();
            $(this).parent()
                .toggleClass(settings.itemActiveClass)
                .find('> .' + settings.contentClass)
                .slideToggle(settings.slideSpeed);
        };

        return this.each(function () {
            var titleSelector = '> .' + settings.itemClass + ' > .' + settings.titleClass; // allows for accordions in accordions
            $(this).find('.' + settings.contentClass).hide();
            $(this).find(titleSelector).click(titleClick);
        });

    };

})(jQuery);