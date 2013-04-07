// Generated by CoffeeScript 1.6.2
(function() {
  ko.bindingHandlers.zoomable = {
    init: function(element, valueAccessor) {
      var $element,
        _this = this;

      $element = $(element);
      $element.addClass("zoomable");
      return $element.bind("mousewheel", function(e) {
        var event, inc, zoom;

        event = e.originalEvent;
        inc = event.wheelDelta / 120 * 0.05;
        zoom = $element.css("zoom");
        zoom = parseFloat(zoom) + parseFloat(inc);
        return $element.css({
          zoom: zoom
        });
      });
    }
  };

}).call(this);
