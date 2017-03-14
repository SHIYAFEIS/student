var gulp=require("gulp"),
    server=require("gulp-webserver"),
    sass=require("gulp-sass");
gulp.task("sass",function(){
    gulp.src('./css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest("./css"))
})
gulp.task("server",function(){
    gulp.src("./")
        .pipe(server({
            open:"index.html",
            livereload:true
        }))
})
gulp.task("default",["sass","server"])