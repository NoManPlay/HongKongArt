(function ($) {
    $('#imgs').imagesLoaded(function () {
        // Prepare layout options.
        var options = {
            itemWidth: 200, // Optional min width of a grid item
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            container: $('#imgs'), // Optional, used for some extra CSS styling
            offset: 0, // Optional, the distance between grid items
            outerOffset: 0, // Optional the distance from grid to parent
            flexibleWidth: 600 // Optional, the maximum width of a grid item
        };

        // Get a reference to your grid items.
        var handler = $('#imgs li');

        // Call the layout function.
        handler.wookmark(options);
    });
})(jQuery);