const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const standard = require('gulp-standard')
const shell = require('gulp-shell')
const del = require('del');
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const path = require('path')
const connect = require('gulp-connect');
const mocha = require('gulp-mocha');
const create = require('gulp-cordova-create');
const ios = require('gulp-cordova-build-ios');

const ENV = process.env.ENV || 'development';
const LOCALE = process.env.LOCALE || 'en'
const PORT = process.env.PORT || 8080 ;

/* move static files */
gulp.task('collect', function(){
  gulp.src('./src/**/*.html').pipe(gulp.dest('./static'));
  gulp.src('./src/styles/fonts/*.*').pipe(gulp.dest('./static/styles/fonts'));
  gulp.src('./src/styles/img/*.*').pipe(gulp.dest('./static/styles/img'));
});

/* styles task*/
gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static'))
});

/* webpack task */
gulp.task("compile", function(callback) {
  if(ENV === 'production'){
    webpackConfig.debug = false;
    delete webpackConfig.devtool
  }
  webpack(webpackConfig, function(err, stats) {
      if(err)
        throw new gutil.PluginError("webpack-compile", err);

      gutil.log("[webpack-compile]", stats.toString({}));
      if(callback)
        callback();
  });
});

/* gulp connect */
gulp.task('serve', function() {
  connect.server({
    name: 'Cordova Starter App',
    port: PORT,
    root: path.join(__dirname, './static'),
    livereload: true
  });
});

/* gulp clean */
gulp.task('clean', function(){
  del.sync(['./static', './www', './cordova'])
});

gulp.task('clean-full', function(){
  del.sync(['./node_modules', './static', './www', './cordova'])
});

/* gulp test */
gulp.task('test', function() {
  return gulp.src(['./tests/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }));
});

/* gulp standard */
gulp.task('standard', function() {
  return gulp.src(['./src/*.js', './tests/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {}))
});

gulp.task('default', ['collect', 'styles', 'compile']);

//Watch task
gulp.task('develop', ['serve'], function() {
    gulp.watch('./src/**/*.*', ['collect', 'styles', 'compile']);
});

gulp.task('cordova', ['clean', 'collect', 'styles', 'compile'], function(){
  gulp.src('./static').pipe(create({dir: './cordova'}));
  gulp.src('./config.xml').pipe(gulp.dest('./cordova'));
});

gulp.task('build-android', ['cordova'], function(){

});

gulp.task('build-ios', ['cordova'], function(){

});
