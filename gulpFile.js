var gulp = require('gulp');
var del = require("del");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


var inputPaths = {
  scss: "./assets/sass/**/*.scss",
};
var outputPaths = {
  dist: "./dist/",
  css: "./assets/css",
};


gulp.task('sass', function(){
  return gulp.src([inputPaths.scss])
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(outputPaths.css))
});



gulp.task('build-watch', function() {
   gulp.watch([[inputPaths.scss]], ['sass']);
});



gulp.task('build', ['sass'], function() {});