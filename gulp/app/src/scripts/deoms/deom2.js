angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
    var fiends=[
        {
            name:"marry",
            phone:"13453582367"
        },
        {
            name:"lili",
            phone:"18811752407"
        },
        {
            name:"kitty",
            phone:"15935552695"
        }
        ,
        {
            name:"any",
            phone:"13452346789"
        }
    ];
    $scope.fiends = fiends;
    $scope.searchText="";


    $scope.search=function(obj){
       if($scope.searchText!=""){
            if(obj.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 || obj.phone.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1){
               return true;
            }else{
                return false;
            }
       }else{
           return true;
       }
    }
}]);

//promise
//jQuery中有一个deferred对象

$.ajax("../mock/data.json")
.done(function(data){
   console.log(data)
})
.fail(function(){
    console.log("执行失败")
})
    .done(function(){ //指定同一操作的多个回调函数
        console.log("done")
    })

//$.when 参数为ajax的时候 只要请求成功后就执行.done这个函数返回一个deferred对象
$.when($.ajax("../mock/data.json"),$.ajax("../mock/data1.json"))
    .done(function(data1,data2){  //有一个错的就执行失败
        console.log("执行成功")
    })
    .fail(function(){
        console.log("执行失败")
    })

var dtd=$.Deferred() //创建了一个deferred对象
var wait=function(){   //普通函数
    var task=function(){
        alert("hello")
    }
    setTimeout(task,2000) //有一个延时他不管了
    return dtd;
}


$.when(wait()) //wait()没有返回一个deferred对象
    .done(function(){
        alert("ok");   //如果不手改动 他执行的顺序是先执行 .done这个函数再执行wait()这个函数
    })
    .fail(function(){
        alert("error");
    })


