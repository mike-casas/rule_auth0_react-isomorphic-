var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var streamify = require('gulp-streamify');


// Get one .styl file and render
gulp.task('stylus', function () {
  return gulp.src('./stylus/styles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public'));
});

// Include css
/*// Stylus has an awkward and perplexing 'include css' option
gulp.task('include-css', function() {
  return gulp.src('./public/libraries/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./public/stylesheets/css'));

});
*/
/*gulp.task('js', function(){
    browserify('./components/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

*/

//gulp.task('watch', function() {
  //  gulp.watch("./components/**/*.jsx", ["js"])
//})
gulp.task('default', ['stylus']);
