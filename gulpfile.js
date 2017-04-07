const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sassdoc = require('sassdoc');

var inputFolder = 'scss/';
var input = inputFolder + 'dm.scss';
var output = 'dist';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
  cascade: false
}

const sassdocOptions = {
  dest: output + '/sassdoc'
};

gulp.task('sass', () =>
  gulp.src(input)
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
);

gulp.task('sassdoc', function () {
  return gulp
    .src(inputFolder + '/**')
    .pipe(sassdoc(sassdocOptions))
    .resume();
});

gulp.task('watch', function () {
  return gulp
    .watch(inputFolder + '/**', ['sass'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch']);