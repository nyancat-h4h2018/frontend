/*
  Modules
*/
const bootstrap = require('bootstrap/package.json');
const browserify = require('browserify');
const flatten = require('gulp-flatten')
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
const component_src_folder = 'src/component';
const component_dest_folder = 'web/component';
const controller_src_folder = 'src/controller';
const html_src_folder = 'src/page';
const html_dest_folder = 'web';

/*
  Gulp Tasks
*/
gulp.task('build', gulp.parallel(compile, style, bundle, getComponent));

gulp.task('default', gulp.series('build', watch));

/*
  Functions
*/
function compile() {
  return gulp.src('./' + html_src_folder + '/**/*.html')
             .pipe(gulp.dest('./' + html_dest_folder));
}

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

function getComponent() {
  return gulp.src('./' + component_src_folder + '/**/*.html')
             .pipe(flatten())
             .pipe(gulp.dest(component_dest_folder));
}

function watch() {
  gulp.watch('./' + html_src_folder + '/**/*.html').on('all', gulp.series(compile));
  gulp.watch('./' + bundle_file).on('all', gulp.series(bundle));
  gulp.watch('./' + component_src_folder + '/**/*.html').on('all', gulp.series(getComponent));
  gulp.watch('./' + component_src_folder + '/**/*.js').on('all', gulp.series(bundle));
  gulp.watch('./' + controller_src_folder + '/**/*.js').on('all', gulp.series(bundle));
  gulp.watch('./' + scss_folder + '/**/*.scss').on('all', gulp.series(style));
}
