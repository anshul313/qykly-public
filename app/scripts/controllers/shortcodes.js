'use strict';
/**
 * 
 */
angular.module('sbAdminApp').controller('shortcodesCtrl', function($scope, $http) {

	$scope.remarkField = {
		Select: null,
		availableOptions: ['Marketing', 'OTP', 'Miscellaneous'],
	};

});