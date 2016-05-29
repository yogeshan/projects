testApp.controller('ModalCtrl', function ($scope, $uibModal, $log, $http, $stateParams,$state) {
	console.log($stateParams);
	$scope.downloadDone = false;
	
	var path='root/data.json'
	if($stateParams.path){
		path='root/'+$stateParams.path+'/data.json'
	}
	
	$http.get(path)
	   .then(function(res){
		  $scope.data = res.data;  
			if($stateParams.path){
				$scope.data.currentPath = $stateParams.path;
			}

		  $scope.downloadDone = true;				  
	},function(data){
		//Handle error
		console.log('Page 404 occured');
		$scope.downloadDone = true;
	});


  $scope.animationsEnabled = true;
  
  $scope.open = function (btn) {
	var size;
	$scope.data.currentButton=btn;
	
	$scope.data.exactPath=$scope.data.buttonsConfig[btn].modalConfig.FolderLink;
	
	if($scope.data.currentPath){
		$scope.data.exactPath = $scope.data.currentPath + '/' + $scope.data.buttonsConfig[btn].modalConfig.FolderLink;	
	}
	
    
	var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
		data: function(){
		  return $scope.data;
		},
		//state:function(){
		 // return $state;
		//}
      }
    });

  };

  
});

testApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $state, $location, data) {
	$scope.data = data;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
	$scope.navi = function () {
		$uibModalInstance.dismiss('cancel');
		
		//$state.go('pathState', {path: $scope.data.exactPath});
		$location.path('/root/' + $scope.data.exactPath);
	};
});