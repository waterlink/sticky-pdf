// Generated by CoffeeScript 1.6.2
(function() {
  ko.bindingHandlers.dblclick = {
    init: function(element, valueAccessor) {
      var $element,
        _this = this;

      $element = $(element);
      return $element.dblclick(function(e) {
        var data;

        data = {
          target: $element
        };
        return valueAccessor()(data, e);
      });
    }
  };

}).call(this);
