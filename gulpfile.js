const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});