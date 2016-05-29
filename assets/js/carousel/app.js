var testApp=angular.module('testApp', ['ui.bootstrap','ui.router']);


testApp.config(function($stateProvider, $urlRouterProvider) {
  
  
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/root");
  //
  
  $stateProvider.state('root', {
      url: "/root",
	  templateUrl: "content.html"
    }).state('pathState', {
        url: "/root/{path:.*}",
        templateUrl: 'content.html',
        //controller: 'ModalCtrl'
    });
  
  /*
  // Now set up the states
  $stateProvider.state('root', {
      url: "/root",
	  templateUrl: "content.html",
	  controller: function($scope,$http) {
		$scope.name = 'Priya';  
		$scope.downloadDone = false;
		$http.get('root/data.json')
		   .then(function(res){
			  $scope.data = res.data; 
			  $scope.downloadDone = true;			  
		   });
	  }
      
    }).state('pathState', {
        url: "/root/{path:.*}",
        templateUrl: 'content.html',
        controller: function ($scope,$http,$stateParams) {
			console.log($stateParams);
			$scope.name = 'Yogi';
            $scope.downloadDone = false;
			
			$http.get('root/'+$stateParams.path+'/data.json')
			   .then(function(res){
				  $scope.data = res.data;  
				  
				  $scope.data.currentPath = $stateParams.path;
				  $scope.downloadDone = true;				  
			},function(data){
				//Handle error
				console.log('Page 404 occured');
				$scope.downloadDone = true;
			});
        }
    });
	
	*/
	
  
  
});

testApp.run(['$urlMatcherFactory',
    function($urlMatcherFactory) {
      
	  
function valToString(val) { return val != null ? val.toString() : val; }
function valFromString(val) { return val != null ? val.toString() : val; }
function regexpMatches(val) { /*jshint validthis:true */ return this.pattern.test(val); }
$urlMatcherFactory.type("MyType", {
  encode: valToString,
  decode: valFromString,
  is: regexpMatches,
  pattern: /[^/]+\/[^/]+/
});
      
    }
  ]);
