(function () {

  fotgz = { // Start Master Object
    init: function() {

      this.renderMobileSiteNav();

    },
    renderMobileSiteNav: function () {

      // http://css-tricks.com/convert-menu-to-dropdown/
      // Create the dropdown base
      $('<select class="sitenav-mobile" />').insertAfter('ul.sitenav');

      var mobileNavLocation = 'header select.sitenav-mobile'
      
      // Create default 'Navigation'
      $('<option />', {
         'selected': 'selected',
         'value'   : '',
         'text'    : 'Navigation'
      }).appendTo(mobileNavLocation);
      
      // Create 'Home'
      $('<option />', {
         'value'   : '/',
         'text'    : 'Home'
      }).appendTo(mobileNavLocation);

      // Populate dropdown with menu items
      $('ul.sitenav a').each(function() {
       var el = $(this);
       $('<option />', {
           'value'   : el.attr('href'),
           'text'    : el.text()
       }).appendTo(mobileNavLocation);
      });
      
     // To make dropdown actually work
      $(mobileNavLocation).change(function() {
        window.location = $(this).find('option:selected').val();
      });
      
    }
  } // End Master Object

  $(document).ready(function () {
    fotgz.init();
  });

})();