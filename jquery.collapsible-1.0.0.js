/**
 * jQuery collapsible plugin
 * Author: Martin Ejstrup ( ﾉ^ω^)ﾉﾟ
 */
(function ($) {
  $.fn.collapsible = function(options) {
    // Default settings.
    var settings = $.extend({
      showAnim: false, // showAnim: true requires a contentContainer;
      animSpeed: 500,
      triggerElement: null,
      content: null,
      wrapContent: false, 
      addHoverClasses: true
    }, options );
    
    return this.each(function() {
      var container = $(this);
      var collapsibleTrigger = _getTrigger(container)
      var contentContainer = container;
      if (settings.content != null) contentContainer = container.find(settings.content);
      
      // wrap content if needed
      if (settings.wrapContent == true) {
        contentContainer.wrapAll("<div class='collapsible-content'/>");
        contentContainer = container.find(".collapsible-content");
      }
      // hide content container
      if (settings.content != null) contentContainer.hide();
      // add container hover classes
      if (settings.addHoverClasses == true) container.hover(function() { $(this).addClass("hover"); }, function() { $(this).removeClass("hover") });
      container.addClass("collapsible collapsed");
      
      // add trigger functionality
      collapsibleTrigger.bind("click", function() {
        if (container.hasClass("collapsed")) {
          container.removeClass("collapsed");
          if (settings.showAnim != false && settings.content != null) contentContainer.slideDown(settings.animSpeed);
        }
        else {
          container.addClass("collapsed");
          if (settings.showAnim != false && settings.content != null) contentContainer.slideUp(settings.animSpeed);
        }
      });
    });
    
    // get the triggering element
    function _getTrigger(container) {
      var collapsibleTrigger;
      if (settings.triggerElement != null) collapsibleTrigger = container.find(settings.triggerElement);
      else collapsibleTrigger = container;
      return collapsibleTrigger;
    } 
    
  };
}(jQuery));
