const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function (done) {
  browserSync.init({
    server: {
      baseDir: './src'
    },
    port: 3000
  });
  gulp.watch('./**/*').on('change', browserSync.reload);
  done();
})
