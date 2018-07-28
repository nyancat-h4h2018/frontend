/*
  Modules
*/
const bootstrap = require('bootstrap/package.json');
const browserify = require('browserify');
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');

/*
  Settings
*/
const bundle_file = 'src/bundle.js';
const css_folder = 'web/css';
const js_folder = 'web/js';
const scss_folder = 'src/scss';

/*
  Gulp Tasks
*/
gulp.task('build', gulp.parallel(style, bundle));

gulp.task('default', gulp.series('build', watch));

/*
  Functions
*/
function style() {
  var bootstrapSrc = "./node_modules" + bootstrap._location + "/scss";
  return gulp.src('./' + scss_folder + '/**/*.scss')
            .pipe(sass({includePaths: [bootstrapSrc]}).on('error', sass.logError))
            .pipe(gulp.dest(css_folder));
}

function bundle() {
  return browserify(bundle_file)
         .bundle()
         .pipe(fs.createWriteStream(path.join(js_folder, 'bundle.js')));
}

function watch() {
  gulp.watch('./' + scss_folder + '/**/*.scss').on('all', gulp.series(style));
}
