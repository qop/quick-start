'use strict';
var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('style', function(){
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['style']);

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['style']);
});