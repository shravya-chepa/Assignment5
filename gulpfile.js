var { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass')(require('sass')); 

function css() {
    return src('src/**/*.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(dest('dist/css')); 
}

function watchFiles() {
    watch('src/**/*.scss', css); 
    watch('src/modules/**/*.scss', css); 
}

exports.default = series(css, watchFiles);
