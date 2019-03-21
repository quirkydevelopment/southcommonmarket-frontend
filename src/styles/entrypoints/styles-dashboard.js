import '../main.scss';

// dashobard functions
$(window).on('load', function (event) {
  tabActive();
});

var tabActive = function() {
  var tabItem =  $('.dashboard-tab .tab-item');
  
  tabItem.each(function() {
    $(this).find('.tab-link').click(function() {
      tabItem.removeClass('active');
      $(this).parent().addClass('active');
    })
  });
}

var tabSidebarToggle = function () {
  // var sidebarTrigger = $
}

console.log('dashboard script');