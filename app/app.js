angular.module('app',[])
	.controller('AppController', ['$scope', function($scope){
		$scope.init = function(){
			$scope.media1 = 0
			$scope.media2 = 0
			$scope.media3 = 0
		}

		$scope.limpar = function(){
			$scope.init()			
			$scope.resultadoFinal = 0
			$scope.resultado = 0
		}

		$scope.calcular1 = function(){
			$scope.media2 = ((21 - $scope.media1)/2) > 10 ? 10 : ((21 - $scope.media1)/2)
			$scope.media3 = ((21 - $scope.media1)/2) > 10 ? 10 : ((21 - $scope.media1)/2)	
			$scope.notaFinal = 15-((($scope.media1 + $scope.media2 + $scope.media3)/3)*2)

			calcularResultado();
		}

		$scope.calcular2 = function(){
			$scope.media3 = (21 - $scope.media2 - $scope.media1) > 10 ? 10 : (21 - $scope.media2 - $scope.media1)
			$scope.notaFinal = 15-((($scope.media1 + $scope.media2 + $scope.media3)/3)*2)
			
			calcularResultado();
		}

		$scope.calcular3 = function(){
			$scope.notaFinal = 15-((($scope.media1 + $scope.media2 + $scope.media3)/3)*2)

			calcularResultado();
		}

		$scope.calculaResultado = function (){
			calcularResultado();
		}

		function calcularResultado(){
			$scope.resultado = ($scope.media1 + $scope.media2 + $scope.media3)/3
			$scope.resultadoFinal = (((($scope.media1 + $scope.media2 + $scope.media3)/3)*2)+$scope.notaFinal)/3
		}

	}])