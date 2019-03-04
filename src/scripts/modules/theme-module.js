AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////

  var _headerFunctions = () => {
    $(window).on('load', function () {
      $('body').addClass('sample');
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _headerFunctions();
  };

  return {
    init: init
  };
})();
