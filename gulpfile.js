'use strict'

var gulp = require('gulp')

var sass = require('gulp-sass')

var puglint = require('gulp-pug-lint')

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass'])
})

gulp.task('jade', function () {
  return gulp
     .src('views/**/.jade')
     .pipe(puglint())
})

gulp.task('jade:watch', function () {
  gulp.watch('./views/**/*.jade', ['jade'])
})

gulp.task('default', ['sass', 'jade', 'sass:watch', 'jade:watch'])
