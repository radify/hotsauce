var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

var paths = {
  less: ['public/less/*.less', 'public/src/**/**.less'],
  css: 'public/css',
  build: 'index.css'
};

gulp.task('less', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(concat(paths.build))
    .pipe(gulp.dest(paths.css))
    .pipe(livereload({ start: true }));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['less', 'watch']);
