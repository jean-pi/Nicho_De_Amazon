import cachebust from 'gulp-cache-bust'


gulp.task('cache', () => {
    trago . src ( ' ./public/*/*.html ' )
    . pipe ( cachebust ( {
        tipo : ' marca de tiempo ' 
    } ) )
    . tubería ( trago . dest ( ' ./public ' ) ) ;
})
