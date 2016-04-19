var gulp = require('gulp');

// plugins
var path = require('path'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    browserSync = require('browser-sync');

// error log
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// ### TASKS ###################

// browser sync task
gulp.task('browser-sync', ['scripts', 'styles'], function () {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

// scripts task
gulp.task('scripts', function() {
  gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(uglify())
  .on('error', errorLog)
  .pipe(gulp.dest('js/build'))
  .pipe(browserSync.reload({stream: true}));
});

// styles task
gulp.task('styles', function() {
  return gulp.src('./styl/*.styl')
  .pipe(stylus({
		use: [autoprefixer('last 5 versions')]
  }))
  .on('error', errorLog)
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.reload({stream: true}));
});

// html task
gulp.task('html', function() {
  return gulp.src('./*.html')
  .pipe(browserSync.reload({stream: true}));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('js/*', ['scripts']);
  gulp.watch('styl/**/*', ['styles']);
  gulp.watch('*.html', ['html']);
});

// default task
gulp.task('default', ['browser-sync', 'watch']);
