function Animatn(name,type){
    this.name=name;
    this.type=type;
}
Animatn.prototype.show=function(){
    alert("我是"+this.name)
}

Animatn.prototype.show1=function(){
    alert("我是"+this.name)
}
var cat=new Animatn("wang",cat);
var dog=new Animatn("xiao",dog);