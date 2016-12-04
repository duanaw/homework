angular.module("myApp",[])
.controller("homes",["$scope",function($scope){
    var search=[
        {
            FirstName:"FANG",
            LastName:"vane",
            Gender:"Male",
            Salary1:"12,333.50",
            Salary:"12,333.5",
            Birthday:new Date("2007-07-11")

        },
        {
            FirstName:"SARA",
            LastName:"rose",
            Gender:"Female",
            Salary1:"23,334.23",
            Salary:"23,334.2",
            Birthday:new Date("1997-02-03")
        },
        {
            FirstName:"AAM",
            LastName:"hot",
            Gender:"Male",
            Salary1:"66,880.50",
            Salary:"66,880.5",
            Birthday:new Date("1986-03-04")
        }
        ,
        {
            FirstName:"MARK",
            LastName:"bear",
            Gender:"Male",
            Salary1:"68,000.00",
            Salary:"68,000.0",
            Birthday:new Date("1968-03-22")
        }
    ];
  /*  $scope.title=[
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
        }];*/

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
/*
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
 };*/
$scope.sortColum="FirstName"; //默认按照FirstName排序字段
 $scope.reverseSort=false;//默认的排序方式为升序
    //设置字段排序
    $scope.setSort=function(column){  // column就是前面的值传过来字段
        //如果传递过来的排序字段和当前字段一致，则要降序 否则升序
        $scope.reverseSort=$scope.sortColum==column?!$scope.reverseSort:false;
        //如果传递过来的排序字段和当前字段一致那么$scope.reverseSort就取他的相反的值，否则升序就是他原来默认的值
        $scope.sortColum=column;  //点哪个让那个排序
    }
    //设置类
    $scope.getClass=function(x){
        if($scope.sortColum==x){
            return $scope.reverseSort?"down":"up";
            //判断$scope.reverseSort为真的话就降序否则就升序
        }

    }
}])



