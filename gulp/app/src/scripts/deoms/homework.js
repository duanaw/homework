angular.module("myApp",[])
.controller("homes",["$scope",function($scope){
    var search=[
        {
            FirstName:"FANG",
            LastName:"vane",
            Gender:"Male",
            Salary1:"12,333.50",
            Salary:"￥12,333.5",
            Birthday:"2007-07-11"

        },
        {
            FirstName:"SARA",
            LastName:"rose",
            Gender:"Female",
            Salary1:"232,334.23",
            Salary:"￥232,334.2",
            Birthday:"1997-02-03"
        },
        {
            FirstName:"AAM",
            LastName:"hot",
            Gender:"Male",
            Salary1:"66,880.50",
            Salary:"￥66,880.5",
            Birthday:"1986-03-04"
        }
        ,
        {
            FirstName:"MARK",
            LastName:"bear",
            Gender:"Male",
            Salary1:"68,000.00",
            Salary:"￥68,000.0",
            Birthday:"1968-03-22"
        }
    ];
    $scope.search = search;
    $scope.searchText="";
    $scope.searchTxt="";
    $scope.seaFirst=function(obj){
       if($scope.searchText!=""){
            if(obj.FirstName.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1){
                return true;
            }else{
                return false;
            }
       }else{
           return true;
       }
    }
    $scope.seaLast=function(obj){
        if($scope.searchTxt!=""){
            if(obj.LastName.toLowerCase().indexOf($scope.searchTxt.toLowerCase())!=-1){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
    $scope.ishide=false;
    $scope.title = 'FirstName';
    $scope.desc = 0;
    $scope.add=function(){

    }
}])