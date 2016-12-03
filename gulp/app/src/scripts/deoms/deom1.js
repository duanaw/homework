//定义一myApp模块,没有[]表示获取模块
angular.module("myApp",[])
.controller("demo",["$scope",function($scope){
    var user=[
        {
            user:"marry",
            email:"marry@xinlang.com"
        },
        {
            user:"lili",
            email:"lili@xinlang.com"
        }
]
    $scope.user=user;
    $scope.isShow=true;  //把他暴露出去  如果是false的话就隐藏
    //$scope.name="请输入您的用户名"  //设置默认
    $scope.counter=0;
    $scope.add=function(){
        this.counter++;
    }
    //所学课程
  $scope.items=[];
    //添加课程
    $scope.addItem=function(event){
        if(event.keyCode =="13"){
            //this.items.unshift(this.item)
            $scope.items.unshift($scope.item)
            console.log($scope.items);
            $scope.item="";
        }
    }
    $scope.limit=5;
    $scope.books=[  //publite是否出版
        {
            name:"Javascript高级程序设计",ishas:false,publite:false,updated:1450590935442
        },
        {
            name:"Angular权威指南",ishas:true,publite:true,updated:1470590935442
        },
        {
            name:"Vue实战",ishas:true,publite:false,updated:1480590935442
        },
        {
            name:"Nodejs开发",publite:true,ishas:false,updated:1460590935432
        },
        {
            name:"模块化开发",publite:true,ishas:true,updated:1490590935432
        }
    ]
    $scope.price=199.88;
}]);