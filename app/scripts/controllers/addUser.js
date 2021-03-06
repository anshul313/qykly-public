'use strict';
/**
 * 
 */
angular.module('sbAdminApp').controller('addUserCtrl', function($scope, $http, api) {

	var url = api.addr();

	function reset() {
		$scope.name = '';
		$scope.username = '';
		$scope.password = '';
	}
	$scope.getuser = function() {
		// body...
		api.get('user', false, false, false, function(err, response) {
			if (err || response.error) {
				$scope.alerts = [{
					msg: response.userMessage || 'Server error! Are you connected to the internet?.',
					type: 'error'
				}];
			} else {
				$scope.modusers = response;
			}
		});
	};
	$scope.getuser();

	$scope.addUser = function(argument) {
		api.post('user', false, {
			name: $scope.name,
			username: $scope.username,
			password: $scope.password,
			role: $scope.role
		}, function(err, response) {
			if (err || response.error) {
				$scope.alerts = [{
					msg: response.userMessage || 'Server error! Are you connected to the internet?.',
					type: 'error'
				}];
			}

			$scope.alerts = [{
				msg: response,
				type: 'success'
			}];
			reset();
			$scope.getuser();
		});
	};

	$scope.delete = function(id) {
		api.delete('user', id, false, function(err, response) {
			if (err || response.error) {
				$scope.alerts = [{
					msg: response.userMessage || 'Server error! Are you connected to the internet?.',
					type: 'error'
				}];
			}
			$scope.getuser();
		});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
});