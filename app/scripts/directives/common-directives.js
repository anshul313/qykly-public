/*shweta
*hide side left menu
*/

angular.module('sbAdminApp')
    .directive('togglesidnav', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).on('click', function() {
        if ($('body').hasClass('nav-md')) {
            $('#sidebar-menu').find('li.active ul').hide();
            $('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
        } else {
            $('#sidebar-menu').find('li.active-sm ul').show();
            $('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $('body').toggleClass('nav-md nav-sm');

    });
  
        }
    };
});

angular.module('sbAdminApp')
    .directive('select2', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).select2({
              placeholder: "Select a category",
              allowClear: true
            });
        }
    };
});