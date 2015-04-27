'use strict';

describe("Statistics Controller", function() {
    beforeEach(module('FantasyAdventureSheet'));

	var $scope,
		$controller;

	beforeEach(inject(function(_$controller_){

	   $scope = {};
	   function buildController(){
	   		// TODO: Rename HomeController to StatisticsController
	   		return _$controller_('HomeController', { $scope: $scope });
	   };

	   $controller = buildController();
	}));

    afterEach(function() {
    });

	describe('Statistics List', function() {
	  it('has 3 items', function() {

	    expect($scope.statistics.length).toEqual(3);
	  });

	  it('has statistics named: skill, stamina & luck (in that order)', function(){

	  	expect($scope.statistics[0].name).toEqual('Skill');
	  	expect($scope.statistics[1].name).toEqual('Stamina');
	  	expect($scope.statistics[2].name).toEqual('Luck');
	  });
	});
});
