var del = require("del");
var gulp = require('gulp');
var sass = require('gulp-sass');
var size = require('gulp-size');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var purgecss = require('gulp-css-purge');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require("gulp-sourcemaps");


var inputPaths = {
  scss: "./assets/sass/**/*.scss",
  css: "./assets/css/*.css",
};
var outputPaths = {
  dist: "./dist/",
  css: "./assets/css",
  delcss: "./assets/css/*",
  nonmin: "!./assets/css/*.min.js",
};
var delPaths = {
  css: "./assets/css/*",
  css_non_min: "!./assets/css/*.min.css",
};


gulp.task('clean:styles', del.bind(null, [delPaths.css]));
gulp.task('clean:non-min-styles', ['sass', 'purgecss'], del.bind(null, [delPaths.css, delPaths.css_non_min]));

gulp.task('sass', ['clean:styles'], function() {
  return gulp.src([inputPaths.scss])
    .pipe(sass())
    .pipe(gulp.dest(outputPaths.css))
    .pipe(size({ title: "Info     'sass'" }));
});

gulp.task('purgecss', ['clean:styles', 'sass'], function() {
  return gulp.src([inputPaths.css])
    // .pipe(concat('main.css'))
    // .pipe(purgecss({
    //   trim: true,
    //   shorten: true,
    //   verbose: false
    // }))
    .pipe(minifyCSS({
      keepSpecialComments: 0,
      removeEmpty: true,
      keepBreaks : false
    }))
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest(outputPaths.css))
    .pipe(size({ title: "Info     'purgecss'" }));
})


gulp.task('build-watch', function() {
   gulp.watch([[inputPaths.scss]], ['sass']);
});



gulp.task('build', ['clean:styles', 'sass', 'purgecss', 'clean:non-min-styles'], function() {});
gulp.task('default', ['build'], function() {});