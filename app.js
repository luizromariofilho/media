angular.module('app',[])
	.controller('AppController', ['$scope', function($scope){
		$scope.init = function(){
			$scope.media1 = 0
			$scope.media2 = 0
			$scope.media3 = 0
		}

		$scope.$watch(function(scope) {
			return scope.media1 
		},
          	function(newValue, oldValue) {
            	$scope.media2 = ((21 - newValue)/2) > 10 ? 10 : ((21 - newValue)/2)
				$scope.media3 = ((21 - newValue)/2) > 10 ? 10 : ((21 - newValue)/2)
          	}
        );

        $scope.$watch(function(scope) {
			return scope.media2 
		},
          	function(newValue, oldValue) {
				$scope.media3 = (21 - newValue - $scope.media1) > 10 ? 10 : (21 - newValue - $scope.media1)
          	}
        );

        $scope.$watch(function(scope) {
			return scope.media3 
		},
          	function(newValue, oldValue) {
				$scope.final = 15-((($scope.media1 + $scope.media2 + $scope.media3)/3)*2)
          	}
        );
	}])