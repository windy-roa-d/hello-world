var gulp = require('gulp');

//default task
gulp.task('default',function(){
  console.log('Hello World!');
});

//named task
gulp.task('mytask',function(){
  console.log('Hello Windy World!');
});

gulp.task('sass',function(){
  return gulp.src('pages/scss/style.scss') //source-files
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('pages/css'))//destination
});