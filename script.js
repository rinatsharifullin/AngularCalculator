$(document).ready(function(){
	console.log('ready');

	let btns = document.querySelectorAll('.btn')
		for (btn of btns) {
			btn.addEventListener('click',function() {
				this.classList.add('animate')
				this.classList.add('resetappearanim')
			})
			btn.addEventListener('animationend',function() {
				this.classList.remove('animate')
			})
		}
});

var calculation='';
var tempResult='';

(function(){
    'use strict';
    angular.module("Calc",[]).controller("contr", function($scope, $log){
		$scope.clear = function() {
			calculation = '';
			tempResult = '';
			$scope.calculation = '';
			$scope.tempResult = '';
		};

		$scope.append = function(value){
			$scope.calculation = calculation += value.toString();
			$scope.getResult();
		};

		$scope.getResult = function() {
			if(calculation != ''){
				if(!isNaN(calculation.slice(-1)))
					$scope.tempResult = Math.round((eval(calculation) + Number.EPSILON) * 100) / 100;
				else
				$scope.tempResult = Math.round((eval(calculation.slice(0, -1)) + Number.EPSILON) * 100) / 100;
			}
		};
		
    });
})();