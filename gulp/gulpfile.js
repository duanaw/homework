//引入gulp
var gulp=require("gulp");
//引入合并插件
var concat=require("gulp-concat");
//引入压缩插件
var uglify=require("gulp-uglify");
//引入启动服务
var webserver=require("gulp-webserver");
//引入sass编译
var sass=require("gulp-sass");
//引入gulp-webpack   js模块
var webpack=require("gulp-webpack");
//引入named插件
var named=require("vinyl-named");
//引入minify压缩css
var minify=require("gulp-minify-css");
//引入版本控制插件 加密
var rev=require("gulp-rev");
//引入自动替换文件名
var revCollecotr=require("gulp-rev-collector");
//引入url
var url=require("url");
//引入fs
var fs=require("fs")
//构建一个拷贝文件任务
gulp.task("copy-index",function(){  //copy-index任务名
    gulp.src("./index.html") //你要找谁就写谁的路径
        .pipe(gulp.dest("./app")) //目标路径
})

//构建合并文件的文件
gulp.task("concat",function(){
    gulp.src(["./app/src/scripts/lib/scripts1.js","./app/src/scripts/lib/scripts2.js"])
        .pipe(concat("script.js"))//合并成的那个文件夹名写到里面
        .pipe(gulp.dest("./app/dist"))//目标路径
})



//构建压缩任务
gulp.task("uglify",function(){
    gulp.src("./app/src/scripts/lib/iscroll.js")  //你要压缩谁就写谁的路径
        .pipe(uglify())
        .pipe(gulp.dest("./app/dist"))//压缩到哪里目标
})


//启动服务
gulp.task("webserver",function(){  //好处就是只要保存浏览自动刷新
    gulp.src("./")
        .pipe(webserver({
            port:8090,
            livereload:true,//页面保存浏览器自动刷新
            directoryListing:{  //目录结构的配置
                enable:true, //显示目录
                path:"./" //显示具体路径下的目录
            },
            //mock数据
            middleware:function(req,res,next){
              var urlObj=url.parse(req.url,true);
                switch(urlObj.pathname){
                    case '/api/getLivelist.php':
                        res.setHeader("Content-type","application/json");
                        fs.readFile('./mock/data.json','utf-8',function(err,data){
                            res.end(data);
                        });
                        return;
                    case '/api/getLivelistmore.php':
                        res.setHeader("Content-type","application/json");
                        fs.readFile("./mock/data1.json","utf-8",function(err,data){
                            res.end(data);
                        });
                        return;
                }
                next();
            }
        }));
})

//编译sass
var sassFiles=["./app/src/styles/**/*.scss"]  //我在src下的styles下的任意一个文件夹下的任意一个带有后缀的scss
gulp.task("sass",function(){
    console.log("done")
    gulp.src(sassFiles)
        .pipe(sass()) //执行sass模块
        .pipe(minify()) //压缩代码
        .pipe(gulp.dest("./app/prd/styles")) //目标路径 也就说编译完放在哪里
})


//编译css  //不需要任何模块
var cssFiles=["./app/src/styles/*.css"];
gulp.task("css",function(){
    gulp.src(cssFiles)
        .pipe(minify())
        .pipe(gulp.dest("./app/prd/styles"))
});


//实现js模块化
var jsFiles=["./app/src/scripts/app.js"];
gulp.task("packjs",function(){
    gulp.src(jsFiles)
        .pipe(named())
        .pipe(webpack({
            output:{
                filename:'[name].js'
            },
            module:{
                        test:/\.js$/,
                        loader:'imports?define=>false'
            }
        }))
        .pipe(uglify().on("error",function(e){
            console.log("\x07",e.lineNumber,e.message);
            return  this.end();
        }))
        .pipe(gulp.dest("./app/prd/scripts"))
})

//版本控制
var cssDistFiles=["./app/prd/styles/app.css"];
var jsDistFiles=["./app/prd/scripts/app.js"];
gulp.task("ver",function(){
    gulp.src(cssDistFiles)
        .pipe(rev())  //生成name-md5文件
        .pipe(gulp.dest("./app/prd/styles"))
        .pipe(rev.manifest()) //生成json
        .pipe(gulp.dest("./app/ver/styles"))
   gulp.src(jsDistFiles)
        .pipe(rev())//生成name-md5文件
        .pipe(gulp.dest("./app/prd/scripts"))
        .pipe(rev.manifest()) //生成json
        .pipe(gulp.dest("./app/ver/scripts"))

})


//让html文件自动将入口文件的文件名替换为md5加密
gulp.task("html",function(){
    gulp.src(["./app/ver/**/*.json","./app/*.html"])
        .pipe(revCollecotr())
        .pipe(gulp.dest("./app"))
})
gulp.task("min",["ver","html"]);
//构建检测任务
gulp.task("watch",function(){
    gulp.watch("./index.html",["copy-index"])  //当我index.html发生任何变化的时候都要执行copy-index
    //gulp.watch("./app/src/scripts/*.js",["concat"])
    gulp.watch(sassFiles,["sass"]);
    gulp.watch(cssFiles,["css"]);
    gulp.watch("./app/src/scripts/**/*.js",["packjs"]);
})

//设置默认操作
gulp.task("default",["watch","uglify","webserver"]) //你执行gulp的时候他默认就

