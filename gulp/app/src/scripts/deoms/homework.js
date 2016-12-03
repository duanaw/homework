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
    $scope.title=[
        {
            id:0, title:"FirstName"
        },{
            id:1, title:"LastName"
        },{
            id:2, title:"Gender"
        },{
            id:3, title:"Salary1"
        },{
            id:4, title:"Salary"
        },{
            id:5, title:"Birthday"
        }];

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

    $scope.index=0;
    $scope.oder=false;
    //点击
    $scope.oncl=function(x,i,value){
        $scope.addname=x;
        if($scope.index==value.id){
            $scope.oder=!$scope.oder;
        }else{
            $scope.oder=false;
        }
        $scope.index=i;
    };
//排序
    $scope.auto=function(){
        if(!$scope.oder){
            return "-"+$scope.addname
        }else{
            return $scope.addname
        }
    };
    //显示隐藏
    $scope.cl=function(x){
        return this.addname===x;
    };
}])



