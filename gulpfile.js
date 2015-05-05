// Include Gulp

var gulp = require('gulp');


// Include Plugins

var jshint = require('gulp-jshint');
var uglify = require('gulp-ulgify');
var sass = require('gulp-ruby-sass');


// Lint task

gulp.task('lint', function(){

	return gulp.src('/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));

});

// Watch files for changes

gulp.task('watch', function(){

	gulp.watch('src/js/*.js', ['lint', 'scripts']);
	gulp.watch('src/sass/*.scss', ['sass']);

});


// Minify and move JS files

gulp.task('scripts', function(){

	return gulp.src([
		'src/js/*.js', 
		'node_modules/requirejs/require.js',
		'node_modules/responsive-nav/responsive-nav.js',
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'))
		])
});

//Compass SASS

gulp.task('sass', function(){

	return gulp.src('src/sass/styles.scss')
		.pipe(sass({
		compass:true,
		style:'compressed'
	}))

	.on('error', function (err) {console.log(err.message); })
	.pipe(gulp.dest('assets/css'))

});

// Default task

gulp.task('default', ['link', 'scripts', 'sass', 'watch']);









