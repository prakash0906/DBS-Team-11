var mymodal = angular.module('mymodal', []);


mymodal.controller('MainCtrl', function ($scope,$http,$log,myService,myFactory) {
  
  $scope.initAll=function(){
  $scope.position={};
  $scope.userInfo={};
  $scope.defaultImage="./public/image/default_hotel.jpg";
  $scope.items =myFactory.getItems();
  $scope.allLocation = myFactory.getLocation();
  $scope.allCategory = myFactory.getCategory();
  $scope.searchBy={
    location:'',
    category:[],
    subcategory:[]
  };

//1: Asc
  $scope.orderBy={
     subcategory:1,
     ratting:1,
     name:1,
     price:1
  };

  $scope.filterBy={
    category:'',
    ratting:'',
  };
  $scope.selectedVenu={};
    $scope.showSignUpModal = false;
    $scope.showSignInModal =false;
    $scope.venue=false;
    $scope.buttonClicked = "";
  $scope.view="page1";
  $scope.baseUrl=myFactory.getBaseUrl();
  };


$scope.initAll();
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = {latitude: position.coords.latitude,
          longitude: position.coords.longitude
        
      };
      });
    });
  }

$scope.venueShow= function(item){
  $scope.venue=true;
  $scope.selectedVenu =item;

};

$scope.venuRattingChange =function(){
  if($scope.selectedVenu.ratting<1){
    $scope.selectedVenu.ratting=1;
  }
    if($scope.selectedVenu.ratting >10){
    $scope.selectedVenu.ratting=10;
  }
}
$scope.addCategory=function(id){
  var index=$scope.searchBy.category.indexOf(id);
  if($scope.searchBy.category.indexOf(id)!=-1){
  $scope.searchBy.category.splice(index,1);
  }else{
    $scope.searchBy.category.push(id);
  }
};

$scope.orderByResult=function(){
    myService.getFilterData('category',null,$scope.allCategory,$scope.items).sort(function(data1,data2){
              if($scope.orderBy.name ==1){
                return data1.name>data2.name;
              }else{
                 return data1.name<data2.name;
              }
    });
};
$scope.filterResult=function(){

};

$scope.findCategory=function(id){
  return $scope.searchBy.category.indexOf(id)!=-1;
};
  $scope.filterResult=function(id){

//$scope. $scope.items  =myService.getFilterData('category',id,$scope.allCategory,$scope.items);
  };

    $scope.searchResult=function(){
debugger;
console.log($scope.searchBy);

    }
    $scope.toggleModal = function(btnClicked){
        $scope.buttonClicked = btnClicked;
        switch(btnClicked){
        case 'signup':  $scope.showSignUpModal = !$scope.showSignUpModal;
        break;
         case 'signin':  $scope.showSignInModal = !$scope.showSignInModal;
        break;
        case 'venue':$scope.venue=false;
         break;

        }
    };
        $scope.submit = function(valueType){

 
      var req = {
 method: 'POST',
 url: $scope.baseUrl+'userDetails',
 headers: {
   'Content-Type': undefined
 },
 data: JSON.stringify($scope.userInfo)
};

console.log( $scope.selectedVenu);
$http(req).then(function(response){
debugger;
    var data=response.data;
	$log.info(response);
	if(response.status ===200 && data !=null && data!=undefined){
  
console.log(data);
        //$scope.userInfo={};
      

    }else{
    console.log("Failure ",data,response.status);

    }
   }, function(data){

  
   });


                     switch(valueType){
        case 'signup':  
        $scope.view="page2";
        break;
         case 'signin':
         $scope.view="page2";
        break;
 case 'venue':
 $scope.selectedVenu={};
  $scope.view="page1";
         break;
      }

             $scope.showSignUpModal =false;
         $scope.showSignInModal = false;
     $scope.venue=false;
    };

  });




