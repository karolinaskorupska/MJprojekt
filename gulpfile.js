var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task("sass", function () {
  return gulp
    .src("./scss/main.scss")
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("./css"));
});
//imqages
gulp.task('images', function(){
    return gulp.src('assets/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
        interlaced:true
    })))
    .pipe(gulp.dest('dist/images'))
  });

// Gulp watch syntax
gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.series("sass","images"));
});


