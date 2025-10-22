const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

function sassTask() {
  return src('./assets/css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(dest('./assets/css'));
}

function renameFileTask() {
  return src('./assets/css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(dest('./assets/css'));
}

exports.default = function () {
  watch('./assets/css/sass/**/*.scss', series(sassTask, renameFileTask));
};
